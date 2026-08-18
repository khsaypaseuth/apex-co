import type { ServiceCategorySlug } from '@/lib/types'

export interface ProjectThumbProps {
  category: ServiceCategorySlug
  className?: string
}

/**
 * Card artwork for a project, drawn rather than photographed.
 *
 * Apex has not supplied site photography yet. Dropping stock photos onto
 * project cards would present someone else's substation or bridge as Apex's
 * work, so each capability gets a schematic instead: gold line-work on the
 * navy field, in the brand's own language. These stay useful even once real
 * photos exist, as the fallback for projects that cannot be photographed.
 *
 * Decorative only — every card states its capability in visible text, so the
 * SVG is aria-hidden and carries no accessible name.
 */
export function ProjectThumb({ category, className }: ProjectThumbProps) {
  return (
    <svg
      viewBox="0 0 320 180"
      role="presentation"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="320" height="180" fill="var(--color-navy-950)" />

      {/* Faint setting-out grid — reads as drawing paper, not decoration */}
      <g stroke="var(--color-navy-700)" strokeWidth="0.5" opacity="0.55">
        {[20, 60, 100, 140, 180, 220, 260, 300].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="180" />
        ))}
        {[20, 60, 100, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} />
        ))}
      </g>

      <g
        fill="none"
        stroke="var(--color-gold-500)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {category === 'electrical' && <ElectricalMotif />}
        {category === 'piling-foundation' && <PilingMotif />}
        {category === 'roads-bridges' && <BridgeMotif />}
        {category === 'buildings-property' && <BuildingMotif />}
      </g>
    </svg>
  )
}

/** Lattice transmission tower carrying conductors off both edges. */
function ElectricalMotif() {
  return (
    <>
      <line x1="24" y1="150" x2="296" y2="150" strokeWidth="2.5" />
      {/* Tower legs and lattice */}
      <path d="M136 150 L152 48 L168 150" />
      <path d="M143 106 L161 106 M147 82 L157 82" strokeWidth="1.5" />
      <path d="M139 130 L165 130" strokeWidth="1.5" />
      <path d="M139 130 L152 106 L165 130" strokeWidth="1" opacity="0.7" />
      {/* Crossarms with insulators */}
      <path d="M118 66 L186 66 M126 86 L178 86" />
      <path d="M130 66 L130 74 M174 66 L174 74 M138 86 L138 93 M166 86 L166 93" strokeWidth="1.5" />
      {/* Conductors sagging away to the next structures */}
      <path d="M0 92 Q 66 108 130 74" strokeWidth="1.5" />
      <path d="M174 74 Q 240 108 320 92" strokeWidth="1.5" />
      <path d="M0 112 Q 68 126 138 93" strokeWidth="1.5" opacity="0.7" />
      <path d="M166 93 Q 240 126 320 112" strokeWidth="1.5" opacity="0.7" />
    </>
  )
}

/** Driven piles below grade, with the rig leader and hammer above. */
function PilingMotif() {
  return (
    <>
      <line x1="24" y1="104" x2="296" y2="104" strokeWidth="2.5" />
      {/* Piles driven below grade */}
      {[92, 132, 172, 212].map((x, index) => (
        <path key={x} d={`M${x} 104 L${x} ${150 + index * 6}`} strokeWidth="6" opacity="0.9" />
      ))}
      {/* Soil hatch */}
      <g strokeWidth="1" opacity="0.35">
        {[40, 56, 240, 256, 272].map((x) => (
          <line key={x} x1={x} y1="112" x2={x - 10} y2="132" />
        ))}
      </g>
      {/* Rig leader and hammer over the next pile position */}
      <path d="M252 104 L252 26 M240 26 L264 26" />
      <rect x="243" y="34" width="18" height="16" rx="1" />
      <path d="M252 50 L252 66" strokeWidth="1.5" />
      <path d="M252 26 L288 44 L288 104" strokeWidth="1.5" opacity="0.7" />
    </>
  )
}

/** Two-span arch bridge with deck, piers, and water line. */
function BridgeMotif() {
  return (
    <>
      {/* Deck and parapet */}
      <line x1="16" y1="84" x2="304" y2="84" strokeWidth="3" />
      <line x1="16" y1="74" x2="304" y2="74" strokeWidth="1.5" opacity="0.7" />
      {/* Arches */}
      <path d="M40 128 Q 100 44 160 128" />
      <path d="M160 128 Q 220 44 280 128" />
      {/* Spandrel columns */}
      <g strokeWidth="1.5" opacity="0.75">
        <path d="M70 84 L70 104 M100 84 L100 90 M130 84 L130 104" />
        <path d="M190 84 L190 104 M220 84 L220 90 M250 84 L250 104" />
      </g>
      {/* Piers into the water */}
      <path d="M40 128 L40 150 M160 128 L160 150 M280 128 L280 150" strokeWidth="4" />
      {/* Water */}
      <path d="M12 158 Q 40 152 68 158 T 124 158 T 180 158 T 236 158 T 308 158" strokeWidth="1.5" opacity="0.6" />
    </>
  )
}

/** Massing study — three volumes with a floor grid and a site line. */
function BuildingMotif() {
  return (
    <>
      <line x1="24" y1="152" x2="296" y2="152" strokeWidth="2.5" />
      {/* Volumes */}
      <rect x="66" y="88" width="52" height="64" />
      <rect x="130" y="40" width="60" height="112" />
      <rect x="202" y="106" width="46" height="46" />
      {/* Floor plates */}
      <g strokeWidth="1" opacity="0.6">
        <path d="M66 108 L118 108 M66 128 L118 128" />
        <path d="M130 62 L190 62 M130 84 L190 84 M130 106 L190 106 M130 128 L190 128" />
        <path d="M202 126 L248 126" />
      </g>
      {/* Core line and crane */}
      <path d="M160 40 L160 152" strokeWidth="1" opacity="0.5" />
      <path d="M262 152 L262 32 M262 32 L216 32 M262 32 L286 32" strokeWidth="1.5" opacity="0.8" />
      <path d="M232 32 L232 46" strokeWidth="1.5" opacity="0.8" />
    </>
  )
}
