'use client'

import { useId, useState } from 'react'

export interface FilterCategory {
  value: string
  label: string
}

export interface FilterState {
  query: string
  /** null = all categories. */
  category: string | null
}

export interface FilterBarProps {
  /** Visually hidden label for the search input (dict.filter.searchLabel). */
  searchLabel: string
  searchPlaceholder: string
  /** Label of the "all categories" pill (dict.filter.allCategories). */
  allLabel: string
  /** Accessible name for the pill group (dict.filter.categoriesLabel). */
  categoriesLabel: string
  categories: FilterCategory[]
  onChange: (state: FilterState) => void
}

/**
 * Text search + category pill filter for the Knowledge Center and Laws
 * Library. Owns its state and reports every change through `onChange` —
 * the parent decides how to filter its list.
 */
export function FilterBar({
  searchLabel,
  searchPlaceholder,
  allLabel,
  categoriesLabel,
  categories,
  onChange,
}: FilterBarProps) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const searchId = useId()

  const update = (nextQuery: string, nextCategory: string | null) => {
    setQuery(nextQuery)
    setCategory(nextCategory)
    onChange({ query: nextQuery, category: nextCategory })
  }

  const pillClasses = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-gold-500 ${
      active
        ? 'border-navy-700 bg-navy-700 text-ivory-100'
        : 'border-navy-950/20 bg-white text-navy-700 hover:border-gold-500 hover:text-gold-600'
    }`

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor={searchId} className="sr-only">
          {searchLabel}
        </label>
        <input
          id={searchId}
          type="search"
          value={query}
          placeholder={searchPlaceholder}
          onChange={(event) => update(event.target.value, category)}
          className="w-full max-w-md rounded-sm border border-navy-950/20 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
        />
      </div>

      <div
        role="group"
        aria-label={categoriesLabel}
        className="flex flex-wrap gap-2"
      >
        <button
          type="button"
          aria-pressed={category === null}
          onClick={() => update(query, null)}
          className={pillClasses(category === null)}
        >
          {allLabel}
        </button>
        {categories.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={category === item.value}
            onClick={() => update(query, item.value)}
            className={pillClasses(category === item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
