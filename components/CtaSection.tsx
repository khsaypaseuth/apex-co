import Link from 'next/link'

export interface CtaSectionProps {
  title: string
  lede?: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

/** Full-width navy call-to-action band with a gold primary button. */
export function CtaSection({
  title,
  lede,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="bg-navy-950 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-display mx-auto max-w-3xl text-3xl leading-tight text-ivory-100 md:text-4xl">
          {title}
        </h2>
        <div className="mx-auto my-6 h-px w-16 bg-gold-500" aria-hidden="true" />
        {lede && (
          <p className="mx-auto max-w-2xl leading-relaxed text-ivory-100/80">
            {lede}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="rounded-sm bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-600"
          >
            {ctaLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="rounded-sm border border-ivory-100/40 px-6 py-3 font-medium text-ivory-100 transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
