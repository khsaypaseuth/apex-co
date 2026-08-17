# Apex Co., Ltd. — Rebrand Plan

Rebrand of the Super Consulting website (Next.js 16.2 App Router, 5 locales) into
the corporate site for **Apex Co., Ltd.** — electrical supply & installation and
general construction contractor in the Lao PDR.

## 1. What Apex is

Core business, as briefed by the owner:

- **Electrical supply & installation at 22 kV and 115 kV.**
  (Briefed as "22 kVA / 115 kVA" — kVA is apparent power, kV is line voltage.
  22 kV is the Lao medium-voltage distribution standard and 115 kV the
  transmission standard, so the site uses **kV** throughout.)
- **Supply of electrical equipment** — low, medium, and high voltage.
- **15+ years of construction background**:
  - Foundation pile and driven pile works
  - Road and bridge construction
  - Building construction
- **Real estate development.**

This is a completely different domain from the source site (business/legal/visa
consulting). Nothing in the legal content library transfers.

## 2. Decisions (locked with the owner)

| # | Decision | Choice |
|---|---|---|
| D-1 | Legal content libraries (Knowledge Center, Lao Laws, Guides, Official Links) | **Delete.** Replace with a Projects portfolio + News. |
| D-2 | Active languages | **All five** — en, lo, th, vi, zh. |
| D-3 | Contact details & domain | **Placeholders**, isolated in `lib/site-config.ts`. |
| D-4 | Git remote | Point `origin` at `khsaypaseuth/apex-co.git`, keep history. |
| D-5 | Unit correction | kVA → kV for line voltage (see §1). |
| D-6 | Parent company | Apex is standalone — the "business unit of Super Vision" line is removed, not re-pointed. |

## 3. Brand system

### Palette

Derived from the supplied logo (slate navy `#4a5570` + gold `#ae8b4b`). The
warm ivory of the consulting brand is replaced with a cool neutral — an
engineering contractor should not read as a luxury law firm.

| Token | Value | Role |
|---|---|---|
| `--color-navy-950` | `#17202f` | Deep slate navy — dark bands, header, footer, hero overlay |
| `--color-navy-700` | `#4a5570` | Logo navy — links, secondary surfaces |
| `--color-gold-500` | `#ae8b4b` | Logo gold — CTA fills, rules, eyebrows on dark |
| `--color-gold-600` | `#85682f` | Deep bronze — gold text on light surfaces, CTA hover |
| `--color-mist-100` | `#eceff4` | Cool light grey — alternating section backgrounds |
| `--color-mist-50` | `#f7f9fc` | Page background |
| `--color-slate-500` | `#6b7280` | Borders, muted UI |
| `--color-slate-600` | `#475569` | Muted body text on light |

Contrast, verified (WCAG AA, normal text ≥ 4.5:1):

- gold-500 on navy-950 — **5.33:1** ✓ (also the gold-fill button with navy label)
- gold-600 on mist-100 — **4.53:1** ✓ (gold-500 on light is 2.9:1 — never used for text)
- navy-700 on mist-50 — **7.05:1** ✓
- navy-950 on mist-50 — **15.5:1** ✓
- slate-600 on mist-100 — **6.57:1** ✓

The existing two-tone focus ring (navy inner + gold outer) still clears both
surface families and is kept unchanged.

Token rename: `ivory-*` → `mist-*` across all components, so the name matches
the value.

### Typography

| Role | Was | Becomes | Why |
|---|---|---|---|
| Display | Fraunces (editorial serif) | **Archivo** | Sturdy industrial grotesque; a luxury serif misreads a contractor |
| Body | Manrope | **Manrope** (kept) | Neutral, good at small sizes |
| Lao | Noto Sans Lao + Noto Serif Lao | **Noto Sans Lao** only | Serif display dropped with Fraunces; one less font to ship |
| Thai / Chinese | Noto Sans Thai / SC | unchanged | |

### Assets

From `logosAndIcons/`:

- `apexlogo.png` → `public/images/brand/logo-apex.png` (navy wordmark, light backgrounds)
- `apexlogo-white.png` → `public/images/brand/logo-apex-white.png` (white wordmark + gold bolt — used in the navy header and footer)
- `favicon.ico`, `favicon-16x16`, `favicon-32x32`, `apple-touch-icon`, `android-chrome-192/512` → `public/` and `app/`
- `site.webmanifest` → renamed to Apex

Deleted: every `logo-super*`, `logo-sv*`, `icon-sv*` asset, all 26 ministry
logos under `public/images/links/`, and the legal-specific category/article/
guide thumbnails.

