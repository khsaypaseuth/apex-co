'use client'

import Link from 'next/link'
import type { ProjectStatus, ServiceCategorySlug } from '@/lib/types'
import { ProjectThumb } from './ProjectThumb'
import { Reveal } from './motion'

export interface ProjectCardProps {
  href: string
  title: string
  summary: string
  category: ServiceCategorySlug
  /** Localized capability name (resolved from the dictionary by the page). */
  categoryLabel: string
  status: ProjectStatus
  /** Localized status name. */
  statusLabel: string
  location: string
  year: number
  /** Headline engineering figure, when the project has one. */
  capacity?: string
}

/**
 * Portfolio card. The status pill is colour-coded but never colour-only —
 * 'ongoing' and 'completed' read as different words, so the distinction
 * survives greyscale and colour-vision deficiency.
 */
export function ProjectCard({
  href,
  title,
  summary,
  category,
  categoryLabel,
  status,
  statusLabel,
  location,
  year,
  capacity,
}: ProjectCardProps) {
  return (
    <Reveal className="h-full" variant="fade-up">
      <Link
        href={href}
        className="card-premium group flex h-full flex-col overflow-hidden rounded-sm border border-navy-950/10 bg-white focus-visible:outline-2 focus-visible:outline-gold-500"
      >
        <div className="relative aspect-video overflow-hidden">
          <ProjectThumb
            category={category}
            className="h-full w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
            <span className="rounded-sm bg-mist-100 px-2 py-1 font-medium tracking-wide text-navy-700 uppercase">
              {categoryLabel}
            </span>
            <span
              className={`rounded-sm px-2 py-1 font-medium tracking-wide uppercase ${
                status === 'ongoing'
                  ? 'bg-gold-500/15 text-gold-600'
                  : 'bg-navy-700/10 text-navy-700'
              }`}
            >
              {statusLabel}
            </span>
          </div>

          <h3 className="font-display mt-4 text-xl leading-snug text-navy-950 transition-colors group-hover:text-navy-700">
            {title}
          </h3>

          {capacity && (
            <p className="mt-2 font-mono text-sm text-gold-600">{capacity}</p>
          )}

          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
            {summary}
          </p>

          <p className="mt-5 text-xs text-slate-500">
            {location}
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            {year}
          </p>
        </div>
      </Link>
    </Reveal>
  )
}
