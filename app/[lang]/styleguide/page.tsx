import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { getArticle } from '@/lib/content'
import type { FaqItem } from '@/lib/types'
import { ArticleCard } from '@/components/ArticleCard'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactForm } from '@/components/ContactForm'
import { CtaSection } from '@/components/CtaSection'
import { DisclaimerBox } from '@/components/DisclaimerBox'
import { FaqAccordion } from '@/components/FaqAccordion'
import { GuideCard } from '@/components/GuideCard'
import { Hero } from '@/components/Hero'
import { LawTopicCard } from '@/components/LawTopicCard'
import { RelatedArticles } from '@/components/RelatedArticles'
import { RelatedServices } from '@/components/RelatedServices'
import { SectionHeader } from '@/components/SectionHeader'
import { ServiceCard } from '@/components/ServiceCard'
import { TrustBadge } from '@/components/TrustBadge'
import { FilterDemo } from './filter-demo'

/**
 * Internal component styleguide for visual QA in both locales
 * (Phase 2 deliverable; noindexed, removed or kept noindexed at launch).
 */
export const metadata: Metadata = {
  title: 'Styleguide',
  robots: { index: false, follow: false },
}

/** Styleguide-only section wrapper (component names are technical labels). */
function Demo({ name, children }: { name: string; children: ReactNode }) {
  return (
    <section className="border-t border-navy-950/10 py-12">
      <p className="mb-6 font-mono text-xs tracking-widest text-slate-500 uppercase">
        {name}
      </p>
      {children}
    </section>
  )
}

