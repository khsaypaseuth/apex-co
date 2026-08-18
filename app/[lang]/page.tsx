import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { listProjects } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
import { Reveal } from '@/components/motion'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeader } from '@/components/SectionHeader'
import { ServiceCard } from '@/components/ServiceCard'
import { TrustBadge } from '@/components/TrustBadge'
import {
  IconBolt,
  IconBridge,
  IconBuilding,
  IconCheckCircle,
  IconHardHat,
  IconPile,
  IconRuler,
  IconTransmissionTower,
  IconTruck,
} from '@/components/icons'
import heroPowerLines from '@/public/images/hero/power-lines-dusk.jpg'
import riversideCity from '@/public/images/hero/riverside-city-dusk-aerial.jpg'

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

  // Newest three projects. Empty until the portfolio is populated, in which
  // case the section is skipped entirely rather than rendering an empty grid.
  const featuredProjects = (await listProjects(lang)).slice(0, 3)

  // Six capability highlights. Electrical leads because it is the core of the
  // business; the civil capabilities follow in the order Apex grew into them.
  const highlights = [
    {
      ...dict.home.highlights.electrical,
      href: `/${lang}/services/electrical`,
      icon: IconTransmissionTower,
    },
    {
      ...dict.home.highlights.equipment,
      href: `/${lang}/services/electrical`,
      icon: IconBolt,
    },
    {
      ...dict.home.highlights.piling,
      href: `/${lang}/services/piling-foundation`,
      icon: IconPile,
    },
    {
      ...dict.home.highlights.roadsBridges,
      href: `/${lang}/services/roads-bridges`,
      icon: IconBridge,
    },
    {
      ...dict.home.highlights.buildings,
      href: `/${lang}/services/buildings-property`,
      icon: IconBuilding,
    },
    {
      ...dict.home.highlights.realEstate,
      href: `/${lang}/services/buildings-property`,
      icon: IconRuler,
    },
  ]

  const whyPoints = [
    { ...dict.home.why.selfDelivery, icon: IconTruck },
    { ...dict.home.why.bothVoltages, icon: IconBolt },
    { ...dict.home.why.supplyAndInstall, icon: IconCheckCircle },
    { ...dict.home.why.testRecords, icon: IconCheckCircle },
    { ...dict.home.why.honestProgramme, icon: IconCheckCircle },
    { ...dict.home.why.trackRecord, icon: IconHardHat },
  ]

  return (
    <main id="main-content">
      {/* 1 — Hero. Transmission towers at dusk: the sky runs navy into gold,
          which is the brand palette, and the subject is the core business. */}
      <Hero
        variant="home"
        eyebrow={dict.site.tagline}
        title={dict.home.heroTitle}
        lede={dict.home.heroSubtitle}
        image={{ src: heroPowerLines, alt: dict.alt.heroPowerLines }}
        actions={
          <>
            <Link
              href={`/${lang}/contact`}
              className="btn-premium rounded-sm bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-600 hover:text-mist-100"
            >
              {dict.cta.requestQuote}
            </Link>
            <Link
              href={`/${lang}/services`}
              className="rounded-sm border border-mist-100/40 px-6 py-3 font-medium text-mist-100 transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              {dict.cta.exploreServices}
            </Link>
          </>
        }
      />

      {/* 2 — Trust statement band */}
      <section className="border-b border-navy-950/5 bg-mist-100">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-16">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-navy-950 md:text-3xl">
              {dict.home.trustStatement}
            </p>
            <div className="mt-7 flex justify-center">
              <TrustBadge text={dict.site.experienceLine} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Capability highlights */}
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

      {/* 4 — Why Apex (navy band) */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium tracking-widest text-gold-500 uppercase">
              {dict.home.whyEyebrow}
            </p>
            <h2 className="font-display text-3xl leading-tight text-mist-100 md:text-4xl">
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
                <h3 className="font-display mt-4 text-xl leading-snug text-mist-100">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-100/70">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Recent work. Skipped entirely while the portfolio is empty —
          a "Recent work" heading over nothing is worse than no section. */}
      {featuredProjects.length > 0 && (
        <section className="bg-mist-100 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeader
                eyebrow={dict.nav.projects}
                title={dict.home.projectsTitle}
                lede={dict.home.projectsLede}
              />
              <Link
                href={`/${lang}/projects`}
                className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors hover:text-gold-600"
              >
                {dict.cta.viewAll}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  href={`/${lang}/projects/${project.slug}`}
                  title={project.title}
                  summary={project.summary}
                  category={project.category}
                  categoryLabel={dict.serviceCategories[project.category]}
                  status={project.status}
                  statusLabel={dict.projectStatus[project.status]}
                  location={project.location}
                  year={project.year}
                  capacity={project.capacity}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6 — Final CTA */}
      <CtaSection
        image={{ src: riversideCity, alt: dict.alt.riversideCity }}
        title={dict.home.finalCtaTitle}
        lede={dict.home.finalCtaLede}
        ctaLabel={dict.cta.requestQuote}
        ctaHref={`/${lang}/contact`}
        secondaryLabel={dict.cta.exploreServices}
        secondaryHref={`/${lang}/services`}
      />
    </main>
  )
}
