import 'server-only'

import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { z } from 'zod'
import {
  articleFrontmatterSchema,
  guideFrontmatterSchema,
  lawTopicFrontmatterSchema,
} from './content-schema'
import type { Locale } from './i18n-config'
import type { Article, Guide, LawTopic } from './types'

/**
 * Markdown content pipeline — gray-matter + unified, exactly as verified in
 * BUILD_PLAN.md Phase 0 (remark-parse → remark-gfm → remark-rehype →
 * rehype-stringify). Content lives in `content/{lang}/{articles|laws|guides|pages}/`.
 *
 * Frontmatter is Zod-validated; invalid content throws a descriptive error at
 * build time. Missing files return `null` (callers decide between fallback
 * and `notFound()`); missing directories list as empty (inactive locales).
 */

const CONTENT_ROOT = path.join(process.cwd(), 'content')

type ContentDir = 'articles' | 'laws' | 'guides' | 'pages'

function contentDir(lang: Locale, dir: ContentDir): string {
  return path.join(CONTENT_ROOT, lang, dir)
}

function contentFile(lang: Locale, dir: ContentDir, slug: string): string {
  return path.join(contentDir(lang, dir), `${slug}.md`)
}

/** Render markdown (with GFM tables/lists) to an HTML string. */
export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown)

  return String(file)
}

function isFileNotFound(error: unknown): boolean {
  return (
    error instanceof Error &&
    'code' in error &&
    (error as NodeJS.ErrnoException).code === 'ENOENT'
  )
}

/** Validate frontmatter, throwing a build-failing error naming the file. */
function parseFrontmatter<Schema extends z.ZodType>(
  schema: Schema,
  data: unknown,
  filePath: string,
): z.output<Schema> {
  const result = schema.safeParse(data)

  if (!result.success) {
    throw new Error(
      `Invalid frontmatter in ${path.relative(process.cwd(), filePath)}:\n` +
        `${z.prettifyError(result.error)}\n` +
        'See lib/content-schema.ts for the expected shape.',
    )
  }

  return result.data
}

async function readEntry<Schema extends z.ZodType>(
  lang: Locale,
  dir: ContentDir,
  slug: string,
  schema: Schema,
): Promise<{ frontmatter: z.output<Schema>; html: string } | null> {
  const filePath = contentFile(lang, dir, slug)

  let raw: string
  try {
    raw = await fs.readFile(filePath, 'utf8')
  } catch (error) {
    if (isFileNotFound(error)) return null
    throw error
  }

  const { data, content } = matter(raw)
  const frontmatter = parseFrontmatter(schema, data, filePath)
  const html = await markdownToHtml(content)

  return { frontmatter, html }
}

/** Prefer locale file; fall back to English when the locale is not yet populated. */
async function readEntryWithFallback<Schema extends z.ZodType>(
  lang: Locale,
  dir: ContentDir,
  slug: string,
  schema: Schema,
): Promise<{ frontmatter: z.output<Schema>; html: string; contentLang: Locale } | null> {
  const local = await readEntry(lang, dir, slug, schema)
  if (local) return { ...local, contentLang: lang }
  if (lang !== 'en') {
    const fallback = await readEntry('en', dir, slug, schema)
    if (fallback) return { ...fallback, contentLang: 'en' }
  }
  return null
}

/** List slugs of all markdown entries in a content directory. */
async function listSlugs(lang: Locale, dir: ContentDir): Promise<string[]> {
  let files: string[]
  try {
    files = await fs.readdir(contentDir(lang, dir))
  } catch (error) {
    if (isFileNotFound(error)) return [] // locale not populated yet
    throw error
  }

  return files
    .filter((file) => file.endsWith('.md') && file !== 'README.md')
    .map((file) => file.replace(/\.md$/, ''))
    .sort()
}

/** Slugs for a locale, falling back to English when the locale folder is empty. */
async function listSlugsWithFallback(
  lang: Locale,
  dir: ContentDir,
): Promise<string[]> {
  const local = await listSlugs(lang, dir)
  if (local.length > 0 || lang === 'en') return local
  return listSlugs('en', dir)
}

function byLastUpdatedDesc(
  a: { lastUpdated: string },
  b: { lastUpdated: string },
): number {
  return b.lastUpdated.localeCompare(a.lastUpdated)
}

// ---------------------------------------------------------------------------
// Articles (Knowledge Center)
// ---------------------------------------------------------------------------

export async function getArticle(
  lang: Locale,
  slug: string,
): Promise<Article | null> {
  const entry = await readEntryWithFallback(
    lang,
    'articles',
    slug,
    articleFrontmatterSchema,
  )
  if (!entry) return null
  return { slug, lang: entry.contentLang, html: entry.html, ...entry.frontmatter }
}

export async function listArticleSlugs(lang: Locale): Promise<string[]> {
  return listSlugsWithFallback(lang, 'articles')
}

export async function listArticles(
  lang: Locale,
  category?: Article['category'],
): Promise<Article[]> {
  const slugs = await listArticleSlugs(lang)
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const article = await getArticle(lang, slug)
      if (!article) {
        throw new Error(`Article listed but unreadable: content/${lang}/articles/${slug}.md`)
      }
      return article
    }),
  )

  return articles
    .filter((article) => !category || article.category === category)
    .sort(byLastUpdatedDesc)
}

// ---------------------------------------------------------------------------
// Law topics (Lao Laws Library)
// ---------------------------------------------------------------------------

export async function getLawTopic(
  lang: Locale,
  slug: string,
): Promise<LawTopic | null> {
  const entry = await readEntryWithFallback(
    lang,
    'laws',
    slug,
    lawTopicFrontmatterSchema,
  )
  if (!entry) return null
  return { slug, lang: entry.contentLang, html: entry.html, ...entry.frontmatter }
}

export async function listLawTopicSlugs(lang: Locale): Promise<string[]> {
  return listSlugsWithFallback(lang, 'laws')
}

export async function listLawTopics(
  lang: Locale,
  category?: LawTopic['category'],
): Promise<LawTopic[]> {
  const slugs = await listLawTopicSlugs(lang)
  const topics = await Promise.all(
    slugs.map(async (slug) => {
      const topic = await getLawTopic(lang, slug)
      if (!topic) {
        throw new Error(`Law topic listed but unreadable: content/${lang}/laws/${slug}.md`)
      }
      return topic
    }),
  )

  return topics
    .filter((topic) => !category || topic.category === category)
    .sort(byLastUpdatedDesc)
}

// ---------------------------------------------------------------------------
// Guides (Business Guides)
// ---------------------------------------------------------------------------

export async function getGuide(
  lang: Locale,
  slug: string,
): Promise<Guide | null> {
  const entry = await readEntryWithFallback(
    lang,
    'guides',
    slug,
    guideFrontmatterSchema,
  )
  if (!entry) return null
  return { slug, lang: entry.contentLang, html: entry.html, ...entry.frontmatter }
}

export async function listGuideSlugs(lang: Locale): Promise<string[]> {
  return listSlugsWithFallback(lang, 'guides')
}

export async function listGuides(
  lang: Locale,
  category?: Guide['category'],
): Promise<Guide[]> {
  const slugs = await listGuideSlugs(lang)
  const guides = await Promise.all(
    slugs.map(async (slug) => {
      const guide = await getGuide(lang, slug)
      if (!guide) {
        throw new Error(`Guide listed but unreadable: content/${lang}/guides/${slug}.md`)
      }
      return guide
    }),
  )

  return guides
    .filter((guide) => !category || guide.category === category)
    .sort(byLastUpdatedDesc)
}
