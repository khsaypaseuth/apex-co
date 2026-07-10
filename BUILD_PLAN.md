# SV Consulting Website — Phased Build Plan

> Execution plan derived from `SV_Consulting_Website_Master_Plan.md`, adjusted per owner decisions:
> **Launch languages: English + Lao.** Thai / Vietnamese / Chinese get architecture only (routes, types, content folders) — content deferred until EN + LO are finalized.
> **Palette: exact values from `websitecolotheme.avif`** (see Design Tokens below).
> **Images: downloaded free-license photos from Unsplash/Pexels**, stored locally with an attribution log.
>
> Each phase is self-contained and can be executed in a fresh context. Verified against live docs on 2026-07-10 — see Phase 0.

---

## Phase 0 — Verified Facts (Documentation Discovery, completed 2026-07-10)

**Environment:** Node v22.14.0, npm 10.9.2, pnpm 10.33.2. Network access to images.unsplash.com, images.pexels.com, registry.npmjs.org confirmed (all 200).

**Stack versions (live-verified):**

| Item | Verified fact |
|---|---|
| Next.js | **16.2.10** current stable. `create-next-app` defaults: TS, ESLint, Tailwind, App Router, no `src/`, Turbopack, alias `@/*` |
| Params | `params` is a **Promise** — always `const { lang } = await params`. Use built-in `PageProps<'/[lang]'>` / `LayoutProps<'/[lang]'>` helpers |
| Locale routing | **`proxy.ts`** at project root (`middleware.ts` is deprecated in Next 16). Pattern: pathname-locale check → redirect with `/${locale}` prefix. Matcher: `'/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)'`. Reference: nextjs.org/docs/app/guides/internationalization + `vercel/next.js` → `examples/i18n-routing` |
| i18n approach | **Framework-free dictionary pattern** (no next-intl): `app/[lang]/`, `generateStaticParams`, `dictionaries.ts` with `import 'server-only'` and lazy `import('@/dictionaries/en.json')`, `hasLocale()` type guard → `notFound()` |
| Tailwind | **v4.3** (CSS-first). No `tailwind.config.ts`. Tokens via `@theme { --color-navy-900: ... }` in `globals.css`; next/font variables via `@theme inline { --font-display: var(--font-fraunces) }` |
| Fonts | `next/font/google` verified importables: `Fraunces`, `Manrope`, `Noto_Sans_Lao` (subsets `['lao','latin']`), `Noto_Serif_Lao` (exists!). Variable fonts — no `weight` needed. Use `variable: '--font-x'`, `display: 'swap'` |
| Markdown | **gray-matter + unified pipeline** (`gray-matter`, `unified`, `remark-parse`, `remark-gfm`, `remark-rehype`, `rehype-stringify`). NOT @next/mdx (no frontmatter support), NOT contentlayer (abandoned) |
| Metadata | `generateMetadata` with awaited params; `metadataBase` required in root layout (build error without it when using OG images); hreflang via `alternates.languages`; `app/sitemap.ts` returns `MetadataRoute.Sitemap` (supports `alternates.languages`); `app/robots.ts` returns `MetadataRoute.Robots` |
| Build mode | **`next build` + `next start`** (default Node build), NOT `output: 'export'` — static export kills proxy locale-redirect and zero-config image optimization. All pages still fully prerendered via `generateStaticParams` |
| Images | Local files in `/public/images/`. Prefer **static imports** (auto width/height + blurDataURL). `remotePatterns` NOT needed (all images local) |

**Anti-patterns (do NOT do):**
- `i18n` key in `next.config.*` (Pages Router only — ignored in App Router)
- `middleware.ts` (deprecated → `proxy.ts`), sync `params` access, `next export` CLI
- `tailwind.config.ts`, `@tailwind base/components/utilities` directives (v3-isms)
- `themeColor`/`viewport` inside `metadata` (use `generateViewport`)
- Inventing legal/tax/visa facts — every factual claim gets a source URL or a `verificationStatus: "needs-verification"` frontmatter flag

---

## Design Tokens (locked)

From `websitecolotheme.avif` (exact hex, overrides approximate values in master plan text):

```css
@theme {
  --color-navy-950: #0A1B2A;  /* deep navy — primary dark surfaces, footer, hero */
  --color-navy-700: #203D63;  /* royal navy — secondary surfaces, links, accents */
  --color-gold-500: #C8A53A;  /* warm gold — CTA accent, rules, highlights (sparingly) */
  --color-ivory-100: #F8F0DC; /* ivory — light section backgrounds */
  --color-slate-500: #6B7280; /* slate — muted text, borders */
}
```

