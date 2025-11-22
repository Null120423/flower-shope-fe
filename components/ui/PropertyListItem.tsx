import { Bath, Bed, Car, Eye, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { PropertyCardProps } from "./PropertyCard";
import TransitionLink from "./TransitionLink";

// Property List Item Component
const PropertyListItem: React.FC<PropertyCardProps> = ({ property }) => {
  console.log("PropertyListItem", property);
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-80 h-48 md:h-auto">
          <TransitionLink href={`/project/${property.slug}`}>
            <Image
              src={property.image || property.propertyImages?.[0]?.url || ""}
              alt={property.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            {property.isFeatured && (
              <>
                <div className="absolute top-3 left-3  bg-gradient-primary text-white bg-gradient-primary">
                  Nổi bật
                </div>
                <div className="flex items-center gap-4 absolute top-3 right-6 bg-gradient-primary">
                  <div className="flex items-center gap-1 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{property.viewCount} lượt xem</span>
                  </div>
                </div>
              </>
            )}
          </TransitionLink>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <TransitionLink href={`/project/${property.slug}`}>
                <h3 className="font-bold text-xl mb-2 hover:text-primary-600 transition-colors">
                  {property.name}
                </h3>
              </TransitionLink>

              <div className="flex items-center gap-1 text-gray-600 mb-3">
                <MapPin className="w-4 h-4" />
                <span>{property.address}</span>
              </div>
            </div>

            <div className="text-right ml-4">
              <div className="text-primary-600 font-bold text-xl truncate max-w-[10ch]">
                {property.minPrice}
              </div>
              {property.maxPrice && (
                <div className="text-gray-600">đến {property.maxPrice}</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5 text-gray-400" />
              <span className="text-sm">{property.bedrooms} phòng ngủ</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5 text-gray-400" />
              <span className="text-sm">{property.bathrooms} phòng tắm</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-gray-400" />
              <span className="text-sm">
                {property.minArea} - {property.maxArea}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-gray-400" />
              <span className="text-sm">{property.parkingSpaces}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {property.amenities.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {property.amenities
                  .slice(0, 3)
                  .map(
                    (
                      amenity:
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | Promise<AwaitedReactNode>
                        | null
                        | undefined,
                      index: Key | null | undefined
                    ) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {amenity}
                      </span>
                    )
                  )}
                {property.amenities.length > 3 && (
                  <span className="text-gray-500 text-xs">
                    +{property.amenities.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyListItem;
