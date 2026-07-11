import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Services catalogue — the FIVE groups and EXACT service lists from the
 * master plan (§Services Page). English-only for now; Phase 7 adds a Lao
 * copy under `content/lo/`. Do not edit service names without checking the
 * master plan — they are copied verbatim.
 */

function service(
  category: ServiceCategorySlug,
  title: string,
  summary: string,
): Service {
  return {
    slug: title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, ''),
    category,
    title,
    summary,
  }
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'business-setup-licensing',
    categorySlug: 'business-setup',
    title: 'Business Setup & Licensing',
    summary:
      'From first registration to ongoing licence renewals — support for setting up and keeping a business properly registered in Laos.',
    services: [
      service('business-setup', 'Company Registration', 'Establishing a new company with the relevant Lao authorities.'),
      service('business-setup', 'Foreign Investment Registration', 'Registration support for foreign-invested enterprises.'),
      service('business-setup', 'Representative Office Registration', 'Setting up a representative office for a foreign company.'),
      service('business-setup', 'Branch Office Registration', 'Registering a branch of an existing foreign company.'),
      service('business-setup', 'Business License Applications', 'Preparing and filing applications for operating licences.'),
      service('business-setup', 'Industry-Specific Licenses', 'Licences required for regulated sectors and activities.'),
      service('business-setup', 'Tax Registration', 'Registering a new business with the tax authorities.'),
      service('business-setup', 'Social Security Registration', 'Registering a company and its employees for social security.'),
      service('business-setup', 'Company Amendments', 'Updating company details, shareholders, or registered particulars.'),
      service('business-setup', 'Business License Renewal', 'Keeping operating licences current through timely renewals.'),
    ],
  },
  {
    id: 'visa-immigration-services',
    categorySlug: 'visa-immigration',
    title: 'Visa & Immigration Services',
    summary:
      'Visa, work permit, and stay permit support for professionals, investors, and families living or working in Laos.',
    services: [
      service('visa-immigration', 'Business Visa', 'Visa support for business visitors and short-term assignments.'),
      service('visa-immigration', 'Investor Visa', 'Visa support for investors establishing or funding a business.'),
      service('visa-immigration', 'Work Visa', 'Visa support for foreign employees working in Laos.'),
      service('visa-immigration', 'Work Permit', 'Work permit applications and renewals for foreign staff.'),
      service('visa-immigration', 'Long-Term Stay Visa', 'Options for longer stays in Laos, assessed case by case.'),
      service('visa-immigration', 'Visa Extension & Renewal', 'Extending or renewing an existing visa before it lapses.'),
      service('visa-immigration', 'Stay Permit', 'Stay permit applications for foreign residents.'),
      service('visa-immigration', 'Immigration Consulting', 'Practical advice on immigration pathways and requirements.'),
      service('visa-immigration', 'Document Preparation', 'Preparing, translating, and organising application documents.'),
      service('visa-immigration', 'Government Liaison', 'Coordinating with the relevant authorities on your behalf.'),
    ],
  },
  {
    id: 'corporate-legal-services',
    categorySlug: 'legal-family',
    title: 'Corporate Legal Services',
    summary:
      'Contracts, compliance, due diligence, and intellectual property support for companies operating in Laos.',
    services: [
      service('legal-family', 'Legal Consulting', 'Practical legal guidance for business decisions in Laos.'),
      service('legal-family', 'Contract Review', 'Reviewing contracts before you sign, in plain language.'),
      service('legal-family', 'Contract Drafting', 'Drafting clear, workable contracts for your business.'),
      service('legal-family', 'Corporate Compliance', 'Keeping company obligations and filings in good order.'),
      service('legal-family', 'Due Diligence', 'Background checks on partners, assets, and transactions.'),
      service('legal-family', 'Trademark Registration', 'Registering and protecting trademarks in Laos.'),
      service('legal-family', 'Intellectual Property Support', 'Practical support for protecting intellectual property.'),
      service('legal-family', 'Company Legal Documentation', 'Preparing and maintaining core company legal documents.'),
      service('legal-family', 'Legal Liaison Support', 'Coordinating with authorities and counterparties on legal matters.'),
    ],
  },
  {
    id: 'family-personal-legal-services',
    categorySlug: 'legal-family',
    title: 'Family & Personal Legal Services',
    summary:
      'Support for marriage, family documentation, and long-term stay matters involving Lao and foreign nationals.',
    services: [
      service('legal-family', 'Marriage Registration for Lao and Foreign Nationals', 'Guiding mixed-nationality couples through marriage registration.'),
      service('legal-family', 'Marriage Certificate Translation and Legalisation Support', 'Translation and legalisation of marriage documents.'),
      service('legal-family', 'Divorce Assistance', 'Document and procedure support during divorce.'),
      service('legal-family', 'Family Documentation', 'Preparing and correcting family civil documents.'),
      service('legal-family', 'Birth Certificate Support', 'Assistance with birth registration and certificates.'),
      service('legal-family', 'Family Book Support', 'Support with family book registration and updates.'),
      service('legal-family', 'Long-Term Stay Support for Foreign Spouses', 'Stay options for foreign spouses of Lao nationals.'),
    ],
  },
  {
    id: 'accounting-tax',
    categorySlug: 'accounting-tax',
    title: 'Accounting & Tax',
    summary:
      'Bookkeeping, tax filings, payroll, and annual compliance — reliable financial foundations for your business.',
    services: [
      service('accounting-tax', 'Accounting Services', 'Accounting support aligned with Lao requirements.'),
      service('accounting-tax', 'Bookkeeping', 'Accurate, up-to-date books for your business.'),
      service('accounting-tax', 'Tax Registration', 'Registering your business with the tax authorities.'),
      service('accounting-tax', 'Tax Filing', 'Preparing and submitting periodic tax filings.'),
      service('accounting-tax', 'Payroll Services', 'Payroll processing and related filings for your team.'),
      service('accounting-tax', 'Financial Reporting', 'Clear financial reports for owners and authorities.'),
      service('accounting-tax', 'Annual Compliance Support', 'Staying on top of annual filing and reporting obligations.'),
      service('accounting-tax', 'Tax Advisory', 'Practical tax guidance for decisions and planning.'),
    ],
  },
]

/** All individual services, flattened (44 items). */
export const allServices: Service[] = serviceGroups.flatMap(
  (group) => group.services,
)

/** Service groups shown on a given category page. */
export function groupsForCategory(slug: ServiceCategorySlug): ServiceGroup[] {
  return serviceGroups.filter((group) => group.categorySlug === slug)
}
