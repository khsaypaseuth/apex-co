# Project portfolio content

One markdown file per project, named for its URL slug
(`115kv-substation-savannakhet.md` → `/en/projects/115kv-substation-savannakhet`).

**This folder ships empty on purpose.** The portfolio is the one part of the
site that cannot be written without Apex — inventing a substation, a bridge, or
a client name and publishing it as delivered work would be a fabricated record,
not placeholder copy. Until real project records are supplied, `/projects`
renders its designed empty state. Add files here and the section populates
itself: index, filters, detail pages, sitemap entries, and structured data all
key off this folder.

`README.md` is skipped by the content loader, so this file never renders.

## Frontmatter

Validated by `projectFrontmatterSchema` in `lib/content-schema.ts`. A file that
fails validation **fails the build** with an error naming the file — that is
intentional, so a broken project entry can never reach production.

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Project name as it should appear as the page `<h1>` |
| `summary` | yes | One or two sentences; used on the card, in metadata, and in structured data |
| `category` | yes | `electrical` \| `piling-foundation` \| `roads-bridges` \| `buildings-property` |
| `status` | yes | `completed` \| `ongoing` |
| `location` | yes | Province, district, or corridor — as specific as Apex will publish |
| `year` | yes | Four-digit number. Completion year, or start year while `ongoing` |
| `client` | no | Omit entirely if the contract is confidential — do not write "Confidential" |
| `capacity` | no | The headline engineering figure, e.g. `115/22 kV, 2 × 25 MVA` |
| `scope` | yes | At least one item. The principal works delivered, as short bullets |
| `lastUpdated` | yes | `YYYY-MM-DD` |
| `readingTime` | yes | Whole minutes |
| `relatedServices` | no | Capability slugs, e.g. `[electrical, piling-foundation]` |
| `relatedProjects` | no | Slugs of other files in this folder |

## Template

```markdown
---
title: 115/22 kV Substation, Savannakhet
summary: Construction of a 115/22 kV substation including civil works, primary plant installation, protection and control, and commissioning to the utility's requirements.
category: electrical
status: completed
location: Savannakhet Province
year: 2024
client: Example Client Name
capacity: 115/22 kV, 2 × 25 MVA
scope:
  - Substation civil works, foundations, and steel structures
  - Power transformer installation, positioning, and connection
  - 115 kV and 22 kV switchgear installation
  - Earth grid, protection, and control system installation
  - Testing, commissioning, and support to energisation
lastUpdated: 2026-08-17
readingTime: 3
relatedServices:
  - electrical
  - piling-foundation
relatedProjects: []
---

Optional long-form body in markdown. The scope list above is rendered as its
own section, so use this space for context the list cannot carry — the site
constraint that shaped the method, how a live-network outage was sequenced,
what made the ground difficult. Leave it empty and the page simply omits the
section.

## Headings work

Tables, lists, and links all render through the same pipeline as the rest of
the site.
```

## Writing guidance

- **Do not publish what has not been confirmed.** Capacities, client names, and
  dates go on the public internet and get quoted back in tenders.
- **Omit `client` rather than obscuring it.** A missing field renders cleanly;
  the string "Confidential" renders as a value.
- **Keep `scope` items short.** They render as a bulleted list, not prose.
- **Use `capacity` for the number that matters** for that capability — substation
  rating, line length and voltage, pile count and depth, span length, floor area.
