import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from './src/site.config';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [
    mdx({
      remarkPlugins: [remarkGfm, remarkSmartypants],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
    tailwind(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
