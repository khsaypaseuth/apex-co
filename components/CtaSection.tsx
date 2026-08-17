'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { GoldRule, Stagger, StaggerItem } from './motion'

export interface CtaSectionProps {
  title: string
  lede?: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel?: string
  secondaryHref?: string
  /**
   * Optional background image (static import), rendered under a navy scrim
   * gradient — strongest at the bottom where a lit horizon would otherwise
   * fight the ivory text (D-143). Default remains the plain navy band.
   */
  image?: { src: StaticImageData; alt: string }
}

/** Full-width navy call-to-action band with a gold primary button. */
export function CtaSection({
  title,
  lede,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  image,
}: CtaSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-16 md:py-20">
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            placeholder="blur"
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950/70 via-navy-950/80 to-navy-950/95"
            aria-hidden="true"
          />
        </>
      )}
      <Stagger
        className="mx-auto max-w-6xl px-6 text-center"
        stagger={0.1}
        delay={0.05}
      >
        <StaggerItem>
          <h2 className="font-display mx-auto max-w-3xl text-3xl leading-tight text-mist-100 md:text-4xl">
            {title}
          </h2>
        </StaggerItem>
        <StaggerItem>
          <GoldRule className="mx-auto my-6 w-16" center />
        </StaggerItem>
        {lede && (
          <StaggerItem>
            <p className="mx-auto max-w-2xl leading-relaxed text-mist-100/80">
              {lede}
            </p>
          </StaggerItem>
        )}
        <StaggerItem>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={ctaHref}
              className="btn-premium rounded-sm bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-600"
            >
              {ctaLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="rounded-sm border border-mist-100/40 px-6 py-3 font-medium text-mist-100 transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  )
}
