import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { getArticle, listArticleSlugs } from '@/lib/content'
import { formatDate } from '@/lib/format'
import type { ActiveLocale } from '@/lib/dictionaries'
import {
  SERVICE_CATEGORY_SLUGS,
  type Article,
  type ServiceCategorySlug,
} from '@/lib/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { DisclaimerBox } from '@/components/DisclaimerBox'
import { RelatedArticles } from '@/components/RelatedArticles'
import { RelatedServices } from '@/components/RelatedServices'
import { JsonLd } from '@/components/JsonLd'
import { articleJsonLd } from '@/lib/json-ld'
import { SITE_URL } from '@/lib/site-config'
import { localePath } from '@/lib/seo'

/**
 * Knowledge Center article page. Added in Phase 4 (see decision D-042) so
 * article cards never link to a dead route; Phase 5 populates the full
 * starter-article set. Lao articles fall back to English until Phase 7.
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

function isCategorySlug(value: string): value is ServiceCategorySlug {
  return (SERVICE_CATEGORY_SLUGS as readonly string[]).includes(value)
}

async function resolveArticle(
  lang: ActiveLocale,
  slug: string,
): Promise<Article | null> {
  return (await getArticle(lang, slug)) ?? (await getArticle('en', slug))
}

export async function generateStaticParams() {
  const slugs = new Set([
    ...(await listArticleSlugs('en')),
    ...(await listArticleSlugs('lo')),
  ])
  return [...slugs].map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/knowledge/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  if (!hasLocale(lang)) return {}
  const article = await resolveArticle(lang, slug)
  if (!article) return {}
  return pageMetadata({
    lang,
    path: `/knowledge/${slug}`,
    title: article.title,
    description: article.summary,
    ogType: 'article',
  })
}

export default async function ArticlePage({
  params,
}: PageProps<'/[lang]/knowledge/[slug]'>) {
  const { lang, slug } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const article = await resolveArticle(lang, slug)

  if (!article) notFound()

  const verificationLabels: Record<Article['verificationStatus'], string> = {
    verified: dict.verification.verified,
    'needs-verification': dict.verification.needsVerification,
    'general-info': dict.verification.generalInfo,
  }

  // Only link related content that actually exists (Phase 5 adds the rest).
  const relatedArticles = (
    await Promise.all(
      article.relatedArticles.map((related) => resolveArticle(lang, related)),
    )
  ).filter((related): related is Article => related !== null)

  const relatedServices = article.relatedServices
    .filter(isCategorySlug)
    .map((category) => ({
      label: dict.nav[NAV_KEY_BY_CATEGORY[category]],
      href: `/${lang}/services/${category}`,
    }))

  return (
    <main id="main-content">
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.summary,
          url: `${SITE_URL}${localePath(lang, `/knowledge/${slug}`)}`,
          dateModified: article.lastUpdated,
          inLanguage: article.lang,
        })}
      />
      {/* Article header */}
      <section className="bg-mist-100 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.knowledge, href: `/${lang}/knowledge` },
              { label: article.title },
            ]}
          />
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-sm bg-white px-2 py-1 font-medium tracking-wide text-navy-700 uppercase">
              {dict.articleCategories[article.category]}
            </span>
            <span className="rounded-sm border border-slate-500/50 bg-slate-500/10 px-2 py-1 font-medium text-slate-600">
              {verificationLabels[article.verificationStatus]}
            </span>
          </div>
          <h1 className="font-display mt-5 text-3xl leading-tight text-navy-950 md:text-5xl">
            {article.title}
          </h1>
          <div className="mt-6 h-px w-16 bg-gold-500" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-navy-700/90">
            {article.summary}
          </p>
          <p className="mt-6 text-sm text-slate-600">
            {dict.common.lastUpdated}:{' '}
            <time dateTime={article.lastUpdated}>
              {formatDate(lang, article.lastUpdated)}
            </time>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            {article.readingTime} {dict.common.minRead}
          </p>
          {article.lang !== lang && (
            <p className="mt-4 rounded-sm border border-gold-500/40 bg-gold-500/10 px-3 py-2 text-sm text-navy-700">
              {dict.common.contentInEnglish}
            </p>
          )}
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />

          {(article.sources ?? []).length > 0 && (
            <div className="mt-12 rounded-sm border border-navy-950/10 bg-mist-100 p-6">
              <h2 className="font-display text-lg text-navy-950">
                {dict.common.sources}
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {(article.sources ?? []).map((source) => (
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
