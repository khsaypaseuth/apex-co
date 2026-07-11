import Image, { type StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

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
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority // hero images are always above the fold (LCP)
            placeholder={typeof image.src === 'string' ? 'empty' : 'blur'}
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            className="absolute inset-0 -z-10 bg-navy-950/75"
            aria-hidden="true"
          />
        </>
      )}

      <div className={`mx-auto w-full max-w-6xl px-6 ${center}`}>
        {eyebrow && (
          <p className="mb-4 text-sm font-medium tracking-widest text-gold-500 uppercase">
            {eyebrow}
          </p>
        )}
        <h1
          className={`font-display max-w-3xl text-ivory-100 ${centerBlock} ${
            tall
              ? 'text-4xl leading-tight md:text-6xl'
              : 'text-3xl leading-tight md:text-5xl'
          }`}
        >
          {title}
        </h1>
        <div
          className={`my-6 h-px w-20 bg-gold-500 ${centerBlock}`}
          aria-hidden="true"
        />
        {lede && (
          <p
            className={`max-w-2xl text-lg leading-relaxed text-ivory-100/80 ${centerBlock}`}
          >
            {lede}
          </p>
        )}
        {actions && (
          <div
            className={`mt-10 flex flex-wrap gap-4 ${
              tall ? 'items-center justify-center' : ''
            }`}
          >
            {actions}
          </div>
        )}
      </div>
    </section>
  )
}
