'use client'

import { useState } from 'react'
import type { ProjectStatus, ServiceCategorySlug } from '@/lib/types'
import { ProjectCard } from '@/components/ProjectCard'
import {
  FilterBar,
  type FilterCategory,
  type FilterState,
} from '@/components/FilterBar'

/** Serializable project metadata passed from the server page. */
export interface ProjectListItem {
  slug: string
  href: string
  title: string
  summary: string
  category: ServiceCategorySlug
  categoryLabel: string
  status: ProjectStatus
  statusLabel: string
  location: string
  year: number
  capacity?: string
}

export interface ProjectListProps {
  items: ProjectListItem[]
  categories: FilterCategory[]
  labels: {
    searchLabel: string
    searchPlaceholder: string
    allLabel: string
    categoriesLabel: string
    noResults: string
    countSingular: string
    countPlural: string
  }
}

/** Client wrapper: FilterBar (search + capability pills) filtering the grid. */
export function ProjectList({ items, categories, labels }: ProjectListProps) {
  const [filter, setFilter] = useState<FilterState>({
    query: '',
    category: null,
  })

  const query = filter.query.trim().toLowerCase()
  const visible = items.filter((item) => {
    const matchesCategory =
      filter.category === null || item.category === filter.category
    // Location and capacity are searchable too — "Savannakhet" and "115 kV"
    // are the terms a visitor actually types when scanning a portfolio.
    const haystack = [item.title, item.summary, item.location, item.capacity]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
    return matchesCategory && (query === '' || haystack.includes(query))
  })

  return (
    <div className="space-y-8">
      <FilterBar
        searchLabel={labels.searchLabel}
        searchPlaceholder={labels.searchPlaceholder}
        allLabel={labels.allLabel}
        categoriesLabel={labels.categoriesLabel}
        categories={categories}
        onChange={setFilter}
      />

      {visible.length === 0 ? (
        <p role="status" className="py-8 text-slate-600">
          {labels.noResults}
        </p>
      ) : (
        <>
          <p role="status" className="text-sm text-slate-600">
            {visible.length}{' '}
            {visible.length === 1 ? labels.countSingular : labels.countPlural}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <ProjectCard
                key={item.slug}
                href={item.href}
                title={item.title}
                summary={item.summary}
                category={item.category}
                categoryLabel={item.categoryLabel}
                status={item.status}
                statusLabel={item.statusLabel}
                location={item.location}
                year={item.year}
                capacity={item.capacity}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
