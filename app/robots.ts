import type { MetadataRoute } from 'next'
import { i18n } from '@/lib/i18n-config'
import { SITE_URL } from '@/lib/site-config'

/**
 * robots.txt: allow search and AI crawlers; disallow styleguide.
 */
export default function robots(): MetadataRoute.Robots {
  const styleguideDisallow = i18n.activeLocales.map(
    (locale) => `/${locale}/styleguide`,
  )

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: styleguideDisallow,
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: styleguideDisallow,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: styleguideDisallow,
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: styleguideDisallow,
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: styleguideDisallow,
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: styleguideDisallow,
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: styleguideDisallow,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: styleguideDisallow,
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
        disallow: styleguideDisallow,
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: styleguideDisallow,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
