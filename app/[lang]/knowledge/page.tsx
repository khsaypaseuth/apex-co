import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { listArticles } from '@/lib/content'
import { ARTICLE_CATEGORIES } from '@/lib/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
import luangPrabangStreet from '@/public/images/sections/luang-prabang-street-corner.jpg'
import { ArticleList } from './article-list'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/knowledge'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/knowledge',
    title: dict.meta.knowledge.title,
    description: dict.meta.knowledge.description,
  })
}

export default async function KnowledgePage({
  params,
}: PageProps<'/[lang]/knowledge'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const articles = await listArticles(lang)

  const categories = ARTICLE_CATEGORIES.map((category) => ({
    value: category,
    label: dict.articleCategories[category],
  }))

  return (
    <main id="main-content">
      {/* Confirmed-Laos image (Luang Prabang) — alt may name the location */}
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.knowledge}
        lede={dict.knowledgePage.lede}
        image={{ src: luangPrabangStreet, alt: dict.alt.luangPrabangStreet }}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.knowledge },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {articles.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-sm border border-navy-950/10 border-t-2 border-t-gold-500 bg-white px-8 py-14 text-center">
              <h2 className="font-display text-2xl text-navy-950">
                {dict.knowledgePage.emptyTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-500">
                {dict.knowledgePage.emptyText}
              </p>
              <Link
                href={`/${lang}/services`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors hover:text-gold-600"
              >
                {dict.cta.exploreServices}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : (
            <>
              {/* sr-only section heading so card <h3>s don't skip a level */}
              <h2 className="sr-only">{dict.knowledgePage.articlesTitle}</h2>
              <ArticleList
              lang={lang}
              categories={categories}
              items={articles.map((article) => ({
                slug: article.slug,
                href: `/${lang}/knowledge/${article.slug}`,
                title: article.title,
                summary: article.summary,
                category: article.category,
                categoryLabel: dict.articleCategories[article.category],
                readingTime: article.readingTime,
                lastUpdated: article.lastUpdated,
              }))}
              labels={{
                searchLabel: dict.filter.searchLabel,
                searchPlaceholder: dict.filter.searchPlaceholder,
                allLabel: dict.filter.allCategories,
                categoriesLabel: dict.filter.categoriesLabel,
                noResults: dict.filter.noResults,
                countSingular: dict.knowledgePage.countSingular,
                countPlural: dict.knowledgePage.countPlural,
                lastUpdated: dict.common.lastUpdated,
                minRead: dict.common.minRead,
              }}
              />
            </>
          )}
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
