import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n } from '@/lib/i18n-config'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { fraunces, manrope, notoSansLao, notoSerifLao } from '@/lib/fonts'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'
import { FloatingContactButtons } from '@/components/FloatingContactButtons'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Business, Legal & Visa Consulting in Laos`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Business setup, visa & immigration, legal, and accounting consulting services in the Lao PDR.',
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

  const navItems = [
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.services, href: `/${lang}/services` },
    { label: dict.nav.knowledge, href: `/${lang}/knowledge` },
    { label: dict.nav.laws, href: `/${lang}/laws` },
    { label: dict.nav.guides, href: `/${lang}/guides` },
    { label: dict.nav.news, href: `/${lang}/news` },
    { label: dict.nav.faq, href: `/${lang}/faq` },
  ]

  return (
    <html
      lang={lang}
      className={`${fraunces.variable} ${manrope.variable} ${notoSansLao.variable} ${notoSerifLao.variable} antialiased`}
    >
      <body className="min-h-screen bg-ivory-50 text-navy-950">
        <Header
          lang={lang}
          siteName={dict.site.name}
          navItems={navItems}
          navLabel={dict.nav.mainNavLabel}
          ctaLabel={dict.cta.bookConsultation}
          ctaHref={`/${lang}/contact`}
          languageLabel={dict.language.label}
          languageOptions={[
            { code: 'en', label: dict.language.enShort },
            { code: 'lo', label: dict.language.loShort },
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
        />
      </body>
    </html>
  )
}
