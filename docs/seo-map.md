# SEO Keyword Map

Maps the 15 target keywords from `SV_Consulting_Website_Master_Plan.md`
(§SEO Requirements) to the page that should rank for it (primary) and the
content that supports it internally. All URLs are locale-less — every page
exists under `/en` and `/lo` with hreflang alternates.

Created in Phase 6. Update when new articles/laws/guides land or when
keyword research (post-launch, real search-console data) suggests better
targets.

| # | Target keyword | Primary page | Supporting content |
|---|---|---|---|
| 1 | business registration in Laos | `/services/business-setup` | `/knowledge/company-registration-in-laos-basic-steps`, `/laws/company-registration-rules`, `/guides/complete-guide-to-starting-a-business-in-laos` |
| 2 | company registration Laos | `/knowledge/company-registration-in-laos-basic-steps` | `/services/business-setup`, `/laws/company-registration-rules` |
| 3 | start business in Laos | `/guides/complete-guide-to-starting-a-business-in-laos` | `/knowledge/how-to-start-a-business-in-laos`, `/services/business-setup`, `/knowledge/business-licenses-in-laos-what-to-know` |
| 4 | work visa Laos | `/services/visa-immigration` | `/knowledge/work-visa-and-work-permit-in-laos`, `/guides/work-visa-and-work-permit-guide`, `/laws/work-permit-basics` |
| 5 | investor visa Laos | `/knowledge/investor-visa-in-laos-what-to-prepare` | `/services/visa-immigration`, `/guides/investor-guide-to-laos` |
| 6 | legal consulting Laos | `/services/legal-family` | `/services`, `/knowledge/contract-review-for-businesses-in-laos`, `/laws` |
| 7 | accounting services Laos | `/services/accounting-tax` | `/guides/tax-and-accounting-guide`, `/knowledge/annual-compliance-checklist-for-companies-in-laos` |
| 8 | tax filing Laos | `/services/accounting-tax` | `/knowledge/tax-registration-for-new-companies-in-laos`, `/knowledge/vat-in-laos-simple-overview`, `/knowledge/corporate-income-tax-in-laos-simple-overview`, `/laws/tax-obligations-for-companies` |
| 9 | marriage registration Laos | `/knowledge/marriage-registration-between-lao-and-foreign-nationals` | `/services/legal-family`, `/laws/marriage-registration-basics`, `/guides/marriage-and-long-term-stay-guide` |
| 10 | long-term stay Laos | `/knowledge/long-term-stay-options-in-laos` | `/services/visa-immigration`, `/guides/marriage-and-long-term-stay-guide` |
| 11 | foreign investment Laos | `/services/business-setup` | `/laws/foreign-investment-rules`, `/guides/investor-guide-to-laos` |
| 12 | corporate services Laos | `/services` | `/about`, `/services/business-setup`, `/services/accounting-tax` |
| 13 | Lao tax guide | `/guides/tax-and-accounting-guide` | `/knowledge/vat-in-laos-simple-overview`, `/knowledge/corporate-income-tax-in-laos-simple-overview`, `/laws/tax-obligations-for-companies` |
| 14 | Lao business law | `/laws` | `/laws/company-registration-rules`, `/laws/labour-and-employment-basics`, `/knowledge/contract-review-for-businesses-in-laos` |
| 15 | work permit Laos | `/laws/work-permit-basics` | `/knowledge/work-visa-and-work-permit-in-laos`, `/guides/work-visa-and-work-permit-guide`, `/services/visa-immigration` |

## Notes

- **Keyword → page discipline:** one primary page per keyword; supporting
  pages link to the primary (already true via `relatedArticles` /
  `relatedServices` frontmatter and section cross-links).
- **Content clusters:** business setup (1–3, 11–12), visas & stay (4–5, 10,
  15), tax & accounting (7–8, 13), legal & family (6, 9, 14) — matching the
  four service categories.
- **Gaps to watch:** no dedicated page targets "Lao business law" more
  specifically than the Laws Library index; consider a pillar article later.
  News (`/news`) is excluded until real items exist.
