import { PLDCOfficialExam } from './pldc_exams_part1';

export const VNU1001_EXAMS: PLDCOfficialExam[] = [
  {
    id: "vnu1001-exam-t1",
    testId: 1,
    title: "Đề thi Năng lực số - Đề số 1",
    description: "Đề chuẩn thi trắc nghiệm kết thúc học phần Năng lực số, định hướng cấu trúc 40 câu hỏi cơ bản và thực tế.",
    questions: [
      {
        q: "Thành phần nào sau đây được xem là phần cứng của máy tính?",
        o: ["Hệ điều hành", "Bộ vi xử lý (CPU)", "Trình duyệt web", "Phần mềm diệt virus"],
        c: 1,
        e: "CPU là Central Processing Unit, thiết bị phần cứng cốt lõi xử lý thông tin. Các lựa chọn khác là phần mềm."
      },
      {
        q: "Hệ điều hành có vai trò chính nào sau đây?",
        o: ["Soạn thảo văn bản và tính toán", "Quản lý và điều phối tài nguyên hệ thống", "Lưu trữ dữ liệu người dùng", "Tạo nội dung đa phương tiện"],
        c: 1,
        e: "Hệ điều hành quản lý phần cứng, phân phối tài nguyên cho các phần mềm khác vận hành ổn định."
      },
      {
        q: "Định dạng tệp nào sau đây thường dùng cho văn bản có thể chỉnh sửa?",
        o: [".jpg", ".mp3", ".docx", ".mp4"],
        c: 2,
        e: "Định dạng .docx là định dạng chuẩn của Microsoft Word dành cho văn bản có thể chỉnh sửa."
      },
      {
        q: "AI là viết tắt của cụm từ nào?",
        o: ["Automatic Internet", "Artificial Intelligence", "Advanced Information", "Applied Interface"],
        c: 1,
        e: "Artificial Intelligence nghĩa là Trí tuệ nhân tạo."
      },
      {
        q: "GenAI khác AI truyền thống ở điểm nào?",
        o: ["Chỉ xử lý số liệu", "Có khả năng tạo nội dung mới", "Không cần dữ liệu huấn luyện", "Không học từ dữ liệu"],
        c: 1,
        e: "Generative AI là Trí tuệ tạo sinh, nổi bật ở khả năng tự động tạo mới văn bản, hình ảnh, âm thanh từ dữ liệu đã học."
      },
      {
        q: "Netiquette là thuật ngữ chỉ:",
        o: ["Luật pháp nghiêm cấm trên Internet", "Kỹ thuật bảo mật hệ thống mạng", "Quy tắc ứng xử lịch sự trong môi trường số", "Phần mềm lọc và gửi email"],
        c: 2,
        e: "Netiquette (mạng văn minh) là từ ghép của Net và Etiquette, chỉ các quy tắc ứng xử chuẩn mực của con người khi giao tiếp số."
      },
      {
        q: "Canva AI thường được sử dụng để làm gì?",
        o: ["Phân tích dữ liệu lớn (Big Data)", "Thiết kế và sáng tạo nội dung hình ảnh, slide trực quan", "Lập trình thiết kế trang web", "Quản trị hệ thống máy chủ"],
        c: 1,
        e: "Canva AI hỗ trợ tự động gợi ý thiết kế, tạo hình ảnh và bố cục slide nhanh cho sáng tạo nội dung số."
      },
      {
        q: "Hành vi nào sau đây giúp bảo mật tài khoản cá nhân tốt hơn?",
        o: ["Dùng cùng một mật khẩu cho mọi dịch vụ", "Chia sẻ mật khẩu tài khoản cho bạn thân", "Sử dụng xác thực hai yếu tố (2FA)", "Lưu trữ mật khẩu dạng công khai"],
        c: 2,
        e: "Xác thực hai yếu tố (2FA) đòi hỏi thêm một mốc xác minh thứ hai giúp tăng cường bảo mật cực tốt."
      },
      {
        q: "Khi máy tính không kết nối được Wi-Fi, thao tác nào nên thực hiện đầu tiên?",
        o: ["Cài đặt lại hệ điều hành Windows", "Kiểm tra biểu tượng mạng và trạng thái Wi-Fi", "Thay thế ổ cứng mới", "Cài đặt lại phần mềm đồ họa"],
        c: 1,
        e: "Nên kiểm tra các dấu hiệu hiển thị vật lý hoặc biểu tượng kết nối mạng trước khi thực hiện các bước can thiệp sâu."
      },
      {
        q: "Bluetooth thường được sử dụng hiệu quả để làm gì?",
        o: ["Kết nối mạng Internet xuyên lục địa", "Truyền dữ liệu không dây ở khoảng cách ngắn", "Lưu trữ dữ liệu an toàn", "Tăng tốc độ xử lý của CPU"],
        c: 1,
        e: "Bluetooth là giao thức kết nối không dây tầm ngắn (thường trong phạm vi dưới 10m)."
      },
      {
        q: "Phần mềm nào sau đây là phần mềm ứng dụng?",
        o: ["BIOS", "Hệ điều hành Windows", "Microsoft Word", "Firmware hệ thống"],
        c: 2,
        e: "Microsoft Word phục vụ trực tiếp nhu cầu soạn thảo văn bản học tập của người dùng nên là phần mềm ứng dụng."
      },
      {
        q: "Giao thức HTTP chủ yếu được sử dụng để làm gì?",
        o: ["Truyền tệp tài liệu nội bộ", "Truy cập và tải các trang web trên Internet", "Kết nối thiết bị ngoại vi không dây", "Bảo mật mã hóa mật khẩu"],
        c: 1,
        e: "Hypertext Transfer Protocol (HTTP) là giao thức truyền siêu văn bản dùng để load dữ liệu trang web."
      },
      {
        q: "Khi tìm kiếm thông tin học thuật trực tuyến, từ khóa nào sau đây sẽ mang lại hiệu quả nhất?",
        o: ["Từ khóa chung chung một từ", "Các câu hỏi dài dòng nhiều từ biểu cảm", "Từ khóa chính xác chứa cụm từ chuyên ngành", "Tên tài khoản người dùng đăng tải"],
        c: 2,
        e: "Từ khóa chính xác, ngắn gọn và có tính chuyên ngành giúp bộ lọc công cụ tìm kiếm trả về thông tin sát sườn nhất."
      },
      {
        q: "Công cụ nào sau đây hỗ trợ tìm kiếm tài liệu khoa học tốt hơn Google thông thường?",
        o: ["Google Scholar", "Google Maps", "Google Drive", "Google Forms"],
        c: 0,
        e: "Google Scholar là trang tìm kiếm chuyên dùng để tra cứu các tài liệu học thuật, luận văn, bài viết khoa học chính thống."
      },
      {
        q: "Trí tuệ nhân tạo (AI) có thể hỗ trợ con người tìm kiếm thông tin hiệu quả bằng cách nào?",
        o: ["Sao chép nguyên văn tất cả các tài liệu", "Tóm tắt nội dung chính và gợi ý thông tin liên quan", "Tự động xóa dữ liệu gốc của trang web", "Chặn hoàn toàn quyền truy cập Internet"],
        c: 1,
        e: "AI tóm tắt và tổng hợp thông tin đa nguồn giúp người dùng tiết kiệm thời gian đọc và đánh giá tài liệu."
      },
      {
        q: "Khi đánh giá độ tin cậy của thông tin trực tuyến, tiêu chí nào sau đây KHÔNG phù hợp?",
        o: ["Nguồn gốc xuất bản rõ ràng", "Độ cập nhật (thời gian đăng bài)", "Tính chính xác của số liệu dẫn chứng", "Màu sắc trình bày của trang web"],
        c: 3,
        e: "Màu sắc, giao diện trang web đẹp không bảo chứng cho tính đúng đắn và tin cậy của thông tin."
      },
      {
        q: "Dấu hiệu nào sau đây cảnh báo một nguồn tin có khả năng cao là tin giả (Fake news)?",
        o: ["Có nguồn trích dẫn rõ ràng", "Sử dụng tiêu đề giật tít vô văn cứ, kích động, không khớp nội dung", "Cung cấp số liệu biện chứng kiểm chứng được", "Được duyệt bởi ban biên tập"],
        c: 1,
        e: "Tin giả thường dùng tiêu đề phóng đại, từ ngữ kịch tính để câu kéo lượng tương tác mà thiếu dẫn chứng cụ thể."
      },
      {
        q: "Khi gặp một thông tin nghi ngờ sai lệch, hành động đúng đắn của người học là gì?",
        o: ["Chia sẻ ngay lập tức cho bạn bè", "Bỏ qua hoàn toàn và không cần quan tâm", "Kiểm chứng chéo thông tin từ nhiều nguồn tin độc lập", "Tin tưởng tuyệt đối vì hiển thị trên mạng xã hội"],
        c: 2,
        e: "Cross-checking (Kiểm chứng chéo) giúp loại bỏ định kiến cá nhân và xác nhận thông tin trung thực khách quan."
      },
      {
        q: "Một câu lệnh (Prompt) hiệu quả gửi cho AI cần đảm bảo yếu tố cơ bản nào?",
        o: ["Phải ngắn nhất có thể, chỉ một từ", "Rõ ràng ý định, cung cấp đầy đủ ngữ cảnh", "Viết hoa toàn bộ các ký tự", "Không cần thiết lập mục tiêu đầu ra"],
        c: 1,
        e: "Cung cấp ngữ cảnh rõ ràng và giới hạn chi tiết giúp AI hiểu đúng nhiệm vụ và đưa ra kết quả sát nhất."
      },
      {
        q: "Khung viết prompt CRAC phổ biến không bao gồm yếu tố nào?",
        o: ["Context (Bối cảnh)", "Role (Vai trò)", "Action (Hành động)", "Code (Mã nguồn)"],
        c: 3,
        e: "Yếu tố thứ tư của CRAC là Constraints (Ràng buộc), không phải Code."
      },
      {
        q: "Kỹ thuật 'Zero-shot prompting' trong sử dụng AI tương tác là gì?",
        o: ["Không dùng AI để xử lý", "Giao nhiệm vụ trực tiếp cho AI và không cung cấp ví dụ mẫu nào", "Dùng hàng chục ví dụ mẫu để AI bắt chước", "Sử dụng dữ liệu thồ lớn để huấn luyện lại"],
        c: 1,
        e: "Zero-shot là kỹ thuật đặt câu lệnh trực tiếp mà không cần cung cấp các mẫu kết quả mong muốn trước đó."
      },
      {
        q: "Kỹ thuật 'Few-shot prompting' phát huy hiệu quả tốt nhất khi nào?",
        o: ["Khi nhiệm vụ cực kỳ đơn giản dễ hiểu", "Khi không có bất kỳ dữ liệu hay bối cảnh nào", "Khi cần AI học và làm việc chính xác theo một khuôn mẫu nhất định", "Khi không cần kết quả đầu ra chính xác"],
        c: 2,
        e: "Few-shot là cung cấp một vài (few) ví dụ thực tế trong prompt để định hướng cấu trúc câu trả lời của AI."
      },
      {
        q: "Công cụ AI nào phổ biến nhất hỗ trợ viết nội dung và tương tác hội thoại trực tiếp?",
        o: ["Microsoft Excel", "ChatGPT", "Microsoft PowerPoint", "Microsoft Access"],
        c: 1,
        e: "ChatGPT là mô hình chatbot hội thoại và sáng tạo nội dung văn bản nổi tiếng nhất hiện nay."
      },
      {
        q: "Để soạn thảo một email chuyên nghiệp, người gửi tuyệt đối tránh hành vi nào?",
        o: ["Đặt tiêu đề thư rõ ràng, tóm tắt nội dung", "Sử dụng ngôn ngữ lịch sự, tôn trọng", "Viết tiếng Việt không dấu, không có chủ ngữ", "Thêm phần chữ ký chứa thông tin liên hệ cụ sinh"],
        c: 2,
        e: "Viết không dấu, thiếu chủ ngữ thể hiện sự cẩu thả, gây ức chế cho người đọc và mất tính chuyên nghiệp công sở."
      },
      {
        q: "Trí tuệ nhân tạo (AI) có thể hỗ trợ các cuộc họp trực tuyến (online meeting) bằng cách nào?",
        o: ["Tự động gửi thư rác tới tất cả người tham gia", "Tự động ghi biên bản, tóm tắt nội dung cuộc họp", "Ghi âm lén lút trái phép không báo trước", "Tự động chia sẻ mật khẩu bảo mật ra ngoài"],
        c: 1,
        e: "Các trợ lý họp AI có khả năng lắng nghe hội thoại, trích xuất ghi chú và biên bản cuộc họp rất tiện lợi."
      },
      {
        q: "Công cụ số nào giúp quản lý thời gian cá nhân và lên lịch họp hiệu quả nhất?",
        o: ["Lịch điện tử (Google Calendar / Outlook Calendar)", "Trình duyệt web Chrome", "Trình phát nhạc Spotify", "Phần mềm thiết kế đồ họa Canva"],
        c: 0,
        e: "Lịch điện tử là công cụ trực quan để sắp xếp thời gian biểu cá nhân và chia sẻ/đặt lịch họp tự động tránh trùng giờ."
      },
      {
        q: "Kỹ năng hợp tác số trong môi trường học tập và làm việc yêu cầu:",
        o: ["Thành viên làm việc độc lập hoàn toàn, không liên hệ", "Tôn trọng ý kiến khác biệt và chia sẻ thông tin hiệu quả", "Hạn chế tối đa sử dụng công nghệ số", "Không cần phản hồi tin nhắn của nhóm"],
        c: 1,
        e: "Giao tiếp, thấu hiểu, phản hồi kịp thời và dùng công cụ chung để duy trì dòng chảy công việc là cốt lõi hợp tác số."
      },
      {
        q: "Quy trình sáng tạo nội dung số thường bắt đầu bằng bước nào?",
        o: ["Đăng tải trực tiếp sản phẩm lên mạng", "Phân tích, lên ý tưởng và lập kế hoạch", "Chạy chiến dịch quảng cáo", "Kiểm tra đánh giá chất lượng cuối cùng"],
        c: 1,
        e: "Mọi sản phẩm số chất lượng đều cần khởi đầu từ bước lên ý tưởng và hoạch định bối cảnh/đối tượng tiếp cận cụ thể."
      },
      {
        q: "Nội dung do Trí tuệ nhân tạo (AI) tạo ra khi sử dụng cần được xử lý thế nào?",
        o: ["Sao chép nguyên văn và nộp ngay lập tức", "Kiểm tra tính chính xác khoa học, chỉnh sửa theo văn phong cá nhân", "Sử dụng luôn không cần kiểm soát", "Ghi nhận AI là tác giả duy nhất của bài làm"],
        c: 1,
        e: "AI có thể có ảo giác (hallucination). Người học cần kiểm chứng thông tin và cá nhân hóa nội dung để duy trì tính liêm chính."
      },
      {
        q: "Công cụ AI hỗ trợ thiết kế trực quan mang lại giá trị nào cho người học?",
        o: ["Làm suy giảm hoàn toàn tư duy sáng tạo", "Tiết kiệm thời gian thiết kế, nâng cao hiệu quả truyền đạt", "Khuyến khích hành vi vi phạm bản quyền trắng trợn", "Thay thế hoàn toàn vai trò của con người"],
        c: 1,
        e: "Các công cụ AI giúp tối ưu hóa công việc lặp đi lặp lại để người học tập trung vào khía cạnh ý tưởng sáng tạo độc đáo."
      },
      {
        q: "Bản quyền trong môi trường nội dung số được thiết lập nhằm bảo vệ:",
        o: ["Các thiết bị phần cứng điện tử", "Quyền tác giả và tài sản sở hữu trí tuệ của người sáng tạo", "Tập hợp tất cả người dùng Internet nói chung", "Hệ thống phần mềm máy tính cũ"],
        c: 1,
        e: "Bản quyền số bảo vệ quyền lợi hợp pháp của tác giả đối với các tác phẩm như bài viết, âm nhạc, video, hình ảnh gốc."
      },
      {
        q: "Trong làm việc nhóm trực tuyến, hành vi nào sau đây thể hiện trách nhiệm số cao nhất?",
        o: ["Không phản hồi tin nhắn vì đang b bận học việc khác", "Hoàn thành nhiệm vụ đúng thời hạn cam kết, minh bạch tiến độ", "Sao chép nguyên văn công việc của thành viên khác và nộp", "Né tránh xuất hiện trong các buổi thảo luận chung"],
        c: 1,
        e: "Trách nhiệm số thể hiện qua tính tự giác, minh bạch, đúng hẹn để không làm chậm trễ tiến độ chung của tập thể."
      },
      {
        q: "Khi sử dụng nội dung do AI tạo ra cho đồ án, yếu tố nào cần ưu tiên hàng đầu để đảm bảo tính học thuật?",
        o: ["Độ dài của văn bản càng nhiều chữ càng tốt", "Tính độc đáo và việc đối chiếu, chỉnh sửa, trích dẫn phù hợp", "Tốc độ phản hồi tạo văn bản nhanh", "Sử dụng thật nhiều hình ảnh đi kèm"],
        c: 1,
        e: "Liêm chính học thuật đòi hỏi người học phải minh bạch về công cụ hỗ trợ và tự phát triển nội dung bằng tư duy độc lập."
      },
      {
        q: "Hành vi nào sau đây cấu thành hành vi vi phạm bản quyền số?",
        o: ["Trích dẫn nguồn gốc tác giả đầy đủ khi dùng tài liệu", "Sử dụng hình ảnh có giấy phép dùng miễn phí", "Sao chép tài liệu của người khác và thương mại hóa không xin phép", "Tự sáng tạo nội dung hoàn toàn mới"],
        c: 2,
        e: "Sử dụng hoặc bán sản phẩm trí tuệ của người khác khi không được phép là hành vi vi phạm luật sở hữu trí tuệ."
      },
      {
        q: "'Phishing' trong an toàn thông tin số được định nghĩa là hình thức:",
        o: ["Tối ưu hóa các công cụ tìm kiếm trên trình duyệt", "Tấn công lừa đảo trực tuyến nhằm đánh cắp thông tin nhạy cảm", "Quảng cáo, tiếp thị sản phẩm dịch vụ mới", "Tự động kích hoạt các phần mềm diệt virus trên máy tính"],
        c: 1,
        e: "Phishing là việc gửi tin nhắn/email giả mạo tổ chức uy tín hòng lừa người dùng nhấp vào link độc hại để lấy cắp mật khẩu."
      },
      {
        q: "Khi nhận được một email nghi ngờ lừa đảo, hành động xử lý an toàn nhất là:",
        o: ["Nhấp thử vào đường liên kết để xem nội dung", "Bấm nút phản hồi và cung cấp thông tin theo yêu cầu", "Không nhấn vào bất kỳ đường link nào, xóa thư hoặc báo cáo spam", "Chuyển tiếp bức thư đó cho nhiều người khác check hộ"],
        c: 2,
        e: "Không nhấp link, không cung cấp thông tin riêng tư, lập tức báo spam là cách tốt nhất bảo vệ an toàn số cá nhân."
      },
      {
        q: "Hoạt động sao lưu (Backup) dữ liệu định kỳ mang lại lợi ích gì?",
        o: ["Giúp thu nhỏ tối đa dung lượng bộ nhớ máy", "Bảo vệ thông tin dữ liệu không bị mất mát khi xảy ra sự cố hỏng hóc hoặc mã độc", "Ngăn chặn tuyệt đối sự xâm nhập của virus", "Làm giảm tốc độ hoạt động của hệ điều hành"],
        c: 1,
        e: "Backup dữ liệu giúp bạn khôi phục lại trạng thái làm việc bình thường nhanh chóng khi ổ cứng hỏng hoặc dính mã độc tống tiền."
      },
      {
        q: "Trong các xung đột về hành vi sử dụng AI trực tuyến, lựa chọn nào sau đây là đạo đức và đúng luật?",
        o: ["Sử dụng AI thay thế hoàn toàn công sức lao động của giáo viên", "Che giấu hành vi lạm dụng AI khi viết báo cáo chuyên khảo", "Tuân thủ nghiêm ngặt các quy định pháp chế và liêm chính sư phạm học thuật", "Coi kết quả từ AI là sản phẩm 100% tự viết"],
        c: 2,
        e: "Trung thực trong khai báo cách sử dụng công cụ hỗ trợ là hành vi đạo đức chuẩn mực trong kỷ nguyên số."
      },
      {
        q: "Để việc học tập có sự hỗ trợ của AI đạt hiệu quả bền vững, người học cần:",
        o: ["Phụ thuộc tuyệt đối vào hiệu suất của dòng chatbot AI mới nhất", "Tuân thủ đạo đức nghiên cứu, pháp luật sở hữu trí tuệ và tư duy phản biện cá nhân", "Hạn chế kiểm tra chéo các nguồn dữ liệu tin cậy", "Sử dụng AI để làm hộ bài tập về nhà mỗi ngày"],
        c: 1,
        e: "AI chỉ là trợ lý đắc lực, bộ não tư duy và kiểm chứng cuối cùng cốt lõi vẫn thuộc về năng lực của chính bạn."
      },
      {
        q: "Nguyên tắc cốt lõi và tối thiểu khi bảo vệ an toàn cho thiết bị di động cá nhân là:",
        o: ["Cài đặt càng nhiều phần mềm diệt virus càng tốt", "Thường xuyên cập nhật bản vá bảo mật và quản lý chặt chẽ quyền truy cập (mã khóa, sinh trắc học)", "Chia sẻ tài khoản đăng nhập cho người khác quản lý hộ", "Tắt bỏ hoàn toàn các tính năng xác thực hai lớp để thao tác nhanh"],
        c: 1,
        e: "Cập nhật phần mềm giúp sửa lỗi bảo mật nguy hiểm, khóa màn hình ngăn chặn các xâm nhập vật lý trực tiếp khi mất máy."
      }
    ]
  },
  {
    id: "vnu1001-exam-t2",
    testId: 2,
    title: "Đề thi Năng lực số - Đề số 2",
    description: "Đề thi kết hợp các tình huống thực tế về email, bảo mật Cloud, nguyên lý hoạt động của các hệ thống AI mô hình lớn năm 2026.",
    questions: [
      {
        q: "Thành phần nào sau đây thuộc về phần cứng bên trong của một máy tính cá nhân?",
        o: ["Hệ điều hành Windows 11", "Bộ xử lý trung tâm (CPU)", "Phần mềm Microsoft Word", "Trình duyệt web Google Chrome"],
        c: 1,
        e: "CPU (Bộ xử lý trung tâm) là vi mạch điện tử phần cứng thực thi các lệnh của chương trình máy tính."
      },
      {
        q: "Thiết bị ngoại vi nào sau đây chuyên dùng để nhập dữ liệu văn bản vào máy tính?",
        o: ["Màn hình LCD", "Loa máy tính", "Bàn phím (Keyboard)", "Chuột máy tính"],
        c: 2,
        e: "Bàn phím là thiết bị đầu vào (input device) dùng để nhập ký tự và điều khiển chính."
      },
      {
        q: "Khi chọn mua máy tính để sử dụng cho các tác vụ văn phòng và học tập trực tuyến thông thường, yếu tố nào sau đây nên được ưu tiên hàng đầu?",
        o: ["Card đồ họa rời cao cấp, chuyên dụng chơi game", "Dung lượng bộ nhớ RAM đủ lớn và CPU hoạt động ổn định", "Màn hình gương hỗ trợ cảm ứng đa điểm", "Hỗ trợ thật nhiều cổng kết nối tốc độ cao Thunderbolt 4"],
        c: 1,
        e: "RAM từ 8GB/16GB cùng CPU ổn định là đủ đáp ứng xuất sắc mọi nhu cầu soạn thảo văn bản, học trực tuyến đa nhiệm mượt mà."
      },
      {
        q: "Phần mềm nào sau đây thuộc phân loại phần mềm hệ thống (System Software)?",
        o: ["Microsoft Excel", "Adobe Photoshop", "Hệ điều hành Windows 11", "Ứng dụng Zoom Cloud Meetings"],
        c: 2,
        e: "Hệ điều hành quản lý trực tiếp phần cứng và cung cấp môi trường nền tảng để chạy các ứng dụng khác nên là phần mềm hệ thống."
      },
      {
        q: "Sự khác biệt cốt lõi nhất giữa phần mềm mã nguồn mở (Open Source) và phần mềm độc quyền (Proprietary)?",
        o: ["Phần mềm mã nguồn mở luôn miễn phí sử dụng hoàn toàn", "Phần mềm mã nguồn mở cho phép xem, sửa đổi và phân phối lại mã nguồn công khai", "Phần mềm độc quyền không thể vận hành được trên Linux", "Phần mềm mã nguồn mở không có giao diện đồ họa GUI trực quan"],
        c: 1,
        e: "Mã nguồn mở cấp quyền tiếp cận code gốc cho cộng đồng cải tiến. Độc quyền thì nhà phát triển giữ kín mã nguồn để bảo vệ bản quyền thương mại."
      },
      {
        q: "Giao thức truyền thông vật lý nào được dùng phổ biến nhất cho mạng nội bộ (LAN) có dây hiện nay?",
        o: ["Wi-Fi", "Bluetooth", "Ethernet", "NFC"],
        c: 2,
        e: "Ethernet sử dụng cáp đồng xoắn đôi (thường đầu mạng RJ45) để truyền dữ liệu mạng LAN dây ổn định tốc độ cao."
      },
      {
        q: "Cách kết nối không dây phổ biến và thuận tiện nhất giữa máy tính và máy in trong văn phòng thông minh hiện nay là?",
        o: ["Dùng cáp USB truyền thống", "Sử dụng cáp truyền tín hiệu hình ảnh HDMI", "Kết nối chung mạng Wi-Fi nội bộ", "Kết nối dây cáp Ethernet cứng"],
        c: 2,
        e: "Dùng chung mạng Wi-Fi giúp máy tính phát lệnh in từ xa vô cùng tiện lợi mà không cần đi dây vật lý."
      },
      {
        q: "Phần mềm nào sau đây KHÔNG thuộc bộ ứng dụng văn phòng Microsoft Office truyền thống?",
        o: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Notepad của Windows"],
        c: 3,
        e: "Notepad là trình soạn thảo văn bản thô sơ giản đơn, được cài sẵn trực tiếp trong Windows, không thuộc bộ MS Office."
      },
      {
        q: "Để tìm kiếm chính xác một cụm từ nguyên văn nguyên bản trên Google, cú pháp đặt cụm từ đó trong ký hiệu nào?",
        o: ["Trong cặp dấu ngoặc đơn ( )", "Trong cặp dấu ngoặc vuông [ ]", "Trong cặp dấu ngoặc kép \" \"", "Sau dấu cộng +"],
        c: 2,
        e: "Đặt từ khóa trong dấu ngoặc kép giúp Google hiểu bạn muốn tìm chính xác cụm tự đó theo đúng thứ tự ký tự."
      },
      {
        q: "Công cụ tìm kiếm nào dưới đây sử dụng mô hình trí tuệ nhân tạo (AI) để trực tiếp đàm thoại và tổng hợp câu trả lời chi tiết cho bạn?",
        o: ["Google Scholar", "Microsoft Bing với Copilot", "Yahoo Search", "DuckDuckGo"],
        c: 1,
        e: "Bing tích hợp Copilot sử dụng mô hình GPT lớn nâng cao để tra cứu web thời gian thực và trả lời dạng chat đối thoại."
      },
      {
        q: "Để loại trừ hoàn toàn một từ khóa không mong muốn khỏi kết quả tìm kiếm trên Google, bạn dùng ký tự nào đặt ngay trước từ đó?",
        o: ["Dấu cộng (+)", "Dấu trừ (-)", "Dấu sao (*)", "Dấu ngã (~)"],
        c: 1,
        e: "Ví dụ: 'nhạc trẻ -remix' sẽ tìm các kết quả về nhạc trẻ nhưng loại trừ các bài viết chứa từ 'remix'."
      },
      {
        q: "Dấu hiệu kỹ thuật nào giúp người dùng nhanh chóng nhận diện một trang web có độ tin cậy thông tin chính thống cao?",
        o: ["Có rất nhiều banner quảng cáo động nhấp nháy bắt mắt", "Sử dụng tên miền quốc gia dành cho giáo dục (.edu) hoặc chính phủ (.gov)", "Đăng lượng bài viết khổng lồ mỗi ngày mà không ghi chú nguồn dẫn", "Bên dưới phần bình luận tràn ngập các ý kiến tranh cãi trái chiều"],
        c: 1,
        e: "Tên miền .edu và .gov được cung cấp có kiểm duyệt chặt chẽ cho cơ quan nhà nước và trường học uy tín."
      },
      {
        q: "Hành động nào dưới đây thể hiện việc người học đang áp dụng tốt các kỹ năng tìm kiếm nâng cao trực tuyến?",
        o: ["Chỉ gõ một từ khóa thô sơ chung chung vào ô tìm kiếm", "Sử dụng các toán tử tìm kiếm chuyên biệt như 'site:' hoặc 'filetype:'", "Chỉ tìm kiếm duy nhất trên trang web đầu tiên trả về", "Không bao giờ xem các kết quả ở trang hiển thị thứ hai"],
        c: 1,
        e: "Sử dụng các toán tử này hỗ trợ thu hẹp phạm vi tìm kiếm theo định dạng tập tin hoặc tên miền cụ thể."
      },
      {
        q: "Khi trích xuất hình ảnh từ Internet dùng làm tài liệu học tập, hành vi nào thể hiện trách nhiệm sở hữu trí tuệ?",
        o: ["Tải ảnh về máy và sử dụng trực tiếp không ghi chú", "Kiểm tra giấy phép Creative Commons hoặc trích dẫn nguồn gốc đầy đủ", "Chỉnh sửa làm méo ảnh gốc để tránh các thuật toán phát hiện đạo nhái", "Tẩy xóa hoàn toàn logo chìm (watermark) của tác giả chụp ảnh"],
        c: 1,
        e: "Tôn trọng công sức lao động nghệ thuật bằng cách trích dẫn rõ nguồn ảnh, tác giả hoặc dùng ảnh miễn phí bản quyền xã hội."
      },
      {
        q: "Dấu hiệu rõ nhất cho thấy một bài đăng mạng xã hội có khả năng cao là tin giả (Fake news) giật gân?",
        o: ["Luôn cung cấp đầy đủ liên kết kiểm chứng đến báo chí chính thống", "Tiêu đề mang tính kịch tính, giật tít khủng khiếp nhưng nội dung bên trong rỗng tuếch hoặc sai lệch", "Thông tin trung lập khách quan, không biểu lộ cảm xúc cực đoan", "Có chữ ký và thông tin ngày giờ rõ ràng của tác giả"],
        c: 1,
        e: "Tin giả đánh thẳng vào tâm lý gây sốc để kích thích tò mò click chuột chia sẻ bừa bãi của người dùng."
      },
      {
        q: "Để đánh giá độ tin cậy khoa học của một bài báo chuyên ngành tìm thấy trực tuyến, bước nào là tối quan trọng?",
        o: ["Đếm tổng lượng lượt Like và lượt Share bài viết", "Kiểm tra danh tính tác giả có chuyên môn không và rà soát danh mục tài liệu tham khảo", "Chọn đọc chỉ khi ngày đăng bài mới nhất trong hôm nay", "Chỉ xem các bình luận khen ngợi bên dưới bài viết"],
        c: 1,
        e: "Bài báo khoa học đáng tin phải được viết bởi chuyên gia uy tín trong ngành và có nguồn tham luận kiểm chứng rõ ràng."
      },
      {
        q: "Trong tiếng Anh, cụm từ viết tắt 'AI' đại diện cho thuật ngữ khoa học nào?",
        o: ["Automated Information", "Artificial Intelligence", "Advanced Integration", "Application Interface"],
        c: 1,
        e: "Artificial Intelligence nghĩa là Trí tuệ nhân tạo."
      },
      {
        q: "Mô hình ngôn ngữ lớn (Large Language Model - LLM) hoạt động dựa trên nguyên lý cơ bản nào?",
        o: ["Là một loại chip điện tử phần cứng thế hệ mới", "Mô hình xác suất được huấn luyện trên lượng dữ liệu khổng lồ để dự đoán từ tiếp theo phù hợp tự nhiên", "Phần mềm chuyên chỉnh sửa cắt ghép video và hình ảnh", "Hệ điều hành thế hệ mới chạy trên đám mây mây"],
        c: 1,
        e: "LLM học quy luật ngôn ngữ từ hàng tỷ khối văn bản để tạo ra câu trả lời dựa trên kỹ thuật dự đoán xác suất token tiếp theo."
      },
      {
        q: "Kỹ thuật tương tác 'Zero-shot prompting' với AI có đặc trưng gì?",
        o: ["Gửi thật nhiều ví dụ mẫu kết quả rồi mới ra đề bài", "Yêu cầu AI thực hiện tác vụ trực tiếp mà không cung cấp bất kỳ ví dụ minh họa nào", "Gõ liên tục một từ khóa lặp lại mười lần", "Sử dụng chuỗi nhiều lệnh gối lên nhau phức tạp"],
        c: 1,
        e: "Zero-shot nghĩa là không cần mồi ví dụ (zero examples), kiểm tra năng lực hiểu mặc định của AI."
      },
      {
        q: "Kỹ thuật 'Few-shot prompting' khác biệt cơ bản nhất với 'Zero-shot prompting' ở điểm nào?",
        o: ["Không cần viết bất cứ câu lệnh nào gửi AI", "Có cung cấp thêm một vài ví dụ mẫu cấu trúc mong muốn ngay trong câu lệnh", "Chỉ áp dụng duy nhất khi làm việc với dữ liệu hình ảnh trực quan", "Có tốc độ phản hồi chậm hơn và kết quả kém chính xác hơn"],
        c: 1,
        e: "Few-shot cung cấp các mốc ví dụ (few examples) để hướng dẫn AI học nhanh tư duy và định dạng đầu ra chuẩn hơn."
      },
      {
        q: "Yếu tố nào sau đây là quan trọng nhất để viết một prompt chất lượng cao cho ChatGPT soạn giáo trình?",
        o: ["Văn bản câu lệnh phải càng ngắn gọn càng tốt", "Mô tả rõ vai trò, mục tiêu cụ thể, bối cảnh người đọc và định dạng mong muốn", "Viết hoàn toàn bằng tiếng Anh sai lệch ngữ pháp để AI tự đoán", "Chỉ cần ghi đúng một tiêu đề chủ đề chung chung vô thưởng vô phạt"],
        c: 1,
        e: "Bối cảnh chuẩn, vai trò rõ (Role) và định dạng cụ thể (Format) quyết định 90% độ hoàn hảo của câu trả lời từ AI."
      },
      {
        q: "Công cụ Gemini của Google sở hữu thế mạnh nổi bật nào so với các phiên bản ChatGPT trước đây?",
        o: ["Hoàn toàn không thể kết nối mạng Internet để bảo mật", "Khả năng tích hợp trực tiếp, mượt mà với hệ sinh thái Google và tra cứu thông tin thời gian thực cực tốt", "Chỉ hỗ trợ xử lý dữ liệu hình vẽ đen trắng", "Hoàn toàn không hỗ trợ giao diện tiếng Việt"],
        c: 1,
        e: "Gemini liên thông chặt chẽ với Google Workspace, Youtube, Maps giúp tối ưu hóa truy vấn thông tin sống hằng ngày."
      },
      {
        q: "Khi lướt web trên Microsoft Edge, tính năng Copilot tích hợp trực tiếp trong thanh sidebar mang lại tiện ích gì?",
        o: ["Hỗ trợ sạc nhanh pin máy tính không dây", "Đọc hiểu và tóm tắt trực tiếp nội dung trang web đang mở để giải đáp thắc mắc tức thì", "Tự động tắt máy khi phát hiện nội dung dài khó đọc", "Tải lén các phần mềm không rõ nguồn gốc về thiết bị"],
        c: 1,
        e: "Sidebar Copilot cho phép người dùng chat hỏi đáp trực tiếp dựa trên nội dung trang PDF hoặc website đang hiển thị."
      },
      {
        q: "Trong các prompt sau, prompt nào được viết chuyên nghiệp và tối ưu nhất để AI soạn thảo email chuyên nghiệp?",
        o: ["'Viết hộ tôi cái email mời họp ban giám đốc'", "'Bạn là trợ lý hành chính. Soạn một email trang trọng mời Ban lãnh đạo họp trực tuyến vào 9:00 thứ Tư tới bàn về kế hoạch tài chính Quý 1. Email cần có lời chào kính gửi lịch sự, agenda 3 phần chính, link Zoom và phòng ban liên hệ.'", "'Soạn email mời họp nhanh nhé.'", "'Hãy viết câu lệnh thật dài về chủ đề mời họp công ty.'"],
        c: 1,
        e: "Lựa chọn B đáp ứng hoàn hảo cấu trúc bối cảnh, đối tượng, nội dung và các ràng buộc đầu ra cho AI."
      },
      {
        q: "Kỹ thuật 'Chain-of-Thought prompting' (Chuỗi tư duy) giúp cải thiện năng lực nào của các mô hình AI lớn?",
        o: ["Tốc độ phản hồi từ mô hình nhanh gấp mười lần", "Khả năng suy luận logic từng bước chặt chẽ đối với các bài toán phức tạp", "Hỗ trợ vẽ tranh vector chất lượng cao sắc nét hơn", "Làm giảm thiểu tối đa chi phí lưu trữ đám mây của doanh nghiệp"],
        c: 1,
        e: "Yêu cầu AI 'hãy suy nghĩ từng bước' kích hoạt khả năng lập luận phân tách vấn đề trước khi kết luận, giảm sai sót rõ rệt."
      },
      {
        q: "Để thiết kế một bài slide thuyết trình ấn tượng trên Canva AI, prompt mồi nên chứa những thông tin gì?",
        o: ["Chỉ cần ghi đúng một từ khóa tên chủ đề chính", "Nêu rõ chủ đề, đối tượng khán giả hướng tới, số lượng slide dự kiến và tông màu chủ đạo mong muốn", "Câu lệnh mẫu 'tạo hộ tôi một slide thật đẹp'", "Không cần mô tả chi tiết, để Canva tự quyết định ngẫu nhiên"],
        c: 1,
        e: "Mức độ chi tiết của prompt mồi giúp AI chọn đúng ngôn ngữ thiết kế, hình ảnh và bố cục phù hợp với môi trường thuyết diễn."
      },
      {
        q: "Tại sao khi gửi cùng một câu lệnh (Prompt), kết quả trả về từ ChatGPT và Gemini lại có thể khác nhau?",
        o: ["Cả hai công cụ thực chất vận hành chung một hệ thống dữ liệu huấn luyện", "Mỗi mô hình được xây dựng trên kiến trúc mạng học máy, dữ liệu huấn luyện và các bộ lọc quy tắc đạo đức khác nhau", "Vì hai công cụ sử dụng hai ngôn ngữ lập trình không tương thích", "Vì AI luôn cố tình đưa ra thông tin sai lệch để đánh lừa người dùng"],
        c: 1,
        e: "Kiến trúc độc quyền của OpenAI (GPT) và Google (Gemini) quy định phong cách biên dịch dữ liệu hoàn toàn khác biệt."
      },
      {
        q: "Trong kỹ thuật viết Prompt, việc gán một vai trò (Role-playing) cụ thể cho AI mang lại tác động gì?",
        o: ["Làm trì trệ đáng kể tốc độ phản hồi kết quả của mô hình", "Định hướng giọng văn, phong cách và kho kiến thức chuyên môn phù hợp nhất với bối cảnh câu trả lời", "Làm giảm sụt nghiêm trọng độ chính xác của thông tin", "Không có bất kỳ tác động hay ảnh hưởng nào đến kết quả trả về"],
        c: 1,
        e: "Gán vai trò ('đóng vai nhà giáo ưu tú', 'đóng vai chuyên gia lập trình') giúp AI chọn đúng lăng kính chuyên môn để giải quyết bài toán."
      },
      {
        q: "Theo nghi thức giao tiếp văn minh Netiquette, một email công việc chuẩn mực luôn phải bao gồm:",
        o: ["Tiêu đề thư (Subject) ngắn gọn rõ ràng và lời chào (Greeting) lịch sự phù hợp", "Viết toàn bộ nội dung bằng ký tự IN HOA để gây ấn tượng mạnh", "Hạn chế tuyệt đối viết chữ ký hoặc thông tin liên hệ của người gửi", "Gửi kèm thật nhiều tập tin dung lượng lớn chưa qua nén để chứng minh năng lực"],
        c: 0,
        e: "Tiêu đề và lời chào là hai tiết điểm cơ bản thể hiện sự tôn bồi đối tác, giúp phân loại xử lý email khoa học."
      },
      {
        q: "Khi soạn thảo tiêu đề (Subject) cho email công sở, quy tắc vàng nào nên được tuân thủ nghiêm ngặt?",
        o: ["Để trống hoàn toàn phần tiêu đề để tạo tính tò mò kích thích người đọc", "Viết tiêu đề ngắn gọn, phản ánh trung thực bản chất nội dung cốt lõi của email", "Viết tiêu đề thật dài và chi tiết, kể hết toàn bộ câu chuyện diễn tiến thư", "Sử dụng tiêu đề viết hoa kèm nhiều biểu tượng cảm xúc nhí nhố"],
        c: 1,
        e: "Tiêu đề thư giúp người nhận nhanh chóng nắm bắt tính khẩn cấp và nội dung để sắp xếp thứ tự xử lý thư hàng ngày."
      },
      {
        q: "Hành vi ứng xử nào sau đây là văn minh và lịch sự khi tham gia một cuộc họp họp trực tuyến (Zoom / Teams)?",
        o: ["Luôn mở micro liên tục kể cả khi không phát biểu để mọi người nghe thấy tiếng ồn xung quanh bàn học", "Tắt camera hoàn toàn từ đầu đến cuối và tranh thủ đi làm việc riêng cá nhân", "Chỉ bật micro khi đến lượt phát biểu, tắt âm khi người khác nói và sử dụng tính năng 'Giơ tay' để xin ý kiến", "Thoải mái ăn uống phát ra tiếng nhai trực tiếp trước camera"],
        c: 2,
        e: "Tắt mic khi không nói giúp giảm thiểu tạp âm phản hồi vòng lặp, thể hiện sự tôn trọng thời gian của tập thể."
      },
      {
        q: "Công cụ đám mây nào sau đây hỗ trợ tốt nhất cho việc cộng tác làm việc nhóm đồng thời thời gian thực (Real-time collaboration)?",
        o: ["Gửi file đính kèm liên tục qua thư điện tử truyền thống", "Google Docs / Microsoft OneDrive trực tuyến", "Nhắn tin cập nhật tiến độ liên tục qua chat cá nhân", "Sử dụng thiết bị lưu trữ vật lý USB cắm rút thủ công"],
        c: 1,
        e: "Google Docs và OneDrive cho phép nhiều thành viên cùng gõ và chỉnh sửa trực tiếp trên một văn bản, tránh xung đột phiên bản."
      },
      {
        q: "Khi điều phối gửi thư điện tử cho một nhóm đông người nhận, nguyên tắc sử dụng CC và BCC phù hợp:",
        o: ["Đưa tất cả người nhận vào ô địa chỉ To mặc định", "Dùng CC cho những người cần nắm bắt thông tin bổ trợ; dùng BCC để ẩn danh sách email bảo mật quyền riêng tư người nhận", "Tránh tuyệt đối việc sử dụng cả hai tính năng này vì dễ bị hack", "Đưa toàn bộ danh sách liên hệ vào ô BCC bất luận vai trò công việc"],
        c: 1,
        e: "BCC giúp ẩn danh sách email để bảo vệ quyền riêng tư thông tin liên lạc của các thành viên ngoại vi không liên quan trực tiếp."
      },
      {
        q: "Trong làm việc nhóm online, kỹ năng tương tác số lành mạnh thể hiện ở hành động nào?",
        o: ["Tự ý sửa đổi nội dung slide slide thuyết trình chung mà không thông báo trước cho nhóm", "Chủ động cập nhật tiến độ công việc, phản hồi tinh tế và trân quý đóng góp của đồng nghiệp", "Rời khỏi nhóm trò chuyện chung ngay khi hoàn thành xong phần việc cá nhân tối thiểu", "Hạn chế tuyệt đối việc đọc hay tương tác với các công việc của nhóm viên khác"],
        c: 1,
        e: "Cơ động cập nhật tiến trình và phản hồi tích cực khích lệ đồng đội giúp duy trì sức mạnh gắn kết của nhóm trực tuyến."
      },
      {
        q: "Khi làm việc nhóm trên tài liệu Google Docs chung, giải pháp nào giúp hạn chế tối đa xung đột trực tiếp đè dữ liệu lên nhau?",
        o: ["Mỗi thành viên tự lập một file Word riêng biệt rồi gửi ghép thủ công sau", "Sử dụng chế độ 'Gợi ý' (Suggesting mode) và tính năng bình luận thảo luận trước khi sửa thẳng vào nguyên bản", "Khóa cứng tài liệu không cho ai truy cập chỉnh sửa", "Chỉ cho phép duy nhất một trưởng nhóm đại diện gõ chữ"],
        c: 1,
        e: "Suggesting mode tạo ra các mốc 'track changes' giúp mọi người thảo luận trực quan và phê duyệt có lưu vết."
      },
      {
        q: "Trách nhiệm số cao nhất của một cá nhân hoạt động trong môi trường số văn minh giáo dục là:",
        o: ["Chỉ hoàn thành đúng mốc thời gian phần việc được giao rồi lập tức kết thúc trách nhiệm", "Chủ động hỗ trợ đồng nghiệp, điều phối tiến độ chung và bình tĩnh giải quyết các xung đột theo hướng kiến tạo", "Hạn chế tham gia thảo luận tập thể để tránh gây nhiễu thông tin", "Dùng quyền lực áp đặt ý chí hoặc đổ lỗi cho thành viên khác khi xảy ra sai sót kỹ thuật"],
        c: 1,
        e: "Nhận thức cao về tập thể và sẵn lòng hỗ trợ, đồng hành cùng đồng đội vượt qua các bế tắc thủ tục là linh hồn của trách nhiệm số."
      },
      {
        q: "Quy trình căn bản tiêu chuẩn của hoạt động Sáng tạo nội dung số khép kín bao gồm các bước nào?",
        o: ["Đăng tải ngay lập tức ý tưởng thô sơ lên mạng xã hội", "Lên ý tưởng thiết kế → Thực hiện sản xuất → Kiểm duyệt xuất bản → Đo lường đánh giá hiệu quả", "Sao chép sao chép các sản phẩm thịnh hành rồi đổi tên tác giả", "Chỉ cần đầu tư chạy quảng cáo rầm rộ là đủ sản xuất nội dung"],
        c: 1,
        e: "Quy trình hoàn chỉnh phải đi từ bước rễ ý tưởng, sản xuất, hiệu đính biên tập kỹ càng rồi xuất bản đo lường hiệu ứng xã hội."
      },
      {
        q: "Canva Magic Studio hỗ trợ đắc lực nhất cho người học ở tác vụ sáng tạo nội dung nào?",
        o: ["Soạn thảo code lập trình phần mềm phức tạp", "Thiết kế poster, dựng video ngắn thuyết trình, tạo infographic trực quan sinh động", "Xử lý và tính toán các bài toán định lượng khổng lồ", "Quản trị cơ sở dữ liệu kinh doanh doanh nghiệp"],
        c: 1,
        e: "Canva là nền tảng thiết kế đồ họa kéo thả, tích hợp AI hỗ trợ người dùng tạo nội dung trực quan đẹp mắt không cần kỹ năng mỹ thuật chuyên sâu."
      },
      {
        q: "Dấu hiệu rõ ràng nhất của hành vi vi phạm nghiêm trọng liêm chính học thuật trong thời đại số?",
        o: ["Sử dụng tài liệu tham khảo công khai, ghi chú trích dẫn chuẩn APA rõ ràng", "Sao chép nguyên văn văn bản do AI tạo ra rồi nộp bài làm dưới danh nghĩa 100% tự viết", "Thảo luận ý kiến lập nhóm học tập cùng bạn học", "Sử dụng các công cụ rà soát lỗi chính tả mặc định của phần mềm"],
        c: 1,
        e: "Nộp bài làm do AI viết hộ mà không có sự đóng góp trí tuệ thực sự và không khai báo là hành vi gian lận học đường nặng nề."
      },
      {
        q: "Khi nộp báo cáo nghiên cứu có tham khảo số liệu gợi ý hỗ trợ từ AI, quy tắc ứng xử chuẩn mực cần làm là:",
        o: ["Tuyệt đối không khai báo bất kỳ thông tin nào liên quan đến AI", "Mô tả rõ ràng phần dữ liệu, ý tưởng có sự hỗ trợ của AI, tự viết lại nội dung và ghi chú tài liệu tham khảo trung thực", "Chỉnh sửa thay đổi vài từ đồng nghĩa hòng né tránh các phần mềm quét đạo văn", "Hủy bỏ bản báo cáo ban đầu, sao chép một bài mẫu cũ trên mạng"],
        c: 1,
        e: "Khai báo minh bạch phạm vi ứng dụng công nghệ hỗ trợ giúp bảo vệ uy tín học thuật cá nhân và thể hiện sự chính trực khoa học."
      }
    ]
  }
];
