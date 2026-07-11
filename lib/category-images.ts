import type { StaticImageData } from 'next/image'
import type { ArticleCategory, ServiceCategorySlug } from './types'

// Static imports so next/image gets intrinsic dimensions + blur placeholders
// at build time (see D-140). One landscape thumbnail per Knowledge Center
// category, filename prefix = category slug (D-120).
//
// Location integrity (ATTRIBUTIONS.md, D-122): the open-sign café is Bali and
// the produce market is likely Vietnam — alt text for these thumbnails is
// always the localized CATEGORY NAME (concept), never a Laos location claim.
import startingABusiness from '@/public/images/categories/starting-a-business-open-sign.jpg'
import taxAccounting from '@/public/images/categories/tax-accounting-workspace.jpg'
import visaImmigration from '@/public/images/categories/visa-immigration-passport-planner.jpg'
import laoLawBasics from '@/public/images/categories/lao-law-basics-book-stacks.jpg'
import labourEmployment from '@/public/images/categories/labour-employment-warehouse-team.jpg'
import investment from '@/public/images/categories/investment-growth-charts.jpg'
import marriageFamily from '@/public/images/categories/marriage-family-wedding-rings.jpg'
import livingInLaos from '@/public/images/categories/living-in-laos-street-market.jpg'
import complianceChecklists from '@/public/images/categories/compliance-checklists-planner.jpg'

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
