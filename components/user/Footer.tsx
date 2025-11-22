import { USER_DATA } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";
import TransitionLink from "../ui/TransitionLink";

export default function Footer() {
  return (
    <footer id="footer" className="z-50 bg-primary p-4 text-white">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold">{USER_DATA.fullName}</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              {USER_DATA.description}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-white/80 text-sm sm:text-base">
              {USER_DATA.services.map((service, index) => (
                <li key={index}>
                  <TransitionLink
                    href={service.link}
                    className="hover:text-secondary-200 transition-colors"
                  >
                    {service.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-white/80 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary-300" />
                <span>{USER_DATA.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-300" />
                <span>{USER_DATA.phoneNumber}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-300" />
                <span>{USER_DATA.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} {USER_DATA.fullName}. All rights
              reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-white/70 text-xs sm:text-sm text-center sm:text-left">
              <TransitionLink
                href="#"
                className="hover:text-secondary-200 transition-colors"
              >
                Privacy Policy
              </TransitionLink>
              <TransitionLink
                href="#"
                className="hover:text-secondary-200 transition-colors"
              >
                Terms of Use
              </TransitionLink>
              <TransitionLink
                href="#"
                className="hover:text-secondary-200 transition-colors"
              >
                Operating Regulations
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
