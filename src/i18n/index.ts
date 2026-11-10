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

/** Seiten mit ihren URLs je Sprache – Grundlage für Sprachumschalter und hreflang. */
export const routes = {
  home: { de: '/', en: '/en/' },
  imprint: { de: '/impressum', en: '/en/imprint' },
  privacy: { de: '/datenschutz', en: '/en/privacy' },
} as const;

export type RouteKey = keyof typeof routes;
