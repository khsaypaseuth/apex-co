import type { FaqSection } from '@/lib/types'

/**
 * FAQ content — the master plan's five sections and all listed questions
 * (§FAQ). Answers are deliberately cautious: nothing is stated as a fixed
 * legal fact, no processing times or fees are given, and readers are always
 * pointed to a case-by-case assessment. The FAQ page renders a DisclaimerBox
 * below these sections. English-only for now; Phase 7 adds Lao.
 */
export const faqSections: FaqSection[] = [
  {
    title: 'Business Setup',
    items: [
      {
        question: 'Can foreigners register a company in Laos?',
        answer:
          'In many sectors, yes — foreign investors commonly establish companies in Laos. However, some activities are subject to sector-specific conditions, ownership limits, or additional approvals, and the rules can change. The right starting point is confirming whether your planned activity is open to foreign investment and under what conditions — something we assess case by case.',
      },
      {
        question: 'How long does company registration take?',
        answer:
          'It varies. Processing depends on the business structure, the sector, the completeness of the application, and the authorities involved, so we do not quote a standard duration. After an initial assessment of your case, we can give you a realistic expectation and keep you updated at every stage.',
      },
      {
        question: 'What documents are needed?',
        answer:
          'Applications commonly involve identity documents of shareholders and directors, articles of association, proof of a registered address, and a description of the business activity. Foreign companies are typically also asked for corporate documents from their home jurisdiction, often translated and legalised. The exact list is determined by the authorities and varies by case — we confirm it for your situation before anything is filed.',
      },
      {
        question: 'Do I need a local partner?',
        answer:
          'Not necessarily — it depends on the sector. Some activities allow full foreign ownership, while others have conditions or ownership limits that may make a Lao partner relevant. Because this varies by activity and can change, we verify the current position for your specific sector before you commit to a structure.',
      },
      {
        question: 'What licenses are required?',
        answer:
          'Beyond enterprise registration, many activities require an operating licence, and regulated sectors typically require industry-specific approvals. Which licences apply depends entirely on what the business does. We identify the licences commonly required for your activity and manage the applications and later renewals.',
      },
    ],
  },
  {
    title: 'Visa & Immigration',
    items: [
      {
        question: 'What is the difference between a visa and a work permit?',
        answer:
          'Broadly, a visa concerns your permission to enter and stay in Laos, while a work permit concerns your permission to work. Foreign employees typically need both, and they must stay aligned — an expiring permit can affect your stay, and vice versa. We handle the two together so nothing falls out of sync.',
      },
      {
        question: 'Can investors apply for long-term stay?',
        answer:
          'Investors who establish or fund a business in Laos may have longer-term visa and stay options, depending on the nature of the investment and the business. Eligibility and conditions vary by case, so we assess your situation first and then manage the application that fits.',
      },
      {
        question: 'Can family members stay in Laos?',
        answer:
          'Commonly, yes — spouses and family members often have stay options connected to a family member who works, invests, or resides in Laos, or to marriage with a Lao national. The requirements depend on the relationship and the documents available, and we help families prepare and file the applications.',
      },
      {
        question: 'How do visa extensions work?',
        answer:
          'Most visas and permits have a validity period and can typically be extended or renewed before they expire, subject to the conditions of the category. Applying in good time matters. We track expiry dates for our clients and prepare extensions and renewals ahead of the deadline.',
      },
    ],
  },
  {
    title: 'Legal',
    items: [
      {
        question: 'Can Super Consulting draft contracts?',
        answer:
          'Yes. We draft contracts for businesses and individuals — in clear language, suited to how the agreement will actually be used in Laos. We also explain the key rights and obligations in plain terms, so you understand what you are signing, not just that it is signed.',
      },
      {
        question: 'Can contracts be reviewed before signing?',
        answer:
          'Yes, and we recommend it. We review the contract, flag the clauses that carry risk or need negotiation, and summarise the practical effect in plain language before you commit. Both English and Lao language documents are supported.',
      },
      {
        question: 'What is due diligence?',
        answer:
          'Due diligence is a structured background check carried out before a partnership, purchase, or significant transaction — verifying that a company, asset, or document is what it appears to be. We examine the available records and documentation and report what we find, including anything that could not be verified.',
      },
      {
        question: 'Can you help with trademark registration?',
        answer:
          'Yes. We support trademark registration in Laos from start to finish — checking availability, preparing and filing the application, and following up until registration. We can also advise on practical steps to protect your brand more broadly.',
      },
    ],
  },
  {
    title: 'Accounting & Tax',
    items: [
      {
        question: 'Does every company need bookkeeping?',
        answer:
          'Companies operating in Laos are generally expected to keep proper books and records, though the detail of what applies can vary with the company’s size and registration. In practice, accurate bookkeeping is also what makes tax filings, reporting, and audits manageable — so we treat it as essential for every client.',
      },
      {
        question: 'When should a company register for tax?',
        answer:
          'Tax registration is typically one of the first steps after a company is established — new businesses commonly need a taxpayer identification number before they can operate normally. We usually handle tax registration as part of the setup process so nothing is missed.',
      },
      {
        question: 'Can Super Consulting help with payroll?',
        answer:
          'Yes. We run payroll for teams of all sizes — salary calculations, the related declarations and contributions, and clear payslips — accurately and on schedule, alongside the rest of your accounting.',
      },
      {
        question: 'What annual compliance is required?',
        answer:
          'Companies typically face an annual cycle of closing the books, reporting, and renewing registrations or licences, but the exact obligations vary by company, sector, and registration. We map the calendar that applies to your business and complete each step before it is due.',
      },
    ],
  },
  {
    title: 'Family & Personal',
    items: [
      {
        question: 'Can foreigners marry Lao citizens?',
        answer:
          'Yes — marriage between Lao and foreign nationals is possible, through a specific registration procedure. The documents and steps involved vary by case and by the foreign spouse’s nationality, and certificates often need translation and legalisation. We guide couples through the whole process.',
      },
      {
        question: 'Can Super Consulting help with divorce documents?',
        answer:
          'Yes. We assist with the documentation and procedural side of divorce, including cases with an international element — carefully, discreetly, and with clear explanations of each step. For matters requiring court representation, we coordinate with qualified legal professionals.',
      },
      {
        question: 'Can foreign spouses apply for long-term stay?',
        answer:
          'Foreign spouses of Lao nationals commonly have stay options connected to the marriage, though the requirements and conditions vary by case. We assess what may apply in your situation and handle the application together with our immigration team.',
      },
    ],
  },
]
