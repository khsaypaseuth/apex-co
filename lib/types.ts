import type { Locale } from './i18n-config'

/**
 * Apex's four capability areas. Each one is a `/services/[category]` page and
 * doubles as the taxonomy for the project portfolio, so a project is always
 * filed under the capability that delivered it.
 */
export const SERVICE_CATEGORY_SLUGS = [
  'electrical',
  'piling-foundation',
  'roads-bridges',
  'buildings-property',
] as const

export type ServiceCategorySlug = (typeof SERVICE_CATEGORY_SLUGS)[number]

/** Whether a project is finished or still on site. */
export const PROJECT_STATUSES = ['completed', 'ongoing'] as const

export type ProjectStatus = (typeof PROJECT_STATUSES)[number]

/** One of the four capability areas (a `/services/*` page). */
export interface ServiceCategory {
  slug: ServiceCategorySlug
  title: string
  summary: string
}

/** An individual service offered within a capability area. */
export interface Service {
  slug: string
  category: ServiceCategorySlug
  title: string
  summary: string
}

/**
 * A delivered or in-progress project, loaded from
 * `content/{lang}/projects/*.md` by `lib/content.ts`.
 *
 * `capacity` carries the headline engineering figure where one exists — a
 * substation rating, a line length, a pile count, a span. It is free text
 * rather than a number because the meaningful unit differs per capability.
 */
export interface Project {
  slug: string
  lang: Locale
  title: string
  summary: string
  category: ServiceCategorySlug
  status: ProjectStatus
  /** Province, district, or corridor — as specific as Apex will publish. */
  location: string
  /** Year of completion, or of commencement while `status` is 'ongoing'. */
  year: number
  /** Client or awarding authority. Omitted where the contract is confidential. */
  client?: string
  /** Headline figure, e.g. '115/22 kV substation, 2 × 25 MVA'. */
  capacity?: string
  /** Principal works delivered, as short bullet items. */
  scope: string[]
  /** ISO date string, YYYY-MM-DD. */
  lastUpdated: string
  /** Reading time in minutes. */
  readingTime: number
  /** Capability slugs to cross-link from the project page. */
  relatedServices: string[]
  /** Slugs of other projects worth showing alongside this one. */
  relatedProjects: string[]
  /** Rendered HTML body (unified pipeline output). */
  html: string
}

/** A display group on the `/services` overview page. */
export interface ServiceGroup {
  id: string
  categorySlug: ServiceCategorySlug
  title: string
  summary: string
  services: Service[]
}

/** One numbered step in a process overview (service pages, about page). */
export interface ProcessStep {
  title: string
  description: string
}

/** A titled prose block on a service category page. */
export interface ServicePageTopic {
  heading: string
  body: string
}

/**
 * Full content for one `/services/[category]` page. Shared section headings
 * ("Overview", "Who this is for", …) are dictionary keys rather than fields,
 * so only the capability-specific prose lives here.
 */
export interface ServicePageContent {
  slug: ServiceCategorySlug
  heroLede: string
  /** Overview paragraphs. */
  overview: string[]
  /** "Who this is for" bullet items. */
  whoItsFor: string[]
  /** Capability-specific topical sections. */
  topics: ServicePageTopic[]
  /** How a job runs, start to finish. */
  process: ProcessStep[]
  /**
   * Standards, approvals, and certifications the capability works to.
   * Replaces the previous brand's "documents commonly requested" block.
   */
  standards: {
    intro: string
    items: string[]
    note: string
  }
  /** Programme note — never states fixed durations as a promise. */
  timelineNote: string
  /** "How Apex delivers" bullet items. */
  howWeHelp: string[]
}

/** Single FAQ entry. */
export interface FaqItem {
  question: string
  answer: string
}

/** Titled group of FAQ entries. */
export interface FaqSection {
  title: string
  items: FaqItem[]
}

/**
 * News & Updates item. The section launches with a designed empty state —
 * this type keeps it CMS-ready.
 */
export interface NewsItem {
  slug: string
  lang: Locale
  title: string
  summary: string
  /** ISO date string, YYYY-MM-DD. */
  publishedAt: string
  html?: string
}
