import 'server-only'

// Lazy dictionary imports, keyed by ACTIVE locale only (en + lo at launch).
// To activate th / vi / zh later: add the locale to `i18n.activeLocales` in
// lib/i18n-config.ts and add its loader here.
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  lo: () => import('@/dictionaries/lo.json').then((module) => module.default),
}

export type ActiveLocale = keyof typeof dictionaries

/** Shape derived from the English dictionary — the source of truth. */
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['en']>>

export const hasLocale = (locale: string): locale is ActiveLocale =>
  locale in dictionaries

export const getDictionary = async (locale: ActiveLocale): Promise<Dictionary> =>
  dictionaries[locale]()
