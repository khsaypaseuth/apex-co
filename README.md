# Super Consulting Website

Premium multilingual website for **Super Consulting**, a business unit of
**Super Vision Co., Ltd.** — professional business, legal, immigration,
accounting, and tax consulting in Laos. The site is both a services website
and a **Knowledge Center** (articles, a plain-language Lao Laws Library, and
business guides) for people doing business or living in Laos.

- **Launch languages:** English (`/en`) and Lao (`/lo`). Thai, Vietnamese,
  and Chinese are architecture-prepared but inactive (see
  [Language architecture](#language-architecture)).
- **Fully static:** every page is prerendered at build time (85 pages);
  no database, no environment variables, no external services.
- **Content honesty:** no legal/tax/immigration claim is presented as
  verified — all factual content carries verification markers pending legal
  review, and every relevant page renders the site-wide disclaimer.

Project history: `BUILD_PLAN.md` (phases), `build-log/decision-log.md`
(all decisions, D-numbered), `qa/qa-report.md` (QA results), `recap.html`
(5-minute overview).

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16.2.10** (App Router, Turbopack, `proxy.ts` locale routing) |
| Language | **TypeScript** (strict, no `any`) |
| Styling | **Tailwind CSS v4** (CSS-first — tokens in `@theme` in `app/globals.css`; there is no `tailwind.config.ts`) |
| Content | Markdown + **gray-matter** frontmatter + **unified** pipeline (remark-parse / remark-gfm / remark-rehype / rehype-stringify) |
| Validation | **Zod** — frontmatter schemas fail the build on invalid content |
| i18n | Framework-free dictionary pattern (`dictionaries/*.json`, `server-only` loaders) — no i18n library |
| Fonts | `next/font/google`: Fraunces + Manrope (EN), Noto Serif Lao + Noto Sans Lao (LO) |
| Images | Local files in `public/images/` via `next/image` static imports (blur placeholders); sources logged in `public/images/ATTRIBUTIONS.md` |

> **Note for AI agents / new developers:** Next.js 16 has breaking changes
> vs older versions — `params` is a Promise (`await params`), locale routing
> lives in `proxy.ts` (not `middleware.ts`), Tailwind v4 has no config file.
> See `AGENTS.md` and `node_modules/next/dist/docs/`.

## Commands

```bash
npm install        # install dependencies (Node 22+ recommended)
npm run dev        # development server → http://localhost:3000
npm run build      # production build (validates all content frontmatter)
npm run start      # serve the production build
npm run lint       # eslint
npx tsc --noEmit   # typecheck (also runs inside `npm run build`)
```

Visiting `/` redirects to `/en` (or `/lo` if your browser prefers Lao).

## Folder structure

```
├── app/
│   ├── [lang]/                  # all pages, locale-prefixed (/en/*, /lo/*)
│   │   ├── layout.tsx           # html lang, fonts, header/footer chrome, skip link
│   │   ├── page.tsx             # home
│   │   ├── about|contact|faq|news|services/…
│   │   ├── knowledge/           # Knowledge Center (+ [slug] article pages)
│   │   ├── laws/                # Lao Laws Library (+ [slug] topic pages)
│   │   ├── guides/              # Business Guides (+ [slug] guide pages)
│   │   └── styleguide/          # component QA page (noindexed, not linked)
│   ├── globals.css              # Tailwind v4 @theme tokens, focus/a11y rules
│   ├── sitemap.ts               # generated sitemap (active locales, hreflang)
│   └── robots.ts
├── proxy.ts                     # locale detection + redirects (Next 16)
├── components/                  # 22 typed, content-free UI components
├── content/
│   ├── en/                      # English content (see “Editing content”)
│   │   ├── articles/  laws/  guides/        # markdown + frontmatter
│   │   └── services.ts  service-pages.ts  faq.ts   # structured page data
│   ├── lo/                      # Lao mirror of en/ (same slugs, same shapes)
│   └── th/ vi/ zh/              # prepared, inactive (each has an activation README)
├── dictionaries/                # en.json + lo.json — every UI string
├── lib/
│   ├── i18n-config.ts           # locales + activeLocales (single switch)
│   ├── dictionaries.ts          # server-only dictionary loaders
│   ├── content.ts               # markdown loaders (Zod-validated)
│   ├── content-schema.ts        # frontmatter schemas
│   ├── page-data.ts             # per-locale structured data access
│   ├── seo.ts                   # shared metadata builder (canonical/hreflang/OG)
│   ├── site-config.ts           # SITE_URL (placeholder domain), disclaimer text
│   └── types.ts                 # domain types + category slug enums
├── public/images/               # local photos + ATTRIBUTIONS.md
├── public/og/                   # default OG image (1200×630)
├── docs/                        # master plan, build plan sources, seo-map.md
├── build-log/                   # decision-log.md, agent-notes.md
├── qa/qa-report.md              # QA results
├── screenshots/                 # desktop + mobile screenshots
└── recap.html                   # self-contained project recap (open in a browser)
```

## Language architecture

`lib/i18n-config.ts` is the single switch:

```ts
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'lo', 'th', 'vi', 'zh'],  // routes reserved for all five
  activeLocales: ['en', 'lo'],              // only these are served & indexed
} as const
```

- **Active locales** appear in the language switcher, sitemap, and hreflang
  alternates, and are prerendered by `generateStaticParams`.
- **Inactive locales** (`th`, `vi`, `zh`) redirect to the English equivalent
  (`/th/about` → `/en/about`) via `proxy.ts`, and are excluded from SEO
  surfaces — parked without penalty.
- UI strings live in `dictionaries/{lang}.json`. The `Dictionary` type is
  derived from `en.json`, so **a missing or extra key in another dictionary
  fails typecheck** — translations cannot silently drift.

### Activating Thai / Vietnamese / Chinese

(Also documented in `content/th/README.md`, `content/vi/README.md`,
`content/zh/README.md`.)

1. Add the locale to `activeLocales` in `lib/i18n-config.ts`.
2. Create `dictionaries/th.json` (copy `en.json`, translate every key) and
   register its loader in `lib/dictionaries.ts`.
3. Populate `content/th/` mirroring `content/en/`: `articles/`, `laws/`,
   `guides/` (markdown), plus `services.ts`, `service-pages.ts`, `faq.ts`
   (copy the Lao modules as templates — **keep slugs identical to English**,
   they are locale-invariant and power the language switcher and hreflang).
4. Register the new modules in `lib/page-data.ts`.
5. `npm run build` — typecheck and frontmatter validation will point out
   anything missed. Until content exists, structured data falls back to
   English rather than crashing.
6. Translate disclaimers and verification markers too — they must never be
   dropped in translation (keep the English marker line alongside, as the
   Lao files do).

## Editing content

### Add a Knowledge Center article

1. Create `content/en/articles/my-article-slug.md` (kebab-case filename =
   URL slug = `/en/knowledge/my-article-slug`).
2. Frontmatter (Zod-validated — a wrong field fails the build with a
   descriptive error):

```yaml
---
title: "How to Start a Business in Laos"
summary: "One- or two-sentence summary shown on cards and in meta tags."
lastUpdated: "2026-07-11"          # ISO date, quoted
readingTime: 6                      # minutes, integer
category: "starting-a-business"    # one of the 9 article categories, see below
verificationStatus: "needs-verification"   # or "general-info" / "verified"
relatedServices: ["business-setup", "accounting-tax"]   # service category slugs
relatedArticles: ["company-registration-in-laos-basic-steps"]  # article slugs
sources: ["https://www.laotradeportal.gov.la"]   # real URLs only, [] if none
---

Body in markdown (GFM tables supported). Hedge every factual claim and put
the literal marker line below wherever unverified process claims cluster:

> **Needs legal verification before publication.**
```

3. Article categories (`lib/types.ts` → `ARTICLE_CATEGORIES`):
   `starting-a-business`, `tax-accounting`, `visa-immigration`,
   `lao-law-basics`, `labour-employment`, `investment`, `marriage-family`,
   `living-in-laos`, `compliance-checklists`. Display names live in
   `dictionaries/*.json` under `articleCategories`.
4. Add the Lao twin at `content/lo/articles/<same-slug>.md`: translate
   `title` and `summary` only; keep all other frontmatter **byte-identical**;
   keep the English marker line and add the Lao marker
   `> **ຕ້ອງກວດສອບທາງກົດໝາຍກ່ອນເຜີຍແຜ່.**` below it.
5. `npm run build` — the page, sitemap entry, and related-link wiring are
   generated automatically. Related links to slugs that don't exist yet are
   silently filtered out (no dead links).

### Add a Lao Laws Library topic

Same as articles, but in `content/{en,lo}/laws/` with a law category:
`company-law`, `investment-law`, `tax-law`, `labour-law`, `immigration`,
`family-law`, `intellectual-property`, `commercial-contracts`. URL:
`/laws/<slug>`. Law pages additionally render the `sources` list as a
"Sources" box and a verification badge.

### Add a Business Guide

Same pattern in `content/{en,lo}/guides/`, but `category` is one of the four
**service** category slugs (`business-setup`, `visa-immigration`,
`legal-family`, `accounting-tax`). URL: `/guides/<slug>`. Guides
automatically get the lead-capture form with their category preselected.

### Update services

- **Service lists:** `content/en/services.ts` + `content/lo/services.ts` —
  five groups whose service names mirror the master plan. The English file
  derives slugs from titles; the Lao file takes the slug explicitly —
  **when adding a service, add it to both files with the same slug**.
- **Category page copy** (overview, who-it's-for, process, documents,
  how-we-help): `content/en/service-pages.ts` + `content/lo/service-pages.ts`.
- **FAQ:** `content/en/faq.ts` + `content/lo/faq.ts`.
- UI labels/headings around them: `dictionaries/en.json` + `lo.json`
  (typecheck enforces parity).

## Placeholder replacement checklist (pre-launch)

Everything below is intentionally placeholder and clearly marked in the UI.
Full audit with evidence: `qa/qa-report.md` §14.

| What | Where to change |
|---|---|
| Phone number `[Add phone number]` | `dictionaries/en.json` + `lo.json` → `footer.phonePlaceholder` |
| Email `[Add email]` | `dictionaries/en.json` + `lo.json` → `footer.emailPlaceholder` |
| WhatsApp/LINE link `[Add contact link]` | `dictionaries/en.json` + `lo.json` → `footer.chatPlaceholder` |
| Floating WhatsApp/LINE buttons (`href="#"`) | `components/FloatingContactButtons.tsx` — set real links, optionally drop in official logo SVGs, remove the placeholder `title` |
| Real domain (currently `https://superconsulting.la`) | `lib/site-config.ts` → `SITE_URL` (feeds metadataBase, canonicals, hreflang, OG, sitemap, robots) |
| Contact form backend | `components/ContactForm.tsx` — replace the placeholder submit handler with a real action/endpoint |
| Lead capture backend | `components/LeadCaptureForm.tsx` — same |
| Legal verification | Have a qualified professional review every file marked `needs-verification`; add real `sources:`, remove the marker lines, flip `verificationStatus` to `"verified"`, update `lastUpdated` |
| Native Lao review | All `content/lo/` and `dictionaries/lo.json` content is machine-drafted at professional register — native review required before publication |
| OG image font | `public/og/og-default.svg` uses a serif stand-in; re-render with Fraunces or switch to `next/og` (see decision D-072) |

## Deployment notes

- **Any Node host works** (VPS, Render, Railway, Fly, Vercel, …):
  `npm run build && npm run start`. No environment variables are required.
- All 85 pages are fully prerendered; the only runtime code path is the
  locale-redirect proxy, so the app is effectively static behind a redirect
  layer. (Pure `output: 'export'` was deliberately not used — it would kill
  the locale redirect and image optimization; see decision D-006.)
- `sitemap.xml` and `robots.txt` are generated automatically from
  `activeLocales` and the content folders — no manual maintenance.
- Before going live: set the real domain in `lib/site-config.ts`, complete
  the placeholder checklist above, and re-run `npm run build`.
- `/en/styleguide` and `/lo/styleguide` are internal component QA pages —
  noindexed and robots-disallowed; safe to leave, or delete
  `app/[lang]/styleguide/` if unwanted.
