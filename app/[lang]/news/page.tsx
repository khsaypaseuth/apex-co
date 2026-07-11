import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { Hero } from '@/components/Hero'
// Location-generic aerial (no source location tag) — alt must NOT claim
// Vientiane/Laos; see public/images/ATTRIBUTIONS.md Notes and D-122/D-150.
import riversideCity from '@/public/images/hero/riverside-city-dusk-aerial.jpg'

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

/**
 * News & Updates — launches with a designed empty state and a CMS-ready
 * structure (`NewsItem` in lib/types.ts); no fake news items (decision D-010).
 */
export default async function NewsPage({ params }: PageProps<'/[lang]/news'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  const newsTypes = [
    dict.newsPage.types.legal,
    dict.newsPage.types.tax,
    dict.newsPage.types.visa,
    dict.newsPage.types.business,
    dict.newsPage.types.investment,
    dict.newsPage.types.company,
  ]

  return (
    <main id="main-content">
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.news}
        lede={dict.newsPage.lede}
        image={{ src: riversideCity, alt: dict.alt.riversideCity }}
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
        <div className="mx-auto max-w-3xl px-6">
          {/* Designed empty state */}
          <div className="rounded-sm border border-navy-950/10 border-t-2 border-t-gold-500 bg-white px-8 py-14 text-center">
            <span
              aria-hidden="true"
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ivory-100 text-gold-600"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h12v14H6a2 2 0 0 1-2-2V5z" />
                <path d="M16 8h4v9a2 2 0 0 1-2 2h-2V8z" />
                <path d="M7 9h6M7 12h6M7 15h4" />
              </svg>
            </span>
            <h2 className="font-display mt-6 text-2xl text-navy-950">
              {dict.newsPage.emptyTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-500">
              {dict.newsPage.emptyText}
            </p>
          </div>

          {/* What this section will cover */}
          <div className="mt-14 text-center">
            <h2 className="text-sm font-semibold tracking-widest text-navy-700 uppercase">
              {dict.newsPage.typesTitle}
            </h2>
            <div className="mx-auto mt-3 h-px w-12 bg-gold-500" aria-hidden="true" />
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {newsTypes.map((type) => (
                <li
                  key={type}
                  className="rounded-full border border-navy-950/15 bg-white px-4 py-1.5 text-sm text-navy-700"
                >
                  {type}
                </li>
              ))}
            </ul>
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
