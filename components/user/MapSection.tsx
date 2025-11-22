"use client";
import {
  Car,
  Guitar as Hospital,
  Plane,
  School,
  ShoppingCart,
} from "lucide-react";
import { PropertyData } from "../pages/PropertyDetailPage";
import Title from "../ui/Title";

const utilities = [
  { name: "Trường học", icon: School, distance: "500m" },
  { name: "Bệnh viện", icon: Hospital, distance: "1.2km" },
  { name: "Trung tâm thương mại", icon: ShoppingCart, distance: "800m" },
  { name: "Trạm xe buýt", icon: Car, distance: "200m" },
  { name: "Sân bay", icon: Plane, distance: "15km" },
];

// Coordinates: 10°48'00.2"N 106°46'33.9"E
const LOCATION = {
  lat: 10.800056,
  lng: 106.776083,
  address: " Đường N3C, An Phú, Hồ Chí Minh 70000, Việt Nam",
};
/**
 * Extracts the src URL from an iframe element
 * @param iframeElement - The iframe HTML element
 * @returns The src URL string or null if not found
 */
function getIframeSrc(input: string | undefined): string | null {
  if (!input) return null;
  // If input is an iframe HTML string, extract src attribute
  const match = input.match(/src=["']([^"']+)["']/);
  if (match) return match[1];
  // Otherwise, assume it's a direct URL
  return input;
}

export default function MapSection({
  link,
  propertyData,
}: {
  link?: string;
  propertyData?: PropertyData;
}) {
  const googleMapsEmbed = getIframeSrc(link);

  return (
    <section className="py-2 ">
      <div className="max-w-[100rem] mx-auto  min-h-64">
        <div className="text-center mb-2">
          <Title title="Vị trí đắc địa" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tọa lạc tại {propertyData?.address}
          </p>
        </div>

        {/* Interactive Google Maps */}
        {/* Google Maps Embed */}
        {googleMapsEmbed && (
          <iframe
            src={googleMapsEmbed}
            loading="lazy"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            title="Vị trí dự án bất động sản"
            className="rounded-xl"
          ></iframe>
        )}
      </div>
    </section>
  );
}
