import { SITE_URL, serviceLinks } from '../lib/site';
import { areas } from '../data/areas';
const paths = [...serviceLinks.map(l=>l.href), '/', '/hydro-jetting', '/services', '/our-process', '/service-areas', '/faq', '/contact', ...areas.map((a) => `/service-areas/${a.slug}`)];
export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '/' : p + '/'}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
