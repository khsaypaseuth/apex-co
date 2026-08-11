# QA Report — Super Consulting Website

Phase 8 QA pass, executed 2026-07-11 against the production build
(`next build` + `next start`, port 3299). Covers the master plan's 15 QA
requirements (§QA Requirements). Screenshots (items 4, 5, 15) were taken by
the orchestrator — see `screenshots/`.

**Result: 15/15 items addressed — 12 verified pass, 3 visual items delegated
to the orchestrator's screenshot pass. One defect was found and fixed during
QA (item 10, Laws Library filter — see below).**

---

## 1. Lint — PASS

```
npm run lint   (eslint 9, eslint-config-next 16.2.10)
→ exit 0, no errors, no warnings
```

## 2. Typecheck — PASS

```
npx tsc --noEmit   (TypeScript strict mode)
→ exit 0
```

Re-run after the item-10 fix: still exit 0. Note: dictionary parity is
type-enforced — the `Dictionary` type derives from `en.json`, so a missing or
extra key in `lo.json` fails this step.

## 3. Build — PASS

```
npm run build   (Next.js 16.2.10, Turbopack)
→ exit 0; 85 static pages generated
```

Build output shows every route as `●` (SSG via `generateStaticParams`) or
`○` (static) — **no dynamic (λ) routes**, confirming the full-prerender
performance requirement. Routes: 13 sitemap pages + 12 article + 8 law +
6 guide detail pages + styleguide, × 2 active locales (en, lo), plus
`/robots.txt`, `/sitemap.xml`, `/_not-found`. Zod frontmatter validation ran
on all 52 markdown files during the build with zero errors.

## 4. Home page desktop — SKIPPED HERE (orchestrator)

Screenshots taken by the orchestrator, see `screenshots/`. HTML-level checks
of `/en` and `/lo` (hero, trust statement, 6 service highlights, Why-SV,
knowledge preview, final CTA, floating buttons) verified in the served markup
during the link crawl.

## 5. Home page mobile — SKIPPED HERE (orchestrator)

Screenshots taken by the orchestrator, see `screenshots/`. Mobile nav markup
(`aria-expanded`, `aria-controls`, `aria-modal` dialog) present in served HTML;
JS interactivity was verified at 375px in Phase 2/4.

## 6. Navigation — PASS

Checked on the production server via curl:

- `/en` header/footer contain all 8 top-level nav links
  (`/en/about|services|knowledge|laws|guides|news|faq|contact`), all 200.
- Active state: `aria-current="page"` emitted on the matching nav link
  (Header + MobileNav), gold active styling.
- Breadcrumbs render on every inner page (verified on services, laws,
  knowledge, guides detail pages during the crawl).
- Locale routing (proxy.ts): `/` → 307 `/en`; `Accept-Language: lo` → 307
  `/lo`; reserved locales redirect deterministically (`/th` → `/en`,
  `/th/about` → `/en/about`); unknown bare paths get locale-prefixed
  (`/pricing` → `/en/pricing`).

## 7. Language switcher — PASS

- Deep-page path preservation: `/en/services/business-setup` contains the
  switcher link `href="/lo/services/business-setup"` (and vice versa) —
  the current page survives locale switches.
- `<html lang="en">` on `/en/*`, `<html lang="lo">` on `/lo/*`.
- hreflang alternates on every page: `en`, `lo`, and `x-default` (→ en),
  absolute URLs — matches D-070/D-071.
- Switcher offers only the two active locales (EN / ລາວ), per D-001.

## 8. Contact form UI — PASS

All **7 master-plan fields** have associated `<label for=…>` elements in the
served HTML of both `/en/contact` and `/lo/contact`:

| Field | EN label | LO label |
|---|---|---|
| `contact-full-name` | Full Name | ຊື່ ແລະ ນາມສະກຸນ |
| `contact-company` | Company Name | ຊື່ບໍລິສັດ |
| `contact-email` | Email | ອີເມວ |
| `contact-phone` | Phone / WhatsApp | ເບີໂທ / WhatsApp |
| `contact-method` | Preferred Contact Method | ຊ່ອງທາງຕິດຕໍ່ທີ່ສະດວກ |
| `contact-service` | Service Needed | ບໍລິການທີ່ຕ້ອງການ |
| `contact-message` | Message | (label present) |

