import type { ServicePageContent } from '@/lib/types'

/**
 * English content for the four `/services/[category]` pages, following the
 * master plan's section lists for each page. Guardrails (master plan §5–6):
 * nothing here states legal requirements, fees, or processing times as fact —
 * wording stays at "commonly / typically / varies by case", and every page
 * renders a DisclaimerBox. Phase 7 adds Lao copies under `content/lo/`.
 */

export const servicePages: Record<ServicePageContent['slug'], ServicePageContent> = {
  'business-setup': {
    slug: 'business-setup',
    heroLede:
      'From choosing a structure to holding your registration certificate — practical, step-by-step support for setting up a business in Laos.',
    overview: [
      'Setting up a business in Laos typically involves choosing a legal structure, registering the enterprise — as of July 2026 the registration certificate is issued together with the taxpayer identification number — and obtaining the licences your activity requires. The exact sequence and requirements vary by business activity, ownership structure, and the authorities involved.',
      'Super Consulting manages this journey end to end: we help you confirm what applies to your specific case, prepare the paperwork, and coordinate with the relevant offices — so the process stays clear and predictable for you.',
    ],
    whoItsFor: [
      'Foreign investors establishing a company, branch, or representative office in Laos',
      'Lao entrepreneurs registering a new business or formalising an existing one',
      'Companies adding licences, amending registered details, or renewing existing licences',
      'Businesses that need tax and social security registration completed correctly from day one',
    ],
    topics: [
      {
        heading: 'Common business structures',
        body: 'Businesses in Laos are commonly established as sole traders, limited companies, or — for foreign companies building a presence — branch or representative offices. Which structure fits depends on ownership, capital, and the planned activity. Foreign ownership rules differ by sector, and some activities are subject to specific conditions; confirming this early is one of the most valuable steps in the whole process.',
      },
      {
        heading: 'Licensing',
        body: 'Beyond enterprise registration, many activities require an operating licence, and regulated sectors typically require industry-specific approvals. Requirements vary by sector and can change, so we verify what applies to your activity before any application is filed.',
      },
    ],
    process: [
      {
        title: 'Assess structure and requirements',
        description:
          'We review your planned activity and ownership, and confirm which structure, approvals, and registrations commonly apply to a case like yours.',
      },
      {
        title: 'Prepare documents',
        description:
          'We prepare and organise the incorporation documents, application forms, and supporting paperwork, flagging anything that needs translation or legalisation.',
      },
      {
        title: 'File and follow up',
        description:
          'We submit the applications and liaise with the relevant authorities, keeping you informed at each stage until certificates and licences are issued.',
      },
      {
        title: 'Complete post-registration steps',
        description:
          'We help with social security registration, the company seal, sector licences, and the practical steps that follow — so the company is genuinely ready to operate.',
      },
    ],
    documents: {
      intro:
        'The documents requested vary by structure and sector, but applications commonly involve:',
      items: [
        'Passports or identity documents of shareholders and directors',
        'Articles of association and shareholder details',
        'Proof of registered address in Laos',
        'Business activity descriptions and, for some sectors, supporting approvals',
        'For foreign companies: corporate documents from the home jurisdiction, often translated and legalised',
      ],
      note: 'This list is indicative only — the authorities determine what is required for each application, and requirements vary by case.',
    },
    timelineNote:
      'Processing times depend on the structure, the sector, the completeness of the application, and the authorities involved. We do not publish fixed timelines — after an initial assessment we can give you a realistic expectation for your specific case.',
    howWeHelp: [
      'Advice on structure and setup options before you commit',
      'Preparation and review of every document in the application',
      'Filing and follow-up with the relevant authorities on your behalf',
      'Tax, social security, and post-registration setup',
      'Ongoing support for amendments and licence renewals after setup',
    ],
  },

  'visa-immigration': {
    slug: 'visa-immigration',
    heroLede:
      'Visas, work permits, and stay permits for professionals, investors, and families — handled carefully, so you can focus on your work and life in Laos.',
    overview: [
      'Living and working in Laos as a foreign national typically involves the right combination of visa, work permit, and stay permit — and keeping each of them current. The applicable category and requirements depend on your purpose of stay, your employer or business, and your nationality.',
      'Super Consulting helps you identify the pathway that fits your situation, prepares the paperwork, and coordinates with the relevant authorities from first application through every renewal.',
    ],
    whoItsFor: [
      'Foreign employees and their employers arranging work visas and work permits',
      'Investors and business owners establishing themselves in Laos',
      'Foreign nationals seeking longer-term stay options',
      'Families and spouses accompanying someone who lives or works in Laos',
    ],
    topics: [
      {
        heading: 'Visa types supported',
        body: 'We support business visas, work visas, investor visas, and long-term stay visas, as well as extensions and renewals of existing visas. Which category applies — and what it requires — varies by purpose of stay and by case, so we always begin by confirming the appropriate pathway for your situation.',
      },
      {
        heading: 'Work permit support',
        body: 'Foreign employees working in Laos typically need a work permit alongside their visa. We prepare and file work permit applications and renewals, coordinating with the employer so that the visa and permit stay aligned.',
      },
      {
        heading: 'Investor visa support',
        body: 'Investors who establish or fund a business in Laos may qualify for investor visa options. Conditions vary depending on the investment and the business, and we help assess and document your eligibility before applying.',
      },
      {
        heading: 'Long-term stay support',
        body: 'For those planning a longer stay in Laos, several routes may be available depending on individual circumstances — including employment, investment, or family connections. We assess the options against your situation and manage the applications.',
      },
      {
        heading: 'Family stay support',
        body: 'Spouses and family members commonly have stay options connected to a working or resident family member, or to marriage with a Lao national. We help families understand what may apply to them and prepare the supporting documents.',
      },
      {
        heading: 'Document preparation',
        body: 'Immigration applications are document-heavy: forms, photographs, employment or investment evidence, and supporting certificates that may need translation or legalisation. We prepare, check, and organise everything before it is submitted.',
      },
      {
        heading: 'Renewal and extension support',
        body: 'Visas, work permits, and stay permits all have validity periods, and renewing them on time matters. We track expiry dates for our clients and handle extensions and renewals before they become urgent.',
      },
    ],
    process: [
      {
        title: 'Assess your situation',
        description:
          'We review your purpose of stay, employment or investment, and family circumstances to confirm which visa and permit pathway fits.',
      },
      {
        title: 'Prepare the application',
        description:
          'We gather and prepare the forms and supporting documents, arranging translation or legalisation where commonly required.',
      },
      {
        title: 'File and liaise',
        description:
          'We submit the application and coordinate with the relevant authorities, following up until a decision is issued.',
      },
      {
        title: 'Stay current',
        description:
          'We monitor validity periods and manage extensions and renewals, so your status in Laos stays in good order.',
      },
    ],
    documents: {
      intro:
        'Requirements differ by visa category and by case, but applications commonly involve:',
      items: [
        'A valid passport with sufficient remaining validity',
        'Application forms and recent photographs',
        'Supporting evidence of employment, investment, or family relationship',
        'For work permits: employer documents and confirmation of the position',
        'Certificates (such as marriage certificates) with translation or legalisation where requested',
      ],
      note: 'This list is a general orientation only — the authorities determine the requirements for each application, and they vary by category, nationality, and case.',
    },
    timelineNote:
      'Processing times vary by category, by the authorities involved, and by the completeness of the application. We do not publish fixed timelines — once we understand your case we can set realistic expectations and plan renewals ahead of expiry.',
    howWeHelp: [
      'Honest assessment of which pathway fits your situation',
      'Complete document preparation, translation, and organisation',
      'Filing and liaison with the relevant authorities',
      'Expiry tracking, extensions, and renewals handled proactively',
      'Coordinated support for accompanying family members',
    ],
  },

  'legal-family': {
    slug: 'legal-family',
    heroLede:
      'Corporate legal support for your business — and careful, discreet help with marriage, family, and personal documentation matters.',
    overview: [
      'Legal questions in Laos rarely arrive neatly labelled. A business may need a contract reviewed this month and a trademark registered the next; a family may need a marriage registered in one year and a stay permit for a foreign spouse the year after. This practice area covers both sides.',
      'On the corporate side, we support contracts, compliance, due diligence, and intellectual property. On the personal side, we help Lao and foreign nationals with marriage registration, divorce assistance, and family documentation — matters where accuracy and discretion matter most.',
    ],
    whoItsFor: [
      'Companies that need contracts drafted or reviewed before signing',
      'Businesses maintaining corporate compliance or preparing for transactions',
      'Brand owners registering trademarks or protecting intellectual property',
      'Lao–foreign couples registering a marriage or arranging long-term stay for a spouse',
      'Individuals who need family civil documents prepared, corrected, or legalised',
    ],
    topics: [
      {
        heading: 'Corporate legal support',
        body: 'We provide practical legal consulting for businesses operating in Laos — from everyday questions to structuring decisions — always in plain language, with the commercial context in view.',
      },
      {
        heading: 'Contract support',
        body: 'We draft new contracts and review existing ones before you sign, explaining the key rights, obligations, and risks in terms you can act on. Both English and Lao language documents are supported.',
      },
      {
        heading: 'Compliance',
        body: 'Companies in Laos typically carry ongoing obligations — registrations to maintain, filings to submit, records to keep. We help you understand what commonly applies to your company and keep it in good order.',
      },
      {
        heading: 'Due diligence',
        body: 'Before a partnership, acquisition, or significant transaction, we conduct background checks on companies, assets, and documentation, and report what we find — clearly, including what could not be verified.',
      },
      {
        heading: 'Trademark and IP',
        body: 'We support trademark registration with the Department of Intellectual Property under the Ministry of Industry and Commerce, and practical IP protection — from availability checks through filing and registration follow-up.',
      },
      {
        heading: 'Marriage with a Lao citizen',
        body: 'Marriage between a Lao and a foreign national involves a specific registration procedure with document requirements that vary by case and by the foreign spouse’s nationality. We guide couples through the steps, prepare the paperwork, and support translation and legalisation of certificates.',
      },
      {
        heading: 'Divorce assistance',
        body: 'We assist with the documentation and procedural side of divorce — carefully and discreetly — including cases with an international element.',
      },
      {
        heading: 'Family documentation',
        body: 'Birth certificates, family book registration, and other civil documents underpin many later applications. We help prepare, correct, and legalise family documents so they are accepted when you need them.',
      },
      {
        heading: 'Long-term stay support for foreign spouses',
        body: 'Foreign spouses of Lao nationals commonly have stay options connected to the marriage. We assess what may apply in your case and manage the applications together with our immigration team.',
      },
    ],
    process: [
      {
        title: 'Understand the matter',
        description:
          'We listen first — corporate or personal — and confirm what the matter actually requires before proposing anything.',
      },
      {
        title: 'Agree the scope',
        description:
          'You receive a clear scope of work and quote, so there are no surprises about what we will do or what it costs.',
      },
      {
        title: 'Execute and liaise',
        description:
          'We prepare documents, conduct reviews or checks, and coordinate with authorities and counterparties as needed.',
      },
      {
        title: 'Deliver and follow through',
        description:
          'You receive the outcome in plain language, with the documents in order and guidance on any next steps.',
      },
    ],
    documents: {
      intro:
        'Requirements depend heavily on the matter, but clients are commonly asked for:',
      items: [
        'Identity documents of the parties involved',
        'Existing contracts, corporate documents, or certificates relevant to the matter',
        'For marriage registration: civil status documents of both parties, with translation or legalisation where requested',
        'For trademark filings: the mark, owner details, and the goods or services covered',
      ],
      note: 'Each matter is different — the authorities and counterparties involved determine what is actually required, and requirements vary by case.',
    },
    timelineNote:
      'How long a legal or family matter takes depends on its type, the authorities involved, and the completeness of the documents. We do not publish fixed timelines — we set expectations honestly at the start of each engagement and keep you updated as the matter progresses.',
    howWeHelp: [
      'Plain-language advice — you always understand where you stand',
      'Careful document drafting, review, and preparation',
      'Liaison with authorities and counterparties on your behalf',
      'Discretion and confidentiality on personal and family matters',
      'One team covering both the legal and the immigration sides of family matters',
    ],
  },

  'accounting-tax': {
    slug: 'accounting-tax',
    heroLede:
      'Reliable books, filings submitted on time, and tax advice you can act on — financial foundations for doing business in Laos.',
    overview: [
      'Companies operating in Laos typically carry accounting and tax obligations from the moment they are registered — books to keep, periodic filings to submit, and annual reporting to complete. What exactly applies depends on the company’s size, sector, and registration.',
      'Super Consulting keeps these foundations solid: accurate bookkeeping, filings prepared and submitted on time, payroll handled properly, and clear reports so you always know where the business stands.',
    ],
    whoItsFor: [
      'New companies that need tax registration and an accounting setup from day one',
      'Foreign-invested businesses that want Lao requirements handled by a local team',
      'Growing companies outsourcing bookkeeping, payroll, or tax filings',
      'Businesses preparing for annual compliance and financial reporting',
    ],
    topics: [
      {
        heading: 'Accounting overview',
        body: 'We provide accounting support aligned with Lao requirements — setting up the chart of accounts, keeping records in order, and making sure the numbers are ready when owners, banks, or authorities need them.',
      },
      {
        heading: 'Bookkeeping',
        body: 'Accurate, up-to-date books are the foundation of everything else. We record transactions, reconcile accounts, and keep supporting documents organised on a monthly rhythm.',
      },
      {
        heading: 'Tax registration',
        body: 'As of July 2026, a taxpayer identification number is normally issued together with enterprise registration, and tax accounts are managed through the TaxRIS system. We make sure the company starts its tax life correctly and its registrations are complete.',
      },
      {
        heading: 'Tax filing',
        body: 'Companies in Laos commonly have periodic tax filing obligations. We prepare and submit the filings that apply to your business and keep evidence of every submission.',
      },
      {
        heading: 'Payroll',
        body: 'We run payroll for your team — salary calculations, the related declarations and contributions, and clear payslips — accurately and on schedule.',
      },
      {
        heading: 'Reporting',
        body: 'From monthly management reports to statements prepared for authorities, we deliver financial reporting that is accurate, on time, and understandable.',
      },
      {
        heading: 'Annual compliance',
        body: 'Each year brings a cycle of closing, reporting, and renewal obligations that vary by company. We track the calendar that applies to your business and complete each step before it is due.',
      },
      {
        heading: 'Tax knowledge',
        body: 'Our Knowledge Center publishes plain-language articles on Lao tax and accounting topics — a good starting point before you talk to us about your specific case.',
      },
    ],
    process: [
      {
        title: 'Review your obligations',
        description:
          'We assess your company’s registration, sector, and activity to confirm which accounting and tax obligations commonly apply.',
      },
      {
        title: 'Set up the foundations',
        description:
          'We establish or tidy the bookkeeping, complete any missing registrations, and agree a filing calendar with you.',
      },
      {
        title: 'Run the monthly rhythm',
        description:
          'Books kept current, filings prepared and submitted, payroll processed — with clear reports back to you.',
      },
      {
        title: 'Close the year properly',
        description:
          'We manage the annual closing, reporting, and compliance cycle so the year ends as cleanly as it ran.',
      },
    ],
    documents: {
      intro:
        'To take over or set up your accounting, we commonly ask for:',
      items: [
        'Enterprise registration and tax registration certificates',
        'Prior financial records and filings, where they exist',
        'Bank statements and transaction records',
        'Employment contracts and payroll history for payroll services',
      ],
      note: 'What is needed varies with the state of your records and the services engaged — we confirm the exact list during onboarding.',
    },
    timelineNote:
      'Filing deadlines and reporting cycles are set by the authorities and can change; the schedule that applies depends on your company’s registration and activity. We confirm your calendar during onboarding rather than publishing general deadlines here.',
    howWeHelp: [
      'One team for bookkeeping, tax, payroll, and reporting',
      'A filing calendar tailored to your company, tracked for you',
      'Plain-language explanations of what applies and why',
      'Clean handovers — your records stay yours, always organised',
      'Advisory support when decisions have tax consequences',
    ],
  },
}
