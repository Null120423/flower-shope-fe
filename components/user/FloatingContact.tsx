"use client";
import { CONNECT } from "@/lib/data";

export default function FloatingContact() {
  return (
    <div className="fixed z-50 top-[30%] right-0 flex flex-col items-end  bg-primary rounded-tl-lg rounded-bl-lg">
      {/* Contact Buttons */}
      <div
        className={`flex flex-col items-end gap-3 mb-2 transition-all duration-300  pointer-events-auto `}
      >
        {CONNECT.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2  hover:scale-105 cursor-pointer hover:bg-black text-black px-2 py-2 rounded-full shadow-lg transition-all duration-300 animate-fade-in`}
            title={item.name}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-8 h-8 rounded-full "
            />
          </a>
        ))}
      </div>
    </div>
  );
}
