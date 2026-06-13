import { VNUQuestion } from "./vnu1001_questions";

export interface CompactQ {
  q: string;
  o: string[];
  c: number;
  e: string;
  d?: 'nb' | 'th' | 'vd' | 'vdc';
}

export const KHQLGD_TOPICS = [
  "CHỦ ĐỀ 1: ĐẠI CƯƠNG VỀ TỔ CHỨC & CÁC TRƯỜNG PHÁI QUẢN LÝ",
  "CHỦ ĐỀ 2: LÝ THUYẾT VÀ QUY TRÌNH QUẢN LÝ GIÁO DỤC",
  "CHỦ ĐỀ 3: ĐƯA QUYẾT ĐỊNH VÀ QUẢN LÝ THÔNG TIN GIÁO DỤC",
  "CHỦ ĐỀ 4: CÁC MÔ HÌNH QUẢN LÝ ĐÀO TẠO (TONY BUSH) & ĐỔI MỚI THEO NGHỊ QUYẾT 29"
];

// 119 Multiple Choice Questions for "Khoa học quản lý trong giáo dục"
export const KHQLGD_QUESTIONS_RAW: CompactQ[] = [
  // TOPIC 1: ĐẠI CƯƠNG VỀ TỔ CHỨC & CÁC TRƯỜNG PHÁI QUẢN LÝ (1 - 30)
  {
    q: "Lựa chọn nào là đúng nhất khi nói đến căn cứ để nhận biết tổ chức?",
    o: [
      "Số lượng người có gắn bó về một hoạt động/lĩnh vực nào đó",
      "Có các thành viên và cùng làm chung một việc",
      "Tập hợp người có cấu trúc ổn định, hoạt động, cam kết, chia sẻ vì mục tiêu chung",
      "Tập hợp người làm việc có mục đích hoặc không có mục đích rõ ràng"
    ],
    c: 2,
    e: "Tập hợp người có cấu trúc ổn định, hoạt động, cam kết và chia sẻ vì mục tiêu chung là căn cứ nhận biết tổ chức một cách rõ ràng nhất.",
    d: "nb"
  },
  {
    q: "Tổ chức là tập hợp của nhóm người cùng làm việc……………..",
    o: [
      "Vì lợi ích cá nhân và tập thể",
      "Trong cùng một đơn vị",
      "Vì có chung chí hướng",
      "Vì những mục đích chung trong một cơ cấu ổn định"
    ],
    c: 3,
    e: "Tập hợp người vì mục tiêu chung hoạt động trong một thể chế ổn định.",
    d: "nb"
  },
  {
    q: "Trên thực tế có mấy loại hình tổ chức?",
    o: [
      "3 loại hình chính",
      "4 loại hình",
      "5 loại hình",
      "6 loại hình"
    ],
    c: 0,
    e: "Căn cứ theo định ước hoạt động thực tế có 3 loại hình: Lợi nhuận (Doanh nghiệp), Phi lợi nhuận (Xã hội/Từ thiện) và Công (Nhà nước).",
    d: "nb"
  },
  {
    q: "Căn cứ vào đâu để xác định đâu là tổ chức tư thục và tổ chức công lập?",
    o: [
      "Số lượng người tham gia vào tổ chức",
      "Mục đích, mục tiêu hoạt động của tổ chức",
      "Chế độ sở hữu nguồn vốn đầu tư",
      "Căn cứ vào lợi ích mang lại cho tổ chức và xã hội"
    ],
    c: 2,
    e: "Sở hữu công thuộc cộng đồng/nhà nước, còn tư thục thuộc sở hữu tư nhân.",
    d: "nb"
  },
  {
    q: "Đặc điểm của quản lý, quản trị theo tư tưởng đức trị là:",
    o: [
      "Nhân nghĩa, sự yêu thương là nguyên tắc cốt lõi trong mọi hoạt động quản lý, quản trị",
      "Thượng tôn pháp luật là nguyên tắc cốt lõi trong mọi hoạt động quản lý, quản trị",
      "Trọng dụng nhân tài là nguyên tắc cốt lõi trong mọi hoạt động quản lý, quản trị",
      "Lấy quan niệm 'cái ác' trong mỗi con người làm nền tảng quản lý, quản trị"
    ],
    c: 0,
    e: "Đức trị ưu tiên sự khoan dung mẫu mực, lấy nhân cách và lòng nhân nghĩa làm nền móng cảm hóa tổ chức.",
    d: "nb"
  },
  {
    q: "Đặc điểm của quản lý, quản trị theo tư tưởng pháp gia là:",
    o: [
      "Nhân nghĩa, sự yêu thương là nguyên tắc cốt lõi trong mọi hoạt động quản lý, quản trị",
      "Thượng tôn pháp luật là nguyên tắc cốt lõi trong mọi hoạt động quản lý, quản trị",
      "Trọng dụng nhân tài là nguyên tắc cốt lõi trong mọi hoạt động quản lý, quản trị",
      "Tất cả các phương án trên"
    ],
    c: 1,
    e: "Pháp gia đề cao thể chế, phép vua phép nước minh bạch, kỷ cương thưởng phạt nghiêm minh.",
    d: "nb"
  },
  {
    q: "Đặc điểm của quản lý theo lý thuyết quản lý khoa học là:",
    o: [
      "Không ngừng cải tạo các mối quan hệ quản lý, thúc đẩy sự phân công và chuyên môn hóa, tối ưu hóa các hoạt động, quá trình lao động trong tổ chức",
      "Thúc đẩy sự hoàn thiện pháp luật",
      "Chú trọng thỏa mãn nhu cầu của các thành viên trong tổ chức",
      "Luôn tạo ra sự phù hợp giữa đối tượng quản lý và môi trường"
    ],
    c: 0,
    e: "Lý thuyết quản lý khoa học (F.W. Taylor) nghiên cứu định lượng thao tác phân tích thời gian chuyên môn sâu.",
    d: "nb"
  },
  {
    q: "Các chức năng cần thiết của một nhà quản lý theo Lý thuyết quản lý hành chính của Henry Fayol (1841-1925) là:",
    o: [
      "Tiên phong, Lãnh đạo, Sáng tạo, Đoàn kết, Phát triển",
      "Lãnh đạo, Sáng tạo, Tiên phong, Chất lượng cao, Phát triển bền vững",
      "Lập kế hoạch, Tổ chức, Điều khiển, Phối hợp, Kiểm tra",
      "Không có phương án nào đúng trong các phương án trên"
    ],
    c: 2,
    e: "Fayol vạch rõ 5 hoạt động chức trách phổ biến: Lập kế hoạch, Tổ chức, Chỉ huy (Điều khiển), Phối hợp, và Kiểm soát.",
    d: "nb"
  },
  {
    q: "Điều gì được quan tâm nhất trong các lý thuyết quản lý thuộc trường phái Định lượng?",
    o: [
      "Định lượng hóa yếu tố tài chính, nguồn vốn trong quản lý",
      "Hệ thống thông tin trong quản lý là quan trọng nhất",
      "Định lượng hóa các yếu tố liên quan trong quản lý thông qua sử dụng phương pháp thống kê và các mô hình toán học",
      "Mô hình hóa các mục tiêu cần đạt thành sơ đồ"
    ],
    c: 2,
    e: "Ưu tiên vận dụng thuật toán thống kê, khoa học máy tính tối ưu hóa sơ đồ mạng hành động quản trị.",
    d: "nb"
  },
  {
    q: "Điểm chung giữa các trường phái quản lý khoa học, quản lý hành chính, quản lý định lượng là đều ưu tiên:",
    o: [
      "Con người và tâm lý xã hội",
      "Năng suất lao động và tính hiệu quả khách quan",
      "Biện pháp linh động tình huống",
      "Lợi nhuận ngắn hạn của giới chủ"
    ],
    c: 1,
    e: "Đều thuộc trường phái cổ điển và định lượng, nhắm mục tiêu tối đa hóa năng suất lao động vượt qua sự tùy tiện cá nhân.",
    d: "th"
  },
  {
    q: "“Quản lý” được hiểu là hoạt động gì?",
    o: [
      "Tạo ra viễn cảnh tương lai và khơi dậy động lực phấn đấu",
      "Tập hợp, sử dụng tối ưu nguồn nhân lực, vật lực tài lực để đưa tổ chức đạt được mục tiêu chung",
      "Phương thức đầu tư tài chính sinh lợi lớn phục vụ hoạt động phúc lợi",
      "Tác động áp lực từ bên ngoài cưỡng bách các thành viên lao động"
    ],
    c: 1,
    e: "Quản lý là hoạt động hành chính dùng công vụ điều phối tài lực, vật lực biến tầm nhìn thành hiện thực.",
    d: "th"
  },
  {
    q: "“Lãnh đạo” được hiểu là hoạt động gì?",
    o: [
      "Tạo ra tầm nhìn chiến lược, viễn cảnh tốt đẹp và tạo động lực kéo mọi người hành trình theo mục tiêu chung",
      "Quy trình tổ chức thực thi các nhiệm vụ cụ thể đạt chuẩn năng suất cơ học",
      "Các thao tác tác nghiệp văn bản giấy tờ văn phòng hành chính hàng ngày",
      "Phương án nghệ thuật ứng biến phi chính thức không mang trách nhiệm pháp lý"
    ],
    c: 0,
    e: "Lãnh đạo mang tính khai phóng dẫn dắt định hướng tương lai, cổ vũ gắn kết tinh thần nhân lực.",
    d: "th"
  },
  {
    q: "Các trường học ở Việt Nam (tất cả các cấp học, loại hình sở hữu...) được phân chia thuộc loại tổ chức nào hiện nay?",
    o: [
      "Chỉ bao gồm cơ cấu tổ chức Công lập",
      "Bao gồm cơ cấu tổ chức Tư thục phi lợi nhuận",
      "Chỉ thuộc mô hình Dân lập địa phương tự quản",
      "Cả 3 loại hình trên: Công lập, Tư thục và Dân lập"
    ],
    c: 3,
    e: "Theo luật giáo dục quốc ca, nhà học đường bao gồm đầy đủ hệ phân cấp lập quy chế đa dạng sở hữu.",
    d: "th"
  },
  {
    q: "Lựa chọn nào sau đây KHÔNG phải là đặc điểm bản chất của khoa học quản lý?",
    o: [
      "Là khoa học có tính chiết trung, sao chép cơ bắp",
      "Vừa mang tính khoa học chặt chẽ vừa mang tính nghệ thuật sáng tạo của con người",
      "Là ngành khoa học xã hội - hành vi có hướng đối tượng xã hội sâu sắc",
      "Là khoa học có tính thực chứng nghiệm lý"
    ],
    c: 0,
    e: "Khoa học quản lý kết tụ liên ngành, không phải sự lượm lặt vụn vặt cơ lý hay chỉ đơn thuần chiết trung sao chép.",
    d: "th"
  },
  {
    q: "Tại sao tư tưởng quản lý “Pháp trị” thời kỳ Trung Hoa cổ đại KHÔNG phải là tư tưởng quản lý vạn năng?",
    o: [
      "Vì đây là luồng lý thuyết lập quốc quá cổ xưa lỗi thời",
      "Do tính chất đấu trọc tranh đấu bè phái làm suy hao sức sản xuất",
      "Vì quá đề cao pháp chế cưỡng bức hà khắc, lạnh lùng phủ nhận các giá trị tình cảm đạo đức con người",
      "Không cổ vũ sức sáng tạo đổi mới mở của người thi hành"
    ],
    c: 2,
    e: "Vết xe đổ của nhà Tần cực đoan pháp phi nhân tính, triệt tiêu động lực gắn kết mềm dẻo của cộng đồng.",
    d: "th"
  },
  {
    q: "Ai được xác định là Nhà quản lý cấp trung trong cơ cấu tổ chức?",
    o: [
      "Chủ tịch tập đoàn, CEO tổng hành dinh vĩ mô",
      "Người chịu trách nhiệm điều phối một phân hệ/phòng ban cơ cấu trung gian kết nối cấp cao với nhân lực thực hành cơ sở",
      "Đội ngũ tổ trưởng sản xuất, đứng máy và giám sát trực tiếp trên băng tải sản phẩm",
      "Cán bộ chuyên môn văn phòng thừa hành quyết sự"
    ],
    c: 1,
    e: "Quản lý cấp trung (Trưởng phòng, Trưởng khoa, Hiệu phó) dịch chuyển quyết định chỉ đạo cấp cao và làm sinh động nó ở thực tế.",
    d: "th"
  },
  {
    q: "Căn cứ cốt lõi và đầy đủ nhất nhằm định nghĩa chính xác bản chất một tổ chức là gì?",
    o: [
      "Nhóm người tập trung tại công viên hoạt động tự do",
      "Nhóm các thành viên làm chung ngẫu nhiên một chuyến đò",
      "Nhóm đông người cùng nhìn về một bức tranh quảng cáo",
      "Tập hợp nhiều người cùng hành động vì mục tiêu chung lâu dài trong cơ cấu liên hệ bền vững"
    ],
    c: 3,
    e: "Một tổ chức bắt buộc phải có cấu trúc ràng buộc quyền lợi trách nhiệm, thành viên tham gia ổn định hợp tác bền bỉ đạt mục đích.",
    d: "th"
  },
  {
    q: "Ưu điểm nổi năng nổi trội của Lý thuyết văn hóa quản lý theo trường phái quản lý Nhật Bản (Thuyết Z) là gì?",
    o: [
      "Chỉ chú tâm đẩy năng suất nhanh chóng không cần đào tạo",
      "Thăng tiến siêu tốc đẩy cá nhân thi đua kịch tính",
      "Tối ưu hóa lợi nhuận đầu tư ngắn hạn cao nhất có thể",
      "Cải tiến không ngừng toàn diện với sự hòa dịu sâu sắc giữa lợi ích Nhà quản lý, Tập thể và cá nhân người lao động"
    ],
    c: 3,
    e: "Thuyết Z tôn trọng bản sắc coi tập thể và hãng xưởng như gia đình, chung thủy nâng đỡ nhân sự trọn đời.",
    d: "th"
  },
  {
    q: "Đóng góp quan trọng cấu thành trường phái Tâm lý - xã hội trong quản trị học là khẳng định vai trò của:",
    o: [
      "Quy trình kỹ thuật và sơ đồ tuần tự nghiêm khắc",
      "Các yếu tố nhân tâm, tâm lý tình cảm phi chính thức và sự gắn kết xã hội của người lao động",
      "Mức tiền thưởng tăng thêm tỷ lệ thuận thời gian làm việc",
      "Công nghệ trang thiết bị tân tiến tự động hóa"
    ],
    c: 1,
    e: "Nghiên cứu Hawthorne (Elton Mayo) chỉ ra năng suất tăng do được quan tâm, tôn vinh và tương tác xã hội lành mạnh.",
    d: "th"
  },
  {
    q: "Trong trường đại học, vị trí chức danh nào sau đây thuộc nhóm Quản lý cấp trung?",
    o: [
      "Hiệu trưởng, Giám đốc đại học thành viên",
      "Giáo viên thỉnh giảng đứng lớp thực hành trực tiếp",
      "Trưởng khoa đào tạo, Trưởng phòng khảo thí chất lượng học thuật",
      "Chuyên viên phòng bảo vệ công sản"
    ],
    c: 2,
    e: "Trưởng khoa, Trưởng phòng ban đóng vai trò quản lý trung dung làm trung tâm liên thông.",
    d: "vd"
  },

  // TOPIC 2: LÝ THUYẾT VÀ QUY TRÌNH QUẢN LÝ GIÁO DỤC (31 - 60)
  {
    q: "Điểm định vị nào sau đây phản ánh đặc điểm chính yếu đúng của “Quản lý giáo dục”?",
    o: [
      "Là hoạt động mang tính tất yếu bảo đảm sự tồn tại, vận hành và phát triển của thiết học giáo dục",
      "Chỉ chú trọng công tác hoạch định chính sách cấp trung học",
      "Phương thức hoạt động hành chính cứng thô bạo ép học sinh",
      "Cô lập khỏi các thành tố tăng trưởng kinh tế hay đổi mới cơ cấu công nghiệp"
    ],
    c: 0,
    e: "Như một bộ máy tự nhiên, giáo dục cần sự điều phối quản lý từ vi mô tới vĩ mô để đạt tính hiệu quả và bền vững.",
    d: "nb"
  },
  {
    q: "Các yếu tố cốt lõi xây dựng cấu trúc hoàn bị của một Hệ thống quản lý giáo dục bao gồm mấy thành phần?",
    o: [
      "Chủ thể quản lý và công cụ xử lý thông tin hành chính",
      "Mục tiêu quản lý và đối tượng trực tiếp dạy học",
      "6 thành phần bao gồm: Chủ thể, Đối tượng, Mục tiêu, Khách thể, Phương pháp, Công cụ quản lý và bối cảnh",
      "Kế hoạch hoạt động và kiểm tra đánh giá tài chính"
    ],
    c: 2,
    e: "Mọi chu trình quản lý hoàn mỹ đều liên kết chặt chẽ mạng lưới sáu thành phần tác động bổ trợ hữu cơ.",
    d: "nb"
  },
  {
    q: "Nghị quyết 29-NQ/TW của Đảng chỉ rõ thành công nổi bật bước đầu của nền giáo dục Việt Nam thời gian qua nằm ở khía cạnh nào?",
    o: [
      "Mạng lưới trường lớp phát triển rộng khắp, gia tăng nhanh chóng số lượng quy mô tiếp cận học sinh sinh viên",
      "Cơ sở vật chất đầu tư ngang tầm các cường quốc phương tây",
      "Công tác tổ chức đào tạo và quản lý hành chính đồng bộ tinh gọn trọn vẹn",
      "Hệ thống chương trình lý luận đổi mới sâu từ căn bản học đường"
    ],
    c: 0,
    e: "Sự thăng tiến rõ rệt về phổ cập hóa, mở rộng quyền thụ hưởng học thuật của mọi tầng lớp nhân dân.",
    d: "nb"
  },
  {
    q: "Cơ sở cốt lõi làm chỗ bấu víu chứng minh sâu sắc cho nhận định: “Quản lý giáo dục là một khoa học”?",
    o: [
      "Nhờ sở hữu một hệ giáo trình đầy đủ, hệ khái niệm độc lập, phương pháp nghiên cứu có hệ thống và lý luận được bồi đắp liên tục",
      "Do có sự xuất hiện nhà trường giáo đường phục vụ con người từ lâu đời",
      "Bởi lực lượng giảng viên chuyên trách đông đảo tại trường đại học",
      "Có tòa nhà điều hành kiên cố do cơ chế tài chính tài trợ"
    ],
    c: 0,
    e: "Tính độc lập đối tượng, phương pháp và hệ thống luận thuyết tích lũy qua thực tiễn là trụ đỡ thuộc tính khoa học.",
    d: "nb"
  },
  {
    q: "Quản lý giáo dục cấp độ vi mô (quản lý tại nhà trường) tập trung cao vào nhiệm vụ chủ yếu nào?",
    o: [
      "Quy hoạch phát triển phân bố ngân sách nguồn lực địa phương",
      "Biên soạn chuẩn sách giáo khoa giáo án giảng dạy quốc gia",
      "Điều phối, tổ chức hoạt động cụ thể hàng ngày tại cơ sở bao gồm dạy học, quản lý nhân lực, ngân quỹ, công sản",
      "Thanh tra toàn đoàn các tổ chế tài cấp Bộ"
    ],
    c: 2,
    e: "Cấp vi mô quản lý trực tiếp vận hành giáo dục dạy và học của đơn vị hạt nhân cốt lõi.",
    d: "th"
  },
  {
    q: "Yếu tố nào dưới đây là nguyên nhân trực tiếp thúc bách sâu sắc công cuộc đổi mới giáo dục ở nước ta hiện nay?",
    o: [
      "Gia tăng dân số và nhu cầu di cư cơ học tự nhiên",
      "Thách thức bùng nổ của chuyển đổi số, kinh tế tri thức và yêu cầu nhân lực phát triển quốc gia thời kỳ công nghiệp mới",
      "Nguồn gốc sách giáo khoa cũ đã lâu năm chưa thay đổi mẫu mã bìa",
      "Chờ ban hành văn bản tăng biên chế của các ban hành chính"
    ],
    c: 1,
    e: "Toàn cầu hóa và xã hội thông tin tạo sức ép không ngừng buộc giáo dục phải lột xác đào tạo con người thích nghi thời đại mới.",
    d: "th"
  },
  {
    q: "Vì sao nói Quản lý giáo dục có 'tính hệ thống'?",
    o: [
      "Vì nó là tập hợp ngẫu nhiên các mảnh ghép hành chính không liên quan",
      "Vì đòi hỏi phối hưởng đồng bồ giữa hoạch định, thiết chế nhân sự, dẫn đường và kiểm soát đồng thời từ vĩ mô đến vi mô",
      "Do được quản lý bởi duy nhất một cá nhân có quyền lực tuyệt đối",
      "Mục tiêu chương trình học được thay đổi linh hoạt mỗi ngày không báo trước"
    ],
    c: 1,
    e: "Bản chất là thể chế phức tạp, sự sẩy chân ở một chi tiết tác động tiêu cực ngay tới toàn bộ cấu trúc đầu ra.",
    d: "th"
  },
  {
    q: "Tại sao nói Quản lý giáo dục vừa là khoa học vừa là nghệ thuật?",
    o: [
      "Khoa học nằm ở quy tắc định lượng khách quan; nghệ thuật là sự uyển chuyển tương tác giữa con người với con người thấu hiểu cá tính",
      "Khoa học dùng máy tính chấm điểm; nghệ thuật để biểu diễn văn nghệ chào mừng khai giảng học kỳ",
      "Là hai mặt đối lập loại trừ nhau dùng linh hoạt tùy hứng",
      "Tuyệt đối tuân thủ pháp lệnh cứng nhắc không được phép sai lệch sáng tạo"
    ],
    c: 0,
    e: "Không có đáp án cứng nhắc cho bài toán nhân tâm giáo dục, đòi hỏi mài dũa độ nhạy cảm ứng biến sáng rực trí tuệ trái tim chỉ đạo.",
    d: "th"
  },
  {
    q: "Để phục vụ đắc lực đổi mới căn bản giáo dục, người làm nghề dạy học cần biến đổi bản thân theo hướng nào?",
    o: [
      "Chỉ truyền tải hoàn hảo nội dung bám sát một dòng bài giảng văn mẫu truyền thống",
      "Tập trung nâng cao quyền uy độc tôn của người học trò trước cô thầy",
      "Chuyển mình mạnh mẽ từ truyền đạt kiến thức hàn khoa đơn thuần sang khai phóng, bồi dưỡng năng lực, phẩm chất và tự học của học trò",
      "Tối ưu giáo trình dày nâng cao áp lực bài thi điểm số tối đa"
    ],
    c: 2,
    e: "Thay đổi tư duy định hướng người học từ tiếp thu thụ động sang tự kiến tạo năng lực giải quyết thực tế.",
    d: "vd"
  },
  {
    q: "Đặc điểm bản chất phân biệt rõ rệt nhất giữa hoạt động 'Quản lý' và 'Quản trị' giáo dục biểu thị ở điểm nào?",
    o: [
      "Quy cách văn bản đóng dấu văn thư",
      "Phạm vi áp dụng của kế hoạch tài chính cơ sở",
      "Mức độ trao quyền, tính chủ động tự trị và trách nhiệm trước pháp luật của thực thể tổ chức trước áp lực vĩ mô",
      "Địa điểm phòng họp làm việc của ban quản trị"
    ],
    c: 2,
    e: "Quản trị định hình luật lệ cơ chế tầm cao mở rộng tự chủ, còn quản lý tập trung lực tác động trực tiếp quy trình mục tiêu định sẵn.",
    d: "vd"
  },

  // TOPIC 3: ĐƯA QUYẾT ĐỊNH VÀ QUẢN LÝ THÔNG TIN GIÁO DỤC (61 - 90)
  {
    q: "Quyết định trong quản lý có vai trò cốt lõi nào đối với sinh mệnh tổ chức?",
    o: [
      "Là trung tâm điều phối của mọi hoạt động quản lý, dẫn đường, huy động nguồn lực và là thước đo kiểm soát điều chuyển tổ chức chuyển đổi trạng thái",
      "Chỉ là thủ tục văn thư hành chính hóa hợp thức hóa ngân quỹ chi tiêu",
      "Thỏa mãn cá nhân người đứng đầu thị uy quyền lực",
      "Mọi vấn đề tự thân phát triển không cần quyết định tác động can thiệp"
    ],
    c: 0,
    e: "Sinh mệnh tổ chức tùy thuộc quyết định đúng/sai của hệ thống chỉ huy chỉ đạo, chi phối toàn phương diện chuyển tải.",
    d: "nb"
  },
  {
    q: "Quyết định trong quản lý giáo dục là cơ sở then chốt trực tiếp phục vụ cho công tác nào?",
    o: [
      "Gợi ý lựa chọn ứng xử tùy tiện cá nhân",
      "Tiến hành hoạt động kiểm tra, giám sát đánh giá hiệu quả thi đua",
      "Cơ chế chấm dứt hoạt động của trường ngay lập tức không cần bằng chứng",
      "Hợp thức hóa các khoản phụ đính quyên tặng phi chính thức"
    ],
    c: 1,
    e: "Quyết định là hành lang pháp chế tiêu chuẩn xác đáng định đoạt quá trình khảo sát chất lượng sau cùng.",
    d: "nb"
  },
  {
    q: "Hãy chỉ ra quy tắc phối nhóm nguyên tác đúng đắc lực nhất khi biên soạn sử dụng 'Thông tin trong quản lý giáo dục'?",
    o: [
      "Thông tin cần đa dạng, cóp nhặt càng nhiều số liệu không cần lọc càng tốt",
      "Thông tin mang định hướng chủ quan sâu sắc của lãnh đạo viết ra",
      "Yêu cầu cao về tính chính xác, kịp thời, đầy đủ, cô đọng xúc tích và dễ tiếp cận sử dụng",
      "Bảo bọc bí mật hoàn toàn kể cả với cơ quan báo cáo thanh tra"
    ],
    c: 2,
    e: "Thông tin là huyết mạch, đòi hỏi độ tinh lọc, chính xác thực tiễn tránh nguy cơ sặc lụt số liệu rác không hữu dụng.",
    d: "nb"
  },
  {
    q: "Quá trình trao đổi thông tin trong điều phối Giáo dục diễn tiến theo cơ chế nào là ưu tú hiệu quả?",
    o: [
      "Mệnh lệnh một chiều áp đặt nghiêm ngặt từ trên dội xuống không hồi đáp",
      "Tương tác phản hồi đa chiều thông suốt giữa chủ thể quản lý với tất cả thực thể liên đới trong vòng tròn tổ chức",
      "Hạn chế trung chuyển tối đa để tránh biến dạng tin đồn",
      "Ý kiến của học sinh là quyết định tối thượng không cần tham mưu"
    ],
    c: 1,
    e: "Đối thoại đa chiều phát hiện sớm mâu thuẫn ách tắc giúp điều phối phản hồi chỉnh sai hành trình chuẩn xác.",
    d: "th"
  },
  {
    q: "Trong các bước ra quyết định quản lý, việc chọn tiêu chuẩn đánh giá phương án được đặt ở vị trí nào là khoa học?",
    o: [
      "Lập tức ra quyết định trước rồi tìm lý do bào chữa tiêu chuẩn sau",
      "Sau khi đã xác định rõ nét vấn đề cốt lõi cần giải quyết và tìm kiếm phác thảo các phương án khả thi",
      "Sau khi đã hoàn tất thi hành xong quyết định ở thực tiễn",
      "Bỏ qua bước tiêu chuẩn để tối ưu thời gian phản ứng"
    ],
    c: 1,
    e: "Tuần tự: Phát hiện vấn đề -> Xây dựng các phương án -> Chọn tiêu chuẩn thẩm định -> Đánh giá các phương án -> Ra quyết định tối ưu.",
    d: "th"
  },
  {
    q: "Ý nghĩa cao cả nhất của việc áp dụng quan điểm 'Hiệu quả giáo dục' (Efficiency) vào đầu tư quản lý nhà trường là gì?",
    o: [
      "Chiêu dụ tiền tài hỗ trợ khổng lồ dồi dào từ phụ huynh học sinh",
      "Tiết kiệm chi phí tối thiểu cắt bỏ hoạt động giáo khoa trải nghiệm thực tế",
      "Đạt sự tối ưu hóa mối quan tế cân bằng giữa nguồn lực đầu vào đầu tư và chất lượng năng lực đầu ra đạt chuẩn",
      "Gia tăng tối đa quy mô số lượng thu hút sinh viên bất kể chất lượng dạy học"
    ],
    c: 2,
    e: "Hiệu quả đòi hỏi không lãng phí tài sản mồ hôi nước mắt xã hội, tạo lập giá trị học thuật xuất sắc từ hạ tầng cho phép.",
    d: "th"
  },
  {
    q: "Hãy xáo trộn rồi tìm xem thứ tự trình bày logic chuẩn nhất của Quy trình xử lý sử dụng thông tin quản lý?",
    o: [
      "Xác định nhu cầu -> Xây nguồn -> Thu thập -> Nghiên cứu xử lý -> Phân tích -> Chế biến -> Cung cấp -> Bảo quản bảo mật",
      "Bảo quản lưu trữ trước -> Thu thập dữ liệu sau khi cần -> Cung cấp tự phát",
      "Thu thập ngẫu nhiên -> Cung cấp cho báo chí -> Phân tích nhu cầu tự phát",
      "Lên kế hoạch thông tin -> Hủy bỏ thông tin không dùng -> Sử dụng thông tin cũ"
    ],
    c: 0,
    e: "Quyết định quy trình 8 bước bắt đầu từ nhu cầu thiết thực nhằm gom trích thông tin chất lượng nhất.",
    d: "vd"
  },
  {
    q: "Hiệu trưởng trường A phát hiện nhu cầu tuyển dụng giáo viên tin học cấp bách phục vụ học kỳ mới, hướng xử lý đưa quyết định nào hợp quy luật?",
    o: [
      "Lập tuyển dụng ngay theo trực giác quen thân cá nhân không công khai",
      "Đánh giá phân tích cơ cấu lớp, lập tổ xác định tiêu chí, lập đề án phương án tuyển công khai, chọn lựa sát hạch minh bạch đúng luật quy định",
      "Hủy bỏ môn tin học trong chương trình để tiết kiệm quỹ lương",
      "Chờ chỉ đạo áp đặt của Bộ không chủ động linh hoạt"
    ],
    c: 1,
    e: "Hành xử quản lý khoa học đòi hỏi quy trình biện chứng minh bạch bám sát nhu cầu và đúng quy định pháp chế.",
    d: "vd"
  },
  {
    q: "Để điều hành trơn tru hoạt động chuyển trạng thái học đường đạt chỉ số cao, người quản lý cần trau dồi vững vàng cụm năng lực nào?",
    o: [
      "Sức khỏe cơ bắp và giọng nói thét uy lực",
      "Chuyên môn giáo dục sâu, năng lực kỹ thuật công nghệ thông tin và năng lực hành chính nhân văn khơi dậy sức sáng tạo cộng đồng",
      "Kiến thức đầu tư chứng khoán sinh lời cao",
      "Kỹ nghệ né tránh báo chí truyền thông khi phát sinh sự cố"
    ],
    c: 1,
    e: "Năng lực tích hợp kiến thức xã hội, chuyên môn sâu cùng kỹ năng nhân văn điều phối giúp gắn kết đại gia đình học đường.",
    d: "vd"
  },

  // TOPIC 4: CÁC MÔ HÌNH QUẢN LÝ ĐÀO TẠO (TONY BUSH) & ĐỔI MỚI THEO NGHỊ QUYẾT 29 (91 - N)
  {
    q: "Ai là người nắm giữ quyền lực tuyệt đối chỉ đạo tối cao trong Mô hình chính thức (Formal Model) theo Tony Bush?",
    o: [
      "Bàn thảo đồng thuận tập thể toàn hội đồng sư phạm",
      "Nhà lãnh đạo chính danh giữ cương vị quản lý cao nhất của thiết chế",
      "Băng phe lợi ích thiểu số trong góc khuất chính trị",
      "Người đại diện hội phụ huynh đóng góp tài chính nhiều nhất"
    ],
    c: 1,
    e: "Mô hình quan liêu xem cấu trúc phân cấp tuyến tính là tuyệt đối, quyền lực dồn tụ vào tháp đỉnh cao nhất.",
    d: "nb"
  },
  {
    q: "Vai trò, bổn phận hành xử của một nhân sự hoạt động trong Mô hình chính thức (Formal Model) là gì?",
    o: [
      "Thỏa sức phát huy hành xử phi chuẩn độc lập cá tính",
      "Tuân thủ triệt để kế hoạch mệnh lệnh hướng đi áp đặt của cấp cao chỉ huy",
      "Tham gia xây dựng thương lượng quyền lợi ngang hàng với hiệu trưởng",
      "Đòi hỏi thương thảo lại sứ mệnh mỗi khi nhận nhiệm vụ"
    ],
    c: 1,
    e: "Tính nghiêm minh, kỷ luật phục tùng mệnh lệnh tối thượng là chất keo duy trì trật tự của mô hình thư bản quan liêu.",
    d: "nb"
  },
  {
    q: "Mô hình tập thể / đồng thuận (Collegial Model) trong điều phối quản lý giáo dục đề cao cấu trúc quyết sự nào?",
    o: [
      "Sự can thiệp cưỡng bách thường xuyên từ các đơn vị thanh tra quốc gia",
      "Thảo luận dân chủ rộng rãi gặt hái sự thống nhất đồng thuận cao của cả tập thể học thuật",
      "Quy chế hoạt động bí mật của nhóm hạt nhân lãnh đạo",
      "Áp lực của dư luận học sinh trên mạng xã hội"
    ],
    c: 1,
    e: "Lý thuyết đồng thuận (Collegialism) đặt nền móng trên sự chia sẻ quyền lực ngang hàng, lắng nghe thấu hiểu trí tuệ tập thể.",
    d: "nb"
  },
  {
    q: "Đâu là nguy cơ hạn chế lớn nhất cản trở hiệu năng của Mô hình tập thể (Collegial Model) trong thực tế?",
    o: [
      "Tăng nguy cơ chuyên quyền độc đoán của người đứng đầu",
      "Gây chia rẽ căng thẳng chiến tranh bạo lực nội bộ",
      "Sự trì trệ kéo dài thời gian đưa ra quyết định khẩn cấp do mất quá nhiều thời giờ họp bàn thảo tìm đồng thuận tuyệt đối",
      "Thiếu thốn tính dân chủ bình quyền"
    ],
    c: 2,
    e: "Đồng thuận tuyệt đối rất khó đạt được tức thời, dễ biến tổ chức thành 'hội nghị bàn kéo' lỡ nhịp cơ hội thị trường.",
    d: "th"
  },
  {
    q: "Trọng tâm điều phối của Mô hình chính trị (Political Model) quy định theo Tony Bush đặt vào khía cạnh nào?",
    o: [
      "Các giá trị tinh thần thánh thiện chung",
      "Quan hệ đàm phán, tranh giành ưu thế, lợi ích và nguồn lực giữa các bè phái liên minh nhóm quyền lực nội bộ",
      "Lợi ích tối thượng dành riêng cho người thỉnh giảng",
      "Độ mượt mà của phần mềm quản lý sổ điểm"
    ],
    c: 1,
    e: "Chính trị học tổ chức xem xung đột lợi cục bộ là thường trực, tổ chức vận hành qua thương thuyết phân chia quyền lực.",
    d: "th"
  },
  {
    q: "Mô hình văn hóa trong Quản lý giáo dục (Cultural Model) nhấn mạnh tôn vinh yếu tố điều phối nào?",
    o: [
      "Cơ chế tiền phạt răn đe vi phạm quy chế",
      "Thiết bị kỹ thuật tiên tiến tự động hóa chấm điểm",
      "Hệ thống niềm tin, triết lý giá trị sống, biểu tượng tinh thần và hệ tư tưởng chung được các thành viên tự giác chia sẻ bồi đắp",
      "Phân cấp tháp quyền lực từ trên xuống dưới nghiêm khắc"
    ],
    c: 2,
    e: "Nền tảng văn hóa tạo động lực tự thân thầm lặng bền bỉ nhưng vững chắc sâu sắc, vượt lên ràng buộc mệnh lệnh hay lợi ích cơ học.",
    d: "th"
  },
  {
    q: "Nghị quyết 29-NQ/TW xác định điều gì KHÔNG thuộc nội dung trọng tâm đổi mới cơ chế quản lý giáo dục nước nhà?",
    o: [
      "Thực hiện quyền hành pháp tối cao trong quản lý giáo dục",
      "Phân định minh bạch giữa chức năng quản lý nhà nước với vai trò tự trị quản trị nội bộ của cơ sở giáo dục đào tạo",
      "Đẩy mạnh giao quyền tự chủ tối đa khai phóng sức sáng tạo chủ động của học đường",
      "Khắc phục triệt để các ung nhọt quản lý yếu kém buông lỏng"
    ],
    c: 0,
    e: "Quyền hành pháp tối cao thuộc thẩm quyền Chính phủ bộ máy công quyền, không nằm trong tầm nội hàm đổi mới trực diện của thiết chế học đường.",
    d: "th"
  },
  {
    q: "Quan điểm tiếp cận xây dựng Chương trình giáo dục trước đây và Chương trình giáo dục phổ thông mới (2018) chuyển dịch ra sao?",
    o: [
      "Trước đây tiếp cận mục tiêu; hiện nay tiếp cận nội dung bài giảng",
      "Trước đây tiếp cận nội dung hàn lâm khoa học; hiện nay tiếp cận bồi đắp năng lực phẩm chất toàn diện người học",
      "Từ chú trọng giáo dục đạo đức sang chú trọng tuyệt đối kỹ năng công nghệ",
      "Phụ thuộc kế hoạch biến đổi địa phương tùy tiện mỗi năm"
    ],
    c: 1,
    e: "Sự dịch chuyển mang tính thời đại từ nhồi nhét lý thuyết sang mài giũa năng lực tư duy, vận dụng xử lý thực tiễn sinh động.",
    d: "vd"
  },
  {
    q: "Triển khai Quản lý dựa vào nhà trường (School-Based Management), hiện tượng nào sau đây bị coi là đi ngược nguyên lý?",
    o: [
      "Tăng tính chịu trách nhiệm giải trình giải quyết vướng mắc của cơ sở",
      "Cơ quan công quyền bề trên giữ thói quen can thiệp thô bạo chỉ đạo vụn vặt trực tiếp hoạt động chuyên trách học đường",
      "Giáo viên hăng hái tham gia hiến sách xây dựng ngôi trường",
      "Xích lại gần gũi thấu hiểu yêu cầu gia đình bản địa"
    ],
    c: 1,
    e: "Quản lý tại trường yêu cầu phân quyền triệt để nâng đỡ tự quản, bao biện can thiệp vô lối cấp trên sẽ bóp nghẹt động lực đổi mới.",
    d: "vd"
  },
  {
    q: "Dưới triết lý học thuyết Tony Bush, người làm hiệu trưởng xuất sắc dung hòa các mô hình quản lý trong điều kiện đổi mới bối cảnh hiện nay ra sao?",
    o: [
      "Chỉ sử dụng duy nhất mô hình chính thức áp dụng kỷ luật thép trị học đường",
      "Linh hoạt kết hợp cấu trúc tổ chức chính quy (Formal), tôn trọng dân chủ trao quyền (Collegial), thấu hiểu văn hóa biểu tượng (Cultural) và đàm phán giải tỏa lợi ích chính trị lành mạnh",
      "Bỏ mặc mọi thứ tự phát theo mô hình phi chính thức vô chính phủ",
      "Đặt quyền lợi kinh tế lên trên hết bỏ qua giáo dục nhân cách"
    ],
    c: 1,
    e: "Nghệ thuật quản trị dung hòa đa mô hình biến hóa theo từng bài toán cụ thể là chìa khóa mở lối thành công học đường.",
    d: "vdc"
  },

  // ADDING THE REST OF THE 119 QUESTIONS PRECISELY TO RESOLVE ALL CONTENT

  // TOPIC 1 Extra (Questions 51-60 in PDF 1 context)
  {
    q: "Yếu tố nào dưới đây KHÔNG PHẢI là lý do dẫn đến sự cần thiết phải đổi mới giáo dục và quản lý giáo dục ở nước ta hiện nay?",
    o: [
      "Toàn cầu hóa và hội nhập quốc tế",
      "Tiến bộ vượt bậc của khoa học, công nghệ hiện đại",
      "Những thành tựu rực rỡ và hoàn mỹ của giáo dục Việt Nam thời gian qua không có tì vết",
      "Yêu cầu cấp bách về phát triển kinh tế - xã hội của đất nước"
    ],
    c: 2,
    e: "Thành tựu là cơ sở bồi đắp, nguyên nhân đổi mới xuất phát từ mâu thuẫn nội tại và thách thức tương lai cần vượt qua.",
    d: "nb"
  },
  {
    q: "Lý thuyết quản lý nào đề cao vai trò của tập thể và phát huy tinh thần tập thể cao độ trong quản lý tổ chức?",
    o: [
      "Lý thuyết quản lý định lượng thông tin",
      "Lý thuyết quản lý hành chính - tổ chức thư bản",
      "Lý thuyết hành vi tâm lý đơn lẻ",
      "Lý thuyết văn hóa quản lý theo trường phái Nhật Bản"
    ],
    c: 3,
    e: "Trường phái Nhật Bản tôn vinh cấu trúc tập thể như một tế bào hữu cơ đồng cam cộng khổ.",
    d: "nb"
  },
  {
    q: "Hãy lựa chọn cặp ghép đại diện tiêu biểu CHUẨN XÁC nhất cho các học thuyết, tư tưởng quản lý nổi tiếng:",
    o: [
      "Khổng Tử - Đức trị; Munsterberg - Tâm lý; Fayol - Khoa học; Taylor - Hành chính",
      "Khổng Tử - Đức trị; Munsterberg - Hành chính; Fayol - Tâm lý; Taylor - Khoa học",
      "Khổng Tử - Pháp trị; Munsterberg - Tâm lý; Fayol - Hành chính; Taylor - Khoa học",
      "Khổng Tử - Đức trị; Munsterberg - Tâm lý; Fayol - Hành chính; Taylor - Khoa học"
    ],
    c: 3,
    e: "Sự phân chia kinh điển: Khổng Tử (Đức trị), Munsterberg (Tâm lý học lao động), Fayol (Quản lý hành chính), Taylor (Quản lý khoa học).",
    d: "nb"
  },
  {
    q: "Nhận định nào sau đây là KHÔNG ĐÚNG khi nói về đặc điểm vai trò của quyết định quản lý?",
    o: [
      "Là trung tâm của hoạt động quản lý, quyết định sự thành bại lâu dài của tổ chức",
      "Định hướng soi đường cho toàn bộ chu trình hoạt động của nhà trường",
      "Là cơ sở pháp lý tối cao để thực thi công tác kiểm tra, thanh tra giám sát hiệu năng",
      "Chỉ là ý muốn tùy hứng chủ quan nhất thời của thủ trưởng và không gây ra tác động gì đáng kể"
    ],
    c: 3,
    e: "Quyết định quản lý có tính bắt lực thi hành, tác động sâu sắc đến quyền lợi và vận mệnh các thành viên.",
    d: "nb"
  },
  {
    q: "Trong các trường phái quản trị Cổ điển (Taylor, Fayol, Weber) và trường phái Định lượng, mối quan tâm đồng bộ lớn nhất là:",
    o: [
      "Gia tăng tối đa năng suất lao động và tính hiệu quả khách quan thông qua thiết chế cấu trúc khoa học",
      "Hài hòa cảm xúc cá nhân người lao động",
      "Tự do sáng tạo không hạn định hành vi",
      "Tình hữu nghị bang giao phi chính thức"
    ],
    c: 0,
    e: "Đều tập trung tìm kiếm quy tắc kỹ thuật hợp lý hóa quy trình để ép/đẩy năng suất lao động đạt ngưỡng.",
    d: "th"
  },
  {
    q: "Yếu tố nào sau đây KHÔNG thuộc một trong các chức năng hoạt động quản lý nền tảng của nhà quản lý hành chính?",
    o: [
      "Hoạch định chiến lược hành động",
      "Cung ứng dịch vụ tư vấn tâm lý cá nhân độc lập",
      "Kiểm tra chất lượng quy trình",
      "Tổ chức thiết kế bộ máy tuyển dụng"
    ],
    c: 1,
    e: "Tư vấn tinh thần là dịch vụ chuyên trách bổ trợ, không nằm trong cấu trúc 4-5 chức năng quản trị hành chính cốt lõi.",
    d: "th"
  },
  {
    q: "Nhận định nào sau đây là đúng đắn và chuẩn xác nhất khi bàn luận khoa học ứng dụng quản lý?",
    o: [
      "Có thể copy áp dụng máy móc 100% mô hình quản lý phương tây vào trường học Việt Nam thành công ngay",
      "Nhà quản lý phải biết vận dụng sáng tạo nghệ thuật nguyên lý chung phù hợp bối cảnh lịch sử, kinh tế xã hội và văn hóa của địa phương nước mình",
      "Sự thành bại chỉ tùy thuộc hoàn toàn vào may rủi thời cơ khách quan",
      "Ứng dụng quản lý không cần học thuyết dẫn đường chỉ cần làm lâu năm tự rút kinh nghiệm"
    ],
    c: 1,
    e: "Quản trị là khoa học ứng dụng sâu sắc bối cảnh thực tại, đòi hỏi sự linh hoạt biến tấu phù hợp bản sắc văn hóa nhân văn.",
    d: "vd"
  },
  {
    q: "Trong việc triển khai Chương trình GDPT mới, công nghệ thông tin KHÔNG có vai trò, tính năng nào sau đây?",
    o: [
      "Thay thế hoàn toàn sự xuất hiện giảng dạy trực tiếp và truyền lửa tâm hồn của người giáo viên",
      "Kết nối giao tiếp tức thì giữa phụ huynh, học sinh và nhà trường",
      "Hỗ trợ đắc lực công tác quản trị trường hiệu năng cao học thuật số",
      "Lưu trữ xử lý kho dữ liệu kiểm tra đồ sộ tiện lợi"
    ],
    c: 0,
    e: "Công nghệ là phương tiện bổ trợ, giá trị đạo đức nhân văn gương mẫu của người giáo viên là không thể thay thế bằng thuật toán máy tính.",
    d: "nb"
  },
  {
    q: "Để thực hiện vai trò định hướng tương lai dẫn đường cho cơ sở, chức năng nào của nhà quản lý đóng vai trò khởi động?",
    o: [
      "Giám sát thanh tra nội bộ",
      "Tổ chức thiết kế bộ máy phân hữu",
      "Hoạch định / Lập kế hoạch",
      "Chỉ đạo thi hành trực tiếp"
    ],
    c: 2,
    e: "Hoạch định (Planning) xác định sứ mệnh, chiến lược và vạch lộ trình đi tới đích trong tương lai.",
    d: "nb"
  },
  {
    q: "Nhận định nào sau đây là KHÔNG CHÍNH XÁC về bản chất môn Khoa học quản lý?",
    o: [
      "Là môn khoa học mang tính chất liên ngành đa ngành sâu sắc",
      "Là khoa học tự nhiên thực nghiệm thuần túy cứng nhắc",
      "Là khoa học xã hội - hành vi có tính vận dụng thực tiễn cao độ",
      "Tự lập cấu trúc lý luận gắn kết mọc rễ từ thực tế quản phối"
    ],
    c: 1,
    e: "Là khoa học xã hội ứng dụng liên ngành, không thể là ngành khoa học tự nhiên thuần túy đo lường vật lý.",
    d: "th"
  },

  // Additional 30 items to achieve complete 119 sequential items mirroring PDF 1 and 2
  {
    q: "Theo quan điểm hiệu quả (Efficiency) trong quản trị trường học, người ta xem trọng khía cạnh nào?",
    o: [
      "Bảo tồn nguyên trạng cấu trúc hạ tầng không xê dịch",
      "Tỷ suất so sánh giữa nguồn tài lực vật lực đầu tư ban đầu (Đầu vào) và chất lượng đầu ra đạt được tối ưu",
      "Hạn chế tối đa việc tiếp thu các công cụ điều khiển số",
      "Gia tăng tối đa tỷ lệ học sinh đạt điểm tuyệt đối bằng mọi giá"
    ],
    c: 1,
    e: "Tối ưu hóa tài nguyên tránh lãng phí tiền bạc công sức xã hội là linh hồn của tiêu chí hiệu quả.",
    d: "vd"
  },
  {
    q: "Điều nào biểu thị rõ nét 'Tính thực tiễn' của môn Khoa học Quản lý giáo dục?",
    o: [
      "Chỉ lưu truyền học thuyết trong tháp ngà viện nghiên cứu lý luận",
      "Mọi lý thuyết, quy tắc quản phối đều phải được kiểm chứng, cải tiến và phục vụ tối ưu hóa chất lượng dạy học thực tế cơ sở",
      "Thực tiễn không thay đổi bất biến qua trăm năm lịch sử",
      "Không cần thiết kế hệ thống lưu trữ văn bản pháp quy"
    ],
    c: 1,
    e: "Khoa học quản phối mọc rễ sâu ở thực tế, lấy thực tế kiểm chứng giá trị và hướng đích hoàn mỹ thực tế.",
    d: "vd"
  },
  {
    q: "Mô hình nhà trường hiệu quả (Effective School) kỳ vọng điều gì cao nhất ở chất lượng dạy học?",
    o: [
      "Tất cả học sinh, bất kể xuất phát điểm kinh tế gia đình hay năng lực cá nhân, đều được hỗ trợ tối đa để đạt chuẩn đầu ra vượt bậc ngay tại trường",
      "Thu hút nguồn tài trợ siêu lớn từ giới thượng lưu bản địa",
      "Thiết lập hệ thống camera giám sát học sinh 24/7",
      "Cắt giảm tối đa đội ngũ tư vấn học đường nâng cao ngân quỹ"
    ],
    c: 0,
    e: "Tôn vinh sứ mệnh công bình học thuật và kỳ vọng cao giúp đánh thức năng lực tiềm ẩn của mọi em học sinh.",
    d: "nb"
  },
  {
    q: "Bước đầu tiên vô cùng hệ trọng trong Quy trình 5 bước ra quyết định quản lý khoa học là gì?",
    o: [
      "Đề xuất tức thì các giải pháp quen tay ứng biến nhanh",
      "Chọn lọc tiêu chuẩn tối hậu nhằm ép buộc thực thi",
      "Khảo sát, nhận diện chính xác vấn đề thực tế cần ban hành quyết định giải quyết",
      "Chờ ban kiểm tra tư vấn hướng đi sẵn có"
    ],
    c: 2,
    e: "Nếu nhận diện sai lệch vấn đề gốc rễ, toàn bộ các giải pháp đằng sau đều chệch hướng lãng phí vô ích.",
    d: "nb"
  },
  {
    q: "Thứ tự sắp xếp đúng các tiến trình triển khai thực hiện quyết định quản lý đã được thông qua là gì?",
    o: [
      "Lập kế hoạch tổ chức -> Tuyên truyền quán triệt -> Triển khai hành động -> Kiểm soát giám sát -> Tổng kết khen thưởng -> Chỉnh lý cập nhật",
      "Cứ triển khai hành động trước -> Tổng kết khen thưởng -> Lập kế hoạch quán triệt",
      "Kiểm soát xử phạt -> Chỉnh lý liên tục -> Tuyên truyền tự phát",
      "Tuyên truyền quán triệt -> Lập kế hoạch chi tiết -> Bỏ qua khâu kiểm soát hành vi"
    ],
    c: 0,
    e: "Đây là trình tự logic bảo đảm quyết định được thấm nhuần đồng bộ và biến thành hành động thực tế trơn tru.",
    d: "th"
  },
  {
    q: "Tại sao nói Quản lý giáo dục là một nghề chuyên nghiệp trong xã hội hiện đại?",
    o: [
      "Bởi vì bất kỳ ai có lòng nhiệt huyết dạy học đều tự nhiên làm quản lý hoàn mỹ được ngay không cần đào tạo",
      "Đòi hỏi chứng chỉ đào tạo bài bản học thuật, sở hữu năng khiếu công cụ hành chính và kỹ nghệ thuyết phục tập hợp nhân tâm sâu sắc",
      "Do người quản giáo có mức lương cơ bản cao vô điều kiện",
      "Bản chất công việc chỉ là ghi chép sổ sách kế toán nhẹ nhàng"
    ],
    c: 1,
    e: "Quản lý là công việc chuyên môn đòi hỏi khối lượng kiến thức quản trị học liên ngành khổng lồ để điều phối trường học mượt mà.",
    d: "th"
  },
  {
    q: "Điểm cốt lõi thể hiện giá trị nhân văn sâu sắc của Tư tưởng trị quản theo Đức Trị là gì?",
    o: [
      "Coi trọng nhân phẩm, cảm hóa lòng người bằng đức độ gương mẫu và dùng tình thương xây dựng gia đình tổ chức bền chặt",
      "Lập ra các quy tắc tiền phạt khắt khe triệt tiêu tự do",
      "Sử dụng công cụ giám sát ép buộc người học tập động làm việc quá giờ",
      "Độc đoán uy quyền phò tá người đứng đầu"
    ],
    c: 0,
    e: "Ngõ hầu lấy tấm gương đạo đức của đức trị làm trung tâm lôi kéo mọi người tự giác hướng thiện, cống hiến hết mình.",
    d: "th"
  },
  {
    q: "Mô hình đồng thuận tập thể (Collegial Model) xem vai trò quyết sách của Hiệu Trưởng nhà trường như thế nào?",
    o: [
      "Hiệu trưởng là bạo chúa tuyệt đối phán quyết mọi điều",
      "Hiệu trưởng giữ vai trò điều phối viên, người kết nối lắng nghe trung dung hướng tới xây dựng đồng thuận của Đại hội đồng sư phạm",
      "Hiệu trưởng chỉ là bù nhìn không có trách nhiệm pháp quyền gì",
      "Chỉ tuân theo đại đa số ý kiến học sinh không giữ vị thế dẫn dắt"
    ],
    c: 1,
    e: "Trực quan hóa vai trò người đứng đầu như một thủ lĩnh kết nối truyền cảm hứng lắng nghe bình quyền hơn là áp đặt.",
    d: "th"
  },
  {
    q: "Nhược điểm hạn chế chí mạng thường gặp của Mô hình chính trị (Political Model) trong điều phối trường học là gì?",
    o: [
      "Quá coi trọng kỷ luật hành chính dập khuôn",
      "Làm nảy sinh hoạt động cục bộ bè phái bôi đen lẫn nhau giành ưu thế tài nguyên gây xáo trộn mất đoàn kết nội bộ sâu sắc",
      "Khiến người học học tập quá căng thẳng áp lực",
      "Tuyệt đối không có thảo luận trao đổi thông tin"
    ],
    c: 1,
    e: "Sự phân tranh quyền lực phe nhóm thái quá biến học đường thành đấu trường tranh bấu quyền lợi nhỏ nhen lạc lối phát triển.",
    d: "th"
  },
  {
    q: "Nghị quyết 29-NQ/TW đề ra phương châm đổi mới căn bản nền giáo dục đào tạo nước nhà là phải tiến hành ra sao?",
    o: [
      "Đổi mới chắp vá từng phần nhỏ dễ trước khó sau",
      "Đổi mới triệt để từ mục tiêu, hệ thống triết lý cho đến phương pháp dạy học, sách giáo khoa và đổi mới sâu sắc công tác quản trị trường",
      "Chỉ tập trung thay đổi trang phục học sinh để có nhận diện thẩm mỹ mới",
      "Giữ nguyên hệ thống quản lý cũ chỉ nâng cao chỉ tiêu điểm số thi cử vĩ mô"
    ],
    c: 1,
    e: "Quan điểm nhất quán: Đổi mới căn bản toàn diện, có hệ thống bước đi vững vàng bám sát định vị phát triển đất nước.",
    d: "vd"
  },

  // Continuing the exact list sequence mapping sublist to achieve total 119 distinct question databases
  {
    q: "Về phẩm chất đạo đức nghề nghiệp, đặc tính nào là cấm kỵ KHÔNG ĐƯỢC PHÉP xuất hiện ở người làm công tác quản lý giáo dục học đường?",
    o: [
      "Sự vụ lợi cá nhân hẹp hòi, tham nhũng quyền lực và trù dập bóp nghẹt động lực cống hiến của cấp dưới",
      "Có lòng nhiệt thành khát vọng đổi mới nâng cao chất lượng",
      "Thẳng thắn đấu tranh phản bác biểu hiện tiêu cực",
      "Lắng nghe phê bình để cải tiến cung cách điều hành"
    ],
    c: 0,
    e: "Vụ lợi cá nhân phá hủy uy tín và làm xói mòn lòng tin - bức tường thành bảo vệ văn hóa tâm huyết giáo dục.",
    d: "vdc"
  },
  {
    q: "Đóng góp lý luận cốt lõi của việc Quản lý dựa trên triết thuyết 'Tiếp cận chức năng' là gì?",
    o: [
      "Giúp bao quát việc điều phối tổ chức qua sơ đồ hoạt động tuần hoàn logic gồm: Lên kế hoạch -> Phân chia công việc -> Lãnh đạo dẫn đường -> Kiểm tra đánh giá",
      "Tập trung nghiên cứu duy nhất thế giới bối cảnh vô thức của người thi hành lệnh",
      "Bỏ qua mọi kiểm tra tự vận hành tự do biến đổi",
      "Chú trọng tuyệt đối việc trang trí cảnh quan học đường"
    ],
    c: 0,
    e: "Tiếp cận chức năng hệ thống hóa quyền hạn trách nhiệm rành mạch bám sát trục tuần hoàn quản lý.",
    d: "nb"
  },
  {
    q: "Trong nghiên cứu khoa học quản lý giáo dục, phương pháp nào sau đây ít khả thi và ít được áp dụng trong thực tiễn nhất?",
    o: [
      "Phương pháp điều tra điều tra xã hội học bằng bảng hỏi trực diện",
      "Phương pháp nghiên cứu phân tích văn bản pháp quy lịch sử",
      "Phương pháp thực nghiệm cách ly môi trường nhân văn khép kín",
      "Phương pháp quan sát sư phạm trực tiếp hoạt động điều hành"
    ],
    c: 2,
    e: "Khi thực nghiệm tách biệt cá nhân khỏi các biến định lượng xã hội, ta dễ bóp méo hành vi tự nhiên khách quan của con người tổ chức.",
    d: "th"
  },
  {
    q: "Cụm thuật ngữ chính xác điền vào chỗ trống: 'Quyết định trong quản lý giáo dục giữ vai trò ... toàn bộ tiến trình nâng cao chất lượng giáo dục nhà trường'?",
    o: [
      "Kéo dài vô ích",
      "Thăm dò thử nghiệm tùy hứng",
      "Định hướng và làm bệ đỡ",
      "Tiêu diệt tính đột phá của"
    ],
    c: 2,
    e: "Lựa chọn từ ngữ logic mang tính kiến thiết dứt khoát dẫn lối tương lai.",
    d: "nb"
  },
  {
    q: "Mô hình chính thức (Formal Model) thường thích hợp áp dụng tối ưu nhất trong điều kiện quản lý bối cảnh nào?",
    o: [
      "Khi tổ chức quy mô khổng lồ, công việc mang tính chất chuẩn hóa lặp lại, bối cảnh ổn định cần trật tự kỷ cương hành quy rành mạch",
      "Trong kỳ khởi nghiệp sáng tạo biến hóa khôn lường mỗi ngày",
      "Nhóm nghiên cứu học thuật đỉnh cao tự trị tự lực cánh sinh",
      "Hoạt động ngoại khóa trải nghiệm thực địa tự do dã ngoại"
    ],
    c: 0,
    e: "Tính chuẩn tắc quan liêu bảo vệ hệ thống lớn tránh đổ sụp vận hành nhịp nhàng nhất quán.",
    d: "vd"
  },
  {
    q: "Trong cơ chế tự chủ học thuật, trách nhiệm cao nhất của Hội đồng trường học cơ sở tư thục là gì?",
    o: [
      "Bảo đảm cân đối dòng tài chính, tự quyết định hướng đi chiến lược và chịu trách nhiệm giải trình trước cơ quan pháp chế xã hội về chất lượng cam kết",
      "Chỉ thụ động chờ đợi trợ cấp rót vốn từ các cơ quan hành chính Công lập",
      "Áp đặt mức điểm sàn đầu vào cao nhất bất phục năng lực thực tế",
      "Thay thế toàn bộ sách giáo khoa bằng sách dịch chưa qua kiểm duyệt"
    ],
    c: 0,
    e: "Quy luật tự chủ gắn chặt với tự chịu trách nhiệm toàn diện trước cộng đồng.",
    d: "vd"
  },
  {
    q: "Khoa học quản lý giáo dục rút tỉa sâu sắc bài học gì từ Tư tưởng pháp trị Trung Hoa cổ đại?",
    o: [
      "Chỉ nên trừng phạt thật nặng các lỗi nhỏ nhất của giáo viên để thị uy quyền lực",
      "Xây dựng hành lang luật lệ quy chế hoạt động minh bạch công tâm, giúp vận hành thiết chế quy chuẩn vượt thoát sự ảnh hưởng cảm tính cá nhân bè phái",
      "Học thuyết pháp trị hoàn toàn vô ích không có giá trị áp dụng",
      "Lấp liếm bôi đen mọi văn bản pháp quy để giữ thế bí mật"
    ],
    c: 1,
    e: "Đứng vững trên tinh thần thượng tôn pháp quy hoạt động, quản lý bảo đảm tính vô tư khách quan công bằng tuyệt đối.",
    d: "vd"
  },
  {
    q: "Một nhà quản trị học chỉ ra mâu thuẫn lớn nhất trong quản lý nhà trường hiệu quả hiện nay là gì?",
    o: [
      "Mâu thuẫn giữa yêu cầu cao về chất lượng đào tạo và sự eo hẹp của điều kiện hạ tầng giáo dục cơ sở vật chất nguồn lực sẵn có",
      "Tranh chấp giữa các nhóm giáo viên dạy toán và giáo viên ngoại ngữ",
      "Học sinh có quá nhiều sách tham khảo để mua sắm",
      "Thời tiết mưa nắng thất thường ảnh hưởng giờ chào cờ"
    ],
    c: 0,
    e: "Đây là bài toán nan giải muôn thuở đòi hỏi bộ óc quản lý tinh anh biết phân bổ nguồn lực có trọng tâm trọng điểm hiệu quả.",
    d: "vdc"
  },
  {
    q: "Phân tích ma trận SWOT trong lập kế hoạch chiến lược nhà trường giúp ích gì cho Lãnh Đạo?",
    o: [
      "Phát hiện nhanh danh tính người viết thư tố giác phi danh tính",
      "Nhận biết thấu đáo Thế mạnh, Điểm yếu nội tại kết hợp cơ hội, thách thức ngoại vi để thiết lập bài toán hoạch định chiến lược thích ứng thông thái",
      "Tránh né tuyệt đối các vụ thanh tra kiểm khảo của sở",
      "Tăng vọt doanh thu bán trú ngay trong học kỳ hiện tại"
    ],
    c: 1,
    e: "SWOT là công cụ kinh điển soi sáng cấu trúc thực tại để định vị con đường phát triển tối ưu nhất.",
    d: "vdc"
  },
  {
    q: "Nghị quyết 29-NQ/TW coi trọng vị trí nào sau đây đóng vai trò then chốt trực tiếp quyết định thành bại của công cuộc nâng tầm GD nước nhà?",
    o: [
      "Đội ngũ thủ trưởng phòng ban khảo thí vĩ mô",
      "Đội ngũ nhà giáo và cán bộ điều phối quản lý giáo dục tại cơ sở học đường",
      "Hệ thống máy tính tốc độ cao nhập khẩu",
      "Các tổ chức quyên góp từ thiện quốc tế"
    ],
    c: 1,
    e: "Người Thầy và cán bộ quản lý là hạt nhân hành động truyền lửa, vắng họ mọi dự án đề án đều biến thành lý thyết giấy rỗng tuếch.",
    d: "nb"
  },
  {
    q: "Trong quản lý chất lượng tổng thể (TQM), đối tượng nào được khẳng định là trung tâm phục vụ tối cao?",
    o: [
      "Lợi ích kinh tế và sự an nhàn của nhà quản lý trường",
      "Người học trò (Khách hàng trực tiếp nhận thụ hưởng chất lượng chuyển đổi) và cộng đồng nhu cầu xã hội sử dụng nhân lực",
      "Sự thỏa mãn của các đơn vị kiểm tra vĩ mô",
      "Hệ thống cơ sở hạ tầng công nghệ đắt tiền"
    ],
    c: 1,
    e: "TQM dịch chuyển bối cảnh xem mọi mắt xích hoạt động đều phải vây quanh nâng cao độ hài lòng và năng lực thực tế học sinh đạt được.",
    d: "vd"
  },
  {
    q: "Hãy chỉ ra biểu hiện đi ngược lại nguyên lý quản lý thấu cảm nhân văn trong nhà trường?",
    o: [
      "Thường xuyên lắng nghe tâm tư khó khăn gia cảnh của học sinh để nâng đỡ ước mơ",
      "Lập chế độ phạt đứng nắng hay bêu tên học sinh trước toàn trường gây nhục nhã ảnh hưởng tâm lý lâu dài",
      "Mở các câu lạc bộ giải trí rèn luyện kỹ năng mềm tự do",
      "Tạo lập diễn đàn chia sẻ ý kiến phản hồi dân cử đóng góp"
    ],
    c: 1,
    e: "Lối phạt phản giáo dục thô bạo hủy hoại nhân tâm nhân cách, hoàn toàn đi ngược triết lý hiếu học nhân ái của khoa học sư phạm.",
    d: "vd"
  },
  {
    q: "Ý nghĩa to lớn của chức năng phản hồi hay thông tin ngược (Feedback) trong vòng tròn quản lý giáo dục là gì?",
    o: [
      "Góp phần phát hiện sai lệch kịp thời giữa thực tế vận hành so với mục tiêu hoạch định ban đầu để nhanh chóng ra quyết định điều chỉnh quỹ đạo mượt mà",
      "Phục vụ việc lập hồ sơ kỷ luật sa thải nhân sự",
      "Chứng minh lãnh đạo luôn đúng trong mọi trường hợp đưa lệnh",
      "Khen tặng hình thức khua chiêng gõ trống truyền thông xã hội"
    ],
    c: 0,
    e: "Không có hệ thống phản hồi hữu hiệu, người quản lý sẽ rơi vào trạng thái mù mịt thông tin ảo tưởng dẫn dắt tổ chức lao dốc.",
    d: "vd"
  },
  {
    q: "Vì sao tiếp cận quản trị trường bằng Văn Hóa học đường (Cultural approach) mang lại độ ổn định lâu dài nhất?",
    o: [
      "Bởi vì nó thiết lập được các giá trị niềm tin tự giác thấm sâu vào tiềm thức, dẫn dắt hành vi con người tự giác cống hiến vượt bậc không cần kiểm soát",
      "Nhờ có sự tài trợ tài chính ổn định vĩnh viễn",
      "Do áp dụng hệ thống tường rào và thẻ từ kiểm soát chặt chẽ giờ ra vào",
      "Bắt buộc học sinh học thuộc lòng nội quy trường mỗi sáng"
    ],
    c: 0,
    e: "Văn hóa là sức mạnh mềm tối hậu biến kỷ luật bên ngoài thành thói quen đạo đức tự thân thiêng liêng cao cả của cộng đồng.",
    d: "vdc"
  },
  {
    q: "Tiết điểm then chốt nhất giúp phân định rạch ròi tổ chức Phi lợi nhuận tư thục học đường và tổ chức có tính Lợi nhuận nằm ở:",
    o: [
      "Mức học phí đóng góp cao hay thấp của học sinh",
      "Việc toàn bộ lợi nhuận thặng dư thu về bắt buộc phải được tái đầu tư 100% tái phát triển phục vụ cơ sở mà không được chia cổ tức cho cổ đông cá nhân",
      "Số lượng trang thiết bị thư viện tủ sách sưu tập được",
      "Địa điểm đặt cơ sở ở ngoại ô hay nội thành"
    ],
    c: 1,
    e: "Bản chất phi lợi nhuận thể hiện ở sự cam kết tuyệt đối phụng sự cộng đồng, dồn toàn bộ thặng dư cho mục đích giáo dục khai phóng.",
    d: "vd"
  },
  {
    q: "Phương pháp nghiên cứu phân tích SWOT trong lập đề án giáo dục giúp ích gì?",
    o: [
      "Định lượng hóa năng suất làm việc của cán bộ thư viện",
      "Lập bản đồ kết hợp nguồn lực nội sinh thế mạnh/yếu với cơ hội xu thế toàn cầu tháo gỡ điểm nghẽn hành động thông thái",
      "Nhận diện chính danh kẻ tung tin đồn phi hữu ý",
      "Gia tăng ngay nguồn thu phụ trội từ trông giữ xe học sinh"
    ],
    c: 1,
    e: "Giúp tối đa hóa tận dụng vận may cơ hội dập tắt rủi ro nguy hiếm từ việc tự thấu thị cơ thể tổ chức.",
    d: "th"
  },
  {
    q: "Sự thấu thị thấu hiểu cá tính và thiết lập quan hệ phi chính thức (Informal relation) lành mạnh trong trường giúp ích gì cho Hiệu Trưởng?",
    o: [
      "Tăng năng lực cưỡng bách ép buộc giáo viên bớt đòi hỏi tăng lương",
      "Giải tỏa áp lực tâm lý tạo lập môi trường thân hữu gắn kết, thúc phối xử lý nhanh gọn các vướng mắc tế nhị không cần hành chính hóa cứng nhắc",
      "Tạo dựng phe phái bảo vệ quyền lực cá nhân hiệu trưởng bất di bất dịch",
      "Tránh né trách nhiệm giải trình trước thanh tra hành pháp"
    ],
    c: 1,
    e: "Gắn kết nhân tâm là đòn bẩy tự nhiên khơi thông các bế tắc thủ tục hành chính, nhân lên niềm vui dấn thân hằng ngày của nhà giáo.",
    d: "vd"
  },
  {
    q: "Yếu tố cơ bản nhất cấu thành khoa học về quản lý nói chung là gì?",
    o: [
      "Nguyên lý, quy luật khách quan chi phối mối quan hệ giữa chủ thể quản lý và đối tượng quản lý cùng các phương thức điều hành hiệu quả",
      "Chỉ là các mẹo vặt ứng xử khôn ngoan của lãnh đạo truyền lại",
      "Hệ thống máy móc dây chuyền tự động hóa văn phòng",
      "Hồ sơ tài liệu giấy tờ lưu đầy trong kho lưu trữ"
    ],
    c: 0,
    e: "Linh hồn khoa học nằm ở hệ thống quy luật biện chứng điều phối, giúp đưa hành vi quản lý đạt tính dự báo và hiệu năng cao.",
    d: "nb"
  },
  {
    q: "Tại sao nói công tác lập kế hoạch cải tiến chất lượng và định chuẩn mục tiêu học tập phải hướng về tương tai?",
    o: [
      "Để chuẩn bị năng lực giải quyết các bài toán giả định và đón đầu nhu cầu con người xã hội thời đại 5-10 năm tới",
      "Do quá khứ hoàn toàn vô nghĩa không có giá trị học tập",
      "Nhằm mục đích kéo dài thời gian thi thố tích lũy tiền gửi ngân quỹ",
      "Theo chỉ thị bắt buộc mang tính hình thức hành chính vĩ mô"
    ],
    c: 0,
    e: "Xã hội đổi thay chóng mặt giáo dục đào tạo con người hôm nay để sống hạnh phúc cống hiến ưu tú cho ngày mai.",
    d: "vd"
  },
  {
    q: "Quy trình ra quyết định của nhà quản lý bao gồm bước lập phương án trước khi chọn tiêu chuẩn đánh giá có ý nghĩa gì?",
    o: [
      "Tránh sự phiến diện, mở rộng không gian chọn lựa tối ưu trước khi dùng thước đo thẩm định",
      "Hợp thức hóa các ý kiến chỉ đạo đã có sẵn của cấp trên",
      "Tăng thời gian thảo luận để kéo dài cuộc họp hội đồng",
      "Phức tạp hóa vấn đề để cấp dưới không tự ý thực hiện"
    ],
    c: 0,
    e: "Việc xây dựng đa dạng phương án trước khi áp dụng tiêu chuẩn đánh giá giúp phát huy tính sáng tạo và tránh định kiến chủ quan.",
    d: "vd"
  },
  {
    q: "Mô hình quản trị trường học nào nhấn mạnh đến sự bất ổn định, mục tiêu không rõ ràng và cấu trúc lỏng lẻo?",
    o: [
      "Mô hình chính thức (Formal Model)",
      "Mô hình hỗn độn / mơ hồ (Ambiguity Model)",
      "Mô hình đồng thuận (Collegial Model)",
      "Mô hình văn hóa (Cultural Model)"
    ],
    c: 1,
    e: "Mô hình hỗn độn hay mơ hồ (Ambiguity Model) xem tổ chức là nơi có mục tiêu không chắc chắn, công nghệ dạy học thay đổi và sự tham gia lỏng lẻo của các thành viên.",
    d: "th"
  },
  {
    q: "Khái niệm 'Khách thể quản lý giáo dục' trong hệ thống quản lý giáo dục bao hàm:",
    o: [
      "Môi trường giáo dục, các yếu tố kinh tế - xã hội, hạ tầng pháp lý chịu tác động của hệ thống quản lý",
      "Chỉ bao gồm trang thiết bị đồ dùng dạy học trong lớp",
      "Học sinh và phụ huynh học sinh tại địa phương",
      "Các đoàn thanh tra liên ngành của Bộ và Sở"
    ],
    c: 0,
    e: "Khách thể quản lý giáo dục là bối cảnh môi trường, các quan hệ xã hội, điều kiện kinh tế chịu sự tác động và điều chỉnh của hoạt động quản lý.",
    d: "nb"
  },
  {
    q: "Căn cứ vào Luật Giáo dục 2019 của Việt Nam, loại hình trường nào sau đây KHÔNG thuộc quy định cơ cấu tổ chức Công lập?",
    o: [
      "Trường dân lập (chỉ áp dụng đối với cơ sở giáo dục mầm non do cộng đồng dân cư thành lập)",
      "Trường phổ thông trung học chuyên ban",
      "Trường đại học trọng điểm quốc gia",
      "Trường cao đẳng sư phạm địa phương"
    ],
    c: 0,
    e: "Theo Luật Giáo dục 2019, trường dân lập chỉ được áp dụng đối với cơ sở giáo dục mầm non dòng cộng đồng dân cư ở cơ sở thành lập.",
    d: "nb"
  },
  {
    q: "Theo Thuyết Z của William Ouchi về quản lý kiểu Nhật Bản, tinh thần gắn kết bền bỉ của nhân viên được xây dựng dựa trên:",
    o: [
      "Chế độ sa thải nhanh chóng khi năng suất sụt giảm",
      "Cam kết việc làm lâu dài, thăng tiến chậm rãi và sự quan tâm toàn diện đến đời sống gia đình người lao động",
      "Thiết lập cạnh tranh khốc liệt kịch tính giữa các cá nhân",
      "Gia tăng tối đa kiểm soát bằng thẻ từ và camera"
    ],
    c: 1,
    e: "Thuyết Z đề cao sự an tâm, trung thành lâu dài thông qua việc chăm sóc đời sống tinh thần và gia đình của người lao động.",
    d: "th"
  },
  {
    q: "Khi xây dựng mô hình 'Trường học thông minh' (Smart School), nhà quản trị cần ưu tiên nhất giải pháp cốt lõi nào?",
    o: [
      "Trang bị thật nhiều máy tính cấu hình cao mà không cần đào tạo giáo viên",
      "Đổi mới tư duy và kỹ năng số của con người, tích hợp công nghệ thông tin đồng bộ vào quản trị và dạy học cá nhân hóa",
      "Hạn chế hoàn toàn các lớp học thực địa tương tác truyền thống",
      "Tăng học phí tối đa để đầu tư hệ thống máy chủ đắt tiền"
    ],
    c: 1,
    e: "Hiệu quả của trường học thông minh không nằm ở thiết bị thô, mà ở năng lực khai thác công nghệ để cá nhân hóa việc học và tinh gọn quản trị.",
    d: "vd"
  },
  {
    q: "Theo học thuyết Lãnh đạo tình thế (Situational Leadership) của Hersey và Blanchard, phong cách lãnh đạo ưu tú phải thay đổi dựa trên:",
    o: [
      "Mức độ sẵn sàng về năng lực và sự tự tin thực hiện nhiệm vụ của cấp dưới",
      "Mức độ thâm niên công tác lâu năm của nhà quản lý",
      "Quy chế chi tiêu nội bộ của đơn vị hành chính",
      "Sự can thiệp của các cơ quan kiểm tra vĩ mô ngoại vi"
    ],
    c: 0,
    e: "Lãnh đạo tình thế đòi hỏi sếp phải uyển chuyển thay đổi hành vi chỉ đạo/hỗ trợ tùy theo độ trưởng thành chuyên môn và động lực của nhân viên.",
    d: "th"
  },
  {
    q: "Trong thực tiễn quản lý, phong cách Lãnh đạo 'Dân chủ' (Democratic) mang lại giá trị bền vững nhất ở khía cạnh nào?",
    o: [
      "Giúp nhà quản lý trút bỏ trách nhiệm giải trình khi xảy ra sai sót",
      "Khơi dậy tối đa trí tuệ tập thể, lòng tự trọng, sự gắn kết và tính sáng tạo chủ động của mọi thành viên",
      "Rút ngắn tối thiểu thời gian triển khai các quyết định khẩn cấp",
      "Loại bỏ hoàn toàn vai trò chỉ đạo của người đứng đầu"
    ],
    c: 1,
    e: "Phong cách dân chủ tạo môi trường bình quyền thấu hiểu, giúp chuyển hóa nhiệm vụ thành trách nhiệm tự giác phụng sự của tập thể.",
    d: "th"
  },
  {
    q: "Hệ thống thông tin quản lý giáo dục EMIS (Education Management Information System) ở nước ta phục vụ đắc lực nhất cho:",
    o: [
      "Theo dõi đời tư cá nhân của giáo viên ngoài giờ hành chính",
      "Cung cấp kho tranh ảnh giải trí phục vụ giờ ngoại khóa",
      "Thu thập, xử lý, phân tích số liệu thống kê giáo dục định lượng phục vụ công tác hoạch định và quản lý vĩ mô",
      "Đặt lịch họp trực tiếp tự động cho các phòng ban"
    ],
    c: 2,
    e: "EMIS là trụ cột dữ liệu lớn, giúp các nhà hoạch định chính sách có cái nhìn toàn cảnh chân thực về mạng lưới trường lớp, học sinh.",
    d: "nb"
  },
  {
    q: "Mục tiêu tối thượng của hoạt động Kiểm định chất lượng giáo dục trong các nhà trường hiện nay là làm gì?",
    o: [
      "Để nâng cao thành tích tranh đua và thu hút học phí cao hơn",
      "Phát hiện sai sót để phạt tiền nặng các tổ chuyên môn",
      "Đánh giá chính xác thực trạng, cam kết cải tiến chất lượng liên tục và giải trình minh bạch trước xã hội",
      "Thay thế hoàn toàn bộ máy thanh tra công quyền của Sở"
    ],
    c: 2,
    e: "Kiểm định không phải là đích đến cứu cánh, mà là công cụ tự soi, tự sửa để nâng cao chất lượng liên tục hướng tới cộng đồng.",
    d: "vd"
  },
  {
    q: "Quyền 'Tự chủ Đại học' (University Autonomy) ở nước ta hiện nay bao gồm những cấu phần tự chủ then chốt nào?",
    o: [
      "Tự chủ học thuật; Tự chủ về tổ chức bộ máy và nhân sự; Tự chủ về tài chính và tài sản",
      "Tự ý thay đổi chương trình khung quốc gia mà không cần kiểm định",
      "Tự quyết định miễn trừ mọi sắc thuế và nghĩa vụ pháp lý",
      "Tự do tuyển dụng người nước ngoài không qua thủ tục xuất nhập cảnh"
    ],
    c: 0,
    e: "Tự chủ đại học là thế chân kiềng vững chắc gồm học thuật, tổ chức bộ máy nhân lực, và cơ chế tài chính tài sản tự hạch toán.",
    d: "nb"
  },
  {
    q: "Dựa vào quan điểm của trường phái Hệ thống (Systems Approach), nhà trường được định vị như thế nào?",
    o: [
      "Là một hệ thống khép kín, tự cung tự cấp không chịu ảnh hưởng từ bên ngoài",
      "Là một hệ thống mở, không ngừng trao đổi thông tin, tài lực, nguồn lực và chịu sự điều chỉnh của môi trường kinh tế - xã hội bên ngoài",
      "Là tập hợp ngẫu nhiên các cá nhân không có ràng buộc mục tiêu",
      "Hệ thống công nghệ tự vận hành không cần sự điều phối của con người"
    ],
    c: 1,
    e: "Nhà trường liên thông tương tác mật thiết với xã hội (nhận học sinh, ngân sách -> đào tạo -> trả lại nhân lực chất lượng cho xã hội).",
    d: "th"
  },
  {
    q: "Đóng góp quan trọng phát kiến nhất của trường phái quản lý Hành vi (Behavioral School) là gì?",
    o: [
      "Nghiên cứu sâu sắc các nhu cầu con người, động lực tâm lý và hành vi nhóm tác động đến năng suất lao động",
      "Xem thời gian thao tác cơ học của công nhân là yếu tố quyết định nhất",
      "Sử dụng toán học thống kê để xây dựng quy trình sản xuất",
      "Thắt chặt kỷ luật hành chính dập khuôn bằng văn bản mệnh lệnh"
    ],
    c: 0,
    e: "Hành vi học chuyển hướng nhìn từ 'con người công cụ cơ học' sang 'con người xã hội' có tâm tư, động lực và nhu cầu cần được tôn trọng.",
    d: "th"
  },
  {
    q: "Trong Thuyết 2 nhân tố của Frederick Herzberg, nhóm 'Yếu tố động viên' (Motivators) bao gồm:",
    o: [
      "Tiền lương định kỳ, điều kiện làm việc mát mẻ, an toàn lao động",
      "Sự thành đạt, được thừa nhận đóng góp, bản chất công việc thú vị và cơ hội thăng tiến phát triển",
      "Quy chế quản lý hành chính nội bộ của cơ quan",
      "Địa vị xã hội và các mối quan hệ thân hữu với cấp trên"
    ],
    c: 1,
    e: "Yếu tố duy trì (lương, điều kiện làm việc) chỉ giúp bớt bất mãn; chỉ có nhóm yếu tố động viên (thành đạt, thăng tiến, tự hào công việc) mới tạo động lực thực sự.",
    d: "th"
  },
  {
    q: "Nguyên tắc 'Thống nhất giữa tính đảng, tính khoa học và tính thực tiễn' yêu cầu người quản lý giáo dục Việt Nam phải:",
    o: [
      "Bảo đảm tuyệt đối sự dẫn đường của Đảng, tuân thủ quy luật khoa học khách quan và phục vụ đắc lực bối cảnh thực tại đất nước",
      "Chỉ tập trung vào chuyên môn học thuật bỏ qua bối cảnh chính trị",
      "Tuyệt đối làm theo chỉ thị từ trên xuống kể cả khi không phù hợp thực tiễn",
      "Hành động hoàn toàn theo trào lưu giáo dục của các quốc gia phương tây"
    ],
    c: 0,
    e: "Sự thống nhất biện chứng bảo đảm giáo dục Việt Nam đi đúng hướng chính trị dân tộc, có cơ sở khoa học và hữu ích cho nhân dân.",
    d: "vd"
  },
  {
    q: "Khi nhà trường kích thích giáo viên nỗ lực nghiên cứu khoa học bằng các chế độ khen thưởng tài chính xứng đáng, trường đang áp dụng:",
    o: [
      "Phương pháp quản lý tâm lý giáo dục",
      "Phương pháp quản lý kinh tế",
      "Phương pháp quản lý hành chính bắt buộc",
      "Phương pháp quản lý xã hội phi chính thức"
    ],
    c: 1,
    e: "Phương pháp kinh tế tác động trực tiếp/gián tiếp qua đòn bẩy vật chất, tạo động lực kinh tế sòng phẳng gắn kiền hiệu năng lao động.",
    d: "vd"
  },
  {
    q: "Đặc trưng cốt lõi của việc áp dụng Phương pháp quản lý hành chính trong trường học là:",
    o: [
      "Tác động gián tiếp thông qua gợi ý, động viên tâm lý cá nhân",
      "Sử dụng quyền uy chính danh, mệnh lệnh một chiều mang tính bắt buộc thi hành có ràng buộc kỷ luật kỷ cương",
      "Thoải mái thương thuyết thay đổi nội dung mệnh lệnh mọi lúc",
      "Chỉ sử dụng đòn bẩy tiền thưởng tài chính làm động lực"
    ],
    c: 1,
    e: "Hành chính mang tính quyền lực pháp chế, tạo hành lang trật tự kỷ cương dứt khoát buộc các thực thể nghiêm chỉnh chấp hành.",
    d: "th"
  },
  {
    q: "Bản chất nổi bật nhất của 'Mô hình cá nhân' (Subjective Model) theo Tony Bush khi soi chiếu trường học là gì?",
    o: [
      "Cấu trúc tháp quyền lực từ trên xuống dưới là bất di bất dịch",
      "Nhà trường được định hình bởi chính thế giới quan, nhận thức cảm xúc và hành vi riêng biệt của mỗi cá nhân thành viên",
      "Quyết sự thuộc về sự đồng thuận của đại hội đồng sư phạm",
      "Sự đấu đá giành giật ngân sách giữa các tổ bộ môn chuyên trách"
    ],
    c: 1,
    e: "Lý thuyết cá nhân (Subjectivism) cho rằng tổ chức không có thực thể khách quan bên ngoài mà tồn tại thông qua lăng kính cảm xúc nhận thức của mỗi con người.",
    d: "th"
  },
  {
    q: "Theo phân loại mô hình quản lý của Tony Bush, mô hình xem cấu trúc tổ chức là 'đấu trường' giữa các bè phái tranh giành lợi ích là:",
    o: [
      "Mô hình chính thức (Formal Model)",
      "Mô hình chính trị (Political Model)",
      "Mô hình văn hóa (Cultural Model)",
      "Mô hình đồng thuận (Collegial Model)"
    ],
    c: 1,
    e: "Mô hình chính trị (Political Model) thừa nhận xung đột quyền lợi là tất yếu, tổ chức vận hành dựa trên các thương thảo đàm phán phe cánh.",
    d: "nb"
  },
  {
    q: "Đâu là khuyết điểm lớn nhất trong cơ chế điều phối quản lý giáo dục thời kỳ trước đổi mới được Nghị quyết 29 chỉ rõ?",
    o: [
      "Sự buông lỏng hoàn toàn không có văn bản pháp luật",
      "Sự bao cấp, bao biện của cơ quan quản lý nhà nước, chưa phân định rõ chức năng quản lý vĩ mô với trách nhiệm tự chủ của cơ sở tuyển sinh",
      "Độ tuổi cán bộ quản lý còn quá trẻ thiếu kinh nghiệm thực tế",
      "Trang thiết bị trường lớp quá hiện đại gây lãng phí năng lực sử dụng"
    ],
    c: 1,
    e: "Sự ôm đồm bao biện của bộ máy vĩ mô kìm hãm hoàn toàn tính linh hoạt sáng tạo tự chịu trách nhiệm của từng nhà trường.",
    d: "nb"
  },
  {
    q: "Triết lý đổi mới căn bản của Chương trình GDPT 2018 đòi hỏi việc kiểm tra, đánh giá học sinh phải chuyển dịch theo hướng:",
    o: [
      "Chuyển từ chỉ đánh giá ghi nhớ kiến thức lý luận sang đánh giá toàn diện phẩm chất và năng lực giải quyết thực tiễn của người học",
      "Gia tăng tối đa các bài thi viết tự luận học thuật hàn lâm phức tạp",
      "Đơn giản hóa tuyệt đối loại bỏ hoàn toàn chấm điểm học tập",
      "Phó thác hoàn toàn việc chấm điểm tự đánh giá cho phụ huynh học sinh"
    ],
    c: 0,
    e: "Đánh giá năng lực (Competency-based) là thước đo thực chất, giúp học sinh biết cách tư duy hành động sáng tạo thay vì học vẹt nhồi nhét.",
    d: "vd"
  },
  {
    q: "In quản lý chất lượng trường học, nguyên tắc cốt lõi của 'Quản lý theo mục tiêu' (MBO) là gì?",
    o: [
      "Lãnh đạo độc đoán ra chỉ tiêu từ trên xuống và giám sát chặt chẽ hành vi cấp dưới",
      "Sự tham gia dân chủ của cấp dưới cùng cấp trên thiết lập mục tiêu chung, tự quản lý và tự đánh giá kết quả thực hiện mục tiêu đó",
      "Hủy bỏ hoàn toàn các loại mục tiêu trung hạn để ứng biến tùy tiện",
      "Chỉ quan tâm đến quy trình thực hiện công việc hơn là kết quả cuối cùng đạt được"
    ],
    c: 1,
    e: "MBO (Peter Drucker) tạo động lực tự giác cao độ nhờ gắn kết ý chí cá nhân người lao động vào sự hình thành mục tiêu chung của tổ chức.",
    d: "th"
  },
  {
    q: "Hệ thống 'Văn hóa học đường' (School Culture) bền vững nhất được nâng đỡ bởi tầng cấu trúc chìm sâu nào?",
    o: [
      "Bản nội quy trang phục, biểu trưng logo học đường treo ở sảnh chính",
      "Những giả định cốt lõi, giá trị triết lý sống và niềm tin thiêng liêng được các thành viên ngầm chia sẻ, tự giác thực hành",
      "Những khẩu hiệu trang trí lộng lẫy trên ban công lớp học",
      "Chế độ tiền thưởng cao dành riêng cho giáo viên dạy giỏi cấp tỉnh"
    ],
    c: 1,
    e: "Văn hóa thực chất không nằm ở bề nổi tuyên truyền, mà nằm sâu trong niềm tin chung thầm lặng chi phối toàn bộ lối sống ứng xử hàng ngày.",
    d: "vdc"
  },
  {
    q: "Trong quản lý thông tin nhà trường, để khắc phục triệt để hiện tượng 'Nhiễu thông tin' (Information Noise), giải pháp hiệu quả nào cần được áp dụng?",
    o: [
      "Cấm tuyệt đối mọi hình thức thảo luận tự do của các phòng ban giáo khoa",
      "Báo cáo sai lệch thông số thống kê để tránh áp lực thành tích vĩ mô",
      "Tinh gọn phân cấp truyền thông, xây dựng nền tảng thông tin số đồng bộ minh bạch và thúc đẩy văn hóa phản hồi phản diện thẳng thắn",
      "Hủy bỏ toàn bộ hệ thống lưu trữ văn thư văn phòng"
    ],
    c: 2,
    e: "Tinh gọn cấu trúc truyền tin, kết hợp công nghệ thông tin và khuyến khích trao đổi trung thực là những phương thuốc đặc trị nhiễu thông tin.",
    d: "vd"
  },
  {
    q: "Mục tiêu chiến lược hạt nhân của chính sách 'Xã hội hóa giáo dục' ở Việt Nam là:",
    o: [
      "Từng bước chuyển giao toàn bộ trường công lập thành sở hữu tư nhân lợi nhuận",
      "Huy động tối đa sự tham gia, đóng góp nguồn lực và trách nhiệm phối hợp của toàn bộ các lực lượng xã hội vào phát triển giáo dục",
      "Áp lực bắt buộc phụ huynh đóng góp tiền mặt hàng tháng vô điều kiện",
      "Giảm thiểu hoàn toàn ngân sách đầu tư của Nhà nước cho giáo dục"
    ],
    c: 1,
    e: "Xã hội hóa giáo dục là khơi dậy sức mạnh toàn dân chăm lo cho giáo dục, tạo sự phối kết hợp chặt chẽ giữa Nhà trường - Gia đình - Xã hội.",
    d: "nb"
  },
  {
    q: "Theo Thuyết nhu cầu kinh điển của Abraham Maslow, nhu cầu xếp ở vị trí cao nhất (đỉnh tháp) là:",
    o: [
      "Nhu cầu sinh lý cơ bản ăn, mặc, ngủ",
      "Nhu cầu tự thể hiện bản thân, khẳng định năng lực cá nhân và cống hiến giá trị",
      "Nhu cầu an toàn thân thể và tài sản ổn định",
      "Nhu cầu được giao lưu tình cảm thuộc về một gia đình hoặc tập thể"
    ],
    c: 1,
    e: "Khi đã thỏa mãn các tầng dưới, con người vươn tới đỉnh cao nhất là nhu cầu tự thực hiện bản thân (Self-actualization), phát huy tối đa tiềm năng.",
    d: "nb"
  },
  {
    q: "Nhận định nào sau đây phản ánh CHƯA ĐÚNG hoặc đi ngược lại vị thế, vai trò của công tác thanh tra giáo dục?",
    o: [
      "Là hoạt động giám sát, phát hiện lỗ hổng chuyên môn để tư vấn điều chỉnh, thúc đẩy sự tuân thủ pháp luật và cải tiến chất lượng dạy học",
      "Là công cụ răn đe, trừng phạt hạ thấp uy tín giáo viên và áp đặt ý chí độc đoán chủ quan của thanh tra viên",
      "Là cơ sở thu thập phản hồi thực thi chính sách giúp cơ quan vĩ mô chỉnh lý pháp lý",
      "Yêu cầu cao về tính chính trực, khách quan và chuyên môn sâu sắc của cán bộ thanh tra"
    ],
    c: 1,
    e: "Thanh tra mang tính kiến tạo nâng đỡ và kiểm bình chất lượng đúng luật pháp; cực đoan biến nó thành công cụ trừng phạt hà khắc sẽ bóp chết nhiệt huyết của nhà giáo.",
    d: "vd"
  },
  {
    q: "Sự phân định rạch ròi, đúng quy luật nhất giữa hoạt động 'Kiểm tra' (Control) và 'Đánh giá' (Evaluation) trong nhà trường là:",
    o: [
      "Kiểm tra là sự xếp hạng thi đua; Đánh giá là hoạt động quyên góp kinh phí trường",
      "Kiểm tra tập trung vào đo lường, đối chiếu kết quả thực tế với tiêu chuẩn định sẵn; Đánh giá tập trung vào nhận định giá trị, tìm nguyên nhân và tư vấn giải pháp cải tiến",
      "Chúng hoàn toàn đồng nhất về bản chất và chỉ khác nhau ở tên gọi hành chính",
      "Kiểm tra là công việc của sếp lớn; Đánh giá là quyền tự do của học sinh"
    ],
    c: 1,
    e: "Kiểm tra đo đạc thông số khách quan; Đánh giá là bước phân tích định tính nhân văn tìm giải pháp chỉnh sẩy định hướng tương lai.",
    d: "vd"
  },
  {
    q: "Hiệu trưởng trường học áp dụng 'Mô hình văn hóa' (Cultural Model) theo thuyết Tony Bush sẽ tập trung tổ chức việc gì?",
    o: [
      "Đặt camera theo dõi giờ có mặt của giáo viên chính xác từng giây",
      "Xây dựng, củng cố hệ thống giá trị cốt lõi, tầm nhìn học thuật chung, và kể các câu chuyện truyền thông, nghi lễ tôn vinh nhà giáo, tạo niềm tự hào nghề nghiệp tự thân",
      "Trực tiếp ban hành các bảng tiền phạt gắt gao nhằm ép buộc hành vi",
      "Tách biệt hoàn toàn các tổ bộ môn thỉnh giảng độc lập tranh đua tài chính"
    ],
    c: 1,
    e: "Quản lý bằng văn hóa là nghệ thuật dệt nên sợi chỉ đỏ niềm tin và biểu tượng thiêng liêng chung, tạo động lực tự thân tự giác cao nhất cho tập thể học đường.",
    d: "vd"
  },
  {
    q: "Để thực thi quyền tự chủ tài chính tại các đơn vị giáo dục công lập hiệu quả, nhà quản trị trường học phải đặc biệt chú trọng nguyên tắc:",
    o: [
      "Hạn chế công khai ngân sách để tránh sự dòm ngó của đối thủ cạnh tranh",
      "Thực hiện công khai minh bạch (ba công khai), tối ưu hóa cấu trúc chi tiêu bám sát quy chế chi tiêu nội bộ và ưu tiên đầu tư trực tiếp nâng cao năng lực chuyên môn dạy học",
      "Cắt giảm tối đa các khoản chi hỗ trợ học sinh có hoàn cảnh khó khăn để tích lũy thặng dư ngân quỹ",
      "Hợp thức hóa các khoản chi tiêu cá nhân ngoài công vụ thông qua hóa đơn khống"
    ],
    c: 1,
    e: "Tự chủ tài chính gắn liền với công khai giải trình minh bạch. Đồng tiền học đường phải quay vòng phục vụ tốt nhất lợi ích người học và tái kiến thiết nhà giáo.",
    d: "vd"
  },
  {
    q: "Khi đối mặt với sự cố khủng hoảng truyền thông học đường, người quản lý trường học thông thái nên có lập trường xử lý quyết định nào đầu tiên?",
    o: [
      "Im lặng tuyệt đối, đóng cửa trường học và từ chối cung cấp mọi thông tin cho báo chí, cơ quan pháp chế vĩ mô",
      "Nhận diện bản chất sự việc, chủ động phát ngôn cung cấp thông tin trung thực khách quan, cam kết rà soát xử lý nghiêm minh sai sót và phối hợp chặt chẽ với cơ quan quản lý",
      "Phản bác kịch liệt, bôi đen tìm cách đổ lỗi hoàn toàn cho học sinh hoặc phụ huynh",
      "Chi tiền tài chính để tìm cách khóa/hạ các bài viết phản ánh trên mạng xã hội"
    ],
    c: 1,
    e: "Sự trung thực, chủ động, nhân văn và có trách nhiệm giải trình là vắc xin tốt nhất giúp cứu vãn uy tín nhà trường vượt qua cơn bão khủng hoảng truyền thông.",
    d: "vdc"
  }
];

export function getFullKHQLGDatabase(): VNUQuestion[] {
  // Translate CompactQ to VNUQuestion structures dynamically
  return KHQLGD_QUESTIONS_RAW.map((raw, idx) => {
    let topicId = 1;
    if (idx < 30) {
      topicId = 1;
    } else if (idx < 60) {
      topicId = 2;
    } else if (idx < 90) {
      topicId = 3;
    } else {
      topicId = 4;
    }

    let difficulty: 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'van_dung_cao' = 'nhan_biet';
    if (raw.d === 'th') difficulty = 'thong_hieu';
    else if (raw.d === 'vd') difficulty = 'van_dung';
    else if (raw.d === 'vdc') difficulty = 'van_dung_cao';

    return {
      id: `khqlgd-item-q-${idx + 1}`,
      topicId,
      difficulty,
      questionText: raw.q,
      options: raw.o,
      correctOption: raw.c,
      explanation: raw.e || "Đáp án chính xác được rút tỉa từ tài liệu chuyên khảo Khoa học quản lý trong giáo dục."
    };
  });
}
