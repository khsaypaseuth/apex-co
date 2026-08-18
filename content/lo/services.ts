import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Lao translation of `content/en/services.ts`. Slugs are generated from the
 * ENGLISH titles in the source file, so they must be passed explicitly here —
 * generating them from Lao script would produce empty slugs and break the
 * cross-locale URLs.
 */

function service(
  category: ServiceCategorySlug,
  slug: string,
  title: string,
  summary: string,
): Service {
  return { slug, category, title, summary }
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'electrical-supply-installation',
    categorySlug: 'electrical',
    title: 'ສະໜອງ ແລະ ຕິດຕັ້ງລະບົບໄຟຟ້າ',
    summary:
      'ວຽກງານສາຍສົ່ງ ແລະ ສາຍຈຳໜ່າຍ 115 ກິໂລໂວນ ແລະ 22 ກິໂລໂວນ, ການກໍ່ສ້າງສະຖານີໄຟຟ້າ, ພ້ອມທັງສະໜອງອຸປະກອນໄຟຟ້າແຮງຕ່ຳ, ແຮງກາງ ແລະ ແຮງສູງ — ກໍ່ສ້າງ, ທົດສອບ ແລະ ຈ່າຍໄຟ.',
    services: [
      service('electrical', '115-kv-transmission-lines', 'ສາຍສົ່ງ 115 ກິໂລໂວນ', 'ສຳຫຼວດແນວສາຍ, ຮາກຖານ, ຕິດຕັ້ງເສົາໂຄງເຫຼັກ ແລະ ດຶງສາຍໄຟສຳລັບສາຍສົ່ງເໜືອດິນ 115 ກິໂລໂວນ.'),
      service('electrical', '115-22-kv-substations', 'ສະຖານີໄຟຟ້າ 115/22 ກິໂລໂວນ', 'ວຽກໂຍທາ, ໂຄງສ້າງ, ຕິດຕັ້ງອຸປະກອນຫຼັກ ແລະ ການທົດສອບເດີນເຄື່ອງສະຖານີ.'),
      service('electrical', '22-kv-distribution-networks', 'ເຄືອຂ່າຍຈຳໜ່າຍ 22 ກິໂລໂວນ', 'ສາຍຈຳໜ່າຍແຮງກາງທັງເໜືອດິນ ແລະ ໃຕ້ດິນ, ການຂະຫຍາຍ ແລະ ເສີມຄວາມແຂງແຮງຂອງລະບົບ.'),
      service('electrical', 'overhead-line-construction', 'ກໍ່ສ້າງສາຍໄຟເໜືອດິນ', 'ຕິດຕັ້ງເສົາ ແລະ ໂຄງເຫຼັກ, ປະກອບຄານ, ຕິດລູກຖ້ວຍ ແລະ ດຶງສາຍ.'),
      service('electrical', 'underground-cable-works', 'ວຽກສາຍເຄເບີນໃຕ້ດິນ', 'ຂຸດຮ່ອງ, ວາງທໍ່, ດຶງສາຍ, ຕໍ່ສາຍ ແລະ ເຮັດຫົວສາຍສຳລັບວົງຈອນແຮງກາງ ແລະ ແຮງຕ່ຳ.'),
      service('electrical', 'transformer-supply-installation', 'ສະໜອງ ແລະ ຕິດຕັ້ງໝໍ້ແປງ', 'ໝໍ້ແປງຈຳໜ່າຍ ແລະ ໝໍ້ແປງກຳລັງ ສະໜອງ, ຕິດຕັ້ງ, ຕໍ່ເຊື່ອມ ແລະ ທົດສອບ.'),
      service('electrical', 'switchgear-protection-panels', 'ຕູ້ສະວິດ ແລະ ຕູ້ປ້ອງກັນ', 'ຕູ້ສະວິດແຮງກາງ, RMU, ຕູ້ປ້ອງກັນ ແລະ ຄວບຄຸມ, ພ້ອມການຕັ້ງຄ່າຣີເລ.'),
      service('electrical', 'low-voltage-building-electrical', 'ໄຟຟ້າແຮງຕ່ຳ ແລະ ໄຟຟ້າອາຄານ', 'ຕູ້ຈ່າຍໄຟຫຼັກ, ສາຍປ້ອນຍ່ອຍ, ປລັກໄຟ, ໄຟແສງສະຫວ່າງ ແລະ ລະບົບກຼາວສຳລັບອາຄານ.'),
      service('electrical', 'electrical-equipment-supply', 'ສະໜອງອຸປະກອນໄຟຟ້າ', 'ຈັດຊື້ ແລະ ສະໜອງອຸປະກອນໄຟຟ້າແຮງຕ່ຳ, ແຮງກາງ ແລະ ແຮງສູງ, ສາຍໄຟ ແລະ ອຸປະກອນປະກອບ.'),
      service('electrical', 'testing-commissioning', 'ທົດສອບ ແລະ ເດີນເຄື່ອງ', 'ທົດສອບກ່ອນຈ່າຍໄຟ, ກວດລະບົບປ້ອງກັນ ແລະ ເດີນເຄື່ອງຕາມຂໍ້ກຳນົດຂອງລັດວິສາຫະກິດໄຟຟ້າ.'),
      service('electrical', 'earthing-lightning-protection', 'ລະບົບກຼາວ ແລະ ປ້ອງກັນຟ້າຜ່າ', 'ຕາຂ່າຍກຼາວ, ຫຼັກກຼາວ, ການເຊື່ອມຕໍ່ ແລະ ລະບົບປ້ອງກັນຟ້າຜ່າສຳລັບສະຖານີ ແລະ ອາຄານ.'),
      service('electrical', 'maintenance-fault-response', 'ບຳລຸງຮັກສາ ແລະ ແກ້ໄຂເຫດຂັດຂ້ອງ', 'ບຳລຸງຮັກສາຕາມແຜນ, ກວດກາ ແລະ ບໍລິການເອີ້ນດ່ວນສຳລັບລະບົບທີ່ຕິດຕັ້ງແລ້ວ.'),
    ],
  },
  {
    id: 'foundation-piling-works',
    categorySlug: 'piling-foundation',
    title: 'ວຽກຮາກຖານ ແລະ ເສົາເຂັມ',
    summary:
      'ຕອກເສົາເຂັມ, ເຈາະເສົາເຂັມ, ທົດສອບເສົາເຂັມ ແລະ ວຽກໂຄງສ້າງໃຕ້ດິນທີ່ຮັບນ້ຳໜັກອາຄານ, ຂົວ ແລະ ເຄື່ອງຈັກໜັກ — ເປັນຄວາມສາມາດຕົ້ນກຳເນີດຂອງ Apex.',
    services: [
      service('piling-foundation', 'driven-pile-installation', 'ຕອກເສົາເຂັມ', 'ເສົາເຂັມຄອນກຣີດສຳເລັດຮູບ ແລະ ເສົາເຂັມເຫຼັກ ຕອກຈົນໄດ້ຄ່າຕ້ານ ຫຼື ຄວາມເລິກຕາມແບບ.'),
      service('piling-foundation', 'bored-pile-installation', 'ເຈາະເສົາເຂັມ', 'ເສົາເຂັມຫຼໍ່ໃນທີ່ ສຳລັບກໍລະນີທີ່ບໍ່ເໝາະກັບການຕອກ ຫຼື ຕ້ອງຈຳກັດການສັ່ນສະເທືອນ.'),
      service('piling-foundation', 'sheet-piling', 'ເສົາເຂັມແຜ່ນ', 'ກຳແພງເສົາເຂັມແຜ່ນສຳລັບຄ້ຳຍັນຫຼຸມຂຸດ, ຝາຍກັນນ້ຳ ແລະ ວຽກແຄມນ້ຳ.'),
      service('piling-foundation', 'pile-load-testing', 'ທົດສອບກຳລັງຮັບນ້ຳໜັກເສົາເຂັມ', 'ທົດສອບແບບສະຖິດ, ແບບພຼວັດ ແລະ ທົດສອບຄວາມສົມບູນ ພ້ອມລາຍງານຜົນ.'),
      service('piling-foundation', 'pile-caps-substructure', 'ຫົວເສົາເຂັມ ແລະ ໂຄງສ້າງໃຕ້ດິນ', 'ຕັດຫົວເສົາເຂັມ, ຜູກເຫຼັກ, ຫຼໍ່ຫົວເສົາເຂັມ, ຄານຄອດດິນ ແລະ ຄານຍຶດ.'),
      service('piling-foundation', 'excavation-earthworks', 'ຂຸດດິນ ແລະ ວຽກດິນ', 'ຂຸດດິນປະລິມານຫຼາຍ ແລະ ຂຸດລະອຽດ, ສູບນ້ຳ, ຖົມກັບຄືນ ແລະ ບົດອັດ.'),
      service('piling-foundation', 'ground-improvement', 'ປັບປຸງຄຸນນະພາບດິນ', 'ປ່ຽນດິນ, ບົດອັດ ແລະ ເສີມສະຖຽນລະພາບບ່ອນທີ່ກຳລັງຮັບນ້ຳໜັກບໍ່ພຽງພໍ.'),
      service('piling-foundation', 'retaining-structures', 'ໂຄງສ້າງກັນດິນ', 'ກຳແພງກັນດິນ, ຄ້ຳຍັນ ແລະ ໂຄງສ້າງຊົ່ວຄາວເພື່ອຄວາມປອດໄພຂອງຫຼຸມຂຸດ.'),
      service('piling-foundation', 'setting-out-survey', 'ວາງຜັງ ແລະ ສຳຫຼວດ', 'ວາງຕຳແໜ່ງເສົາເຂັມດ້ວຍເຄື່ອງມືສຳຫຼວດ ແລະ ບັນທຶກແບບກໍ່ສ້າງຈິງ.'),
    ],
  },
  {
    id: 'road-bridge-construction',
    categorySlug: 'roads-bridges',
    title: 'ກໍ່ສ້າງທາງ ແລະ ຂົວ',
    summary:
      'ເສັ້ນທາງໃໝ່, ການສ້ອມແປງ, ຂົວ, ທໍ່ລອດ ແລະ ລະບົບລະບາຍນ້ຳ — ຕັ້ງແຕ່ຊັ້ນຮາກທາງຈົນເຖິງຜິວທາງ ແລະ ອຸປະກອນຄວາມປອດໄພ.',
    services: [
      service('roads-bridges', 'road-construction', 'ກໍ່ສ້າງທາງ', 'ເສັ້ນທາງໃໝ່ ຕັ້ງແຕ່ຖາງປ່າ, ຊັ້ນຮາກທາງ, ຊັ້ນຮອງພື້ນທາງ ຈົນເຖິງຜິວທາງ.'),
      service('roads-bridges', 'road-rehabilitation-overlay', 'ສ້ອມແປງ ແລະ ປູທັບຜິວທາງ', 'ກໍ່ສ້າງຄືນໃໝ່, ອຸດຫຼຸມ ແລະ ປູທັບຜິວທາງເກົ່າ.'),
      service('roads-bridges', 'bridge-construction', 'ກໍ່ສ້າງຂົວ', 'ຂົວຄອນກຣີດເສີມເຫຼັກ — ຮາກຖານ, ຕໍ່ມໍ້, ຕີນຂົວ, ຄານ ແລະ ພື້ນຂົວ.'),
      service('roads-bridges', 'culverts-drainage', 'ທໍ່ລອດ ແລະ ລະບາຍນ້ຳ', 'ທໍ່ລອດແບບກ່ອງ, ທໍ່ລອດກົມ, ຮ່ອງລະບາຍນ້ຳຂ້າງທາງ ແລະ ບ່ອນລະບາຍອອກ.'),
      service('roads-bridges', 'concrete-asphalt-paving', 'ປູຜິວຄອນກຣີດ ແລະ ຢາງ', 'ກໍ່ສ້າງຜິວທາງແບບແຂງ ແລະ ແບບຢືດຢຸ່ນ.'),
      service('roads-bridges', 'earthworks-subgrade', 'ວຽກດິນ ແລະ ຊັ້ນຮາກທາງ', 'ຕັດ-ຖົມ, ຄັນທາງ, ຕຽມຊັ້ນຮາກທາງ ແລະ ຄວບຄຸມການບົດອັດ.'),
      service('roads-bridges', 'slope-protection', 'ປ້ອງກັນລາດຄັນທາງ', 'ກ່ອງກາບີອົງ, ຫີນຖົມ, ກຳແພງກັນດິນ ແລະ ປ້ອງກັນການເຊາະເຈື່ອນ.'),
      service('roads-bridges', 'road-safety-furniture', 'ອຸປະກອນຄວາມປອດໄພທາງ', 'ຮາວກັນຕົກ, ປ້າຍຈະລາຈອນ, ເສັ້ນຈາລະຈອນ ແລະ ຫຼັກນຳທາງ.'),
      service('roads-bridges', 'access-haul-roads', 'ທາງເຂົ້າ ແລະ ທາງຂົນສົ່ງ', 'ທາງເຂົ້າຊົ່ວຄາວ ແລະ ທາງຂົນສົ່ງສຳລັບພື້ນທີ່ກໍ່ສ້າງ.'),
    ],
  },
  {
    id: 'building-real-estate',
    categorySlug: 'buildings-property',
    title: 'ກໍ່ສ້າງອາຄານ ແລະ ພັດທະນາອະສັງຫາລິມະສັບ',
    summary:
      'ອາຄານພານິດ, ທີ່ຢູ່ອາໄສ ແລະ ອຸດສາຫະກຳ ຕັ້ງແຕ່ໂຄງສ້າງໃຕ້ດິນຈົນສົ່ງມອບ — ພ້ອມທັງການພັດທະນາທີ່ດິນ ແລະ ອະສັງຫາລິມະສັບທີ່ Apex ເປັນຜູ້ພັດທະນາເອງ.',
    services: [
      service('buildings-property', 'commercial-buildings', 'ອາຄານພານິດ', 'ຫ້ອງການ, ຮ້ານຄ້າ ແລະ ອາຄານປະສົມ ຕັ້ງແຕ່ຮາກຖານຈົນສົ່ງມອບ.'),
      service('buildings-property', 'residential-buildings', 'ອາຄານທີ່ຢູ່ອາໄສ', 'ເຮືອນ, ອາພາດເມັນ ແລະ ອາຄານທີ່ຢູ່ອາໄສ ທັງແບບຫຼັງດຽວ ແລະ ເປັນຊຸດ.'),
      service('buildings-property', 'industrial-warehouse', 'ໂຮງງານ ແລະ ສາງສິນຄ້າ', 'ສາງ, ໂຮງຊ່າງ ແລະ ອາຄານອຸດສາຫະກຳເບົາ ພ້ອມພື້ນແຂງພາຍນອກ.'),
      service('buildings-property', 'structural-concrete-works', 'ວຽກໂຄງສ້າງຄອນກຣີດ', 'ໂຄງສ້າງຄອນກຣີດເສີມເຫຼັກ, ພື້ນ, ແກນອາຄານ ແລະ ຕິດຕັ້ງຊິ້ນສ່ວນສຳເລັດຮູບ.'),
      service('buildings-property', 'building-services-installation', 'ຕິດຕັ້ງລະບົບປະກອບອາຄານ', 'ຕິດຕັ້ງລະບົບໄຟຟ້າ, ນ້ຳປະປາ, ລະບາຍນ້ຳ ແລະ ລະບາຍອາກາດພາຍໃນອາຄານ.'),
      service('buildings-property', 'renovation-fit-out', 'ປັບປຸງ ແລະ ຕົກແຕ່ງພາຍໃນ', 'ສ້ອມແປງ, ຕໍ່ເຕີມ ແລະ ຕົກແຕ່ງພາຍໃນອາຄານທີ່ມີຢູ່ແລ້ວ.'),
      service('buildings-property', 'real-estate-development', 'ພັດທະນາອະສັງຫາລິມະສັບ', 'Apex ພັດທະນາທີ່ດິນ ແລະ ອາຄານເອງ ຕັ້ງແຕ່ການສຶກສາຄວາມເປັນໄປໄດ້ຈົນເຖິງການຂາຍ ຫຼື ໃຫ້ເຊົ່າ.'),
      service('buildings-property', 'land-site-infrastructure', 'ພື້ນຖານໂຄງລ່າງໃນເຂດພັດທະນາ', 'ທາງພາຍໃນ, ລະບາຍນ້ຳ, ນ້ຳປະປາ ແລະ ລະບົບໄຟຟ້າພາຍໃນໂຄງການ.'),
      service('buildings-property', 'project-construction-management', 'ບໍລິຫານໂຄງການ ແລະ ການກໍ່ສ້າງ', 'ບໍລິຫານແຜນງານ, ການຈັດຊື້ ແລະ ໜ້າງານແທນເຈົ້າຂອງໂຄງການ.'),
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
