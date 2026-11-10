# Life Science Valley Wachstumsfonds – Webseite

Neuaufbau von [lsv-ventures.de](https://lsv-ventures.de) mit [Astro](https://astro.build) als statische Seite – zweisprachig:

| Seite | Deutsch | Englisch |
| --- | --- | --- |
| Startseite | `/` | `/en/` |
| Impressum | `/impressum` | – (nur Deutsch, Footer verlinkt die deutsche Fassung) |
| Datenschutz | `/datenschutz` | – (nur Deutsch, Footer verlinkt die deutsche Fassung) |

## Lokal starten

Voraussetzung: Node.js (aktuelle LTS-Version)

```bash
npm install
npm run dev        # Entwicklungsserver auf http://localhost:4321
npm run build      # statischer Build nach ./dist
npm run preview    # Build lokal ansehen
npm run check      # Typ- und Template-Prüfung
```

## Struktur

```
src/
├── assets/images/     Bilder (werden beim Build automatisch optimiert, WebP)
├── components/
│   ├── Header.astro   Navigation inkl. Mobilmenü
│   ├── Footer.astro   Rechtliche Links + Förderer-Logos
│   ├── Icon.astro     Inline-SVG-Icons
│   └── sections/      Abschnitte der Startseite (Hero, Fonds, Team, Portfolio …)
├── content/           Datenschutzerklärung DE + EN (HTML)
├── data/site.ts       Sprachunabhängige Daten: Kontakt, Bilder, Namen, Kennzahlen
├── i18n/              Texte: de.ts, en.ts + Hilfsfunktionen/URLs (index.ts)
├── layouts/           Grundlayout + Layout für Rechtstexte
├── pages/             DE-Seiten; en/ enthält die englischen Seiten
└── styles/global.css  Farben, Typografie, Basis-Styles
public/                Favicon und Downloads (Basis-Informationsblatt)
```

## Inhalte pflegen

- **Texte (beide Sprachen):** `src/i18n/de.ts` und `src/i18n/en.ts`. Beide Dateien haben dieselbe Struktur; `astro check` meldet einen Fehler, wenn im Englischen ein Feld fehlt.
- **Team, Portfolio, Kennzahlen:** Bilder/Namen/Zahlen in `src/data/site.ts`, die zugehörigen Texte (Rolle, Branche …) in den i18n-Dateien – jeweils in derselben Reihenfolge.
- **Neues Bild:** in `src/assets/images/…` ablegen und in `src/data/site.ts` importieren.
- **Impressum/Datenschutz:** `src/pages/impressum.astro`, `src/pages/datenschutz.astro` mit `src/content/datenschutz.html` – nur auf Deutsch, die englischen Seiten verlinken im Footer auf die deutsche Fassung.
- **Farben/Schrift:** CSS-Variablen in `src/styles/global.css` (`--petrol`, `--mint`, `--green`, …).

## Hinweise

- Die Schrift „Work Sans“ wird selbst gehostet (`@fontsource/work-sans`), es werden keine Google-Server angefragt.
- Es gibt keine Cookies, kein Tracking und kein Kontaktformular – der Kontakt läuft per `mailto:`-Link an info@lsv-ventures.de.
- Die Datenschutzerklärung ist 1:1 von der alten Seite übernommen und erwähnt noch Borlabs Cookie, Google Fonts und das Kontaktformular. **Vor dem Livegang rechtlich prüfen und anpassen lassen.**
- Hosting: rein statischer Build (`dist/`), läuft auf jedem Webspace oder bei Netlify, Vercel, GitHub Pages usw. Sobald die Domain feststeht, `site` in `astro.config.mjs` setzen.
