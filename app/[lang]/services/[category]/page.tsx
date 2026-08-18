import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { StaticImageData } from 'next/image'
import { getDictionary, hasLocale, type Dictionary } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { listProjects } from '@/lib/content'
import { SERVICE_CATEGORY_SLUGS, type ServiceCategorySlug } from '@/lib/types'
import { getGroupsForCategory, getServicePageContent } from '@/lib/page-data'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
import { RelatedLinks } from '@/components/RelatedLinks'
import { RelatedServices } from '@/components/RelatedServices'
import { ScopeNote } from '@/components/ScopeNote'
import { SectionHeader } from '@/components/SectionHeader'
import electricalHero from '@/public/images/capabilities/electrical-substation-dusk.jpg'
import pilingHero from '@/public/images/capabilities/piling-foundation-site.jpg'
import roadsHero from '@/public/images/capabilities/roads-bridges-earthworks.jpg'
import buildingsHero from '@/public/images/capabilities/buildings-property-cranes.jpg'

/**
 * Capability page.
 *
 * The hero photograph shows the KIND of work the capability covers, not an
 * Apex site — the alt text stays generic for exactly that reason. Project
 * cards keep the drawn schematics, because a card sitting under a project
 * name would read as a claim about that specific job.
 */
const CAPABILITY_HERO: Record<
  ServiceCategorySlug,
  { image: StaticImageData; altKey: keyof Dictionary['alt'] }
> = {
  electrical: { image: electricalHero, altKey: 'substationDusk' },
  'piling-foundation': { image: pilingHero, altKey: 'pilingSite' },
  'roads-bridges': { image: roadsHero, altKey: 'roadEarthworks' },
  'buildings-property': { image: buildingsHero, altKey: 'buildingCranes' },
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
  const meta = dict.meta.serviceCategories[category]
  return pageMetadata({
    lang,
    path: `/services/${category}`,
    title: meta.title,
    description: meta.description,
  })
}

export default async function ServiceCategoryPage({
  params,
}: PageProps<'/[lang]/services/[category]'>) {
  const { lang, category } = await params

  if (!hasLocale(lang) || !isCategorySlug(category)) notFound()

  const dict = await getDictionary(lang)
  const page = getServicePageContent(lang, category)
  const groups = getGroupsForCategory(lang, category)
  const title = dict.serviceCategories[category]

  // Projects delivered under this capability (empty-safe until the portfolio
  // is populated — see content/en/projects/README.md).
  const relatedProjects = await listProjects(lang, category)

  // The other three capabilities.
  const otherServices = SERVICE_CATEGORY_SLUGS.filter(
    (slug) => slug !== category,
  ).map((slug) => ({
    label: dict.serviceCategories[slug],
    href: `/${lang}/services/${slug}`,
  }))

  return (
    <main id="main-content">
      <Hero
        eyebrow={dict.nav.services}
        title={title}
        lede={page.heroLede}
        image={{
          src: CAPABILITY_HERO[category].image,
          alt: dict.alt[CAPABILITY_HERO[category].altKey],
        }}
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
          <aside className="h-fit rounded-sm border-t-2 border-gold-500 bg-mist-100 p-7">
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

      {/* Services in this capability */}
      <section className="bg-mist-100 py-16 md:py-20">
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
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
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

      {/* Capability-specific topics */}
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

      {/* How a job runs — navy band */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl leading-tight text-mist-100 md:text-4xl">
            {dict.servicePage.processTitle}
          </h2>
          <div className="mt-5 h-px w-16 bg-gold-500" aria-hidden="true" />
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {page.process.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-3xl text-gold-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display mt-4 text-xl leading-snug text-mist-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-100/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Standards worked to + programme note + scope note */}
      <section className="bg-mist-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title={dict.servicePage.standardsTitle}
                lede={page.standards.intro}
              />
              <ul className="mt-8 space-y-3">
                {page.standards.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 text-gold-600">
                      →
                    </span>
                    <span className="text-navy-700/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic leading-relaxed text-slate-600">
                {page.standards.note}
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
            <ScopeNote label={dict.scopeNote.label} text={dict.scopeNote.text} />
          </div>
        </div>
      </section>

      {/* How Apex delivers + related links */}
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
            <RelatedLinks
              heading={dict.common.relatedProjects}
              items={relatedProjects.map((project) => ({
                label: project.title,
                href: `/${lang}/projects/${project.slug}`,
              }))}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title={dict.home.finalCtaTitle}
        lede={dict.home.finalCtaLede}
        ctaLabel={dict.cta.requestQuote}
        ctaHref={`/${lang}/contact`}
      />
    </main>
  )
}
