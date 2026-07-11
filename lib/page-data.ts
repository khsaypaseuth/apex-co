import type {
  FaqSection,
  ServiceCategorySlug,
  ServiceGroup,
  ServicePageContent,
} from '@/lib/types'
import type { Locale } from '@/lib/i18n-config'
import type { ActiveLocale } from '@/lib/dictionaries'
import { serviceGroups as serviceGroupsEn } from '@/content/en/services'
import { servicePages as servicePagesEn } from '@/content/en/service-pages'
import { faqSections as faqSectionsEn } from '@/content/en/faq'
import { serviceGroups as serviceGroupsLo } from '@/content/lo/services'
import { servicePages as servicePagesLo } from '@/content/lo/service-pages'
import { faqSections as faqSectionsLo } from '@/content/lo/faq'

/**
 * Locale-keyed access to the structured page data under `content/{en,lo}/`
 * (Phase 7). Static imports keep every locale's data in the same server
 * bundle — fine at this size, and it keeps the pages fully prerenderable.
 *
 * Inactive locales (th / vi / zh — reserved routes, no content yet) fall
 * back to English, mirroring `proxy.ts` which redirects them to `/en`.
 * To activate a locale later: add its data files under `content/<locale>/`
 * and register them in the records below.
 */

const serviceGroupsByLocale: Record<ActiveLocale, ServiceGroup[]> = {
  en: serviceGroupsEn,
  lo: serviceGroupsLo,
}

const servicePagesByLocale: Record<
  ActiveLocale,
  Record<ServiceCategorySlug, ServicePageContent>
> = {
  en: servicePagesEn,
  lo: servicePagesLo,
}

const faqSectionsByLocale: Record<ActiveLocale, FaqSection[]> = {
  en: faqSectionsEn,
  lo: faqSectionsLo,
}

/** Narrow any routable locale to one with content, falling back to en. */
function resolveLocale(lang: Locale): ActiveLocale {
  return lang in serviceGroupsByLocale ? (lang as ActiveLocale) : 'en'
}

/** The five service groups shown on `/services` (44 services total). */
export function getServiceGroups(lang: Locale): ServiceGroup[] {
  return serviceGroupsByLocale[resolveLocale(lang)]
}

/** Service groups belonging to one `/services/[category]` page. */
export function getGroupsForCategory(
  lang: Locale,
  slug: ServiceCategorySlug,
): ServiceGroup[] {
  return getServiceGroups(lang).filter((group) => group.categorySlug === slug)
}

/** Long-form content for one `/services/[category]` page. */
export function getServicePageContent(
  lang: Locale,
  slug: ServiceCategorySlug,
): ServicePageContent {
  return servicePagesByLocale[resolveLocale(lang)][slug]
}

/** The five FAQ sections for `/faq`. */
export function getFaqSections(lang: Locale): FaqSection[] {
  return faqSectionsByLocale[resolveLocale(lang)]
}
