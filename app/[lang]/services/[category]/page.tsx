import type { Metadata } from 'next'
import type { StaticImageData } from 'next/image'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Dictionary } from '@/lib/dictionaries'
import { listArticles } from '@/lib/content'
import {
  SERVICE_CATEGORY_SLUGS,
  type ServiceCategorySlug,
} from '@/lib/types'
import { servicePages } from '@/content/en/service-pages'
import { groupsForCategory } from '@/content/en/services'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { DisclaimerBox } from '@/components/DisclaimerBox'
import { Hero } from '@/components/Hero'
import { RelatedArticles } from '@/components/RelatedArticles'
import { RelatedServices } from '@/components/RelatedServices'
import { SectionHeader } from '@/components/SectionHeader'
import contractSigning from '@/public/images/sections/contract-signing.jpg'
import passportStamps from '@/public/images/sections/passport-stamps.jpg'
import handshakeOverTable from '@/public/images/sections/handshake-over-table.jpg'
import accountingDesk from '@/public/images/sections/accounting-calculator-report.jpg'

/** Per-category wiring: dictionary keys + hero image (static import → blur). */
const CATEGORY_CONFIG: Record<
  ServiceCategorySlug,
  {
    dictKey: 'businessSetup' | 'visaImmigration' | 'legalFamily' | 'accountingTax'
    image: StaticImageData
    altKey: keyof Dictionary['alt']
  }
> = {
  'business-setup': {
    dictKey: 'businessSetup',
    image: contractSigning,
    altKey: 'contractSigning',
  },
  'visa-immigration': {
    dictKey: 'visaImmigration',
    image: passportStamps,
    altKey: 'passportStamps',
  },
  'legal-family': {
    dictKey: 'legalFamily',
    image: handshakeOverTable,
    altKey: 'handshake',
  },
  'accounting-tax': {
    dictKey: 'accountingTax',
    image: accountingDesk,
    altKey: 'accountingDesk',
  },
}

function isCategorySlug(value: string): value is ServiceCategorySlug {
  return (SERVICE_CATEGORY_SLUGS as readonly string[]).includes(value)
}

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICE_CATEGORY_SLUGS.map((category) => ({ category }))
}

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/services/[category]'>): Promise<Metadata> {
  const { lang, category } = await params
  if (!hasLocale(lang) || !isCategorySlug(category)) return {}
  const dict = await getDictionary(lang)
  const meta = dict.meta[CATEGORY_CONFIG[category].dictKey]
  return { title: meta.title, description: meta.description }
}

export default async function ServiceCategoryPage({
  params,
}: PageProps<'/[lang]/services/[category]'>) {
  const { lang, category } = await params

  if (!hasLocale(lang) || !isCategorySlug(category)) notFound()

  const dict = await getDictionary(lang)
  const config = CATEGORY_CONFIG[category]
  const page = servicePages[category]
  const groups = groupsForCategory(category)
  const title = dict.nav[config.dictKey]

  // Knowledge Center articles related to this service area (empty-safe).
  const relatedArticles = (await listArticles(lang)).filter((article) =>
    article.relatedServices.includes(category),
  )

  // The other three service areas.
  const otherServices = SERVICE_CATEGORY_SLUGS.filter(
    (slug) => slug !== category,
  ).map((slug) => ({
    label: dict.nav[CATEGORY_CONFIG[slug].dictKey],
    href: `/${lang}/services/${slug}`,
  }))

  return (
    <main>
      <Hero
        eyebrow={dict.nav.services}
        title={title}
        lede={page.heroLede}
        image={{ src: config.image, alt: dict.alt[config.altKey] }}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.services, href: `/${lang}/services` },
              { label: title },
            ]}
          />
        </div>
      </div>

      {/* Overview + who this is for */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeader title={dict.servicePage.overviewTitle} />
            <div className="mt-6 space-y-5 leading-relaxed text-navy-700/90">
              {page.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-sm border-t-2 border-gold-500 bg-ivory-100 p-7">
            <h2 className="font-display text-xl text-navy-950">
              {dict.servicePage.whoTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {page.whoItsFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-0.5 text-gold-600">
                    →
                  </span>
                  <span className="text-navy-700/90">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Services in this area — exact master-plan lists */}
      <section className="bg-ivory-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader title={dict.servicePage.servicesInAreaTitle} />
          <div className="mt-10 space-y-12">
            {groups.map((group) => (
              <div key={group.id}>
                {groups.length > 1 && (
                  <h3 className="font-display mb-6 text-2xl text-navy-950">
                    {group.title}
                  </h3>
                )}
                <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
                  {group.services.map((service) => (
                    <li key={service.slug} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-px w-6 shrink-0 bg-gold-500"
                      />
                      <div>
                        <p className="font-medium text-navy-950">
                          {service.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-500">
                          {service.summary}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page-specific topics */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-12 px-6 sm:grid-cols-2">
          {page.topics.map((topic) => (
            <div key={topic.heading}>
              <h2 className="font-display text-xl leading-snug text-navy-950">
                {topic.heading}
              </h2>
              <div className="mt-3 h-px w-10 bg-gold-500" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-navy-700/90">
                {topic.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process overview — navy band */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl leading-tight text-ivory-100 md:text-4xl">
            {dict.servicePage.processTitle}
          </h2>
          <div className="mt-5 h-px w-16 bg-gold-500" aria-hidden="true" />
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {page.process.map((step, index) => (
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

      {/* Documents commonly required + timeline note + disclaimer */}
      <section className="bg-ivory-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title={dict.servicePage.documentsTitle}
                lede={page.documents.intro}
              />
              <ul className="mt-8 space-y-3">
                {page.documents.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 text-gold-600">
                      →
                    </span>
                    <span className="text-navy-700/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic leading-relaxed text-slate-500">
                {page.documents.note}
              </p>
            </div>
            <div className="h-fit rounded-sm border border-navy-950/10 bg-white p-7">
              <h3 className="font-display text-xl text-navy-950">
                {dict.servicePage.timelineTitle}
              </h3>
              <div className="mt-3 h-px w-10 bg-gold-500" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-navy-700/90">
                {page.timelineNote}
              </p>
            </div>
          </div>
          <div className="mt-12">
            <DisclaimerBox
              label={dict.legal.disclaimerLabel}
              text={dict.legal.disclaimer}
            />
          </div>
        </div>
      </section>

      {/* How SV Consulting helps + related links */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeader title={dict.servicePage.helpTitle} />
            <ul className="mt-8 space-y-3">
              {page.howWeHelp.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="mt-0.5 text-gold-600">
                    ✓
                  </span>
                  <span className="text-navy-700/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10">
            <RelatedServices
              heading={dict.servicePage.otherServicesTitle}
              items={otherServices}
            />
            <RelatedArticles
              heading={dict.common.relatedArticles}
              items={relatedArticles.map((article) => ({
                label: article.title,
                href: `/${lang}/knowledge/${article.slug}`,
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
