'use client'

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from 'motion/react'
import {
  Children,
  createContext,
  useContext,
  type ReactNode,
} from 'react'

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1]

const StaggerContext = createContext(false)

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
}

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easePremium },
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: easePremium },
  },
}

type RevealProps = {
  children: ReactNode
  className?: string
  /** Delay in seconds before this item starts (ignored inside Stagger). */
  delay?: number
  /** Animation style. */
  variant?: 'fade-up' | 'fade' | 'scale'
  /** When true, animate once as soon as mounted (hero / above-fold). */
  immediate?: boolean
} & Omit<HTMLMotionProps<'div'>, 'children' | 'variants' | 'initial' | 'animate' | 'whileInView'>

/**
 * Scroll-triggered reveal with a calm premium ease.
 * Honours prefers-reduced-motion by rendering a plain div.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'fade-up',
  immediate = false,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion()
  const inStagger = useContext(StaggerContext)

  if (reduce) {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    )
  }

  const variants =
    variant === 'fade' ? fade : variant === 'scale' ? scaleIn : fadeUp

  const viewportProps = immediate
    ? { animate: 'visible' as const }
    : {
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.18, margin: '0px 0px -40px 0px' },
      }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      custom={delay}
      transition={
        inStagger
          ? undefined
          : { duration: 0.7, ease: easePremium, delay }
      }
      {...viewportProps}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  /** Seconds between each child. */
  stagger?: number
  /** Base delay before the first child. */
  delay?: number
  immediate?: boolean
}

/**
 * Staggers child `Reveal` / `StaggerItem` elements into view.
 */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  immediate = false,
}: StaggerProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const viewportProps = immediate
    ? { animate: 'visible' as const }
    : {
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.12, margin: '0px 0px -32px 0px' },
      }

  return (
    <StaggerContext.Provider value={true}>
      <motion.div
        className={className}
        initial="hidden"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        {...viewportProps}
      >
        {Children.map(children, (child) => child)}
      </motion.div>
    </StaggerContext.Provider>
  )
}

/** Child of Stagger — use when the child is not already a Reveal. */
export function StaggerItem({
  children,
  className,
  variant = 'fade-up',
}: {
  children: ReactNode
  className?: string
  variant?: 'fade-up' | 'fade' | 'scale'
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  const variants =
    variant === 'fade' ? fade : variant === 'scale' ? scaleIn : fadeUp

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

/** Thin gold rule that draws in from the left (or center). */
export function GoldRule({
  className = '',
  center = false,
  immediate = false,
}: {
  className?: string
  center?: boolean
  immediate?: boolean
}) {
  const reduce = useReducedMotion()
  const base = `h-px bg-gold-500 origin-left ${center ? 'mx-auto origin-center' : ''} ${className}`

  if (reduce) return <div className={base} aria-hidden="true" />

  const viewportProps = immediate
    ? { animate: { scaleX: 1 } }
    : {
        whileInView: { scaleX: 1 },
        viewport: { once: true, amount: 0.5 },
      }

  return (
    <motion.div
      className={base}
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.85, ease: easePremium, delay: 0.12 }}
      {...viewportProps}
    />
  )
}
