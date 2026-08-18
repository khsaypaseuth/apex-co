export interface ScopeNoteProps {
  /** Localized heading, e.g. dict.scopeNote.label. */
  label: string
  /** Localized note text, e.g. dict.scopeNote.text. */
  text: string
}

/**
 * Scope-note callout — tinted box with a gold left border, shown on service
 * and project pages.
 *
 * A contractor makes engineering claims, not legal ones, so this carries the
 * qualification that ratings, quantities, and programme are confirmed after
 * survey and design review — not a legal-advice disclaimer. The canonical
 * English wording is `SCOPE_NOTE` in `lib/site-config.ts`; localized copies
 * live in the dictionaries under `scopeNote`.
 */
export function ScopeNote({ label, text }: ScopeNoteProps) {
  return (
    <aside role="note" className="border-l-4 border-gold-500 bg-mist-100 p-6">
      <p className="text-xs font-semibold tracking-widest text-navy-700 uppercase">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-navy-950">{text}</p>
    </aside>
  )
}
