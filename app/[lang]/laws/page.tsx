import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { listLawTopics } from '@/lib/content'
import { LAW_CATEGORIES } from '@/lib/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { DisclaimerBox } from '@/components/DisclaimerBox'
import { Hero } from '@/components/Hero'
import { LawList } from './law-list'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/laws'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/laws',
    title: dict.meta.laws.title,
    description: dict.meta.laws.description,
  })
}

export default async function LawsPage({ params }: PageProps<'/[lang]/laws'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  // Empty until Phase 5 lands the starter law topics — page is empty-safe.
  const topics = await listLawTopics(lang)

  const verificationLabels = {
    verified: dict.verification.verified,
    'needs-verification': dict.verification.needsVerification,
    'general-info': dict.verification.generalInfo,
  }

  const categories = LAW_CATEGORIES.map((category) => ({
    value: category,
    label: dict.lawCategories[category],
  }))

  return (
    <main id="main-content">
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.laws}
        lede={dict.lawsPage.lede}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.laws },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {topics.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-sm border border-navy-950/10 border-t-2 border-t-gold-500 bg-white px-8 py-14 text-center">
              <h2 className="font-display text-2xl text-navy-950">
                {dict.lawsPage.emptyTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-500">
                {dict.lawsPage.emptyText}
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
              <h2 className="sr-only">{dict.lawsPage.listTitle}</h2>
              <LawList
                categories={categories}
                verificationLabels={verificationLabels}
                items={topics.map((topic) => ({
                  slug: topic.slug,
                  href: `/${lang}/laws/${topic.slug}`,
                  title: topic.title,
                  summary: topic.summary,
                  category: topic.category,
                  categoryLabel: dict.lawCategories[topic.category],
                  verificationStatus: topic.verificationStatus,
                }))}
                labels={{
                  searchLabel: dict.filter.searchLabel,
                  searchPlaceholder: dict.filter.searchPlaceholder,
                  allLabel: dict.filter.allCategories,
                  categoriesLabel: dict.filter.categoriesLabel,
                  noResults: dict.filter.noResults,
                  countSingular: dict.lawsPage.countSingular,
                  countPlural: dict.lawsPage.countPlural,
                }}
              />
            </>
          )}

          <div className="mt-12">
            <DisclaimerBox
              label={dict.legal.disclaimerLabel}
              text={dict.legal.disclaimer}
            />
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
