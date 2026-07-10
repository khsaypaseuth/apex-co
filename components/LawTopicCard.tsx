import Link from 'next/link'
import type { VerificationStatus } from '@/lib/types'

export interface LawTopicCardProps {
  title: string
  summary: string
  href: string
  /** Localized law category name. */
  categoryLabel: string
  verificationStatus: VerificationStatus
  /** Localized badge labels (dict.verification.*). */
  verificationLabels: Record<VerificationStatus, string>
}

const BADGE_STYLES: Record<VerificationStatus, string> = {
  verified: 'border-gold-500 bg-gold-500/10 text-gold-600',
  'needs-verification': 'border-slate-500/50 bg-slate-500/10 text-slate-500',
  'general-info': 'border-navy-700/30 bg-navy-700/5 text-navy-700',
}

/** Lao Laws Library topic card, showing its verification status badge. */
export function LawTopicCard({
  title,
  summary,
  href,
  categoryLabel,
  verificationStatus,
  verificationLabels,
}: LawTopicCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-sm border border-navy-950/10 bg-white p-6 transition-colors hover:border-gold-500 focus-visible:outline-2 focus-visible:outline-gold-500"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-sm bg-ivory-100 px-2 py-1 font-medium tracking-wide text-navy-700 uppercase">
          {categoryLabel}
        </span>
        <span
          className={`rounded-sm border px-2 py-1 font-medium ${BADGE_STYLES[verificationStatus]}`}
        >
          {verificationLabels[verificationStatus]}
        </span>
      </div>
      <h3 className="font-display mt-4 text-xl leading-snug text-navy-950 transition-colors group-hover:text-navy-700">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
        {summary}
      </p>
    </Link>
  )
}
