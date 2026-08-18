import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Apex's capability catalogue — four groups, one per `/services/[category]`
 * page.
 *
 * Voltage classes follow Lao practice: 115 kV is the transmission class and
 * 22 kV the medium-voltage distribution class. These are line voltages in kV,
 * not transformer ratings in kVA — see docs/APEX_REBRAND_PLAN.md D-5.
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
    id: 'electrical-supply-installation',
    categorySlug: 'electrical',
    title: 'Electrical Supply & Installation',
    summary:
      'Transmission and distribution works at 115 kV and 22 kV, substation construction, and the supply of low, medium, and high voltage equipment — built, tested, and energised.',
    services: [
      service('electrical', '115 kV Transmission Lines', 'Route survey, foundations, tower erection, and conductor stringing for 115 kV overhead lines.'),
      service('electrical', '115/22 kV Substations', 'Substation civil works, structures, primary plant installation, and commissioning.'),
      service('electrical', '22 kV Distribution Networks', 'Medium-voltage overhead and underground distribution feeders, extensions, and reinforcements.'),
      service('electrical', 'Overhead Line Construction', 'Pole and tower erection, cross-arm assembly, insulator fitting, and conductor stringing.'),
      service('electrical', 'Underground Cable Works', 'Trenching, ducting, cable pulling, jointing, and termination for MV and LV circuits.'),
      service('electrical', 'Transformer Supply & Installation', 'Distribution and power transformers supplied, positioned, connected, and tested.'),
      service('electrical', 'Switchgear & Protection Panels', 'MV switchgear, ring main units, protection and control panels, and relay settings.'),
      service('electrical', 'Low Voltage & Building Electrical', 'Main distribution boards, submains, small power, lighting, and earthing for buildings.'),
      service('electrical', 'Electrical Equipment Supply', 'Procurement and supply of low, medium, and high voltage equipment, cable, and accessories.'),
      service('electrical', 'Testing & Commissioning', 'Pre-energisation testing, protection checks, and commissioning to the utility’s requirements.'),
      service('electrical', 'Earthing & Lightning Protection', 'Earth grids, electrodes, bonding, and lightning protection for substations and buildings.'),
      service('electrical', 'Maintenance & Fault Response', 'Planned maintenance, inspections, and callout support for installed networks.'),
    ],
  },
  {
    id: 'foundation-piling-works',
    categorySlug: 'piling-foundation',
    title: 'Foundation & Piling Works',
    summary:
      'Driven and bored piling, pile testing, and the substructure works that carry buildings, bridges, and heavy plant — the capability Apex was built on.',
    services: [
      service('piling-foundation', 'Driven Pile Installation', 'Precast concrete and steel piles driven to set or to design depth.'),
      service('piling-foundation', 'Bored Pile Installation', 'Cast-in-situ bored piles where driving is unsuitable or vibration must be limited.'),
      service('piling-foundation', 'Sheet Piling', 'Sheet pile walls for excavation support, cofferdams, and river works.'),
      service('piling-foundation', 'Pile Load Testing', 'Static and dynamic load testing and integrity testing, with reporting.'),
      service('piling-foundation', 'Pile Caps & Substructure', 'Pile trimming, reinforcement, pile caps, ground beams, and tie works.'),
      service('piling-foundation', 'Excavation & Earthworks', 'Bulk and detailed excavation, dewatering, backfill, and compaction.'),
      service('piling-foundation', 'Ground Improvement', 'Replacement, compaction, and stabilisation where bearing capacity is marginal.'),
      service('piling-foundation', 'Retaining Structures', 'Retaining walls, shoring, and temporary works to keep excavations safe.'),
      service('piling-foundation', 'Setting Out & Survey', 'Instrument setting out of pile positions and as-built survey records.'),
    ],
  },
  {
    id: 'road-bridge-construction',
    categorySlug: 'roads-bridges',
    title: 'Road & Bridge Construction',
    summary:
      'New road corridors, rehabilitation, bridges, culverts, and drainage — from subgrade through to surfacing and road safety furniture.',
    services: [
      service('roads-bridges', 'Road Construction', 'New road corridors from clearing and subgrade through base courses to surfacing.'),
      service('roads-bridges', 'Road Rehabilitation & Overlay', 'Reconstruction, patching, and overlay of existing carriageways.'),
      service('roads-bridges', 'Bridge Construction', 'Reinforced concrete bridges — foundations, piers, abutments, beams, and deck.'),
      service('roads-bridges', 'Culverts & Drainage', 'Box culverts, pipe culverts, side drains, and outfall works.'),
      service('roads-bridges', 'Concrete & Asphalt Paving', 'Rigid and flexible pavement construction and surfacing.'),
      service('roads-bridges', 'Earthworks & Subgrade', 'Cut and fill, embankments, subgrade preparation, and compaction control.'),
      service('roads-bridges', 'Slope Protection', 'Gabions, riprap, retaining walls, and erosion control on cuttings and embankments.'),
      service('roads-bridges', 'Road Safety Furniture', 'Guardrail, signage, road markings, and delineation.'),
      service('roads-bridges', 'Access & Haul Roads', 'Temporary access and haul roads serving construction and plant sites.'),
    ],
  },
  {
    id: 'building-real-estate',
    categorySlug: 'buildings-property',
    title: 'Building Construction & Real Estate Development',
    summary:
      'Commercial, residential, and industrial buildings delivered structure-to-handover — plus land and property development where Apex takes the development role itself.',
    services: [
      service('buildings-property', 'Commercial Buildings', 'Offices, retail, and mixed-use buildings from substructure to handover.'),
      service('buildings-property', 'Residential Buildings', 'Houses, apartments, and residential blocks, single units or in series.'),
      service('buildings-property', 'Industrial & Warehouse', 'Warehouses, workshops, and light industrial buildings, including hardstanding.'),
      service('buildings-property', 'Structural Concrete Works', 'Reinforced concrete frames, slabs, cores, and precast erection.'),
      service('buildings-property', 'Building Services Installation', 'Electrical, water supply, drainage, and ventilation installation within buildings.'),
      service('buildings-property', 'Renovation & Fit-Out', 'Refurbishment, extension, and interior fit-out of existing buildings.'),
      service('buildings-property', 'Real Estate Development', 'Apex-led development of land and buildings, from feasibility to sale or lease.'),
      service('buildings-property', 'Land & Site Infrastructure', 'Site roads, drainage, water, and power reticulation serving a development.'),
      service('buildings-property', 'Project & Construction Management', 'Programme, procurement, and site management on behalf of the owner.'),
    ],
  },
]

/** All individual services, flattened. */
export const allServices: Service[] = serviceGroups.flatMap(
  (group) => group.services,
)

/** Service groups shown on a given capability page. */
export function groupsForCategory(slug: ServiceCategorySlug): ServiceGroup[] {
  return serviceGroups.filter((group) => group.categorySlug === slug)
}
