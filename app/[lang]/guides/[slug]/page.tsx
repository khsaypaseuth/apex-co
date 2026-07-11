import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { getArticle, getGuide, listGuideSlugs } from '@/lib/content'
import { formatDate } from '@/lib/format'
import type { ActiveLocale } from '@/lib/dictionaries'
import {
  SERVICE_CATEGORY_SLUGS,
  type Article,
  type Guide,
  type ServiceCategorySlug,
  type VerificationStatus,
} from '@/lib/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { DisclaimerBox } from '@/components/DisclaimerBox'
import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import { RelatedArticles } from '@/components/RelatedArticles'
import { RelatedServices } from '@/components/RelatedServices'

/**
 * Business guide page (Phase 5). Mirrors the Knowledge Center article route
 * (static generation, English fallback for Lao until Phase 7) and adds the
 * master-plan lead-capture CTA block (Full Name, Email, Phone/WhatsApp,
 * Service Interest — placeholder backend).
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

async function resolveGuide(
  lang: ActiveLocale,
  slug: string,
): Promise<Guide | null> {
  return (await getGuide(lang, slug)) ?? (await getGuide('en', slug))
}

async function resolveArticle(
  lang: ActiveLocale,
  slug: string,
): Promise<Article | null> {
  return (await getArticle(lang, slug)) ?? (await getArticle('en', slug))
}

export async function generateStaticParams() {
  const slugs = new Set([
    ...(await listGuideSlugs('en')),
    ...(await listGuideSlugs('lo')),
  ])
  return [...slugs].map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/guides/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  if (!hasLocale(lang)) return {}
  const guide = await resolveGuide(lang, slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary }
}

export default async function GuidePage({
  params,
}: PageProps<'/[lang]/guides/[slug]'>) {
  const { lang, slug } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const guide = await resolveGuide(lang, slug)

  if (!guide) notFound()

  const verificationLabels: Record<VerificationStatus, string> = {
    verified: dict.verification.verified,
    'needs-verification': dict.verification.needsVerification,
    'general-info': dict.verification.generalInfo,
  }

  // Only link related articles that actually exist.
  const relatedArticles = (
    await Promise.all(
      guide.relatedArticles.map((related) => resolveArticle(lang, related)),
    )
  ).filter((related): related is Article => related !== null)

  const relatedServices = guide.relatedServices
    .filter(isCategorySlug)
    .map((category) => ({
      label: dict.nav[NAV_KEY_BY_CATEGORY[category]],
      href: `/${lang}/services/${category}`,
    }))

  const serviceOptions = SERVICE_CATEGORY_SLUGS.map((category) => ({
    value: category,
    label: dict.nav[NAV_KEY_BY_CATEGORY[category]],
  }))

  return (
    <main>
      {/* Guide header */}
      <section className="bg-ivory-100 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.guides, href: `/${lang}/guides` },
              { label: guide.title },
            ]}
          />
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-sm bg-white px-2 py-1 font-medium tracking-wide text-navy-700 uppercase">
              {dict.nav[NAV_KEY_BY_CATEGORY[guide.category]]}
            </span>
            <span className="rounded-sm border border-slate-500/50 bg-slate-500/10 px-2 py-1 font-medium text-slate-500">
              {verificationLabels[guide.verificationStatus]}
            </span>
          </div>
          <h1 className="font-display mt-5 text-3xl leading-tight text-navy-950 md:text-5xl">
            {guide.title}
          </h1>
          <div className="mt-6 h-px w-16 bg-gold-500" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-navy-700/90">
            {guide.summary}
          </p>
          <p className="mt-6 text-sm text-slate-500">
            {dict.common.lastUpdated}:{' '}
            <time dateTime={guide.lastUpdated}>
              {formatDate(lang, guide.lastUpdated)}
            </time>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            {guide.readingTime} {dict.common.minRead}
          </p>
        </div>
      </section>

      {/* Guide body */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: guide.html }}
          />

          {/* Lead-capture CTA (master plan §Business Guides) */}
          <div className="mt-12">
            <LeadCaptureForm
              labels={dict.leadForm}
              serviceOptions={serviceOptions}
              defaultServiceInterest={guide.category}
            />
          </div>

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
