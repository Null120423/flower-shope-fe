"use client";
import { USER_ROUTES } from "@/routes/routes";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import TransitionLink from "../ui/TransitionLink";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: USER_ROUTES.HOME },
    {
      name: "About",
      href: "#about",
    },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Profile", href: "#profile" },
  ];

  return (
    <>
      <header
        className={`fixed w-full transition-all duration-200  ${
          isScrolled ? "shadow-lg border-b z-[1000] backdrop-blur-2xl" : "z-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: First nav item */}
            <div className="hidden md:flex">
              <TransitionLink
                href="#about"
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                Flowers
              </TransitionLink>
            </div>

            {/* Center: Brand/Logo */}
            <div className="flex-1 flex justify-center">
              <TransitionLink
                href={USER_ROUTES.HOME}
                className="text-lg font-semibold text-slate-900 tracking-wide"
              >
                Daise.
              </TransitionLink>
            </div>

            {/* Right: Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <TransitionLink
                href="#portfolio"
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                Catalog
              </TransitionLink>
              <TransitionLink
                href="#blog"
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                About
              </TransitionLink>
              {/* Icons */}
              <div className="flex items-center space-x-3">
                <button className="p-2 text-slate-700 hover:text-slate-900">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
                <button className="p-2 text-slate-700 hover:text-slate-900">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900"
                aria-label="Open menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-black/40 flex items-start">
          <div className="w-full bg-white shadow-xl p-6 pt-10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <TransitionLink
                  key={index}
                  href={item.href}
                  className="text-base font-medium text-slate-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </TransitionLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