Submit is a clearly-marked placeholder (no backend) revealing a demo notice.
The company details block renders the bracketed placeholders
(`[Add phone number]` etc.) exactly per the master plan. The guides'
LeadCaptureForm was also verified: 4 labelled fields
(`lead-full-name`, `lead-email`, `lead-phone`, `lead-service-interest`).

## 9. Knowledge Center filters — PASS

`/en/knowledge` and `/lo/knowledge` server-render the `FilterBar` client
component: one `type="search"` input (labelled, with localized placeholder)
plus 10 category pill buttons (All + 9 categories) with `aria-pressed`
state. Result count and no-results message use `role="status"` live regions.
JS interactivity (typing/filtering) was verified in earlier phases and is
covered by the orchestrator's browser pass.

## 10. Lao Laws Library filters — FAIL → FIXED → PASS

**Defect found:** `/laws` rendered a plain card grid with **no FilterBar**,
despite the master plan requiring the Laws Library to be "searchable and
filterable" (and QA item 10 testing exactly that). The FilterBar component
existed but was only wired into the Knowledge Center.

**Fix applied (this phase, recorded as D-111):**

- New `app/[lang]/laws/law-list.tsx` — client wrapper cloning the proven
  `knowledge/article-list.tsx` pattern: FilterBar (search + 8 law-category
  pills) filtering `LawTopicCard`s, `role="status"` count/no-results.
- `app/[lang]/laws/page.tsx` rewired to pass serializable items into it.
- New dictionary keys `lawsPage.countSingular` / `countPlural` (en + lo).

**Re-verified after rebuild:** `/en/laws` and `/lo/laws` both serve
1 search input + 9 `aria-pressed` pills (All + 8 categories) and the
"8 law topics" count line; lint/typecheck/build re-run clean; link crawl
re-run clean.

## 11. Internal link crawl — PASS (0 failures)

Script: `crawl-links.mjs` (scratchpad) — starts at `/en` and `/lo`, extracts
every internal `href` from served HTML, recursively crawls, GETs each unique
URL once, follows redirect chains manually.

```
Unique internal URLs checked : 79
Pages ending in HTTP 200     : 79
Redirect chains              : 0  (all internal hrefs are locale-prefixed)
Failures (non-200 final)     : 0
```

Cross-check against `/sitemap.xml` (78 URLs): the crawled set = sitemap set
+ `/favicon.ico`; **every sitemap URL is reachable from the seeds** and no
crawled page is missing from the sitemap. `/en/styleguide` (200, noindexed,
robots-disallowed) is intentionally not linked from any page and not in the
sitemap. Re-run after the item-10 fix: identical results.

## 12. Accessibility basics — PASS (deep audit was Phase 6)

Evidence collected this phase:

- **Skip link:** `.skip-link` is the first focusable element in `<body>`
  (`app/[lang]/layout.tsx`), targeting `<main id="main-content">` — present
  on all 15 page templates (grep-verified) and in served HTML.
- **Focus visibility:** global un-layered `:focus-visible` two-tone ring in
  `app/globals.css` (gold outline + navy inner ring, D-074) — beats
  `focus:outline-none` utilities for keyboard users.
- **Lang attributes:** `<html lang>` correct per locale (item 7); Lao pages
  get Lao font stack + raised line-height (D-084).
- **ARIA:** 49 `aria-hidden` (decorative glyphs), 10 `aria-label`,
  5 `aria-current`, `aria-pressed` (filter pills), `aria-expanded`/
  `aria-controls`/`aria-modal` (mobile nav), `aria-labelledby`,
  `role="status"` live regions on filter results.
- **Images:** 0 `<img>` tags without `alt` in served HTML (spot-checked
  `/en`, `/en/about`, `/en/services/business-setup`, `/lo`).
- **Forms:** every input labelled (items 8/9); FAQ accordion is native
  `<details>/<summary>` (keyboard-operable by default).
- **Contrast:** WCAG AA pass documented in Phase 6 (D-074/D-075), including
  the one documented exception (gold eyebrow text, deferred to owner).
- **Reduced motion:** `prefers-reduced-motion` guard in `globals.css`.

## 13. No fake legal claims presented as verified — PASS

