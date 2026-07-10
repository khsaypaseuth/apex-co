export interface DisclaimerBoxProps {
  /** Localized heading, e.g. dict.legal.disclaimerLabel. */
  label: string
  /** Localized disclaimer text, e.g. dict.legal.disclaimer. */
  text: string
}

/**
 * Legal disclaimer callout — ivory box with a gold left border. Rendered on
 * every legal/tax/immigration/guide page. The canonical English wording is
 * `LEGAL_DISCLAIMER` in `lib/site-config.ts`; localized copies live in the
 * dictionaries under `legal.disclaimer`.
 */
export function DisclaimerBox({ label, text }: DisclaimerBoxProps) {
  return (
    <aside role="note" className="border-l-4 border-gold-500 bg-ivory-100 p-6">
      <p className="text-xs font-semibold tracking-widest text-navy-700 uppercase">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-navy-950">{text}</p>
    </aside>
  )
}
