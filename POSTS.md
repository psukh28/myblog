# Creating New Posts

This guide shows you how to quickly create new blog posts.

## Method 1: CLI Script (Recommended)

Use the built-in script to create a new post:

```bash
# Basic usage
pnpm new-post "My Post Title"

# With description
pnpm new-post "My Post Title" "A great description of my post"

# With description and tags
pnpm new-post "My Post Title" "A great description" "tech,web,astro"
```

The script will:
- ✅ Create a new `.mdx` file with proper naming (`YYYY-MM-DD-slug.mdx`)
- ✅ Generate frontmatter with all required fields
- ✅ Create a slug from the title
- ✅ Open the file in your editor (if available)

## Method 2: VS Code Snippet

1. Create a new `.mdx` file in `src/content/posts/`
2. Name it: `YYYY-MM-DD-slug.mdx`
3. Type `blog-post` and press Tab
4. Fill in the template fields

## Method 3: Manual Creation

1. Create a new `.mdx` file in `src/content/posts/`
2. Name it: `YYYY-MM-DD-slug.mdx`
3. Copy this template:

```mdx
---
title: "Your Post Title"
description: "A brief description (140-160 characters)"
pubDate: 2025-01-25
updatedDate: 2025-01-25
tags: ["tag1", "tag2"]
coverImage: "/images/covers/your-slug.jpg"
coverAlt: "Cover image description"
draft: false
canonical: "https://example.com/posts/your-slug"
---

# Your Post Title

Write your content here...

## Section 1

Your content...

## Section 2

More content...
```

## Post Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Post title |
| `description` | ✅ | SEO description (140-160 chars) |
| `pubDate` | ✅ | Publication date (YYYY-MM-DD) |
| `updatedDate` | ❌ | Last update date |
| `tags` | ❌ | Array of tags |
| `coverImage` | ❌ | Path to cover image |
| `coverAlt` | ❌ | Alt text for cover image |
| `draft` | ❌ | Set to `true` to hide from public |
| `canonical` | ❌ | Canonical URL |

## Tips

- **Naming**: Use `YYYY-MM-DD-descriptive-slug.mdx`
- **Description**: Keep it between 140-160 characters for SEO
- **Tags**: Use lowercase, hyphenated tags
- **Images**: Add cover images to `public/images/covers/`
- **Draft**: Set `draft: true` to work on posts privately
- **Preview**: Run `pnpm dev` to see your changes

## Examples

```bash
# Tech post
pnpm new-post "Building with Astro" "How to build fast websites with Astro" "astro,web,tech"

# Personal post  
pnpm new-post "My Coding Journey" "Reflections on learning to code" "personal,career"

# Tutorial
pnpm new-post "React Hooks Guide" "Complete guide to React hooks" "react,javascript,tutorial"
```

