"use client";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { PropertyCard } from "../ui/PropertyCard";

export default function VideoSection({
  featuredProperty,
}: {
  featuredProperty: PropertyCard | null;
}) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Khám phá dự án {featuredProperty?.name || "nổi bật"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Preview */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              <div className="aspect-video w-full">
                <img
                  src={
                    featuredProperty?.image ||
                    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  }
                  alt="Video preview"
                  className="w-full h-full object-cover"
                />
                {featuredProperty?.videoUrl && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="group w-20 h-20 gradient rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                {featuredProperty?.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {featuredProperty?.address}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Tiện ích nổi bật
              </h3>
              <ul className="space-y-2 text-gray-300">
                {featuredProperty?.amenities
                  ?.slice(0, 5)
                  ?.map((amenity, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 capitalize"
                    >
                      <div className="w-2 h-2 gradient rounded-full "></div>
                      {amenity}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative bg-black rounded-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Dự án video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
