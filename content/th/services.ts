import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Thai services catalogue — the same five groups and 44 services as
 * `content/en/services.ts`, translated for a Thai-reading audience. Slugs
 * are NOT derived from the Thai titles: they are copied verbatim from the
 * English file so `/services/*` URLs stay identical across locales.
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
    title: 'การจัดตั้งธุรกิจและใบอนุญาต',
    summary:
      'ตั้งแต่การจดทะเบียนครั้งแรกไปจนถึงการต่อใบอนุญาตอย่างต่อเนื่อง — การสนับสนุนเพื่อจัดตั้งและรักษาธุรกิจของท่านให้จดทะเบียนอย่างถูกต้องในลาว',
    services: [
      service('business-setup', 'company-registration', 'การจดทะเบียนบริษัท', 'การจัดตั้งบริษัทใหม่กับหน่วยงานราชการลาวที่เกี่ยวข้อง'),
      service('business-setup', 'foreign-investment-registration', 'การจดทะเบียนการลงทุนจากต่างประเทศ', 'การสนับสนุนการจดทะเบียนสำหรับวิสาหกิจที่มีการลงทุนจากต่างชาติ'),
      service('business-setup', 'representative-office-registration', 'การจดทะเบียนสำนักงานตัวแทน', 'การจัดตั้งสำนักงานตัวแทนสำหรับบริษัทต่างชาติ'),
      service('business-setup', 'branch-office-registration', 'การจดทะเบียนสำนักงานสาขา', 'การจดทะเบียนสาขาของบริษัทต่างชาติที่มีอยู่แล้ว'),
      service('business-setup', 'business-license-applications', 'การยื่นคำร้องขอใบอนุญาตประกอบธุรกิจ', 'การเตรียมและยื่นคำร้องขอใบอนุญาตประกอบกิจการ'),
      service('business-setup', 'industry-specific-licenses', 'ใบอนุญาตเฉพาะอุตสาหกรรม', 'ใบอนุญาตที่จำเป็นสำหรับภาคธุรกิจและกิจกรรมที่มีการควบคุม'),
      service('business-setup', 'tax-registration', 'การจดทะเบียนภาษี', 'การจดทะเบียนธุรกิจใหม่กับหน่วยงานสรรพากร'),
      service('business-setup', 'social-security-registration', 'การจดทะเบียนประกันสังคม', 'การจดทะเบียนบริษัทและพนักงานเข้าสู่ระบบประกันสังคม'),
      service('business-setup', 'company-amendments', 'การแก้ไขข้อมูลบริษัท', 'การปรับปรุงข้อมูลบริษัท ผู้ถือหุ้น หรือรายละเอียดที่จดทะเบียน'),
      service('business-setup', 'business-license-renewal', 'การต่ออายุใบอนุญาตประกอบธุรกิจ', 'การรักษาใบอนุญาตประกอบกิจการให้เป็นปัจจุบันผ่านการต่ออายุที่ตรงเวลา'),
    ],
  },
  {
    id: 'visa-immigration-services',
    categorySlug: 'visa-immigration',
    title: 'บริการวีซ่าและการตรวจคนเข้าเมือง',
    summary:
      'การสนับสนุนด้านวีซ่า ใบอนุญาตทำงาน และใบอนุญาตพำนัก สำหรับผู้เชี่ยวชาญ นักลงทุน และครอบครัวที่อาศัยหรือทำงานในลาว',
    services: [
      service('visa-immigration', 'business-visa', 'วีซ่าธุรกิจ', 'การสนับสนุนวีซ่าสำหรับผู้มาติดต่อธุรกิจและภารกิจระยะสั้น'),
      service('visa-immigration', 'investor-visa', 'วีซ่านักลงทุน', 'การสนับสนุนวีซ่าสำหรับนักลงทุนที่จัดตั้งหรือลงทุนในธุรกิจ'),
      service('visa-immigration', 'work-visa', 'วีซ่าทำงาน', 'การสนับสนุนวีซ่าสำหรับพนักงานต่างชาติที่ทำงานในลาว'),
      service('visa-immigration', 'work-permit', 'ใบอนุญาตทำงาน', 'การยื่นคำร้องและต่ออายุใบอนุญาตทำงานสำหรับพนักงานต่างชาติ'),
      service('visa-immigration', 'long-term-stay-visa', 'วีซ่าพำนักระยะยาว', 'ทางเลือกสำหรับการพำนักระยะยาวในลาว ประเมินเป็นรายกรณี'),
      service('visa-immigration', 'visa-extension-renewal', 'การขยายและต่ออายุวีซ่า', 'การขยายหรือต่ออายุวีซ่าที่มีอยู่ก่อนหมดอายุ'),
      service('visa-immigration', 'stay-permit', 'ใบอนุญาตพำนัก', 'การยื่นคำร้องขอใบอนุญาตพำนักสำหรับผู้พำนักชาวต่างชาติ'),
      service('visa-immigration', 'immigration-consulting', 'ที่ปรึกษาด้านการตรวจคนเข้าเมือง', 'คำแนะนำเชิงปฏิบัติเกี่ยวกับแนวทางและข้อกำหนดด้านการตรวจคนเข้าเมือง'),
      service('visa-immigration', 'document-preparation', 'การเตรียมเอกสาร', 'การเตรียม การแปล และการจัดระเบียบเอกสารประกอบคำร้อง'),
      service('visa-immigration', 'government-liaison', 'การประสานงานกับหน่วยงานราชการ', 'การประสานงานกับหน่วยงานที่เกี่ยวข้องในนามของท่าน'),
    ],
  },
  {
    id: 'corporate-legal-services',
    categorySlug: 'legal-family',
    title: 'บริการกฎหมายองค์กร',
    summary:
      'การสนับสนุนด้านสัญญา การปฏิบัติตามข้อกำหนด การตรวจสอบสถานะทางกฎหมาย และทรัพย์สินทางปัญญาสำหรับบริษัทที่ดำเนินกิจการในลาว',
    services: [
      service('legal-family', 'legal-consulting', 'ที่ปรึกษากฎหมาย', 'คำแนะนำด้านกฎหมายเชิงปฏิบัติสำหรับการตัดสินใจทางธุรกิจในลาว'),
      service('legal-family', 'contract-review', 'การตรวจสอบสัญญา', 'การตรวจสอบสัญญาก่อนลงนาม ด้วยภาษาที่เข้าใจง่าย'),
      service('legal-family', 'contract-drafting', 'การร่างสัญญา', 'การร่างสัญญาที่ชัดเจนและใช้งานได้จริงสำหรับธุรกิจของท่าน'),
      service('legal-family', 'corporate-compliance', 'การปฏิบัติตามข้อกำหนดขององค์กร', 'การดูแลพันธะและการยื่นเอกสารของบริษัทให้เป็นระเบียบเรียบร้อย'),
      service('legal-family', 'due-diligence', 'การตรวจสอบสถานะทางกฎหมาย', 'การตรวจสอบภูมิหลังของหุ้นส่วน ทรัพย์สิน และธุรกรรม'),
      service('legal-family', 'trademark-registration', 'การจดทะเบียนเครื่องหมายการค้า', 'การจดทะเบียนและปกป้องเครื่องหมายการค้าในลาว'),
      service('legal-family', 'intellectual-property-support', 'การสนับสนุนด้านทรัพย์สินทางปัญญา', 'การสนับสนุนเชิงปฏิบัติในการปกป้องทรัพย์สินทางปัญญา'),
      service('legal-family', 'company-legal-documentation', 'เอกสารทางกฎหมายของบริษัท', 'การเตรียมและดูแลรักษาเอกสารทางกฎหมายหลักของบริษัท'),
      service('legal-family', 'legal-liaison-support', 'การสนับสนุนการประสานงานด้านกฎหมาย', 'การประสานงานกับหน่วยงานและคู่สัญญาในเรื่องทางกฎหมาย'),
    ],
  },
  {
    id: 'family-personal-legal-services',
    categorySlug: 'legal-family',
    title: 'บริการกฎหมายครอบครัวและส่วนบุคคล',
    summary:
      'การสนับสนุนด้านการสมรส เอกสารครอบครัว และเรื่องการพำนักระยะยาวที่เกี่ยวข้องกับพลเมืองลาวและชาวต่างชาติ',
    services: [
      service('legal-family', 'marriage-registration-for-lao-and-foreign-nationals', 'การจดทะเบียนสมรสสำหรับพลเมืองลาวและชาวต่างชาติ', 'การให้คำแนะนำคู่สมรสที่มีสัญชาติต่างกันตลอดการจดทะเบียนสมรส'),
      service('legal-family', 'marriage-certificate-translation-and-legalisation-support', 'การสนับสนุนการแปลและรับรองใบสมรส', 'การแปลและรับรองความถูกต้องของเอกสารการสมรส'),
      service('legal-family', 'divorce-assistance', 'ความช่วยเหลือด้านการหย่าร้าง', 'การสนับสนุนด้านเอกสารและขั้นตอนระหว่างการหย่าร้าง'),
      service('legal-family', 'family-documentation', 'เอกสารครอบครัว', 'การเตรียมและแก้ไขเอกสารทางแพ่งของครอบครัว'),
      service('legal-family', 'birth-certificate-support', 'การสนับสนุนใบสูติบัตร', 'ความช่วยเหลือด้านการจดทะเบียนเกิดและใบสูติบัตร'),
      service('legal-family', 'family-book-support', 'การสนับสนุนสมุดทะเบียนครอบครัว', 'การสนับสนุนการจดทะเบียนและปรับปรุงสมุดทะเบียนครอบครัว'),
      service('legal-family', 'long-term-stay-support-for-foreign-spouses', 'การสนับสนุนการพำนักระยะยาวสำหรับคู่สมรสชาวต่างชาติ', 'ทางเลือกการพำนักสำหรับคู่สมรสชาวต่างชาติของพลเมืองลาว'),
    ],
  },
  {
    id: 'accounting-tax',
    categorySlug: 'accounting-tax',
    title: 'บัญชีและภาษี',
    summary:
      'การทำบัญชี การยื่นภาษี เงินเดือน และการปฏิบัติตามข้อกำหนดประจำปี — รากฐานทางการเงินที่เชื่อถือได้สำหรับธุรกิจของท่าน',
    services: [
      service('accounting-tax', 'accounting-services', 'บริการบัญชี', 'การสนับสนุนด้านบัญชีที่สอดคล้องกับข้อกำหนดของลาว'),
      service('accounting-tax', 'bookkeeping', 'การทำบัญชี', 'บัญชีที่ถูกต้องและเป็นปัจจุบันสำหรับธุรกิจของท่าน'),
      service('accounting-tax', 'tax-registration', 'การจดทะเบียนภาษี', 'การจดทะเบียนธุรกิจของท่านกับหน่วยงานสรรพากร'),
      service('accounting-tax', 'tax-filing', 'การยื่นภาษี', 'การเตรียมและยื่นแบบภาษีตามรอบระยะเวลาที่กำหนด'),
      service('accounting-tax', 'payroll-services', 'บริการเงินเดือน', 'การประมวลผลเงินเดือนและการยื่นเอกสารที่เกี่ยวข้องสำหรับทีมงานของท่าน'),
      service('accounting-tax', 'financial-reporting', 'การรายงานทางการเงิน', 'รายงานทางการเงินที่ชัดเจนสำหรับเจ้าของกิจการและหน่วยงานราชการ'),
      service('accounting-tax', 'annual-compliance-support', 'การสนับสนุนการปฏิบัติตามข้อกำหนดประจำปี', 'การติดตามพันธะการยื่นเอกสารและการรายงานประจำปี'),
      service('accounting-tax', 'tax-advisory', 'ที่ปรึกษาด้านภาษี', 'คำแนะนำด้านภาษีเชิงปฏิบัติสำหรับการตัดสินใจและการวางแผน'),
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
