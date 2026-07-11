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
 * Real contact details supplied by the owner (D-133) — the single source of
 * truth for address, email, phone, and WhatsApp across footer, contact page,
 * and floating buttons. LINE has no official ID yet; the floating LINE
 * button stays a clearly-marked placeholder until one exists.
 */
export const CONTACT = {
  address:
    '7th Floor, Vientiane Center, Nongchanh Village, Sisattanak District, Vientiane Capital, Lao PDR',
  addressLo:
    'ຊັ້ນ 7, ວຽງຈັນເຊັນເຕີ, ບ້ານໜອງຈັນ, ເມືອງສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ',
  email: 'info@sv.com.la',
  phone: '+856 20 28 282 871',
  phoneHref: 'tel:+8562028282871',
  whatsappHref: 'https://wa.me/8562028282871',
} as const

/**
 * Legal disclaimer — exact wording from the master plan
 * (§Important Legal Disclaimer Requirement). Rendered by `DisclaimerBox`
 * on every legal/tax/immigration/guide page. The Lao translation lives in
 * `dictionaries/lo.json` under `legal.disclaimer`; this constant is the
 * canonical English source (`dictionaries/en.json` must match it verbatim).
 */
export const LEGAL_DISCLAIMER =
  'This information is provided for general guidance only and does not constitute legal, tax, immigration, or accounting advice. Laws and procedures may change. Please contact SV Consulting or a qualified professional before making decisions.'
