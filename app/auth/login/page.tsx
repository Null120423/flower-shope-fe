"use client";

import { ButtonPrimary, Input } from "@/components/ui";
import { ArrowLeft, Flower2, Lock, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import AuthShell from "../_components/AuthShell";

const perks = [
  {
    title: "Giao nhanh trong ngày",
    description: "Tặng tận tay những bó hoa tươi mới.",
  },
  {
    title: "Thiết kế theo ý",
    description: "Cá nhân hóa thông điệp cho người nhận.",
  },
];

function LoginHero() {
  return (
    <>
      <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-rose-100">
        <Flower2 className="w-5 h-5 text-rose-500" />
        <span className="text-sm font-semibold text-rose-600">
          FlowerShop Garden
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Chào mừng trở lại với
        <span className="block bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          thế giới hoa rực rỡ
        </span>
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed">
        Đăng nhập để tiếp tục đặt hoa, lưu danh sách yêu thích và nhận ưu đãi
        độc quyền từ FlowerShop.
      </p>
      <div className="grid grid-cols-2 gap-4 text-sm">
        {perks.map((perk) => (
          <div
            key={perk.title}
            className="bg-white/70 backdrop-blur p-4 rounded-2xl shadow-sm border border-rose-100"
          >
            <p className="font-semibold text-gray-800">{perk.title}</p>
            <p className="text-gray-500 mt-1">{perk.description}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 text-sm text-rose-700 font-semibold">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-rose-100">
          ★
        </span>
        <p>Hơn 5.000 khách hàng đã tin yêu FlowerShop</p>
      </div>
    </>
  );
}

function LoginFormCard() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500">Đăng nhập</p>
          <h2 className="text-2xl font-bold text-gray-900">Rực rỡ mỗi ngày</h2>
        </div>
        <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center">
          <Lock className="w-6 h-6 text-rose-600" />
        </div>
      </div>

      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={<Mail className="w-5 h-5" />}
          required
        />

        <Input
          label="Mật khẩu"
          type="password"
          placeholder="••••••••"
          icon={<Lock className="w-5 h-5" />}
          required
        />

        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" className="w-4 h-4 text-rose-500 rounded" />
            Ghi nhớ tôi
          </label>
          <Link
            href="#"
            className="text-rose-600 font-semibold hover:text-rose-700"
          >
            Quên mật khẩu?
          </Link>
        </div>

        <ButtonPrimary className="w-full">Đăng nhập</ButtonPrimary>

        <p className="text-sm text-gray-600 text-center">
          Chưa có tài khoản?
          <Link
            href="/auth/register"
            className="text-rose-600 font-semibold ml-1 hover:text-rose-700"
          >
            Đăng ký ngay
          </Link>
        </p>
      </form>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-rose-50 border border-rose-100 px-4 py-3 text-sm text-rose-700">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <p>Đăng nhập để nhận voucher 10% cho đơn đầu tiên tuần này.</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
        <ArrowLeft className="w-4 h-4" />
        <Link
          href="/"
          className="text-rose-600 font-semibold hover:text-rose-700"
        >
          Trở về trang chủ
        </Link>
      </div>
    </>
  );
}

export default function LoginPage() {
  return <AuthShell hero={<LoginHero />} formCard={<LoginFormCard />} />;
}
