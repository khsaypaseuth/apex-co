import { z } from 'zod'
import {
  ARTICLE_CATEGORIES,
  LAW_CATEGORIES,
  SERVICE_CATEGORY_SLUGS,
  VERIFICATION_STATUSES,
} from './types'

/**
 * Zod schemas validating markdown frontmatter at build time.
 * Invalid content must fail the build with a descriptive error —
 * see `lib/content.ts` (`parseFrontmatter`).
 */

/**
 * ISO calendar date (YYYY-MM-DD). YAML parses unquoted dates into JS `Date`
 * objects, so we normalise those back to the ISO string form first.
 */
const isoDateString = z.preprocess(
  (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : value),
  z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'must be an ISO date string (YYYY-MM-DD)')
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: 'must be a valid calendar date',
    }),
)

const baseFrontmatterSchema = z.object({
  title: z.string().min(1, 'title is required'),
  summary: z.string().min(1, 'summary is required'),
  lastUpdated: isoDateString,
  readingTime: z
    .number({ error: 'readingTime must be a number of minutes' })
    .int()
    .positive(),
  verificationStatus: z.enum(VERIFICATION_STATUSES),
  relatedServices: z.array(z.string()).default([]),
  relatedArticles: z.array(z.string()).default([]),
  sources: z.array(z.url()).optional(),
})

/** Knowledge Center article frontmatter. */
export const articleFrontmatterSchema = baseFrontmatterSchema.extend({
  category: z.enum(ARTICLE_CATEGORIES),
})

/** Lao Laws Library topic frontmatter. */
export const lawTopicFrontmatterSchema = baseFrontmatterSchema.extend({
  category: z.enum(LAW_CATEGORIES),
})

/** Business guide frontmatter (categorised by service category). */
export const guideFrontmatterSchema = baseFrontmatterSchema.extend({
  category: z.enum(SERVICE_CATEGORY_SLUGS),
})

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>
export type LawTopicFrontmatter = z.infer<typeof lawTopicFrontmatterSchema>
export type GuideFrontmatter = z.infer<typeof guideFrontmatterSchema>
