"use client";
import { useState } from "react";
import PropertyCardItem, { PropertyCard } from "../ui/PropertyCard";
import Title from "../ui/Title";

const properties = [
  {
    id: 1,
    name: "Chung cư Luxury Garden",
    price: "2.5 tỷ",
    location: "Quận 7, TP.HCM",
    area: "75m²",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "apartment",
    priceRange: "mid",
  },
  {
    id: 2,
    name: "Biệt thự Sunshine Villa",
    price: "8.2 tỷ",
    location: "Quận 2, TP.HCM",
    area: "200m²",
    image:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "villa",
    priceRange: "high",
  },
  {
    id: 3,
    name: "Căn hộ Studio Modern",
    price: "1.8 tỷ",
    location: "Quận 1, TP.HCM",
    area: "45m²",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "apartment",
    priceRange: "low",
  },
  {
    id: 4,
    name: "Nhà phố thương mại",
    price: "4.5 tỷ",
    location: "Quận 3, TP.HCM",
    area: "120m²",
    image:
      "https://images.pexels.com/photos/1396196/pexels-photo-1396196.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "house",
    priceRange: "mid",
  },
  {
    id: 5,
    name: "Penthouse Riverside",
    price: "12.8 tỷ",
    location: "Quận 4, TP.HCM",
    area: "180m²",
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "apartment",
    priceRange: "high",
  },
  {
    id: 6,
    name: "Căn hộ Green Park",
    price: "3.2 tỷ",
    location: "Quận 9, TP.HCM",
    area: "85m²",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "apartment",
    priceRange: "mid",
  },
];

export default function FeaturedProperties({
  properties,
}: {
  properties: PropertyCard[];
}) {
  const [filter, setFilter] = useState("all");
  const [hoveredProperty, setHoveredProperty] = useState(null);

  const filteredProperties = properties.filter((property) => {
    if (filter === "all") return true;
    return property?.propertyType === filter;
  });

  return (
    <section className="py-20 ">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title title="Bất động sản nổi bật" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Những dự án bất động sản nổi bật đã được khách hàng tin tưởng lựa
            chọn
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: "all", label: "Tất cả" },
              { key: "apartment", label: "Chung cư" },
              { key: "villa", label: "Biệt thự" },
              { key: "house", label: "Nhà phố" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === key
                    ? "btn-primary"
                    : "bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCardItem key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
