import 'server-only'

// Lazy dictionary imports, keyed by ACTIVE locale.
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  lo: () => import('@/dictionaries/lo.json').then((module) => module.default),
  th: () => import('@/dictionaries/th.json').then((module) => module.default),
  vi: () => import('@/dictionaries/vi.json').then((module) => module.default),
  zh: () => import('@/dictionaries/zh.json').then((module) => module.default),
}

export type ActiveLocale = keyof typeof dictionaries

/** Shape derived from the English dictionary — the source of truth. */
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['en']>>

export const hasLocale = (locale: string): locale is ActiveLocale =>
  locale in dictionaries

export const getDictionary = async (locale: ActiveLocale): Promise<Dictionary> =>
  dictionaries[locale]()
