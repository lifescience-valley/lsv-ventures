import { de, type Dictionary } from './de';
import { en } from './en';

export const languages = {
  de: { label: 'DE', name: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE' },
  en: { label: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

const dictionaries: Record<Lang, Dictionary> = { de, en };

/** Sprache aus Astro.currentLocale ermitteln (Fallback: Deutsch). */
export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/**
 * Seiten mit ihren URLs je Sprache – Grundlage für Sprachumschalter und hreflang.
 * Impressum und Datenschutz gibt es bewusst nur auf Deutsch (rechtsverbindliche Fassung).
 */
export const routes: Record<'home' | 'imprint' | 'privacy', Partial<Record<Lang, string>> & { de: string }> = {
  home: { de: '/', en: '/en/' },
  imprint: { de: '/impressum' },
  privacy: { de: '/datenschutz' },
};

export type RouteKey = keyof typeof routes;

/** URL einer Seite in der gewünschten Sprache; fehlt die Übersetzung, die deutsche Fassung. */
export function pathFor(route: RouteKey, lang: Lang): string {
  return routes[route][lang] ?? routes[route].de;
}
