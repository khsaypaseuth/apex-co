import type { MetadataRoute } from 'next'
import { getProject, listProjectSlugs } from '@/lib/content'
import { i18n } from '@/lib/i18n-config'
import { languageAlternates, localePath } from '@/lib/seo'
import { SERVICE_CATEGORY_SLUGS } from '@/lib/types'
import { SITE_URL } from '@/lib/site-config'

/**
 * Sitemap covering every route × ACTIVE locale, each entry carrying
 * `alternates.languages` (xhtml:link hreflang, incl. x-default → en).
 */

const STATIC_PATHS = [
  '/',
  '/about',
  '/services',
  ...SERVICE_CATEGORY_SLUGS.map((slug) => `/services/${slug}`),
  '/projects',
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = STATIC_PATHS.flatMap((path) =>
    entriesFor(path),
  )

  // Union of project slugs across active locales, matching generateStaticParams.
  const projectSlugs = [
    ...new Set(
      (
        await Promise.all(
          i18n.activeLocales.map((locale) => listProjectSlugs(locale)),
        )
      ).flat(),
    ),
  ].sort()

  for (const slug of projectSlugs) {
    const project =
      (await getProject('en', slug)) ?? (await getProject('lo', slug))
    entries.push(...entriesFor(`/projects/${slug}`, project?.lastUpdated))
  }

  return entries
}
