const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** Turn [[label|url]] outbound and {{svc:slug|label}} internal markup into safe HTML. */
export function hoodHtml(text: string, svcUrl: (slug: string) => string): string {
  const parts = text.split(/(\[\[[^\]]+\|[^\]]+\]\]|\{\{svc:[a-z-]+\|[^}]+\}\})/g);
  return parts.map((p) => {
    let m = p.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
    if (m) return `<a href="${esc(m[2])}" target="_blank" rel="noopener noreferrer">${esc(m[1])}</a>`;
    m = p.match(/^\{\{svc:([a-z-]+)\|([^}]+)\}\}$/);
    if (m) return `<a href="${esc(svcUrl(m[1]))}">${esc(m[2])}</a>`;
    return esc(p);
  }).join('');
}
export const plain = (text: string) => text.replace(/\[\[([^|]+)\|[^\]]+\]\]/g, '$1').replace(/\{\{svc:[a-z-]+\|([^}]+)\}\}/g, '$1');
