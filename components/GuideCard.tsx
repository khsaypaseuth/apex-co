'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { IconArrowRight } from './icons'
import { Reveal } from './motion'

export interface GuideCardProps {
  title: string
  summary: string
  href: string
  /** CTA text, e.g. dict.cta.readGuide. */
  ctaLabel: string
  /** Optional localized category/eyebrow label. */
  eyebrow?: string
  /**
   * Optional decorative thumbnail (static import). Rendered with empty alt —
   * the card's title/eyebrow carry the meaning, and several thumbnails are
   * not Laos (see D-122/D-140), so a text alternative would mislead.
   */
  image?: { src: StaticImageData }
}

/** Downloadable-style business guide card with a gold top rule. */
export function GuideCard({
  title,
  summary,
  href,
  ctaLabel,
  eyebrow,
  image,
}: GuideCardProps) {
  return (
    <Reveal className="h-full" variant="fade-up">
      <Link
        href={href}
        className="card-premium group flex h-full flex-col overflow-hidden rounded-sm border border-navy-950/10 border-t-2 border-t-gold-500 bg-white focus-visible:outline-2 focus-visible:outline-gold-500"
      >
        {image && (
          <div className="relative aspect-video overflow-hidden bg-ivory-100">
            <Image
              src={image.src}
              alt=""
              placeholder="blur"
              sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.05]"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          {eyebrow && (
            <p className="mb-3 text-xs font-medium tracking-widest text-gold-600 uppercase">
              {eyebrow}
            </p>
          )}
          <h3 className="font-display text-xl leading-snug text-navy-950">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
            {summary}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors group-hover:text-gold-600">
            {ctaLabel}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <IconArrowRight size={16} />
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
