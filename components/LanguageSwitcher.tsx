'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n-config'
import { FlagIcon } from './flags'
import { IconChevronDown } from './icons'

export interface LanguageOption {
  code: Locale
  /**
   * Full language name (e.g. "English", "ພາສາລາວ"). Not rendered visibly in
   * the header dropdown (flags only, D-132) — carried by sr-only/title text.
   */
  label: string
}

export interface LanguageSwitcherProps {
  /** Currently active locale. */
  lang: Locale
  /** Accessible name for the switcher (dict.language.label). */
  label: string
  /** Active locales to offer (EN / ລາວ at launch). */
  options: LanguageOption[]
}

/**
 * Flag-only locale dropdown (D-132). The trigger shows the current locale's
 * flag + a chevron; the menu lists each locale as a flag icon. Language
 * names are provided to assistive tech via sr-only text and `title`.
 *
 * Keyboard support: Escape closes and returns focus to the trigger,
 * ArrowUp/ArrowDown move between options, Tab/outside-click close.
 * Switching preserves the current path — it swaps only the `/[lang]`
 * segment (e.g. `/en/services` → `/lo/services`).
 */
export function LanguageSwitcher({ lang, label, options }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const rest = pathname.split('/').slice(2).join('/')
  const hrefFor = (code: Locale): string =>
    rest ? `/${code}/${rest}` : `/${code}`

  const current = options.find((option) => option.code === lang)

  const close = useCallback((refocus = false) => {
    setOpen(false)
    if (refocus) triggerRef.current?.focus()
  }, [])

  // Close on outside click.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close()
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open, close])

  // Focus the first menu item when the menu opens.
  useEffect(() => {
    if (!open) return
    menuRef.current?.querySelector<HTMLElement>('a')?.focus()
  }, [open])

  const onMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      close(true)
      return
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const items = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>('a') ?? [],
      )
      if (items.length === 0) return
      const index = items.indexOf(document.activeElement as HTMLElement)
      const delta = event.key === 'ArrowDown' ? 1 : -1
      const next = items[(index + delta + items.length) % items.length]
      next?.focus()
      return
    }
    if (event.key === 'Tab') {
      // Let focus move on naturally, but close the menu.
      close()
    }
  }

  const onTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onTriggerKeyDown}
        className="flex items-center gap-1.5 rounded-sm px-1.5 py-1.5 text-mist-100/85 transition-colors hover:text-gold-500 focus-visible:outline-2 focus-visible:outline-gold-500"
      >
        <span className="sr-only">
          {label}
          {current ? ` — ${current.label}` : ''}
        </span>
        {current && <FlagIcon locale={current.code} />}
        <IconChevronDown
          size={14}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={label}
          onKeyDown={onMenuKeyDown}
          className="absolute right-0 top-full z-50 mt-2 flex flex-col gap-0.5 rounded-sm border border-mist-100/15 bg-navy-950/95 p-1.5 shadow-lg shadow-navy-950/30 backdrop-blur-sm"
        >
          {options.map((option) => {
            const isCurrent = option.code === lang
            return (
              <Link
                key={option.code}
                role="menuitem"
                href={hrefFor(option.code)}
                title={option.label}
                aria-current={isCurrent ? 'true' : undefined}
                onClick={() => close()}
                className={`flex items-center justify-center rounded-sm px-2.5 py-2 transition-colors hover:bg-navy-700/60 focus-visible:outline-2 focus-visible:outline-gold-500 ${
                  isCurrent ? 'bg-navy-700/40' : ''
                }`}
              >
                <span className="sr-only">{option.label}</span>
                <FlagIcon locale={option.code} />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
