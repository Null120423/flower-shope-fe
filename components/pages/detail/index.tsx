"use client";
import ProductCard from "@/components/app/ProductCard";
import Carousel from "@/components/carousel";
import TransitionLink from "@/components/ui/TransitionLink";
import { PRODUCT_DATA } from "@/lib/products";
import { ROUTES } from "@/routes/routes";
import {
  ArrowLeft,
  Award,
  Shield,
  ShoppingCart,
  Star,
  Truck,
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
  const [isLiked, setIsLiked] = useState(false);

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
    <div className="min-h-screen pt-10 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <TransitionLink
            href={ROUTES.PUBLIC_ROUTES.HOME}
            className="flex items-center gap-2 text-primary hover:text-teal-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Shop
          </TransitionLink>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 relative">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Carousel Container */}
            <div className="relative rounded-2xl p-8  overflow-hidden">
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                25% OFF
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-pink-100 rounded-full opacity-60 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-100 rounded-full opacity-40 z-0"></div>

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
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <p className="text-teal-600 font-medium text-sm mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-primary font-semibold ml-2">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Save $
                  {((product.originalPrice || 0) - product.price).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-primary mb-4">
                What's Included:
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold text-primary">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="w-full btn-primary text-lg py-4 shadow-xl hover:shadow-2xl">
                <ShoppingCart className="w-6 h-6" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Truck className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-primary">
                  Free Delivery
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-primary">
                  7-Day Fresh
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-primary">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {PRODUCT_DATA.map((product) => {
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
    </div>
  );
}

export default DetailPage;
