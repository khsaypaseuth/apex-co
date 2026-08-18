'use client'

import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  /** Omit for the current page (last crumb). */
  href?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  /** Accessible name for the nav, e.g. dict.common.breadcrumbLabel. */
  label: string
  /**
   * 'on-dark' for the navy project header, where the default navy-on-light
   * link colour would be nearly invisible.
   */
  variant?: 'on-light' | 'on-dark'
}

/** Accessible breadcrumb trail (`nav` + ordered list + aria-current). */
export function Breadcrumbs({
  items,
  label,
  variant = 'on-light',
}: BreadcrumbsProps) {
  const reduce = useReducedMotion()
  const onDark = variant === 'on-dark'
  const separatorClass = onDark ? 'text-mist-100/50' : 'text-slate-500'
  const linkClass = onDark
    ? 'text-mist-100/85 transition-colors hover:text-gold-500'
    : 'text-navy-700 transition-colors hover:text-gold-600'
  const currentClass = onDark ? 'text-mist-100/70' : 'text-slate-600'

  return (
    <motion.nav
      aria-label={label}
      className="text-sm"
      initial={reduce ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className={separatorClass}>
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={currentClass}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </motion.nav>
  )
}
