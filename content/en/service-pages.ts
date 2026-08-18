import type { ServicePageContent } from '@/lib/types'

/**
 * English content for the four `/services/[category]` pages.
 *
 * Guardrail: nothing here states a fixed price, a guaranteed duration, or a
 * certification Apex has not confirmed holding. Capacities and programme are
 * written as "typically / commonly / subject to", and every page renders a
 * ScopeNote saying the same thing in plain terms.
 */

export const servicePages: Record<ServicePageContent['slug'], ServicePageContent> = {
  electrical: {
    slug: 'electrical',
    heroLede:
      'Transmission and distribution works at 115 kV and 22 kV — lines, substations, and the low, medium, and high voltage equipment that goes into them.',
    overview: [
      'Apex builds and energises electrical infrastructure at the two voltage classes that carry most of the Lao network: 115 kV on the transmission side and 22 kV on medium-voltage distribution. That covers overhead lines and underground cable, substation civil and primary plant, distribution transformers and switchgear, and the low-voltage installation inside the buildings those networks feed.',
      'The same team also supplies the equipment. Because Apex procures transformers, switchgear, cable, and accessories directly, a client can place the supply and the installation with one contractor and hold one party accountable for whether the installed equipment actually passes its tests.',
      'Every scope ends the same way: pre-energisation testing, protection checks, and commissioning witnessed to the utility’s requirements. Work is not complete when it is built — it is complete when it is energised and proven.',
    ],
    whoItsFor: [
      'Utilities and public authorities extending or reinforcing distribution and transmission networks',
      'Industrial plants, factories, and mines needing a dedicated supply, substation, or connection upgrade',
      'Property developers bringing power to a new building, estate, or industrial site',
      'Main contractors subcontracting the electrical package of a larger civil project',
      'Owners of existing installations needing maintenance, testing, extension, or fault response',
    ],
    topics: [
      {
        heading: '115 kV transmission and substations',
        body: 'Transmission-class work covers route survey and setting out, tower and structure foundations, steel erection, conductor stringing and sagging, and the substation that terminates the line. On the substation side that means the civil works and structures, the primary plant — power transformers, circuit breakers, disconnectors, instrument transformers, busbars — the earth grid, and the protection and control system. Scope is defined against the utility’s standard drawings and specifications for the connection point.',
      },
      {
        heading: '22 kV distribution',
        body: 'Distribution work is the volume side of the business: overhead feeders on concrete or steel poles, underground cable in urban sections, distribution substations and pole-mounted transformers, ring main units, sectionalisers, and the extensions and reinforcements that follow load growth. Distribution jobs are usually the ones with live-network constraints, so outage planning and switching coordination with the utility are part of the scope, not an afterthought.',
      },
      {
        heading: 'Low voltage and building electrical',
        body: 'Downstream of the transformer, Apex installs main distribution boards, submains, final circuits, small power and lighting, and the earthing and bonding that ties it together. On projects where Apex is also the building contractor, this is delivered as part of one programme, which removes the usual argument about who is holding up whom.',
      },
      {
        heading: 'Equipment supply — low, medium, and high voltage',
        body: 'Apex supplies electrical equipment across all three voltage classes: transformers, switchgear and ring main units, protection relays and panels, cable and accessories, poles and line hardware, and LV distribution equipment. Supply can be taken on its own, or bundled with installation. Where a specification names an approved-vendor list, Apex procures against that list rather than substituting on price without the client’s written agreement.',
      },
      {
        heading: 'Testing, commissioning, and energisation',
        body: 'Before anything is energised, circuits are tested and results recorded: insulation resistance, continuity, earth resistance, transformer ratio and winding tests, protection relay injection, and functional checks of control and interlocking. Commissioning is witnessed by the client or the utility as the connection agreement requires, and the test records are handed over with the as-built documentation.',
      },
    ],
    process: [
      {
        title: 'Survey and scope confirmation',
        description:
          'We walk the route or the site, confirm the connection point and constraints, and agree exactly what is in the scope and what is supplied by others.',
      },
      {
        title: 'Design coordination and approvals',
        description:
          'We work to the client’s or utility’s design, coordinate the drawings and equipment schedules, and support the approvals needed before construction begins.',
      },
      {
        title: 'Procurement and delivery',
        description:
          'We procure the transformers, switchgear, cable, and hardware against the specification, and sequence delivery to the construction programme.',
      },
      {
        title: 'Construction and installation',
        description:
          'We build the lines, substations, or installations with our own crews and plant, under the site safety and quality regime agreed for the project.',
      },
      {
        title: 'Testing, commissioning, and handover',
        description:
          'We test, commission, and support energisation, then hand over test records, as-built drawings, and equipment documentation.',
      },
    ],
    standards: {
      intro:
        'Electrical scopes are normally executed against a combination of the following — the governing set is confirmed per contract:',
      items: [
        'The utility’s standard specifications and connection requirements for the voltage class',
        'IEC standards for equipment ratings, testing, and type approval',
        'Client or consultant design drawings, single-line diagrams, and equipment schedules',
        'Lao regulations and permits applicable to electrical works and wayleaves',
        'Project-specific safety, environmental, and quality plans',
      ],
      note: 'Where a specification is silent or two documents conflict, we raise it in writing before construction rather than choosing an interpretation on site.',
    },
    timelineNote:
      'Programme depends on the route or site, equipment lead times, outage windows available on a live network, and the approvals sequence. We issue a programme against the confirmed scope and report progress against it, rather than quoting a duration before the survey.',
    howWeHelp: [
      'One contractor for both the equipment supply and the installation, so responsibility for test results is not split',
      'Crews experienced at both 115 kV transmission and 22 kV distribution voltage classes',
      'Outage planning and switching coordination handled with the utility as part of the scope',
      'Full test and commissioning records handed over, not just a completed installation',
      'Civil capability in-house, so foundations, trenching, and access do not need a second contractor',
    ],
  },

  'piling-foundation': {
    slug: 'piling-foundation',
    heroLede:
      'Driven piles, bored piles, sheet piling, and the substructure works that carry everything above them — the capability Apex has been delivering longest.',
    overview: [
      'Foundation and piling work is where Apex started, and it remains the part of the business with the deepest track record. The scope runs from setting out and pile installation through testing, trimming, pile caps, and ground beams — the point at which a superstructure contractor can begin.',
      'Which technique fits is a ground question, not a preference. Driven precast piles are fast and give a clear set record where ground conditions suit them. Bored piles suit variable strata, restricted headroom, or sites where driving vibration would be unacceptable near existing structures. Sheet piling supports excavations and river works. We recommend against the geotechnical report and the site constraints, and we say so when the specified method is the wrong one.',
      'Foundation work is unforgiving because it is buried. Testing and record-keeping are therefore treated as part of the deliverable: set records, integrity tests, load tests where specified, and as-built pile positions.',
    ],
    whoItsFor: [
      'Building contractors and developers needing the substructure package delivered before the frame starts',
      'Bridge and infrastructure projects requiring piled foundations for piers and abutments',
      'Industrial clients founding heavy plant, tanks, silos, or crane bases',
      'Projects on soft or variable ground where bearing capacity has to be engineered rather than assumed',
      'Sites needing excavation support, cofferdams, or retaining structures',
    ],
    topics: [
      {
        heading: 'Driven piles',
        body: 'Precast concrete and steel piles driven to set or to design depth with hammer plant sized to the section and the ground. Driving records — blow counts, penetration, final set — are kept per pile and issued with the handover package, because the set record is the primary evidence that the pile achieved its design capacity.',
      },
      {
        heading: 'Bored piles',
        body: 'Cast-in-situ piles bored and concreted in place, with temporary casing or support fluid where the bore will not stand. Bored piling is the answer where strata are variable, where obstructions are expected, where headroom is restricted, or where driving vibration would risk damage to adjacent structures — a common constraint on urban infill sites.',
      },
      {
        heading: 'Sheet piling and excavation support',
        body: 'Sheet pile walls for excavation support, cofferdams, riverbank and abutment works, and temporary works generally. Sheet piling is often what makes a deep excavation possible at all, and it is designed and installed as an engineered temporary structure rather than improvised on site.',
      },
      {
        heading: 'Pile testing',
        body: 'Static load testing, dynamic testing, and integrity testing, carried out to the frequency the specification requires and reported formally. Where results fall short of the design assumption, the finding is reported to the client and the engineer immediately — a pile that has quietly failed its test is the most expensive thing on any site.',
      },
      {
        heading: 'Pile caps, ground beams, and earthworks',
        body: 'Once piles are installed and accepted, the substructure is completed: pile trimming and cropping, reinforcement, pile caps, ground beams and tie beams, plus the associated excavation, dewatering, backfill, and compaction. Taking the package through to this point means the superstructure contractor inherits a level, surveyed, ready-to-build platform.',
      },
    ],
    process: [
      {
        title: 'Review the ground investigation',
        description:
          'We read the geotechnical report against the proposed loads and site constraints, and confirm whether the specified pile type and depth are the right ones.',
      },
      {
        title: 'Method statement and setting out',
        description:
          'We agree the piling method, plant, and sequence, then set out pile positions by instrument and record them before installation.',
      },
      {
        title: 'Install and record',
        description:
          'We install the piles with our own plant and crews, keeping a per-pile record of set, depth, concrete volume, or the equivalent for the method used.',
      },
      {
        title: 'Test and verify',
        description:
          'We carry out the specified integrity and load testing, report results formally, and raise any non-conformance with the engineer straight away.',
      },
      {
        title: 'Complete the substructure',
        description:
          'We trim the piles and construct the caps, ground beams, and associated earthworks, handing over an as-built survey of the finished substructure.',
      },
    ],
    standards: {
      intro:
        'Foundation scopes are executed against the project documents and the applicable technical standards, typically including:',
      items: [
        'The geotechnical investigation report and the engineer’s foundation design',
        'Structural drawings, pile schedules, and specified working loads',
        'The specified testing regime — integrity, static load, or dynamic testing and its frequency',
        'Concrete and reinforcement specifications, including mix design and cover requirements',
        'Temporary works design for excavation support, shoring, and cofferdams',
        'Project safety, environmental, and quality plans',
      ],
      note: 'Ground rarely matches the borehole log exactly. Where conditions on site differ materially from the investigation, we stop, record, and refer it to the engineer before continuing.',
    },
    timelineNote:
      'Programme depends on pile count and depth, ground conditions actually encountered, plant availability, access, and the testing regime. Rig productivity varies significantly between sites, so we programme against the confirmed pile schedule and report progress per pile rather than quoting a rate in advance.',
    howWeHelp: [
      'Driven, bored, and sheet piling in-house — the method is chosen for the ground, not for the plant we happen to own',
      'The longest track record of any Apex capability, across buildings, bridges, and industrial foundations',
      'Per-pile records and formal test reporting handed over as part of the deliverable',
      'Substructure taken through to pile caps and ground beams, so the frame contractor starts on a finished platform',
      'Non-conformances raised immediately rather than discovered later, when a buried pile is far more expensive to fix',
    ],
  },

  'roads-bridges': {
    slug: 'roads-bridges',
    heroLede:
      'Road corridors, rehabilitation, reinforced concrete bridges, culverts, and drainage — built from subgrade up, with the drainage designed to survive the wet season.',
    overview: [
      'Apex builds and rehabilitates roads and the structures that carry them across water. Scope covers clearing and earthworks, subgrade and base courses, concrete and asphalt surfacing, bridges, box and pipe culverts, side drains and outfalls, slope protection, and road safety furniture.',
      'In Lao conditions, the deciding factor on how long a road lasts is usually drainage and compaction, not surfacing. Water that is not taken away from the formation will find its way into it, and a subgrade that was never properly compacted will show through any surface laid on top. We build and test to that reality: compaction is tested to the specified frequency, and drainage is constructed to the design rather than trimmed when the programme tightens.',
      'Bridge work is reinforced concrete construction — foundations, often piled by our own crews, then piers, abutments, beams, and deck, with the approach embankments and slope protection that connect the structure to the road.',
    ],
    whoItsFor: [
      'Public authorities and provincial agencies procuring road and bridge works',
      'Development projects and concessions requiring access roads, internal roads, or river crossings',
      'Industrial, mining, and energy sites needing heavy-duty access and haul roads',
      'Property developers building the road and drainage infrastructure inside a new estate',
      'Owners of existing roads requiring rehabilitation, overlay, or drainage remediation',
    ],
    topics: [
      {
        heading: 'Road construction',
        body: 'New corridors from clearing and grubbing, through cut and fill, embankment construction, subgrade preparation, sub-base and base courses, to the specified surfacing. Compaction is tested at the specified frequency and the results recorded layer by layer — the layer under the one being tested cannot be re-done afterwards.',
      },
      {
        heading: 'Rehabilitation and overlay',
        body: 'Existing carriageways reconstructed, patched, or overlaid. Rehabilitation begins with finding out why the road failed: in most cases the answer is water in the pavement structure, in which case an overlay alone buys a short reprieve and the drainage has to be corrected as part of the works.',
      },
      {
        heading: 'Bridges',
        body: 'Reinforced concrete bridges built from the foundations up — piled or spread foundations, piers and abutments, beams, deck, parapets, bearings, and expansion joints — together with wing walls, approach embankments, and scour protection. Where the foundations are piled, they are installed by our own piling crews under the same contract.',
      },
      {
        heading: 'Culverts and drainage',
        body: 'Box culverts, pipe culverts, side and catch drains, headwalls, and outfalls. Drainage is sized to the design flow and built to fall correctly, because a culvert set at the wrong invert level is a permanent defect that no amount of maintenance will fix.',
      },
      {
        heading: 'Slope protection and road furniture',
        body: 'Gabions, riprap, retaining walls, and vegetation-based erosion control on cuttings and embankments, plus guardrail, signage, road markings, and delineation. On rural corridors, slope protection is usually what determines whether the road survives its first heavy wet season intact.',
      },
    ],
    process: [
      {
        title: 'Survey and set out the corridor',
        description:
          'We survey the alignment or existing carriageway, confirm levels and drainage outfalls, and set out the works against the design.',
      },
      {
        title: 'Confirm materials and mix designs',
        description:
          'We identify borrow and quarry sources, test the materials against the specification, and agree the concrete and asphalt mix designs before production.',
      },
      {
        title: 'Earthworks and structures',
        description:
          'We construct the earthworks, drainage, and structures — bridges and culverts are usually programmed early so they are not holding up the pavement.',
      },
      {
        title: 'Pavement construction',
        description:
          'We build the pavement layer by layer, testing compaction and levels at each layer before the next one covers it.',
      },
      {
        title: 'Finishing and handover',
        description:
          'We complete slope protection, road furniture, and markings, then hand over as-built drawings and the material and compaction test records.',
      },
    ],
    standards: {
      intro:
        'Road and bridge scopes are executed against the contract documents and applicable standards, typically including:',
      items: [
        'The employer’s or consultant’s design drawings, alignment, and typical cross-sections',
        'The project technical specification for earthworks, pavement layers, concrete, and asphalt',
        'Specified material testing and compaction testing frequencies',
        'Lao regulations and permits for road works, traffic management, and environmental control',
        'Structural design and load requirements for bridges and major culverts',
        'Project safety, environmental, and quality plans',
      ],
      note: 'Where a design conflicts with what the ground or the existing drainage actually does, we raise it with the engineer in writing rather than building a defect to drawing.',
    },
    timelineNote:
      'Programme on road and bridge works is weather-driven. Earthworks and pavement layers cannot be built to specification in sustained rain, so a realistic programme is written around the wet season rather than through it. We programme against the confirmed scope and report progress against it.',
    howWeHelp: [
      'Piling capability in-house, so bridge foundations do not need a separate contractor or a separate programme',
      'Drainage built to design rather than reduced when the programme tightens — it is what decides how long the road lasts',
      'Compaction and material test records kept layer by layer and handed over at completion',
      'Experience across the range, from provincial corridors to internal estate roads and heavy-duty haul roads',
      'Wet-season realism built into the programme instead of discovered halfway through it',
    ],
  },

  'buildings-property': {
    slug: 'buildings-property',
    heroLede:
      'Commercial, residential, and industrial buildings delivered from substructure to handover — and land and property developed with Apex taking the development role itself.',
    overview: [
      'Apex builds commercial, residential, and industrial buildings, and separately acts as a developer on its own account. As a contractor, the scope runs from substructure through the structural frame, envelope, building services, and finishes to handover. As a developer, Apex takes land through feasibility, permitting, construction, and into sale or lease.',
      'The useful part of the combination is self-delivery. Piling, site infrastructure, and the electrical installation are all in-house capabilities, so a building project does not depend on three separate contractors agreeing whose delay it was. On a site that needs a substation as well as a structure, both come from the same organisation.',
      'On the development side, Apex is putting its own capital at risk, which sets a different standard for how carefully the ground, the services, and the approvals are checked before construction starts.',
    ],
    whoItsFor: [
      'Owners and investors procuring a commercial, residential, or industrial building',
      'Businesses needing a warehouse, workshop, or light industrial facility with the hardstanding and power to match',
      'Developers requiring a contractor who can also deliver the site infrastructure and electrical connection',
      'Owners of existing buildings planning renovation, extension, or fit-out',
      'Landowners and partners looking at joint development of a site',
    ],
    topics: [
      {
        heading: 'Commercial and residential buildings',
        body: 'Offices, retail, mixed-use, houses, and apartment blocks, delivered from substructure to handover. Scope typically covers the reinforced concrete frame, envelope, roofing, internal partitions, finishes, and the building services installation, coordinated to a single programme under one contract.',
      },
      {
        heading: 'Industrial and warehouse buildings',
        body: 'Warehouses, workshops, and light industrial facilities, including the floor slab and external hardstanding designed for the actual loading — forklift, truck, or rack — rather than a generic slab specification. Industrial buildings usually carry a meaningful electrical load, which is where the in-house MV capability tends to matter most.',
      },
      {
        heading: 'Structural works',
        body: 'Reinforced concrete frames, slabs, cores, and precast erection, founded on piling installed by our own crews where the ground requires it. Concrete is placed to the approved mix design with cube testing at the specified frequency, and the results form part of the handover documentation.',
      },
      {
        heading: 'Building services and connection',
        body: 'Electrical installation, water supply, drainage, and ventilation within the building, plus the incoming connection — including the transformer, MV switchgear, and substation where the load requires one. Because Apex builds distribution networks as well, the connection is treated as part of the building scope rather than someone else’s problem.',
      },
      {
        heading: 'Real estate development',
        body: 'Where Apex takes the development role, the work covers site assessment and feasibility, land and permitting processes, master planning with the design team, delivery of site infrastructure and buildings, and the route to market through sale or lease. Development projects are run as their own commercial undertakings with their own approval gates.',
      },
    ],
    process: [
      {
        title: 'Brief and site assessment',
        description:
          'We review the brief against the site: ground conditions, access, available power and water, drainage outfalls, and the approvals the project will need.',
      },
      {
        title: 'Design coordination and pricing',
        description:
          'We work with the client’s design team to coordinate the drawings, identify the buildability issues early, and price the confirmed scope.',
      },
      {
        title: 'Substructure',
        description:
          'We deliver the piling, foundations, and site works with our own crews, so the frame starts on a surveyed and accepted platform.',
      },
      {
        title: 'Structure, envelope, and services',
        description:
          'We build the frame, close the envelope, and install the building services and incoming electrical connection to one coordinated programme.',
      },
      {
        title: 'Finishes, commissioning, and handover',
        description:
          'We complete the finishes, commission the services, and hand over as-built drawings, test records, and equipment documentation.',
      },
    ],
    standards: {
      intro:
        'Building scopes are executed against the contract documents and applicable standards, typically including:',
      items: [
        'Architectural, structural, and services design drawings and specifications',
        'Lao building regulations, construction permits, and local authority requirements',
        'Concrete, reinforcement, and structural steel specifications, with the specified testing frequency',
        'Electrical installation standards and the utility’s connection requirements where a supply is involved',
        'Fire safety and life safety requirements applicable to the building type',
        'Project safety, environmental, and quality plans',
      ],
      note: 'Where the architectural, structural, and services drawings disagree — which on most projects they eventually do — we resolve it with the design team before building, not after.',
    },
    timelineNote:
      'Programme depends on the design being complete enough to build from, on permitting, and on the lead time of imported materials and equipment. Late design changes and late approvals are the two things that most often move a completion date, so we track both explicitly and report their programme effect as it happens.',
    howWeHelp: [
      'Piling, civils, structure, and electrical installation all delivered in-house under one programme',
      'The incoming power connection, substation included, treated as part of the building scope',
      'Slabs and hardstanding designed for the loading the building will actually see',
      'Concrete and installation test records handed over with the as-built documentation',
      'Developer as well as contractor — Apex has taken the same commercial risk its clients take',
    ],
  },
}
