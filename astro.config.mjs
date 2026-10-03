import { defineConfig } from 'astro/config';

// GitHub Pages preview serves from /tallmadge-hydro-jetting-pros/. Set BASE=/ for a real-domain deploy.
export default defineConfig({
  site: process.env.SITE_ORIGIN ?? 'https://aintgottaclue.github.io',
  base: process.env.BASE ?? '/tallmadge-hydro-jetting-pros',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
