import { SITE_TITLE } from '../../site.config'

export const config = {
  runtime: 'edge',
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || SITE_TITLE
    const tag = searchParams.get('tag') || 'blog'
    
    // Simple SVG-based OG image
    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#bg)"/>
        
        <!-- Tag -->
        <rect x="450" y="150" width="300" height="40" rx="20" fill="#0ea5e9"/>
        <text x="600" y="175" text-anchor="middle" fill="white" font-family="Inter, sans-serif" font-size="16" font-weight="600">${tag.toUpperCase()}</text>
        
        <!-- Title -->
        <text x="600" y="300" text-anchor="middle" fill="white" font-family="Inter, sans-serif" font-size="48" font-weight="800">${title}</text>
        
        <!-- Subtitle -->
        <text x="600" y="350" text-anchor="middle" fill="#94a3b8" font-family="Inter, sans-serif" font-size="24">${SITE_TITLE}</text>
        
        <!-- Bottom decoration -->
        <text x="1000" y="550" fill="#64748b" font-family="Inter, sans-serif" font-size="18" font-weight="500">Built with Astro</text>
      </svg>
    `
    
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error generating OG image:', error)
    
    // Fallback SVG
    const fallbackSvg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#0f172a"/>
        <text x="600" y="315" text-anchor="middle" fill="white" font-family="Inter, sans-serif" font-size="48" font-weight="bold">${SITE_TITLE}</text>
      </svg>
    `
    
    return new Response(fallbackSvg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  }
}