import type { ServicePageContent } from '@/lib/types'

/**
 * Vietnamese translation of `content/en/service-pages.ts`.
 *
 * Guardrail carried across from the English source: nothing here states a
 * fixed price, a guaranteed duration, or a certification Apex has not
 * confirmed holding.
 */

export const servicePages: Record<ServicePageContent['slug'], ServicePageContent> = {
  electrical: {
    slug: 'electrical',
    heroLede:
      'Công trình truyền tải và phân phối ở cấp 115 kV và 22 kV — đường dây, trạm biến áp và thiết bị điện hạ thế, trung thế, cao thế đi kèm.',
    overview: [
      'Apex thi công và đóng điện hạ tầng điện ở hai cấp điện áp chủ đạo của lưới điện Lào: 115 kV cho truyền tải và 22 kV cho phân phối trung thế. Phạm vi bao gồm đường dây trên không và cáp ngầm, phần xây dựng và thiết bị chính của trạm biến áp, máy biến áp phân phối và tủ đóng cắt, cùng hệ thống điện hạ thế bên trong các công trình được cấp điện từ những lưới đó.',
      'Cùng một đội ngũ cũng đảm nhận việc cung cấp thiết bị. Do Apex trực tiếp mua sắm máy biến áp, tủ đóng cắt, cáp và phụ kiện, chủ đầu tư có thể giao cả phần cung cấp lẫn phần lắp đặt cho một nhà thầu duy nhất và chỉ có một bên chịu trách nhiệm về kết quả thí nghiệm của thiết bị đã lắp.',
      'Mọi phạm vi công việc đều kết thúc theo cùng một cách: thí nghiệm trước khi đóng điện, kiểm tra hệ thống bảo vệ và nghiệm thu có sự chứng kiến theo yêu cầu của điện lực. Công trình không hoàn thành khi đã thi công xong — mà hoàn thành khi đã đóng điện và được chứng minh.',
    ],
    whoItsFor: [
      'Điện lực và cơ quan nhà nước mở rộng hoặc tăng cường lưới phân phối và truyền tải',
      'Nhà máy công nghiệp và mỏ cần nguồn cấp riêng, trạm biến áp hoặc nâng cấp điểm đấu nối',
      'Chủ đầu tư bất động sản cần đưa điện tới công trình, khu đô thị hoặc khu công nghiệp mới',
      'Tổng thầu cần giao thầu phụ gói điện của dự án xây dựng quy mô lớn',
      'Chủ sở hữu hệ thống hiện hữu cần bảo trì, thí nghiệm, mở rộng hoặc xử lý sự cố',
    ],
    topics: [
      {
        heading: 'Truyền tải 115 kV và trạm biến áp',
        body: 'Công việc ở cấp truyền tải bao gồm khảo sát và định tuyến, móng cột thép, lắp dựng cột, kéo và căng chỉnh dây dẫn, cùng trạm biến áp ở điểm cuối tuyến. Về phía trạm, phạm vi gồm phần xây dựng và kết cấu, thiết bị chính — máy biến áp lực, máy cắt, dao cách ly, biến dòng và biến áp đo lường, thanh cái — lưới tiếp địa, và hệ thống bảo vệ, điều khiển. Phạm vi được xác định theo bản vẽ mẫu và tiêu chuẩn kỹ thuật của điện lực cho điểm đấu nối đó.',
      },
      {
        heading: 'Phân phối 22 kV',
        body: 'Phần phân phối là mảng khối lượng lớn nhất: đường dây trên không trên cột bê tông hoặc cột thép, cáp ngầm trong khu vực đô thị, trạm phân phối và máy biến áp treo cột, tủ RMU, thiết bị phân đoạn, cùng các hạng mục mở rộng và tăng cường theo mức tăng phụ tải. Công việc phân phối thường bị ràng buộc bởi lưới đang mang điện, nên việc lập kế hoạch cắt điện và phối hợp thao tác với điện lực là một phần của phạm vi, không phải chuyện tính sau.',
      },
      {
        heading: 'Hạ thế và điện công trình',
        body: 'Phía sau máy biến áp, Apex lắp đặt tủ phân phối chính, tuyến nhánh, mạch cuối, ổ cắm và chiếu sáng, cùng hệ thống tiếp địa và liên kết đẳng thế. Ở những dự án Apex đồng thời là nhà thầu xây dựng, phần này được thực hiện trong cùng một tiến độ, loại bỏ tranh cãi quen thuộc về việc ai làm chậm ai.',
      },
      {
        heading: 'Cung cấp thiết bị điện — hạ thế, trung thế và cao thế',
        body: 'Apex cung cấp thiết bị điện đủ ba cấp điện áp: máy biến áp, tủ đóng cắt và RMU, rơ-le bảo vệ và tủ điều khiển, cáp và phụ kiện, cột và phụ kiện đường dây, cùng thiết bị phân phối hạ thế. Có thể nhận riêng phần cung cấp hoặc trọn gói cung cấp và lắp đặt. Khi hồ sơ mời thầu quy định danh mục nhà sản xuất được chấp thuận, Apex mua sắm theo đúng danh mục đó, không thay thế bằng hàng rẻ hơn nếu chưa có chấp thuận bằng văn bản của chủ đầu tư.',
      },
      {
        heading: 'Thí nghiệm, nghiệm thu và đóng điện',
        body: 'Trước khi đóng điện, mọi mạch đều được thí nghiệm và ghi nhận kết quả: điện trở cách điện, thông mạch, điện trở tiếp địa, tỷ số biến và cuộn dây máy biến áp, bơm dòng thí nghiệm rơ-le bảo vệ, và kiểm tra chức năng hệ thống điều khiển, liên động. Việc nghiệm thu có chủ đầu tư hoặc điện lực chứng kiến theo thỏa thuận đấu nối, và hồ sơ thí nghiệm được bàn giao kèm hồ sơ hoàn công.',
      },
    ],
    process: [
      {
        title: 'Khảo sát và xác nhận phạm vi',
        description:
          'Chúng tôi đi thực địa tuyến hoặc mặt bằng, xác nhận điểm đấu nối và các ràng buộc, rồi thống nhất rõ hạng mục nào thuộc phạm vi và hạng mục nào do bên khác thực hiện.',
      },
      {
        title: 'Phối hợp thiết kế và phê duyệt',
        description:
          'Chúng tôi thi công theo thiết kế của chủ đầu tư hoặc điện lực, phối hợp bản vẽ và danh mục thiết bị, đồng thời hỗ trợ các thủ tục phê duyệt trước khi khởi công.',
      },
      {
        title: 'Mua sắm và cung ứng',
        description:
          'Chúng tôi mua sắm máy biến áp, tủ đóng cắt, cáp và vật tư theo đúng tiêu chuẩn kỹ thuật, và sắp xếp tiến độ giao hàng bám theo tiến độ thi công.',
      },
      {
        title: 'Thi công và lắp đặt',
        description:
          'Chúng tôi thi công đường dây, trạm biến áp hoặc hệ thống lắp đặt bằng nhân lực và thiết bị của chính mình, theo quy định an toàn và chất lượng đã thống nhất cho dự án.',
      },
      {
        title: 'Thí nghiệm, nghiệm thu và bàn giao',
        description:
          'Chúng tôi thí nghiệm, nghiệm thu và hỗ trợ đóng điện, sau đó bàn giao hồ sơ thí nghiệm, bản vẽ hoàn công và tài liệu thiết bị.',
      },
    ],
    standards: {
      intro:
        'Công tác điện thường được thực hiện theo tổ hợp các tài liệu sau — bộ tài liệu áp dụng được xác nhận theo từng hợp đồng:',
      items: [
        'Tiêu chuẩn kỹ thuật và yêu cầu đấu nối của điện lực cho cấp điện áp tương ứng',
        'Tiêu chuẩn IEC về thông số thiết bị, thí nghiệm và chứng nhận kiểu',
        'Bản vẽ thiết kế, sơ đồ một sợi và danh mục thiết bị của chủ đầu tư hoặc tư vấn',
        'Quy định và giấy phép của CHDCND Lào áp dụng cho công tác điện và quyền sử dụng hành lang tuyến',
        'Kế hoạch an toàn, môi trường và chất lượng riêng của dự án',
      ],
      note: 'Khi tiêu chuẩn kỹ thuật không đề cập hoặc hai tài liệu mâu thuẫn nhau, chúng tôi làm văn bản hỏi rõ trước khi thi công, thay vì tự diễn giải ngoài công trường.',
    },
    timelineNote:
      'Tiến độ phụ thuộc vào tuyến hoặc mặt bằng, thời gian giao thiết bị, khung giờ cắt điện được phép trên lưới đang vận hành, và trình tự phê duyệt. Chúng tôi lập tiến độ theo phạm vi đã xác nhận và báo cáo theo tiến độ đó, thay vì đưa ra thời hạn khi chưa khảo sát.',
    howWeHelp: [
      'Một nhà thầu cho cả phần cung cấp thiết bị và lắp đặt, nên trách nhiệm về kết quả thí nghiệm không bị chia đôi',
      'Đội ngũ có kinh nghiệm ở cả cấp truyền tải 115 kV và cấp phân phối 22 kV',
      'Kế hoạch cắt điện và phối hợp thao tác với điện lực nằm trong phạm vi công việc',
      'Bàn giao đầy đủ hồ sơ thí nghiệm và nghiệm thu, không chỉ một hệ thống đã lắp xong',
      'Năng lực xây dựng sẵn có nội bộ, nên phần móng, đào rãnh và đường công vụ không cần thêm nhà thầu khác',
    ],
  },

  'piling-foundation': {
    slug: 'piling-foundation',
    heroLede:
      'Cọc đóng, cọc khoan nhồi, cừ larsen và phần kết cấu ngầm chịu toàn bộ tải trọng bên trên — năng lực Apex thực hiện lâu nhất.',
    overview: [
      'Nền móng và cọc là nơi Apex khởi nghiệp, và đến nay vẫn là mảng có bề dày kinh nghiệm nhất. Phạm vi trải từ định vị và thi công cọc, qua thí nghiệm, cắt đầu cọc, đài cọc và giằng móng, đến thời điểm nhà thầu phần thân có thể bắt đầu.',
      'Chọn biện pháp nào là câu hỏi về nền đất, không phải về sở thích. Cọc bê tông đúc sẵn thi công nhanh và cho hồ sơ độ chối rõ ràng khi điều kiện địa chất phù hợp. Cọc khoan nhồi phù hợp với địa tầng thay đổi, mặt bằng hạn chế chiều cao, hoặc nơi rung động do đóng cọc có thể gây hư hại công trình lân cận. Cừ larsen dùng để chắn giữ hố đào và thi công ven sông. Chúng tôi kiến nghị dựa trên báo cáo địa chất và điều kiện mặt bằng, và sẽ nói thẳng khi biện pháp được chỉ định là không phù hợp.',
      'Công tác nền móng không cho phép sửa sai, vì nó nằm dưới đất. Vì vậy thí nghiệm và lập hồ sơ được coi là một phần của sản phẩm bàn giao: hồ sơ độ chối, thí nghiệm khuyết tật, thí nghiệm sức chịu tải theo quy định, và tọa độ cọc hoàn công.',
    ],
    whoItsFor: [
      'Nhà thầu xây dựng và chủ đầu tư cần hoàn thành gói kết cấu ngầm trước khi thi công phần thân',
      'Dự án cầu và hạ tầng cần móng cọc cho trụ và mố',
      'Khách hàng công nghiệp cần làm móng cho thiết bị nặng, bồn, silo hoặc bệ cẩu',
      'Dự án trên nền đất yếu hoặc không đồng nhất, nơi sức chịu tải phải được thiết kế chứ không phải phỏng đoán',
      'Công trường cần chắn giữ hố đào, đê quây hoặc kết cấu chắn đất',
    ],
    topics: [
      {
        heading: 'Cọc đóng',
        body: 'Cọc bê tông đúc sẵn và cọc thép được đóng đến độ chối hoặc chiều sâu thiết kế bằng búa phù hợp với tiết diện cọc và điều kiện địa chất. Hồ sơ đóng cọc — số nhát búa, độ xuyên, độ chối cuối cùng — được lập cho từng cọc và bàn giao trong hồ sơ nghiệm thu, bởi hồ sơ độ chối là bằng chứng chính cho thấy cọc đã đạt sức chịu tải thiết kế.',
      },
      {
        heading: 'Cọc khoan nhồi',
        body: 'Cọc đổ tại chỗ, khoan và đổ bê tông ngay tại vị trí, có ống vách tạm hoặc dung dịch giữ thành khi thành hố không tự đứng. Cọc khoan nhồi là lời giải khi địa tầng thay đổi, khi dự kiến gặp chướng ngại vật, khi bị hạn chế chiều cao thi công, hoặc khi rung động do đóng cọc có nguy cơ làm hư hại công trình liền kề — một ràng buộc phổ biến ở các lô đất xen kẹt trong đô thị.',
      },
      {
        heading: 'Cừ larsen và chắn giữ hố đào',
        body: 'Tường cừ dùng cho chắn giữ hố đào, đê quây, thi công bờ sông và mố cầu, cũng như kết cấu tạm nói chung. Cừ larsen thường là thứ khiến một hố đào sâu trở nên khả thi, và được thiết kế, thi công như một kết cấu tạm có tính toán, chứ không phải xử lý tùy cơ ngoài hiện trường.',
      },
      {
        heading: 'Thí nghiệm cọc',
        body: 'Thí nghiệm nén tĩnh, thí nghiệm động và kiểm tra khuyết tật được thực hiện theo tần suất quy định và báo cáo chính thức. Khi kết quả thấp hơn giả thiết thiết kế, chúng tôi báo ngay cho chủ đầu tư và tư vấn thiết kế — một cây cọc âm thầm không đạt thí nghiệm là thứ đắt đỏ nhất trên bất kỳ công trường nào.',
      },
      {
        heading: 'Đài cọc, giằng móng và công tác đất',
        body: 'Sau khi cọc được thi công và nghiệm thu, phần kết cấu ngầm được hoàn thiện: cắt và đập đầu cọc, gia công cốt thép, đài cọc, giằng móng và dầm liên kết, cùng công tác đào, hạ mực nước ngầm, đắp trả và đầm nén đi kèm. Nhận trọn gói đến bước này nghĩa là nhà thầu phần thân tiếp nhận một mặt bằng phẳng, đã đo đạc và sẵn sàng thi công.',
      },
    ],
    process: [
      {
        title: 'Rà soát hồ sơ khảo sát địa chất',
        description:
          'Chúng tôi đọc báo cáo địa chất đối chiếu với tải trọng thiết kế và điều kiện mặt bằng, rồi xác nhận loại cọc và chiều sâu được chỉ định có phù hợp hay không.',
      },
      {
        title: 'Biện pháp thi công và định vị',
        description:
          'Chúng tôi thống nhất biện pháp, thiết bị và trình tự thi công, sau đó định vị tim cọc bằng máy trắc đạc và ghi nhận trước khi thi công.',
      },
      {
        title: 'Thi công và ghi chép',
        description:
          'Chúng tôi thi công cọc bằng thiết bị và nhân lực của mình, lập hồ sơ từng cọc về độ chối, chiều sâu hoặc khối lượng bê tông tùy theo biện pháp.',
      },
      {
        title: 'Thí nghiệm và kiểm chứng',
        description:
          'Chúng tôi thực hiện thí nghiệm khuyết tật và sức chịu tải theo quy định, báo cáo chính thức và báo ngay cho tư vấn khi phát hiện sai khác.',
      },
      {
        title: 'Hoàn thiện kết cấu ngầm',
        description:
          'Chúng tôi cắt đầu cọc và thi công đài cọc, giằng móng cùng công tác đất liên quan, bàn giao hồ sơ đo đạc hoàn công phần ngầm.',
      },
    ],
    standards: {
      intro:
        'Công tác nền móng được thực hiện theo hồ sơ dự án và các tiêu chuẩn kỹ thuật áp dụng, thường bao gồm:',
      items: [
        'Báo cáo khảo sát địa chất công trình và thiết kế móng của đơn vị tư vấn',
        'Bản vẽ kết cấu, bảng thống kê cọc và tải trọng làm việc quy định',
        'Chế độ thí nghiệm quy định — kiểm tra khuyết tật, nén tĩnh hoặc thí nghiệm động, và tần suất',
        'Tiêu chuẩn bê tông và cốt thép, gồm cấp phối và chiều dày lớp bảo vệ',
        'Thiết kế kết cấu tạm cho chắn giữ hố đào, hệ chống và đê quây',
        'Kế hoạch an toàn, môi trường và chất lượng của dự án',
      ],
      note: 'Nền đất thực tế hiếm khi trùng khớp hoàn toàn với hình trụ hố khoan. Khi điều kiện hiện trường khác biệt đáng kể so với kết quả khảo sát, chúng tôi dừng lại, ghi nhận và trình tư vấn trước khi thi công tiếp.',
    },
    timelineNote:
      'Tiến độ phụ thuộc số lượng và chiều sâu cọc, điều kiện địa chất gặp thực tế, khả năng huy động thiết bị, đường vào và chế độ thí nghiệm. Năng suất máy thi công chênh lệch đáng kể giữa các công trường, nên chúng tôi lập tiến độ theo bảng thống kê cọc đã xác nhận và báo cáo tiến độ theo từng cọc.',
    howWeHelp: [
      'Cọc đóng, cọc khoan nhồi và cừ larsen đều tự thực hiện — biện pháp chọn theo nền đất, không theo thiết bị sẵn có',
      'Bề dày kinh nghiệm lớn nhất trong các năng lực của Apex, trải khắp công trình dân dụng, cầu và móng công nghiệp',
      'Hồ sơ từng cọc và báo cáo thí nghiệm chính thức là một phần của sản phẩm bàn giao',
      'Nhận kết cấu ngầm đến đài cọc và giằng móng, nhà thầu phần thân bắt đầu trên mặt bằng đã hoàn thiện',
      'Báo cáo sai khác ngay lập tức thay vì phát hiện muộn, khi một cây cọc đã nằm dưới đất và việc khắc phục tốn kém hơn nhiều',
    ],
  },

  'roads-bridges': {
    slug: 'roads-bridges',
    heroLede:
      'Tuyến đường, công tác cải tạo, cầu bê tông cốt thép, cống và hệ thống thoát nước — thi công từ nền đường lên, với hệ thoát nước đủ sức qua mùa mưa.',
    overview: [
      'Apex xây dựng và cải tạo đường cùng các công trình đưa đường vượt sông suối. Phạm vi gồm phát quang và công tác đất, nền đường và các lớp móng, mặt đường bê tông và asphalt, cầu, cống hộp và cống tròn, rãnh dọc và cửa xả, bảo vệ mái taluy, cùng hệ thống an toàn giao thông.',
      'Trong điều kiện Lào, yếu tố quyết định tuổi thọ mặt đường thường là thoát nước và độ chặt, không phải lớp mặt. Nước không được dẫn ra khỏi kết cấu áo đường sẽ tìm đường thấm vào, và một lớp nền không được đầm nén đúng sẽ lộ ra qua bất kỳ lớp mặt nào phủ lên trên. Chúng tôi thi công và kiểm tra theo đúng thực tế đó: độ chặt được thí nghiệm theo tần suất quy định, và hệ thoát nước được làm đúng thiết kế thay vì bị cắt bớt khi tiến độ căng.',
      'Công tác cầu là thi công bê tông cốt thép — móng, thường do chính đội cọc của chúng tôi thực hiện, rồi đến trụ, mố, dầm và bản mặt cầu, cùng nền đường đầu cầu và bảo vệ mái taluy nối công trình với tuyến đường.',
    ],
    whoItsFor: [
      'Cơ quan nhà nước và chính quyền tỉnh tổ chức đấu thầu công trình đường và cầu',
      'Dự án phát triển và dự án nhượng quyền cần đường công vụ, đường nội bộ hoặc công trình vượt sông',
      'Khu công nghiệp, mỏ và dự án năng lượng cần đường vào và đường vận chuyển chịu tải nặng',
      'Chủ đầu tư bất động sản xây dựng hạ tầng đường và thoát nước trong khu đô thị mới',
      'Chủ sở hữu tuyến đường hiện hữu cần cải tạo, thảm tăng cường hoặc khắc phục thoát nước',
    ],
    topics: [
      {
        heading: 'Xây dựng đường',
        body: 'Tuyến mới từ phát quang và đào gốc, đào đắp, đắp nền đường, chuẩn bị nền, các lớp móng dưới và móng trên, đến lớp mặt theo thiết kế. Độ chặt được thí nghiệm theo tần suất quy định và ghi nhận theo từng lớp — lớp nằm dưới lớp đang thí nghiệm không thể làm lại về sau.',
      },
      {
        heading: 'Cải tạo và thảm tăng cường',
        body: 'Mặt đường hiện hữu được làm lại kết cấu, vá hoặc thảm tăng cường. Việc cải tạo bắt đầu bằng câu hỏi vì sao mặt đường hỏng: phần lớn trường hợp câu trả lời là nước trong kết cấu áo đường, khi đó chỉ thảm tăng cường chỉ kéo dài thêm một thời gian ngắn và bắt buộc phải xử lý thoát nước như một phần của công việc.',
      },
      {
        heading: 'Cầu',
        body: 'Cầu bê tông cốt thép thi công từ móng lên — móng cọc hoặc móng nông, trụ và mố, dầm, bản mặt cầu, lan can, gối cầu và khe co giãn, cùng tường cánh, nền đường đầu cầu và chống xói. Khi móng là móng cọc, chính đội cọc của chúng tôi thi công trong cùng một hợp đồng.',
      },
      {
        heading: 'Cống và thoát nước',
        body: 'Cống hộp, cống tròn, rãnh dọc và rãnh đón nước, tường đầu cống và cửa xả. Hệ thoát nước được tính toán theo lưu lượng thiết kế và thi công đúng độ dốc, bởi một cống đặt sai cao độ đáy là khiếm khuyết vĩnh viễn mà không mức độ bảo trì nào khắc phục được.',
      },
      {
        heading: 'Bảo vệ mái taluy và hệ thống an toàn',
        body: 'Rọ đá, đá hộc, tường chắn và chống xói bằng thảm thực vật trên mái đào và mái đắp, cùng hộ lan, biển báo, vạch sơn và cọc tiêu. Trên các tuyến nông thôn, bảo vệ mái taluy thường là yếu tố quyết định tuyến đường có nguyên vẹn qua mùa mưa đầu tiên hay không.',
      },
    ],
    process: [
      {
        title: 'Khảo sát và định tuyến',
        description:
          'Chúng tôi khảo sát tuyến hoặc mặt đường hiện hữu, xác nhận cao độ và các cửa xả thoát nước, rồi định vị công trình theo thiết kế.',
      },
      {
        title: 'Xác nhận vật liệu và cấp phối',
        description:
          'Chúng tôi xác định mỏ đất và mỏ đá, thí nghiệm vật liệu đối chiếu tiêu chuẩn, và thống nhất cấp phối bê tông, asphalt trước khi sản xuất.',
      },
      {
        title: 'Công tác đất và công trình',
        description:
          'Chúng tôi thi công phần đất, thoát nước và các công trình — cầu và cống thường được bố trí sớm để không cản trở thi công mặt đường.',
      },
      {
        title: 'Thi công kết cấu áo đường',
        description:
          'Chúng tôi thi công từng lớp một, thí nghiệm độ chặt và cao độ ở mỗi lớp trước khi lớp tiếp theo phủ lên.',
      },
      {
        title: 'Hoàn thiện và bàn giao',
        description:
          'Chúng tôi hoàn thành bảo vệ mái taluy, hệ thống an toàn và vạch sơn, rồi bàn giao bản vẽ hoàn công cùng hồ sơ thí nghiệm vật liệu và độ chặt.',
      },
    ],
    standards: {
      intro:
        'Công trình đường và cầu được thực hiện theo hồ sơ hợp đồng và các tiêu chuẩn áp dụng, thường bao gồm:',
      items: [
        'Bản vẽ thiết kế, bình đồ tuyến và trắc ngang điển hình của chủ đầu tư hoặc tư vấn',
        'Chỉ dẫn kỹ thuật dự án cho công tác đất, các lớp áo đường, bê tông và asphalt',
        'Tần suất thí nghiệm vật liệu và thí nghiệm độ chặt theo quy định',
        'Quy định và giấy phép của CHDCND Lào về thi công đường, tổ chức giao thông và bảo vệ môi trường',
        'Yêu cầu thiết kế kết cấu và tải trọng cho cầu và cống lớn',
        'Kế hoạch an toàn, môi trường và chất lượng của dự án',
      ],
      note: 'Khi thiết kế mâu thuẫn với thực tế nền đất hoặc hệ thoát nước hiện hữu, chúng tôi làm văn bản trình tư vấn thay vì thi công đúng bản vẽ để tạo ra một khiếm khuyết.',
    },
    timelineNote:
      'Tiến độ công trình đường và cầu bị chi phối bởi thời tiết. Công tác đất và các lớp áo đường không thể thi công đạt tiêu chuẩn trong mưa kéo dài, nên một tiến độ thực tế phải được lập vòng qua mùa mưa chứ không xuyên qua nó. Chúng tôi lập tiến độ theo phạm vi đã xác nhận và báo cáo theo tiến độ đó.',
    howWeHelp: [
      'Năng lực thi công cọc sẵn có nội bộ, nên móng cầu không cần nhà thầu riêng hay tiến độ riêng',
      'Hệ thoát nước làm đúng thiết kế, không bị cắt bớt khi tiến độ căng — đó là thứ quyết định tuổi thọ tuyến đường',
      'Hồ sơ thí nghiệm độ chặt và vật liệu lập theo từng lớp và bàn giao khi hoàn thành',
      'Kinh nghiệm trải rộng, từ tuyến tỉnh lộ đến đường nội bộ khu đô thị và đường vận chuyển tải nặng',
      'Tính đến mùa mưa ngay từ khi lập tiến độ, thay vì phát hiện ra giữa chừng',
    ],
  },

  'buildings-property': {
    slug: 'buildings-property',
    heroLede:
      'Công trình thương mại, nhà ở và công nghiệp từ phần ngầm đến bàn giao — cùng đất đai và bất động sản do chính Apex phát triển.',
    overview: [
      'Apex xây dựng công trình thương mại, nhà ở và công nghiệp, đồng thời hoạt động như một nhà phát triển bất động sản bằng nguồn vốn của chính mình. Với vai trò nhà thầu, phạm vi trải từ phần ngầm qua kết cấu khung, vỏ công trình, hệ thống kỹ thuật và hoàn thiện đến bàn giao. Với vai trò chủ đầu tư, Apex đưa quỹ đất qua nghiên cứu khả thi, thủ tục pháp lý, thi công và ra thị trường bằng hình thức bán hoặc cho thuê.',
      'Điểm mạnh của sự kết hợp này là khả năng tự thực hiện. Thi công cọc, hạ tầng kỹ thuật khu đất và lắp đặt hệ thống điện đều là năng lực nội bộ, nên một dự án công trình không phụ thuộc vào ba nhà thầu phải ngồi lại xác định lỗi chậm trễ thuộc về ai. Ở khu đất cần cả trạm biến áp lẫn kết cấu công trình, cả hai đều đến từ một tổ chức.',
      'Ở mảng phát triển, Apex đặt vốn của chính mình vào rủi ro, điều đó đặt ra một chuẩn mực khác về mức độ kỹ lưỡng khi kiểm tra nền đất, hạ tầng kỹ thuật và thủ tục pháp lý trước khi khởi công.',
    ],
    whoItsFor: [
      'Chủ sở hữu và nhà đầu tư triển khai công trình thương mại, nhà ở hoặc công nghiệp',
      'Doanh nghiệp cần nhà kho, xưởng hoặc nhà công nghiệp nhẹ kèm sân bãi và nguồn điện tương ứng',
      'Chủ đầu tư cần một nhà thầu có thể làm cả hạ tầng kỹ thuật và đấu nối điện',
      'Chủ sở hữu công trình hiện hữu có kế hoạch cải tạo, mở rộng hoặc hoàn thiện nội thất',
      'Chủ đất và đối tác đang cân nhắc hợp tác phát triển một khu đất',
    ],
    topics: [
      {
        heading: 'Công trình thương mại và nhà ở',
        body: 'Văn phòng, thương mại, công trình hỗn hợp, nhà ở và khối căn hộ, thực hiện từ phần ngầm đến bàn giao. Phạm vi thường gồm khung bê tông cốt thép, vỏ công trình, mái, vách ngăn, hoàn thiện và lắp đặt hệ thống kỹ thuật, phối hợp trong một tiến độ duy nhất dưới một hợp đồng.',
      },
      {
        heading: 'Công trình công nghiệp và nhà kho',
        body: 'Nhà kho, xưởng và nhà công nghiệp nhẹ, bao gồm sàn và sân bãi bê tông được thiết kế theo tải trọng khai thác thực tế — xe nâng, xe tải hay hệ giá kệ — chứ không theo một chỉ dẫn sàn chung chung. Công trình công nghiệp thường có phụ tải điện đáng kể, và đó là nơi năng lực trung thế nội bộ phát huy giá trị rõ nhất.',
      },
      {
        heading: 'Công tác kết cấu',
        body: 'Khung bê tông cốt thép, sàn, lõi và lắp dựng cấu kiện đúc sẵn, đặt trên hệ cọc do chính đội của chúng tôi thi công khi nền đất yêu cầu. Bê tông được đổ theo cấp phối đã duyệt, có thí nghiệm mẫu theo tần suất quy định, và kết quả là một phần của hồ sơ bàn giao.',
      },
      {
        heading: 'Hệ thống kỹ thuật và đấu nối',
        body: 'Lắp đặt điện, cấp nước, thoát nước và thông gió trong công trình, cùng phần đấu nối nguồn — bao gồm máy biến áp, tủ trung thế và trạm biến áp khi phụ tải yêu cầu. Do Apex cũng thi công lưới phân phối, phần đấu nối được coi là một phần của phạm vi công trình chứ không phải việc của người khác.',
      },
      {
        heading: 'Phát triển bất động sản',
        body: 'Khi Apex giữ vai trò chủ đầu tư, công việc bao gồm đánh giá khu đất và nghiên cứu khả thi, thủ tục đất đai và cấp phép, quy hoạch tổng mặt bằng cùng đơn vị thiết kế, thi công hạ tầng và công trình, và lộ trình ra thị trường qua bán hoặc cho thuê. Các dự án phát triển được vận hành như hoạt động kinh doanh độc lập với các mốc phê duyệt riêng.',
      },
    ],
    process: [
      {
        title: 'Tiếp nhận yêu cầu và đánh giá khu đất',
        description:
          'Chúng tôi soi yêu cầu vào thực tế khu đất: điều kiện địa chất, đường vào, nguồn điện và nước sẵn có, cửa xả thoát nước, và các thủ tục pháp lý dự án sẽ cần.',
      },
      {
        title: 'Phối hợp thiết kế và lập giá',
        description:
          'Chúng tôi làm việc với đơn vị thiết kế của chủ đầu tư để phối hợp bản vẽ, chỉ ra các vướng mắc thi công từ sớm, và lập giá theo phạm vi đã xác nhận.',
      },
      {
        title: 'Phần ngầm',
        description:
          'Chúng tôi thi công cọc, móng và hạ tầng khu đất bằng nhân lực của mình, để phần thân bắt đầu trên một mặt bằng đã đo đạc và nghiệm thu.',
      },
      {
        title: 'Kết cấu, vỏ công trình và hệ thống',
        description:
          'Chúng tôi thi công khung, đóng kín vỏ công trình, lắp đặt hệ thống kỹ thuật và đấu nối nguồn điện trong một tiến độ được phối hợp thống nhất.',
      },
      {
        title: 'Hoàn thiện, nghiệm thu và bàn giao',
        description:
          'Chúng tôi hoàn thiện, nghiệm thu hệ thống, rồi bàn giao bản vẽ hoàn công, hồ sơ thí nghiệm và tài liệu thiết bị.',
      },
    ],
    standards: {
      intro:
        'Công trình xây dựng được thực hiện theo hồ sơ hợp đồng và các tiêu chuẩn áp dụng, thường bao gồm:',
      items: [
        'Bản vẽ và chỉ dẫn kỹ thuật phần kiến trúc, kết cấu và cơ điện',
        'Quy chuẩn xây dựng, giấy phép xây dựng và yêu cầu của chính quyền địa phương CHDCND Lào',
        'Tiêu chuẩn bê tông, cốt thép và kết cấu thép, kèm tần suất thí nghiệm quy định',
        'Tiêu chuẩn lắp đặt điện và yêu cầu đấu nối của điện lực khi có cấp nguồn',
        'Yêu cầu về phòng cháy chữa cháy và an toàn sinh mạng theo loại công trình',
        'Kế hoạch an toàn, môi trường và chất lượng của dự án',
      ],
      note: 'Khi bản vẽ kiến trúc, kết cấu và cơ điện không khớp nhau — điều rồi cũng xảy ra ở hầu hết dự án — chúng tôi xử lý cùng đơn vị thiết kế trước khi thi công, không phải sau đó.',
    },
    timelineNote:
      'Tiến độ phụ thuộc vào mức độ hoàn chỉnh của thiết kế đủ để thi công, vào thủ tục cấp phép, và vào thời gian giao vật tư, thiết bị nhập khẩu. Thay đổi thiết kế muộn và phê duyệt muộn là hai nguyên nhân phổ biến nhất làm dời ngày hoàn thành, nên chúng tôi theo dõi cả hai một cách rõ ràng và báo cáo ảnh hưởng tiến độ ngay khi phát sinh.',
    howWeHelp: [
      'Cọc, phần xây dựng, kết cấu và điện đều tự thực hiện trong một tiến độ duy nhất',
      'Phần đấu nối nguồn điện, kể cả trạm biến áp, được coi là một phần của phạm vi công trình',
      'Sàn và sân bãi thiết kế theo tải trọng công trình thực sự phải chịu',
      'Hồ sơ thí nghiệm bê tông và lắp đặt bàn giao kèm bản vẽ hoàn công',
      'Apex vừa là chủ đầu tư vừa là nhà thầu — chúng tôi đã tự chịu đúng rủi ro mà khách hàng đang chịu',
    ],
  },
}