Derived tints/shades may be added (e.g. `--color-ivory-50: #FCF8EE`, gold hover `#B08F2E`) but these five are the identity. Gold on navy passes WCAG AA for large text/accents; body text on ivory uses navy-950, never slate-on-ivory below AA.

**Typography:**
- Display (EN): **Fraunces** (variable, `axes: ['opsz']`) — editorial, premium
- Body (EN): **Manrope** (variable)
- Lao body/UI: **Noto Sans Lao** — Lao display headings: **Noto Serif Lao**
- Font stack switches per-locale via a `lang`-keyed class on `<html>`

**Design direction:** "Modern editorial corporate luxury for Southeast Asian professional services" — calm, premium, trustworthy. Generous whitespace, thin gold rules, serif display + sans body, subtle motion only (hover, soft reveal, reduced-motion respected).

---

## Locale Architecture (locked)

```ts
// lib/i18n-config.ts
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'lo', 'th', 'vi', 'zh'],   // full type surface, routes reserved
  activeLocales: ['en', 'lo'],               // launch: only these in switcher & sitemap
} as const
export type Locale = (typeof i18n)['locales'][number]
```

- `generateStaticParams` emits **active** locales only; proxy redirects unknown/inactive locales to `defaultLocale`.
- `content/{en,lo,th,vi,zh}/` folders all created; only `en/` and `lo/` populated. `th/vi/zh` get a `README.md` explaining how to activate later (add to `activeLocales`, copy content).
- Language switcher shows EN / ລາວ only at launch.

---

## Phase 1 — Scaffold, i18n Routing, Design System Foundation

**Goal:** Running Next.js 16 app at repo root with locale routing (`/en`, `/lo`), theme tokens, and fonts wired.

1. Scaffold into a temp dir (create-next-app refuses non-empty dirs), then move into repo root, preserving `SV_Consulting_Website_Master_Plan.md`, `BUILD_PLAN.md`, `websitecolotheme.avif` (move these into `docs/`):
   ```bash
   cd /Users/khamphone/Documents/CodingProject/Projects/sv-consulting
   npx create-next-app@latest _scaffold --ts --tailwind --eslint --app --no-src-dir --turbopack --import-alias "@/*" --skip-install --disable-git --yes
   rsync -a _scaffold/ ./ && rm -rf _scaffold && npm install
   mkdir -p docs && mv SV_Consulting_Website_Master_Plan.md websitecolotheme.avif docs/
   ```
2. Create `lib/i18n-config.ts` (above), `proxy.ts` (copy pattern from nextjs.org/docs/app/guides/internationalization — Negotiator + `@formatjs/intl-localematcher`, redirect to `/${locale}${pathname}`), and restructure to `app/[lang]/layout.tsx` + `app/[lang]/page.tsx` with `generateStaticParams` and `hasLocale` guard → `notFound()`.
3. `app/[lang]/layout.tsx`: load all four fonts via `next/font/google` with `variable:` options; `<html lang={lang}>` with font variable classes; set `metadataBase` (placeholder `https://svconsulting.la` — recorded in decision log).
4. `globals.css`: `@import "tailwindcss"`, `@theme` palette block, `@theme inline` font mapping, base prose/heading styles, `prefers-reduced-motion` guard.
5. Dictionaries: `dictionaries/en.json`, `dictionaries/lo.json` (nav/footer/common UI strings only for now), `lib/dictionaries.ts` with `server-only`.

**Verify:** `npm run dev` → `/` redirects to `/en`; `/lo` renders with `lang="lo"`; `/th` redirects to `/en`; navy/gold/ivory classes resolve; `npm run build` passes; typecheck passes.

**Guards:** no `middleware.ts`; no `tailwind.config.ts`; no sync params.

---

## Phase 2 — Domain Types, Content Pipeline, Component Library

**Goal:** Typed content layer + all shared components, rendered in a styleguide route.

