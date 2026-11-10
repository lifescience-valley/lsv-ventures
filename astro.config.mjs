// @ts-check
import { defineConfig } from 'astro/config';

// Statischer Build – läuft auf jedem Hoster (Netlify, Vercel, GitHub Pages, klassischer Webspace).
// Sobald die finale Domain feststeht, hier `site` setzen (z. B. 'https://lsv-ventures.de').
export default defineConfig({
  output: 'static',
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      // Deutsch ohne Präfix (/), Englisch unter /en/
      prefixDefaultLocale: false,
    },
  },
});
