import type { SVGProps } from 'react'
import type { Locale } from '@/lib/i18n-config'

/**
 * Hand-drawn inline SVG flags for the language switcher.
 * Rendered ~20×14 with a subtle ring on the navy header.
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

function ThailandFlagSvg(props: FlagSvgProps) {
  return (
    <svg viewBox="0 0 30 21" aria-hidden="true" focusable="false" {...props}>
      <rect width="30" height="21" fill="#A51931" />
      <rect y="3.5" width="30" height="14" fill="#F4F5F8" />
      <rect y="7" width="30" height="7" fill="#2D2A4A" />
    </svg>
  )
}

function VietnamFlagSvg(props: FlagSvgProps) {
  return (
    <svg viewBox="0 0 30 21" aria-hidden="true" focusable="false" {...props}>
      <rect width="30" height="21" fill="#DA251D" />
      <polygon
        fill="#FFFF00"
        points="15,4.2 16.6,9.2 21.9,9.2 17.65,12.3 19.25,17.3 15,14.2 10.75,17.3 12.35,12.3 8.1,9.2 13.4,9.2"
      />
    </svg>
  )
}

function ChinaFlagSvg(props: FlagSvgProps) {
  return (
    <svg viewBox="0 0 30 21" aria-hidden="true" focusable="false" {...props}>
      <rect width="30" height="21" fill="#DE2910" />
      <polygon
        fill="#FFDE00"
        points="5.5,3.2 6.35,5.85 9.1,5.85 6.9,7.5 7.75,10.15 5.5,8.5 3.25,10.15 4.1,7.5 1.9,5.85 4.65,5.85"
      />
    </svg>
  )
}

const FLAGS: Partial<Record<Locale, (props: FlagSvgProps) => React.JSX.Element>> =
  {
    en: UnionJackSvg,
    lo: LaosFlagSvg,
    th: ThailandFlagSvg,
    vi: VietnamFlagSvg,
    zh: ChinaFlagSvg,
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
      className={`inline-flex shrink-0 overflow-hidden rounded-[3px] ring-1 ring-mist-100/30 ${className ?? ''}`}
    >
      <Flag width={20} height={14} />
    </span>
  )
}
