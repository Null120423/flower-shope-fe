import { USER_DATA } from "@/lib/data";
import { FileQuestion, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* 404 Icon */}
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-10 h-10 text-yellow-500" />
        </div>

        {/* 404 Title */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Trang không tồn tại
        </h2>

        {/* 404 Message */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            href="/"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Về trang chủ
          </Link>

          <Link
            href="/blog/all"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Xem tin tức
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Các trang phổ biến:</p>
          <div className="space-y-2 text-sm">
            <Link
              href="/project/all"
              className="block text-yellow-600 hover:text-yellow-700 font-medium"
            >
              📋 Danh sách dự án
            </Link>
            <Link
              href="/booking"
              className="block text-yellow-600 hover:text-yellow-700 font-medium"
            >
              📞 Đặt lịch tư vấn
            </Link>
            <Link
              href="/#about"
              className="block text-yellow-600 hover:text-yellow-700 font-medium"
            >
              👤 Về chúng tôi
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Cần hỗ trợ? Liên hệ:
            <a
              href={`tel:${USER_DATA.phoneNumber}`}
              className="text-yellow-600 ml-1"
            >
              {USER_DATA.phoneNumber}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
