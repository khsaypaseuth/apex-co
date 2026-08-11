import type { Locale } from './i18n-config'

/**
 * Verification flag carried by anything that makes factual claims
 * (articles, law topics, guides). Master plan guardrail: never state
 * legal/tax/visa facts without a source or an explicit
 * 'needs-verification' marker.
 */
export const VERIFICATION_STATUSES = [
  'verified',
  'needs-verification',
  'general-info',
] as const

export type VerificationStatus = (typeof VERIFICATION_STATUSES)[number]

/** The four service category pages in the sitemap (master plan §Services). */
export const SERVICE_CATEGORY_SLUGS = [
  'business-setup',
  'visa-immigration',
  'legal-family',
  'accounting-tax',
] as const

export type ServiceCategorySlug = (typeof SERVICE_CATEGORY_SLUGS)[number]

/** Knowledge Center taxonomy (master plan §Knowledge Center — 9 categories). */
export const ARTICLE_CATEGORIES = [
  'starting-a-business',
  'tax-accounting',
  'visa-immigration',
  'lao-law-basics',
  'labour-employment',
  'investment',
  'marriage-family',
  'living-in-laos',
  'compliance-checklists',
] as const

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number]

/** Lao Laws Library taxonomy (master plan §Lao Laws Library — 8 categories). */
export const LAW_CATEGORIES = [
  'company-law',
  'investment-law',
  'tax-law',
  'labour-law',
  'immigration',
  'family-law',
  'intellectual-property',
  'commercial-contracts',
] as const

export type LawCategory = (typeof LAW_CATEGORIES)[number]

/** One of the four top-level service categories (a `/services/*` page). */
export interface ServiceCategory {
  slug: ServiceCategorySlug
  title: string
  summary: string
}

/** An individual service offered within a category. */
export interface Service {
  slug: string
  category: ServiceCategorySlug
  title: string
  summary: string
}

/**
 * Shared shape of every markdown-backed content entry once loaded and
 * rendered by `lib/content.ts` (frontmatter + rendered HTML body).
 */
export interface ContentEntryBase {
  slug: string
  lang: Locale
  title: string
  summary: string
  /** ISO date string, YYYY-MM-DD. */
  lastUpdated: string
  /** Reading time in minutes. */
  readingTime: number
  verificationStatus: VerificationStatus
  /** Slugs of related service categories/services. */
  relatedServices: string[]
  /** Slugs of related knowledge-center articles. */
  relatedArticles: string[]
  /** Source URLs backing factual claims (required for 'verified'). */
  sources?: string[]
  /** Rendered HTML body (unified pipeline output). */
  html: string
}

/** Knowledge Center article. */
export interface Article extends ContentEntryBase {
  category: ArticleCategory
}

/** Lao Laws Library topic page. */
export interface LawTopic extends ContentEntryBase {
  category: LawCategory
}

/** Business guide (downloadable-style, with lead-capture CTA). */
export interface Guide extends ContentEntryBase {
  category: ServiceCategorySlug
}

/**
 * A display group on the `/services` overview page. The master plan lists
 * FIVE groups but the sitemap has FOUR category pages — Corporate Legal and
 * Family & Personal Legal both live on `/services/legal-family`, so each
 * group carries the category page it links to.
 */
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

/** A titled prose block on a service category page (page-specific sections). */
export interface ServicePageTopic {
  heading: string
  body: string
}

/**
 * Full English content for one `/services/[category]` page. Long-form prose
 * stays English-only until Phase 7 (see BUILD_PLAN.md); shared section
 * headings ("Overview", "Who this is for", …) are dictionary keys instead.
 */
export interface ServicePageContent {
  slug: ServiceCategorySlug
  heroLede: string
  /** Overview paragraphs. */
  overview: string[]
  /** "Who this is for" bullet items. */
  whoItsFor: string[]
  /** Page-specific topical sections (per master plan section lists). */
  topics: ServicePageTopic[]
  /** Process overview steps. */
  process: ProcessStep[]
  /** Documents commonly requested — cautious wording required. */
  documents: {
    intro: string
    items: string[]
    note: string
  }
  /** Timeline disclaimer paragraph (never states fixed durations). */
  timelineNote: string
  /** "How Super Consulting helps" bullet items. */
  howWeHelp: string[]
}

/** Single FAQ entry. */
export interface FaqItem {
  question: string
  answer: string
}

/** Titled group of FAQ entries (master plan defines 5 sections). */
export interface FaqSection {
  title: string
  items: FaqItem[]
}

/**
 * News & Updates item. The section launches with a designed empty state
 * (decision D-010) — this type keeps the section CMS-ready.
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
