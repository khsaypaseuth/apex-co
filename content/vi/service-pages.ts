import type { ServicePageContent } from '@/lib/types'

/**
 * Vietnamese content for the four `/services/[category]` pages, translated
 * from `content/en/service-pages.ts`. Guardrails carried over from the
 * English source: nothing here states legal requirements, fees, or
 * processing times as fact — wording stays at "commonly / typically /
 * varies by case", and every page renders a DisclaimerBox.
 */

export const servicePages: Record<ServicePageContent['slug'], ServicePageContent> = {
  'business-setup': {
    slug: 'business-setup',
    heroLede:
      'Từ việc lựa chọn cơ cấu doanh nghiệp đến khi nhận giấy chứng nhận đăng ký — hỗ trợ thực tế, từng bước một để thành lập doanh nghiệp tại Lào.',
    overview: [
      'Việc thành lập doanh nghiệp tại Lào thường bao gồm việc lựa chọn cơ cấu pháp lý, đăng ký doanh nghiệp — tính đến tháng 7 năm 2026, giấy chứng nhận đăng ký được cấp cùng với mã số thuế — và xin các giấy phép mà hoạt động của bạn yêu cầu. Trình tự và yêu cầu chính xác khác nhau tùy theo hoạt động kinh doanh, cơ cấu sở hữu, và các cơ quan liên quan.',
      'Super Consulting quản lý toàn bộ hành trình này từ đầu đến cuối: chúng tôi giúp bạn xác nhận những gì áp dụng cho trường hợp cụ thể của bạn, chuẩn bị giấy tờ, và phối hợp với các cơ quan liên quan — để quá trình luôn rõ ràng và có thể dự đoán được cho bạn.',
    ],
    whoItsFor: [
      'Nhà đầu tư nước ngoài thành lập công ty, chi nhánh, hoặc văn phòng đại diện tại Lào',
      'Doanh nhân Lào đăng ký doanh nghiệp mới hoặc chính thức hóa doanh nghiệp hiện có',
      'Công ty cần bổ sung giấy phép, thay đổi thông tin đăng ký, hoặc gia hạn giấy phép hiện có',
      'Doanh nghiệp cần hoàn thành đăng ký thuế và bảo hiểm xã hội đúng cách ngay từ ngày đầu',
    ],
    topics: [
      {
        heading: 'Các cơ cấu doanh nghiệp phổ biến',
        body: 'Doanh nghiệp tại Lào thường được thành lập dưới dạng hộ kinh doanh cá thể, công ty trách nhiệm hữu hạn, hoặc — đối với các công ty nước ngoài muốn xây dựng sự hiện diện — chi nhánh hoặc văn phòng đại diện. Cơ cấu nào phù hợp phụ thuộc vào quyền sở hữu, vốn, và hoạt động dự kiến. Quy định về sở hữu nước ngoài khác nhau theo từng ngành, và một số hoạt động chịu các điều kiện cụ thể; việc xác nhận điều này sớm là một trong những bước có giá trị nhất trong toàn bộ quá trình.',
      },
      {
        heading: 'Cấp phép',
        body: 'Ngoài việc đăng ký doanh nghiệp, nhiều hoạt động yêu cầu giấy phép hoạt động, và các ngành có điều kiện thường yêu cầu phê duyệt riêng cho ngành đó. Yêu cầu khác nhau theo từng ngành và có thể thay đổi, vì vậy chúng tôi xác minh những gì áp dụng cho hoạt động của bạn trước khi nộp bất kỳ hồ sơ nào.',
      },
    ],
    process: [
      {
        title: 'Đánh giá cơ cấu và yêu cầu',
        description:
          'Chúng tôi xem xét hoạt động và quyền sở hữu dự kiến của bạn, và xác nhận cơ cấu, phê duyệt, và đăng ký nào thường áp dụng cho một trường hợp như của bạn.',
      },
      {
        title: 'Chuẩn bị hồ sơ',
        description:
          'Chúng tôi chuẩn bị và sắp xếp các tài liệu thành lập doanh nghiệp, mẫu đơn, và giấy tờ hỗ trợ, đánh dấu những gì cần dịch thuật hoặc hợp pháp hóa.',
      },
      {
        title: 'Nộp hồ sơ và theo dõi',
        description:
          'Chúng tôi nộp hồ sơ và liên hệ với các cơ quan liên quan, luôn cập nhật cho bạn ở mỗi giai đoạn cho đến khi nhận được giấy chứng nhận và giấy phép.',
      },
      {
        title: 'Hoàn tất các bước sau đăng ký',
        description:
          'Chúng tôi hỗ trợ đăng ký bảo hiểm xã hội, con dấu công ty, giấy phép chuyên ngành, và các bước thực tế tiếp theo — để công ty thực sự sẵn sàng đi vào hoạt động.',
      },
    ],
    documents: {
      intro:
        'Giấy tờ được yêu cầu khác nhau tùy theo cơ cấu và ngành nghề, nhưng hồ sơ thường bao gồm:',
      items: [
        'Hộ chiếu hoặc giấy tờ tùy thân của cổ đông và giám đốc',
        'Điều lệ công ty và thông tin cổ đông',
        'Bằng chứng về địa chỉ đăng ký tại Lào',
        'Mô tả hoạt động kinh doanh và, đối với một số ngành, các phê duyệt hỗ trợ',
        'Đối với công ty nước ngoài: giấy tờ doanh nghiệp từ nước sở tại, thường phải dịch thuật và hợp pháp hóa',
      ],
      note: 'Danh sách này chỉ mang tính chất tham khảo — cơ quan chức năng quyết định những gì cần thiết cho từng hồ sơ, và yêu cầu khác nhau tùy từng trường hợp.',
    },
    timelineNote:
      'Thời gian xử lý phụ thuộc vào cơ cấu, ngành nghề, mức độ đầy đủ của hồ sơ, và các cơ quan liên quan. Chúng tôi không công bố khung thời gian cố định — sau khi đánh giá sơ bộ, chúng tôi có thể đưa ra kỳ vọng thực tế cho trường hợp cụ thể của bạn.',
    howWeHelp: [
      'Tư vấn về cơ cấu và các phương án thành lập trước khi bạn quyết định',
      'Chuẩn bị và rà soát mọi tài liệu trong hồ sơ',
      'Nộp hồ sơ và theo dõi với các cơ quan liên quan thay mặt bạn',
      'Thiết lập thuế, bảo hiểm xã hội, và các bước sau đăng ký',
      'Hỗ trợ liên tục cho việc thay đổi thông tin và gia hạn giấy phép sau khi thành lập',
    ],
  },

  'visa-immigration': {
    slug: 'visa-immigration',
    heroLede:
      'Thị thực, giấy phép lao động, và giấy phép lưu trú cho các chuyên gia, nhà đầu tư, và gia đình — được xử lý cẩn thận, để bạn có thể tập trung vào công việc và cuộc sống tại Lào.',
    overview: [
      'Việc sinh sống và làm việc tại Lào với tư cách người nước ngoài thường đòi hỏi sự kết hợp đúng đắn giữa thị thực, giấy phép lao động, và giấy phép lưu trú — và duy trì tất cả chúng luôn còn hiệu lực. Loại hình và yêu cầu áp dụng phụ thuộc vào mục đích lưu trú, người sử dụng lao động hoặc doanh nghiệp của bạn, và quốc tịch của bạn.',
      'Super Consulting giúp bạn xác định con đường phù hợp với tình huống của mình, chuẩn bị giấy tờ, và phối hợp với các cơ quan liên quan từ lần nộp hồ sơ đầu tiên cho đến mỗi lần gia hạn.',
    ],
    whoItsFor: [
      'Người lao động nước ngoài và người sử dụng lao động của họ đang sắp xếp thị thực lao động và giấy phép lao động',
      'Nhà đầu tư và chủ doanh nghiệp đang thiết lập vị thế tại Lào',
      'Người nước ngoài tìm kiếm các lựa chọn lưu trú dài hạn hơn',
      'Gia đình và vợ/chồng đi cùng người đang sinh sống hoặc làm việc tại Lào',
    ],
    topics: [
      {
        heading: 'Các loại thị thực được hỗ trợ',
        body: 'Chúng tôi hỗ trợ thị thực doanh nghiệp, thị thực lao động, thị thực nhà đầu tư, và thị thực lưu trú dài hạn, cũng như việc kéo dài và gia hạn thị thực hiện có. Loại nào áp dụng — và yêu cầu những gì — khác nhau theo mục đích lưu trú và theo từng trường hợp, vì vậy chúng tôi luôn bắt đầu bằng việc xác nhận con đường phù hợp cho tình huống của bạn.',
      },
      {
        heading: 'Hỗ trợ giấy phép lao động',
        body: 'Người lao động nước ngoài làm việc tại Lào thường cần giấy phép lao động cùng với thị thực. Chúng tôi chuẩn bị và nộp hồ sơ xin cấp và gia hạn giấy phép lao động, phối hợp với người sử dụng lao động để thị thực và giấy phép luôn đồng bộ.',
      },
      {
        heading: 'Hỗ trợ thị thực nhà đầu tư',
        body: 'Các nhà đầu tư thành lập hoặc góp vốn vào doanh nghiệp tại Lào có thể đủ điều kiện nhận thị thực nhà đầu tư. Điều kiện khác nhau tùy thuộc vào khoản đầu tư và doanh nghiệp, và chúng tôi giúp đánh giá và lập hồ sơ chứng minh điều kiện của bạn trước khi nộp đơn.',
      },
      {
        heading: 'Hỗ trợ lưu trú dài hạn',
        body: 'Đối với những người dự định lưu trú dài hạn tại Lào, có nhiều con đường khả dụng tùy thuộc vào hoàn cảnh cá nhân — bao gồm việc làm, đầu tư, hoặc quan hệ gia đình. Chúng tôi đánh giá các lựa chọn dựa trên tình huống của bạn và quản lý hồ sơ.',
      },
      {
        heading: 'Hỗ trợ lưu trú cho gia đình',
        body: 'Vợ/chồng và các thành viên gia đình thường có các lựa chọn lưu trú gắn liền với một thành viên gia đình đang làm việc hoặc cư trú, hoặc thông qua hôn nhân với công dân Lào. Chúng tôi giúp các gia đình hiểu những gì có thể áp dụng cho họ và chuẩn bị các giấy tờ hỗ trợ.',
      },
      {
        heading: 'Chuẩn bị hồ sơ',
        body: 'Hồ sơ xuất nhập cảnh đòi hỏi nhiều giấy tờ: mẫu đơn, ảnh, bằng chứng việc làm hoặc đầu tư, và các giấy chứng nhận hỗ trợ có thể cần dịch thuật hoặc hợp pháp hóa. Chúng tôi chuẩn bị, kiểm tra, và sắp xếp mọi thứ trước khi nộp.',
      },
      {
        heading: 'Hỗ trợ gia hạn và kéo dài',
        body: 'Thị thực, giấy phép lao động, và giấy phép lưu trú đều có thời hạn hiệu lực, và việc gia hạn đúng thời điểm rất quan trọng. Chúng tôi theo dõi ngày hết hạn cho khách hàng và xử lý việc kéo dài và gia hạn trước khi trở nên khẩn cấp.',
      },
    ],
    process: [
      {
        title: 'Đánh giá tình huống của bạn',
        description:
          'Chúng tôi xem xét mục đích lưu trú, việc làm hoặc đầu tư, và hoàn cảnh gia đình của bạn để xác nhận con đường thị thực và giấy phép phù hợp.',
      },
      {
        title: 'Chuẩn bị hồ sơ',
        description:
          'Chúng tôi thu thập và chuẩn bị các mẫu đơn và giấy tờ hỗ trợ, sắp xếp việc dịch thuật hoặc hợp pháp hóa khi thường cần thiết.',
      },
      {
        title: 'Nộp hồ sơ và liên hệ',
        description:
          'Chúng tôi nộp hồ sơ và phối hợp với các cơ quan liên quan, theo dõi cho đến khi có quyết định.',
      },
      {
        title: 'Duy trì hiệu lực',
        description:
          'Chúng tôi giám sát thời hạn hiệu lực và quản lý việc kéo dài và gia hạn, để tình trạng của bạn tại Lào luôn trong trạng thái tốt.',
      },
    ],
    documents: {
      intro:
        'Yêu cầu khác nhau tùy theo loại thị thực và từng trường hợp, nhưng hồ sơ thường bao gồm:',
      items: [
        'Hộ chiếu còn hiệu lực đủ thời gian',
        'Mẫu đơn và ảnh gần đây',
        'Bằng chứng hỗ trợ về việc làm, đầu tư, hoặc quan hệ gia đình',
        'Đối với giấy phép lao động: giấy tờ của người sử dụng lao động và xác nhận vị trí công việc',
        'Giấy chứng nhận (như giấy chứng nhận kết hôn) có dịch thuật hoặc hợp pháp hóa khi được yêu cầu',
      ],
      note: 'Danh sách này chỉ mang tính định hướng chung — cơ quan chức năng quyết định yêu cầu cho từng hồ sơ, và chúng khác nhau theo loại hình, quốc tịch, và trường hợp.',
    },
    timelineNote:
      'Thời gian xử lý khác nhau theo loại hình, các cơ quan liên quan, và mức độ đầy đủ của hồ sơ. Chúng tôi không công bố khung thời gian cố định — khi hiểu rõ trường hợp của bạn, chúng tôi có thể đưa ra kỳ vọng thực tế và lên kế hoạch gia hạn trước khi hết hạn.',
    howWeHelp: [
      'Đánh giá trung thực về con đường nào phù hợp với tình huống của bạn',
      'Chuẩn bị, dịch thuật, và sắp xếp hồ sơ đầy đủ',
      'Nộp hồ sơ và liên hệ với các cơ quan liên quan',
      'Theo dõi ngày hết hạn, kéo dài, và gia hạn được xử lý chủ động',
      'Hỗ trợ phối hợp cho các thành viên gia đình đi cùng',
    ],
  },

  'legal-family': {
    slug: 'legal-family',
    heroLede:
      'Hỗ trợ pháp lý doanh nghiệp cho công việc kinh doanh của bạn — và sự trợ giúp cẩn trọng, kín đáo trong các vấn đề hôn nhân, gia đình, và giấy tờ cá nhân.',
    overview: [
      'Các vấn đề pháp lý tại Lào hiếm khi được phân loại rõ ràng. Một doanh nghiệp có thể cần rà soát hợp đồng trong tháng này và đăng ký nhãn hiệu trong tháng sau; một gia đình có thể cần đăng ký kết hôn trong năm nay và giấy phép lưu trú cho vợ/chồng nước ngoài trong năm sau. Lĩnh vực hành nghề này bao trùm cả hai khía cạnh.',
      'Về phía doanh nghiệp, chúng tôi hỗ trợ hợp đồng, tuân thủ pháp luật, thẩm định pháp lý, và sở hữu trí tuệ. Về phía cá nhân, chúng tôi giúp công dân Lào và người nước ngoài trong việc đăng ký kết hôn, hỗ trợ ly hôn, và giấy tờ gia đình — những vấn đề mà độ chính xác và sự kín đáo là quan trọng nhất.',
    ],
    whoItsFor: [
      'Công ty cần soạn thảo hoặc rà soát hợp đồng trước khi ký',
      'Doanh nghiệp duy trì tuân thủ pháp luật doanh nghiệp hoặc chuẩn bị cho các giao dịch',
      'Chủ thương hiệu đăng ký nhãn hiệu hoặc bảo vệ sở hữu trí tuệ',
      'Các cặp đôi Lào–nước ngoài đăng ký kết hôn hoặc sắp xếp lưu trú dài hạn cho vợ/chồng',
      'Cá nhân cần chuẩn bị, điều chỉnh, hoặc hợp pháp hóa các giấy tờ hộ tịch gia đình',
    ],
    topics: [
      {
        heading: 'Hỗ trợ pháp lý doanh nghiệp',
        body: 'Chúng tôi cung cấp tư vấn pháp lý thực tế cho các doanh nghiệp hoạt động tại Lào — từ các câu hỏi hằng ngày đến các quyết định về cơ cấu — luôn bằng ngôn ngữ dễ hiểu, với tầm nhìn về bối cảnh thương mại.',
      },
      {
        heading: 'Hỗ trợ hợp đồng',
        body: 'Chúng tôi soạn thảo hợp đồng mới và rà soát các hợp đồng hiện có trước khi bạn ký, giải thích các quyền, nghĩa vụ, và rủi ro chính bằng ngôn ngữ mà bạn có thể hành động dựa trên đó. Chúng tôi hỗ trợ cả tài liệu bằng tiếng Anh và tiếng Lào.',
      },
      {
        heading: 'Tuân thủ pháp luật',
        body: 'Các công ty tại Lào thường mang các nghĩa vụ liên tục — đăng ký cần duy trì, hồ sơ cần nộp, hồ sơ cần lưu giữ. Chúng tôi giúp bạn hiểu những gì thường áp dụng cho công ty của bạn và duy trì nó trong trạng thái tốt.',
      },
      {
        heading: 'Thẩm định pháp lý',
        body: 'Trước khi hợp tác, mua lại, hoặc thực hiện giao dịch quan trọng, chúng tôi tiến hành kiểm tra lý lịch các công ty, tài sản, và giấy tờ, và báo cáo những gì chúng tôi phát hiện — một cách rõ ràng, bao gồm cả những gì không thể xác minh.',
      },
      {
        heading: 'Nhãn hiệu và sở hữu trí tuệ',
        body: 'Chúng tôi hỗ trợ đăng ký nhãn hiệu với Cục Sở hữu Trí tuệ trực thuộc Bộ Công Thương, và bảo vệ sở hữu trí tuệ thực tế — từ kiểm tra khả năng đăng ký đến nộp hồ sơ và theo dõi việc hoàn tất đăng ký.',
      },
      {
        heading: 'Kết hôn với công dân Lào',
        body: 'Hôn nhân giữa công dân Lào và người nước ngoài liên quan đến một thủ tục đăng ký cụ thể với các yêu cầu giấy tờ khác nhau tùy theo trường hợp và quốc tịch của người vợ/chồng nước ngoài. Chúng tôi hướng dẫn các cặp đôi qua từng bước, chuẩn bị giấy tờ, và hỗ trợ dịch thuật cũng như hợp pháp hóa các giấy chứng nhận.',
      },
      {
        heading: 'Hỗ trợ ly hôn',
        body: 'Chúng tôi hỗ trợ về mặt giấy tờ và thủ tục của việc ly hôn — một cách cẩn trọng và kín đáo — bao gồm cả những trường hợp có yếu tố nước ngoài.',
      },
      {
        heading: 'Giấy tờ gia đình',
        body: 'Giấy khai sinh, đăng ký sổ hộ khẩu gia đình, và các giấy tờ hộ tịch khác là nền tảng cho nhiều hồ sơ sau này. Chúng tôi giúp chuẩn bị, điều chỉnh, và hợp pháp hóa giấy tờ gia đình để chúng được chấp nhận khi bạn cần đến.',
      },
      {
        heading: 'Hỗ trợ lưu trú dài hạn cho vợ/chồng nước ngoài',
        body: 'Vợ/chồng nước ngoài của công dân Lào thường có các lựa chọn lưu trú gắn liền với cuộc hôn nhân. Chúng tôi đánh giá những gì có thể áp dụng cho trường hợp của bạn và quản lý hồ sơ cùng với đội ngũ xuất nhập cảnh của chúng tôi.',
      },
    ],
    process: [
      {
        title: 'Hiểu rõ vấn đề',
        description:
          'Trước tiên chúng tôi lắng nghe — dù là vấn đề doanh nghiệp hay cá nhân — và xác nhận vấn đề thực sự cần gì trước khi đề xuất bất cứ điều gì.',
      },
      {
        title: 'Thống nhất phạm vi công việc',
        description:
          'Bạn sẽ nhận được phạm vi công việc và báo giá rõ ràng, để không có bất ngờ nào về những gì chúng tôi sẽ làm hoặc chi phí là bao nhiêu.',
      },
      {
        title: 'Thực hiện và liên hệ',
        description:
          'Chúng tôi chuẩn bị giấy tờ, tiến hành rà soát hoặc kiểm tra, và phối hợp với các cơ quan chức năng và các bên liên quan khi cần thiết.',
      },
      {
        title: 'Bàn giao và theo dõi',
        description:
          'Bạn nhận được kết quả bằng ngôn ngữ dễ hiểu, với các giấy tờ được sắp xếp gọn gàng và hướng dẫn về các bước tiếp theo.',
      },
    ],
    documents: {
      intro:
        'Yêu cầu phụ thuộc rất nhiều vào vấn đề cụ thể, nhưng khách hàng thường được yêu cầu cung cấp:',
      items: [
        'Giấy tờ tùy thân của các bên liên quan',
        'Hợp đồng, giấy tờ doanh nghiệp, hoặc giấy chứng nhận hiện có liên quan đến vấn đề',
        'Đối với đăng ký kết hôn: giấy tờ tình trạng hộ tịch của cả hai bên, có dịch thuật hoặc hợp pháp hóa khi được yêu cầu',
        'Đối với hồ sơ nhãn hiệu: nhãn hiệu, thông tin chủ sở hữu, và các hàng hóa hoặc dịch vụ được bảo hộ',
      ],
      note: 'Mỗi vấn đề đều khác nhau — các cơ quan chức năng và các bên liên quan quyết định những gì thực sự cần thiết, và yêu cầu khác nhau theo từng trường hợp.',
    },
    timelineNote:
      'Thời gian giải quyết một vấn đề pháp lý hoặc gia đình phụ thuộc vào loại vấn đề, các cơ quan liên quan, và mức độ đầy đủ của giấy tờ. Chúng tôi không công bố khung thời gian cố định — chúng tôi đưa ra kỳ vọng trung thực ngay từ đầu mỗi lần hợp tác và cập nhật thông tin cho bạn khi vấn đề tiến triển.',
    howWeHelp: [
      'Tư vấn bằng ngôn ngữ dễ hiểu — bạn luôn hiểu rõ vị trí của mình',
      'Soạn thảo, rà soát, và chuẩn bị giấy tờ cẩn thận',
      'Liên hệ với cơ quan chức năng và các bên liên quan thay mặt bạn',
      'Sự kín đáo và bảo mật trong các vấn đề cá nhân và gia đình',
      'Một đội ngũ duy nhất bao quát cả khía cạnh pháp lý và xuất nhập cảnh của các vấn đề gia đình',
    ],
  },

  'accounting-tax': {
    slug: 'accounting-tax',
    heroLede:
      'Sổ sách đáng tin cậy, hồ sơ được nộp đúng hạn, và tư vấn thuế mà bạn có thể áp dụng ngay — nền tảng tài chính cho việc kinh doanh tại Lào.',
    overview: [
      'Các công ty hoạt động tại Lào thường mang các nghĩa vụ kế toán và thuế ngay từ khi được đăng ký — sổ sách cần lưu giữ, hồ sơ định kỳ cần nộp, và báo cáo hằng năm cần hoàn thành. Những gì thực sự áp dụng phụ thuộc vào quy mô, ngành nghề, và tình trạng đăng ký của công ty.',
      'Super Consulting giữ vững các nền tảng này: sổ sách kế toán chính xác, hồ sơ được chuẩn bị và nộp đúng hạn, tính lương được xử lý đúng cách, và báo cáo rõ ràng để bạn luôn biết tình hình doanh nghiệp của mình.',
    ],
    whoItsFor: [
      'Công ty mới cần đăng ký thuế và thiết lập hệ thống kế toán ngay từ ngày đầu',
      'Doanh nghiệp có vốn đầu tư nước ngoài muốn các yêu cầu của Lào được đội ngũ địa phương xử lý',
      'Công ty đang phát triển thuê ngoài dịch vụ ghi sổ kế toán, tính lương, hoặc khai thuế',
      'Doanh nghiệp đang chuẩn bị cho việc tuân thủ hằng năm và báo cáo tài chính',
    ],
    topics: [
      {
        heading: 'Tổng quan về kế toán',
        body: 'Chúng tôi cung cấp hỗ trợ kế toán phù hợp với các yêu cầu của Lào — thiết lập hệ thống tài khoản, giữ hồ sơ ngăn nắp, và đảm bảo các con số sẵn sàng khi chủ sở hữu, ngân hàng, hoặc cơ quan chức năng cần đến.',
      },
      {
        heading: 'Ghi sổ kế toán',
        body: 'Sổ sách chính xác, cập nhật là nền tảng của mọi thứ khác. Chúng tôi ghi nhận giao dịch, đối chiếu tài khoản, và giữ các tài liệu hỗ trợ ngăn nắp theo nhịp độ hằng tháng.',
      },
      {
        heading: 'Đăng ký thuế',
        body: 'Tính đến tháng 7 năm 2026, mã số thuế thường được cấp cùng với việc đăng ký doanh nghiệp, và tài khoản thuế được quản lý qua hệ thống TaxRIS. Chúng tôi đảm bảo công ty bắt đầu đời sống thuế của mình một cách chính xác và các đăng ký được hoàn tất đầy đủ.',
      },
      {
        heading: 'Khai thuế',
        body: 'Các công ty tại Lào thường có nghĩa vụ khai thuế định kỳ. Chúng tôi chuẩn bị và nộp các tờ khai áp dụng cho doanh nghiệp của bạn và lưu giữ bằng chứng cho mỗi lần nộp.',
      },
      {
        heading: 'Tính lương',
        body: 'Chúng tôi vận hành hệ thống tính lương cho đội ngũ của bạn — tính toán lương, các khai báo và đóng góp liên quan, cùng phiếu lương rõ ràng — một cách chính xác và đúng lịch trình.',
      },
      {
        heading: 'Báo cáo',
        body: 'Từ báo cáo quản trị hằng tháng đến các báo cáo được chuẩn bị cho cơ quan chức năng, chúng tôi cung cấp báo cáo tài chính chính xác, đúng hạn, và dễ hiểu.',
      },
      {
        heading: 'Tuân thủ hằng năm',
        body: 'Mỗi năm mang đến một chu kỳ khóa sổ, báo cáo, và các nghĩa vụ gia hạn khác nhau tùy theo công ty. Chúng tôi theo dõi lịch trình áp dụng cho doanh nghiệp của bạn và hoàn thành từng bước trước thời hạn.',
      },
      {
        heading: 'Kiến thức về thuế',
        body: 'Trung tâm Kiến thức của chúng tôi xuất bản các bài viết bằng ngôn ngữ dễ hiểu về các chủ đề thuế và kế toán của Lào — một điểm khởi đầu tốt trước khi bạn trao đổi với chúng tôi về trường hợp cụ thể của mình.',
      },
    ],
    process: [
      {
        title: 'Rà soát nghĩa vụ của bạn',
        description:
          'Chúng tôi đánh giá tình trạng đăng ký, ngành nghề, và hoạt động của công ty bạn để xác nhận các nghĩa vụ kế toán và thuế thường áp dụng.',
      },
      {
        title: 'Thiết lập nền tảng',
        description:
          'Chúng tôi thiết lập hoặc sắp xếp lại sổ sách kế toán, hoàn tất các đăng ký còn thiếu, và thống nhất lịch trình nộp hồ sơ với bạn.',
      },
      {
        title: 'Vận hành nhịp độ hằng tháng',
        description:
          'Sổ sách được cập nhật, hồ sơ được chuẩn bị và nộp, tính lương được xử lý — cùng với các báo cáo rõ ràng gửi lại cho bạn.',
      },
      {
        title: 'Kết thúc năm đúng cách',
        description:
          'Chúng tôi quản lý chu kỳ khóa sổ, báo cáo, và tuân thủ hằng năm để năm kết thúc gọn gàng như cách nó đã vận hành.',
      },
    ],
    documents: {
      intro:
        'Để tiếp nhận hoặc thiết lập hệ thống kế toán của bạn, chúng tôi thường yêu cầu:',
      items: [
        'Giấy chứng nhận đăng ký doanh nghiệp và đăng ký thuế',
        'Hồ sơ tài chính và các hồ sơ đã nộp trước đây, nếu có',
        'Sao kê ngân hàng và hồ sơ giao dịch',
        'Hợp đồng lao động và lịch sử tính lương cho dịch vụ tính lương',
      ],
      note: 'Những gì cần thiết khác nhau tùy theo tình trạng hồ sơ của bạn và các dịch vụ được sử dụng — chúng tôi xác nhận danh sách chính xác trong quá trình tiếp nhận.',
    },
    timelineNote:
      'Thời hạn nộp hồ sơ và chu kỳ báo cáo do cơ quan chức năng quy định và có thể thay đổi; lịch trình áp dụng phụ thuộc vào tình trạng đăng ký và hoạt động của công ty bạn. Chúng tôi xác nhận lịch trình của bạn trong quá trình tiếp nhận thay vì công bố các thời hạn chung ở đây.',
    howWeHelp: [
      'Một đội ngũ duy nhất cho kế toán, thuế, tính lương, và báo cáo',
      'Lịch trình nộp hồ sơ được thiết kế riêng cho công ty của bạn và được theo dõi cho bạn',
      'Giải thích bằng ngôn ngữ dễ hiểu về những gì áp dụng và lý do tại sao',
      'Bàn giao gọn gàng — hồ sơ của bạn luôn thuộc về bạn, luôn được sắp xếp ngăn nắp',
      'Hỗ trợ tư vấn khi các quyết định có ảnh hưởng về thuế',
    ],
  },
}