1. **Domain types** (`lib/types.ts`): `Service`, `ServiceCategory`, `Article`, `LawTopic`, `Guide`, `FaqItem`, `NewsItem` — with `verificationStatus: 'verified' | 'needs-verification' | 'general-info'` on anything factual. Zod schemas for frontmatter validation (`lib/content-schema.ts`).
2. **Markdown pipeline** (`lib/content.ts`): gray-matter + unified exactly as verified in Phase 0 (copy snippet from discovery report / nextjs.org/docs/app/guides/mdx Deep Dive). Functions: `getArticle(lang, slug)`, `listArticles(lang, category?)`, same for laws/guides. Frontmatter validated with Zod; invalid content = build-time throw (explicit errors).
3. **Components** (each small, typed, composable): Header, LanguageSwitcher, MobileNav, Footer, Hero, SectionHeader, ServiceCard, ArticleCard, GuideCard, LawTopicCard, FaqAccordion (native `<details>`-based, accessible), CtaSection, ContactForm (UI only, placeholder action), FloatingContactButtons (WhatsApp/LINE placeholders, clearly marked), Breadcrumbs, TrustBadge, DisclaimerBox, RelatedArticles, RelatedServices, FilterBar (client component for Knowledge Center / Laws Library search+filter).
4. Legal disclaimer constant (exact text from master plan) rendered by `DisclaimerBox`; used on every legal/tax/immigration/guide page.
5. Temporary `/[lang]/styleguide` route rendering every component for visual QA (removed or noindexed at the end).

**Verify:** typecheck; styleguide renders all components in both locales; FaqAccordion keyboard-operable; mobile nav works at 375px.

**Guards:** no `any`; no duplicated section markup (use SectionHeader/CtaSection); content data lives in `/content` and `/dictionaries`, never hardcoded in components.

---

## Phase 3 — Imagery Acquisition

**Goal:** ~15–20 professional, license-safe images downloaded, optimized, attributed.

1. Source from **Unsplash and Pexels only** (both free-license, no attribution legally required — we attribute anyway). Search themes: Vientiane / Laos cityscape, Mekong river, modern office meeting details, document signing, architecture abstracts, calm interiors. Consistent grade: prefer muted, warm-neutral images that harmonize with navy/gold/ivory.
2. Download via direct CDN URLs (`images.unsplash.com/...?w=2400&q=80`, `images.pexels.com/...`) into `public/images/{hero,sections,articles}/` with descriptive kebab-case names.
3. Record every image in `public/images/ATTRIBUTIONS.md`: file, source URL, photographer, license.
4. Convert/resize where needed (`sips` available locally) — hero ≤ 2400px, cards ≤ 1200px; keep total payload sane. Use static imports in components for auto-dimensions + blur placeholder.
5. Every image gets meaningful `alt` text in both locales (alt strings live in dictionaries/content, not hardcoded).

**Verify:** all images load via `next/image` with no console warnings; ATTRIBUTIONS.md complete; no image over 600KB after optimization.

**Guards:** no hotlinking (all local); no images implying real client identities; no text-over-image without contrast overlay.

---

## Phase 4 — Main Pages (English)

**Goal:** All 13 sitemap pages routed and complete in English.

Routes under `app/[lang]/`: `/` (home), `/about`, `/services`, `/services/business-setup`, `/services/visa-immigration`, `/services/legal-family`, `/services/accounting-tax`, `/knowledge`, `/laws`, `/guides`, `/news`, `/faq`, `/contact`.

- Section-by-section content per master plan (Home hero copy, trust statement, 6 service highlights, Why-SV, Knowledge preview, final CTA; About mission/vision/values; the four service-category pages with the exact service lists; Contact with full field set + placeholder company details clearly marked `[Add phone number]` etc.).
- Page content sourced from `content/en/pages/*.md` + structured data files (`content/en/services.ts` or JSON) — components stay content-free.
- Cautious wording on anything factual ("commonly", "typically", "requirements vary") + DisclaimerBox on all service pages.
- Mobile-specific decisions: shorter hero, sticky contact CTA, stacked cards.

**Verify:** every route 200s in `/en`; navigation + breadcrumbs correct; contact form UI complete with labels and keyboard focus; build passes.

**Guards:** no invented legal facts; no unmarked placeholders; no lorem ipsum.

---

## Phase 5 — Knowledge Center, Laws Library, Guides, News, FAQ (English)

**Goal:** All content sections populated with the master plan's starter set.

