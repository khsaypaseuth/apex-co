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
import { serviceGroups as serviceGroupsTh } from '@/content/th/services'
import { servicePages as servicePagesTh } from '@/content/th/service-pages'
import { faqSections as faqSectionsTh } from '@/content/th/faq'
import { serviceGroups as serviceGroupsVi } from '@/content/vi/services'
import { servicePages as servicePagesVi } from '@/content/vi/service-pages'
import { faqSections as faqSectionsVi } from '@/content/vi/faq'
import { serviceGroups as serviceGroupsZh } from '@/content/zh/services'
import { servicePages as servicePagesZh } from '@/content/zh/service-pages'
import { faqSections as faqSectionsZh } from '@/content/zh/faq'

/**
 * Locale-keyed access to structured page data under `content/{lang}/`.
 * Static imports keep every locale's data in the same server bundle.
 */

const serviceGroupsByLocale: Record<ActiveLocale, ServiceGroup[]> = {
  en: serviceGroupsEn,
  lo: serviceGroupsLo,
  th: serviceGroupsTh,
  vi: serviceGroupsVi,
  zh: serviceGroupsZh,
}

const servicePagesByLocale: Record<
  ActiveLocale,
  Record<ServiceCategorySlug, ServicePageContent>
> = {
  en: servicePagesEn,
  lo: servicePagesLo,
  th: servicePagesTh,
  vi: servicePagesVi,
  zh: servicePagesZh,
}

const faqSectionsByLocale: Record<ActiveLocale, FaqSection[]> = {
  en: faqSectionsEn,
  lo: faqSectionsLo,
  th: faqSectionsTh,
  vi: faqSectionsVi,
  zh: faqSectionsZh,
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
