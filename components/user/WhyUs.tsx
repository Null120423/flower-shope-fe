import {
  Building,
  Clock,
  CreditCard,
  Headphones,
  MapPin,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Uy tín cá nhân",
    description:
      "Là freelancer chuyên nghiệp, tôi cam kết bảo mật thông tin và làm việc minh bạch.",
  },
  {
    icon: CreditCard,
    title: "Chi phí tối ưu",
    description:
      "Không qua trung gian, bạn nhận được dịch vụ chất lượng với mức giá cạnh tranh.",
  },
  {
    icon: Clock,
    title: "Phản hồi nhanh chóng",
    description: "Luôn sẵn sàng tư vấn, hỗ trợ và cập nhật tiến độ kịp thời.",
  },
  {
    icon: MapPin,
    title: "Am hiểu thị trường",
    description:
      "Có kinh nghiệm thực chiến trong lĩnh vực bất động sản, nắm bắt xu hướng và nhu cầu khách hàng.",
  },
  {
    icon: Building,
    title: "Giải pháp linh hoạt",
    description:
      "Tư vấn và triển khai các chiến lược SALE phù hợp với từng dự án, từng ngân sách.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ tận tâm",
    description:
      "Đồng hành cùng bạn từ lúc bắt đầu đến khi chốt giao dịch thành công.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tại sao chọn dịch vụ SALE của tôi?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Với 5+ năm kinh nghiệm SALE bất động sản, tôi đã giúp 100+ dự án
            tăng doanh số
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 gradient rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
