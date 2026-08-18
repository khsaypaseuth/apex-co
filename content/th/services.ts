import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Thai translation of `content/en/services.ts`. Slugs come from the ENGLISH
 * titles in the source file and are passed explicitly here so they stay
 * identical across locales.
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
    title: 'จัดหาและติดตั้งระบบไฟฟ้า',
    summary:
      'งานสายส่งและสายจำหน่ายที่ระดับ 115 kV และ 22 kV งานก่อสร้างสถานีไฟฟ้า และการจัดหาอุปกรณ์ไฟฟ้าแรงต่ำ แรงกลาง และแรงสูง — ก่อสร้าง ทดสอบ และจ่ายไฟ',
    services: [
      service('electrical', '115-kv-transmission-lines', 'สายส่ง 115 kV', 'สำรวจแนวสาย งานฐานราก ติดตั้งเสาโครงเหล็ก และขึงสายสำหรับสายส่งเหนือดิน 115 kV'),
      service('electrical', '115-22-kv-substations', 'สถานีไฟฟ้า 115/22 kV', 'งานโยธา โครงสร้าง ติดตั้งอุปกรณ์หลัก และทดสอบเดินเครื่องสถานีไฟฟ้า'),
      service('electrical', '22-kv-distribution-networks', 'ระบบจำหน่าย 22 kV', 'สายป้อนแรงกลางทั้งเหนือดินและใต้ดิน งานขยายเขต และเสริมความมั่นคงของระบบ'),
      service('electrical', 'overhead-line-construction', 'ก่อสร้างสายไฟเหนือดิน', 'ติดตั้งเสาและโครงเหล็ก ประกอบคอน ติดลูกถ้วย และขึงสาย'),
      service('electrical', 'underground-cable-works', 'งานเคเบิลใต้ดิน', 'ขุดร่อง วางท่อ ลากสาย ต่อสาย และเข้าหัวสายสำหรับวงจรแรงกลางและแรงต่ำ'),
      service('electrical', 'transformer-supply-installation', 'จัดหาและติดตั้งหม้อแปลง', 'หม้อแปลงจำหน่ายและหม้อแปลงกำลัง จัดหา ติดตั้ง เชื่อมต่อ และทดสอบ'),
      service('electrical', 'switchgear-protection-panels', 'สวิตช์เกียร์และตู้ป้องกัน', 'สวิตช์เกียร์แรงกลาง RMU ตู้ป้องกันและควบคุม พร้อมตั้งค่ารีเลย์'),
      service('electrical', 'low-voltage-building-electrical', 'ระบบไฟฟ้าแรงต่ำและไฟฟ้าอาคาร', 'ตู้จ่ายไฟหลัก สายป้อนย่อย เต้ารับ แสงสว่าง และระบบกราวด์ในอาคาร'),
      service('electrical', 'electrical-equipment-supply', 'จัดหาอุปกรณ์ไฟฟ้า', 'จัดซื้อและจัดหาอุปกรณ์ไฟฟ้าแรงต่ำ แรงกลาง และแรงสูง สายไฟ และอุปกรณ์ประกอบ'),
      service('electrical', 'testing-commissioning', 'ทดสอบและเดินเครื่อง', 'ทดสอบก่อนจ่ายไฟ ตรวจสอบระบบป้องกัน และเดินเครื่องตามข้อกำหนดของการไฟฟ้า'),
      service('electrical', 'earthing-lightning-protection', 'ระบบกราวด์และป้องกันฟ้าผ่า', 'กริดกราวด์ แท่งกราวด์ การเชื่อมประสาน และระบบล่อฟ้าสำหรับสถานีและอาคาร'),
      service('electrical', 'maintenance-fault-response', 'บำรุงรักษาและแก้ไขเหตุขัดข้อง', 'บำรุงรักษาตามแผน ตรวจสอบ และบริการเรียกด่วนสำหรับระบบที่ติดตั้งแล้ว'),
    ],
  },
  {
    id: 'foundation-piling-works',
    categorySlug: 'piling-foundation',
    title: 'งานฐานรากและเสาเข็ม',
    summary:
      'เสาเข็มตอก เสาเข็มเจาะ เข็มพืด การทดสอบเสาเข็ม และงานโครงสร้างใต้ดินที่รับน้ำหนักอาคาร สะพาน และเครื่องจักรหนัก — เป็นงานที่ Apex เริ่มต้นมา',
    services: [
      service('piling-foundation', 'driven-pile-installation', 'งานเสาเข็มตอก', 'เสาเข็มคอนกรีตสำเร็จรูปและเสาเข็มเหล็ก ตอกจนได้ค่าการตอกหรือความลึกตามแบบ'),
      service('piling-foundation', 'bored-pile-installation', 'งานเสาเข็มเจาะ', 'เสาเข็มหล่อในที่ สำหรับกรณีที่ไม่เหมาะกับการตอกหรือต้องจำกัดแรงสั่นสะเทือน'),
      service('piling-foundation', 'sheet-piling', 'งานเข็มพืด', 'กำแพงเข็มพืดสำหรับค้ำยันงานขุด กำแพงกันน้ำ และงานริมน้ำ'),
      service('piling-foundation', 'pile-load-testing', 'ทดสอบกำลังรับน้ำหนักเสาเข็ม', 'ทดสอบแบบสถิต แบบพลศาสตร์ และทดสอบความสมบูรณ์ พร้อมรายงานผล'),
      service('piling-foundation', 'pile-caps-substructure', 'ฐานรากและโครงสร้างใต้ดิน', 'ตัดหัวเสาเข็ม ผูกเหล็ก หล่อฐานราก คานคอดิน และคานยึด'),
      service('piling-foundation', 'excavation-earthworks', 'งานขุดและงานดิน', 'งานขุดปริมาณมากและงานขุดละเอียด สูบน้ำ ถมกลับ และบดอัด'),
      service('piling-foundation', 'ground-improvement', 'ปรับปรุงคุณภาพดิน', 'เปลี่ยนดิน บดอัด และเสริมเสถียรภาพเมื่อกำลังรับน้ำหนักไม่เพียงพอ'),
      service('piling-foundation', 'retaining-structures', 'โครงสร้างกันดิน', 'กำแพงกันดิน ค้ำยัน และงานโครงสร้างชั่วคราวเพื่อความปลอดภัยของงานขุด'),
      service('piling-foundation', 'setting-out-survey', 'วางผังและสำรวจ', 'วางตำแหน่งเสาเข็มด้วยกล้องสำรวจ และบันทึกแบบก่อสร้างจริง'),
    ],
  },
  {
    id: 'road-bridge-construction',
    categorySlug: 'roads-bridges',
    title: 'ก่อสร้างถนนและสะพาน',
    summary:
      'ถนนสายใหม่ งานบูรณะ สะพานคอนกรีตเสริมเหล็ก ท่อลอด และระบบระบายน้ำ — ตั้งแต่ชั้นรองพื้นทางจนถึงผิวทางและอุปกรณ์ความปลอดภัย',
    services: [
      service('roads-bridges', 'road-construction', 'ก่อสร้างถนน', 'ถนนสายใหม่ ตั้งแต่ถางป่า ชั้นรองพื้นทาง ชั้นพื้นทาง จนถึงผิวทาง'),
      service('roads-bridges', 'road-rehabilitation-overlay', 'บูรณะและปูทับผิวทาง', 'ก่อสร้างใหม่ ซ่อมหลุมบ่อ และปูทับผิวทางเดิม'),
      service('roads-bridges', 'bridge-construction', 'ก่อสร้างสะพาน', 'สะพานคอนกรีตเสริมเหล็ก — ฐานราก ตอม่อ ตับริม คาน และพื้นสะพาน'),
      service('roads-bridges', 'culverts-drainage', 'ท่อลอดและระบบระบายน้ำ', 'ท่อลอดเหลี่ยม ท่อลอดกลม รางระบายน้ำข้างทาง และจุดระบายออก'),
      service('roads-bridges', 'concrete-asphalt-paving', 'ปูผิวคอนกรีตและแอสฟัลต์', 'ก่อสร้างผิวทางแบบแข็งและแบบยืดหยุ่น'),
      service('roads-bridges', 'earthworks-subgrade', 'งานดินและชั้นรองพื้นทาง', 'งานตัด-ถม คันทาง เตรียมชั้นรองพื้นทาง และควบคุมการบดอัด'),
      service('roads-bridges', 'slope-protection', 'ป้องกันลาดคันทาง', 'กล่องกาเบียน หินทิ้ง กำแพงกันดิน และการป้องกันการกัดเซาะ'),
      service('roads-bridges', 'road-safety-furniture', 'อุปกรณ์ความปลอดภัยทาง', 'ราวกันอันตราย ป้ายจราจร เครื่องหมายจราจร และหลักนำทาง'),
      service('roads-bridges', 'access-haul-roads', 'ถนนทางเข้าและถนนขนส่ง', 'ถนนทางเข้าชั่วคราวและถนนขนส่งสำหรับพื้นที่ก่อสร้าง'),
    ],
  },
  {
    id: 'building-real-estate',
    categorySlug: 'buildings-property',
    title: 'ก่อสร้างอาคารและพัฒนาอสังหาริมทรัพย์',
    summary:
      'อาคารพาณิชย์ ที่พักอาศัย และอุตสาหกรรม ตั้งแต่โครงสร้างใต้ดินจนถึงส่งมอบ — พร้อมการพัฒนาที่ดินและอสังหาริมทรัพย์ที่ Apex เป็นผู้พัฒนาเอง',
    services: [
      service('buildings-property', 'commercial-buildings', 'อาคารพาณิชย์', 'อาคารสำนักงาน ค้าปลีก และอาคารผสมผสาน ตั้งแต่ฐานรากจนถึงส่งมอบ'),
      service('buildings-property', 'residential-buildings', 'อาคารที่พักอาศัย', 'บ้าน อพาร์ตเมนต์ และอาคารพักอาศัย ทั้งหลังเดี่ยวและเป็นชุด'),
      service('buildings-property', 'industrial-warehouse', 'โรงงานและคลังสินค้า', 'คลังสินค้า โรงซ่อม และอาคารอุตสาหกรรมเบา รวมถึงพื้นแข็งภายนอก'),
      service('buildings-property', 'structural-concrete-works', 'งานโครงสร้างคอนกรีต', 'โครงสร้างคอนกรีตเสริมเหล็ก พื้น แกนอาคาร และการติดตั้งชิ้นส่วนสำเร็จรูป'),
      service('buildings-property', 'building-services-installation', 'ติดตั้งงานระบบอาคาร', 'ติดตั้งระบบไฟฟ้า ประปา ระบายน้ำ และระบายอากาศภายในอาคาร'),
      service('buildings-property', 'renovation-fit-out', 'ปรับปรุงและตกแต่งภายใน', 'ปรับปรุง ต่อเติม และตกแต่งภายในอาคารเดิม'),
      service('buildings-property', 'real-estate-development', 'พัฒนาอสังหาริมทรัพย์', 'Apex พัฒนาที่ดินและอาคารเอง ตั้งแต่ศึกษาความเป็นไปได้จนถึงการขายหรือให้เช่า'),
      service('buildings-property', 'land-site-infrastructure', 'สาธารณูปโภคในโครงการ', 'ถนนภายใน ระบบระบายน้ำ ประปา และระบบไฟฟ้าภายในโครงการ'),
      service('buildings-property', 'project-construction-management', 'บริหารโครงการและงานก่อสร้าง', 'บริหารแผนงาน การจัดซื้อ และหน้างานในนามของเจ้าของโครงการ'),
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
