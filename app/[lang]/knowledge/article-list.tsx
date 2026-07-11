'use client'

import { useState } from 'react'
import type { Locale } from '@/lib/i18n-config'
import { ArticleCard } from '@/components/ArticleCard'
import {
  FilterBar,
  type FilterCategory,
  type FilterState,
} from '@/components/FilterBar'

/** Serializable article metadata passed from the server page. */
export interface ArticleListItem {
  slug: string
  href: string
  title: string
  summary: string
  category: string
  categoryLabel: string
  readingTime: number
  lastUpdated: string
}

export interface ArticleListProps {
  lang: Locale
  items: ArticleListItem[]
  categories: FilterCategory[]
  labels: {
    searchLabel: string
    searchPlaceholder: string
    allLabel: string
    categoriesLabel: string
    noResults: string
    countSingular: string
    countPlural: string
    lastUpdated: string
    minRead: string
  }
}

/** Client wrapper: FilterBar (search + 9-category pills) filtering the grid. */
export function ArticleList({ lang, items, categories, labels }: ArticleListProps) {
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
        <p role="status" className="py-8 text-slate-500">
          {labels.noResults}
        </p>
      ) : (
        <>
          <p role="status" className="text-sm text-slate-500">
            {visible.length}{' '}
            {visible.length === 1 ? labels.countSingular : labels.countPlural}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <ArticleCard
                key={item.slug}
                lang={lang}
                href={item.href}
                title={item.title}
                summary={item.summary}
                categoryLabel={item.categoryLabel}
                readingTime={item.readingTime}
                lastUpdated={item.lastUpdated}
                labels={{
                  lastUpdated: labels.lastUpdated,
                  minRead: labels.minRead,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
