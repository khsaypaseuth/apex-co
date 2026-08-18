import type { FaqSection } from '@/lib/types'

/**
 * FAQ for `/faq`, written around what a client actually asks a contractor
 * before awarding work: what you can build, how you price it, who is liable,
 * and what happens when something goes wrong.
 *
 * Guardrail: no answer states a fixed price, a guaranteed duration, or a
 * certification Apex has not confirmed holding.
 */

export const faqSections: FaqSection[] = [
  {
    title: 'Capabilities',
    items: [
      {
        question: 'What voltage levels does Apex work at?',
        answer:
          'We work at 115 kV on the transmission side and 22 kV on medium-voltage distribution, plus low-voltage installation inside buildings. That covers overhead lines, underground cable, substations, distribution transformers, switchgear, and building electrical systems. We also supply low, medium, and high voltage equipment as a standalone scope.',
      },
      {
        question: 'Is Apex an electrical contractor or a construction contractor?',
        answer:
          'Both, and that is deliberate. The company has more than fifteen years in foundation and driven piling, road and bridge construction, and building construction, alongside the electrical business. On projects that need civil and electrical work together — a substation, an industrial site, a building needing its own supply — a single contractor delivers both under one programme.',
      },
      {
        question: 'Can you take on just the supply, without the installation?',
        answer:
          'Yes. Equipment supply can be contracted on its own: transformers, switchgear and ring main units, protection panels, cable and accessories, poles and line hardware, and LV distribution equipment. Where a specification names an approved-vendor list, we procure against that list rather than substituting on price without your written agreement.',
      },
      {
        question: 'Do you do piling for other contractors?',
        answer:
          'Yes. Foundation and piling is frequently contracted as a standalone package to building and infrastructure contractors, taken through pile installation, testing, trimming, and pile caps so the frame contractor starts on a finished, surveyed platform.',
      },
      {
        question: 'Does Apex develop its own property?',
        answer:
          'Yes. Alongside contracting, Apex acts as a developer on its own account — taking land through feasibility, permitting, construction, and into sale or lease. It means we have taken the same commercial risk our development clients take.',
      },
    ],
  },
  {
    title: 'Pricing and tendering',
    items: [
      {
        question: 'How do you price work?',
        answer:
          'Against a confirmed scope. For tendered work we price the bill of quantities and specification as issued. For negotiated work we normally need a site visit and, for foundations, the geotechnical report before we can price anything meaningful. We do not quote a rate for piling or roadworks before knowing the ground.',
      },
      {
        question: 'Can you give a price over the phone?',
        answer:
          'We can give an indication of whether a project is within our capability and roughly how it would be approached, but not a price. Construction and electrical costs are driven by scope, site conditions, access, and equipment lead times, and a number given before those are known would be misleading rather than helpful.',
      },
      {
        question: 'What do you need from us to prepare a quotation?',
        answer:
          'At minimum: the drawings and specification, the site location and access constraints, and the required completion date. For foundation work, the geotechnical investigation report. For electrical work, the single-line diagram, connection point, and load. Where documents are still in draft, we will price what exists and state the assumptions we have made.',
      },
      {
        question: 'Do you work as a subcontractor on larger projects?',
        answer:
          'Yes. We regularly take the piling, electrical, or civil package on projects where another party holds the main contract, and we are used to working within a main contractor’s programme, site rules, and safety regime.',
      },
    ],
  },
  {
    title: 'Programme and delivery',
    items: [
      {
        question: 'How long will our project take?',
        answer:
          'It depends on scope, site conditions, approvals, and equipment lead times, so we issue a programme against the confirmed scope rather than quoting a duration in advance. What we can commit to is reporting progress against that programme honestly, including when it slips and why.',
      },
      {
        question: 'How does the wet season affect the programme?',
        answer:
          'Significantly, for earthworks, pavement, and concrete. Layers cannot be compacted or surfaced to specification in sustained rain. We would rather write a programme around the wet season than through it, and we will say so at tender stage rather than after the works have started.',
      },
      {
        question: 'What happens if conditions on site turn out different from the design?',
        answer:
          'We stop, record what we have found, and refer it to the engineer or client before continuing. This is most common on foundation work, where ground rarely matches the borehole log exactly. Building on regardless is how a buried problem becomes an expensive one.',
      },
      {
        question: 'Do you work on live electrical networks?',
        answer:
          'Extensions and reinforcements to live distribution networks are normal scope, but they require outage planning and switching coordination with the utility. We treat that coordination as part of the works, and we plan the outage window before mobilising rather than after.',
      },
    ],
  },
  {
    title: 'Quality, testing, and safety',
    items: [
      {
        question: 'What testing is included in your scope?',
        answer:
          'Whatever the specification requires, carried out at the specified frequency and reported formally. For piling, that means set records, integrity testing, and load testing. For roads, material and compaction testing layer by layer. For electrical work, insulation and earth testing, transformer tests, protection relay injection, and functional commissioning checks.',
      },
      {
        question: 'What do we receive at handover?',
        answer:
          'As-built drawings, the test and commissioning records for the works, equipment documentation and manuals for supplied plant, and the survey records where relevant. Test records are part of the deliverable, not an optional extra — an installation without them cannot be shown to be compliant.',
      },
      {
        question: 'What happens if a test fails?',
        answer:
          'We report it to you and to the engineer immediately, and we do not proceed past it. A pile that has quietly failed its test or a circuit that was energised on an assumption is the most expensive kind of problem, precisely because it surfaces late.',
      },
      {
        question: 'How do you manage site safety?',
        answer:
          'Every project runs under an agreed safety plan covering method statements, plant and lifting operations, excavation and temporary works, and electrical safety and isolation. On subcontracted work we operate under the main contractor’s regime where it is more stringent than ours.',
      },
    ],
  },
  {
    title: 'Working with Apex',
    items: [
      {
        question: 'Where does Apex work?',
        answer:
          'Across the Lao PDR. Provincial and remote work is normal for road, bridge, and transmission projects, though access and logistics affect both programme and cost and are assessed as part of pricing.',
      },
      {
        question: 'What languages do you work in?',
        answer:
          'Lao and English for day-to-day project communication and documentation. This website is also published in Thai, Vietnamese, and Chinese for clients and suppliers who prefer them.',
      },
      {
        question: 'Can you handle the permits and utility approvals?',
        answer:
          'We support the approvals process and coordinate with the relevant authorities and the utility as part of the scope. Which approvals are the client’s responsibility and which are ours is agreed in the contract, because leaving that undefined is a reliable way to lose weeks.',
      },
      {
        question: 'How do we start a conversation about a project?',
        answer:
          'Send us the drawings, the location, and the target completion date through the contact page, or call us. If it is within our capability we will say so and tell you what we need to price it. If it is not, we will tell you that too.',
      },
    ],
  },
]
