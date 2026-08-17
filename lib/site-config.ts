/**
 * Site-wide constants for Apex Co., Ltd.
 *
 * SITE_URL is a placeholder domain — replace in this one place when the real
 * domain is registered (see docs/APEX_REBRAND_PLAN.md D-3).
 */
export const SITE_URL = 'https://apex.com.la'
export const SITE_NAME = 'Apex Co., Ltd.'

/**
 * Year the construction and electrical business started operating. Drives the
 * "15+ years" experience line and the JSON-LD `foundingDate`, so the claim
 * stays correct as time passes instead of being hard-coded in copy.
 */
export const FOUNDED_YEAR = 2010

/** Completed years of operation, derived from FOUNDED_YEAR. */
export function yearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - FOUNDED_YEAR
}

/**
 * PLACEHOLDER contact details — Apex has not supplied the real address,
 * phone, or email yet. Every one of these values is wrong on purpose and must
 * be replaced before launch; they live here so that is a single-file edit.
 */
export const CONTACT = {
  address:
    'Vientiane Capital, Lao PDR — full street address to be confirmed',
  addressLo: 'ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ — ທີ່ຢູ່ເຕັມຈະຢືນຢັນພາຍຫຼັງ',
  email: 'info@apex.com.la',
  phone: '+856 21 000 000',
  phoneHref: 'tel:+85621000000',
  whatsappHref: 'https://wa.me/85621000000',
  /** Flip to false once the values above are the real ones. */
  isPlaceholder: true,
} as const

/**
 * Scope note shown on service and project pages. A construction and electrical
 * contractor makes engineering claims, not legal ones — this replaces the
 * consulting site's legal-advice disclaimer. Translations live in
 * `dictionaries/*.json` under `legal.disclaimer`; this constant is the
 * canonical English source and `dictionaries/en.json` must match it verbatim.
 */
export const SCOPE_NOTE =
  'Capacities, scopes of work, and schedules shown here are indicative. Final ratings, quantities, and programme are confirmed after site survey, design review, and the applicable utility or authority approvals.'
