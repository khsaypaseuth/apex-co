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
