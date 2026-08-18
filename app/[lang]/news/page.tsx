import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
import siteCrew from '@/public/images/sections/site-crew-warehouse.jpg'

/**
 * News & Updates. Apex has no announcements to publish yet, so the page ships
 * as a designed empty state rather than with invented posts — the `NewsItem`
 * type and this route are in place for when there is real news.
 */
export async function generateMetadata({
  params,
}: PageProps<'/[lang]/news'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/news',
    title: dict.meta.news.title,
    description: dict.meta.news.description,
  })
}

export default async function NewsPage({ params }: PageProps<'/[lang]/news'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main id="main-content">
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.news}
        lede={dict.newsPage.lede}
        image={{ src: siteCrew, alt: dict.alt.siteCrew }}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.news },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-xl px-6">
          <div className="rounded-sm border border-navy-950/10 border-t-2 border-t-gold-500 bg-white px-8 py-14 text-center">
            <h2 className="font-display text-2xl text-navy-950">
              {dict.newsPage.emptyTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-500">
              {dict.newsPage.emptyText}
            </p>
            <Link
              href={`/${lang}/projects`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors hover:text-gold-600"
            >
              {dict.cta.viewProjects}
              <span aria-hidden="true">→</span>
            </Link>
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
