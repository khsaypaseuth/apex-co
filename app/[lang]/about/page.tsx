import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/SectionHeader'
import { TrustBadge } from '@/components/TrustBadge'
import officeInterior from '@/public/images/sections/modern-office-interior.jpg'
import stoneColumns from '@/public/images/sections/stone-columns-corridor.jpg'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/about'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  }
}

export default async function AboutPage({ params }: PageProps<'/[lang]/about'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  const values = [
    dict.about.values.trust,
    dict.about.values.clarity,
    dict.about.values.professionalism,
    dict.about.values.practicalExecution,
    dict.about.values.confidentiality,
    dict.about.values.longTermRelationship,
  ]

  const steps = [
    dict.about.steps.consult,
    dict.about.steps.assess,
    dict.about.steps.execute,
    dict.about.steps.deliver,
  ]

  return (
    <main>
      <Hero
        eyebrow={dict.about.eyebrow}
        title={dict.about.title}
        lede={dict.about.lede}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.about },
            ]}
          />
        </div>
      </div>

      {/* Intro — text beside imagery */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-navy-700/90">
            <p>{dict.about.introP1}</p>
            <p>{dict.about.introP2}</p>
          </div>
          <Image
            src={officeInterior}
            alt={dict.alt.officeInterior}
            placeholder="blur"
            sizes="(min-width: 1024px) 550px, 100vw"
            className="h-72 w-full rounded-sm object-cover md:h-96"
          />
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-ivory-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div className="border-l-2 border-gold-500 pl-8">
            <h2 className="font-display text-2xl text-navy-950 md:text-3xl">
              {dict.about.missionTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-700/90">
              {dict.about.missionText}
            </p>
          </div>
          <div className="border-l-2 border-gold-500 pl-8">
            <h2 className="font-display text-2xl text-navy-950 md:text-3xl">
              {dict.about.visionTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-700/90">
              {dict.about.visionText}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow={dict.about.valuesEyebrow}
            title={dict.about.valuesTitle}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-sm border border-navy-950/10 bg-white p-6"
              >
                <h3 className="font-display text-xl text-navy-950">
                  {value.title}
                </h3>
                <div className="mt-3 h-px w-10 bg-gold-500" aria-hidden="true" />
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the firm works — 4 steps on navy */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-medium tracking-widest text-gold-500 uppercase">
            {dict.about.howEyebrow}
          </p>
          <h2 className="font-display text-3xl leading-tight text-ivory-100 md:text-4xl">
            {dict.about.howTitle}
          </h2>
          <div className="mt-5 h-px w-16 bg-gold-500" aria-hidden="true" />
          <p className="mt-5 max-w-2xl leading-relaxed text-ivory-100/80">
            {dict.about.howLede}
          </p>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-3xl text-gold-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display mt-4 text-xl leading-snug text-ivory-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-100/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Parent company */}
      <section className="bg-ivory-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Image
            src={stoneColumns}
            alt={dict.alt.stoneColumns}
            placeholder="blur"
            sizes="(min-width: 1024px) 550px, 100vw"
            className="order-last h-72 w-full rounded-sm object-cover lg:order-first md:h-96"
          />
          <div>
            <TrustBadge text={dict.site.parentCompanyLine} />
            <h2 className="font-display mt-6 text-3xl leading-tight text-navy-950 md:text-4xl">
              {dict.about.parentTitle}
            </h2>
            <div className="mt-5 h-px w-16 bg-gold-500" aria-hidden="true" />
            <p className="mt-5 leading-relaxed text-navy-700/90">
              {dict.about.parentText}
            </p>
          </div>
        </div>
      </section>

      <CtaSection
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
