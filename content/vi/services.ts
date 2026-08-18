import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Vietnamese translation of `content/en/services.ts`. Slugs come from the
 * ENGLISH titles in the source file and are passed explicitly here so they
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
    title: 'Cung cấp & Lắp đặt Điện',
    summary:
      'Công trình truyền tải và phân phối ở cấp 115 kV và 22 kV, xây dựng trạm biến áp, và cung cấp thiết bị điện hạ thế, trung thế, cao thế — thi công, thí nghiệm và đóng điện.',
    services: [
      service('electrical', '115-kv-transmission-lines', 'Đường dây truyền tải 115 kV', 'Khảo sát tuyến, móng, dựng cột thép và kéo dây cho đường dây trên không 115 kV.'),
      service('electrical', '115-22-kv-substations', 'Trạm biến áp 115/22 kV', 'Phần xây dựng, kết cấu, lắp đặt thiết bị chính và nghiệm thu chạy thử trạm biến áp.'),
      service('electrical', '22-kv-distribution-networks', 'Lưới phân phối 22 kV', 'Đường dây phân phối trung thế trên không và ngầm, mở rộng và tăng cường lưới.'),
      service('electrical', 'overhead-line-construction', 'Thi công đường dây trên không', 'Dựng cột bê tông và cột thép, lắp xà, gắn sứ cách điện và kéo dây dẫn.'),
      service('electrical', 'underground-cable-works', 'Công trình cáp ngầm', 'Đào rãnh, đặt ống, kéo cáp, nối cáp và đầu cáp cho mạch trung thế và hạ thế.'),
      service('electrical', 'transformer-supply-installation', 'Cung cấp & lắp đặt máy biến áp', 'Máy biến áp phân phối và máy biến áp lực được cung cấp, lắp đặt, đấu nối và thí nghiệm.'),
      service('electrical', 'switchgear-protection-panels', 'Tủ đóng cắt & tủ bảo vệ', 'Tủ trung thế, RMU, tủ bảo vệ và điều khiển, cài đặt rơ-le.'),
      service('electrical', 'low-voltage-building-electrical', 'Điện hạ thế & điện công trình', 'Tủ phân phối chính, tuyến nhánh, ổ cắm, chiếu sáng và hệ thống tiếp địa cho công trình.'),
      service('electrical', 'electrical-equipment-supply', 'Cung cấp thiết bị điện', 'Mua sắm và cung cấp thiết bị điện hạ thế, trung thế và cao thế, cáp và phụ kiện.'),
      service('electrical', 'testing-commissioning', 'Thí nghiệm & nghiệm thu', 'Thí nghiệm trước khi đóng điện, kiểm tra bảo vệ và nghiệm thu theo yêu cầu của điện lực.'),
      service('electrical', 'earthing-lightning-protection', 'Tiếp địa & chống sét', 'Lưới tiếp địa, cọc tiếp địa, liên kết đẳng thế và chống sét cho trạm và công trình.'),
      service('electrical', 'maintenance-fault-response', 'Bảo trì & xử lý sự cố', 'Bảo trì theo kế hoạch, kiểm tra định kỳ và hỗ trợ ứng cứu cho hệ thống đã lắp đặt.'),
    ],
  },
  {
    id: 'foundation-piling-works',
    categorySlug: 'piling-foundation',
    title: 'Công trình Nền móng & Cọc',
    summary:
      'Cọc đóng, cọc khoan nhồi, cừ larsen, thí nghiệm cọc và phần kết cấu ngầm chịu tải cho công trình, cầu và thiết bị nặng — năng lực khởi nguồn của Apex.',
    services: [
      service('piling-foundation', 'driven-pile-installation', 'Thi công cọc đóng', 'Cọc bê tông đúc sẵn và cọc thép, đóng đến độ chối hoặc chiều sâu thiết kế.'),
      service('piling-foundation', 'bored-pile-installation', 'Thi công cọc khoan nhồi', 'Cọc đổ tại chỗ cho nơi không phù hợp đóng cọc hoặc cần hạn chế rung động.'),
      service('piling-foundation', 'sheet-piling', 'Thi công cừ larsen', 'Tường cừ chắn giữ hố đào, đê quây và công trình ven sông.'),
      service('piling-foundation', 'pile-load-testing', 'Thí nghiệm sức chịu tải cọc', 'Thí nghiệm nén tĩnh, thí nghiệm động và kiểm tra khuyết tật, kèm báo cáo.'),
      service('piling-foundation', 'pile-caps-substructure', 'Đài cọc & kết cấu ngầm', 'Cắt đầu cọc, gia công cốt thép, đài cọc, giằng móng và dầm liên kết.'),
      service('piling-foundation', 'excavation-earthworks', 'Đào đất & công tác đất', 'Đào khối lớn và đào chi tiết, hạ mực nước ngầm, đắp trả và đầm nén.'),
      service('piling-foundation', 'ground-improvement', 'Gia cố nền đất', 'Thay đất, đầm nén và gia cố khi sức chịu tải của nền không đủ.'),
      service('piling-foundation', 'retaining-structures', 'Kết cấu chắn giữ', 'Tường chắn, chống đỡ và kết cấu tạm bảo đảm an toàn hố đào.'),
      service('piling-foundation', 'setting-out-survey', 'Định vị & trắc đạc', 'Định vị tim cọc bằng máy trắc đạc và lập hồ sơ hoàn công.'),
    ],
  },
  {
    id: 'road-bridge-construction',
    categorySlug: 'roads-bridges',
    title: 'Xây dựng Đường & Cầu',
    summary:
      'Tuyến đường mới, cải tạo, cầu bê tông cốt thép, cống và hệ thống thoát nước — từ nền đường đến lớp mặt và hệ thống an toàn giao thông.',
    services: [
      service('roads-bridges', 'road-construction', 'Xây dựng đường', 'Tuyến đường mới từ phát quang, nền đường, các lớp móng đến lớp mặt.'),
      service('roads-bridges', 'road-rehabilitation-overlay', 'Cải tạo & thảm tăng cường', 'Làm lại kết cấu, vá ổ gà và thảm tăng cường mặt đường hiện hữu.'),
      service('roads-bridges', 'bridge-construction', 'Xây dựng cầu', 'Cầu bê tông cốt thép — móng, trụ, mố, dầm và bản mặt cầu.'),
      service('roads-bridges', 'culverts-drainage', 'Cống & thoát nước', 'Cống hộp, cống tròn, rãnh dọc và cửa xả.'),
      service('roads-bridges', 'concrete-asphalt-paving', 'Thảm bê tông & asphalt', 'Thi công mặt đường cứng và mặt đường mềm.'),
      service('roads-bridges', 'earthworks-subgrade', 'Công tác đất & nền đường', 'Đào đắp, nền đắp, chuẩn bị nền đường và kiểm soát độ chặt.'),
      service('roads-bridges', 'slope-protection', 'Bảo vệ mái taluy', 'Rọ đá, đá hộc, tường chắn và chống xói lở mái đào, mái đắp.'),
      service('roads-bridges', 'road-safety-furniture', 'Hệ thống an toàn giao thông', 'Hộ lan, biển báo, vạch sơn và cọc tiêu.'),
      service('roads-bridges', 'access-haul-roads', 'Đường công vụ & đường vận chuyển', 'Đường vào tạm và đường vận chuyển phục vụ công trường.'),
    ],
  },
  {
    id: 'building-real-estate',
    categorySlug: 'buildings-property',
    title: 'Xây dựng Công trình & Phát triển Bất động sản',
    summary:
      'Công trình thương mại, nhà ở và công nghiệp từ phần ngầm đến bàn giao — cùng hoạt động phát triển đất đai và bất động sản do chính Apex làm chủ đầu tư.',
    services: [
      service('buildings-property', 'commercial-buildings', 'Công trình thương mại', 'Văn phòng, thương mại và công trình hỗn hợp, từ phần ngầm đến bàn giao.'),
      service('buildings-property', 'residential-buildings', 'Công trình nhà ở', 'Nhà ở, căn hộ và khối nhà ở, đơn lẻ hoặc theo dãy.'),
      service('buildings-property', 'industrial-warehouse', 'Công trình công nghiệp & kho', 'Nhà kho, xưởng và nhà công nghiệp nhẹ, bao gồm sân bãi bê tông.'),
      service('buildings-property', 'structural-concrete-works', 'Kết cấu bê tông', 'Khung bê tông cốt thép, sàn, lõi và lắp dựng cấu kiện đúc sẵn.'),
      service('buildings-property', 'building-services-installation', 'Lắp đặt hệ thống kỹ thuật', 'Lắp đặt điện, cấp nước, thoát nước và thông gió trong công trình.'),
      service('buildings-property', 'renovation-fit-out', 'Cải tạo & hoàn thiện nội thất', 'Cải tạo, mở rộng và hoàn thiện nội thất công trình hiện hữu.'),
      service('buildings-property', 'real-estate-development', 'Phát triển bất động sản', 'Apex tự phát triển đất và công trình, từ nghiên cứu khả thi đến bán hoặc cho thuê.'),
      service('buildings-property', 'land-site-infrastructure', 'Hạ tầng kỹ thuật khu đất', 'Đường nội bộ, thoát nước, cấp nước và cấp điện phục vụ dự án.'),
      service('buildings-property', 'project-construction-management', 'Quản lý dự án & thi công', 'Quản lý tiến độ, mua sắm và công trường thay mặt chủ đầu tư.'),
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
