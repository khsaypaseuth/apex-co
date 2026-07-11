'use client'

import { useState } from 'react'
import type { VerificationStatus } from '@/lib/types'
import { LawTopicCard } from '@/components/LawTopicCard'
import {
  FilterBar,
  type FilterCategory,
  type FilterState,
} from '@/components/FilterBar'

/** Serializable law-topic metadata passed from the server page. */
export interface LawListItem {
  slug: string
  href: string
  title: string
  summary: string
  category: string
  categoryLabel: string
  verificationStatus: VerificationStatus
}

export interface LawListProps {
  items: LawListItem[]
  categories: FilterCategory[]
  verificationLabels: Record<VerificationStatus, string>
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

/** Client wrapper: FilterBar (search + 8 law-category pills) filtering the grid. */
export function LawList({
  items,
  categories,
  verificationLabels,
  labels,
}: LawListProps) {
  const [filter, setFilter] = useState<FilterState>({
    query: '',
    category: null,
  })

  const query = filter.query.trim().toLowerCase()
  const visible = items.filter((item) => {
    const matchesCategory =
      filter.category === null || item.category === filter.category
    const matchesQuery =
      query === '' ||
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query)
    return matchesCategory && matchesQuery
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
              <LawTopicCard
                key={item.slug}
                title={item.title}
                summary={item.summary}
                href={item.href}
                categoryLabel={item.categoryLabel}
                verificationStatus={item.verificationStatus}
                verificationLabels={verificationLabels}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
