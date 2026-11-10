// Newsartikel – sprachunabhängige Daten. Titel/Datum stehen in src/i18n (news.items, gleiche Reihenfolge),
// die Artikeltexte als HTML in src/content/news/<key>.<lang>.html.
import type { Lang } from '../i18n';
import digityTeam from '../assets/images/news/digity-team-investoren.jpg';
import cultimate from '../assets/images/news/cultimate-foods.jpg';
import fondsStart1 from '../assets/images/news/fonds-start-1.jpg';
import fondsStart2 from '../assets/images/news/fonds-start-2.jpg';

export const newsData = [
  {
    key: 'digity',
    // Slugs wie auf der alten WordPress-Seite, damit bestehende Links weiter funktionieren
    slug: 'digity-sichert-sich-14-millionen-euro-seed-finanzierung-fuer-praeventions-exoskelett-artus',
    date: '2024-08-09',
    image: digityTeam,
    gallery: [],
    pdf: undefined,
  },
  {
    key: 'cultimate-foods',
    slug: 'cultimate-foods-erhaelt-23-mio-euro-seed-finanzierung-von-fuehrenden-biotech-und-foodtech-investoren-um-die-alternative-fleischindustrie-zu-revolutionieren',
    date: '2024-04-22',
    image: cultimate,
    gallery: [],
    pdf: undefined,
  },
  {
    key: 'neuer-fonds',
    slug: 'neuer-fonds-fuer-die-foerderung-von-life-science-start-ups-in-niedersachsen',
    date: '2023-02-13',
    image: fondsStart1,
    gallery: [fondsStart2],
    pdf: '/downloads/230213_PI_LifeScienceValley_Wachstumsfonds.pdf',
  },
] as const;

const bodies = import.meta.glob<string>('../content/news/*.html', { query: '?raw', import: 'default', eager: true });

/** Artikeltext (HTML) eines Newsartikels; fehlt die Übersetzung, die deutsche Fassung. */
export function newsBody(key: string, lang: Lang): string {
  return bodies[`../content/news/${key}.${lang}.html`] ?? bodies[`../content/news/${key}.de.html`] ?? '';
}
