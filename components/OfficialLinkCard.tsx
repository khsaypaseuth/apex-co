'use client'

import Image from 'next/image'
import type { OfficialLink } from '@/content/links'
import { officialLinkName } from '@/content/links'
import type { Locale } from '@/lib/i18n-config'
import { Reveal } from './motion'

export function OfficialLinkCard({
  link,
  lang,
}: {
  link: OfficialLink
  lang: Locale
}) {
  const name = officialLinkName(link, lang)
  return (
    <Reveal className="h-full" variant="scale">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-premium group flex h-full flex-col items-center gap-4 rounded-sm border border-navy-950/10 bg-white px-4 py-6 text-center focus-visible:outline-2 focus-visible:outline-gold-500"
      >
        <span className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-sm bg-mist-100 p-2 transition-transform duration-500 motion-safe:group-hover:scale-105">
          <Image
            src={link.logo}
            alt=""
            width={80}
            height={80}
            className="h-full w-full object-contain"
          />
        </span>
        <span className="text-sm leading-snug font-medium text-navy-950 transition-colors group-hover:text-navy-700">
          {name}
        </span>
        <span className="mt-auto text-xs tracking-wide text-gold-600 uppercase">
          {new URL(link.url).hostname.replace(/^www\./, '')}
        </span>
      </a>
    </Reveal>
  )
}