export default async function StyleguidePage({
  params,
}: PageProps<'/[lang]/styleguide'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  // Sample article via the real content pipeline (falls back to EN until
  // the Lao content phase lands).
  const articleSlug = 'how-to-start-a-business-in-laos'
  const article =
    (await getArticle(lang, articleSlug)) ?? (await getArticle('en', articleSlug))
  if (!article) {
    throw new Error(
      `Styleguide sample article missing: content/en/articles/${articleSlug}.md`,
    )
  }

  const serviceCards = [
    { title: dict.nav.businessSetup, slug: 'business-setup' },
    { title: dict.nav.visaImmigration, slug: 'visa-immigration' },
    { title: dict.nav.legalFamily, slug: 'legal-family' },
    { title: dict.nav.accountingTax, slug: 'accounting-tax' },
  ]

  const faqItems: FaqItem[] = [
    { question: dict.nav.businessSetup, answer: dict.common.sampleContent },
    { question: dict.nav.visaImmigration, answer: dict.common.sampleContent },
    { question: dict.nav.accountingTax, answer: dict.common.sampleContent },
  ]

  const contactMethods = [
    { value: 'email', label: dict.contactForm.methods.email },
    { value: 'phone', label: dict.contactForm.methods.phone },
    { value: 'whatsapp', label: dict.contactForm.methods.whatsapp },
    { value: 'line', label: dict.contactForm.methods.line },
  ]

  const serviceOptions = serviceCards.map((service) => ({
    value: service.slug,
    label: service.title,
  }))

  const filterCategories = [
    {
      value: 'starting-a-business',
      label: dict.articleCategories['starting-a-business'],
    },
    { value: 'tax-accounting', label: dict.articleCategories['tax-accounting'] },
    {
      value: 'visa-immigration',
      label: dict.articleCategories['visa-immigration'],
    },
  ]

  const filterItems = [
    {
      title: article.title,
      summary: article.summary,
      category: 'starting-a-business',
      categoryLabel: dict.articleCategories['starting-a-business'],
    },
    {
      title: dict.nav.accountingTax,
      summary: dict.common.sampleContent,
      category: 'tax-accounting',
      categoryLabel: dict.articleCategories['tax-accounting'],
    },
    {
      title: dict.nav.visaImmigration,
      summary: dict.common.sampleContent,
      category: 'visa-immigration',
      categoryLabel: dict.articleCategories['visa-immigration'],
    },
  ]

  return (
    <>

      <main id="main-content">
        <Hero
          variant="page"
          eyebrow={dict.site.name}
          title={dict.home.heroTitle}
          lede={dict.home.heroSubtitle}
          actions={
            <>
              <a
                href={`/${lang}/contact`}
                className="rounded-sm bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-600"
              >
                {dict.cta.bookConsultation}
              </a>
              <a
                href={`/${lang}/services`}
                className="rounded-sm border border-ivory-100/40 px-6 py-3 font-medium text-ivory-100 transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                {dict.cta.exploreServices}
              </a>
            </>
          }
        />

        <div className="mx-auto max-w-6xl px-6">
          <Demo name="SectionHeader">
            <SectionHeader
              eyebrow={dict.nav.services}
              title={dict.footer.ourServices}
              lede={dict.site.tagline}
            />
          </Demo>

          <Demo name="TrustBadge / Breadcrumbs">
            <div className="space-y-6">
              <TrustBadge text={dict.site.parentCompanyLine} />
              <Breadcrumbs
                label={dict.common.breadcrumbLabel}
                items={[
                  { label: dict.nav.home, href: `/${lang}` },
                  { label: dict.nav.knowledge, href: `/${lang}/knowledge` },
                  { label: article.title },
                ]}
              />
            </div>
          </Demo>

          <Demo name="ServiceCard">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCards.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  summary={dict.common.sampleContent}
                  href={`/${lang}/services/${service.slug}`}
                  linkLabel={dict.cta.learnMore}
                />
              ))}
            </div>
          </Demo>

          <Demo name="ArticleCard / GuideCard">
            <div className="grid gap-5 sm:grid-cols-2">
              <ArticleCard
                lang={lang}
                href={`/${lang}/knowledge/${article.slug}`}
                title={article.title}
                summary={article.summary}
                slug={article.slug}
                category={article.category}
                categoryLabel={dict.articleCategories[article.category]}
                readingTime={article.readingTime}
                lastUpdated={article.lastUpdated}
                labels={{
                  lastUpdated: dict.common.lastUpdated,
                  minRead: dict.common.minRead,
                }}
              />
              <GuideCard
                title={article.title}
                summary={article.summary}
                href={`/${lang}/guides`}
                ctaLabel={dict.cta.readGuide}
                eyebrow={dict.nav.guides}
              />
            </div>
          </Demo>

          <Demo name="LawTopicCard (all verification states)">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <LawTopicCard
                title={dict.lawCategories['company-law']}
                summary={dict.common.sampleContent}
                href={`/${lang}/laws`}
                categoryLabel={dict.lawCategories['company-law']}
                verificationStatus="verified"
                verificationLabels={{
                  verified: dict.verification.verified,
                  'needs-verification': dict.verification.needsVerification,
                  'general-info': dict.verification.generalInfo,
                }}
              />
              <LawTopicCard
                title={dict.lawCategories['tax-law']}
                summary={dict.common.sampleContent}
                href={`/${lang}/laws`}
                categoryLabel={dict.lawCategories['tax-law']}
                verificationStatus="needs-verification"
                verificationLabels={{
                  verified: dict.verification.verified,
                  'needs-verification': dict.verification.needsVerification,
                  'general-info': dict.verification.generalInfo,
                }}
              />
              <LawTopicCard
                title={dict.lawCategories['family-law']}
                summary={dict.common.sampleContent}
                href={`/${lang}/laws`}
                categoryLabel={dict.lawCategories['family-law']}
                verificationStatus="general-info"
                verificationLabels={{
                  verified: dict.verification.verified,
                  'needs-verification': dict.verification.needsVerification,
                  'general-info': dict.verification.generalInfo,
                }}
              />
            </div>
          </Demo>

          <Demo name="FilterBar">
            <FilterDemo
              labels={{
                searchLabel: dict.filter.searchLabel,
                searchPlaceholder: dict.filter.searchPlaceholder,
                allLabel: dict.filter.allCategories,
                categoriesLabel: dict.filter.categoriesLabel,
                noResults: dict.filter.noResults,
              }}
              categories={filterCategories}
              items={filterItems}
            />
          </Demo>

          <Demo name="FaqAccordion">
            <FaqAccordion items={faqItems} />
          </Demo>

          <Demo name="DisclaimerBox">
            <DisclaimerBox
              label={dict.legal.disclaimerLabel}
              text={dict.legal.disclaimer}
            />
          </Demo>

          <Demo name="RelatedArticles / RelatedServices">
            <div className="grid gap-10 sm:grid-cols-2">
              <RelatedArticles
                heading={dict.common.relatedArticles}
                items={[
                  {
                    label: article.title,
                    href: `/${lang}/knowledge/${article.slug}`,
                  },
                  { label: dict.nav.knowledge, href: `/${lang}/knowledge` },
                ]}
              />
              <RelatedServices
                heading={dict.common.relatedServices}
                items={serviceCards.map((service) => ({
                  label: service.title,
                  href: `/${lang}/services/${service.slug}`,
                }))}
              />
            </div>
          </Demo>

          <Demo name="Markdown pipeline (getArticle → prose-article)">
            <article className="max-w-3xl">
              <h2 className="font-display text-2xl text-navy-950">
                {article.title}
              </h2>
              <div
                className="prose-article mt-6"
                dangerouslySetInnerHTML={{ __html: article.html }}
              />
            </article>
          </Demo>

          <Demo name="ContactForm">
            <div className="max-w-2xl">
              <ContactForm
                labels={{
                  fullName: dict.contactForm.fullName,
                  company: dict.contactForm.company,
                  email: dict.contactForm.email,
                  phone: dict.contactForm.phone,
                  preferredContact: dict.contactForm.preferredContact,
                  serviceNeeded: dict.contactForm.serviceNeeded,
                  message: dict.contactForm.message,
                  selectPlaceholder: dict.contactForm.selectPlaceholder,
                  required: dict.contactForm.required,
                  submit: dict.contactForm.submit,
                  demoNotice: dict.contactForm.demoNotice,
                }}
                contactMethods={contactMethods}
                serviceOptions={serviceOptions}
              />
            </div>
          </Demo>
        </div>

        <CtaSection
          title={dict.home.heroTitle}
          lede={dict.home.trustLine}
          ctaLabel={dict.cta.bookConsultation}
          ctaHref={`/${lang}/contact`}
          secondaryLabel={dict.cta.exploreServices}
          secondaryHref={`/${lang}/services`}
        />
      </main>

    </>
  )
}
