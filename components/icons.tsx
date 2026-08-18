import type { ReactNode, SVGProps } from 'react'

/**
 * Consistent inline SVG icon set: 24px grid, stroke 1.75,
 * `currentColor`, lucide-style paths. All icons are decorative
 * (`aria-hidden`) — pair them with visible or sr-only text.
 */

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Rendered width/height in px (default 24). */
  size?: number
}

function Icon({
  size = 24,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  )
}

export function IconBriefcase(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect x="2" y="6" width="20" height="14" rx="2" />
    </Icon>
  )
}




export function IconUsers(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  )
}


export function IconMapPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  )
}

export function IconMail(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </Icon>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  )
}

export function IconMessageCircle(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </Icon>
  )
}

export function IconCheckCircle(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Icon>
  )
}

export function IconChevronDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  )
}

export function IconBuilding(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </Icon>
  )
}

export function IconFileText(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </Icon>
  )
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  )
}

export function IconBolt(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
    </Icon>
  )
}

export function IconTransmissionTower(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 6 21M12 3l6 18" />
      <path d="M4 8h16" />
      <path d="M5.5 13h13" />
      <path d="M7 18h10" />
      <path d="M3 21h18" />
    </Icon>
  )
}

export function IconPile(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2 9h20" />
      <path d="M6 9v12M12 9v9M18 9v12" />
      <path d="M9 3h6" />
      <rect x="10" y="3" width="4" height="4" rx="1" />
    </Icon>
  )
}

export function IconBridge(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2 10h20" />
      <path d="M4 10c0 5 3.5 8 8 8s8-3 8-8" />
      <path d="M4 10v10M20 10v10" />
      <path d="M8 10v5M12 10v7M16 10v5" />
    </Icon>
  )
}

export function IconHardHat(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2 18h20" />
      <path d="M4 18v-3a8 8 0 0 1 16 0v3" />
      <path d="M10 4.5A2.5 2.5 0 0 1 12.5 2h-1A2.5 2.5 0 0 0 9 4.5V8" />
      <path d="M15 8V4.5" />
    </Icon>
  )
}

export function IconRuler(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z" />
      <path d="m7.5 10.5 2 2M11 7l2 2M14.5 3.5l2 2M4 14l2 2" />
    </Icon>
  )
}

export function IconTruck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2 17V6a1 1 0 0 1 1-1h11v12" />
      <path d="M14 9h4l3 3.5V17h-3" />
      <circle cx="7" cy="17.5" r="2.5" />
      <circle cx="17" cy="17.5" r="2.5" />
      <path d="M9.5 17.5h5" />
    </Icon>
  )
}
