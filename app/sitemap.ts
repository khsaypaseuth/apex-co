import type { MetadataRoute } from 'next'
import {
  getArticle,
  getGuide,
  getLawTopic,
  listArticleSlugs,
  listGuideSlugs,
  listLawTopicSlugs,
} from '@/lib/content'
import { i18n } from '@/lib/i18n-config'
import { languageAlternates, localePath } from '@/lib/seo'
import { SITE_URL } from '@/lib/site-config'

/**
 * Sitemap covering every route × ACTIVE locale (en + lo at launch), each
 * entry carrying `alternates.languages` (rendered as xhtml:link hreflang
 * entries, incl. x-default → en). Article/law/guide URLs are derived from
 * the fs-based content loaders, so the sitemap can never drift from
 * `generateStaticParams`. The noindexed /styleguide route is deliberately
 * excluded (see app/robots.ts).
 */

const STATIC_PATHS = [
  '/',
  '/about',
  '/services',
  '/services/business-setup',
  '/services/visa-immigration',
  '/services/legal-family',
  '/services/accounting-tax',
  '/knowledge',
  '/laws',
  '/guides',
  '/news',
  '/faq',
  '/contact',
]

/** Absolute-URL hreflang map for one locale-less path. */
function absoluteAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    Object.entries(languageAlternates(path)).map(([locale, href]) => [
      locale,
      `${SITE_URL}${href}`,
    ]),
  )
}

/** One sitemap entry per active locale for the given path. */
function entriesFor(path: string, lastModified?: string): MetadataRoute.Sitemap {
  return i18n.activeLocales.map((locale) => ({
    url: `${SITE_URL}${localePath(locale, path)}`,
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
    alternates: { languages: absoluteAlternates(path) },
  }))
}

/** Union of slugs across active locales (matches generateStaticParams). */
async function unionSlugs(
  list: (lang: 'en' | 'lo') => Promise<string[]>,
): Promise<string[]> {
  return [...new Set([...(await list('en')), ...(await list('lo'))])].sort()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = STATIC_PATHS.flatMap((path) =>
    entriesFor(path),
  )

  for (const slug of await unionSlugs(listArticleSlugs)) {
    const article = (await getArticle('en', slug)) ?? (await getArticle('lo', slug))
    entries.push(...entriesFor(`/knowledge/${slug}`, article?.lastUpdated))
  }

  for (const slug of await unionSlugs(listLawTopicSlugs)) {
    const topic = (await getLawTopic('en', slug)) ?? (await getLawTopic('lo', slug))
    entries.push(...entriesFor(`/laws/${slug}`, topic?.lastUpdated))
  }

  for (const slug of await unionSlugs(listGuideSlugs)) {
    const guide = (await getGuide('en', slug)) ?? (await getGuide('lo', slug))
    entries.push(...entriesFor(`/guides/${slug}`, guide?.lastUpdated))
  }

  return entries
}
