import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  /** Omit for the current page (last crumb). */
  href?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  /** Accessible name for the nav, e.g. dict.common.breadcrumbLabel. */
  label: string
}

/** Accessible breadcrumb trail (`nav` + ordered list + aria-current). */
export function Breadcrumbs({ items, label }: BreadcrumbsProps) {
  return (
    <nav aria-label={label} className="text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-slate-500">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-navy-700 transition-colors hover:text-gold-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="text-slate-500"
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
