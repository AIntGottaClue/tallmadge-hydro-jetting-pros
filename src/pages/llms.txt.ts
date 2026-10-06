import { siteConfig } from '../data/siteConfig';
import { areas } from '../data/areas';
import { serviceLinks } from '../lib/site';
export function GET() {
  const o = siteConfig.origin;
  const svc = serviceLinks.slice(0, 5).map((l) => `- [${l.label}](${o}${l.href}/)`).join('\n');
  const guides = serviceLinks.slice(5).map((l) => `- [${l.label}](${o}${l.href}/)`).join('\n');
  const hoods = areas.map((a) => `- [${a.name}](${o}/service-areas/${a.slug}/)`).join('\n');
  const body = `# ${siteConfig.brand}\n\n> Hydro jetting for residential and commercial drain lines in Tallmadge, Ohio and its neighborhoods. Phone: ${siteConfig.phoneDisplay}. Service availability and pipe suitability are confirmed with a qualified professional. No service or result is guaranteed.\n\n## Services\n\n${svc}\n\n## Guides\n\n${guides}\n\n## Service Areas\n\n${hoods}\n\n## Site\n\n- [Home](${o}/)\n- [Hydro Jetting](${o}/hydro-jetting/)\n- [Our Process](${o}/our-process/)\n- [FAQ](${o}/faq/)\n- [Request Service](${o}/contact/)\n- [Sitemap](${o}/sitemap.xml)\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
