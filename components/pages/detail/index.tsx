"use client";
import WrapperView from "@/app/warpper-view";
import ProductCard from "@/components/app/ProductCard";
import Carousel from "@/components/carousel";
import { ButtonPrimary } from "@/components/ui";
import { PRODUCT_DATA } from "@/lib/products";
import { ROUTES } from "@/routes/routes";
import {
  Award,
  Shield,
  ShoppingCart,
  Star,
  Truck
} from "lucide-react";
import { useState } from "react";

interface FlowerProduct {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  images: { url: string; alt: string; caption?: string }[];
  category: string;
  inStock: boolean;
  features: string[];
}

function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [quantity, setQuantity] = useState(1);
  // Mock product data - in real app this would come from API based on id
  const product: FlowerProduct = {
    id: id,
    title: "Your Floral Wonderland",
    price: 89.99,
    originalPrice: 120.0,
    rating: 4.8,
    reviews: 127,
    description:
      "Discover the enchanting beauty of our premium floral arrangements. Each bouquet is carefully crafted with the finest seasonal flowers, bringing nature's elegance directly to your doorstep. Perfect for special occasions or simply brightening your day.",
    images: [
      {
        url: "/1.png",
        alt: "Spring Elegance Bouquet",
        caption: "Fresh spring flowers with vibrant colors",
      },
      {
        url: "/2.png",
        alt: "Rose Garden Collection",
        caption: "Premium roses in classic arrangement",
      },
      {
        url: "/3.png",
        alt: "Seasonal Mix",
        caption: "Carefully curated seasonal blooms",
      },
      {
        url: "/4.png",
        alt: "Bridal Special",
        caption: "Elegant white and pink arrangement",
      },
      {
        url: "/5.png",
        alt: "Corporate Arrangement",
        caption: "Professional floral display",
      },
    ],
    category: "Premium Bouquets",
    inStock: true,
    features: [
      "Hand-picked fresh flowers",
      "Same-day delivery available",
      "7-day freshness guarantee",
      "Professional arrangement",
    ],
  };

  const relatedProducts = [
    { id: "1", title: "Spring Elegance", price: 65.99, image: "/2.png" },
    { id: "2", title: "Rose Garden", price: 78.99, image: "/3.png" },
    { id: "3", title: "Seasonal Mix", price: 55.99, image: "/4.png" },
    { id: "4", title: "Bridal Bouquet", price: 125.99, image: "/5.png" },
  ];

  return (
    <WrapperView routes={[
      { href: ROUTES.PUBLIC_ROUTES.HOME, label: "Home" },
      { href: ROUTES.PUBLIC_ROUTES.SHOPPING, label: "Shopping" },
      { href: "#", label: product.title },
    ]} >
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 relative">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Carousel Container */}
            <div className="relative rounded-2xl p-8  overflow-hidden">
              {/* Carousel */}
              <div className="relative z-5">
                <Carousel
                  images={product.images}
                  autoPlay={true}
                  autoPlayInterval={4000}
                  showDots={true}
                  showArrows={true}
                  aspectRatio="1/1"
                  className="rounded-xl overflow-hidden"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-5">
            {/* Product Title & Category */}
            <div>
              <p className="text-primary font-medium text-sm mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl font-bold text-primary mb-3">
                {product.title}
              </h1>
            </div>

            {/* Rating & Price - Compact */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Quick Features */}
            <ul className="space-y-2">
              {product.features.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Quantity & Add to Cart */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-primary">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-gray-100 transition-colors text-lg"
                  >
                    −
                  </button>
                  <span className="px-4 py-1 border-x border-gray-300 font-semibold min-w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100 transition-colors text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <ButtonPrimary className="w-full font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </ButtonPrimary>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-200">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-6 h-6 text-teal-600" />
                <p className="text-xs font-medium text-gray-700 text-center">
                  Free Delivery
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Shield className="w-6 h-6 text-green-600" />
                <p className="text-xs font-medium text-gray-700 text-center">
                  7-Day Fresh
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Award className="w-6 h-6 text-purple-600" />
                <p className="text-xs font-medium text-gray-700 text-center">
                  Premium Quality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">
              Related Products
            </h2>
          </div>
          <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
            {PRODUCT_DATA?.slice(0,4).map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={0}
                  isVisible={true}
                  scrollY={0}
                  onAddToCart={() => {}}
                />
              );
            })}
          </div>
        </div>
      </div>
    </WrapperView>
  );
}

export default DetailPage;
