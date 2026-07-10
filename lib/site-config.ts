/**
 * Site-wide constants.
 *
 * SITE_URL is a placeholder domain (no domain purchased yet — see
 * build-log/decision-log.md D-008). Replace in one place when the real
 * domain is registered.
 */
export const SITE_URL = 'https://svconsulting.la'
export const SITE_NAME = 'SV Consulting'
export const PARENT_COMPANY = 'Super Vision Co., Ltd.'

/**
 * Legal disclaimer — exact wording from the master plan
 * (§Important Legal Disclaimer Requirement). Rendered by `DisclaimerBox`
 * on every legal/tax/immigration/guide page. The Lao translation lives in
 * `dictionaries/lo.json` under `legal.disclaimer`; this constant is the
 * canonical English source (`dictionaries/en.json` must match it verbatim).
 */
export const LEGAL_DISCLAIMER =
  'This information is provided for general guidance only and does not constitute legal, tax, immigration, or accounting advice. Laws and procedures may change. Please contact SV Consulting or a qualified professional before making decisions.'
