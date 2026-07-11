import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { listGuides } from '@/lib/content'
import type { ServiceCategorySlug } from '@/lib/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { GuideCard } from '@/components/GuideCard'
import { Hero } from '@/components/Hero'

const NAV_KEY_BY_CATEGORY: Record<
  ServiceCategorySlug,
  'businessSetup' | 'visaImmigration' | 'legalFamily' | 'accountingTax'
> = {
  'business-setup': 'businessSetup',
  'visa-immigration': 'visaImmigration',
  'legal-family': 'legalFamily',
  'accounting-tax': 'accountingTax',
}

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/guides'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/guides',
    title: dict.meta.guides.title,
    description: dict.meta.guides.description,
  })
}

export default async function GuidesPage({
  params,
}: PageProps<'/[lang]/guides'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  // Empty until Phase 5 lands the six starter guides — page is empty-safe.
  const guides = await listGuides(lang)

  return (
    <main id="main-content">
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.guides}
        lede={dict.guidesPage.lede}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.guides },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {guides.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-sm border border-navy-950/10 border-t-2 border-t-gold-500 bg-white px-8 py-14 text-center">
              <h2 className="font-display text-2xl text-navy-950">
                {dict.guidesPage.emptyTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-500">
                {dict.guidesPage.emptyText}
              </p>
              <Link
                href={`/${lang}/knowledge`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors hover:text-gold-600"
              >
                {dict.nav.knowledge}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : (
            <>
              {/* sr-only section heading so card <h3>s don't skip a level */}
              <h2 className="sr-only">{dict.guidesPage.listTitle}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <GuideCard
                  key={guide.slug}
                  title={guide.title}
                  summary={guide.summary}
                  href={`/${lang}/guides/${guide.slug}`}
                  ctaLabel={dict.cta.readGuide}
                  eyebrow={dict.nav[NAV_KEY_BY_CATEGORY[guide.category]]}
                />
              ))}
              </div>
            </>
          )}
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
