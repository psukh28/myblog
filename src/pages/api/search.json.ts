import { getCollection } from 'astro:content'
import elasticlunr from 'elasticlunr'
import { getSlugFromFilename } from '../../utils/slug'

export async function GET() {
  const posts = await getCollection('posts', ({ data }) => !data.draft)
  
  // Create search index
  const index = elasticlunr(function() {
    this.addField('title')
    this.addField('description')
    this.addField('tags')
    this.addField('content')
    this.setRef('slug')
  })
  
  // Add posts to index
  posts.forEach((post) => {
    const slug = getSlugFromFilename(post.id)
    const content = post.body.replace(/<[^>]*>/g, '') // Strip HTML tags
    
    index.addDoc({
      slug,
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags?.join(' ') || '',
      content: content.substring(0, 1000), // Limit content length
    })
  })
  
  return new Response(JSON.stringify({
    index: index.toJSON(),
    count: posts.length,
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  })
}
