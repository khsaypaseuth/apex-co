import type { Metadata } from 'next'
import { i18n, type Locale } from './i18n-config'
import { SITE_NAME } from './site-config'

/**
 * Shared SEO metadata builder. Every page route calls `pageMetadata()` from
 * its `generateMetadata` so title, description, Open Graph, Twitter cards,
 * canonical, and hreflang stay consistent site-wide.
 *
 * Relative URLs returned here are resolved against `metadataBase`
 * (set in app/[lang]/layout.tsx from SITE_URL).
 */

/** Default 1200×630 Open Graph card — source SVG lives in public/og/. */
export const DEFAULT_OG_IMAGE = {
  url: '/og/og-default.png',
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Business, Legal & Visa Consulting in Laos`,
} as const

/** og:locale values for the active locales. */
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  lo: 'lo_LA',
  th: 'th_TH',
  vi: 'vi_VN',
  zh: 'zh_CN',
}

/** Prefix a locale-less path with a locale segment ('/' → '/en'). */
export function localePath(lang: string, path: string): string {
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}

/**
 * hreflang map for a path: ACTIVE locales plus x-default → en.
 */
export function languageAlternates(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(
      i18n.activeLocales.map((locale) => [locale, localePath(locale, path)]),
    ),
    'x-default': localePath(i18n.defaultLocale, path),
  }
}

export interface PageSeoInput {
  lang: string
  /** Locale-less pathname, e.g. '/', '/about', '/knowledge/some-slug'. */
  path: string
  /** Page title WITHOUT the site-name suffix (the template appends it). */
  title: string
  description: string
  /** 'article' for knowledge/laws/guides detail pages. */
  ogType?: 'website' | 'article'
  /**
   * Home page only: use the title as-is instead of running it through the
   * `%s | Super Consulting` template (it already contains the site name).
   */
  absoluteTitle?: boolean
}

export function pageMetadata({
  lang,
  path,
  title,
  description,
  ogType = 'website',
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const canonical = localePath(lang, path)
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang as Locale] ?? OG_LOCALE[i18n.defaultLocale],
      alternateLocale: i18n.activeLocales
        .filter((locale) => locale !== lang)
        .map((locale) => OG_LOCALE[locale]),
      type: ogType,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  }
}
