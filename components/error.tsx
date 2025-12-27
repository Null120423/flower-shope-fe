"use client";

import { USER_DATA } from "@/lib/data";
import { ROUTES } from "@/routes/routes";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import TransitionLink from "./ui/TransitionLink";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Error Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>

        {/* Error Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Có lỗi xảy ra
        </h1>

        {/* Error Message */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Xin lỗi, đã có lỗi không mong muốn xảy ra. Chúng tôi đang làm việc để
          khắc phục vấn đề này.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === "development" && (
          <div className=" rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-2">Chi tiết lỗi:</h3>
            <code className="text-sm text-red-600 break-all">
              {error.message}
            </code>
            {error.digest && (
              <p className="text-xs text-gray-500 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Thử lại
          </button>

          <TransitionLink
            href={ROUTES.PUBLIC_ROUTES.HOME}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Về trang chủ
          </TransitionLink>
        </div>

        {/* Contact Support */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">
            Nếu vấn đề vẫn tiếp tục, vui lòng liên hệ hỗ trợ:
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <TransitionLink
              href={`tel:${USER_DATA.phoneNumber}`}
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              📞 USER_DATA.phoneNumber
            </TransitionLink>
            <TransitionLink
              href={`mailto:${USER_DATA.email}`}
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              ✉️ {USER_DATA.email}
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
}
