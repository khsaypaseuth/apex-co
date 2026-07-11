import type { SVGProps } from 'react'
import type { Locale } from '@/lib/i18n-config'

/**
 * Hand-drawn inline SVG flags for the language switcher (D-132).
 *
 * Rendered ~20×14 with a subtle ring so light details (e.g. the white
 * circle of the Lao flag) stay readable on the navy header. Both flags are
 * drawn on a 30×21 (10:7) canvas — simplified but proportionally faithful:
 *   - UK: standard Union Jack construction (diagonals simplified — no
 *     counterchange offset at this size).
 *   - Laos: red / double-height blue / red horizontal bands with a centred
 *     white circle (diameter ≈ 0.8 of the blue band height).
 */

type FlagSvgProps = SVGProps<SVGSVGElement>

function UnionJackSvg(props: FlagSvgProps) {
  return (
    <svg viewBox="0 0 30 21" aria-hidden="true" focusable="false" {...props}>
      <rect width="30" height="21" fill="#012169" />
      <path d="M0 0l30 21M30 0L0 21" stroke="#ffffff" strokeWidth="4.2" />
      <path d="M0 0l30 21M30 0L0 21" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M15 0v21M0 10.5h30" stroke="#ffffff" strokeWidth="7" />
      <path d="M15 0v21M0 10.5h30" stroke="#C8102E" strokeWidth="4.2" />
    </svg>
  )
}

function LaosFlagSvg(props: FlagSvgProps) {
  return (
    <svg viewBox="0 0 30 21" aria-hidden="true" focusable="false" {...props}>
      <rect width="30" height="21" fill="#CE1126" />
      <rect y="5.25" width="30" height="10.5" fill="#002868" />
      <circle cx="15" cy="10.5" r="4.2" fill="#ffffff" />
    </svg>
  )
}

const FLAGS: Partial<Record<Locale, (props: FlagSvgProps) => React.JSX.Element>> = {
  en: UnionJackSvg,
  lo: LaosFlagSvg,
}

export interface FlagIconProps {
  locale: Locale
  className?: string
}

/**
 * Rounded flag chip. Decorative only (`aria-hidden`) — accessible language
 * names must be provided by the caller (sr-only text / aria-label / title).
 */
export function FlagIcon({ locale, className }: FlagIconProps) {
  const Flag = FLAGS[locale]
  if (!Flag) return null
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 overflow-hidden rounded-[3px] ring-1 ring-ivory-100/30 ${className ?? ''}`}
    >
      <Flag width={20} height={14} />
    </span>
  )
}
