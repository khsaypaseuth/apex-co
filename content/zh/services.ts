import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Simplified Chinese translation of `content/en/services.ts`. Slugs come from
 * the ENGLISH titles in the source file and are passed explicitly here so they
 * stay identical across locales.
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
    title: '电力供应与安装',
    summary:
      '115 千伏输电与 22 千伏配电工程、变电站建设，以及低压、中压、高压电气设备供应——从施工、试验到送电。',
    services: [
      service('electrical', '115-kv-transmission-lines', '115 千伏输电线路', '线路踏勘、基础工程、铁塔组立及 115 千伏架空线路架线。'),
      service('electrical', '115-22-kv-substations', '115/22 千伏变电站', '变电站土建、结构、一次设备安装及调试投运。'),
      service('electrical', '22-kv-distribution-networks', '22 千伏配电网', '中压架空及电缆配电线路、线路延伸与网架加强。'),
      service('electrical', 'overhead-line-construction', '架空线路施工', '电杆与铁塔组立、横担安装、绝缘子挂装及导线架设。'),
      service('electrical', 'underground-cable-works', '地下电缆工程', '沟槽开挖、排管敷设、电缆敷设、中间接头及终端头制作。'),
      service('electrical', 'transformer-supply-installation', '变压器供应与安装', '配电变压器与电力变压器的供货、就位、接线及试验。'),
      service('electrical', 'switchgear-protection-panels', '开关柜与保护屏', '中压开关柜、环网柜、保护及控制屏，含继电保护定值整定。'),
      service('electrical', 'low-voltage-building-electrical', '低压与建筑电气', '建筑主配电柜、干线、插座、照明及接地系统。'),
      service('electrical', 'electrical-equipment-supply', '电气设备供应', '低压、中压、高压电气设备、电缆及附件的采购与供应。'),
      service('electrical', 'testing-commissioning', '试验与调试', '送电前试验、保护校验，并按供电部门要求完成调试。'),
      service('electrical', 'earthing-lightning-protection', '接地与防雷', '变电站及建筑的接地网、接地极、等电位联结与防雷系统。'),
      service('electrical', 'maintenance-fault-response', '运维与故障抢修', '已建成系统的计划性维护、巡检及故障抢修支持。'),
    ],
  },
  {
    id: 'foundation-piling-works',
    categorySlug: 'piling-foundation',
    title: '基础与桩基工程',
    summary:
      '打入桩、钻孔灌注桩、板桩、桩基检测，以及承载建筑、桥梁与重型设备的地下结构工程——Apex 起家的核心能力。',
    services: [
      service('piling-foundation', 'driven-pile-installation', '打入桩施工', '预制混凝土桩与钢桩，打至设计贯入度或设计标高。'),
      service('piling-foundation', 'bored-pile-installation', '钻孔灌注桩施工', '现浇灌注桩，适用于不宜打桩或需控制振动影响的场地。'),
      service('piling-foundation', 'sheet-piling', '板桩施工', '用于基坑支护、围堰及河岸工程的板桩墙。'),
      service('piling-foundation', 'pile-load-testing', '桩基承载力检测', '静载试验、高应变动测及桩身完整性检测，并出具报告。'),
      service('piling-foundation', 'pile-caps-substructure', '承台与地下结构', '截桩、钢筋绑扎、承台、地梁及连系梁施工。'),
      service('piling-foundation', 'excavation-earthworks', '土方开挖与土建', '大方量及精细开挖、降水、回填与压实。'),
      service('piling-foundation', 'ground-improvement', '地基处理', '换填、压实与加固处理，适用于承载力不足的地基。'),
      service('piling-foundation', 'retaining-structures', '支挡结构', '挡土墙、支撑体系及保障基坑安全的临时结构。'),
      service('piling-foundation', 'setting-out-survey', '放样与测量', '仪器放样桩位并形成竣工测量记录。'),
    ],
  },
  {
    id: 'road-bridge-construction',
    categorySlug: 'roads-bridges',
    title: '道路与桥梁工程',
    summary:
      '新建道路、路面修复、钢筋混凝土桥梁、涵洞与排水系统——从路基到面层及交通安全设施。',
    services: [
      service('roads-bridges', 'road-construction', '道路建设', '新建道路，从清表、路基、基层至面层的全过程施工。'),
      service('roads-bridges', 'road-rehabilitation-overlay', '道路修复与罩面', '既有路面的翻修、坑槽修补及加铺罩面。'),
      service('roads-bridges', 'bridge-construction', '桥梁建设', '钢筋混凝土桥梁——基础、桥墩、桥台、梁体与桥面。'),
      service('roads-bridges', 'culverts-drainage', '涵洞与排水', '箱涵、圆管涵、边沟及排水出口工程。'),
      service('roads-bridges', 'concrete-asphalt-paving', '混凝土与沥青路面', '刚性路面与柔性路面施工。'),
      service('roads-bridges', 'earthworks-subgrade', '土方与路基', '挖填方、路堤、路基处理及压实度控制。'),
      service('roads-bridges', 'slope-protection', '边坡防护', '格宾石笼、抛石、挡土墙及挖填方边坡的防冲刷处理。'),
      service('roads-bridges', 'road-safety-furniture', '交通安全设施', '护栏、标志牌、标线及轮廓标。'),
      service('roads-bridges', 'access-haul-roads', '施工便道与运输道路', '服务于工地及厂区的临时便道与运输道路。'),
    ],
  },
  {
    id: 'building-real-estate',
    categorySlug: 'buildings-property',
    title: '房屋建筑与房地产开发',
    summary:
      '商业、住宅及工业建筑，从地下结构到竣工交付——并由 Apex 自行开发土地与物业项目。',
    services: [
      service('buildings-property', 'commercial-buildings', '商业建筑', '写字楼、商业及综合体建筑，从地下结构到竣工交付。'),
      service('buildings-property', 'residential-buildings', '住宅建筑', '独栋住宅、公寓及住宅楼，可单体或成组开发。'),
      service('buildings-property', 'industrial-warehouse', '工业厂房与仓库', '仓库、车间及轻工业厂房，含室外硬化场地。'),
      service('buildings-property', 'structural-concrete-works', '混凝土结构工程', '钢筋混凝土框架、楼板、核心筒及预制构件吊装。'),
      service('buildings-property', 'building-services-installation', '建筑机电安装', '建筑内的电气、给水、排水及通风系统安装。'),
      service('buildings-property', 'renovation-fit-out', '改造与室内装修', '既有建筑的翻新、扩建及室内装修。'),
      service('buildings-property', 'real-estate-development', '房地产开发', 'Apex 自主开发土地与物业，从可行性研究到销售或租赁。'),
      service('buildings-property', 'land-site-infrastructure', '场地市政配套', '项目内部道路、排水、给水及供电配套工程。'),
      service('buildings-property', 'project-construction-management', '项目与施工管理', '代表业主进行进度、采购及现场管理。'),
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
