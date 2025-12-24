import { ButtonPrimary } from "@/components/ui";
import { USER_DATA } from "@/lib/data";
import { Flower2, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative flower elements */}
      <div className="absolute top-10 left-10 text-pink-200 opacity-30 text-6xl animate-pulse">
        🌹
      </div>
      <div className="absolute top-20 right-20 text-rose-200 opacity-30 text-5xl animate-pulse delay-1000">
        🌷
      </div>
      <div className="absolute bottom-20 left-16 text-pink-200 opacity-30 text-7xl animate-pulse delay-500">
        💐
      </div>
      <div className="absolute bottom-10 right-10 text-rose-200 opacity-30 text-6xl animate-pulse delay-700">
        🌸
      </div>

      <div className="max-w-2xl w-full rounded-3xl p-12 text-center relative z-10">
        {/* 404 Icon with Flower Theme */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center">
              <Flower2 className="w-12 h-12 text-rose-500 animate-bounce" />
            </div>
            <div className="absolute -top-2 -right-2 text-3xl">🌹</div>
            <div className="absolute -bottom-2 -left-2 text-3xl">🌸</div>
          </div>
        </div>

        {/* 404 Title */}
        <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Trang hoa này không tồn tại
        </h2>
        <p className="text-rose-600 font-semibold mb-6">
          Như một bông hoa bị gió thổi bay...
        </p>

        {/* 404 Message */}
        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
          Xin lỗi, trang bạn tìm kiếm dường như đã bị lạc mất. Nhưng đừng lo,
          chúng tôi sẽ giúp bạn tìm lại "đúng hướng" với bộ sưu tập hoa đẹp của
          chúng tôi.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <Link href="/project/all" className="w-full">
            <ButtonPrimary className="w-full">
              <Search className="w-5 h-5" />
              💐 Khám phá những bông hoa đẹp
            </ButtonPrimary>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 mb-6 border border-pink-200">
          <p className="text-sm font-bold text-gray-700 mb-4">
            🌸 Các trang phổ biến:
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link
              href="/project/all"
              className="block text-rose-600 hover:text-rose-700 font-semibold hover:bg-white px-3 py-2 rounded-lg transition-colors"
            >
              💐 Danh sách sản phẩm
            </Link>
            <Link
              href="/#about"
              className="block text-rose-600 hover:text-rose-700 font-semibold hover:bg-white px-3 py-2 rounded-lg transition-colors"
            >
              👤 Về chúng tôi
            </Link>
            <Link
              href="/blog/all"
              className="block text-rose-600 hover:text-rose-700 font-semibold hover:bg-white px-3 py-2 rounded-lg transition-colors"
            >
              📰 Bài viết
            </Link>
            <Link
              href="/#contact"
              className="block text-rose-600 hover:text-rose-700 font-semibold hover:bg-white px-3 py-2 rounded-lg transition-colors"
            >
              📞 Liên hệ ngay
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="pt-6 border-t border-pink-200">
          <p className="text-gray-600 mb-2">
            Cần giúp đỡ? Hãy liên hệ với chúng tôi ngay:
          </p>
          <a
            href={`tel:${USER_DATA.phoneNumber}`}
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 text-lg"
          >
            📲 {USER_DATA.phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
}
