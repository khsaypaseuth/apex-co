import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Lao services catalogue — the same five groups and 44 services as
 * `content/en/services.ts`, translated for a Lao professional audience
 * (Phase 7). Slugs are NOT derived from the Lao titles: they are copied
 * verbatim from the English file so `/services/*` URLs stay identical
 * across locales. Service names keep the English term in parentheses
 * where the English term is the one people actually use (e.g. Work Permit).
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
    id: 'business-setup-licensing',
    categorySlug: 'business-setup',
    title: 'ການສ້າງຕັ້ງທຸລະກິດ ແລະ ໃບອະນຸຍາດ',
    summary:
      'ຈາກການຈົດທະບຽນຄັ້ງທຳອິດ ຈົນເຖິງການຕໍ່ໃບອະນຸຍາດແຕ່ລະປີ — ການສະໜັບສະໜູນເພື່ອສ້າງຕັ້ງ ແລະ ຮັກສາທຸລະກິດຂອງທ່ານໃຫ້ຈົດທະບຽນຢ່າງຖືກຕ້ອງໃນລາວ.',
    services: [
      service(
        'business-setup',
        'company-registration',
        'ການຈົດທະບຽນບໍລິສັດ',
        'ການສ້າງຕັ້ງບໍລິສັດໃໝ່ ກັບໜ່ວຍງານລັດຂອງລາວທີ່ກ່ຽວຂ້ອງ.',
      ),
      service(
        'business-setup',
        'foreign-investment-registration',
        'ການຈົດທະບຽນການລົງທຶນຕ່າງປະເທດ',
        'ການສະໜັບສະໜູນການຈົດທະບຽນ ສຳລັບວິສາຫະກິດທີ່ມີການລົງທຶນຈາກຕ່າງປະເທດ.',
      ),
      service(
        'business-setup',
        'representative-office-registration',
        'ການຈົດທະບຽນຫ້ອງການຜູ້ຕາງໜ້າ (Representative Office)',
        'ການສ້າງຕັ້ງຫ້ອງການຜູ້ຕາງໜ້າ ຂອງບໍລິສັດຕ່າງປະເທດ.',
      ),
      service(
        'business-setup',
        'branch-office-registration',
        'ການຈົດທະບຽນສາຂາບໍລິສັດ (Branch Office)',
        'ການຈົດທະບຽນສາຂາ ຂອງບໍລິສັດຕ່າງປະເທດທີ່ມີຢູ່ແລ້ວ.',
      ),
      service(
        'business-setup',
        'business-license-applications',
        'ການຂໍໃບອະນຸຍາດດຳເນີນທຸລະກິດ',
        'ການກະກຽມ ແລະ ຍື່ນຄຳຮ້ອງຂໍໃບອະນຸຍາດດຳເນີນກິດຈະການ.',
      ),
      service(
        'business-setup',
        'industry-specific-licenses',
        'ໃບອະນຸຍາດສະເພາະຂະແໜງການ',
        'ໃບອະນຸຍາດທີ່ຈຳເປັນສຳລັບຂະແໜງການ ແລະ ກິດຈະການທີ່ມີການຄວບຄຸມ.',
      ),
      service(
        'business-setup',
        'tax-registration',
        'ການຈົດທະບຽນອາກອນ',
        'ການຈົດທະບຽນທຸລະກິດໃໝ່ ກັບຂະແໜງສ່ວຍສາອາກອນ.',
      ),
      service(
        'business-setup',
        'social-security-registration',
        'ການຂຶ້ນທະບຽນປະກັນສັງຄົມ',
        'ການຂຶ້ນທະບຽນບໍລິສັດ ແລະ ພະນັກງານ ເຂົ້າລະບົບປະກັນສັງຄົມ.',
      ),
      service(
        'business-setup',
        'company-amendments',
        'ການປ່ຽນແປງຂໍ້ມູນບໍລິສັດ',
        'ການປັບປຸງຂໍ້ມູນບໍລິສັດ, ຜູ້ຖືຮຸ້ນ ຫຼື ລາຍລະອຽດທີ່ຈົດທະບຽນໄວ້.',
      ),
      service(
        'business-setup',
        'business-license-renewal',
        'ການຕໍ່ໃບອະນຸຍາດດຳເນີນທຸລະກິດ',
        'ຮັກສາໃບອະນຸຍາດດຳເນີນກິດຈະການໃຫ້ມີຜົນສະເໝີ ດ້ວຍການຕໍ່ອາຍຸໃຫ້ທັນເວລາ.',
      ),
    ],
  },
  {
    id: 'visa-immigration-services',
    categorySlug: 'visa-immigration',
    title: 'ບໍລິການວີຊາ ແລະ ການເຂົ້າເມືອງ',
    summary:
      'ການສະໜັບສະໜູນດ້ານວີຊາ, ໃບອະນຸຍາດເຮັດວຽກ ແລະ ໃບອະນຸຍາດພັກເຊົາ ສຳລັບມືອາຊີບ, ນັກລົງທຶນ ແລະ ຄອບຄົວ ທີ່ອາໄສ ຫຼື ເຮັດວຽກຢູ່ລາວ.',
    services: [
      service(
        'visa-immigration',
        'business-visa',
        'ວີຊາທຸລະກິດ (Business Visa)',
        'ການສະໜັບສະໜູນວີຊາ ສຳລັບຜູ້ມາຕິດຕໍ່ທຸລະກິດ ແລະ ພາລະກິດໄລຍະສັ້ນ.',
      ),
      service(
        'visa-immigration',
        'investor-visa',
        'ວີຊານັກລົງທຶນ (Investor Visa)',
        'ການສະໜັບສະໜູນວີຊາ ສຳລັບນັກລົງທຶນທີ່ສ້າງຕັ້ງ ຫຼື ລົງທຶນໃນທຸລະກິດ.',
      ),
      service(
        'visa-immigration',
        'work-visa',
        'ວີຊາເຮັດວຽກ (Work Visa)',
        'ການສະໜັບສະໜູນວີຊາ ສຳລັບພະນັກງານຕ່າງປະເທດທີ່ເຮັດວຽກຢູ່ລາວ.',
      ),
      service(
        'visa-immigration',
        'work-permit',
        'ໃບອະນຸຍາດເຮັດວຽກ (Work Permit)',
        'ການຂໍ ແລະ ຕໍ່ໃບອະນຸຍາດເຮັດວຽກ ສຳລັບພະນັກງານຕ່າງປະເທດ.',
      ),
      service(
        'visa-immigration',
        'long-term-stay-visa',
        'ວີຊາພັກເຊົາໄລຍະຍາວ (Long-Term Stay Visa)',
        'ທາງເລືອກສຳລັບການພັກເຊົາໃນລາວໄລຍະຍາວ ພິຈາລະນາເປັນແຕ່ລະກໍລະນີ.',
      ),
      service(
        'visa-immigration',
        'visa-extension-renewal',
        'ການຕໍ່ອາຍຸວີຊາ (Visa Extension & Renewal)',
        'ການຕໍ່ ຫຼື ຂໍວີຊາທີ່ມີຢູ່ຄືນໃໝ່ ກ່ອນວີຊາຈະໝົດອາຍຸ.',
      ),
      service(
        'visa-immigration',
        'stay-permit',
        'ໃບອະນຸຍາດພັກເຊົາ (Stay Permit)',
        'ການຂໍໃບອະນຸຍາດພັກເຊົາ ສຳລັບຜູ້ອາໄສຢູ່ລາວທີ່ເປັນຄົນຕ່າງປະເທດ.',
      ),
      service(
        'visa-immigration',
        'immigration-consulting',
        'ທີ່ປຶກສາດ້ານການເຂົ້າເມືອງ',
        'ຄຳແນະນຳຕົວຈິງ ກ່ຽວກັບເສັ້ນທາງ ແລະ ເງື່ອນໄຂການເຂົ້າເມືອງ.',
      ),
      service(
        'visa-immigration',
        'document-preparation',
        'ການກະກຽມເອກະສານ',
        'ການກະກຽມ, ແປ ແລະ ຈັດລຽງເອກະສານປະກອບຄຳຮ້ອງ.',
      ),
      service(
        'visa-immigration',
        'government-liaison',
        'ການປະສານງານກັບພາກລັດ',
        'ການປະສານງານກັບໜ່ວຍງານທີ່ກ່ຽວຂ້ອງແທນທ່ານ.',
      ),
    ],
  },
  {
    id: 'corporate-legal-services',
    categorySlug: 'legal-family',
    title: 'ບໍລິການດ້ານກົດໝາຍບໍລິສັດ',
    summary:
      'ການສະໜັບສະໜູນດ້ານສັນຍາ, ການປະຕິບັດຕາມລະບຽບ, ການກວດສອບສະຖານະ ແລະ ຊັບສິນທາງປັນຍາ ສຳລັບບໍລິສັດທີ່ດຳເນີນທຸລະກິດໃນລາວ.',
    services: [
      service(
        'legal-family',
        'legal-consulting',
        'ທີ່ປຶກສາດ້ານກົດໝາຍ',
        'ຄຳແນະນຳທາງກົດໝາຍທີ່ນຳໃຊ້ໄດ້ຈິງ ສຳລັບການຕັດສິນໃຈທາງທຸລະກິດໃນລາວ.',
      ),
      service(
        'legal-family',
        'contract-review',
        'ການກວດສັນຍາ',
        'ກວດເບິ່ງສັນຍາກ່ອນທ່ານເຊັນ ດ້ວຍພາສາທີ່ເຂົ້າໃຈງ່າຍ.',
      ),
      service(
        'legal-family',
        'contract-drafting',
        'ການຮ່າງສັນຍາ',
        'ຮ່າງສັນຍາທີ່ຊັດເຈນ ແລະ ນຳໃຊ້ໄດ້ຈິງ ສຳລັບທຸລະກິດຂອງທ່ານ.',
      ),
      service(
        'legal-family',
        'corporate-compliance',
        'ການປະຕິບັດຕາມລະບຽບຂອງບໍລິສັດ',
        'ຮັກສາພັນທະ ແລະ ການລາຍງານຕ່າງໆຂອງບໍລິສັດ ໃຫ້ເປັນລະບຽບຮຽບຮ້ອຍ.',
      ),
      service(
        'legal-family',
        'due-diligence',
        'ການກວດສອບສະຖານະ (Due Diligence)',
        'ການກວດສອບປະຫວັດ ແລະ ຂໍ້ມູນຂອງຄູ່ຮ່ວມທຸລະກິດ, ຊັບສິນ ແລະ ທຸລະກຳ.',
      ),
      service(
        'legal-family',
        'trademark-registration',
        'ການຈົດທະບຽນເຄື່ອງໝາຍການຄ້າ (Trademark)',
        'ການຈົດທະບຽນ ແລະ ປົກປ້ອງເຄື່ອງໝາຍການຄ້າໃນລາວ.',
      ),
      service(
        'legal-family',
        'intellectual-property-support',
        'ການສະໜັບສະໜູນດ້ານຊັບສິນທາງປັນຍາ',
        'ການສະໜັບສະໜູນຕົວຈິງ ໃນການປົກປ້ອງຊັບສິນທາງປັນຍາ.',
      ),
      service(
        'legal-family',
        'company-legal-documentation',
        'ເອກະສານທາງກົດໝາຍຂອງບໍລິສັດ',
        'ການກະກຽມ ແລະ ຮັກສາເອກະສານທາງກົດໝາຍຫຼັກຂອງບໍລິສັດ.',
      ),
      service(
        'legal-family',
        'legal-liaison-support',
        'ການປະສານງານດ້ານກົດໝາຍ',
        'ການປະສານງານກັບໜ່ວຍງານລັດ ແລະ ຄູ່ສັນຍາ ໃນເລື່ອງທາງກົດໝາຍ.',
      ),
    ],
  },
  {
    id: 'family-personal-legal-services',
    categorySlug: 'legal-family',
    title: 'ບໍລິການດ້ານກົດໝາຍຄອບຄົວ ແລະ ສ່ວນບຸກຄົນ',
    summary:
      'ການສະໜັບສະໜູນເລື່ອງການແຕ່ງງານ, ເອກະສານຄອບຄົວ ແລະ ການພັກເຊົາໄລຍະຍາວ ທີ່ກ່ຽວຂ້ອງກັບຄົນລາວ ແລະ ຄົນຕ່າງປະເທດ.',
    services: [
      service(
        'legal-family',
        'marriage-registration-for-lao-and-foreign-nationals',
        'ການຈົດທະບຽນການແຕ່ງງານ ລະຫວ່າງຄົນລາວ ແລະ ຄົນຕ່າງປະເທດ',
        'ນຳພາຄູ່ສົມລົດຕ່າງສັນຊາດ ຜ່ານຂັ້ນຕອນການຈົດທະບຽນການແຕ່ງງານ.',
      ),
      service(
        'legal-family',
        'marriage-certificate-translation-and-legalisation-support',
        'ການແປ ແລະ ຢັ້ງຢືນໃບທະບຽນການແຕ່ງງານ',
        'ການແປ ແລະ ການຢັ້ງຢືນຄວາມຖືກຕ້ອງ (legalisation) ຂອງເອກະສານການແຕ່ງງານ.',
      ),
      service(
        'legal-family',
        'divorce-assistance',
        'ການຊ່ວຍເຫຼືອເລື່ອງການຢ່າຮ້າງ',
        'ການສະໜັບສະໜູນດ້ານເອກະສານ ແລະ ຂັ້ນຕອນ ໃນລະຫວ່າງການຢ່າຮ້າງ.',
      ),
      service(
        'legal-family',
        'family-documentation',
        'ເອກະສານຄອບຄົວ',
        'ການກະກຽມ ແລະ ແກ້ໄຂເອກະສານທາງການຂອງຄອບຄົວ.',
      ),
      service(
        'legal-family',
        'birth-certificate-support',
        'ການສະໜັບສະໜູນໃບຢັ້ງຢືນການເກີດ',
        'ການຊ່ວຍເຫຼືອເລື່ອງການແຈ້ງເກີດ ແລະ ໃບຢັ້ງຢືນການເກີດ.',
      ),
      service(
        'legal-family',
        'family-book-support',
        'ການສະໜັບສະໜູນປຶ້ມສຳມະໂນຄົວ',
        'ການຊ່ວຍເຫຼືອເລື່ອງການຂຶ້ນທະບຽນ ແລະ ປັບປຸງປຶ້ມສຳມະໂນຄົວ.',
      ),
      service(
        'legal-family',
        'long-term-stay-support-for-foreign-spouses',
        'ການພັກເຊົາໄລຍະຍາວ ສຳລັບຄູ່ສົມລົດຕ່າງປະເທດ',
        'ທາງເລືອກການພັກເຊົາ ສຳລັບຄູ່ສົມລົດຕ່າງປະເທດຂອງຄົນລາວ.',
      ),
    ],
  },
  {
    id: 'accounting-tax',
    categorySlug: 'accounting-tax',
    title: 'ບັນຊີ ແລະ ອາກອນ',
    summary:
      'ການເຮັດບັນຊີ, ການຍື່ນອາກອນ, ເງິນເດືອນ ແລະ ການປະຕິບັດຕາມລະບຽບປະຈຳປີ — ພື້ນຖານການເງິນທີ່ເຊື່ອຖືໄດ້ ສຳລັບທຸລະກິດຂອງທ່ານ.',
    services: [
      service(
        'accounting-tax',
        'accounting-services',
        'ບໍລິການບັນຊີ',
        'ການສະໜັບສະໜູນດ້ານບັນຊີ ທີ່ສອດຄ່ອງກັບລະບຽບການຂອງລາວ.',
      ),
      service(
        'accounting-tax',
        'bookkeeping',
        'ການບັນທຶກບັນຊີ (Bookkeeping)',
        'ບັນຊີທີ່ຖືກຕ້ອງ ແລະ ທັນສະໄໝສະເໝີ ສຳລັບທຸລະກິດຂອງທ່ານ.',
      ),
      service(
        'accounting-tax',
        'tax-registration',
        'ການຈົດທະບຽນອາກອນ',
        'ການຈົດທະບຽນທຸລະກິດຂອງທ່ານ ກັບຂະແໜງສ່ວຍສາອາກອນ.',
      ),
      service(
        'accounting-tax',
        'tax-filing',
        'ການຍື່ນອາກອນ',
        'ການກະກຽມ ແລະ ຍື່ນເອກະສານອາກອນຕາມກຳນົດເວລາ.',
      ),
      service(
        'accounting-tax',
        'payroll-services',
        'ບໍລິການເງິນເດືອນ (Payroll)',
        'ການຄິດໄລ່ເງິນເດືອນ ແລະ ການຍື່ນເອກະສານທີ່ກ່ຽວຂ້ອງ ສຳລັບທີມງານຂອງທ່ານ.',
      ),
      service(
        'accounting-tax',
        'financial-reporting',
        'ການລາຍງານການເງິນ',
        'ບົດລາຍງານການເງິນທີ່ຊັດເຈນ ສຳລັບເຈົ້າຂອງກິດຈະການ ແລະ ໜ່ວຍງານລັດ.',
      ),
      service(
        'accounting-tax',
        'annual-compliance-support',
        'ການສະໜັບສະໜູນການປະຕິບັດຕາມລະບຽບປະຈຳປີ',
        'ຕິດຕາມພັນທະການຍື່ນ ແລະ ການລາຍງານປະຈຳປີ ໃຫ້ຄົບຖ້ວນທັນເວລາ.',
      ),
      service(
        'accounting-tax',
        'tax-advisory',
        'ທີ່ປຶກສາດ້ານອາກອນ',
        'ຄຳແນະນຳດ້ານອາກອນທີ່ນຳໃຊ້ໄດ້ຈິງ ສຳລັບການຕັດສິນໃຈ ແລະ ການວາງແຜນ.',
      ),
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
