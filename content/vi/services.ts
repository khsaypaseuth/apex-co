import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Vietnamese services catalogue — the same five groups and 44 services as
 * `content/en/services.ts`, translated for a Vietnamese-reading audience.
 * Slugs are NOT derived from the Vietnamese titles: they are copied
 * verbatim from the English file so `/services/*` URLs stay identical
 * across locales.
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
    title: 'Thành lập doanh nghiệp & Cấp phép',
    summary:
      'Từ lần đăng ký đầu tiên đến việc gia hạn giấy phép liên tục — hỗ trợ thành lập và duy trì doanh nghiệp của bạn được đăng ký hợp lệ tại Lào.',
    services: [
      service('business-setup', 'company-registration', 'Đăng ký thành lập công ty', 'Thành lập công ty mới với các cơ quan chức năng liên quan của Lào.'),
      service('business-setup', 'foreign-investment-registration', 'Đăng ký đầu tư nước ngoài', 'Hỗ trợ đăng ký cho các doanh nghiệp có vốn đầu tư nước ngoài.'),
      service('business-setup', 'representative-office-registration', 'Đăng ký văn phòng đại diện', 'Thành lập văn phòng đại diện cho công ty nước ngoài.'),
      service('business-setup', 'branch-office-registration', 'Đăng ký chi nhánh', 'Đăng ký chi nhánh của một công ty nước ngoài hiện có.'),
      service('business-setup', 'business-license-applications', 'Xin cấp giấy phép kinh doanh', 'Chuẩn bị và nộp hồ sơ xin cấp giấy phép hoạt động.'),
      service('business-setup', 'industry-specific-licenses', 'Giấy phép chuyên ngành', 'Các giấy phép cần thiết cho các ngành và hoạt động có điều kiện.'),
      service('business-setup', 'tax-registration', 'Đăng ký thuế', 'Đăng ký doanh nghiệp mới với cơ quan thuế.'),
      service('business-setup', 'social-security-registration', 'Đăng ký bảo hiểm xã hội', 'Đăng ký công ty và nhân viên tham gia bảo hiểm xã hội.'),
      service('business-setup', 'company-amendments', 'Thay đổi thông tin công ty', 'Cập nhật thông tin công ty, cổ đông, hoặc các chi tiết đã đăng ký.'),
      service('business-setup', 'business-license-renewal', 'Gia hạn giấy phép kinh doanh', 'Duy trì giấy phép hoạt động hiệu lực thông qua việc gia hạn kịp thời.'),
    ],
  },
  {
    id: 'visa-immigration-services',
    categorySlug: 'visa-immigration',
    title: 'Dịch vụ Thị thực & Xuất nhập cảnh',
    summary:
      'Hỗ trợ thị thực, giấy phép lao động, và giấy phép lưu trú cho các chuyên gia, nhà đầu tư, và gia đình đang sinh sống hoặc làm việc tại Lào.',
    services: [
      service('visa-immigration', 'business-visa', 'Thị thực doanh nghiệp', 'Hỗ trợ thị thực cho khách công tác và nhiệm vụ ngắn hạn.'),
      service('visa-immigration', 'investor-visa', 'Thị thực nhà đầu tư', 'Hỗ trợ thị thực cho nhà đầu tư thành lập hoặc góp vốn vào doanh nghiệp.'),
      service('visa-immigration', 'work-visa', 'Thị thực lao động', 'Hỗ trợ thị thực cho người lao động nước ngoài làm việc tại Lào.'),
      service('visa-immigration', 'work-permit', 'Giấy phép lao động', 'Xin cấp và gia hạn giấy phép lao động cho nhân viên nước ngoài.'),
      service('visa-immigration', 'long-term-stay-visa', 'Thị thực lưu trú dài hạn', 'Các lựa chọn lưu trú dài hạn tại Lào, được đánh giá theo từng trường hợp.'),
      service('visa-immigration', 'visa-extension-renewal', 'Gia hạn & Kéo dài thị thực', 'Kéo dài hoặc gia hạn thị thực hiện có trước khi hết hạn.'),
      service('visa-immigration', 'stay-permit', 'Giấy phép lưu trú', 'Xin cấp giấy phép lưu trú cho người nước ngoài cư trú.'),
      service('visa-immigration', 'immigration-consulting', 'Tư vấn xuất nhập cảnh', 'Tư vấn thực tế về các con đường và yêu cầu xuất nhập cảnh.'),
      service('visa-immigration', 'document-preparation', 'Chuẩn bị hồ sơ', 'Chuẩn bị, dịch thuật, và sắp xếp hồ sơ đăng ký.'),
      service('visa-immigration', 'government-liaison', 'Liên hệ với cơ quan chức năng', 'Phối hợp với các cơ quan liên quan thay mặt bạn.'),
    ],
  },
  {
    id: 'corporate-legal-services',
    categorySlug: 'legal-family',
    title: 'Dịch vụ pháp lý doanh nghiệp',
    summary:
      'Hỗ trợ về hợp đồng, tuân thủ pháp luật, thẩm định pháp lý, và sở hữu trí tuệ cho các công ty hoạt động tại Lào.',
    services: [
      service('legal-family', 'legal-consulting', 'Tư vấn pháp lý', 'Tư vấn pháp lý thực tế cho các quyết định kinh doanh tại Lào.'),
      service('legal-family', 'contract-review', 'Rà soát hợp đồng', 'Rà soát hợp đồng trước khi bạn ký, bằng ngôn ngữ dễ hiểu.'),
      service('legal-family', 'contract-drafting', 'Soạn thảo hợp đồng', 'Soạn thảo hợp đồng rõ ràng, khả thi cho doanh nghiệp của bạn.'),
      service('legal-family', 'corporate-compliance', 'Tuân thủ pháp luật doanh nghiệp', 'Duy trì các nghĩa vụ và hồ sơ của công ty trong trạng thái tốt.'),
      service('legal-family', 'due-diligence', 'Thẩm định pháp lý', 'Kiểm tra lý lịch đối tác, tài sản, và giao dịch.'),
      service('legal-family', 'trademark-registration', 'Đăng ký nhãn hiệu', 'Đăng ký và bảo vệ nhãn hiệu tại Lào.'),
      service('legal-family', 'intellectual-property-support', 'Hỗ trợ sở hữu trí tuệ', 'Hỗ trợ thực tế trong việc bảo vệ sở hữu trí tuệ.'),
      service('legal-family', 'company-legal-documentation', 'Hồ sơ pháp lý công ty', 'Chuẩn bị và duy trì các hồ sơ pháp lý cốt lõi của công ty.'),
      service('legal-family', 'legal-liaison-support', 'Hỗ trợ liên hệ pháp lý', 'Phối hợp với cơ quan chức năng và các bên liên quan về vấn đề pháp lý.'),
    ],
  },
  {
    id: 'family-personal-legal-services',
    categorySlug: 'legal-family',
    title: 'Dịch vụ pháp lý gia đình & cá nhân',
    summary:
      'Hỗ trợ về hôn nhân, giấy tờ gia đình, và các vấn đề lưu trú dài hạn liên quan đến công dân Lào và người nước ngoài.',
    services: [
      service('legal-family', 'marriage-registration-for-lao-and-foreign-nationals', 'Đăng ký kết hôn cho công dân Lào và người nước ngoài', 'Hướng dẫn các cặp đôi khác quốc tịch trong thủ tục đăng ký kết hôn.'),
      service('legal-family', 'marriage-certificate-translation-and-legalisation-support', 'Hỗ trợ dịch thuật và hợp pháp hóa giấy chứng nhận kết hôn', 'Dịch thuật và hợp pháp hóa các giấy tờ kết hôn.'),
      service('legal-family', 'divorce-assistance', 'Hỗ trợ ly hôn', 'Hỗ trợ về giấy tờ và thủ tục trong quá trình ly hôn.'),
      service('legal-family', 'family-documentation', 'Giấy tờ gia đình', 'Chuẩn bị và điều chỉnh các giấy tờ hộ tịch gia đình.'),
      service('legal-family', 'birth-certificate-support', 'Hỗ trợ giấy khai sinh', 'Hỗ trợ đăng ký khai sinh và cấp giấy chứng nhận.'),
      service('legal-family', 'family-book-support', 'Hỗ trợ sổ hộ khẩu gia đình', 'Hỗ trợ đăng ký và cập nhật sổ hộ khẩu gia đình.'),
      service('legal-family', 'long-term-stay-support-for-foreign-spouses', 'Hỗ trợ lưu trú dài hạn cho vợ/chồng nước ngoài', 'Các lựa chọn lưu trú cho vợ/chồng nước ngoài của công dân Lào.'),
    ],
  },
  {
    id: 'accounting-tax',
    categorySlug: 'accounting-tax',
    title: 'Kế toán & Thuế',
    summary:
      'Ghi sổ kế toán, khai thuế, tính lương, và tuân thủ hằng năm — nền tảng tài chính đáng tin cậy cho doanh nghiệp của bạn.',
    services: [
      service('accounting-tax', 'accounting-services', 'Dịch vụ kế toán', 'Hỗ trợ kế toán phù hợp với các yêu cầu của Lào.'),
      service('accounting-tax', 'bookkeeping', 'Ghi sổ kế toán', 'Sổ sách chính xác, cập nhật cho doanh nghiệp của bạn.'),
      service('accounting-tax', 'tax-registration', 'Đăng ký thuế', 'Đăng ký doanh nghiệp của bạn với cơ quan thuế.'),
      service('accounting-tax', 'tax-filing', 'Khai thuế', 'Chuẩn bị và nộp các tờ khai thuế định kỳ.'),
      service('accounting-tax', 'payroll-services', 'Dịch vụ tính lương', 'Xử lý tính lương và các khai báo liên quan cho đội ngũ của bạn.'),
      service('accounting-tax', 'financial-reporting', 'Báo cáo tài chính', 'Báo cáo tài chính rõ ràng cho chủ sở hữu và cơ quan chức năng.'),
      service('accounting-tax', 'annual-compliance-support', 'Hỗ trợ tuân thủ hằng năm', 'Theo dõi nghĩa vụ khai báo và báo cáo hằng năm.'),
      service('accounting-tax', 'tax-advisory', 'Tư vấn thuế', 'Tư vấn thuế thực tế cho các quyết định và kế hoạch.'),
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
