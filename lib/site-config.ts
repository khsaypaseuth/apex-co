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
 * Contact details. Some are confirmed, some are still placeholders — the
 * comments below say which, so nobody has to guess when updating them.
 *
 * `isPlaceholder` stays true while ANY field here is unconfirmed. It drives
 * the visible "contact details are being updated" notice in the footer and on
 * the contact page, and the caveat in public/llms.txt. Flip it to false only
 * once every value below is real.
 */
export const CONTACT = {
  // --- Confirmed by the owner ---
  /** Lao mobile: +856 20 5552 9751. */
  phone: '+856 20 55 529 751',
  phoneHref: 'tel:+8562055529751',
  /** wa.me needs the number in full international form, digits only. */
  whatsappHref: 'https://wa.me/8562055529751',

  // --- NOT yet confirmed: placeholders, must be replaced before launch ---
  address: 'Vientiane Capital, Lao PDR — full street address to be confirmed',
  addressLo: 'ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ — ທີ່ຢູ່ເຕັມຈະຢືນຢັນພາຍຫຼັງ',
  /** Invented, and tied to the placeholder domain — see SITE_URL above. */
  email: 'info@apex.com.la',

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
