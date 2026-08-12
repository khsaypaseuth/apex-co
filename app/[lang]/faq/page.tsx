import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { getFaqSections } from '@/lib/page-data'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaSection } from '@/components/CtaSection'
import { DisclaimerBox } from '@/components/DisclaimerBox'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Hero } from '@/components/Hero'
import { JsonLd } from '@/components/JsonLd'
import { faqPageJsonLd } from '@/lib/json-ld'
import calmWorkspace from '@/public/images/sections/calm-workspace.jpg'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/faq'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/faq',
    title: dict.meta.faq.title,
    description: dict.meta.faq.description,
  })
}

export default async function FaqPage({ params }: PageProps<'/[lang]/faq'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const faqSections = getFaqSections(lang)
  const faqLd = faqPageJsonLd(
    faqSections.flatMap((section) =>
      section.items.map((item) => ({
        question: item.question,
        answer: item.answer,
      })),
    ),
  )

  return (
    <main id="main-content">
      <JsonLd data={faqLd} />
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.faq}
        lede={dict.faqPage.lede}
        image={{ src: calmWorkspace, alt: dict.alt.calmWorkspace }}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.faq },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-14 px-6">
          {/* All five master-plan FAQ sections (content/{lang}/faq.ts) */}
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl leading-tight text-navy-950 md:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 h-px w-12 bg-gold-500" aria-hidden="true" />
              <div className="mt-6">
                <FaqAccordion items={section.items} />
              </div>
            </div>
          ))}

          <DisclaimerBox
            label={dict.legal.disclaimerLabel}
            text={dict.legal.disclaimer}
          />
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
