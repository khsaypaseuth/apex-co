import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n } from '@/lib/i18n-config'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { archivo, manrope, notoSansLao, notoSansSc, notoSansThai } from '@/lib/fonts'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'
import { DEFAULT_OG_IMAGE, OG_LOCALE } from '@/lib/seo'
import { FloatingContactButtons } from '@/components/FloatingContactButtons'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JsonLd } from '@/components/JsonLd'
import { organizationJsonLd, websiteJsonLd } from '@/lib/json-ld'
import '../globals.css'

/**
 * Layout-level metadata: `metadataBase` (required for OG images), the
 * `%s | Apex Co., Ltd.` title template, and locale-aware Open Graph
 * defaults. Every page overrides title/description/OG via
 * `pageMetadata()` in lib/seo.ts; these values are the safety net.
 */
export async function generateMetadata({
  params,
}: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  const base: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} — Electrical & Construction Contractor in the Lao PDR`,
      template: `%s | ${SITE_NAME}`,
    },
    description:
      'Electrical supply and installation at 22 kV and 115 kV, foundation piling, road and bridge construction, and building works in the Lao PDR.',
    manifest: '/site.webmanifest',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    appleWebApp: {
      capable: true,
      title: SITE_NAME,
      statusBarStyle: 'black-translucent',
    },
  }

  if (!hasLocale(lang)) return base

  const dict = await getDictionary(lang)

  return {
    ...base,
    title: {
      default: dict.meta.home.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: dict.meta.home.description,
    openGraph: {
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang as keyof typeof OG_LOCALE] ?? 'en_US',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export async function generateStaticParams() {
  return i18n.activeLocales.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  // Desktop nav. The whole site is five pages now, so the full list fits —
  // no overflow group is needed. The plain Contact link is covered by the
  // header CTA button.
  const navItems = [
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.services, href: `/${lang}/services` },
    { label: dict.nav.projects, href: `/${lang}/projects` },
    { label: dict.nav.news, href: `/${lang}/news` },
    { label: dict.nav.faq, href: `/${lang}/faq` },
  ]

  const mobileGroups = [{ items: navItems }]

  return (
    <html
      lang={lang}
      className={`${archivo.variable} ${manrope.variable} ${notoSansLao.variable} ${notoSansThai.variable} ${notoSansSc.variable} antialiased`}
    >
      <body className="min-h-screen bg-mist-50 text-navy-950">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {/* Skip link — first focusable element on every page (see globals.css) */}
        <a href="#main-content" className="skip-link">
          {dict.common.skipToContent}
        </a>
        <Header
          lang={lang}
          siteName={dict.site.name}
          navItems={navItems}
          mobileGroups={mobileGroups}
          navLabel={dict.nav.mainNavLabel}
          ctaLabel={dict.cta.requestQuote}
          ctaHref={`/${lang}/contact`}
          languageLabel={dict.language.label}
          languageOptions={[
            { code: 'en', label: dict.language.en },
            { code: 'lo', label: dict.language.lo },
            { code: 'th', label: dict.language.th },
            { code: 'vi', label: dict.language.vi },
            { code: 'zh', label: dict.language.zh },
          ]}
          menuLabels={{
            menu: dict.nav.menu,
            open: dict.nav.openMenu,
            close: dict.nav.closeMenu,
          }}
        />
        {children}
        <Footer lang={lang} dict={dict} />
        <FloatingContactButtons
          whatsAppLabel={dict.floating.whatsapp}
          lineLabel={dict.floating.line}
          linePlaceholderNote={dict.floating.placeholderNote}
        />
      </body>
    </html>
  )
}
