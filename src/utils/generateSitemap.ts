const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://sami.benchaalia.com';

interface SitemapUrl {
  path: string;
  changefreq:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority: number;
  lastmod?: string;
}

const urls: SitemapUrl[] = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/home',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/awards',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/portfolio',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/tech-stack',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/contact',
    changefreq: 'monthly',
    priority: 0.9,
  },
];

export function generateSitemapXml(): string {
  const today = new Date().toISOString().split('T')[0];

  const urlsXml = urls
    .map(
      ({ path, changefreq, priority, lastmod }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod || today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;
}

export function generateRobotsTxt(): string {
  return `# Robots.txt for ${SITE_URL}

# Allow all search engines
User-agent: *
Allow: /

# Specifically allow major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Allow access to assets
Allow: /assets/
Allow: /*.js$
Allow: /*.css$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay (in seconds) - optional, helps prevent server overload
Crawl-delay: 1`;
}