1. **Knowledge Center** (`/knowledge`): 9 category taxonomy; **12 starter articles** (list in master plan §Starter Article Ideas) as markdown with full frontmatter (title, summary, lastUpdated, readingTime, category, verificationStatus, relatedServices, relatedArticles). Every article: DisclaimerBox + `Needs legal verification before publication` marker on unverified specifics. FilterBar: client-side category filter + text search over title/summary.
2. **Lao Laws Library** (`/laws`): 8 starter law-topic pages (Company Registration Rules … Divorce Assistance Basics) with the required section structure (plain-English summary, who it affects, key obligations, common mistakes, related links, verification status, source URLs where available). Searchable/filterable by category.
3. **Business Guides** (`/guides`): 6 guide pages with lead-capture CTA form (Full Name, Email, Phone/WhatsApp, Service Interest — placeholder backend).
4. **News** (`/news`): CMS-ready structure with a designed **empty state** (per master plan preference) — no fake news items.
5. **FAQ** (`/faq`): all 5 sections from the master plan, accordion, careful wording + disclaimer.

**Verify:** 12 articles + 8 law topics + 6 guides render; filters work with JS and degrade gracefully; all internal links resolve; frontmatter Zod-validates; build passes.

**Guards:** do not state processing times, fees, or document lists as fact — mark them; no full legal text reproduction.

---

## Phase 6 — SEO, Accessibility, Performance Pass

**Goal:** The "invisible expensive stuff."

1. `generateMetadata` on every page: title template (`%s | SV Consulting`), description, OG (title/description/image placeholder 1200×630 generated in brand colors), `alternates.languages` hreflang for **active** locales, canonical.
2. `app/sitemap.ts` (all active-locale URLs with `alternates.languages`) + `app/robots.ts`.
3. Target keywords from master plan mapped page-by-page (documented in `docs/seo-map.md`).
4. Accessibility sweep: WCAG AA contrast check on every color pair used, focus-visible styles, skip-to-content link, form labels/aria, alt text, heading order, reduced-motion.
5. Performance: static rendering confirmed for all routes (build output shows ●/○, no λ), image sizes audited, no heavy animation libs (CSS transitions + IntersectionObserver reveal only).

**Verify:** build output confirms full prerender; sitemap.xml + robots.txt render; Lighthouse-style manual checks; keyboard-only walkthrough of nav, accordion, forms, switcher.

---

## Phase 7 — Lao Localization

**Goal:** Complete, natural Lao content — not machine-literal.

1. Complete `dictionaries/lo.json` (all UI strings).
2. Translate all pages, 12 articles, 8 law topics, 6 guides, FAQ into `content/lo/` mirroring `content/en/` structure. Tone: clear, respectful, practical Lao appropriate for professional services; keep technical/legal terms with Lao explanation + English term in parentheses where the English term is commonly used (e.g. Work Permit).
3. Lao typography QA: Noto Sans Lao / Noto Serif Lao rendering, line-height (Lao script needs taller line-height ~1.8 for body), no clipped ascenders/descenders, date formats.
4. Language switcher preserves the current page across locales (path mapping).

**Verify:** every `/en/*` route has a `/lo/*` twin; no English fallback leaks on Lao pages (grep content for untranslated strings); Lao renders correctly on mobile viewport.

**Guards:** Lao content carries the same disclaimers and verification markers as English — translated, not dropped.

---

## Phase 8 — QA, Documentation, Recap

**Goal:** Definition of Done met, everything documented.

1. Run the full master-plan QA list: lint, typecheck, build, desktop+mobile home, nav, switcher, contact form, both filter UIs, all internal links (scripted link crawl), accessibility basics, no-fake-claims audit, placeholder audit. Save to `qa/qa-report.md`.
2. Screenshots (desktop 1280 + mobile 375, key pages) → `screenshots/` via the preview browser tooling.
3. Finalize `build-log/decision-log.md` (running throughout) and `build-log/agent-notes.md` (workstream outputs: brand, UX, design, SEO, legal-skeptic, code-critic, completeness-critic).
4. `README.md`: overview, stack, install/dev/build commands, folder + language structure, how to add articles/law pages/services, how to activate TH/VI/ZH, placeholder replacement list, deployment notes.
5. `recap.html`: self-contained recap page per master plan spec.
6. Remove/noindex the styleguide route.

**Definition of Done = master plan checklist**, with the language line amended to: *English AND Lao content completed; Thai, Vietnamese, Chinese structure prepared.*

---

## Execution Notes

- **Never-ask rule** honored: professional decisions recorded in `build-log/decision-log.md` as they're made (initial entries already seeded).
- Suggested execution: phases 1–2 sequential; 3 can run parallel to 4; 5 → 6 → 7 → 8 sequential.
- Placeholder contact details (`[Add phone number]`, `[Add email]`, WhatsApp/LINE links) are the owner's post-build task — listed in README's "replace placeholders" section.
