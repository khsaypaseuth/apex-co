import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { SERVICE_CATEGORY_SLUGS, type FaqItem } from '@/lib/types'
import { getFaqSections } from '@/lib/page-data'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactForm } from '@/components/ContactForm'
import { CtaSection } from '@/components/CtaSection'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Hero } from '@/components/Hero'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectThumb } from '@/components/ProjectThumb'
import { RelatedLinks } from '@/components/RelatedLinks'
import { RelatedServices } from '@/components/RelatedServices'
import { ScopeNote } from '@/components/ScopeNote'
import { SectionHeader } from '@/components/SectionHeader'
import { ServiceCard } from '@/components/ServiceCard'
import { TrustBadge } from '@/components/TrustBadge'
import { FilterDemo } from './filter-demo'

/**
 * Internal component styleguide for visual QA across all five locales.
 * Noindexed via the metadata below and disallowed in app/robots.ts.
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

  const capabilities = SERVICE_CATEGORY_SLUGS.map((slug) => ({
    slug,
    title: dict.serviceCategories[slug],
  }))

  // Real FAQ entries rather than placeholders — the accordion's behaviour with
  // genuinely long answers is the thing worth eyeballing here.
  const faqItems: FaqItem[] = getFaqSections(lang)[0].items.slice(0, 3)

  const contactMethods = [
    { value: 'email', label: dict.contactForm.methods.email },
    { value: 'phone', label: dict.contactForm.methods.phone },
    { value: 'whatsapp', label: dict.contactForm.methods.whatsapp },
    { value: 'line', label: dict.contactForm.methods.line },
  ]

  const serviceOptions = capabilities.map((capability) => ({
    value: capability.slug,
    label: capability.title,
  }))

  const filterCategories = capabilities.map((capability) => ({
    value: capability.slug,
    label: capability.title,
  }))

  const filterItems = capabilities.map((capability) => ({
    title: capability.title,
    summary: dict.common.sampleContent,
    category: capability.slug,
    categoryLabel: capability.title,
  }))

  return (
    <main id="main-content">
      <Hero
        variant="page"
        eyebrow={dict.site.tagline}
        title={dict.home.heroTitle}
        lede={dict.home.heroSubtitle}
        actions={
          <>
            <a
              href={`/${lang}/contact`}
              className="rounded-sm bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-600 hover:text-mist-100"
            >
              {dict.cta.requestQuote}
            </a>
            <a
              href={`/${lang}/services`}
              className="rounded-sm border border-mist-100/40 px-6 py-3 font-medium text-mist-100 transition-colors hover:border-gold-500 hover:text-gold-500"
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

        <Demo name="TrustBadge / Breadcrumbs (both variants)">
          <div className="space-y-6">
            <TrustBadge text={dict.site.experienceLine} />
            <Breadcrumbs
              label={dict.common.breadcrumbLabel}
              items={[
                { label: dict.nav.home, href: `/${lang}` },
                { label: dict.nav.projects, href: `/${lang}/projects` },
                { label: capabilities[0].title },
              ]}
            />
            <div className="rounded-sm bg-navy-950 p-6">
              <Breadcrumbs
                variant="on-dark"
                label={dict.common.breadcrumbLabel}
                items={[
                  { label: dict.nav.home, href: `/${lang}` },
                  { label: dict.nav.projects, href: `/${lang}/projects` },
                  { label: capabilities[0].title },
                ]}
              />
            </div>
          </div>
        </Demo>

        <Demo name="ProjectThumb (all four capabilities)">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <figure key={capability.slug}>
                <ProjectThumb
                  category={capability.slug}
                  className="aspect-video w-full rounded-sm"
                />
                <figcaption className="mt-2 font-mono text-xs text-slate-500">
                  {capability.slug}
                </figcaption>
              </figure>
            ))}
          </div>
        </Demo>

        <Demo name="ServiceCard">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <ServiceCard
                key={capability.slug}
                title={capability.title}
                summary={dict.common.sampleContent}
                href={`/${lang}/services/${capability.slug}`}
                linkLabel={dict.cta.learnMore}
              />
            ))}
          </div>
        </Demo>

        <Demo name="ProjectCard (both statuses)">
          <div className="grid gap-5 sm:grid-cols-2">
            <ProjectCard
              href={`/${lang}/projects`}
              title={capabilities[0].title}
              summary={dict.common.sampleContent}
              category="electrical"
              categoryLabel={capabilities[0].title}
              status="completed"
              statusLabel={dict.projectStatus.completed}
              location="Vientiane Capital"
              year={2025}
              capacity="115/22 kV, 2 × 25 MVA"
            />
            <ProjectCard
              href={`/${lang}/projects`}
              title={capabilities[2].title}
              summary={dict.common.sampleContent}
              category="roads-bridges"
              categoryLabel={capabilities[2].title}
              status="ongoing"
              statusLabel={dict.projectStatus.ongoing}
              location="Savannakhet Province"
              year={2026}
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

        <Demo name="ScopeNote">
          <ScopeNote label={dict.scopeNote.label} text={dict.scopeNote.text} />
        </Demo>

        <Demo name="RelatedLinks / RelatedServices">
          <div className="grid gap-10 sm:grid-cols-2">
            <RelatedLinks
              heading={dict.common.relatedProjects}
              items={[
                { label: dict.nav.projects, href: `/${lang}/projects` },
                { label: dict.nav.news, href: `/${lang}/news` },
              ]}
            />
            <RelatedServices
              heading={dict.common.relatedServices}
              items={capabilities.map((capability) => ({
                label: capability.title,
                href: `/${lang}/services/${capability.slug}`,
              }))}
            />
          </div>
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
