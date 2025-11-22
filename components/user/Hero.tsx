import { ArrowDown, MessageCircle, Phone } from "lucide-react";
import TransitionLink from "../ui/TransitionLink";

interface PropertyCard {
  image?: string;
}

interface HeroProps {
  featuredProperty?: PropertyCard | null;
}

export default function Hero({ featuredProperty }: HeroProps) {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(/hero-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* bg is image s */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40"></div>

      <div className="relative z-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div
          className={`flex pt-32 gap-2 lg:gap-12 items-center min-h-[80vh] flex-col ${
            featuredProperty?.image ? "lg:flex-row" : ""
          }`}
        >
          {/* Left Content */}
          <div className="text-left  mb-10 space-y-2 lg:space-y-4 flex flex-col justify-center items-center lg:items-start w-full lg:w-1/3">
            {/* Main Headline */}
            <div className="space-y-2 w-full text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl text-primary-500 font-extrabold leading-tight">
                Giúp khách hàng
              </h2>
            </div>
            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-white/90 max-w-md w-full text-center lg:text-left">
              Mua bán nhanh, Giá đúng theo thị trường
            </p>
            {/* Contact Info */}
            <div className="space-y-2 w-full text-center lg:text-left">
              <p className="text-lg lg:text-xl text-white font-semibold">
                Hãy gọi / nhắn Zalo
              </p>
              <p className="text-xl lg:text-2xl text-yellow-300 font-bold">
                0906320679
              </p>
              <p className="text-base lg:text-lg text-white/90">
                Để hỗ trợ anh chị nhanh nhất
              </p>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center w-full">
              <TransitionLink
                href="/booking"
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Tư vấn chi tiết
              </TransitionLink>
              <TransitionLink
                href="/booking"
                className="group  btn-primary px-6 py-4 h-12 "
              >
                <Phone className="w-5 h-5" />
                Nhận báo giá
              </TransitionLink>
            </div>
          </div>
          {/* Right Content - Image */}
          {featuredProperty?.image && (
            <div className="relative w-full lg:w-2/3 flex justify-center items-center">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl w-full max-w-3xl">
                <div className="aspect-[19/9] rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm">
                  <img
                    src={
                      featuredProperty?.image ||
                      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                    }
                    alt="Real Estate"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Floating elements to mimic hands holding house effect */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300 rounded-full opacity-70 blur-sm"></div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full opacity-80 blur-sm"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}
