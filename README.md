# Apex Co., Ltd. — corporate website

Five-language marketing site for **Apex Co., Ltd.**, an electrical and
construction contractor in the Lao PDR: electrical supply and installation at
22 kV and 115 kV, foundation and piling works, road and bridge construction,
building construction, and real estate development.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.
No database and no CMS — all content is typed data and markdown in the repo.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /en
npm run build    # static prerender of every route × locale
npm run lint
```

Node 22 or newer is required.

## Before launch

Two things are deliberately unfinished and must be handled before this goes
live. Both are flagged in the UI so nothing misleading ships by accident.

1. **Contact details are placeholders.** `lib/site-config.ts` holds a fake
   address, phone, email, and domain. Replace them and set
   `CONTACT.isPlaceholder` to `false` — that flag drives the visible "contact
   details are being updated" notice in the footer and on the contact page.
   Also update `SITE_URL`, `public/llms.txt`, `public/.well-known/llms.txt`,
   and `public/ai.txt` with the real domain.
2. **The project portfolio is empty.** `/projects` renders a designed empty
   state until real project records are added. See
   `content/en/projects/README.md` for the frontmatter contract and why the
   folder ships empty.

## Routes

Every route exists under all five locale prefixes (`en`, `lo`, `th`, `vi`, `zh`).

| Path | Notes |
|---|---|
| `/` | Home |
| `/about` | Company profile, values, how a project runs |
| `/services` | The four capability groups |
| `/services/electrical` | Electrical supply & installation (22 kV / 115 kV) |
| `/services/piling-foundation` | Foundation & piling works |
| `/services/roads-bridges` | Road & bridge construction |
| `/services/buildings-property` | Buildings & real estate development |
| `/projects` | Portfolio index, filterable by capability |
| `/projects/[slug]` | Project detail (none published yet) |
| `/news` | News & updates (designed empty state) |
| `/faq` | FAQ |
| `/contact` | Contact form and company details |
| `/styleguide` | Internal component gallery — noindexed and disallowed in robots.txt |

## Where content lives

| What | Where |
|---|---|
| UI strings, page copy, metadata, alt text | `dictionaries/{lang}.json` |
| Capability catalogue (4 groups, ~39 services) | `content/{lang}/services.ts` |
| Long-form capability pages | `content/{lang}/service-pages.ts` |
| FAQ | `content/{lang}/faq.ts` |
| Project portfolio (markdown + frontmatter) | `content/{lang}/projects/*.md` |
| Brand constants, contact details, scope note | `lib/site-config.ts` |

`dictionaries/en.json` is the source of truth for the dictionary shape — the
`Dictionary` type is derived from it, so a key missing from a translation is a
build-time type error, not a runtime blank.

The `.ts` content files are typed against `lib/types.ts`, and project markdown
frontmatter is validated by Zod (`lib/content-schema.ts`). Invalid frontmatter
**fails the build** with an error naming the file — deliberately, so a broken
project entry cannot reach production.

### Adding a language

1. Add the code to `locales` and `activeLocales` in `lib/i18n-config.ts`.
2. Add a loader in `lib/dictionaries.ts` and a `dictionaries/<lang>.json`.
3. Add `content/<lang>/{services,service-pages,faq}.ts` and register them in
   `lib/page-data.ts`.
4. Add an `og:locale` value in `lib/seo.ts` and a font mapping in
   `lib/fonts.ts` + `app/globals.css` if the script needs one.

`content/<lang>/projects/` may be left empty — project markdown falls back to
English and the page shows the `common.contentInEnglish` notice.

## Design system

Tokens are defined once in `app/globals.css` under `@theme`. The palette comes
from the Apex logo, and the contrast ratios behind it are recorded in
[docs/APEX_REBRAND_PLAN.md](docs/APEX_REBRAND_PLAN.md) §3.

The rule worth remembering: **`gold-500` is a fill and rule colour on light
surfaces, never text** — it measures 2.9:1 there. Gold text on light uses
`gold-600` (4.5:1). On navy, `gold-500` is 5.3:1 and reads fine as text.

Project cards and capability heroes use drawn SVG schematics
(`components/ProjectThumb.tsx`) rather than photographs, so no stock image is
ever presented as an Apex project.

## SEO / AEO

- Per-page metadata, canonical URLs, and hreflang via `lib/seo.ts`.
- JSON-LD via `lib/json-ld.ts` — Organization (typed as `GeneralContractor` and
  `ElectricalContractor`), WebSite, BreadcrumbList, FAQPage, and Project.
- `app/sitemap.ts` covers every route × locale with `xhtml:link` alternates.
- `app/robots.ts` allows search and AI crawlers, disallows `/styleguide`.
- `public/llms.txt`, `public/.well-known/llms.txt`, and `public/ai.txt` describe
  the business for AI assistants, including the kV-not-kVA note.

## Deployment

See [docs/replit-deploy.md](docs/replit-deploy.md). `npm run start:replit`
binds to `0.0.0.0` and honours `$PORT`.

## Conventions

`AGENTS.md` (aliased by `CLAUDE.md`) carries the standing instruction for this
repo: this Next.js version has breaking changes from what a model may have
memorised, so read `node_modules/next/dist/docs/` before writing code against
an unfamiliar API.
