export interface SectionHeaderProps {
  eyebrow?: string
  title: string
  lede?: string
  align?: 'left' | 'center'
}

/**
 * Standard section heading: gold eyebrow, display-serif title, thin gold
 * rule, optional lede. Use this instead of hand-rolled section headings.
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = 'left',
}: SectionHeaderProps) {
  const center = align === 'center'

  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium tracking-widest text-gold-600 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-navy-950 md:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-16 bg-gold-500 ${center ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      {lede && (
        <p
          className={`mt-5 max-w-2xl leading-relaxed text-navy-700/90 ${
            center ? 'mx-auto' : ''
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  )
}
