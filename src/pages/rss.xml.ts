import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../site.config'
import { getSlugFromFilename } from '../utils/slug'

export async function GET() {
  const posts = await getCollection('posts', ({ data }) => !data.draft)
  
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        link: `/posts/${getSlugFromFilename(post.id)}/`,
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        customData: `
          <author>${SITE_URL}</author>
          <category>${post.data.tags?.join(', ') || 'blog'}</category>
        `,
      })),
    customData: `
      <language>en</language>
      <managingEditor>${SITE_URL}</managingEditor>
      <webMaster>${SITE_URL}</webMaster>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>Astro v4</generator>
    `,
  })
}
