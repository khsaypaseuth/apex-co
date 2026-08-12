export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'lo', 'th', 'vi', 'zh'], // full type surface, routes reserved
  activeLocales: ['en', 'lo', 'th', 'vi', 'zh'],
} as const

export type Locale = (typeof i18n)['locales'][number]
