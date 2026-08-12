'use client'

import Image, { type StaticImageData } from 'next/image'
import type { ReactNode } from 'react'
import { GoldRule, Reveal, Stagger, StaggerItem } from './motion'

export interface HeroProps {
  /** 'home' — tall landing hero; 'page' — short inner-page banner. */
  variant?: 'home' | 'page'
  eyebrow?: string
  title: string
  lede?: string
  /** Optional background image, rendered under a navy overlay for contrast. */
  image?: { src: string | StaticImageData; alt: string }
  /** CTA buttons/links rendered under the lede. */
  actions?: ReactNode
}

/**
 * Navy hero band. The home variant is tall and centered; the page variant is
 * a short left-aligned banner. Background images always sit under a
 * navy-950 overlay so ivory text keeps WCAG-safe contrast.
 */
export function Hero({
  variant = 'page',
  eyebrow,
  title,
  lede,
  image,
  actions,
}: HeroProps) {
  const tall = variant === 'home'
  const center = tall ? 'text-center' : ''
  const centerBlock = tall ? 'mx-auto' : ''

  return (
    <section
      className={`relative isolate overflow-hidden bg-navy-950 ${
        tall ? 'flex min-h-[70vh] items-center py-28 md:py-36' : 'py-16 md:py-24'
      }`}
    >
      {image && (
        <>
          <Reveal
            variant="fade"
            immediate
            className="absolute inset-0 -z-20"
            delay={0}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              placeholder={typeof image.src === 'string' ? 'empty' : 'blur'}
              sizes="100vw"
              className="object-cover motion-safe:animate-hero-kenburns"
            />
          </Reveal>
          {/* Graded scrim: heavier at the edges where eyebrow/CTAs sit, lighter
              mid-frame so the photo reads through; ivory/gold text stays AA. */}
          <div
            className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950/80 via-navy-950/55 to-navy-950/85"
            aria-hidden="true"
          />
        </>
      )}

      <Stagger
        className={`mx-auto w-full max-w-6xl px-6 ${center}`}
        immediate
        stagger={0.1}
        delay={0.08}
      >
        {eyebrow && (
          <StaggerItem>
            <p className="mb-4 text-sm font-medium tracking-widest text-gold-500 uppercase">
              {eyebrow}
            </p>
          </StaggerItem>
        )}
        <StaggerItem>
          <h1
            className={`font-display max-w-3xl text-ivory-100 ${centerBlock} ${
              tall
                ? 'text-4xl leading-tight md:text-6xl'
                : 'text-3xl leading-tight md:text-5xl'
            }`}
          >
            {title}
          </h1>
        </StaggerItem>
        <StaggerItem>
          <GoldRule
            className={`my-6 w-20 ${centerBlock}`}
            center={tall}
            immediate
          />
        </StaggerItem>
        {lede && (
          <StaggerItem>
            <p
              className={`max-w-2xl text-lg leading-relaxed text-ivory-100/80 ${centerBlock}`}
            >
              {lede}
            </p>
          </StaggerItem>
        )}
        {actions && (
          <StaggerItem>
            <div
              className={`mt-10 flex flex-wrap gap-4 ${
                tall ? 'items-center justify-center' : ''
              }`}
            >
              {actions}
            </div>
          </StaggerItem>
        )}
      </Stagger>
    </section>
  )
}
