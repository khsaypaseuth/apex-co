import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { listArticles } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { ArticleCard } from '@/components/ArticleCard'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
import { Reveal } from '@/components/motion'
import { SectionHeader } from '@/components/SectionHeader'
import { ServiceCard } from '@/components/ServiceCard'
import { TrustBadge } from '@/components/TrustBadge'
import {
  IconBookOpen,
  IconBriefcase,
  IconCalculator,
  IconCheckCircle,
  IconScale,
  IconShieldCheck,
  IconStamp,
  IconUsers,
} from '@/components/icons'
import heroPatuxai from '@/public/images/hero/patuxai-victory-gate-vientiane.jpg'
import cityNight from '@/public/images/sections/city-lights-night-skyline.jpg'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/',
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    absoluteTitle: true,
  })
}

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  // Prefer a curated, category-diverse trio so the home preview never
  // shows the same category thumbnail twice (cards key off category image).
  const HOME_ARTICLE_SLUGS = [
    'how-to-start-a-business-in-laos',
    'work-visa-and-work-permit-in-laos',
    'tax-registration-for-new-companies-in-laos',
  ] as const
  const allArticles = await listArticles(lang)
  const bySlug = new Map(allArticles.map((a) => [a.slug, a]))
  const curated = HOME_ARTICLE_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (a): a is NonNullable<typeof a> => Boolean(a),
  )
  const articles =
    curated.length === HOME_ARTICLE_SLUGS.length
      ? curated
      : (() => {
          const seen = new Set<string>()
          const picked = []
          for (const article of allArticles) {
            if (seen.has(article.category)) continue
            seen.add(article.category)
            picked.push(article)
            if (picked.length === 3) break
          }
          return picked
        })()

  // Six service highlights (master plan §Home — Service Highlights), each
  // linking to the page that covers it.
  const highlights = [
    {
      ...dict.home.highlights.businessRegistration,
      href: `/${lang}/services/business-setup`,
      icon: IconBriefcase,
    },
    {
      ...dict.home.highlights.visaImmigration,
      href: `/${lang}/services/visa-immigration`,
      icon: IconStamp,
    },
    {
      ...dict.home.highlights.legalServices,
      href: `/${lang}/services/legal-family`,
      icon: IconScale,
    },
    {
      ...dict.home.highlights.accountingTax,
      href: `/${lang}/services/accounting-tax`,
      icon: IconCalculator,
    },
    {
      ...dict.home.highlights.familyLegal,
      href: `/${lang}/services/legal-family`,
      icon: IconUsers,
    },
    {
      ...dict.home.highlights.laoKnowledge,
      href: `/${lang}/knowledge`,
      icon: IconBookOpen,
    },
  ]

  // Check icons for the proof points; shield for the parent-company backing.
  const whyPoints = [
    { ...dict.home.why.localKnowledge, icon: IconCheckCircle },
    { ...dict.home.why.practicalAdvice, icon: IconCheckCircle },
    { ...dict.home.why.clearProcess, icon: IconCheckCircle },
    { ...dict.home.why.transparentCommunication, icon: IconCheckCircle },
    { ...dict.home.why.companiesAndIndividuals, icon: IconCheckCircle },
    { ...dict.home.why.backedBySuperVision, icon: IconShieldCheck },
  ]

  return (
    <main id="main-content">
      {/* 1 — Hero (confirmed-Laos Mekong image under a navy overlay) */}
      <Hero
        variant="home"
        eyebrow={dict.site.name}
        title={dict.home.heroTitle}
        lede={dict.home.heroSubtitle}
        image={{ src: heroPatuxai, alt: dict.alt.heroPatuxai }}
        actions={
          <>
            <Link
              href={`/${lang}/contact`}
              className="btn-premium rounded-sm bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-600"
            >
              {dict.cta.bookConsultation}
            </Link>
            <Link
              href={`/${lang}/services`}
              className="rounded-sm border border-ivory-100/40 px-6 py-3 font-medium text-ivory-100 transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              {dict.cta.exploreServices}
            </Link>
          </>
        }
      />

      {/* 2 — Trust statement band */}
      <section className="border-b border-navy-950/5 bg-ivory-100">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-16">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-navy-950 md:text-3xl">
              {dict.home.trustStatement}
            </p>
            <div className="mt-7 flex justify-center">
              <TrustBadge text={dict.site.parentCompanyLine} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Service highlights */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow={dict.home.highlightsEyebrow}
            title={dict.home.highlightsTitle}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <ServiceCard
                key={`${item.href}-${item.title}`}
                title={item.title}
                summary={item.summary}
                href={item.href}
                linkLabel={dict.cta.learnMore}
                icon={
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-gold-500/10 text-gold-600">
                    <item.icon size={22} />
                  </span>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Why choose Super Consulting (navy band, numbered points) */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium tracking-widest text-gold-500 uppercase">
              {dict.home.whyEyebrow}
            </p>
            <h2 className="font-display text-3xl leading-tight text-ivory-100 md:text-4xl">
              {dict.home.whyTitle}
            </h2>
            <div className="mt-5 h-px w-16 bg-gold-500" aria-hidden="true" />
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point, index) => (
              <Reveal key={point.title} delay={0.06 * index}>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-500/10 text-gold-500"
                >
                  <point.icon size={20} />
                </span>
                <h3 className="font-display mt-4 text-xl leading-snug text-ivory-100">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-100/70">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Knowledge Center preview */}
      <section className="bg-ivory-100 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow={dict.nav.knowledge}
              title={dict.home.knowledgeTitle}
              lede={dict.home.knowledgeLede}
            />
            <Link
              href={`/${lang}/knowledge`}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors hover:text-gold-600"
            >
              {dict.cta.viewAll}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          {articles.length > 0 && (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
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
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6 — Final CTA (night-lights background; image is location-generic,
          so the alt never claims Laos — see D-143/D-122) */}
      <CtaSection
        image={{ src: cityNight, alt: dict.alt.cityNight }}
        title={dict.home.finalCtaTitle}
        lede={dict.home.finalCtaLede}
        ctaLabel={dict.cta.bookConsultation}
        ctaHref={`/${lang}/contact`}
        secondaryLabel={dict.cta.exploreServices}
        secondaryHref={`/${lang}/services`}
      />
    </main>
  )
}
