import type { StaticImageData } from 'next/image'
import type { ArticleCategory, ServiceCategorySlug } from './types'

// Static imports so next/image gets intrinsic dimensions + blur placeholders
// at build time (see D-140). One landscape thumbnail per Knowledge Center
// category, filename prefix = category slug (D-120).
//
// Location integrity (ATTRIBUTIONS.md, D-122): thumbnails are concept images
// (Asian office / professional settings), not Laos location claims — alt text
// stays the localized CATEGORY NAME, never a place caption.
import startingABusiness from '@/public/images/categories/starting-a-business-office-meeting.jpg'
import taxAccounting from '@/public/images/categories/tax-accounting-asian-team-desk.jpg'
import visaImmigration from '@/public/images/categories/visa-immigration-passport-planner.jpg'
import laoLawBasics from '@/public/images/categories/lao-law-basics-book-stacks.jpg'
import labourEmployment from '@/public/images/categories/labour-employment-warehouse-team.jpg'
import investment from '@/public/images/categories/investment-growth-charts.jpg'
import marriageFamily from '@/public/images/categories/marriage-family-wedding-rings.jpg'
import livingInLaos from '@/public/images/categories/living-in-laos-street-market.jpg'
import complianceChecklists from '@/public/images/categories/compliance-checklists-planner.jpg'
import investorGuide from '@/public/images/guides/investor-guide-to-laos.jpg'
import workVisaGuide from '@/public/images/guides/work-visa-and-work-permit-guide.jpg'
import workVisaArticle from '@/public/images/articles/work-visa-and-work-permit-in-laos.jpg'

/** Knowledge Center article category → card thumbnail. */
export const ARTICLE_CATEGORY_IMAGES: Record<ArticleCategory, StaticImageData> =
  {
    'starting-a-business': startingABusiness,
    'tax-accounting': taxAccounting,
    'visa-immigration': visaImmigration,
    'lao-law-basics': laoLawBasics,
    'labour-employment': labourEmployment,
    investment: investment,
    'marriage-family': marriageFamily,
    'living-in-laos': livingInLaos,
    'compliance-checklists': complianceChecklists,
  }

/**
 * Guide (service) category → card thumbnail, reusing the category set.
 * legal-family uses the law-books image rather than wedding rings because the
 * category also covers corporate/contract work (D-141).
 */
export const GUIDE_CATEGORY_IMAGES: Record<
  ServiceCategorySlug,
  StaticImageData
> = {
  'business-setup': startingABusiness,
  'visa-immigration': visaImmigration,
  'legal-family': laoLawBasics,
  'accounting-tax': taxAccounting,
}

/** Per-guide thumbnail overrides (when category map would collide or mis-theme). */
export const GUIDE_SLUG_IMAGES: Record<string, StaticImageData> = {
  'investor-guide-to-laos': investorGuide,
  'work-visa-and-work-permit-guide': workVisaGuide,
  // Same category as tax-and-accounting-guide — use checklist planner instead.
  'annual-company-compliance-checklist': complianceChecklists,
}

/** Per-article thumbnail overrides (when category map would collide or mis-theme). */
export const ARTICLE_SLUG_IMAGES: Record<string, StaticImageData> = {
  'work-visa-and-work-permit-in-laos': workVisaArticle,
}

/** Resolve an article card image: slug override first, then category fallback. */
export function articleImageFor(
  slug: string,
  category: ArticleCategory,
): StaticImageData {
  return ARTICLE_SLUG_IMAGES[slug] ?? ARTICLE_CATEGORY_IMAGES[category]
}

/** Resolve a guide card image: slug override first, then category fallback. */
export function guideImageFor(
  slug: string,
  category: ServiceCategorySlug,
): StaticImageData {
  return GUIDE_SLUG_IMAGES[slug] ?? GUIDE_CATEGORY_IMAGES[category]
}
