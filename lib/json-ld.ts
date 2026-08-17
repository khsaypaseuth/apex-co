import { i18n } from '@/lib/i18n-config'
import { CONTACT, FOUNDED_YEAR, SITE_NAME, SITE_URL } from '@/lib/site-config'

/** JSON-LD helpers for Organization, WebSite, FAQ, Article, and Breadcrumb. */

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': [
      'Organization',
      'GeneralContractor',
      'ElectricalContractor',
      'LocalBusiness',
    ],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo-apex.png`,
    image: `${SITE_URL}/og/og-default.png`,
    description:
      'Electrical supply and installation at 22 kV and 115 kV, foundation and piling works, road and bridge construction, building construction, and real estate development in the Lao PDR.',
    foundingDate: String(FOUNDED_YEAR),
    email: CONTACT.email,
    telephone: CONTACT.phone,
    knowsAbout: [
      '22 kV distribution networks',
      '115 kV transmission lines and substations',
      'Low, medium, and high voltage electrical equipment supply',
      'Foundation pile and driven pile works',
      'Road and bridge construction',
      'Building construction',
      'Real estate development',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vientiane Capital',
      addressCountry: 'LA',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Lao People\'s Democratic Republic',
    },
    sameAs: [] as string[],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: [...i18n.activeLocales],
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function breadcrumbJsonLd(
  items: { name: string; url?: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  }
}

export function faqPageJsonLd(
  entries: { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer,
      },
    })),
  }
}

export function articleJsonLd(input: {
  title: string
  description: string
  url: string
  dateModified: string
  inLanguage: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: input.url,
    dateModified: input.dateModified,
    inLanguage: input.inLanguage,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/brand/logo-apex.png`,
      },
    },
    mainEntityOfPage: input.url,
  }
}
