'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logoApex from '@/public/images/brand/logo-apex-white.png'
import type { Locale } from '@/lib/i18n-config'
import { LanguageSwitcher, type LanguageOption } from './LanguageSwitcher'
import { MobileNav, type MobileNavGroup } from './MobileNav'

export interface HeaderNavItem {
  label: string
  href: string
}

export interface HeaderProps {
  lang: Locale
  /**
   * 'solid'      — sticky navy bar (inner pages).
   * 'transparent' — fixed, transparent over the hero, turns navy on scroll.
   * 'auto' (default) — transparent on the locale home page, solid elsewhere;
   *                    lets the layout render one global header.
   */
  variant?: 'solid' | 'transparent' | 'auto'
  siteName: string
  /** Slimmed desktop nav — the slide-over gets the full list. */
  navItems: HeaderNavItem[]
  /** Full grouped page list for the mobile slide-over. */
  mobileGroups: MobileNavGroup[]
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
  variant = 'auto',
  siteName,
  navItems,
  mobileGroups,
  navLabel,
  ctaLabel,
  ctaHref,
  languageLabel,
  languageOptions,
  menuLabels,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`
  const resolved: 'solid' | 'transparent' =
    variant === 'auto' ? (isHome ? 'transparent' : 'solid') : variant

  useEffect(() => {
    if (resolved !== 'transparent') return

    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [resolved])

  const solid = resolved === 'solid' || scrolled

  return (
    <header
      className={[
        // z-50 (above the z-40 floating contact buttons) — the header is a
        // stacking context, so the mobile menu overlay inside it can never
        // out-stack later fixed siblings on its own.
        'inset-x-0 top-0 z-50 transition-colors duration-300',
        resolved === 'transparent' ? 'fixed' : 'sticky',
        solid
          ? 'bg-navy-950/95 shadow-md shadow-navy-950/20 backdrop-blur-sm'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href={`/${lang}`}
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Image
            src={logoApex}
            alt={siteName}
            className="h-12 w-auto"
            preload
          />
        </Link>

        <nav aria-label={navLabel} className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm transition-colors hover:text-gold-500 ${
                  active ? 'text-gold-500' : 'text-mist-100/85'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher
            lang={lang}
            label={languageLabel}
            options={languageOptions}
          />
          <Link
            href={ctaHref}
            className="btn-premium hidden rounded-sm bg-gold-500 px-4 py-2 text-sm font-medium text-navy-950 transition-colors hover:bg-gold-600 hover:text-mist-100 sm:inline-block"
          >
            {ctaLabel}
          </Link>
          <MobileNav
            groups={mobileGroups}
            menuLabel={menuLabels.menu}
            openLabel={menuLabels.open}
            closeLabel={menuLabels.close}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
            language={{
              lang,
              label: languageLabel,
              options: languageOptions,
            }}
          />
        </div>
      </div>
    </header>
  )
}
