#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import elasticlunr from 'elasticlunr'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Simple function to get slug from filename
function getSlugFromFilename(filename) {
  return filename.replace(/\.mdx?$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

// Read MDX frontmatter
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) return { frontmatter: {}, content: content.trim() }
  
  const frontmatterText = match[1]
  const body = match[2]
  
  // Simple YAML parser for basic frontmatter
  const frontmatter = {}
  const lines = frontmatterText.split('\n')
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue
    
    const key = line.substring(0, colonIndex).trim()
    let value = line.substring(colonIndex + 1).trim()
    
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    
    // Handle arrays (tags)
    if (key === 'tags' && value.startsWith('[')) {
      try {
        value = JSON.parse(value)
      } catch {
        value = []
      }
    }
    
    // Handle dates
    if (key === 'pubDate' || key === 'updatedDate') {
      value = new Date(value)
    }
    
    // Handle booleans
    if (value === 'true') value = true
    if (value === 'false') value = false
    
    frontmatter[key] = value
  }
  
  return { frontmatter, content: body.trim() }
}

async function buildSearchIndex() {
  try {
    console.log('🔍 Building search index...')
    
    // Create search index
    const index = elasticlunr(function() {
      this.addField('title')
      this.addField('description')
      this.addField('tags')
      this.addField('content')
      this.setRef('slug')
    })
    
    // Read posts from content directory
    const contentDir = join(__dirname, '..', 'src', 'content', 'posts')
    const files = readdirSync(contentDir).filter(file => file.endsWith('.mdx'))
    
    let count = 0
    
    for (const file of files) {
      try {
        const filePath = join(contentDir, file)
        const content = readFileSync(filePath, 'utf-8')
        const { frontmatter, content: body } = parseFrontmatter(content)
        
        // Skip draft posts
        if (frontmatter.draft) continue
        
        const slug = getSlugFromFilename(file)
        const cleanContent = body.replace(/<[^>]*>/g, '').replace(/#{1,6}\s+/g, '') // Strip HTML and headers
        
        index.addDoc({
          slug,
          title: frontmatter.title || '',
          description: frontmatter.description || '',
          tags: Array.isArray(frontmatter.tags) ? frontmatter.tags.join(' ') : '',
          content: cleanContent.substring(0, 1000), // Limit content length
        })
        
        count++
        console.log(`  ✓ Indexed: ${frontmatter.title || file}`)
      } catch (error) {
        console.warn(`  ⚠️  Skipped ${file}: ${error.message}`)
      }
    }
    
    const searchIndex = {
      index: index.toJSON(),
      count
    }
    
    // Write the search index to public directory
    const publicDir = join(__dirname, '..', 'dist', 'api')
    const indexPath = join(publicDir, 'search.json')
    
    // Ensure directory exists
    const fs = await import('fs')
    await fs.promises.mkdir(publicDir, { recursive: true })
    
    writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2))
    
    console.log('✅ Search index built successfully')
    console.log(`📁 Indexed ${count} posts`)
    console.log(`📁 Index saved to: ${indexPath}`)
  } catch (error) {
    console.error('❌ Error building search index:', error)
    process.exit(1)
  }
}

buildSearchIndex()
