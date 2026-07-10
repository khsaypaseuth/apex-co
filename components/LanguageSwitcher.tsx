'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n-config'

export interface LanguageOption {
  code: Locale
  label: string
}

export interface LanguageSwitcherProps {
  /** Currently active locale. */
  lang: Locale
  /** Accessible name for the switcher nav (dict.language.label). */
  label: string
  /** Active locales to offer (EN / ລາວ at launch). */
  options: LanguageOption[]
}

/**
 * Locale switcher that preserves the current path — it swaps only the
 * `/[lang]` segment (e.g. `/en/services` → `/lo/services`).
 */
export function LanguageSwitcher({ lang, label, options }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const rest = pathname.split('/').slice(2).join('/')

  const hrefFor = (code: Locale): string =>
    rest ? `/${code}/${rest}` : `/${code}`

  return (
    <nav aria-label={label} className="flex items-center text-sm">
      {options.map((option, index) => {
        const isCurrent = option.code === lang
        return (
          <span key={option.code} className="flex items-center">
            {index > 0 && (
              <span aria-hidden="true" className="mx-2 text-ivory-100/30">
                |
              </span>
            )}
            <Link
              href={hrefFor(option.code)}
              aria-current={isCurrent ? 'true' : undefined}
              className={
                isCurrent
                  ? 'font-semibold text-gold-500'
                  : 'text-ivory-100/85 transition-colors hover:text-gold-500'
              }
            >
              {option.label}
            </Link>
          </span>
        )
      })}
    </nav>
  )
}
