export interface TrustBadgeProps {
  /** Badge text, e.g. dict.site.experienceLine. */
  text: string
}

/**
 * Small gold-accented trust marker. Apex is a standalone company, so this
 * carries the track-record line (years on site across piling, roads, bridges,
 * buildings, and power works) rather than parent-company backing.
 */
export function TrustBadge({ text }: TrustBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-sm border border-gold-500/50 bg-mist-100 px-3 py-1.5 text-xs font-medium tracking-wide text-navy-950">
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold-600"
      >
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      {text}
    </span>
  )
}
