import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { listProjects } from '@/lib/content'
import { SERVICE_CATEGORY_SLUGS } from '@/lib/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
import structuralColumns from '@/public/images/sections/structural-columns-corridor.jpg'
import { ProjectList } from './project-list'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/projects'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/projects',
    title: dict.meta.projects.title,
    description: dict.meta.projects.description,
  })
}

export default async function ProjectsPage({
  params,
}: PageProps<'/[lang]/projects'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const projects = await listProjects(lang)

  const categories = SERVICE_CATEGORY_SLUGS.map((category) => ({
    value: category,
    label: dict.serviceCategories[category],
  }))

  return (
    <main id="main-content">
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.projects}
        lede={dict.projectsPage.lede}
        image={{ src: structuralColumns, alt: dict.alt.structuralColumns }}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.projects },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {projects.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-sm border border-navy-950/10 border-t-2 border-t-gold-500 bg-white px-8 py-14 text-center">
              <h2 className="font-display text-2xl text-navy-950">
                {dict.projectsPage.emptyTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-500">
                {dict.projectsPage.emptyText}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors hover:text-gold-600"
              >
                {dict.cta.contactUs}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : (
            <>
              {/* sr-only section heading so card <h3>s don't skip a level */}
              <h2 className="sr-only">{dict.projectsPage.listTitle}</h2>
              <ProjectList
                categories={categories}
                items={projects.map((project) => ({
                  slug: project.slug,
                  href: `/${lang}/projects/${project.slug}`,
                  title: project.title,
                  summary: project.summary,
                  category: project.category,
                  categoryLabel: dict.serviceCategories[project.category],
                  status: project.status,
                  statusLabel: dict.projectStatus[project.status],
                  location: project.location,
                  year: project.year,
                  capacity: project.capacity,
                }))}
                labels={{
                  searchLabel: dict.filter.searchLabel,
                  searchPlaceholder: dict.filter.searchPlaceholder,
                  allLabel: dict.filter.allCategories,
                  categoriesLabel: dict.filter.categoriesLabel,
                  noResults: dict.filter.noResults,
                  countSingular: dict.projectsPage.countSingular,
                  countPlural: dict.projectsPage.countPlural,
                }}
              />
            </>
          )}
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
