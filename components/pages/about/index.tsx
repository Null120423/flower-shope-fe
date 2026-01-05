"use client";
import WrapperView from "@/app/warpper-view";
import { ROUTES } from "@/routes/routes";
import {
    Clock,
    Flower2,
    Heart,
    Leaf,
    Sparkles,
    Star,
    Truck,
    Zap
} from "lucide-react";


function AboutView() {
  const timelineEvents = [
    {
      year: "2020",
      title: "Khởi đầu từ đam mê",
      description:
        "Tất cả bắt đầu từ một niềm yêu thích hoa cỏ và thiên nhiên. Chúng tôi bắt đầu bảo quản những bông hoa tươi, tìm cách giữ lại vẻ đẹp vĩnh viễn.",
      icon: Heart,
      color: "from-pink-500 to-red-500",
    },
    {
      year: "2021",
      title: "Học tập & sáng tạo",
      description:
        "Năm này, chúng tôi nỗ lực học hỏi các kỹ thuật bảo quản hoa khô, tìm ra công thức đặc biệt để giữ màu sắc và hương thơm tự nhiên.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022",
      title: "Ra mắt sản phẩm đầu tiên",
      description:
        "Những bó hoa khô tuyệt đẹp đầu tiên ra đời. Mỗi sản phẩm là tác phẩm nghệ thuật, được thiết kế tỉ mỉ từng chi tiết để mang đến sự sang trọng.",
      icon: Flower2,
      color: "from-green-500 to-teal-500",
    },
    {
      year: "2023",
      title: "Mở rộng bộ sưu tập",
      description:
        "Chúng tôi bắt đầu tạo những trang trí độc đáo: vòng hoa, khung tranh hoa khô, và những bình cắm nghệ thuật tuyệt vời cho các không gian gia đình.",
      icon: Leaf,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2024",
      title: "Cộng đồng & tin tưởng",
      description:
        "Hàng ngàn khách hàng đã tin tưởng và yêu thích những sản phẩm của chúng tôi. Từ quà tặng đặc biệt đến trang trí nội thất, chúng tôi là lựa chọn yêu thích.",
      icon: Star,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2025",
      title: "Hành trình tiếp tục",
      description:
        "Với nỗ lực liên tục, chúng tôi mang đến những thiết kế mới lạ, những sáng tạo độc đáo, và tiếp tục là nguồn cảm hứng cho tất cả mọi người.",
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const reviews = [
    {
      name: "Nguyễn Minh Anh",
      title: "Khách hàng VIP",
      avatar: "MA",
      rating: 5,
      review: "Sản phẩm tuyệt vời, giao hàng nhanh. Mình đã mua nhiều lần và chắc chắn sẽ tiếp tục ủng hộ!",
      color: "from-pink-400 to-rose-400",
    },
    {
      name: "Trần Thế Hùng",
      title: "Nhà thiết kế nội thất",
      avatar: "TH",
      rating: 5,
      review: "Tôi sử dụng sản phẩm từ shop để trang trí các dự án của khách. Chất lượng tuyệt vời, luôn hài lòng!",
      color: "from-teal-400 to-cyan-400",
    },
    {
      name: "Phạm Thị Linh",
      title: "Nhà sáng tạo nội thất",
      avatar: "PL",
      rating: 5,
      review: "Yêu thích cách thiết kế của shop. Mỗi bó hoa đều là một tác phẩm nghệ thuật. Xin cảm ơn!",
      color: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <WrapperView
      routes={[
        { href: ROUTES.PUBLIC_ROUTES.HOME, label: "Trang chủ" },
        { href: "#", label: "Về chúng tôi" },
      ]}
    >
      {/* Header Section */}
      <div className="relative py-16 mb-20 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Câu chuyện của chúng tôi
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Từ những bông hoa tươi đến những tác phẩm hoa khô bất hủ, chúng tôi
              mang đến vẻ đẹp vĩnh viễn vào cuộc sống của bạn.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Flower2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-primary mb-2 text-lg">Hoa Khô Cao Cấp</h3>
            <p className="text-gray-600 text-sm">
              Mỗi bông hoa được chọn lọc kỹ lưỡng và bảo quản bằng công thức
              riêng để giữ lại vẻ đẹp tự nhiên.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-primary mb-2 text-lg">Trang Trí Độc Đáo</h3>
            <p className="text-gray-600 text-sm">
              Từ vòng hoa, khung tranh đến bình cắm nghệ thuật - chúng tôi
              thiết kế theo từng ý tưởng của bạn.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-primary mb-2 text-lg">Sáng Tạo Chân Thành</h3>
            <p className="text-gray-600 text-sm">
              Mỗi sản phẩm được tạo ra với tình yêu, tâm huyết và sự sáng tạo
              không ngừng.
            </p>
          </div>
        </div>
      </div>

      {/* Delivery & Benefits Section */}
      <div className="container mx-auto px-6 mb-32">
        <h2 className="text-4xl font-bold text-center text-primary mb-20">
          Tại sao chọn chúng tôi
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Benefits */}
          <div className="space-y-8">
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-xl">Giao hàng nhanh</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Chúng tôi cam kết giao hàng trong vòng 24-48 giờ tại các khu vực chính.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-teal-200 to-transparent"></div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-xl">Miễn phí vận chuyển</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Miễn phí giao hàng cho đơn hàng trên 500.000 VNĐ trong nội thành.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-teal-200 to-transparent"></div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-xl">100% Hài lòng</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Nếu không hài lòng, chúng tôi sẽ hoàn tiền hoặc thay thế sản phẩm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Decorative Frame */}
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-rose-100 rounded-[80px] overflow-hidden shadow-xl border-8 border-white">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-6 animate-bounce">🌸</div>
                  <p className="text-gray-700 font-semibold text-lg">Bộ sưu tập hoa khô</p>
                  <p className="text-gray-500 text-sm mt-2">được tạo ra với tâm huyết</p>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-teal-200 rounded-full opacity-30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Hành trình phát triển
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-teal-300 to-purple-300"></div>

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div key={event.year} className="relative">
                  {/* Mobile & Tablet Layout */}
                  <div className="lg:hidden">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg z-20 relative`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                          <span className="inline-block text-sm font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 px-3 py-1 rounded-full mb-2">
                            {event.year}
                          </span>
                          <h3 className="text-xl font-bold text-primary mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:flex gap-8 items-center">
                    {isLeft ? (
                      <>
                        <div className="w-5/12 text-right">
                          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <span className="inline-block text-sm font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 px-3 py-1 rounded-full mb-2">
                              {event.year}
                            </span>
                            <h3 className="text-xl font-bold text-primary mb-2">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                        <div className="w-2/12 flex justify-center">
                          <div
                            className={`w-14 h-14 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg z-20 relative`}
                          >
                            <IconComponent className="w-7 h-7" />
                          </div>
                        </div>
                        <div className="w-5/12"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-5/12"></div>
                        <div className="w-2/12 flex justify-center">
                          <div
                            className={`w-14 h-14 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg z-20 relative`}
                          >
                            <IconComponent className="w-7 h-7" />
                          </div>
                        </div>
                        <div className="w-5/12">
                          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <span className="inline-block text-sm font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 px-3 py-1 rounded-full mb-2">
                              {event.year}
                            </span>
                            <h3 className="text-xl font-bold text-primary mb-2">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-6 mb-32">
        <h2 className="text-4xl font-bold text-center text-primary mb-20">
          Khách hàng nói gì về chúng tôi
        </h2>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>

          <div className="space-y-10 relative z-10">
            {reviews.map((review, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`flex ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-start gap-6 lg:gap-8`}>
                  {/* Avatar & Info */}
                  <div className="flex flex-col items-center gap-3 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center shadow-lg border-4 border-white`}>
                      <span className="text-white font-bold text-lg">{review.avatar}</span>
                    </div>
                    <div className={`text-center ${isLeft ? "lg:text-left" : "lg:text-right"}`}>
                      <h4 className="font-bold text-primary text-sm">{review.name}</h4>
                      <p className="text-gray-500 text-xs">{review.title}</p>
                    </div>
                  </div>

                  {/* Review Card */}
                  <div className={`bg-gradient-to-br ${review.color} rounded-3xl px-7 py-6 shadow-lg hover:shadow-xl transition-shadow flex-1`}>
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-300 fill-yellow-300"
                        />
                      ))}
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      "{review.review}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-r from-teal-50 to-pink-50 py-16 rounded-3xl mb-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Giá trị cốt lõi của chúng tôi
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-5xl mb-3">✨</div>
              <h4 className="font-bold text-primary mb-2">Chất lượng</h4>
              <p className="text-sm text-gray-600">
                Mỗi sản phẩm là lựa chọn tốt nhất, không tiết hiệp.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-5xl mb-3">🎨</div>
              <h4 className="font-bold text-primary mb-2">Sáng tạo</h4>
              <p className="text-sm text-gray-600">
                Thiết kế độc đáo, theo từng yêu cầu riêng.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-5xl mb-3">💚</div>
              <h4 className="font-bold text-primary mb-2">Tâm huyết</h4>
              <p className="text-sm text-gray-600">
                Làm việc với tình yêu, từng chi tiết đều quan tâm.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-5xl mb-3">🌿</div>
              <h4 className="font-bold text-primary mb-2">Bền vững</h4>
              <p className="text-sm text-gray-600">
                Tôn trọng thiên nhiên, sử dụng vật liệu thân thiện.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Hãy trở thành một phần của gia đình chúng tôi
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Khám phá bộ sưu tập hoa khô độc đáo của chúng tôi và tìm thấy sự
          cảm hứng cho không gian của bạn.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={ROUTES.PUBLIC_ROUTES.SHOPPING}
            className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-lg"
          >
            Xem sản phẩm
          </a>
          <a
            href={ROUTES.PUBLIC_ROUTES.HOME}
            className="px-8 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
          >
            Về trang chủ
          </a>
        </div>
      </div>
    </WrapperView>
  );
}

export default AboutView;
