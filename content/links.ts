/**
 * Official ministry and public-service links sourced from
 * https://odsc.gov.la/lo/service-gov (ministries + public services only —
 * banks, airlines, media, and associations excluded).
 */

import type { Locale } from '@/lib/i18n-config'

export type OfficialLink = {
  id: string
  nameEn: string
  nameLo: string
  nameTh: string
  nameVi: string
  nameZh: string
  url: string
  logo: string
}

export const MINISTRY_LINKS: OfficialLink[] = [
  {
    id: 'mtc',
    nameEn: 'Ministry of Technology and Communications',
    nameLo: 'ກະຊວງເຕັກໂນໂລຊີ ແລະ ການສື່ສານ',
    nameTh: 'กระทรวงเทคโนโลยีและการสื่อสาร',
    nameVi: 'Bộ Công nghệ và Truyền thông',
    nameZh: '技术和通讯部',
    url: 'https://mtc.gov.la',
    logo: '/images/links/mtc.png',
  },
  {
    id: 'monre',
    nameEn: 'Ministry of Natural Resources and Environment',
    nameLo: 'ກະຊວງຊັບພະຍາກອນທຳມະຊາດ ແລະ ສິ່ງແວດລ້ອມ',
    nameTh: 'กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม',
    nameVi: 'Bộ Tài nguyên và Môi trường',
    nameZh: '自然资源与环境部',
    url: 'https://monre.gov.la',
    logo: '/images/links/monre.png',
  },
  {
    id: 'moic',
    nameEn: 'Ministry of Industry and Commerce',
    nameLo: 'ກະຊວງອຸດສາຫະກຳ ແລະ ການຄ້າ',
    nameTh: 'กระทรวงอุตสาหกรรมและการค้า',
    nameVi: 'Bộ Công Thương',
    nameZh: '工业和商业部',
    url: 'https://moic.gov.la',
    logo: '/images/links/moic.png',
  },
  {
    id: 'mod',
    nameEn: 'Ministry of National Defence',
    nameLo: 'ກະຊວງປ້ອງກັນປະເທດ',
    nameTh: 'กระทรวงกลาโหม',
    nameVi: 'Bộ Quốc phòng',
    nameZh: '国防部',
    url: 'https://www.mod.gov.la',
    logo: '/images/links/mod.png',
  },
  {
    id: 'mof',
    nameEn: 'Ministry of Finance',
    nameLo: 'ກະຊວງການເງິນ',
    nameTh: 'กระทรวงการคลัง',
    nameVi: 'Bộ Tài chính',
    nameZh: '财政部',
    url: 'https://www.mof.gov.la',
    logo: '/images/links/mof.png',
  },
  {
    id: 'mpi',
    nameEn: 'Ministry of Planning and Investment',
    nameLo: 'ກະຊວງແຜນການ ແລະ ການລົງທຶນ',
    nameTh: 'กระทรวงแผนการและการลงทุน',
    nameVi: 'Bộ Kế hoạch và Đầu tư',
    nameZh: '计划与投资部',
    url: 'https://www.mpi.gov.la',
    logo: '/images/links/mpi.png',
  },
  {
    id: 'maf',
    nameEn: 'Ministry of Agriculture and Forestry',
    nameLo: 'ກະຊວງກະສິກຳ ແລະ ປ່າໄມ້',
    nameTh: 'กระทรวงเกษตรและป่าไม้',
    nameVi: 'Bộ Nông nghiệp và Lâm nghiệp',
    nameZh: '农林部',
    url: 'https://maf.gov.la',
    logo: '/images/links/maf.png',
  },
  {
    id: 'mofa',
    nameEn: 'Ministry of Foreign Affairs',
    nameLo: 'ກະຊວງການຕ່າງປະເທດ',
    nameTh: 'กระทรวงการต่างประเทศ',
    nameVi: 'Bộ Ngoại giao',
    nameZh: '外交部',
    url: 'https://mofa.gov.la',
    logo: '/images/links/mofa.png',
  },
  {
    id: 'mpwt',
    nameEn: 'Ministry of Public Works and Transport',
    nameLo: 'ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ',
    nameTh: 'กระทรวงโยธาธิการและขนส่ง',
    nameVi: 'Bộ Công chính và Giao thông vận tải',
    nameZh: '公共工程与运输部',
    url: 'https://mpwt.gov.la',
    logo: '/images/links/mpwt.png',
  },
  {
    id: 'moj',
    nameEn: 'Ministry of Justice',
    nameLo: 'ກະຊວງຍຸຕິທຳ',
    nameTh: 'กระทรวงยุติธรรม',
    nameVi: 'Bộ Tư pháp',
    nameZh: '司法部',
    url: 'https://moj.gov.la',
    logo: '/images/links/moj.png',
  },
  {
    id: 'moh',
    nameEn: 'Ministry of Health',
    nameLo: 'ກະຊວງສາທາລະນະສຸກ',
    nameTh: 'กระทรวงสาธารณสุข',
    nameVi: 'Bộ Y tế',
    nameZh: '卫生部',
    url: 'https://moh.gov.la',
    logo: '/images/links/moh.png',
  },
  {
    id: 'mps',
    nameEn: 'Ministry of Public Security',
    nameLo: 'ກະຊວງປ້ອງກັນຄວາມສະຫງົບ',
    nameTh: 'กระทรวงความมั่นคงสาธารณะ',
    nameVi: 'Bộ An ninh công cộng',
    nameZh: '公安部',
    url: 'https://laosecurity.gov.la',
    logo: '/images/links/mps.png',
  },
]

