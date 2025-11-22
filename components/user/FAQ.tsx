"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Title from "../ui/Title";

const faqs = [
  {
    question: "Thủ tục pháp lý có đầy đủ không?",
    answer:
      "Dự án đã hoàn thiện đầy đủ thủ tục pháp lý: Giấy phép xây dựng, Giấy chứng nhận đầu tư, Giấy chứng nhận quyền sử dụng đất. Khách hàng hoàn toàn yên tâm về tính pháp lý của dự án.",
  },
  {
    question: "Phương thức thanh toán như thế nào?",
    answer:
      "Chúng tôi hỗ trợ nhiều phương thức thanh toán linh hoạt: Thanh toán trực tiếp 100%, Thanh toán trả góp theo tiến độ xây dựng, Hỗ trợ vay vốn ngân hàng với lãi suất ưu đãi lên đến 70% giá trị căn hộ.",
  },
  {
    question: "Khi nào được bàn giao nhà?",
    answer:
      "Dự án cam kết bàn giao nhà theo đúng tiến độ đã công bố. Thời gian dự kiến hoàn thành và bàn giao là T12/2024. Nếu chậm tiến độ, chúng tôi sẽ bồi thường theo hợp đồng.",
  },
  {
    question: "Có hỗ trợ vay vốn ngân hàng không?",
    answer:
      "Có, chúng tôi hợp tác với các ngân hàng uy tín như Vietcombank, VietinBank, BIDV để hỗ trợ khách hàng vay vốn với lãi suất ưu đãi, thời hạn vay lên đến 25 năm.",
  },
  {
    question: "Có những tiện ích gì trong dự án?",
    answer:
      "Dự án được trang bị đầy đủ tiện ích cao cấp: Hồ bơi, Gym, Spa, Khu vui chơi trẻ em, Trung tâm thương mại, Hệ thống an ninh 24/7, Parking thông minh, Khu BBQ ngoài trời.",
  },
  {
    question: "Chính sách bảo hành như thế nào?",
    answer:
      "Chúng tôi cam kết bảo hành công trình trong 24 tháng kể từ ngày bàn giao. Bảo hành các hạng mục: Kết cấu, Điện nước, Thiết bị cơ điện, Hoàn thiện nội thất cơ bản.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white hide">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title title="Câu hỏi thường gặp" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tìm hiểu những thông tin quan trọng về dự án và quy trình mua nhà
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover: transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
