import { defineConfig } from 'astro/config';

// GitHub Pages preview serves from /tallmadge-hydro-jetting-pros/. Set BASE=/ for a real-domain deploy.
const base = (process.env.BASE ?? '/tallmadge-hydro-jetting-pros').replace(/\/$/, '');
export default defineConfig({
  site: process.env.SITE_ORIGIN ?? 'https://aintgottaclue.github.io',
  base: process.env.BASE ?? '/tallmadge-hydro-jetting-pros',
  redirects: {
    '/service-areas/cuyahoga-falls': `${base}/service-areas`,
    '/service-areas/stow': `${base}/service-areas`,
    '/service-areas/kent': `${base}/service-areas`,
    '/service-areas/mogadore': `${base}/service-areas`,
    '/service-areas/munroe-falls': `${base}/service-areas`
  },
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
