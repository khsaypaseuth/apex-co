# Decision Log — SV Consulting Website

Format per master plan: question we would have asked → decision → reason → risk → how to change later.

---

## D-001 — Launch languages
- **Question:** Build all 5 languages now or phase them?
- **Decision:** English + Lao content at launch (owner-confirmed, 2026-07-10). Thai, Vietnamese, Chinese: routes/types/content folders prepared, content deferred.
- **Reason:** Owner instruction: "let's start with English and Lao and other language after once we finalize."
- **Risk:** None significant; hreflang/sitemap emit active locales only so no thin-content SEO penalty.
- **Change later:** Add locale to `activeLocales` in `lib/i18n-config.ts`, populate `content/{th|vi|zh}/` and `dictionaries/{th|vi|zh}.json`.

## D-002 — Color palette
- **Question:** Master plan text colors (#071C33 etc.) or the theme image?
- **Decision:** Exact values from `websitecolotheme.avif`: #0A1B2A, #203D63, #C8A53A, #F8F0DC, #6B7280.
- **Reason:** The image is the owner's curated palette; text values were labeled "recommended."
- **Risk:** Low. Slate #6B7280 fails AA on ivory for small text — restricted to large/muted-on-white usage; token guidance in BUILD_PLAN.md.
- **Change later:** Edit `@theme` block in `app/globals.css` (single source of truth).

## D-003 — Build location
- **Question:** Master plan says `projects/sv-consulting-website/`; where do we actually build?
- **Decision:** App lives at repo root `/Users/khamphone/Documents/CodingProject/Projects/sv-consulting/`; planning docs move to `docs/`.
- **Reason:** This folder IS the project directory; nesting would duplicate the path meaning. Scaffold via temp dir because create-next-app refuses non-empty directories.
- **Risk:** None.
- **Change later:** N/A.

## D-004 — Framework versions & i18n mechanism
- **Decision:** Next.js 16.2.10 (App Router, `proxy.ts` not deprecated `middleware.ts`), Tailwind v4 (CSS-first `@theme`), framework-free dictionary i18n (no next-intl).
- **Reason:** Verified current stable via live docs 2026-07-10; 2-locale brochure+articles site doesn't need ICU formatting, and the official dictionary pattern is fully static by default.
- **Risk:** If pluralization/date formatting needs grow, next-intl retrofit is moderate work.
- **Change later:** next-intl v4 can be layered on the same `/[lang]/` structure.

## D-005 — Markdown pipeline
- **Decision:** gray-matter + unified (remark-parse/remark-gfm/remark-rehype/rehype-stringify), Zod-validated frontmatter. Not @next/mdx (no frontmatter support), not contentlayer (abandoned).
- **Risk:** No React components inside article bodies; acceptable — articles are prose. `next-mdx-remote` v6 is the escape hatch if needed.

## D-006 — Build output mode
- **Decision:** Default Node build (`next build` + `next start`), not `output: 'export'`.
- **Reason:** Static export disables the proxy locale redirect and zero-config image optimization. All routes still fully prerendered via `generateStaticParams`.
- **Change later:** Could switch to export by moving locale redirect client-side and setting `images.unoptimized`.

## D-007 — Typography
- **Decision:** Fraunces (display) + Manrope (body) for EN; Noto Sans Lao (body) + Noto Serif Lao (display) for Lao.
- **Reason:** Master plan bans Inter/Roboto, asks premium editorial; all four verified available in next/font/google; Noto Serif Lao keeps the editorial feel in Lao.
- **Risk:** Lao serif display legibility at small sizes — restricted to h1/h2.

## D-008 — Domain / metadataBase
- **Question:** No domain purchased (guardrail forbids buying).
- **Decision:** Placeholder `https://svconsulting.la` as `metadataBase`, clearly marked placeholder in README.
- **Change later:** Single constant in `lib/site-config.ts`.

## D-009 — Images
- **Decision:** Unsplash + Pexels free-license photos, downloaded locally, logged in `public/images/ATTRIBUTIONS.md`. Muted/warm-neutral grade to match navy/gold/ivory.
- **Risk:** Authentic Vientiane-specific imagery may be limited on stock sites; fall back to regional/abstract premium visuals per master plan §Imagery.

## D-010 — News section
- **Decision:** Designed empty state + CMS-ready structure; no sample news items.
- **Reason:** Master plan explicitly prefers this over labelled fake news.

## D-011 — Scaffold temp dir name
- **Question:** Plan says scaffold into `_scaffold`, but npm refuses project names starting with an underscore.
- **Decision:** Scaffolded into `scaffold-tmp` instead, then rsynced into repo root and removed, exactly per the plan's flow. `package.json` name set to `sv-consulting` afterwards.
- **Risk:** None.
- **Change later:** N/A.

## D-012 — Keep create-next-app extras
- **Decision:** Kept scaffold-generated `README.md`, `CLAUDE.md`, and `AGENTS.md` (nothing pre-existing was overwritten). README gets fully rewritten in Phase 8; AGENTS.md carries useful Next 16 agent guidance pointing at bundled docs.
- **Change later:** Phase 8 replaces README.

## D-013 — `server-only` package added
- **Decision:** Added the `server-only` npm package — `import 'server-only'` in `lib/dictionaries.ts` requires it (not bundled with Next).
- **Risk:** None; zero-runtime marker package.

## D-014 — Dictionary loader shape
- **Decision:** `lib/dictionaries.ts` keys loaders by ACTIVE locales only (`en`, `lo`); `Dictionary` type is derived from `en.json` via `Awaited<ReturnType<...>>` (English is the source-of-truth shape, so `lo.json` is structurally checked against it at compile time); `hasLocale` narrows `string` → `ActiveLocale` and doubles as the layout's 404 guard.
- **Reason:** Matches the official Next 16 internationalization guide pattern verbatim while keeping th/vi/zh out of the runtime surface until activated.
- **Change later:** Activating a locale = one line in `i18n-config.ts` + one loader line here + dictionary file.

## D-015 — Proxy behavior details
- **Decision:** In `proxy.ts`: (a) inactive known locales (`/th`, `/vi`, `/zh`) redirect to the **default** locale equivalent preserving the remaining path (`/th/about` → `/en/about`), not to a negotiated locale — reserved routes should land deterministically; (b) `match()` from intl-localematcher is wrapped in try/catch falling back to `en`, since malformed `Accept-Language` headers can throw inside `Intl`; (c) matcher also excludes any path containing a dot (static files).
- **Verified:** `/`→307 `/en`; `Accept-Language: lo` → 307 `/lo`; `/th/about`→307 `/en/about`; `/pricing`→307 `/en/pricing`.

## D-016 — Derived color tokens
- **Decision:** Added the two derived tokens the plan explicitly allows: `--color-ivory-50: #FCF8EE` (page background, lighter than section ivory) and `--color-gold-600: #B08F2E` (gold hover). The five identity colors are unchanged.

## D-017 — Lao terminology: "tax" = ອາກອນ
- **Decision:** Dictionaries use ອາກອນ for "tax" (e.g. ບັນຊີ ແລະ ອາກອນ for Accounting & Tax), not ພາສີ, which in Lao usage commonly means customs duty.
- **Risk:** Low; standard Lao fiscal terminology. Native review still recommended in Phase 7 QA.

## D-018 — Content taxonomy slugs fixed as enums
- **Question:** Master plan lists category names in prose; how do they become code?
- **Decision:** Kebab-case slug enums in `lib/types.ts`: 9 article categories (`starting-a-business` … `compliance-checklists`), 8 law categories (`company-law` … `commercial-contracts`), 4 service category slugs matching the `/services/*` routes. Guides are categorised by service category. Zod frontmatter schemas (`lib/content-schema.ts`) enforce them; localized display names live in `dictionaries/*.json` under `articleCategories` / `lawCategories`.
- **Reason:** Slugs must be stable across locales (used in URLs, filters, frontmatter); display names must translate.
- **Change later:** Add a slug to the const array + a display name per dictionary.

## D-019 — Content loader error semantics
- **Decision:** In `lib/content.ts`, a **missing file** returns `null` (caller decides between fallback and `notFound()`); **invalid frontmatter** throws a descriptive build-time error naming the file and the Zod issues (`z.prettifyError`). Missing locale directories list as empty — inactive locales don't break builds. YAML's habit of parsing unquoted dates into `Date` objects is normalised back to ISO strings in the schema.
- **Reason:** Wrong content must fail the build loudly; absent content is a routing concern, not corruption.

## D-020 — Header is a client component
- **Question:** Guideline says server components by default; Header needs "transparent over hero → navy on scroll".
- **Decision:** `Header` is `'use client'` — the scroll-reactive background requires a scroll listener, and CSS scroll-driven animations aren't cross-browser yet. All strings still arrive as props from dictionaries. `LanguageSwitcher` is also client (needs `usePathname` to swap the `/[lang]` segment while preserving the path). Everything else except `MobileNav`, `ContactForm`, `FilterBar` stays server.
- **Risk:** Slightly larger client bundle for the nav; negligible.

## D-021 — FilterBar owns its state, reports via callback
- **Decision:** `FilterBar` keeps `useState` for query + category and emits `{ query, category }` through `onChange`; list pages wrap it in a small client component that filters. No URL state (`useSearchParams`) at launch.
- **Reason:** Plan explicitly prefers the simple prop/callback design; URL state can be layered on later without changing the component API.

## D-022 — Disclaimer: constant + dictionary pair
- **Decision:** Canonical English disclaimer is `LEGAL_DISCLAIMER` in `lib/site-config.ts` (exact master-plan wording); rendered copies come from `dictionaries/*.json` `legal.disclaimer` (Lao translation added, using ອາກອນ per D-017) via `DisclaimerBox` props. `en.json` must match the constant verbatim.
- **Reason:** One legal wording source, per-locale rendering without components importing server-only config.

## D-023 — Floating contact buttons use brand colors + generic glyphs
- **Decision:** WhatsApp/LINE floating buttons use the services' recognizable brand greens (`#25D366`, `#06C755`) as arbitrary values (not added to the token palette) with simple generic chat glyphs, `href="#"` placeholders and `title="Placeholder — add real contact"`.
- **Reason:** Recognizability requires brand colors; official logo SVGs can be dropped in when real contact links are added.

## D-024 — Styleguide route ships noindexed
- **Decision:** `/[lang]/styleguide` renders every Phase 2 component with dictionary-driven sample data for EN/LO visual QA; `robots: { index: false, follow: false }` metadata. Phase 8 decides removal vs keeping it noindexed. The sample article renders through the real markdown pipeline (Lao page falls back to the EN article until Phase 7 content lands).

## D-030 — Phase 3 imagery decision-numbering range
- **Decision:** Phase 3 (imagery) agent uses the D-030+ range to avoid colliding with the Phase 2 agent writing D-018+ concurrently.

## D-031 — Pexels-only sourcing
- **Question:** Plan allows Unsplash and Pexels; which to use?
- **Decision:** Sourced all 19 images from Pexels only. Pexels CDN URLs are deterministic from the photo ID (`images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg`), so every downloaded file is provably the photo whose page/alt text was verified. Unsplash CDN filenames (`photo-<timestamp>-<hash>`) cannot be derived from the photo page ID, making blind-guess downloads too risky for subject verification.
- **Risk:** None; Pexels License equally permissive.

## D-032 — Hero cityscape is not confirmed Vientiane
- **Question:** The best skyline-at-dusk candidate (Pexels 34428997, found via a "Vientiane" search) has no location tag on its source page; photographer appears Myanmar-based.
- **Decision:** Kept the image (aerial riverside SEA city at golden dusk — perfect brand mood) but named it `hero/riverside-city-dusk-aerial.jpg` and flagged in ATTRIBUTIONS.md that alt text must say "Southeast Asian riverside city at dusk", never "Vientiane". Confirmed-Laos heroes exist alongside it (Mekong Luang Prabang, Mekong Bokeo).
- **Change later:** Swap in a verified Vientiane skyline if one surfaces on Pexels/Unsplash.

## D-033 — Portrait Mekong hero cropped via CDN
- **Decision:** Pexels 17653315 (Mekong sunset, Luang Prabang — strongest confirmed-Laos hero) is portrait 2400x3600 at full size; downloaded with CDN crop params (`w=2400&h=1400&fit=crop`) to get a 2400x1400 landscape hero at 378KB. Local `sips` recompression was abandoned — it inflated file size versus Pexels' own CDN compression, so oversized files were re-fetched at tuned CDN widths instead.

## D-034 — Passport imagery: generic stamps over national covers
- **Decision:** For the visa/immigration section image, chose an open passport showing visa stamps (Pexels 4922086) rather than close-ups of identifiable national passport covers (most Pexels results are Ukrainian/Russian/EU passports, which would read oddly for a Laos-focused consultancy). The articles/ travel image (33497885) shows passports with travel tickets at an angle where nationality is not prominent.

## D-040 — Phase 4 restarted; crashed agent's partial work kept
- **Question:** A prior Phase 4 agent crashed mid-run leaving modified `lib/types.ts`, `dictionaries/en.json` and new `content/en/{services,service-pages,faq}.ts`. Keep or redo?
- **Decision:** Reviewed and kept all of it unchanged (service lists verified verbatim against the master plan: 10/10/9/7/8 items; FAQ covers all 5 sections and every listed question; wording consistently hedged). Completed the missing half: `dictionaries/lo.json` brought to structural parity with `en.json` (the `Dictionary` type derives from en.json, so drift fails typecheck), plus two new `knowledgePage.emptyTitle/emptyText` keys in both locales.
- **Risk:** Low — typecheck enforces dictionary parity; content was re-read line by line.
- **Change later:** N/A.

## D-041 — Global chrome lives in the locale layout; Header gets an 'auto' variant
- **Question:** Render Header/Footer/FloatingContactButtons per page or once in `app/[lang]/layout.tsx`?
- **Decision:** Once in the layout. `Header` gained a default `variant='auto'` that resolves via `usePathname()`: transparent-over-hero on the locale home (`/{lang}`), sticky solid navy elsewhere; explicit `variant` still overrides. Styleguide page dropped its own chrome copies.
- **Reason:** 13 pages would otherwise repeat ~30 lines of identical props; the master plan wants floating contact buttons and footer on every page.
- **Risk:** None observed; `usePathname` is already a dependency of the header's LanguageSwitcher.
- **Change later:** Pass an explicit variant from any page that needs different behavior.

## D-042 — Article detail route added in Phase 4 (`/[lang]/knowledge/[slug]`)
- **Question:** Phase 4's sitemap is 13 routes, but home and `/knowledge` render ArticleCards that must link somewhere; Phase 5 owns articles.
- **Decision:** Added a minimal article page now (breadcrumbs, category + verification badge, markdown body, DisclaimerBox, related services/articles, CTA) with `generateStaticParams` from `listArticleSlugs` and `dynamicParams = false`. Related links are filtered to entries that actually exist, so the one starter article's two not-yet-written related slugs don't produce dead links.
- **Reason:** Cards linking to 404s would fail the "all internal links resolve" QA bar.
- **Change later:** Phase 5 adds the remaining 11 articles; nothing here changes.

## D-043 — Lao routes reuse English long-form prose until Phase 7
- **Decision:** UI chrome, headings, meta, and alt text are fully localized via `dictionaries/lo.json` now; long-form English content (`content/en/{services,service-pages,faq}.ts`, article markdown) renders on `/lo` routes as-is until Phase 7 delivers `content/lo/`. `/lo/knowledge/[slug]` falls back to the English article rather than 404ing; `/lo/knowledge` shows a designed empty state (no articles listed for `lo`).
- **Reason:** BUILD_PLAN sequences Lao content in Phase 7; a Lao-chrome page with English body is more useful than a 404 or a machine-translation risk.
- **Risk:** English "leaks" on Lao pages pre-Phase 7 — accepted and tracked by the Phase 7 verify step.
- **Change later:** Phase 7 mirrors the content files under `content/lo/` and localizes the three `.ts` content modules.

## D-044 — Home hero uses the confirmed-Laos Mekong image
- **Decision:** `hero/mekong-river-sunset-luang-prabang.jpg` (confirmed Luang Prabang, Laos) is the home hero, not the visually striking but location-unconfirmed `riverside-city-dusk-aerial.jpg` (per D-032 that image must not be captioned as Vientiane; it is currently unused). Alt text names Luang Prabang and lives in `dict.alt.heroMekong`.
- **Change later:** The aerial image can back a future section with its generic "Southeast Asian riverside city at dusk" alt.

## D-045 — Services rendered as grouped editorial lists, not 44 cards
- **Decision:** `/services` and the "Services in this area" sections render the exact master-plan service lists as two-column lists with thin gold dash markers (title + one-line summary), grouped under the five master-plan group headings; cards are reserved for the six home highlights. `/services/legal-family` shows both of its groups (Corporate Legal, Family & Personal) under one page, matching the 4-page sitemap.
- **Reason:** 44 near-identical cards would bury the hierarchy and read as template filler; lists keep the editorial, premium rhythm.

## D-046 — Service category pages are one dynamic route
- **Decision:** The four category pages are `app/[lang]/services/[category]/page.tsx` with `generateStaticParams` over the four slugs and `dynamicParams = false` — still fully prerendered (8 static paths), with per-category dictionary keys, hero image (static import + blur), and content from `content/en/service-pages.ts`.
- **Reason:** The four pages share an identical section skeleton (overview → who it's for → services → topics → process → documents → timeline note → disclaimer → how we help → related); one route keeps them structurally consistent.

## D-050 — Phase 5a article-to-category mapping
- **Question:** The master plan lists 12 starter article titles but not which of the 9 Knowledge Center categories each belongs to.
- **Decision:** starting-a-business ×3 (how-to-start, company-registration, business-licenses); tax-accounting ×3 (tax-registration, VAT, CIT); visa-immigration ×2 (work-visa, investor-visa); living-in-laos ×1 (long-term-stay); marriage-family ×1 (marriage-registration); lao-law-basics ×1 (contract-review); compliance-checklists ×1 (annual-compliance).
- **Reason:** Spreads content across 7 of 9 categories so the Knowledge Center filter doesn't look empty; long-term-stay placed under living-in-laos (its audience is people relocating, not just visa applicants) and contract-review under lao-law-basics (it is legal-literacy content, not a startup step). `labour-employment` and `investment` remain empty until later content phases.
- **Risk:** Low; categories are frontmatter fields — trivially recategorised.
- **Change later:** Edit `category:` in the article's frontmatter.

## D-051 — Sources policy for starter articles
- **Question:** Zod allows `sources` URLs, but guardrail 5 forbids invented facts — which URLs are safe to cite pre-verification?
- **Decision:** Only `https://www.laotradeportal.gov.la` (root URL, high confidence it exists — cited in the master plan itself) on the 3 business-registration/licensing articles. All other articles ship `sources: []`. No deep links anywhere; no tax/immigration authority URLs since exact current domains were not verifiable offline.
- **Risk:** Articles look thinly sourced — acceptable because every factual article is marked `needs-verification` and the verification pass should attach real sources.
- **Change later:** Add URLs to `sources:` during the legal verification pass; flip `verificationStatus` to `verified` per D-018 semantics.

## D-052 — Verification-marker and closing-section conventions
- **Decision:** Every `needs-verification` article contains the literal blockquote line `> **Needs legal verification before publication.**` (standalone, with period) at each point where unverified process claims cluster — usually after the intro and after the step list. All numeric specifics (fees, processing times, rates, thresholds, visa durations) are replaced by "current X should be confirmed with the authority" wording; VAT/CIT articles explain concept + compliance cycle only, never rates. Every article ends with `## How SV Consulting can help` plus an italic note that the site-wide disclaimer applies (the page template additionally renders DisclaimerBox). `contract-review` is the sole `general-info` article (genuinely generic guidance, no Lao statutory claims). The pre-existing article #1 was normalised to these conventions and expanded (prep list + common-mistakes section).
- **Reason:** Master plan §Guardrails 5–6 and §Knowledge Center marker requirement; a machine-checkable literal marker lets the publication gate grep for it.
- **Change later:** The verification pass removes marker lines it clears and updates `lastUpdated`.

## D-060 — Law topic → category mapping leaves two categories empty at launch
- **Question:** The master plan's 8 starter law topics don't map 1:1 onto the 8 law categories. How to categorise?
- **Decision:** company-registration-rules → company-law; foreign-investment-rules → investment-law; tax-obligations-for-companies → tax-law; labour-and-employment-basics → labour-law; work-permit-basics → immigration; trademark-registration-basics → intellectual-property; marriage-registration-basics AND divorce-assistance-basics → family-law. The commercial-contracts category (and no second immigration topic) has no starter page.
- **Reason:** Categories describe the law area, not the page count; forcing divorce into commercial-contracts to "fill" the taxonomy would be wrong. The category filter UI is data-driven, so empty categories simply don't mislabel anything.
- **Change later:** Add contract-law and further immigration topics as content grows.

## D-061 — Law/guide sources restricted to two confidently-known official portals
- **Decision:** Only `https://www.laotradeportal.gov.la` (company registration + starting-a-business guide) and `https://investlaos.gov.la` (foreign investment topic + investor guide) are cited as sources; all other law topics and guides ship `sources: []`. Verification status: `needs-verification` everywhere factual obligations are summarised, except divorce-assistance-basics (`general-info` — it describes general routes, not obligations).
- **Reason:** Master plan guardrail — never cite a URL we aren't confident is the real official portal. Ministry sub-sites (tax, IP, labour) have unstable/uncertain URLs; naming the authority in prose without a link is safer than a guessed link.
- **Change later:** The owner's legal review (pre-launch checklist) adds verified sources and flips statuses to `verified`.

## D-062 — Law and guide detail routes clone the knowledge/[slug] pattern
- **Decision:** `app/[lang]/laws/[slug]/page.tsx` and `app/[lang]/guides/[slug]/page.tsx` copy the article route exactly (D-042/D-043 behaviours: `generateStaticParams` over en+lo slugs, `dynamicParams = false`, English-body fallback on `/lo`, existence-filtered related links, DisclaimerBox, CtaSection). Laws additionally render a Sources box (new `common.sources` key) and the status-coloured verification badge matching LawTopicCard's styles; guides use the plain badge plus the category eyebrow. Related articles on both routes link into `/knowledge/`.
- **Reason:** Three content types, one proven pattern — consistent UX and zero new routing concepts.

## D-063 — Guides get a dedicated compact LeadCaptureForm, not a reused ContactForm
- **Question:** Master plan requires a lead-capture CTA on every guide (Full Name, Email, Phone/WhatsApp, Service Interest). Reuse ContactForm?
- **Decision:** New `components/LeadCaptureForm.tsx` client component with exactly the four master-plan fields, its own `dict.leadForm` namespace (added to en.json + lo.json in structural parity), placeholder submit revealing the demo notice, and `defaultServiceInterest` preselecting the guide's own service category. ContactForm stays untouched.
- **Reason:** ContactForm carries three extra fields (company, preferred contact, message) the master plan doesn't ask for here; trimming it via props would complicate both forms. Field IDs are `lead-*` so a guide page and contact page never collide.
- **Change later:** Point both forms at the same backend action when one exists.

## D-070 — Shared metadata builder in lib/seo.ts
- **Question:** Repeat title/description/OG/canonical/hreflang blocks in 14 `generateMetadata` implementations, or centralise?
- **Decision:** New `lib/seo.ts` with `pageMetadata({ lang, path, title, description, ogType, absoluteTitle })` returning title (templated via layout's `%s | SV Consulting`), description, `alternates.canonical`, `alternates.languages` (ACTIVE locales en + lo plus `x-default` → en), and a full `openGraph` block (`og:locale` en_US / lo_LA, `alternateLocale`, siteName, url, type website/article, default image). All 13 routes + 3 detail routes call it; the layout keeps `metadataBase` + per-locale defaults as the safety net. Detail pages pass frontmatter `summary` as description and `ogType: 'article'`.
- **Reason:** hreflang/canonical shape must be identical everywhere; one helper makes activating th/vi/zh a one-line change (`activeLocales`).
- **Change later:** Add per-page OG images by extending `PageSeoInput` with an `image` override.

## D-071 — hreflang and canonicals limited to active locales; x-default → en
- **Decision:** `alternates.languages` lists only `en`, `lo`, and `x-default` (→ `/en/...`). Reserved locales (th/vi/zh) are excluded from hreflang, sitemap, and robots until they join `activeLocales`.
- **Reason:** hreflang pointing at redirecting URLs (proxy sends inactive locales to /en) is an SEO error; x-default to English matches the proxy's default-locale behaviour.

## D-072 — OG default image: static SVG → PNG via @resvg/resvg-js, serif stand-in font
- **Question:** How to produce the branded 1200×630 og:image with no design tooling and og:image needing PNG/JPEG?
- **Decision:** Hand-written `public/og/og-default.svg` (navy-950 field, navy-700 washes, thin gold frame + rule, ivory serif wordmark, gold tagline) rasterised to `public/og/og-default.png` (1200×630, 38 KB) with `@resvg/resvg-js` run from a scratch directory — NOT added to package.json (one-shot build asset; `@resvg/resvg-cli` does not exist on npm; ImageMagick/rsvg-convert absent; sips/qlmanage rasterise SVG unreliably). Wordmark uses Georgia/Times as a stand-in for Fraunces because the webfont isn't available to the rasteriser at build time.
- **Change later:** Re-render with real Fraunces (download TTF, pass to resvg font options) or move to `next/og` dynamic images; keep URL `/og/og-default.png` stable.

## D-073 — Sitemap derives URLs from content loaders; one entry per locale with hreflang
- **Decision:** `app/sitemap.ts` emits every static route + article/law/guide detail route × active locale (en + lo), each entry with absolute-URL `alternates.languages` (→ xhtml:link hreflang in the rendered XML) and `lastModified` from frontmatter `lastUpdated` on content routes only (static routes carry no fake dates). Slugs come from the same fs loaders as `generateStaticParams` (union of en + lo), so sitemap and prerendered routes cannot drift. `/styleguide` is excluded and disallowed in `app/robots.ts` (which also carries the sitemap URL).

## D-074 — Two-tone global focus ring (gold outline + navy inner ring)
- **Question:** Master-plan "visible focus states" — gold-500 alone is 2.23:1 on ivory-50 (fails the 3:1 non-text minimum) but 7.4:1 on navy-950.
- **Decision:** Un-layered `:focus-visible` rule in globals.css: 2px gold-500 outline (offset 2px) + 2px navy-950 box-shadow ring. The navy ring carries contrast on ivory/white surfaces (16.5:1), the gold outline on navy surfaces (7.4:1). Being un-layered, it also beats Tailwind's `focus:outline-none` on the form inputs for keyboard users, while mouse focus keeps the softer gold ring the inputs define.
- **Risk:** The navy ring overrides `focus:ring-*` utilities on :focus-visible — acceptable; keyboard users get the stronger indicator.

## D-075 — Muted-text contrast: slate-600 on ivory/tinted surfaces, slate-500 stays on white
- **Decision:** Added derived token `--color-slate-600: #475569`. All `text-slate-500` sitting on ivory-100 sections/panels, on the slate-tinted verification badges, or as small status text on the ivory-50 page background was bumped to slate-600 (6.7:1 on ivory-100). `text-slate-500` remains only on white card/section surfaces where it measures 4.83:1 (AA pass). Decorative elements (breadcrumb "/" separators, borders) unchanged.
- **Known AA exception (documented, not fixed):** gold-600 small uppercase eyebrow/label text on light surfaces measures 2.7–3.1:1. Fixing it means darkening the brand gold for text (identity change) — deferred to the owner with the recommendation to either accept (labels duplicate adjacent high-contrast headings) or approve a text-gold shade (~#8a7024).

## D-076 — Card-grid pages get sr-only h2s; nav gets aria-current
- **Decision:** Knowledge/Laws/Guides listing pages rendered h3 cards directly under the page h1 (skipped level). Added visually-hidden `<h2>` section headings (`knowledgePage.articlesTitle`, new `lawsPage.listTitle` / `guidesPage.listTitle` keys in both dictionaries) rather than restyling card headings. Header + MobileNav links now set `aria-current="page"` (match on exact path or path prefix) with a gold active state; a `.skip-link` (new `common.skipToContent` key) is the first focusable element in the body, jumping to `<main id="main-content">` present on every page.

## D-080 — Lao structured data ships as parallel TS modules with slugs copied, not derived
- **Question:** Phase 7 needs Lao versions of `content/en/{services,service-pages,faq}.ts`. Same files with a lang field, or parallel modules?
- **Decision:** Parallel modules `content/lo/{services,service-pages,faq}.ts` exporting the exact same shapes/exports as the English files. The English `service()` helper derives slugs from the (English) title; the Lao helper takes the slug as an explicit argument, copied verbatim from the English catalogue, so `/services/*` URLs and service keys are identical across locales by construction. Group ids and category slugs are shared too.
- **Reason:** Slug parity is what makes the language switcher's segment-swap and hreflang pairs valid; deriving slugs from Lao titles would break every cross-locale URL.
- **Change later:** th/vi/zh get their own copies when activated.

## D-081 — Per-locale data loading via lib/page-data.ts (static imports, en fallback)
- **Decision:** New `lib/page-data.ts` exposes `getServiceGroups(lang)`, `getGroupsForCategory(lang, slug)`, `getServicePageContent(lang, slug)`, `getFaqSections(lang)`. Data is held in `Record<ActiveLocale, …>` maps built from static imports of the en + lo modules; a `resolveLocale()` narrows any routable `Locale` to an `ActiveLocale`, falling back to `en` for reserved locales (mirroring proxy.ts, which redirects them anyway). Pages (`/services`, `/services/[category]`, `/faq`) now import from lib/page-data instead of `content/en/*` directly.
- **Reason:** Static imports keep every route fully prerenderable and type-safe (`Dictionary`-style lazy imports are unnecessary for data this small); the en fallback means activating a locale before its data exists degrades gracefully instead of crashing the build.

## D-082 — Lao service-name convention: translate, keep the operative English term in parentheses
- **Decision:** Service names are translated into Lao, with the English term kept in parentheses only where the English term is what clients actually say: all visa types (ວີຊາທຸລະກິດ (Business Visa) …), ໃບອະນຸຍາດເຮັດວຽກ (Work Permit), ໃບອະນຸຍາດພັກເຊົາ (Stay Permit), ຫ້ອງການຜູ້ຕາງໜ້າ (Representative Office), ສາຂາບໍລິສັດ (Branch Office), ການກວດສອບສະຖານະ (Due Diligence), ເຄື່ອງໝາຍການຄ້າ (Trademark), ການບັນທຶກບັນຊີ (Bookkeeping), ບໍລິການເງິນເດືອນ (Payroll), and "legalisation" inside the marriage-certificate service summary. Established terms reused from the Phase 1 dictionaries: tax = ອາກອນ (D-017), compliance = ການປະຕິບັດຕາມລະບຽບ, immigration = ການເຂົ້າເມືອງ. Cautious-wording register preserved with ໂດຍທົ່ວໄປ / ມັກຈະ / ຂຶ້ນກັບແຕ່ລະກໍລະນີ.
- **Risk:** Native-speaker review still required before launch (flagged in Phase 8 QA); translations are professional-register but not lawyer-reviewed.

## D-083 — Last hardcoded UI string moved to dictionaries (floating.placeholderNote)
- **Decision:** The `title` attribute on the placeholder WhatsApp/LINE floating buttons was the only user-facing English string left outside the dictionaries (`PLACEHOLDER_TITLE` in FloatingContactButtons.tsx). It is now a `placeholderNote` prop fed from a new `floating.placeholderNote` key in en.json + lo.json. Grep of app/ + components/ finds no other literal user-facing strings; the English metadata defaults in `app/[lang]/layout.tsx` `generateMetadata` are intentionally left — they only apply when `hasLocale()` fails, which renders notFound anyway.

## D-084 — Lao line-height floor: un-layered override for leading-relaxed and prose-article
- **Question:** `html[lang='lo'] body { line-height: 1.8 }` only works by inheritance — 39 body-text elements set `leading-relaxed` (1.625) directly and rendered markdown uses `.prose-article` (1.75), both of which beat inheritance on Lao pages.
- **Decision:** Added un-layered `html[lang='lo'] .leading-relaxed, html[lang='lo'] .prose-article { line-height: 1.8 }` to globals.css. Being un-layered it wins over Tailwind v4's `@layer utilities` regardless of specificity — same mechanism the existing `html[lang='lo'] .font-display` serif override relies on, so Lao headings already render in Noto Serif Lao even where `.font-display` is applied (verified: `font-display` is the only font-family utility used in the codebase). `leading-tight/snug` instances all sit on headings, which the `html[lang='lo'] h1–h6 { line-height: 1.6 }` rule already overrides.

## D-090 — Lao article verification marker is dual-language (English line kept, Lao line added)
- **Question:** Translate the literal marker line `> **Needs legal verification before publication.**` in Lao article bodies, or keep it in English?
- **Decision:** Both. Everywhere the English article carries the marker, the Lao article carries the English marker line followed by `> **ຕ້ອງກວດສອບທາງກົດໝາຍກ່ອນເຜີຍແຜ່.**` as a second blockquote paragraph (separated by a bare `>` line so both render). Reviewers grepping in either language catch every unverified passage; counts are enforced by the Phase 7b validator (marker count and adjacency per file must match the English source).
- **Reason:** The marker is an internal review gate, not reader content — losing greppability in either language risks publishing unverified claims.

## D-091 — Lao article terminology: operative English terms kept in parentheses on first use
- **Decision:** Following D-082's convention for service names, article translations keep the operative English term in parentheses on first use where Lao readers commonly meet the English form: Work Permit (ໃບອະນຸຍາດເຮັດວຽກ), VAT (ອາກອນມູນຄ່າເພີ່ມ), TIN (ເລກປະຈຳຕົວຜູ້ເສຍອາກອນ), CIT/Profit Tax (ອາກອນກຳໄລ), Enterprise Registration Certificate (ໃບທະບຽນວິສາຫະກິດ), Articles of Association (ກົດລະບຽບຂອງບໍລິສັດ), Investor Visa (ວີຊານັກລົງທຶນ), Force Majeure (ເຫດສຸດວິໄສ), nil return (ການແຈ້ງເປົ່າ). "Lao Trade Portal" stays in English (proper name). tax = ອາກອນ throughout per D-017; "profit tax / corporate income tax" rendered as ອາກອນກຳໄລ (the Lao statutory term) with the English pair in parentheses once.
- **Reason:** These are the forms used on Lao official forms and in mixed-language business practice; a Lao-only rendering would be less recognisable, an English-only one less readable.

## D-092 — Lao article frontmatter: only title/summary translate; taxonomy and metadata copied verbatim
- **Decision:** In `content/lo/articles/*.md`, `title` and `summary` are Lao; `lastUpdated`, `readingTime`, `category`, `verificationStatus`, `relatedServices`, `relatedArticles`, and `sources` are byte-identical to the English counterpart (slugs and URLs are locale-invariant per D-018). `readingTime` is intentionally not re-estimated for Lao text length. Bodies preserve the English heading structure 1:1 (validator compares `##` counts), all GFM tables, every hedging qualifier ("generally/ໂດຍທົ່ວໄປ", "commonly/ມັກ, ໂດຍທົ່ວໄປ", "should be confirmed/ຄວນຢືນຢັນ"), and the closing italic disclaimer line, phrased to match the lo.json `legal.disclaimer` wording (ການເຂົ້າເມືອງ for immigration). No factual claims added or strengthened. Validator: `validate-lo-articles.mjs` (scratchpad, gray-matter resolved from repo node_modules) — 12/12 PASS.
- **Risk:** Machine-drafted Lao; professional register aimed for, but native-speaker review remains a Phase 7 QA gate before publication (the needs-verification markers double as the review hook).

## D-100 — Lao law/guide translations follow the D-092 frontmatter contract; dual verification markers
- **Decision:** `content/lo/laws/*.md` (8) and `content/lo/guides/*.md` (6) translate only `title`/`summary`; `lastUpdated`, `readingTime`, `category`, `verificationStatus`, `relatedServices`, `relatedArticles`, `sources` stay byte-identical to English (slugs/URLs locale-invariant). Every literal English marker line `> **Needs legal verification before publication.**` is KEPT verbatim and immediately followed (as its own blockquote, blank line between) by the Lao marker `> **ຕ້ອງກວດສອບທາງກົດໝາຍກ່ອນເຜີຍແຜ່.**`, so both the English grep gate (D-052) and Lao readers see the warning. `##` heading counts match English 1:1; hedges preserved (ໂດຍທົ່ວໄປ, ມັກ, ຄວນຢືນຢັນ...); no claims added or strengthened. Validator: `validate-lo-laws-guides.mjs` (scratchpad, gray-matter from repo node_modules) — 14/14 PASS, including a Thai-codepoint scan (U+0E00–0E7F must be absent; one stray Thai ນ→น typo was caught and fixed during drafting).
- **Risk:** Machine-drafted Lao; native review remains the Phase 7 QA gate before flipping statuses to `verified`.

## D-101 — Lao terminology for law/guide content (extends D-017 ອາກອນ and lo.json category names)
- **Decision:** Operative terms standardised, with the English term in parentheses on first use per page where the reader will meet it on official forms: enterprise registration = ການຂຶ້ນທະບຽນວິສາຫະກິດ; enterprise registration certificate = ໃບທະບຽນວິສາຫະກິດ (Enterprise Registration Certificate); operating license = ໃບອະນຸຍາດດຳເນີນທຸລະກິດ (Operating License); sole trader = ວິສາຫະກິດສ່ວນບຸກຄົນ; limited company = ບໍລິສັດຈຳກັດ; joint venture = ວິສາຫະກິດຮ່ວມທຶນ (Joint Venture); branch = ສາຂາ; representative office = ຫ້ອງການຜູ້ຕາງໜ້າ; concession = ສຳປະທານ (Concession); special economic zone = ເຂດເສດຖະກິດພິເສດ (Special Economic Zone); nominee = ຜູ້ຖືຮຸ້ນແທນ (Nominee); due diligence = ການກວດສອບສະຖານະ (Due Diligence); trademark = ເຄື່ອງໝາຍການຄ້າ (Trademark); clearance search = ການຄົ້ນຫາກວດສອບ (Clearance Search); work permit = ໃບອະນຸຍາດເຮັດວຽກ (Work Permit); stay permit = ໃບອະນຸຍາດພັກເຊົາ (Stay Permit); quota = ໂກຕາ (Quota); legalisation = ການຢັ້ງຢືນເອກະສານ (Legalisation); profit/corporate income tax = ອາກອນກຳໄລ; VAT = ອາກອນມູນຄ່າເພີ່ມ (VAT); withholding = ອາກອນຫັກ ນະ ທີ່ຈ່າຍ (Withholding); nil filing = ການຍື່ນແບບເປົ່າ (Nil Filing); TIN = ເລກປະຈຳຕົວຜູ້ເສຍອາກອນ; social security = ປະກັນສັງຄົມ; compliance = ການປະຕິບັດຕາມລະບຽບ (matches lo.json); mediation = ການໄກ່ເກ່ຍ (Mediation); marital property = ສິນສົມສ້າງ; employer/employee = ຜູ້ໃຊ້ແຮງງານ/ຜູ້ອອກແຮງງານ (statutory labour-law register, not ນາຍຈ້າງ/ລູກຈ້າງ). Ministries: ກະຊວງອຸດສາຫະກຳ ແລະ ການຄ້າ; ກະຊວງແຮງງານ ແລະ ສະຫວັດດີການສັງຄົມ; ກະຊວງການເງິນ; ກະຊວງພາຍໃນ; ກະຊວງປ້ອງກັນຄວາມສະຫງົບ. Guide chapter headings use ບົດທີ N —; portal/product names (Lao Trade Portal, Invest Laos) stay in English.
- **Reason:** One glossary across laws, guides, and (via shared anchors) 7b's articles keeps cross-links coherent; official-form English terms in parentheses help readers match documents they will actually receive.
- **Change later:** Native legal reviewer may adjust register (esp. ອາກອນຫັກ ນະ ທີ່ຈ່າຍ and ການກວດສອບສະຖານະ, where Lao practice varies).

## D-110 — Styleguide route ships noindexed, not removed
- **Question:** D-024 deferred to Phase 8 the choice between deleting `/[lang]/styleguide` and keeping it noindexed.
- **Decision:** Keep it. It already carries `robots: { index: false, follow: false }`, is disallowed in `robots.txt`, excluded from the sitemap, and linked from no page (the Phase 8 link crawl confirms it is unreachable from `/en` and `/lo`).
- **Reason:** It is the only place every component renders side-by-side in both locales — valuable for future content/locale QA (activating th/vi/zh) at zero SEO or UX cost.
- **Risk:** None identified; direct-URL visitors see an obviously internal page.
- **Change later:** Delete `app/[lang]/styleguide/` if unwanted (nothing imports from it).

## D-111 — Laws Library filter was missing; added in Phase 8 QA (master-plan QA item 10)
- **Question:** QA item 10 "Test Lao Laws Library filters" — but `/laws` rendered a plain card grid; `FilterBar` was only ever wired into the Knowledge Center (Phase 5 gap).
- **Decision:** Fixed during QA rather than only reporting it: new `app/[lang]/laws/law-list.tsx` client wrapper cloning the proven `knowledge/article-list.tsx` pattern (FilterBar with search + 8 law-category pills + All, filtering `LawTopicCard`s, `role="status"` count/no-results lines); `laws/page.tsx` rewired to pass serializable items; new `lawsPage.countSingular`/`countPlural` keys added to `en.json` + `lo.json` (Lao uses the same string for both — Lao does not inflect for number).
- **Reason:** Master plan requires the Laws Library to be "searchable and filterable"; the Definition of Done cannot be met with the gap open, and the one-pattern-three-content-types principle (D-062) made the fix low-risk.
- **Risk:** Minimal — no new abstractions; lint/typecheck/build re-ran clean and the full link crawl was re-run (79 URLs, 0 failures). Verified served on `/en/laws` and `/lo/laws`.
- **Change later:** If URL-persistent filters land (D-021), upgrade ArticleList and LawList together.

## D-112 — Parent-company wording aligned to master plan: "business unit", not "subsidiary"
- **Question:** `site.parentCompanyLine` and `home.trustLine` said "A subsidiary of Super Vision Co., Ltd." — the master plan consistently says "a business unit under/of Super Vision Co., Ltd." (§Mission, §Contact Page).
- **Decision:** Dictionaries updated during Phase 8 to "A business unit of Super Vision Co., Ltd." (EN) / "ໜ່ວຍທຸລະກິດຂອງ Super Vision Co., Ltd." (LO). Verified in served HTML.
- **Reason:** "Subsidiary" makes a corporate-structure claim the master plan does not; "business unit" is the owner's own wording.
- **Risk:** None — wording only, both locales updated in parity (typecheck enforces key parity).
- **Change later:** Single pair of dictionary keys.

## D-130 — Desktop nav slimmed to 4 links; knowledge pages move to footer + mobile "Knowledge" group
- **Decision:** The desktop header nav is now About Us, Services, Business Guides, News & Updates. Knowledge Center, Lao Laws Library, and FAQ leave the desktop bar; the plain Contact link is dropped too (the gold CTA button covers it). The mobile slide-over keeps the FULL page list, with the three moved pages under a small gold "Knowledge" group heading (reuses `footer.knowledge` — no new key). The footer knowledge column continues to carry all five links, with the laws link now using the new short label `nav.lawsShort` = "Lao Laws" / "ກົດໝາຍລາວ" (the full `nav.laws` label remains in use on the laws pages themselves).
- **Reason:** Owner request — 7 links + CTA crowded the bar, especially with the long Lao labels; content pages remain one click away in the footer and the mobile menu.
- **Change later:** `MobileNavGroup[]` on Header/MobileNav makes regrouping trivial.

## D-131 — Header CTA relabelled "Contact Us"; home hero keeps master-plan CTA copy
- **Decision:** The header button (desktop + mobile slide-over) now uses the existing `cta.contactUs` key ("Contact Us" / "ຕິດຕໍ່ພວກເຮົາ"). The home hero and final CTA sections keep `cta.bookConsultation` ("Book a Consultation") — that copy is specified by the master plan and stays untouched.
- **Reason:** Owner request; "Contact Us" better describes the destination (/contact) and pairs with dropping the plain Contact nav link (D-130). No dictionary keys added — `cta.contactUs` already existed.

## D-132 — Language switcher is a flag-only dropdown; hand-drawn SVG flags in components/flags.tsx
- **Decision:** The EN | ລາວ text switcher is replaced by an accessible dropdown: the trigger shows only the current locale's flag + chevron; the menu lists both locales as flag icons. Language names are never visibly rendered in the header — they are carried by sr-only text, `title`, and `aria-label` (options now receive the full names `language.en`/`language.lo`; `language.enShort`/`loShort` keys are retained but currently unused). Keyboard: Escape closes and refocuses the trigger, ArrowUp/ArrowDown cycle items, Tab and outside clicks close. Path is preserved on switch (only the `/[lang]` segment swaps), as before. Flags are hand-drawn inline SVGs in `components/flags.tsx` (UK: simplified Union Jack construction; Laos: red/blue/red bands with double-height blue and centred white circle), rendered ~20×14 with rounded corners and a subtle ring so the white circle reads on navy. The mobile slide-over additionally gets a "Language" section showing flag + full language name (names kept there for clarity, per owner allowance).
- **Reason:** Owner request for a flag-only switcher; sr-only/aria text keeps it WCAG-conformant without visible labels.
- **Risk:** Flag-for-language is a known i18n anti-pattern (UK flag for English); accepted as an explicit owner decision. Adding th/vi/zh later requires new flag SVGs in `FLAGS`.

## D-133 — Real contact details centralized in CONTACT (lib/site-config.ts); placeholder keys removed; disclaimer footer line removed
- **Decision:** New `CONTACT` constant: address (EN + Lao — 7th Floor, Vientiane Center, Nongchanh Village, Sisattanak District, Vientiane Capital), email info@sv.com.la, phone/WhatsApp +856 20 28 282 871, `phoneHref: tel:+8562028282871`, `whatsappHref: https://wa.me/8562028282871`. Footer contact rows and the contact-page company panel are now live `mailto:`/`tel:`/wa.me links with icons; the floating WhatsApp button opens the real wa.me chat. Dictionary keys REMOVED from both locales: `footer.phonePlaceholder`, `footer.emailPlaceholder`, `footer.chatPlaceholder`, `footer.disclaimer` (the footer disclaimer line is deleted entirely — the DisclaimerBox on content pages is unchanged), and `footer.address` (superseded by `CONTACT.address`/`addressLo`). Added `footer.addressLabel`; `footer.chatLabel` changed "WhatsApp / LINE" → "WhatsApp". Placeholder-resolution status: WhatsApp/phone/email/address now REAL; still placeholders: the LINE floating button (no LINE ID yet — href="#" with reworded `floating.placeholderNote` = "LINE contact coming soon — placeholder link" / "ຊ່ອງທາງ LINE ກຳລັງກະກຽມ — ຍັງເປັນລິ້ງຊົ່ວຄາວ") and the domain `SITE_URL` (D-008 unchanged).
- **Reason:** Owner supplied the real details; centralizing in one constant prevents drift across footer, contact page, and floating buttons.

## D-134 — Shared icon set (components/icons.tsx); icon placements kept restrained
- **Decision:** One inline SVG icon set — 24px grid, stroke 1.75, `currentColor`, lucide-style paths: briefcase, stamp, scale, calculator, users, book-open, map-pin, mail, phone, message-circle, check-circle, arrow-right, chevron-down, building, file-text, shield-check. Placements: (a) home service-highlight cards get a category icon in a gold-tinted rounded square; (b) "Why Choose SV Consulting" swaps the 01–06 numerals for check-circle icons (shield-check on the Super Vision item); (c) contact-page company panel presents address/phone/WhatsApp/email as icon rows with live links; (d) footer contact rows carry small gold icons; (e) ServiceCard/GuideCard swap the "→" text arrow for the shared arrow-right icon and LawTopicCard gains the same subtle hover arrow affordance. `building` and `file-text` are currently unplaced (reserved for service pages).
- **Reason:** Owner request for icon polish; a single set keeps stroke weight and corner language consistent — premium, not busy.

## D-120 — Imagery expansion: per-category thumbnails in `public/images/categories/`, four new `sections/` images
- **Decision:** Added 13 new Pexels images (2026-07-11) under the established sourcing method (verify subject on the Pexels photo page before download; deterministic CDN URLs; `file --mime-type` image/jpeg; ≤600KB cap, all landed ≤300KB): one landscape thumbnail per Knowledge Center category in the new `public/images/categories/` folder (starting-a-business, tax-accounting, visa-immigration, lao-law-basics, labour-employment, investment, marriage-family, living-in-laos, compliance-checklists) and four additions to `sections/` (team-office-collaboration, advisory-consultation-meeting, luang-prabang-street-corner, city-lights-night-skyline). No code touched — wiring the thumbnails into category cards is a follow-up task.
- **Reason:** Owner wants the site livelier; category cards currently have no imagery and the about/CTA sections have few options. One-image-per-category keeps card grids visually consistent and the mapping trivial (filename prefix = category slug).
- **Risk:** Low — files only; attribution rows added to `public/images/ATTRIBUTIONS.md` in the existing table format.

## D-121 — Portrait originals cropped to landscape via the Pexels CDN, not locally
- **Decision:** Where the only suitable photo was portrait (`starting-a-business-open-sign`, `lao-law-basics-book-stacks`), the landscape 1200×800 crop was requested from the Pexels CDN itself (`&h=800&fit=crop`) rather than cropped locally, and each crop was visually inspected before acceptance. Precedent: Phase 3 cropped `hero/mekong-river-sunset-luang-prabang.jpg` from a portrait original.
- **Reason:** Deterministic, reproducible URLs (the full query string re-derives the exact asset) and no local tooling variance.
- **Risk:** A center crop can ruin composition — this happened with a Da Nang riverside night photo (Pexels 19828386), whose crop reduced the skyline to a sliver of water reflections; it was rejected and deleted rather than shipped.

## D-122 — Location integrity for the new images; two rejections during curation
- **Decision:** Only `sections/luang-prabang-street-corner.jpg` (Pexels 27087103, Stephen Leonardi, tagged Luang Prabang, Laos) may be captioned as Laos among the new images. Flagged non-Lao/generic: the open-sign café is Bali, the produce market is likely Vietnam (chosen specifically because it has no legible signage — an earlier candidate, Pexels 30963869, was rejected for prominent Vietnamese hotel signage on a "living in Laos" card), and the night-sky townscape (Pexels 57641) has no location tag. Also rejected: Buddha Park, Vientiane (Pexels 17757818) — verified-Laos but its sculpture crowns feature skull motifs, off-tone for a corporate consulting site; replaced by the Luang Prabang street corner. ATTRIBUTIONS.md now carries a consolidated "location-confirmed Laos" list in its Notes.
- **Reason:** D-052-era policy: never imply a non-Lao image is Laos; brand tone is premium/reassuring.
- **Change later:** If genuine Vientiane street/Patuxai/That Luang photos appear on Pexels, swap the generic-SEA thumbnails for verified ones.

## D-140 — Category thumbnails wired into ArticleCard via lib/category-images.ts (static imports)
- **Decision:** New `lib/category-images.ts` exports `ARTICLE_CATEGORY_IMAGES: Record<ArticleCategory, StaticImageData>` (all nine `public/images/categories/` files, static-imported so next/image gets intrinsic dimensions + build-time blur placeholders). `ArticleCard` gains a required `category: ArticleCategory` prop and resolves its own thumbnail internally — a fixed `aspect-video` (16:9) top image, corners clipped by `overflow-hidden` on the card, lazy-loaded, with a subtle zoom on hover gated behind `motion-safe:` (`motion-safe:group-hover:scale-[1.04]`). Card padding moved from the Link to an inner wrapper so the image runs full-bleed to the card edges. Alt text is the localized category display name (`dict.articleCategories[...]`) — a concept label, never a location claim, because several thumbnails are non-Lao (Bali open-sign, likely-Vietnam market, per D-122). Both ArticleCard call sites (home Knowledge preview and the Knowledge Center grid via `article-list.tsx`, whose `ArticleListItem.category` is now typed `ArticleCategory`) get thumbnails automatically; `RelatedArticles` is a compact link list, not an ArticleCard grid, so it stays imageless.
- **Reason:** Internal lookup keeps the mapping in one typed place and means any future ArticleCard usage is illustrated for free; `motion-safe:` honors prefers-reduced-motion without JS.

## D-141 — Guide thumbnails reuse the category image set; legal-family maps to the law-books image
- **Decision:** `GUIDE_CATEGORY_IMAGES: Record<ServiceCategorySlug, StaticImageData>` maps the four guide (service) categories onto existing category thumbnails: business-setup → starting-a-business-open-sign, visa-immigration → visa-immigration-passport-planner, accounting-tax → tax-accounting-workspace, legal-family → lao-law-basics-book-stacks. `GuideCard` takes an optional `image?: { src, alt }` prop (page-wired, since guide alt text comes from `dict.nav.*` category labels) rendered with the same aspect-video/zoom/motion-safe treatment as ArticleCard, below the gold top rule. legal-family uses the neutral law-books image, NOT marriage-family-wedding-rings, because the category spans corporate legal + contracts as well as family matters — wedding rings on a contract-review guide would mislead. The Bali open-sign image is acceptable for business-setup because the alt is the category name (an "open for business" concept), not a location caption.
- **Reason:** Reusing the nine curated thumbnails keeps the visual language consistent and avoids sourcing four more images.

## D-142 — LawTopicCard stays text-first: small book-open icon, no thumbnail
- **Decision:** The Lao Laws Library keeps its reference-index feel — `LawTopicCard` gets no image. Instead it gains a small (28px, gold-tinted square, `aria-hidden`) `IconBookOpen` anchor at the head of its badge row, matching the D-134 icon language.
- **Reason:** Law topics are lookup material, not editorial content; a wall of stock photos would dilute the library's authority and make the grid busy. The icon gives the card a visual anchor at near-zero weight.

## D-143 — CtaSection supports an optional background image; home uses city-lights-night-skyline under a bottom-weighted scrim
- **Decision:** `CtaSection` gains `image?: { src: StaticImageData; alt: string }`. When present, the band renders the image with `fill` + blur placeholder under a `bg-linear-to-b from-navy-950/70 via-navy-950/80 to-navy-950/95` overlay — strongest at the bottom, where the photo's lit horizon would otherwise fight the ivory text (the upper dark-sky band needs less). Only the HOME final CTA passes an image (`sections/city-lights-night-skyline.jpg`, new `alt.cityNight` key); every other page keeps the plain navy variant as the default. The alt ("Town lights glowing under a dark starry night sky" / Lao equivalent) is location-generic per D-122 — the photo has no location tag and must never be captioned as Laos/Vientiane.
- **Reason:** One image-backed CTA on the highest-traffic page adds warmth without pattern-fatigue; the graded scrim keeps WCAG contrast for ivory text and gold button.

## D-144 — Landing heroes: /knowledge gets the confirmed-Laos Luang Prabang street corner, /guides gets the advisory meeting; /laws stays plain
- **Decision:** Using the existing Hero `image` prop (75% navy overlay, no redesign): `/knowledge` hero = `sections/luang-prabang-street-corner.jpg` (verified Laos, so `alt.luangPrabangStreet` may name Luang Prabang); `/guides` hero = `sections/advisory-consultation-meeting.jpg` (`alt.advisoryMeeting`, also used in the about "how we work" split — acceptable reuse since the hero renders it heavily overlaid). `/laws` keeps the plain navy hero, consistent with D-142's restrained reference-library tone. About page additions: `sections/team-office-collaboration.jpg` beside Mission/Vision (image left on desktop, after text on mobile, alternating with the intro's right-side image) and the advisory image beside the "how we work" header on the navy band; new `alt.teamCollaboration` key. All four new alt keys added to BOTH dictionaries with real Lao.
- **Reason:** Knowledge Center is the most "editorial" surface and earns the one confirmed-Laos street scene; guides are advisory deliverables, matching the consultation image.

## D-145 — Hero background images: deprecated `priority` prop replaced by `preload`
- **Decision:** `Hero.tsx` now passes `preload` instead of `priority` to next/image (Next 16 deprecated `priority` in favor of `preload`; same above-the-fold LCP intent).
- **Reason:** AGENTS.md instructs heeding deprecation notices in the bundled Next 16 docs; touched while wiring the new hero images.

## D-146 — Card thumbnails are decorative (empty alt)
- **Question:** Category thumbnails carried alt text equal to the category name (e.g. "Starting a Business in Laos" on a Bali photo). Ambiguous for screen-reader users and duplicated the visible badge text directly below.
- **Decision:** ArticleCard and GuideCard thumbnails render `alt=""` (decorative) per WCAG guidance for images whose meaning is conveyed by adjacent text; GuideCard's image prop no longer accepts alt. Meaningful images (heroes, about-page photos) keep real localized alt.
- **Risk:** None; improves both accessibility and location-claim integrity (D-122).
- **Change later:** If a thumbnail ever becomes content-bearing, reintroduce a per-image alt.

## D-147 — Home hero image: Patuxai at dusk + graded hero scrim
- **Question:** Owner asked for a visible, "nice" hero image — the Mekong photo disappeared under the flat 75% navy overlay.
- **Decision:** New home hero: Pexels 36477129 (Patuxai / Victory Gate, Vientiane — location-confirmed, warm dusk tones matching the gold/navy brand), cropped from portrait to a 2400×1600 band of the ornate crown and spires, served at 2000px/507KB. Hero overlay changed from flat `bg-navy-950/75` to a vertical gradient `from-navy-950/80 via-navy-950/55 to-navy-950/85` so the photo reads through mid-frame while eyebrow/title/CTA zones keep strong contrast. Applies to all image heroes (knowledge/guides benefit too). Rejected candidates: Pexels 31418553 (Patuxai, midday — 60% empty blue sky) and 36049216 (white-gold stupa — likely That Phanom, Thailand; mis-tagged, location risk).
- **Risk:** Mid-frame contrast is lower by design; text does not sit there. Mekong photo retained in repo for reuse; `alt.heroMekong` key replaced by `alt.heroPatuxai` in both dictionaries.
- **Change later:** Swap the static import in `app/[lang]/page.tsx`; scrim stops live in `components/Hero.tsx`.

## D-150 — Every main page hero gets a background image; per-page mapping with location integrity
- **Decision:** All remaining main-page heroes now pass `image` to the existing Hero component (graded D-147 scrim, no redesign): /about → `sections/modern-office-interior.jpg` (`alt.officeInterior`, acceptable reuse with the about intro image — the hero renders it heavily overlaid); /services → `sections/handshake-over-table.jpg` (`alt.handshake`, freed from legal-family); /laws → `sections/stone-columns-corridor.jpg` (`alt.stoneColumns`, government-building gravitas — supersedes D-144's "laws stays plain" per owner request); /faq → `sections/calm-workspace.jpg` (new `alt.calmWorkspace`); /news → `hero/riverside-city-dusk-aerial.jpg` (new `alt.riversideCity` — location-generic wording, "riverside city in Southeast Asia at dusk", NEVER Vientiane/Laos per ATTRIBUTIONS.md/D-122); /contact → `hero/mekong-river-sunset-luang-prabang.jpg` (new `alt.mekongSunset` — confirmed Laos, freed when the home hero switched to Patuxai in D-147, so the alt may name Luang Prabang/Mekong). Service category heroes remapped in the existing typed `CATEGORY_CONFIG`: business-setup → `meeting-documents.jpg` (`alt.meetingDocuments`, was contract-signing), legal-family → `contract-signing.jpg` (`alt.contractSigning`, was handshake — signing reads "legal", handshake now anchors the services index); visa-immigration (passport-stamps) and accounting-tax (accounting-calculator-report) unchanged. Home/knowledge/guides unchanged; detail ([slug]) pages and styleguide stay text-first (D-142). Three new alt keys added to BOTH dictionaries with real Lao (ອາກອນ-register phrasing where relevant).
- **Reason:** Owner wants a photographic hero band on every main page; each image matches the page's subject, and the two hero/ photos slot in without new sourcing. The short page-variant hero (py-16 md:py-24, ~300px) still shows enough image under the graded scrim to read as a photo band.
- **Change later:** If a verified-Laos aerial of Vientiane appears, swap the /news hero and let its alt claim the location.
