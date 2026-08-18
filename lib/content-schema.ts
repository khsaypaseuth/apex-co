import { z } from 'zod'
import { PROJECT_STATUSES, SERVICE_CATEGORY_SLUGS } from './types'

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

/**
 * Project frontmatter. `scope` is required and non-empty: a portfolio entry
 * that does not say what Apex actually built is not worth publishing, so an
 * empty scope list fails the build rather than rendering a blank section.
 */
export const projectFrontmatterSchema = z.object({
  title: z.string().min(1, 'title is required'),
  summary: z.string().min(1, 'summary is required'),
  category: z.enum(SERVICE_CATEGORY_SLUGS),
  status: z.enum(PROJECT_STATUSES),
  location: z.string().min(1, 'location is required'),
  year: z
    .number({ error: 'year must be a four-digit number' })
    .int()
    .min(1990)
    .max(2100),
  client: z.string().min(1).optional(),
  capacity: z.string().min(1).optional(),
  scope: z.array(z.string().min(1)).min(1, 'scope needs at least one item'),
  lastUpdated: isoDateString,
  readingTime: z
    .number({ error: 'readingTime must be a number of minutes' })
    .int()
    .positive(),
  relatedServices: z.array(z.string()).default([]),
  relatedProjects: z.array(z.string()).default([]),
})

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>