Photography: the repo's stock set is Laos landmarks and office interiors. A
handful genuinely fit a power/infrastructure contractor (night city skyline for
the electrical hero, aerial riverside city for real estate, warehouse crew for
workforce) and are re-used; the rest are deleted. Every re-used image is listed
in `public/images/ATTRIBUTIONS.md` under a **"replace with real Apex site
photography"** heading — these are placeholders, not project claims.

## 4. Information architecture

```
/                        Home
/about                   Company profile — 15+ years, capabilities, HSE/QA
/services                Overview of the four capability groups
/services/electrical             Electrical Supply & Installation (22 kV / 115 kV)
/services/piling-foundation      Foundation & Piling Works
/services/roads-bridges          Road & Bridge Construction
/services/buildings-property     Building Construction & Real Estate Development
/projects                Project portfolio, filterable by capability
/projects/[slug]         Project detail
/news                    News & updates (designed empty state, CMS-ready)
/faq                     FAQ, rewritten for construction/electrical procurement
/contact                 Contact
/styleguide              Internal, noindex (kept)
```

**Removed:** `/knowledge`, `/knowledge/[slug]`, `/laws`, `/laws/[slug]`,
`/guides`, `/guides/[slug]`, `/links` — plus their content, types, schemas,
category maps, and sitemap entries.

`/news` currently 301s to `/links`; it becomes a real section.

### Type-system changes (`lib/types.ts`)

- `SERVICE_CATEGORY_SLUGS` → the four capability slugs above.
- `ARTICLE_CATEGORIES`, `LAW_CATEGORIES`, `Article`, `LawTopic`, `Guide` — deleted.
- New `PROJECT_CATEGORIES` (mirrors the four capability slugs) and a `Project`
  entry type carrying `location`, `client`, `year`, `status`
  (`completed` | `ongoing`), `scope[]`, and an optional `capacity` string
  (e.g. `"115/22 kV substation, 2 × 25 MVA"`).
- `VERIFICATION_STATUSES` — the legal-content verification badge is replaced by
  project `status`; the type and its dictionary block are deleted.
- `LEGAL_DISCLAIMER` / `DisclaimerBox` — a legal-advice disclaimer is wrong for
  a contractor. `DisclaimerBox` is retained but repurposed as a **scope note**
  on service pages: capacities, scopes, and schedules are indicative and
  confirmed after site survey and design review.

### Content pipeline (`lib/content.ts`)

Three near-identical article/law/guide readers collapse into one `projects`
reader over `content/{lang}/projects/*.md`, keeping the existing gray-matter →
unified → Zod-validated-frontmatter design and the English fallback for
locales that have not been populated.

## 5. Content to write

Six seed projects (EN + LO, other locales fall back to EN via the existing
mechanism), spanning all four capabilities — clearly marked as representative
placeholders until Apex supplies real project records.

Per locale (× 5): `services.ts` (4 groups, ~40 services), `service-pages.ts`
(4 long-form pages), `faq.ts`, and the full `dictionaries/{lang}.json`.

## 6. SEO / AEO

- `SITE_NAME` → `Apex Co., Ltd.`; `SITE_URL` placeholder `https://apex.com.la`.
- Organization JSON-LD `@type` → `["Organization", "GeneralContractor", "ElectricalContractor", "LocalBusiness"]`, with `knowsAbout` covering 22 kV / 115 kV works, piling, roads and bridges, and `foundingDate` reflecting 15+ years.
- `parentOrganization` removed (D-6).
- Sitemap static paths rebuilt around the new IA; project detail pages enumerated.
- Fresh `og-default` card in the Apex palette.
- `public/ai.txt`, `public/llms.txt`, `public/.well-known/llms.txt` rewritten to describe Apex's actual capabilities.

## 7. Execution phases

| Phase | Scope | Commit |
|---|---|---|
| 1 | Brand foundation — assets, favicons, `site-config`, design tokens, fonts, `ivory`→`mist` | `Rebrand foundation: Apex identity, palette, and typography` |
| 2 | IA surgery — delete legal routes/content/types, add `Project` type + pipeline + routes | `Replace legal content libraries with a project portfolio` |
| 3 | English content — services, service pages, FAQ, seed projects | `Write Apex service catalogue and project content (EN)` |
| 4 | English dictionary + page rewrites (home, about, contact, faq, projects, news) | `Rebuild page copy and navigation for Apex` |
| 5 | Translations — lo, th, vi, zh | `Translate Apex content into Lao, Thai, Vietnamese, and Chinese` |
| 6 | SEO/AEO — metadata, JSON-LD, sitemap, robots, OG, llms.txt | `Update SEO, structured data, and AI crawler files for Apex` |
| 7 | Docs, `npm run build`, `npm run lint`, remote swap, push | `Update project docs for Apex` |

Verification gate before push: `npm run build` and `npm run lint` both clean,
and every route rendered across all five locales.
