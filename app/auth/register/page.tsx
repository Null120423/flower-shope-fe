"use client";

import { ButtonPrimary, Input } from "@/components/ui";
import TransitionLink from "@/components/ui/TransitionLink";
import { ROUTES } from "@/routes/routes";
import {
  ArrowLeft,
  Flower2,
  Lock,
  Mail,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import AuthShell from "../_components/AuthShell";

const highlights = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-rose-600" />,
    text: "Bảo mật thông tin, chỉ dùng cho đơn hàng của bạn.",
  },
  {
    icon: <UserPlus className="w-5 h-5 text-rose-600" />,
    text: "Tặng mã giảm 10% cho thành viên mới.",
  },
  {
    icon: <Flower2 className="w-5 h-5 text-rose-600" />,
    text: "Ưu tiên các bộ sưu tập hoa mới nhất.",
  },
];

function RegisterHero() {
  return (
    <>
      <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-rose-100">
        <Flower2 className="w-5 h-5 text-rose-500" />
        <span className="text-sm font-semibold text-rose-600">
          FlowerShop Garden
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Tạo tài khoản mới để
        <span className="block bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          nhận ưu đãi và quà tặng
        </span>
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed">
        Chỉ vài bước đơn giản để trở thành thành viên FlowerShop: tích điểm mỗi
        đơn, nhận ưu đãi sinh nhật và ưu tiên giao nhanh.
      </p>
      <div className="space-y-3 text-sm">
        {highlights.map((item) => (
          <div key={item.text} className="flex items-center gap-3">
            {item.icon}
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function RegisterFormCard() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500">Đăng ký</p>
          <h2 className="text-2xl font-bold text-gray-900">
            Nhận ưu đãi tươi mới
          </h2>
        </div>
        <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center">
          <UserPlus className="w-6 h-6 text-rose-600" />
        </div>
      </div>

      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
        <Input
          label="Họ và tên"
          id="name"
          type="text"
          placeholder="Nguyễn Hoa Hồng"
          helperText="Dùng để in trên thiệp tặng hoa."
          required
        />

        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="you@example.com"
          icon={<Mail className="w-5 h-5" />}
          required
        />

        <Input
          label="Mật khẩu"
          id="password"
          type="password"
          placeholder="••••••••"
          icon={<Lock className="w-5 h-5" />}
          required
        />

        <Input
          label="Nhập lại mật khẩu"
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          icon={<Lock className="w-5 h-5" />}
          required
        />

        <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer select-none">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4 text-rose-500 rounded"
            required
          />
          <span>
            Tôi đồng ý với các
            <TransitionLink
              href={ROUTES.PUBLIC_ROUTES.TERM}
              className="text-rose-600 font-semibold hover:text-rose-700"
            >
              điều khoản
            </TransitionLink>
            <span> và</span>
            <TransitionLink
              href={ROUTES.PUBLIC_ROUTES.TERM}
              className="text-rose-600 font-semibold hover:text-rose-700"
            >
              {" "}
              chính sách bảo mật
            </TransitionLink>
            <span> của FlowerShop.</span>
          </span>
        </label>

        <ButtonPrimary className="w-full">Tạo tài khoản</ButtonPrimary>

        <p className="text-sm text-gray-600 text-center">
          Đã có tài khoản?
          <TransitionLink
            href={ROUTES.PUBLIC_ROUTES.LOGIN}
            className="text-rose-600 font-semibold ml-1 hover:text-rose-700"
          >
            Đăng nhập ngay
          </TransitionLink>
        </p>
      </form>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
        <ArrowLeft className="w-4 h-4" />
        <TransitionLink
          href={ROUTES.PUBLIC_ROUTES.HOME}
          className="text-rose-600 font-semibold hover:text-rose-700"
        >
          Trở về trang chủ
        </TransitionLink>
      </div>
    </>
  );
}

export default function RegisterPage() {
  return (
    <AuthShell
      gradientClassName="bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50"
      hero={<RegisterHero />}
      formCard={<RegisterFormCard />}
    />
  );
}
