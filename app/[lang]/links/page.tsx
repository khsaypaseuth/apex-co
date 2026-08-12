import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { MINISTRY_LINKS, PUBLIC_SERVICE_LINKS } from '@/content/links'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
import { OfficialLinkCard } from '@/components/OfficialLinkCard'
import { SectionHeader } from '@/components/SectionHeader'
import riversideCity from '@/public/images/hero/riverside-city-dusk-aerial.jpg'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/links'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/links',
    title: dict.meta.links.title,
    description: dict.meta.links.description,
  })
}

/**
 * Official Links — ministries and public-service portals for Lao PDR,
 * curated from the ODSC government directory (ministries + public services only).
 */
export default async function LinksPage({
  params,
}: PageProps<'/[lang]/links'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main id="main-content">
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.links}
        lede={dict.linksPage.lede}
        image={{ src: riversideCity, alt: dict.alt.riversideCity }}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.links },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow={dict.linksPage.ministriesEyebrow}
            title={dict.linksPage.ministriesTitle}
            lede={dict.linksPage.ministriesLede}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {MINISTRY_LINKS.map((link) => (
              <OfficialLinkCard key={link.id} link={link} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy-950/5 bg-ivory-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow={dict.linksPage.servicesEyebrow}
            title={dict.linksPage.servicesTitle}
            lede={dict.linksPage.servicesLede}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {PUBLIC_SERVICE_LINKS.map((link) => (
              <OfficialLinkCard key={link.id} link={link} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={dict.home.finalCtaTitle}
        lede={dict.home.finalCtaLede}
        ctaLabel={dict.cta.bookConsultation}
        ctaHref={`/${lang}/contact`}
      />
    </main>
  )
}
