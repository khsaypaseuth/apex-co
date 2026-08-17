# Agent Notes — Workstream Outputs

Per the master plan §Orchestration Requirement, the build ran seven internal
workstream perspectives. This file records what each workstream decided and
verified, referencing the decision log (`build-log/decision-log.md`,
D-numbers) and phase history (`BUILD_PLAN.md`). Written at Phase 8 close.

---

## 1. Brand Strategist

**Positioning delivered:** "Premium consulting firm that could charge
international clients, while still clear and simple for local users" —
implemented as *modern editorial corporate luxury for Southeast Asian
professional services*.

- **Identity system:** locked the five-color palette from the owner's
  curated theme image rather than the master plan's approximate text values
  (D-002); only two derived tokens added (D-016) so gold stays a scarce
  accent, per the "$10K checklist" restraint rule.
- **Voice:** professional, hedged, non-alarmist. Every factual sentence uses
  cautious wording ("commonly", "typically", "requirements vary") — enforced
  down to the Lao register (ໂດຍທົ່ວໄປ / ມັກຈະ, D-082).
- **Trust signals:** parent-company line ("A business unit of Super Vision
  Co., Ltd.") on hero trust statement, footer, about, and contact;
  verification badges displayed honestly (nothing is claimed `verified` at
  launch — a deliberate credibility play, D-051/D-061); attribution log for
  imagery even though licenses don't require it (D-031).
- **Conversion strategy:** dual hero CTAs (Book a Consultation / Explore
  Services), final CTA section on every page, floating WhatsApp/LINE buttons
  (placeholder but branded, D-023), lead-capture form on all six guides with
  the guide's own service preselected (D-063).
- **Naming discipline:** tagline and all service names copied verbatim from
  the master plan; hero imagery only captioned "Vientiane/Laos" when the
  photo is confirmed Laos (D-032, D-044) — brand honesty extends to alt text.

## 2. UX Architect

**Sitemap delivered:** all 13 master-plan pages + 3 content detail routes
(knowledge/laws/guides `[slug]`), × 2 locales, all statically generated.

- **Navigation:** one global chrome in the locale layout (D-041) — header
  with scroll-reactive transparency on home, breadcrumbs on every inner
  page, `aria-current` active states (D-076), footer with full sitemap.
- **User journeys:** service pages → related knowledge → contact;
  articles/laws/guides cross-link through frontmatter-driven related lists
  that are existence-filtered so no journey dead-ends (D-042, D-062).
- **Content findability:** Knowledge Center = FilterBar with search + 9
  category pills; Laws Library = same pattern with 8 law categories
  (completed in Phase 8 after QA caught the gap — D-111). Filter state is
  component-local by design; URL state deferred (D-021).
- **Lead capture:** dedicated 4-field LeadCaptureForm on guides (D-063),
  7-field ContactForm on contact — both fully labelled, placeholder backends
  clearly marked.
- **Empty states designed, not faked:** News (D-010) and any empty content
  list get a designed empty state with an onward link.
- **Mobile decisions:** sticky mobile nav dialog, stacked cards, shorter
  hero, floating contact actions — mobile is laid out, not shrunk.
- **Language switching:** path-preserving segment swap on every page
  (verified in QA item 7), only active locales offered (D-001).

## 3. Frontend Designer

**Design system delivered:** Tailwind v4 CSS-first tokens (`@theme` in
`globals.css`) — navy-950/700, gold-500, mist-100, slate-500 + derived
mist-50, gold-600, slate-600 (D-002, D-016, D-075).

- **Typography:** Fraunces (EN display) + Manrope (EN body); Noto Serif Lao
  (display) + Noto Sans Lao (body) with per-locale font-stack switching on
  `<html lang>` (D-007). Lao line-height raised to 1.8 with un-layered
  overrides that beat utility classes (D-084); serif restricted to h1/h2 in
  Lao for legibility.
- **Component library:** 21 typed components (Header, Hero, cards, forms,
  FilterBar, DisclaimerBox, etc.), all content-free — strings arrive from
  dictionaries/content modules (D-083 closed the last hardcoded string).
- **Editorial layout language:** grouped two-column service lists with thin
  gold dash markers instead of 44 identical cards (D-045); generous
  whitespace, thin gold rules, sr-only h2s to keep heading order clean
  (D-076).
- **Imagery:** 19 Pexels photos (D-031), muted warm-neutral grade, CDN-side
  crops for payload control (D-033, total ~4.0 MB across 19 files), static
  imports for auto-dimensions + blur placeholders, no text-over-image
  without overlay, no unverified location captions (D-032/D-034/D-044).
- **Motion that whispers:** CSS transitions + soft reveals only, no
  animation libraries, `prefers-reduced-motion` respected.
- **Focus design:** two-tone focus ring (gold outline + navy ring) that
  passes 3:1 on both light and dark surfaces (D-074).

## 4. SEO Strategist

**Deliverables:** `lib/seo.ts` shared metadata builder, `app/sitemap.ts`,
`app/robots.ts`, OG image, `docs/seo-map.md`.

- **Metadata:** every route calls `pageMetadata()` (D-070) — templated
  titles (`%s | Super Consulting`), descriptions, canonicals, full OG blocks
  with locale variants, article OG type on detail pages.
- **hreflang discipline:** only active locales + `x-default` → en (D-071);
  reserved locales are excluded from hreflang/sitemap/robots so redirecting
  URLs are never advertised — no thin-content penalty when th/vi/zh are
  parked (D-001).
- **Sitemap:** derived from the same content loaders as
  `generateStaticParams` so routes and sitemap cannot drift (D-073); 78 URLs
  with per-entry hreflang alternates; `lastModified` only where a real
  frontmatter date exists; styleguide excluded and robots-disallowed.
- **Keyword mapping:** all 15 master-plan target keywords mapped to one
  primary page each with supporting cluster links (`docs/seo-map.md`),
  clusters matching the four service categories.
- **OG image:** brand-colored 1200×630 PNG hand-built as SVG and rasterised
  (D-072); known limitation — serif stand-in font until Fraunces is
  rendered in.
- **Structure:** semantic HTML, one h1 per page, heading order verified,
  85 fully prerendered pages (no λ routes) for crawl speed.

## 5. Legal Content Skeptic

**Mandate:** guardrails 5–7 — no invented legal/tax/immigration facts.

- **Verification taxonomy:** every factual content file carries
  `verificationStatus` (`verified` / `needs-verification` / `general-info`)
  in Zod-validated frontmatter (D-018/D-019); **nothing** ships as
  `verified` — 24 files per locale are `needs-verification`, 2 are
  `general-info`.
- **Machine-checkable markers:** the literal line
  `> **Needs legal verification before publication.**` appears at every
  cluster of unverified process claims (45 lines per locale); Lao files
  carry a dual English+Lao marker so reviewers grepping in either language
  catch every passage (D-052, D-090, D-100). QA item 13 verified exact 1:1
  parity.
- **No unhedged specifics:** all numeric fees, rates, processing times, and
  visa durations were replaced with "confirm with the authority" wording —
  QA regex scan over all 52 markdown bodies found **zero** digit+currency/
  duration claims. VAT/CIT articles explain concept and compliance cycle
  only, never rates (D-052).
- **Sources policy:** only two confidently-real official portals cited
  (D-051, D-061); no guessed ministry deep links — authorities are named in
  prose instead.
- **Disclaimer:** exact master-plan wording as a single constant
  (`lib/site-config.ts`), dictionary-rendered in both locales, present on
  every service/knowledge/law/guide/FAQ page (D-022); Lao translation keeps
  the same legal scope (D-017 terminology).
- **Residual risk flagged:** Lao translations are machine-drafted; native
  legal review is the publication gate (D-082/D-092/D-100 risks; carried
  into the QA report's launch checklist).

## 6. Code Quality Critic

**Standards:** Matt Pocock-style strict TypeScript throughout.

- **Type system:** strict mode, no `any` in app code; domain types in
  `lib/types.ts` with const-array-derived unions (D-018); `Dictionary` type
  derived from `en.json` so locale drift is a compile error (D-014);
  `PageProps<'/[lang]/…'>` helpers everywhere, awaited params (Next 16).
- **Validation:** Zod schemas on all frontmatter — invalid content fails the
  build with the file name and issues; missing files return `null`, absence
  ≠ corruption (D-019). Phase 7 added standalone validators for Lao content
  parity (D-092/D-100 — heading counts, marker adjacency, Thai-codepoint
  scan that caught a real typo).
- **Architecture:** content lives in `content/` + `dictionaries/`, never in
  components; per-locale data via `lib/page-data.ts` static-import maps with
  en fallback (D-081); one dynamic route per content type cloning a single
  proven pattern (D-046, D-062); client components only where interaction
  demands it (Header, MobileNav, LanguageSwitcher, forms, FilterBar —
  D-020/D-021).
- **Phase 8 review finding:** the Laws Library page rendered a static grid —
  FilterBar was never wired in (master-plan requirement). Fixed by cloning
  the ArticleList pattern (`app/[lang]/laws/law-list.tsx`, D-111) rather
  than inventing a new abstraction; lint/typecheck/build re-verified.
- **Gates at close:** eslint 0 problems; `tsc --noEmit` clean; build clean
  with 85/85 pages prerendered.

## 7. Completeness Critic

Definition of Done walkthrough (master plan §Definition of Done; language
line amended per D-001 to *English AND Lao completed; th/vi/zh structure
prepared*). Status at Phase 8 close:

| # | Criterion | Status |
|---|---|---|
| 1 | Website runs locally | ✅ `npm run dev` / `next build && next start` verified (QA server on :3299) |
| 2 | Build passes | ✅ 85 static pages, exit 0 (QA item 3) |
| 3 | TypeScript passes | ✅ strict, exit 0 (QA item 2) |
| 4 | Main pages completed | ✅ all 13 sitemap pages + 3 detail route types, both locales |
| 5 | English content completed | ✅ 12 articles, 8 laws, 6 guides, 5 FAQ sections, all page copy |
| 6 | Languages (amended per D-001) | ✅ EN + LO complete; th/vi/zh routes/types/folders + activation READMEs prepared |
| 7 | Knowledge Center with starter articles | ✅ 12 articles, 9-category taxonomy, search + filter |
| 8 | Lao Laws Library with starter topics | ✅ 8 topics, 8 categories, search + filter (filter added in Phase 8, D-111) |
| 9 | Business Guides section | ✅ 6 guides with lead-capture CTA |
| 10 | Contact form UI | ✅ 7 labelled fields, both locales (QA item 8) |
| 11 | Floating WhatsApp and LINE buttons | ✅ every page, clearly-marked placeholders (D-023) |
| 12 | Legal disclaimer on relevant pages | ✅ DisclaimerBox site-wide, exact wording (D-022) |
| 13 | No unverified claims presented as fact | ✅ zero unhedged specifics; 100% marker coverage (QA item 13) |
| 14 | Mobile and desktop layouts checked | ✅ phase-level checks + orchestrator screenshot pass |
| 15 | Screenshots saved | 🔶 orchestrator task, in progress this phase → `screenshots/` |
| 16 | QA report written | ✅ `qa/qa-report.md` (15/15 items) |
| 17 | Decision log written | ✅ `build-log/decision-log.md`, D-001–D-112 |
| 18 | Agent notes written | ✅ this file |
| 19 | README written | ✅ rewritten in Phase 8 |
| 20 | recap.html written, links to deliverables | ✅ repo root, self-contained |
| 21 | Design follows the $10K checklist | ✅ all 8 checklist sections addressed (see Frontend Designer notes) |
| 22 | Strong TypeScript/component quality | ✅ see Code Quality Critic notes |
| 23 | Nothing hidden in undocumented assumptions | ✅ 40+ logged decisions; every deviation and risk carries a D-number |

**Open items (deliberate, documented — not gaps):** native Lao review,
legal verification pass, placeholder contact details/domain/backend,
th/vi/zh activation. All listed in `qa/qa-report.md` §Known limitations and
README §Placeholder replacement.
