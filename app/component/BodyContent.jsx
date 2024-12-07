import React from "react";
import { Calendar, ChevronRight, Play } from "lucide-react";
import TextToImageGenerator from "./TextToVideoAI";
import ChatApp from "./Chatbot";

const TimelineEvent = ({ year, title, content, significance, media }) => (
  <div className="flex gap-6 mb-12">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white">
        <Calendar size={24} />
      </div>
      <div className="w-1 flex-1 bg-red-200"></div>
    </div>
    <div className="flex-1">
      <div className="text-lg font-bold text-red-600">{year}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {media && (
        <div className="mb-4 rounded-lg overflow-hidden">
          {media.type === "video" ? (
            <div className="relative">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${media.url}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          ) : (
            <img
              src={media.url}
              alt={title}
              className="w-full h-64 object-cover"
            />
          )}
        </div>
      )}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="prose max-w-none">{content}</div>
      </div>
      {significance && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-bold mb-3">Ý nghĩa:</h4>
          <ul className="space-y-2">
            {significance.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="mt-1 flex-shrink-0 text-red-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

const BodyContent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-black h-[60vh]">
        <img
          src="https://vnanet.vn/Data/Articles/2020/02/03/4428190/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_xay_dung_va_bao_ve_chinh_quyen_cach_mang_khang_chien_chong_thuc_dan_phap_thang_loi_1945_-_1954_stand.jpg"
          alt="Kháng chiến chống Pháp"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Đảng lãnh đạo cuộc kháng chiến chống thực dân Pháp
          </h1>
          <p className="text-xl md:text-2xl">1951 - 1954</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Bối cảnh */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Bối cảnh lịch sử</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-1 text-red-600" />
                <span>
                  Từ năm 1951, cuộc kháng chiến chống thực dân Pháp bước vào
                  giai đoạn mới với nhiều thử thách và cơ hội.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-1 text-red-600" />
                <span>
                  Cuộc chiến ngày càng ác liệt, Pháp tăng cường quân sự, Mỹ bắt
                  đầu can thiệp mạnh mẽ vào cuộc chiến.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <TimelineEvent
          year="1951"
          title="Đại hội Đảng lần thứ II"
          media={{
            type: "image",
            url: "https://tuyenquang.dcs.vn/Image/Large/2021115171721_10682.jpg",
          }}
          content={
            <div>
              <p>
                Tổ chức tại Tuyên Quang, Đại hội đã đạt được những quyết định
                quan trọng:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Khẳng định rõ đường lối kháng chiến của Đảng</li>
                <li>Quyết định đổi tên Đảng thành Đảng Lao động Việt Nam</li>
                <li>Thông qua Chính cương Đảng, sách lược vắn tắt</li>
                <li>Xác định mục tiêu chiến đấu rõ ràng</li>
              </ul>
            </div>
          }
          significance={[
            "Khẳng định vai trò lãnh đạo của Đảng trong kháng chiến",
            "Thống nhất đường lối đấu tranh cách mạng",
            "Nâng cao uy tín của Đảng trên trường quốc tế",
            "Tạo cơ sở chính trị vững chắc cho cuộc kháng chiến",
          ]}
        />

        <TimelineEvent
          year="1950"
          title="Chiến dịch Biên giới"
          media={{
            type: "image",
            url: "https://img.loigiaihay.com/picture/2020/0514/bac-ho-tham-mot-don-vi-tham-gia-chien-dich-bien-gioi-thu-dong-1950.jpg",
          }}
          content={
            <div>
              <p>
                Chiến dịch diễn ra từ tháng 9 đến tháng 10 năm 1950 với các mục
                tiêu chiến lược:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Tiêu diệt một phần sinh lực địch</li>
                <li>Giải phóng vùng biên giới quan trọng</li>
                <li>Khai thông đường liên lạc quốc tế</li>
              </ul>
            </div>
          }
          significance={[
            "Quân sự: Tiêu diệt và làm tan rã một số lớn sinh lực địch, mở rộng vùng giải phóng từ biên giới Việt-Trung xuống đồng bằng Bắc Bộ",
            "Chiến lược: Mở thông tuyến đường liên lạc quốc tế với Trung Quốc và Liên Xô, tạo điều kiện thuận lợi cho việc tiếp nhận viện trợ",
            "Chính trị: Nâng cao vị thế và uy tín của Việt Nam trên trường quốc tế",
            "Là chiến dịch lớn đầu tiên và là bước ngoặt quan trọng trong cuộc kháng chiến",
          ]}
        />

        <TimelineEvent
          year="1951-1952"
          title="Chiến dịch Hòa Bình"
          media={{
            type: "image",
            url: "https://i.ytimg.com/vi/ufde4mvqU58/maxresdefault.jpg",
          }}
          content={
            <div>
              <p>
                Chiến dịch được tiến hành từ tháng 12/1951 đến tháng 2/1952
                nhằm:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Mở rộng vùng giải phóng</li>
                <li>Tiêu diệt sinh lực địch tại khu vực Hòa Bình</li>
                <li>
                  Đẩy mạnh chiến lược đánh tiêu hao và phân tán lực lượng địch
                </li>
              </ul>
            </div>
          }
          significance={[
            "Quân sự: Làm suy yếu lực lượng cơ động chiến lược của địch",
            "Chiến lược: Phá vỡ kế hoạch của Pháp về tuyến phòng thủ Hòa Bình",
            "Đảm bảo sự liên lạc và tiếp viện giữa các khu vực chiến lược",
            "Tinh thần: Củng cố niềm tin của quân và dân ta vào khả năng chiến thắng",
          ]}
        />

        <TimelineEvent
          year="1953-1954"
          title="Chiến dịch Đông Xuân"
          media={{
            type: "image",
            url: "https://hungyen.dcs.vn/ckfinder/userfiles/files/1(579).jpg",
          }}
          content={
            <div>
              <p className="font-bold mb-2">Chiến dịch Đông Xuân 1953-1954:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mở đầu bằng chiến dịch Thượng Lào (12/1953 - 1/1954)</li>
                <li>
                  Tiếp theo là chiến dịch Tây Bắc - Điện Biên Phủ (1-5/1954)
                </li>
                <li>
                  Song song là chiến dịch Trung Lào và chiến dịch đường số 9 -
                  Khe Sanh
                </li>
                <li>
                  Tổng hợp các hoạt động quân sự trên toàn chiến trường Đông
                  Dương
                </li>
              </ul>
            </div>
          }
          significance={[
            "Quân sự: Phân tán và tiêu diệt lực lượng địch trên nhiều mặt trận",
            "Chiến lược: Phá vỡ kế hoạch Nava của Pháp ngay từ bước đầu",
            "Tạo thế và lực cho chiến dịch Điện Biên Phủ",
            "Mở rộng vùng giải phóng ở Tây Bắc và Thượng Lào",
          ]}
        />

        <TimelineEvent
          year="1954"
          title="Chiến dịch Điện Biên Phủ"
          media={{
            type: "video",
            url: "_PP8KGoDX9k",
          }}
          content={
            <div>
              <p className="font-bold mb-2">
                Chiến dịch lịch sử Điện Biên Phủ (13/3 - 7/5/1954):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Là đỉnh cao của chiến dịch Đông Xuân 1953-1954</li>
                <li>56 ngày đêm chiến đấu anh dũng</li>
                <li>Tiêu diệt toàn bộ tập đoàn cứ điểm mạnh nhất của Pháp</li>
                <li>Đánh bại hoàn toàn kế hoạch Nava</li>
                <li>Tạo bước ngoặt quyết định kết thúc cuộc kháng chiến</li>
              </ul>
            </div>
          }
          significance={[
            "Quân sự: Tiêu diệt và bắt sống toàn bộ lực lượng tinh nhuệ của Pháp tại Điện Biên Phủ",
            "Chiến lược: Làm phá sản hoàn toàn kế hoạch Nava và buộc Pháp phải ký Hiệp định Genève",
            "Chính trị: Đánh dấu thắng lợi của cuộc kháng chiến chống thực dân Pháp",
            "Quốc tế: Tác động mạnh mẽ đến phong trào giải phóng dân tộc thế giới",
          ]}
        />

        {/* Phần kết luận cập nhật */}
        <div className="bg-red-50 rounded-lg p-6 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Thắng lợi và ý nghĩa lịch sử
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ChevronRight className="mt-1 text-red-600" />
              <span>
                Chiến thắng Điện Biên Phủ và thắng lợi của chiến dịch Đông Xuân
                1953-1954 đã buộc Pháp phải ký Hiệp định Genève, chấm dứt chiến
                tranh ở Đông Dương.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="mt-1 text-red-600" />
              <span>
                Hiệp định Genève (1954) công nhận độc lập, chủ quyền, thống nhất
                và toàn vẹn lãnh thổ của ba nước Đông Dương.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="mt-1 text-red-600" />
              <span>
                Miền Bắc được hoàn toàn giải phóng, tạo cơ sở vững chắc cho cuộc
                đấu tranh thống nhất nước nhà.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="mt-1 text-red-600" />
              <span>
                Thắng lợi là kết quả của đường lối đúng đắn của Đảng, sự lãnh
                đạo tài tình của Chủ tịch Hồ Chí Minh và sức mạnh đại đoàn kết
                toàn dân tộc.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12 mb-12">
          <h2 className="text-3xl font-bold mb-6">Hỏi đáp với AI</h2>
          <ChatApp />
        </div>

        {/* AI */}
        <TextToImageGenerator />
      </div>
    </div>
  );
};

export default BodyContent;
