import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ActiveLocale } from '@/lib/dictionaries'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { localePath, pageMetadata } from '@/lib/seo'
import { getProject, listProjectSlugs } from '@/lib/content'
import { SITE_URL } from '@/lib/site-config'
import {
  SERVICE_CATEGORY_SLUGS,
  type Project,
  type ServiceCategorySlug,
} from '@/lib/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { JsonLd } from '@/components/JsonLd'
import { ProjectThumb } from '@/components/ProjectThumb'
import { RelatedLinks } from '@/components/RelatedLinks'
import { RelatedServices } from '@/components/RelatedServices'
import { ScopeNote } from '@/components/ScopeNote'
import { projectJsonLd } from '@/lib/json-ld'

/**
 * Project detail page. Facts that belong in a spec table (capacity, client,
 * location, dates) render as a definition list rather than being buried in
 * prose — it is what a procurement reader scans for first, and it gives the
 * structured data below something exact to mirror.
 */

function isCategorySlug(value: string): value is ServiceCategorySlug {
  return (SERVICE_CATEGORY_SLUGS as readonly string[]).includes(value)
}

async function resolveProject(
  lang: ActiveLocale,
  slug: string,
): Promise<Project | null> {
  return (await getProject(lang, slug)) ?? (await getProject('en', slug))
}

export async function generateStaticParams() {
  const slugs = new Set([
    ...(await listProjectSlugs('en')),
    ...(await listProjectSlugs('lo')),
  ])
  return [...slugs].map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/projects/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  if (!hasLocale(lang)) return {}
  const project = await resolveProject(lang, slug)
  if (!project) return {}
  return pageMetadata({
    lang,
    path: `/projects/${slug}`,
    title: project.title,
    description: project.summary,
    ogType: 'article',
  })
}

export default async function ProjectPage({
  params,
}: PageProps<'/[lang]/projects/[slug]'>) {
  const { lang, slug } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const project = await resolveProject(lang, slug)

  if (!project) notFound()

  const relatedProjects = (
    await Promise.all(
      project.relatedProjects.map((related) => resolveProject(lang, related)),
    )
  ).filter((related): related is Project => related !== null)

  const relatedServices = project.relatedServices
    .filter(isCategorySlug)
    .map((category) => ({
      label: dict.serviceCategories[category],
      href: `/${lang}/services/${category}`,
    }))

  const facts = [
    { term: dict.projectPage.capability, value: dict.serviceCategories[project.category] },
    { term: dict.projectPage.status, value: dict.projectStatus[project.status] },
    { term: dict.projectPage.location, value: project.location },
    { term: dict.projectPage.year, value: String(project.year) },
    ...(project.client
      ? [{ term: dict.projectPage.client, value: project.client }]
      : []),
    ...(project.capacity
      ? [{ term: dict.projectPage.capacity, value: project.capacity }]
      : []),
  ]

  return (
    <main id="main-content">
      <JsonLd
        data={projectJsonLd({
          name: project.title,
          description: project.summary,
          url: `${SITE_URL}${localePath(lang, `/projects/${slug}`)}`,
          location: project.location,
          year: project.year,
          status: project.status,
          inLanguage: project.lang,
        })}
      />

      {/* Header — schematic band over the navy field */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <ProjectThumb
            category={project.category}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-20">
          <Breadcrumbs
            variant="on-dark"
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.projects, href: `/${lang}/projects` },
              { label: project.title },
            ]}
          />
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-sm bg-mist-100 px-2 py-1 font-medium tracking-wide text-navy-700 uppercase">
              {dict.serviceCategories[project.category]}
            </span>
            <span className="rounded-sm border border-gold-500/60 px-2 py-1 font-medium tracking-wide text-gold-500 uppercase">
              {dict.projectStatus[project.status]}
            </span>
          </div>
          <h1 className="font-display mt-5 text-3xl leading-tight text-mist-100 md:text-5xl">
            {project.title}
          </h1>
          <div className="mt-6 h-px w-16 bg-gold-500" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-mist-100/80">
            {project.summary}
          </p>
          {project.lang !== lang && (
            <p className="mt-6 rounded-sm border border-gold-500/40 bg-gold-500/10 px-3 py-2 text-sm text-mist-100">
              {dict.common.contentInEnglish}
            </p>
          )}
        </div>
      </section>

      {/* Spec table + scope of works */}
      <section className="bg-mist-100 py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="sr-only">{dict.projectPage.factsTitle}</h2>
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.term}>
                <dt className="text-xs font-semibold tracking-widest text-slate-600 uppercase">
                  {fact.term}
                </dt>
                <dd className="mt-1 text-navy-950">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl text-navy-950">
            {dict.projectPage.scopeTitle}
          </h2>
          <div className="mt-4 h-px w-12 bg-gold-500" aria-hidden="true" />
          <ul className="mt-6 space-y-3">
            {project.scope.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-navy-950">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {project.html.trim() !== '' && (
            <div
              className="prose-article mt-12"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
          )}

          <div className="mt-12">
            <ScopeNote label={dict.scopeNote.label} text={dict.scopeNote.text} />
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <RelatedServices
              heading={dict.common.relatedServices}
              items={relatedServices}
            />
            <RelatedLinks
              heading={dict.common.relatedProjects}
              items={relatedProjects.map((related) => ({
                label: related.title,
                href: `/${lang}/projects/${related.slug}`,
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
