import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { PARENT_COMPANY } from '@/lib/site-config'

// Minimal placeholder home page — replaced with the full design in Phase 4.
export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-1 flex-col items-center justify-center bg-navy-950 px-6 py-24 text-center">
        <p className="mb-6 text-sm tracking-widest text-gold-500 uppercase">
          {dict.site.name}
        </p>
        <h1 className="font-display max-w-3xl text-4xl leading-tight text-ivory-100 md:text-6xl">
          {dict.home.heroTitle}
        </h1>
        <div className="my-8 h-px w-24 bg-gold-500" aria-hidden="true" />
        <p className="max-w-2xl text-lg leading-relaxed text-ivory-100/80">
          {dict.home.heroSubtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`/${lang}/contact`}
            className="rounded-sm bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-600"
          >
            {dict.cta.bookConsultation}
          </a>
          <a
            href={`/${lang}/services`}
            className="rounded-sm border border-ivory-100/40 px-6 py-3 font-medium text-ivory-100 transition-colors hover:border-gold-500 hover:text-gold-500"
          >
            {dict.cta.exploreServices}
          </a>
        </div>
      </section>
      <footer className="bg-ivory-100 px-6 py-8 text-center">
        <p className="text-sm text-navy-700">{dict.home.trustLine}</p>
        <p className="mt-2 text-xs text-slate-500">
          © {new Date().getFullYear()} {dict.site.name} · {PARENT_COMPANY} ·{' '}
          {dict.footer.rights}
        </p>
      </footer>
    </main>
  )
}
