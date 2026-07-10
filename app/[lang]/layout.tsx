import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n } from '@/lib/i18n-config'
import { hasLocale } from '@/lib/dictionaries'
import { fraunces, manrope, notoSansLao, notoSerifLao } from '@/lib/fonts'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'
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

  return (
    <html
      lang={lang}
      className={`${fraunces.variable} ${manrope.variable} ${notoSansLao.variable} ${notoSerifLao.variable} antialiased`}
    >
      <body className="min-h-screen bg-ivory-50 text-navy-950">{children}</body>
    </html>
  )
}
