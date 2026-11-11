// @ts-check
import { defineConfig } from 'astro/config';

// Statischer Build – läuft auf jedem Hoster (Netlify, Vercel, GitHub Pages, klassischer Webspace).
// Sobald die finale Domain feststeht, SITE_URL setzen (z. B. 'https://lsv-ventures.de').
// SITE_URL / BASE_PATH kommen aus der Umgebung – der GitHub-Pages-Workflow setzt sie für die
// Vorschau unter https://lifescience-valley.github.io/lsv-ventures/. Lokal bleibt alles unter /.
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || undefined,
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      // Deutsch ohne Präfix (/), Englisch unter /en/
      prefixDefaultLocale: false,
    },
  },
});
