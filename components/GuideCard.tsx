import Link from 'next/link'

export interface GuideCardProps {
  title: string
  summary: string
  href: string
  /** CTA text, e.g. dict.cta.readGuide. */
  ctaLabel: string
  /** Optional localized category/eyebrow label. */
  eyebrow?: string
}

/** Downloadable-style business guide card with a gold top rule. */
export function GuideCard({
  title,
  summary,
  href,
  ctaLabel,
  eyebrow,
}: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-sm border border-navy-950/10 border-t-2 border-t-gold-500 bg-white p-6 transition-colors hover:border-gold-500 focus-visible:outline-2 focus-visible:outline-gold-500"
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-medium tracking-widest text-gold-600 uppercase">
          {eyebrow}
        </p>
      )}
      <h3 className="font-display text-xl leading-snug text-navy-950">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
        {summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors group-hover:text-gold-600">
        {ctaLabel}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  )
}
