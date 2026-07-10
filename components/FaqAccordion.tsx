import type { FaqItem } from '@/lib/types'

export interface FaqAccordionProps {
  items: FaqItem[]
}

/**
 * FAQ accordion built on native `<details>`/`<summary>` — keyboard-operable
 * and screen-reader friendly with zero JavaScript, so it stays a server
 * component. The default disclosure marker is hidden and replaced with a
 * gold "+" that rotates into "×" when open.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="divide-y divide-navy-950/10 border-y border-navy-950/10">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-navy-950 transition-colors hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-gold-500 [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-xl leading-none text-gold-600 transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-5 leading-relaxed text-navy-700">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
