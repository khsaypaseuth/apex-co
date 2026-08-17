import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { getArticle, getLawTopic, listLawTopicSlugs } from '@/lib/content'
import { formatDate } from '@/lib/format'
import type { ActiveLocale } from '@/lib/dictionaries'
import {
  SERVICE_CATEGORY_SLUGS,
  type Article,
  type LawTopic,
  type ServiceCategorySlug,
  type VerificationStatus,
} from '@/lib/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { DisclaimerBox } from '@/components/DisclaimerBox'
import { RelatedArticles } from '@/components/RelatedArticles'
import { RelatedServices } from '@/components/RelatedServices'
import { JsonLd } from '@/components/JsonLd'
import { articleJsonLd } from '@/lib/json-ld'
import { localePath } from '@/lib/seo'
import { SITE_URL } from '@/lib/site-config'

/**
 * Lao Laws Library topic page (Phase 5). Mirrors the Knowledge Center
 * article route: statically generated, English fallback for Lao until
 * Phase 7, verification badge + sources list per master plan §Lao Laws
 * Library. Related articles link into the Knowledge Center.
 */

const NAV_KEY_BY_CATEGORY: Record<
  ServiceCategorySlug,
  'businessSetup' | 'visaImmigration' | 'legalFamily' | 'accountingTax'
> = {
  'business-setup': 'businessSetup',
  'visa-immigration': 'visaImmigration',
  'legal-family': 'legalFamily',
  'accounting-tax': 'accountingTax',
}

const BADGE_STYLES: Record<VerificationStatus, string> = {
  verified: 'border-gold-500 bg-gold-500/10 text-gold-600',
  'needs-verification': 'border-slate-500/50 bg-slate-500/10 text-slate-600',
  'general-info': 'border-navy-700/30 bg-navy-700/5 text-navy-700',
}

function isCategorySlug(value: string): value is ServiceCategorySlug {
  return (SERVICE_CATEGORY_SLUGS as readonly string[]).includes(value)
}

async function resolveLawTopic(
  lang: ActiveLocale,
  slug: string,
): Promise<LawTopic | null> {
  return (await getLawTopic(lang, slug)) ?? (await getLawTopic('en', slug))
}

async function resolveArticle(
  lang: ActiveLocale,
  slug: string,
): Promise<Article | null> {
  return (await getArticle(lang, slug)) ?? (await getArticle('en', slug))
}

export async function generateStaticParams() {
  const slugs = new Set([
    ...(await listLawTopicSlugs('en')),
    ...(await listLawTopicSlugs('lo')),
  ])
  return [...slugs].map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/laws/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  if (!hasLocale(lang)) return {}
  const topic = await resolveLawTopic(lang, slug)
  if (!topic) return {}
  return pageMetadata({
    lang,
    path: `/laws/${slug}`,
    title: topic.title,
    description: topic.summary,
    ogType: 'article',
  })
}

export default async function LawTopicPage({
  params,
}: PageProps<'/[lang]/laws/[slug]'>) {
  const { lang, slug } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const topic = await resolveLawTopic(lang, slug)

  if (!topic) notFound()

  const verificationLabels: Record<VerificationStatus, string> = {
    verified: dict.verification.verified,
    'needs-verification': dict.verification.needsVerification,
    'general-info': dict.verification.generalInfo,
  }

  // Only link related articles that actually exist.
  const relatedArticles = (
    await Promise.all(
      topic.relatedArticles.map((related) => resolveArticle(lang, related)),
    )
  ).filter((related): related is Article => related !== null)

  const relatedServices = topic.relatedServices
    .filter(isCategorySlug)
    .map((category) => ({
      label: dict.nav[NAV_KEY_BY_CATEGORY[category]],
      href: `/${lang}/services/${category}`,
    }))

  const sources = topic.sources ?? []

  return (
    <main id="main-content">
      <JsonLd
        data={articleJsonLd({
          title: topic.title,
          description: topic.summary,
          url: `${SITE_URL}${localePath(lang, `/laws/${slug}`)}`,
          dateModified: topic.lastUpdated,
          inLanguage: topic.lang,
        })}
      />
      {/* Topic header */}
      <section className="bg-mist-100 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.laws, href: `/${lang}/laws` },
              { label: topic.title },
            ]}
          />
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-sm bg-white px-2 py-1 font-medium tracking-wide text-navy-700 uppercase">
              {dict.lawCategories[topic.category]}
            </span>
            <span
              className={`rounded-sm border px-2 py-1 font-medium ${BADGE_STYLES[topic.verificationStatus]}`}
            >
              {verificationLabels[topic.verificationStatus]}
            </span>
          </div>
          <h1 className="font-display mt-5 text-3xl leading-tight text-navy-950 md:text-5xl">
            {topic.title}
          </h1>
          <div className="mt-6 h-px w-16 bg-gold-500" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-navy-700/90">
            {topic.summary}
          </p>
          <p className="mt-6 text-sm text-slate-600">
            {dict.common.lastUpdated}:{' '}
            <time dateTime={topic.lastUpdated}>
              {formatDate(lang, topic.lastUpdated)}
            </time>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            {topic.readingTime} {dict.common.minRead}
          </p>
          {topic.lang !== lang && (
            <p className="mt-4 rounded-sm border border-gold-500/40 bg-gold-500/10 px-3 py-2 text-sm text-navy-700">
              {dict.common.contentInEnglish}
            </p>
          )}
        </div>
      </section>

      {/* Topic body */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: topic.html }}
          />

          {sources.length > 0 && (
            <div className="mt-12 rounded-sm border border-navy-950/10 bg-mist-100 p-6">
              <h2 className="font-display text-lg text-navy-950">
                {dict.common.sources}
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {sources.map((source) => (
                  <li key={source}>
                    <a
                      href={source}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="break-all text-navy-700 underline decoration-gold-500/60 underline-offset-4 transition-colors hover:text-gold-600"
                    >
                      {source}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12">
            <DisclaimerBox
              label={dict.legal.disclaimerLabel}
              text={dict.legal.disclaimer}
            />
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <RelatedServices
              heading={dict.common.relatedServices}
              items={relatedServices}
            />
            <RelatedArticles
              heading={dict.common.relatedArticles}
              items={relatedArticles.map((related) => ({
                label: related.title,
                href: `/${lang}/knowledge/${related.slug}`,
              }))}
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
