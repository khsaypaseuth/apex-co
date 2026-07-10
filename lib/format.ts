import type { Locale } from './i18n-config'

/** BCP-47 tags used for date formatting per site locale. */
const DATE_LOCALES: Record<Locale, string> = {
  en: 'en-GB',
  lo: 'lo-LA',
  th: 'th-TH',
  vi: 'vi-VN',
  zh: 'zh-CN',
}

/** Format an ISO date string (YYYY-MM-DD) for display in the given locale. */
export function formatDate(lang: Locale, isoDate: string): string {
  return new Intl.DateTimeFormat(DATE_LOCALES[lang], {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(isoDate))
}
