'use client'

import { CONTACT } from '@/lib/site-config'
import { motion, useReducedMotion } from 'motion/react'

export interface FloatingContactButtonsProps {
  /** Accessible label, e.g. dict.floating.whatsapp. */
  whatsAppLabel: string
  /** Accessible label, e.g. dict.floating.line. */
  lineLabel: string
  /** Hover note marking the LINE placeholder, dict.floating.placeholderNote. */
  linePlaceholderNote: string
}

/**
 * Fixed WhatsApp + LINE contact buttons (bottom-right). WhatsApp opens the
 * real wa.me chat (CONTACT.whatsappHref, D-133). LINE has no official ID
 * yet — its href stays a placeholder, marked with a `title` attribute so
 * the state is visible on hover.
 */
export function FloatingContactButtons({
  whatsAppLabel,
  lineLabel,
  linePlaceholderNote,
}: FloatingContactButtonsProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="fixed right-5 bottom-5 z-40 flex flex-col gap-3"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
    >
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={whatsAppLabel}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy-950/20 transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-gold-500"
      >
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L4 20l1-4.5A8.5 8.5 0 1 1 21 11.5z" />
          <path d="M9 9.5c.5 2.5 3 5 5.5 5.5l1-1.5-2-1-1 .5c-.8-.5-1.5-1.2-2-2l.5-1-1-2L9 9.5z" />
        </svg>
      </a>
      {/* LINE placeholder — no official LINE ID yet (see decision log D-133). */}
      <a
        href="#"
        title={linePlaceholderNote}
        aria-label={lineLabel}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06C755] text-white shadow-lg shadow-navy-950/20 transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-gold-500"
      >
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10.8c0 4.3-4 7.7-9 7.7-.6 0-1.2 0-1.7-.1L6 20.5l.4-2.6C4.3 16.6 3 13.9 3 10.8 3 6.5 7 3 12 3s9 3.5 9 7.8z" />
          <path d="M8 9.5v3M11 9.5v3M14 9.5v3l2-3v3" strokeWidth="1.5" />
        </svg>
      </a>
    </motion.div>
  )
}
