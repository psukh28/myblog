export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export function getSlugFromFilename(filename: string): string {
  // Remove the .mdx extension and any date prefix
  const withoutExt = filename.replace(/\.mdx$/, '')
  const withoutDate = withoutExt.replace(/^\d{4}-\d{2}-\d{2}-/, '')
  return slugify(withoutDate)
}

export function normalizeTag(tag: string): string {
  return tag.toLowerCase().trim()
}

export function getUniqueTags(posts: Array<{ data: { tags?: string[] } }>): string[] {
  const allTags = posts.flatMap(post => post.data.tags || [])
  const uniqueTags = [...new Set(allTags.map(normalizeTag))]
  return uniqueTags.sort()
}

export function getTagSlug(tag: string): string {
  return slugify(tag)
}
