import type { MetadataRoute } from 'next'
import { i18n } from '@/lib/i18n-config'
import { SITE_URL } from '@/lib/site-config'

/**
 * robots.txt: allow everything except the internal styleguide route
 * (which is additionally noindexed via its own metadata), and point
 * crawlers at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: i18n.activeLocales.map((locale) => `/${locale}/styleguide`),
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
