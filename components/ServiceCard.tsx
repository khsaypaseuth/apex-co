import Link from 'next/link'
import type { ReactNode } from 'react'

export interface ServiceCardProps {
  title: string
  summary: string
  href: string
  /** Link text, e.g. dict.cta.learnMore. */
  linkLabel: string
  /** Optional decorative icon (rendered aria-hidden). */
  icon?: ReactNode
}

/** Card linking to a service (category) page. */
export function ServiceCard({
  title,
  summary,
  href,
  linkLabel,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-sm border border-navy-950/10 bg-white p-6 transition-colors hover:border-gold-500 focus-visible:outline-2 focus-visible:outline-gold-500"
    >
      {icon && (
        <span aria-hidden="true" className="mb-4 text-gold-600">
          {icon}
        </span>
      )}
      <h3 className="font-display text-xl leading-snug text-navy-950">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
        {summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors group-hover:text-gold-600">
        {linkLabel}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  )
}
