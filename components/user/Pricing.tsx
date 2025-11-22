"use client";
import { Clock, Gift } from "lucide-react";
import { useEffect, useState } from "react";

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-primary-50">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Ưu đãi đặc biệt
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nhận ngay ưu đãi lớn khi đặt cọc sớm - Số lượng có hạn!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Countdown */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Ưu đãi sắp kết thúc</span>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Chỉ còn:
              </h3>

              <div className="flex justify-center lg:justify-start gap-4 mb-6">
                {[
                  { value: timeLeft.days, label: "Ngày" },
                  { value: timeLeft.hours, label: "Giờ" },
                  { value: timeLeft.minutes, label: "Phút" },
                  { value: timeLeft.seconds, label: "Giây" },
                ].map((time, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {time.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {time.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offers */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-400 to-primary-400 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="w-6 h-6" />
                  <h4 className="text-xl font-bold">Ưu đãi vàng</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Chiết khấu 8% cho khách hàng đặt cọc sớm</li>
                  <li>• Miễn phí 2 năm phí quản lý</li>
                  <li>• Tặng gói nội thất cao cấp trị giá 200 triệu</li>
                  <li>• Hỗ trợ vay vốn lãi suất 0% trong 12 tháng</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="w-6 h-6" />
                  <h4 className="text-xl font-bold">Ưu đãi bạc</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Chiết khấu 5% cho khách hàng mua trong tháng</li>
                  <li>• Miễn phí 1 năm phí quản lý</li>
                  <li>• Tặng voucher nội thất 100 triệu</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Đăng ký nhận ưu đãi ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
