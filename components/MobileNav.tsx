'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n-config'
import { FlagIcon } from './flags'
import type { LanguageOption } from './LanguageSwitcher'

export interface MobileNavItem {
  label: string
  href: string
}

/** A group of links, optionally under a small uppercase heading. */
export interface MobileNavGroup {
  /** Optional group heading (e.g. dict.footer.knowledge — "Knowledge"). */
  heading?: string
  items: MobileNavItem[]
}

export interface MobileNavProps {
  /**
   * The FULL page list (D-130): the slimmed desktop nav omits the
   * knowledge pages, but the slide-over keeps everything, grouped.
   */
  groups: MobileNavGroup[]
  /** Accessible name for the dialog/nav (dict.nav.menu). */
  menuLabel: string
  /** dict.nav.openMenu */
  openLabel: string
  /** dict.nav.closeMenu */
  closeLabel: string
  ctaLabel: string
  ctaHref: string
  /** Language switcher rendered inside the panel (flag + full name). */
  language: {
    lang: Locale
    /** Accessible/section label (dict.language.label). */
    label: string
    options: LanguageOption[]
  }
}

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])'

/**
 * Accessible mobile slide-over navigation: focus is trapped inside the
 * panel while open, Escape closes it and returns focus to the trigger,
 * and body scroll is locked. Unlike the flag-only header dropdown, the
 * language links here show flag + language name — the panel has room and
 * names read clearer in a menu list (D-132).
 */
export function MobileNav({
  groups,
  menuLabel,
  openLabel,
  closeLabel,
  ctaLabel,
  ctaHref,
  language,
}: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  const rest = pathname.split('/').slice(2).join('/')
  const hrefForLocale = (code: Locale): string =>
    rest ? `/${code}/${rest}` : `/${code}`

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!open) return

    const panel = panelRef.current
    panel?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key !== 'Tab' || !panel) return

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, close])

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-sm text-ivory-100 transition-colors hover:text-gold-500 focus-visible:outline-2 focus-visible:outline-gold-500"
      >
        <span className="sr-only">{openLabel}</span>
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-navy-950/60 motion-safe:animate-in motion-safe:fade-in"
            aria-hidden="true"
            onClick={close}
            style={{ animation: 'fadeInOverlay 0.3s ease forwards' }}
          />
          <div
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={menuLabel}
            className="absolute inset-y-0 right-0 flex w-80 max-w-[85vw] flex-col overflow-y-auto bg-navy-950 p-6 shadow-2xl"
            style={{ animation: 'slideInPanel 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-sm text-ivory-100 transition-colors hover:text-gold-500 focus-visible:outline-2 focus-visible:outline-gold-500"
              >
                <span className="sr-only">{closeLabel}</span>
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav aria-label={menuLabel} className="mt-6">
              {groups.map((group, groupIndex) => (
                <div key={group.heading ?? groupIndex}>
                  {group.heading && (
                    <p className="mt-8 text-xs font-semibold tracking-widest text-gold-500 uppercase">
                      {group.heading}
                    </p>
                  )}
                  <div className={`flex flex-col ${group.heading ? 'mt-1' : ''}`}>
                    {group.items.map((item) => {
                      const active =
                        pathname === item.href ||
                        pathname.startsWith(`${item.href}/`)
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? 'page' : undefined}
                          className={`border-b border-ivory-100/10 py-3 transition-colors hover:text-gold-500 ${
                            active ? 'text-gold-500' : 'text-ivory-100/90'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))}
            </nav>

            {/* Language — flag + name (names kept for clarity in the panel) */}
            <div className="mt-8">
              <p className="text-xs font-semibold tracking-widest text-gold-500 uppercase">
                {language.label}
              </p>
              <div className="mt-1 flex flex-col">
                {language.options.map((option) => {
                  const isCurrent = option.code === language.lang
                  return (
                    <Link
                      key={option.code}
                      href={hrefForLocale(option.code)}
                      onClick={() => setOpen(false)}
                      aria-current={isCurrent ? 'true' : undefined}
                      className={`flex items-center gap-3 border-b border-ivory-100/10 py-3 transition-colors hover:text-gold-500 ${
                        isCurrent ? 'text-gold-500' : 'text-ivory-100/90'
                      }`}
                    >
                      <FlagIcon locale={option.code} />
                      {option.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-8 rounded-sm bg-gold-500 px-5 py-3 text-center font-medium text-navy-950 transition-colors hover:bg-gold-600"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
