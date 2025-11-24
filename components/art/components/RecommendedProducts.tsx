"use client";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface RecommendedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  bgColor: string;
  category: string;
}

interface RecommendedProductsProps {
  onAddToCart: (product: RecommendedProduct) => void;
}

const recommendedProducts: RecommendedProduct[] = [
  {
    id: 101,
    name: "Spring Tulip Bouquet",
    price: 29.99,
    originalPrice: 39.99,
    image: "/api/placeholder/100/100",
    rating: 4.8,
    reviews: 124,
    bgColor: "bg-gradient-to-br from-yellow-100 to-orange-100",
    category: "Seasonal",
  },
  {
    id: 102,
    name: "Elegant White Roses",
    price: 45.99,
    image: "/api/placeholder/100/100",
    rating: 4.9,
    reviews: 89,
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
    category: "Premium",
  },
  {
    id: 103,
    name: "Colorful Gerbera Mix",
    price: 24.99,
    originalPrice: 34.99,
    image: "/api/placeholder/100/100",
    rating: 4.7,
    reviews: 156,
    bgColor: "bg-gradient-to-br from-pink-100 to-purple-100",
    category: "Cheerful",
  },
  {
    id: 104,
    name: "Baby's Breath Arrangement",
    price: 19.99,
    image: "/api/placeholder/100/100",
    rating: 4.6,
    reviews: 78,
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    category: "Delicate",
  },
];

export default function RecommendedProducts({
  onAddToCart,
}: RecommendedProductsProps) {
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    setLikedProducts((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-semibold text-primary mb-1">
          You might also like
        </h3>
        <p className="text-sm text-gray-600">
          Handpicked flowers that complement your selection
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="group border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex gap-4">
                {/* Product Image */}
                <div
                  className={`${product.bgColor} w-20 h-20 rounded-xl p-2 flex-shrink-0 relative overflow-hidden`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                      Sale
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm leading-tight">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {product.category}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleLike(product.id)}
                      className={`p-1 rounded-full transition-all duration-300 ${
                        likedProducts.has(product.id)
                          ? "bg-red-100 text-red-500"
                          : "bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-3 h-3 ${
                          likedProducts.has(product.id) ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-xs text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-primary text-sm">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-secondary text-white p-1.5 rounded-lg hover:bg-secondary/90 transition-colors group"
                    >
                      <ShoppingCart className="w-3 h-3 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-6 text-center">
          <button className="text-primary hover:text-primary/80 font-medium text-sm border border-primary hover:border-primary/80 px-6 py-2 rounded-lg transition-colors">
            View All Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}
