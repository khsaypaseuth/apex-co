import Link from 'next/link'
import type { Locale } from '@/lib/i18n-config'
import { formatDate } from '@/lib/format'

export interface ArticleCardProps {
  lang: Locale
  href: string
  title: string
  summary: string
  /** Localized category name (resolved from the dictionary by the page). */
  categoryLabel: string
  /** Reading time in minutes. */
  readingTime: number
  /** ISO date string (frontmatter `lastUpdated`). */
  lastUpdated: string
  /** dict.common.lastUpdated / dict.common.minRead */
  labels: { lastUpdated: string; minRead: string }
}

/** Knowledge Center article card with category, reading time and date meta. */
export function ArticleCard({
  lang,
  href,
  title,
  summary,
  categoryLabel,
  readingTime,
  lastUpdated,
  labels,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-sm border border-navy-950/10 bg-white p-6 transition-colors hover:border-gold-500 focus-visible:outline-2 focus-visible:outline-gold-500"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
        <span className="rounded-sm bg-ivory-100 px-2 py-1 font-medium tracking-wide text-navy-700 uppercase">
          {categoryLabel}
        </span>
        <span className="text-slate-500">
          {readingTime} {labels.minRead}
        </span>
      </div>
      <h3 className="font-display mt-4 text-xl leading-snug text-navy-950 transition-colors group-hover:text-navy-700">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
        {summary}
      </p>
      <p className="mt-5 text-xs text-slate-500">
        {labels.lastUpdated}:{' '}
        <time dateTime={lastUpdated}>{formatDate(lang, lastUpdated)}</time>
      </p>
    </Link>
  )
}
