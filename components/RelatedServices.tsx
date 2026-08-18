import Link from 'next/link'
import type { RelatedLink } from './RelatedLinks'

export interface RelatedServicesProps {
  /** Localized heading, e.g. dict.common.relatedServices. */
  heading: string
  items: RelatedLink[]
}

/** Related services rendered as small link chips. */
export function RelatedServices({ heading, items }: RelatedServicesProps) {
  if (items.length === 0) return null

  return (
    <aside aria-label={heading}>
      <h2 className="text-sm font-semibold tracking-widest text-navy-700 uppercase">
        {heading}
      </h2>
      <div className="mt-3 h-px w-12 bg-gold-500" aria-hidden="true" />
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-block rounded-sm border border-navy-700/30 bg-white px-3 py-1.5 text-sm text-navy-700 transition-colors hover:border-gold-500 hover:text-gold-600"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
