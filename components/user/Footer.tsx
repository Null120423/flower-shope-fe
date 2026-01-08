import { USER_DATA } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";
import TransitionLink from "../ui/TransitionLink";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-white border-t border-rose-200/30">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Footer Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 text-sm">
          {/* Company */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900">{USER_DATA.fullName}</h4>
            <p className="text-gray-600">{USER_DATA.description}</p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900">Liên Kết</h4>
            <ul className="space-y-1">
              {[
                { name: "Trang Chủ", href: "/" },
                { name: "Sản Phẩm", href: "/shopping" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <TransitionLink href={link.href} className="text-gray-600 hover:text-rose-500 transition-colors">
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900">Liên Hệ</h4>
            <a href={`tel:${USER_DATA.phoneNumber}`} className="flex items-center gap-2 text-gray-600 hover:text-rose-500">
              <Phone className="w-4 h-4" />
              {USER_DATA.phoneNumber}
            </a>
            <a href={`mailto:${USER_DATA.email}`} className="flex items-center gap-2 text-gray-600 hover:text-rose-500">
              <Mail className="w-4 h-4" />
              {USER_DATA.email}
            </a>
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{USER_DATA.address}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-rose-200/30 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {USER_DATA.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
