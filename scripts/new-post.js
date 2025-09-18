#!/usr/bin/env node

import { writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Post template
const postTemplate = `---
title: "{{TITLE}}"
description: "{{DESCRIPTION}}"
pubDate: {{DATE}}
updatedDate: {{DATE}}
tags: [{{TAGS}}]
coverImage: "/images/covers/{{SLUG}}.jpg"
coverAlt: "{{COVER_ALT}}"
draft: false
canonical: "https://example.com/posts/{{SLUG}}"
---

# {{TITLE}}

Write your post content here...

## Section 1

Your content goes here.

## Section 2

More content...

---

*End of post*`

function createNewPost() {
  const args = process.argv.slice(2)
  
  if (args.length === 0) {
    console.log('Usage: node scripts/new-post.js "Post Title" [description] [tags]')
    console.log('Example: node scripts/new-post.js "My New Post" "A great post about something" "tech,web,astro"')
    process.exit(1)
  }

  const title = args[0]
  const description = args[1] || `A post about ${title.toLowerCase()}`
  const tags = args[2] ? args[2].split(',').map(t => `"${t.trim()}"`).join(', ') : '"general"'
  
  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()

  // Get current date
  const now = new Date()
  const date = now.toISOString().split('T')[0]
  
  // Generate filename
  const filename = `${date}-${slug}.mdx`
  const filepath = join(__dirname, '..', 'src', 'content', 'posts', filename)

  // Check if file already exists
  if (existsSync(filepath)) {
    console.log(`❌ Post already exists: ${filename}`)
    process.exit(1)
  }

  // Replace template placeholders
  const content = postTemplate
    .replace(/{{TITLE}}/g, title)
    .replace(/{{DESCRIPTION}}/g, description)
    .replace(/{{DATE}}/g, date)
    .replace(/{{TAGS}}/g, tags)
    .replace(/{{SLUG}}/g, slug)
    .replace(/{{COVER_ALT}}/g, `Cover image for ${title}`)

  // Write the file
  writeFileSync(filepath, content)

  console.log('✅ New post created!')
  console.log(`📁 File: ${filename}`)
  console.log(`📝 Title: ${title}`)
  console.log(`🏷️  Tags: ${tags}`)
  console.log(`🔗 URL: /posts/${slug}`)
  console.log('')
  console.log('Next steps:')
  console.log('1. Edit the post content in the file')
  console.log('2. Add a cover image to public/images/covers/')
  console.log('3. Run "pnpm dev" to preview')
  console.log('')
  console.log(`File location: ${filepath}`)

  // Try to open in editor (optional)
  try {
    const editor = process.env.EDITOR || 'code'
    execSync(`${editor} "${filepath}"`, { stdio: 'inherit' })
  } catch (error) {
    // Editor not available, that's fine
  }
}

createNewPost()
