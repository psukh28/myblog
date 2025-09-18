# Elegant Blog

A production-ready Astro v4 blog with MDX and Content Collections. Built for performance, accessibility, and developer experience.

## ✨ Features

- ⚡ **Lightning Fast** - Built with Astro v4 for optimal performance
- 📝 **Rich Content** - MDX support with custom components
- 🎨 **Beautiful Design** - Tailwind CSS with dark mode support
- 🔍 **Smart Search** - Client-side search with Elasticlunr
- 📱 **Responsive** - Mobile-first design that works everywhere
- ♿ **Accessible** - WCAG compliant with keyboard navigation
- 🔧 **Type Safe** - Full TypeScript support with Content Collections
- 📊 **SEO Optimized** - Complete meta tags, OpenGraph, Twitter Cards, and JSON-LD
- 🔗 **RSS & Sitemap** - Automatic generation for content discovery
- 🚀 **PWA Ready** - Service worker and manifest for offline functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/elegant-blog.git
   cd elegant-blog
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Building for Production

```bash
# Build the site
pnpm build

# Preview the production build
pnpm preview
```

## 📝 Writing Posts

### Creating a New Post

1. Create a new `.mdx` file in `src/content/posts/`
2. Add the required frontmatter:

```mdx
---
title: "Your Post Title"
description: "A brief description of your post (140-160 characters)"
pubDate: 2025-01-17
updatedDate: 2025-01-17  # Optional
tags: ["tag1", "tag2", "tag3"]
coverImage: "/images/covers/your-image.jpg"  # Optional
coverAlt: "Alt text for your cover image"    # Optional
draft: false  # Set to true to hide from public
canonical: "https://yourdomain.com/posts/your-post"  # Optional
---

# Your Post Title

Write your content here using Markdown and MDX components!
```

### Frontmatter Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `description` | string | ✅ | Post description (140-160 chars) |
| `pubDate` | Date | ✅ | Publication date |
| `updatedDate` | Date | ❌ | Last updated date |
| `tags` | string[] | ❌ | Array of tags (default: []) |
| `coverImage` | string | ❌ | Path to cover image |
| `coverAlt` | string | ❌ | Alt text for cover image |
| `draft` | boolean | ❌ | Hide from public (default: false) |
| `canonical` | string | ❌ | Canonical URL |
| `readingTime` | number | ❌ | Reading time in minutes (auto-calculated) |

### Adding Images

1. Place images in `public/images/` or `src/assets/images/`
2. Use Astro's `<Image>` component for optimization:

```astro
---
import { Image } from 'astro:assets'
---

<Image
  src="/images/your-image.jpg"
  alt="Description of your image"
  width={800}
  height={600}
  loading="lazy"
/>
```

### Using MDX Components

The blog includes several custom MDX components:

```mdx
<!-- Callout boxes -->
<Callout type="info" title="Information">
This is an informational callout.
</Callout>

<Callout type="tip" title="Pro Tip">
This is a tip callout.
</Callout>

<Callout type="warn" title="Warning">
This is a warning callout.
</Callout>

<Callout type="danger" title="Danger">
This is a danger callout.
</Callout>

<!-- Inline tags -->
<Tag name="astro" />
<Tag name="mdx" variant="accent" />
```

## 🎨 Customization

### Site Configuration

Update `src/site.config.ts` to customize your site:

```typescript
export const PROJECT_NAME = 'elegant-blog'
export const AUTHOR_NAME = 'Your Name'
export const SITE_TITLE = 'Your Blog Title'
export const SITE_URL = 'https://yourdomain.com'
export const SITE_DESCRIPTION = 'Your blog description'
export const TIMEZONE = 'America/New_York'
export const POSTS_PER_PAGE = 6
export const ENABLE_ANALYTICS = false
```

### Styling

- **Colors**: Modify `tailwind.config.mjs`
- **Typography**: Update `src/styles/prose.css`
- **Components**: Customize components in `src/components/`

### Content Schema

Modify `src/content/config.ts` to add new fields to your content:

```typescript
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Add your custom fields here
    category: z.enum(['tutorial', 'news', 'opinion']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  }),
})
```

## 🔍 Search

The blog includes client-side search powered by Elasticlunr:

- **Search Index**: Automatically generated at build time
- **Search API**: Available at `/api/search.json`
- **Search Box**: Included in the header component
- **Keyboard Shortcut**: Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)

## 📊 Analytics

To enable analytics, set `ENABLE_ANALYTICS = true` in `src/site.config.ts` and add your Google Analytics ID:

```bash
# Add to your environment variables
PUBLIC_GA_ID=your-google-analytics-id
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables if needed
3. Deploy automatically on push to main

### Netlify

1. Connect your repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Use the GitHub Actions workflow included in `.github/workflows/`
3. Set `GITHUB_TOKEN` secret

### Other Static Hosts

The blog generates static files in the `dist/` directory that can be deployed to any static host.

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build

# Code Quality
pnpm lint         # Check code formatting
pnpm format       # Format code
pnpm typecheck    # Type check TypeScript

# Search
pnpm search:index # Build search index
```

### Project Structure

```
elegant-blog/
├── .github/           # GitHub Actions workflows
├── .vscode/           # VS Code settings
├── public/            # Static assets
├── src/
│   ├── components/    # Astro components
│   ├── content/       # Content collections
│   ├── pages/         # Pages and API routes
│   ├── styles/        # CSS styles
│   └── utils/         # Utility functions
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json
```

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build/)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [MDX](https://mdxjs.com/) for the rich content experience
- [Shiki](https://shiki.matsu.io/) for syntax highlighting

---

Built with ❤️ using Astro v4
