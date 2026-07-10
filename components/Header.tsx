'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n-config'
import { LanguageSwitcher, type LanguageOption } from './LanguageSwitcher'
import { MobileNav } from './MobileNav'

export interface HeaderNavItem {
  label: string
  href: string
}

export interface HeaderProps {
  lang: Locale
  /**
   * 'solid'      — sticky navy bar (default, inner pages).
   * 'transparent' — fixed, transparent over the hero, turns navy on scroll.
   */
  variant?: 'solid' | 'transparent'
  siteName: string
  navItems: HeaderNavItem[]
  /** Accessible name for the desktop nav (dict.nav.mainNavLabel). */
  navLabel: string
  ctaLabel: string
  ctaHref: string
  languageLabel: string
  languageOptions: LanguageOption[]
  /** dict.nav.menu / openMenu / closeMenu */
  menuLabels: { menu: string; open: string; close: string }
}

/**
 * Site header. Client component only because the transparent variant reacts
 * to scroll (transparent over the hero → navy once the page scrolls).
 */
export function Header({
  lang,
  variant = 'solid',
  siteName,
  navItems,
  navLabel,
  ctaLabel,
  ctaHref,
  languageLabel,
  languageOptions,
  menuLabels,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (variant !== 'transparent') return

    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [variant])

  const solid = variant === 'solid' || scrolled

  return (
    <header
      className={[
        'inset-x-0 top-0 z-40 transition-colors duration-300',
        variant === 'transparent' ? 'fixed' : 'sticky',
        solid
          ? 'bg-navy-950/95 shadow-md shadow-navy-950/20 backdrop-blur-sm'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href={`/${lang}`}
          className="font-display text-lg tracking-wide text-ivory-100 transition-colors hover:text-gold-500"
        >
          {siteName}
        </Link>

        <nav aria-label={navLabel} className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ivory-100/85 transition-colors hover:text-gold-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher
            lang={lang}
            label={languageLabel}
            options={languageOptions}
          />
          <Link
            href={ctaHref}
            className="hidden rounded-sm bg-gold-500 px-4 py-2 text-sm font-medium text-navy-950 transition-colors hover:bg-gold-600 sm:inline-block"
          >
            {ctaLabel}
          </Link>
          <MobileNav
            items={navItems}
            menuLabel={menuLabels.menu}
            openLabel={menuLabels.open}
            closeLabel={menuLabels.close}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
          />
        </div>
      </div>
    </header>
  )
}
