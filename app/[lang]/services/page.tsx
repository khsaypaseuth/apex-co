import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { getServiceGroups } from '@/lib/page-data'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/SectionHeader'
import transformerInstall from '@/public/images/sections/transformer-installation.jpg'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/services'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/services',
    title: dict.meta.services.title,
    description: dict.meta.services.description,
  })
}

export default async function ServicesPage({
  params,
}: PageProps<'/[lang]/services'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const serviceGroups = getServiceGroups(lang)

  return (
    <main id="main-content">
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.services}
        lede={dict.servicesPage.lede}
        image={{ src: transformerInstall, alt: dict.alt.transformerInstall }}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.services },
            ]}
          />
        </div>
      </div>

      {/* Four capability groups — see content/{lang}/services.ts */}
      {serviceGroups.map((group, index) => (
        <section
          key={group.id}
          className={index % 2 === 1 ? 'bg-mist-100' : undefined}
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <SectionHeader title={group.title} lede={group.summary} />
            <ul className="mt-10 grid gap-x-12 gap-y-7 sm:grid-cols-2">
              {group.services.map((service) => (
                <li key={service.slug} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-3 h-px w-6 shrink-0 bg-gold-500"
                  />
                  <div>
                    <h3 className="font-medium text-navy-950">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {service.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href={`/${lang}/services/${group.categorySlug}`}
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors hover:text-gold-600"
            >
              {dict.servicesPage.exploreArea}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      ))}

      <CtaSection
        title={dict.home.finalCtaTitle}
        lede={dict.home.finalCtaLede}
        ctaLabel={dict.cta.requestQuote}
        ctaHref={`/${lang}/contact`}
      />
    </main>
  )
}
