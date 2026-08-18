import Link from 'next/link'

export interface RelatedLink {
  label: string
  href: string
}

export interface RelatedLinksProps {
  /** Localized heading, e.g. dict.common.relatedProjects. */
  heading: string
  items: RelatedLink[]
}

/** Compact cross-link list — related projects, related reading. */
export function RelatedLinks({ heading, items }: RelatedLinksProps) {
  if (items.length === 0) return null

  return (
    <aside aria-label={heading}>
      <h2 className="text-sm font-semibold tracking-widest text-navy-700 uppercase">
        {heading}
      </h2>
      <div className="mt-3 h-px w-12 bg-gold-500" aria-hidden="true" />
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-baseline gap-2 text-navy-950 transition-colors hover:text-navy-700"
            >
              <span aria-hidden="true" className="text-gold-600">
                →
              </span>
              <span className="underline decoration-gold-500/40 underline-offset-4 group-hover:decoration-gold-500">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
