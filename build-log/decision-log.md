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