export const PUBLIC_SERVICE_LINKS: OfficialLink[] = [
  {
    id: 'na',
    nameEn: 'National Assembly of the Lao PDR',
    nameLo: 'ສະພາແຫ່ງຊາດ ແຫ່ງ ສປປ ລາວ',
    nameTh: 'สภาแห่งชาติแห่ง สปป. ลาว',
    nameVi: 'Quốc hội nước CHDCND Lào',
    nameZh: '老挝人民民主共和国国会',
    url: 'https://na.gov.la',
    logo: '/images/links/na.png',
  },

  // Hidden for now — re-enable when ready to show.
  // {
  //   id: 'odsc',
  //   nameEn: 'Smart ODSC One-Stop Service Center',
  //   nameLo: 'ສູນບໍລິການຜ່ານປະຕູດຽວ (Smart ODSC)',
  //   url: 'https://odsc.gov.la',
  //   logo: '/images/links/odsc.png',
  // },
  // Hidden for now — re-enable when laogov.gov.la is ready to show.
  // {
  //   id: 'laogov',
  //   nameEn: 'Lao Government Portal',
  //   nameLo: 'ປະຕູລັດຖະບານ ສປປ ລາວ',
  //   url: 'https://www.laogov.gov.la',
  //   logo: '/images/links/laogov.png',
  // },
  {
    id: 'trade-portal',
    nameEn: 'Lao Trade Portal',
    nameLo: 'ປະຕູການຄ້າລາວ',
    nameTh: 'ประตูการค้าลาว',
    nameVi: 'Cổng thông tin thương mại Lào',
    nameZh: '老挝贸易门户',
    url: 'https://www.laotradeportal.gov.la',
    logo: '/images/links/trade-portal.png',
  },
  {
    id: 'evisa',
    nameEn: 'Lao eVisa',
    nameLo: 'Lao eVisa (ວີຊາອອນໄລນ໌)',
    nameTh: 'Lao eVisa',
    nameVi: 'Lao eVisa',
    nameZh: '老挝电子签证',
    url: 'https://laoevisa.gov.la',
    logo: '/images/links/evisa.png',
  },
  {
    id: 'immigration',
    nameEn: 'Immigration Department',
    nameLo: 'ກົມກວດຄົນເຂົ້າເມືອງ ແຫ່ງ ສປປ ລາວ',
    nameTh: 'กรมตรวจคนเข้าเมือง',
    nameVi: 'Cục Xuất nhập cảnh',
    nameZh: '移民局',
    url: 'https://immigration.gov.la',
    logo: '/images/links/immigration.png',
  },
  {
    id: 'customs',
    nameEn: 'Department of Customs',
    nameLo: 'ກົມພາສີ',
    nameTh: 'กรมศุลกากร',
    nameVi: 'Cục Hải quan',
    nameZh: '海关局',
    url: 'https://customs.gov.la',
    logo: '/images/links/customs.png',
  },
  {
    id: 'tax',
    nameEn: 'Tax Department',
    nameLo: 'ກົມສ່ວຍສາອາກອນ',
    nameTh: 'กรมสรรพากร',
    nameVi: 'Cục Thuế',
    nameZh: '税务局',
    url: 'https://taxservice.mof.gov.la',
    logo: '/images/links/tax.png',
  },
  {
    id: 'dip',
    nameEn: 'Department of Intellectual Property',
    nameLo: 'ກົມຊັບສິນທາງປັນຍາ',
    nameTh: 'กรมทรัพย์สินทางปัญญา',
    nameVi: 'Cục Sở hữu trí tuệ',
    nameZh: '知识产权局',
    url: 'https://dip.gov.la',
    logo: '/images/links/dip.png',
  },
  {
    id: 'bol',
    nameEn: 'Bank of the Lao PDR',
    nameLo: 'ທະນາຄານແຫ່ງ ສປປ ລາວ',
    nameTh: 'ธนาคารแห่ง สปป. ลาว',
    nameVi: 'Ngân hàng Nhà nước CHDCND Lào',
    nameZh: '老挝人民民主共和国银行',
    url: 'https://www.bol.gov.la',
    logo: '/images/links/bol.png',
  },
  {
    id: 'lis',
    nameEn: 'Department of Financial Institution Supervision',
    nameLo: 'ກົມຄຸ້ມຄອງວິສາຫະກິດການເງິນ',
    nameTh: 'กรมกำกับดูแลสถาบันการเงิน',
    nameVi: 'Cục Giám sát các tổ chức tài chính',
    nameZh: '金融机构监管局',
    url: 'https://lis.gov.la',
    logo: '/images/links/lis.png',
  },
  {
    id: 'amlio',
    nameEn: 'Anti-Money Laundering Intelligence Office',
    nameLo: 'ສຳນັກງານຕ້ານການຟອກເງິນ',
    nameTh: 'สำนักงานข่าวกรองป้องกันและปราบปรามการฟอกเงิน',
    nameVi: 'Văn phòng Tình báo chống rửa tiền',
    nameZh: '反洗钱情报办公室',
    url: 'http://amlio.gov.la',
    logo: '/images/links/amlio.png',
  },
  {
    id: 'sao',
    nameEn: 'State Audit Organization',
    nameLo: 'ອົງການກວດສອບແຫ່ງລັດ',
    nameTh: 'องค์กรตรวจสอบแห่งรัฐ',
    nameVi: 'Tổ chức Kiểm toán Nhà nước',
    nameZh: '国家审计机构',
    url: 'https://sao.gov.la',
    logo: '/images/links/sao.png',
  },
  {
    id: 'ppmd',
    nameEn: 'Department of Evaluation and Procurement',
    nameLo: 'ກົມປະເມີນຜົນ ແລະ ການຈັດຊື້-ຈັດຈ້າງ',
    nameTh: 'กรมประเมินผลและการจัดซื้อจัดจ้าง',
    nameVi: 'Cục Đánh giá và Mua sắm',
    nameZh: '评估与采购局',
    url: 'http://ppmd.mof.gov.la/procurement_statistics',
    logo: '/images/links/ppmd.png',
  },
  {
    id: 'dgc',
    nameEn: 'Digital Government Center',
    nameLo: 'ສູນບໍລິຫານລັດດີຈີຕອນ',
    nameTh: 'ศูนย์รัฐบาลดิจิทัล',
    nameVi: 'Trung tâm Chính phủ số',
    nameZh: '数字政府中心',
    url: 'http://dgc.gov.la',
    logo: '/images/links/dgc.png',
  },
]

export function officialLinkName(link: OfficialLink, lang: Locale): string {
  switch (lang) {
    case 'lo':
      return link.nameLo
    case 'th':
      return link.nameTh
    case 'vi':
      return link.nameVi
    case 'zh':
      return link.nameZh
    default:
      return link.nameEn
  }
}
