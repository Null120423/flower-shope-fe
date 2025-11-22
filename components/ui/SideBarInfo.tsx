import { LOGO, SITE_URL, USER_DATA } from "@/lib/data";
import { Facebook, Phone, Twitter } from "lucide-react";
import YoutubeLstSidebar from "./YoutubeLstSidebar";

export interface YoutubeLink {
  id: string;
  slug: string;
  youtubeVideoUrl: string;
  title: string;
}
function SideBarInfo({
  youtubeLinks,
}: {
  youtubeLinks?: YoutubeLink[];
}): JSX.Element {
  // Handle contact button click
  const handleContactAgent = (method: "phone") => {
    switch (method) {
      case "phone":
        window.open(`tel:${USER_DATA.phoneNumber}`);
        break;
    }
  };
  return (
    <div className="space-y-2">
      {/* Contact Card - Enhanced */}
      <div className=" rounded-2xl p-6 shadow-sm animate-slide-in-right">
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-3">
            <img
              src={USER_DATA.avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-yellow-300 shadow-lg"
            />
            <img
              src={LOGO}
              alt="Logo"
              className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-2 border-white bg-white shadow"
            />
          </div>
          <h4 className="font-bold text-xl text-yellow-700 mb-1">
            {USER_DATA.fullName}
          </h4>
          <span className="text-sm text-gray-500 text-center">
            {USER_DATA.address}
          </span>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <button
            onClick={() => handleContactAgent("phone")}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl shadow-md transition-all duration-200 font-semibold text-base"
            title="Gọi điện"
          >
            <Phone className="w-5 h-5" />
            <span>Gọi tư vấn</span>
          </button>
          <a
            href={`https://zalo.me/${USER_DATA.phoneNumber.replace(
              /[^0-9]/g,
              ""
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-md transition-all duration-200 font-semibold text-base"
            title="Nhắn Zalo"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/768px-Icon_of_Zalo.svg.png"
              alt="Zalo"
              className="w-5 h-5"
            />
            <span>Zalo</span>
          </a>
          <a
            href={`mailto:${USER_DATA.email}`}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white rounded-xl shadow-md transition-all duration-200 font-semibold text-base"
            title="Gửi Email"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" stroke="none" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <span>Email</span>
          </a>
          <div className="flex items-center justify-center gap-3 mt-2">
            <a
              href={USER_DATA.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={USER_DATA.xLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black transition"
              title="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-700 transition"
              title="Website"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <YoutubeLstSidebar youtubeLinks={youtubeLinks} />
    </div>
  );
}

export default SideBarInfo;