- **Unhedged specifics scan:** regex for digits followed by
  kip/LAK/USD/$/%/percent/day/week/month across all 52 markdown bodies
  (en + lo): **0 matches** — no fees, rates, processing times, or durations
  are stated as fact anywhere.
- **Status coverage:** 26 content files per locale — 24
  `needs-verification`, 2 `general-info`
  (`contract-review…` article, `divorce-assistance-basics` law), 0 claimed
  `verified`. Identical distribution in en and lo (frontmatter is copied
  verbatim per D-092/D-100).
- **Marker parity:** all 24 EN `needs-verification` files carry the literal
  marker `> **Needs legal verification before publication.**` (45 marker
  lines total; `divorce-assistance-basics` carries one extra as added
  caution). Every LO file carries **both** the English marker (45 lines) and
  the Lao marker `> **ຕ້ອງກວດສອບທາງກົດໝາຍກ່ອນເຜີຍແຜ່.**` (45 lines) — exact
  1:1 parity per D-090.
- **Disclaimer:** `LEGAL_DISCLAIMER` in `lib/site-config.ts` matches
  `dictionaries/en.json` `legal.disclaimer` verbatim (script-verified);
  DisclaimerBox renders on every service, knowledge, law, guide, and FAQ
  page in both locales (served-HTML spot checks passed).
- **Sources policy:** only two confidently-real official portals are cited
  (`laotradeportal.gov.la`, `investlaos.gov.la`) per D-051/D-061.

## 14. Placeholders clearly marked — PASS

Complete placeholder inventory (= the owner's pre-launch task list):

| # | Placeholder | Where it lives | Where it renders |
|---|---|---|---|
| 1 | `[Add phone number]` / `[ເພີ່ມເບີໂທລະສັບ]` | `dictionaries/en.json` + `lo.json` → `footer.phonePlaceholder` | Footer (every page) + `/contact` company block |
| 2 | `[Add email]` / `[ເພີ່ມອີເມວ]` | `dictionaries/*.json` → `footer.emailPlaceholder` | Footer + `/contact` |
| 3 | `[Add contact link]` / `[ເພີ່ມລິ້ງຕິດຕໍ່]` | `dictionaries/*.json` → `footer.chatPlaceholder` | Footer + `/contact` |
| 4 | WhatsApp / LINE `href="#"` buttons | `components/FloatingContactButtons.tsx` | Floating buttons on every page; hover title "Placeholder — add real contact" (`floating.placeholderNote`, localized) |
| 5 | Domain `https://superconsulting.la` | `lib/site-config.ts` → `SITE_URL` | metadataBase, canonicals, hreflang, OG URLs, sitemap, robots |
| 6 | Contact form submit (no backend) | `components/ContactForm.tsx` | `/contact` — reveals a localized demo-only notice |
| 7 | Lead capture submit (no backend) | `components/LeadCaptureForm.tsx` | All 6 guide pages |
| 8 | OG image wordmark font (Georgia stand-in for Fraunces) | `public/og/og-default.svg` → `.png` (D-072) | og:image everywhere |
| 9 | 24× `needs-verification` content files per locale | `content/{en,lo}/{articles,laws,guides}/` | Verification badges + in-body markers until legal review |

No placeholder pretends to be final content (guardrail 9/10 satisfied).

## 15. Screenshots — SKIPPED HERE (orchestrator)

Taken by the orchestrator (desktop 1280 + mobile 375, key pages), see
`screenshots/`.

---

## Environment

- Node v22.14.0, npm 10.9.2, Next.js 16.2.10 (Turbopack), TypeScript strict,
  Tailwind v4 (CSS-first).
- QA server: production build on `http://localhost:3299` (stopped after QA).
- Crawl script: `crawl-links.mjs` (session scratchpad; logic reproduced in
  this report).

## Known limitations carried into launch checklist

1. Lao content is machine-drafted at professional register — **native Lao
   review is required before publication** (D-082/D-092/D-100).
2. All factual legal/tax/immigration content awaits legal verification
   (24 files per locale marked; statuses flip to `verified` after review).
3. Placeholders 1–7 above must be replaced with real contact details, a
   real domain, and a form backend.
4. Documented AA exception: gold uppercase eyebrow labels on light surfaces
   (D-075) — owner decision pending.
5. th/vi/zh locales are architecture-only (D-001).
