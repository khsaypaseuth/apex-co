'use client'

import { useState } from 'react'
import {
  FilterBar,
  type FilterCategory,
  type FilterState,
} from '@/components/FilterBar'

export interface FilterDemoItem {
  title: string
  summary: string
  category: string
  categoryLabel: string
}

export interface FilterDemoProps {
  labels: {
    searchLabel: string
    searchPlaceholder: string
    allLabel: string
    categoriesLabel: string
    noResults: string
  }
  categories: FilterCategory[]
  items: FilterDemoItem[]
}

/** Styleguide-only client wrapper demonstrating FilterBar's callback API. */
export function FilterDemo({ labels, categories, items }: FilterDemoProps) {
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
    <div className="space-y-6">
      <FilterBar
        searchLabel={labels.searchLabel}
        searchPlaceholder={labels.searchPlaceholder}
        allLabel={labels.allLabel}
        categoriesLabel={labels.categoriesLabel}
        categories={categories}
        onChange={setFilter}
      />
      {visible.length === 0 ? (
        <p className="text-slate-500">{labels.noResults}</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {visible.map((item) => (
            <li
              key={item.title}
              className="rounded-sm border border-navy-950/10 bg-white p-5"
            >
              <p className="text-xs font-medium tracking-wide text-navy-700 uppercase">
                {item.categoryLabel}
              </p>
              <p className="font-display mt-2 text-lg text-navy-950">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {item.summary}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
