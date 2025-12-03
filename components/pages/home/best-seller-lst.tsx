"use client";
import { HeartIcon, InfoIcon, ShoppingCartIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Best seller flower data
const FLOWER_CATEGORIES = [
  { id: 1, name: "Flower Pots", active: false },
  { id: 2, name: "Flower Bouquets", active: true },
  { id: 3, name: "Flower Boards", active: false },
  { id: 4, name: "Flower Boxes", active: false },
  { id: 5, name: "Flower Corsages", active: false },
  { id: 6, name: "Flower Centerpieces", active: false },
];

const FLOWER_PRODUCTS = {
  "Flower Bouquets": [
    {
      id: 1,
      name: "Classic Wedding Bouquet",
      price: "$59.99",
      originalPrice: "$79.99",
      image: "/1.png",
      description:
        "A classic choice, perfect for your way of expressing emotions and capturing the essence of the moment.",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Romantic Rose Arrangement",
      price: "$45.99",
      originalPrice: "$65.99",
      image: "/2.png",
      description:
        "Elegant roses arranged with care, symbolizing love and passion in every petal.",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      badge: "Popular",
    },
    {
      id: 3,
      name: "Spring Garden Mix",
      price: "$39.99",
      originalPrice: "$55.99",
      image: "/3.png",
      description:
        "Fresh spring flowers that bring joy and brightness to any occasion.",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      badge: "New",
    },
  ],
  "Flower Pots": [
    {
      id: 4,
      name: "Ceramic Garden Pot",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "/4.png",
      description:
        "Beautiful ceramic pot perfect for indoor and outdoor gardening.",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      badge: "Sale",
    },
  ],
  "Flower Boxes": [
    {
      id: 5,
      name: "Luxury Gift Box",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "/5.png",
      description:
        "Premium flower arrangement in an elegant gift box for special occasions.",
      rating: 4.9,
      reviews: 203,
      inStock: true,
      badge: "Premium",
    },
  ],
};

export default function BestSellerList() {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof FLOWER_PRODUCTS>("Flower Bouquets");
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<
    "left" | "right" | "up" | "down" | null
  >(null);
  const [productKey, setProductKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const currentProducts = FLOWER_PRODUCTS[activeCategory] || [];
  const currentProduct = currentProducts[selectedProduct] || currentProducts[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const handleCategoryChange = (categoryName: keyof typeof FLOWER_PRODUCTS) => {
    if (categoryName === activeCategory) return;

    setIsTransitioning(true);
    setDirection("down");

    // Fade out current product
    setTimeout(() => {
      setActiveCategory(categoryName);
      setSelectedProduct(0);
      setProductKey((prev) => prev + 1);
    }, 250);

    // Fade in new product
    setTimeout(() => {
      setIsTransitioning(false);
      setDirection(null);
    }, 500);
  };

  const handleProductChange = (index: number) => {
    if (index === selectedProduct || isTransitioning) return;

    setIsTransitioning(true);
    setDirection(index > selectedProduct ? "right" : "left");

    setTimeout(() => {
      setSelectedProduct(index);
      setProductKey((prev) => prev + 1);
    }, 200);

    setTimeout(() => {
      setIsTransitioning(false);
      setDirection(null);
    }, 400);
  };

  return (
    <section ref={sectionRef} className="py-16 px-6 lg:px-12 pt-10 relative ">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-2 bg-gradient-to-br from-white/95 via-pink-50/90 to-orange-50/95 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      ></div>

      {/* Animated Background Orbs */}
      <div
        className="absolute inset-0 z-3 opacity-30 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div
          className="absolute top-32 left-16 w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-200 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateX(${Math.sin(scrollY * 0.01) * 30}px) scale(${
              1 + Math.sin(scrollY * 0.005) * 0.2
            })`,
          }}
        ></div>
        <div
          className="absolute top-96 right-24 w-40 h-40 bg-gradient-to-br from-orange-300 to-pink-200 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateX(${
              Math.cos(scrollY * 0.008) * -25
            }px) scale(${1 + Math.cos(scrollY * 0.006) * 0.3})`,
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute bottom-48 left-1/4 w-36 h-36 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.012) * 20}px) scale(${
              1 + Math.sin(scrollY * 0.008) * 0.25
            })`,
            animationDelay: "4s",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 h-full">
          {/* Left Sidebar - Category List */}
          <div
            ref={sidebarRef}
            className={`lg:col-span-4 mt-24 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-12"
            }`}
            style={{
              transform: `translateY(${isVisible ? scrollY * -0.05 : 48}px)`,
            }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-4">
              Best Sellers
            </h2>

            <div className="space-y-2">
              {FLOWER_CATEGORIES.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category?.name as any)}
                  disabled={isTransitioning}
                  className={`group w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-500 hover:scale-105 relative overflow-hidden ${
                    activeCategory === category.name
                      ? "bg-primary text-white shadow-lg shadow-primary/25 transform scale-105"
                      : "text-gray-600 hover:bg-gray-100 hover:text-primary"
                  } ${isTransitioning ? "cursor-not-allowed opacity-70" : ""}`}
                  style={{
                    transform: isVisible
                      ? `translateX(0px)`
                      : `translateX(-${(index + 1) * 20}px)`,
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {/* Background animation */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transition-all duration-300 ${
                      activeCategory === category.name
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    }`}
                  ></div>

                  <span className="relative z-10">{category.name}</span>

                  {/* Active indicator with animation */}
                  <div
                    className={`relative z-10 transition-all duration-300 mt-2 ${
                      activeCategory === category.name
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-white rounded-full transition-all duration-500 ${
                          activeCategory === category.name ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white rounded-xl transition-opacity duration-300"></div>
                </button>
              ))}
            </div>

            {/* Category Product Count */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <span className="font-bold text-primary">
                  {currentProducts.length}
                </span>{" "}
                products available in {activeCategory}
              </p>
            </div>

            {/* Quick Product Navigation */}
            {currentProducts.length > 1 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-3">
                  Quick Select:
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {currentProducts.map((product, index) => (
                    <button
                      key={`${product.id}-${productKey}`}
                      onClick={() => handleProductChange(index)}
                      disabled={isTransitioning}
                      className={`group aspect-square rounded-lg overflow-hidden border-2 transition-all duration-500 relative ${
                        selectedProduct === index
                          ? "border-primary shadow-lg scale-105 ring-2 ring-primary/20"
                          : "border-gray-200 hover:border-gray-300 hover:scale-105"
                      } ${isTransitioning ? "cursor-not-allowed" : ""}`}
                      style={{
                        transform: `scale(${
                          selectedProduct === index ? 1.05 : 1
                        }) translateY(${isTransitioning ? "4px" : "0px"})`,
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {/* Image with overlay */}
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={80}
                          height={80}
                          className={`w-full h-full object-cover transition-all duration-300 ${
                            selectedProduct === index
                              ? "scale-110"
                              : "group-hover:scale-105"
                          }`}
                        />

                        {/* Selection overlay */}
                        <div
                          className={`absolute inset-0 bg-primary/20 transition-opacity duration-300 ${
                            selectedProduct === index
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-50"
                          }`}
                        ></div>

                        {/* Active indicator */}
                        {selectedProduct === index && (
                          <div className="absolute top-1 right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Content - Product Details */}
          <div
            ref={productRef}
            className={`lg:col-span-8 rounded-2xl overflow-hidden transition-all duration-1200 ease-out ${
              isVisible
                ? "opacity-100 transform translate-y-0 scale-100"
                : "opacity-0 transform translate-y-16 scale-95"
            }`}
            style={{
              transform: `translateY(${
                isVisible ? scrollY * 0.01 : 20
              }px) scale(${isVisible ? 1 : 0.95})`,
              transitionDelay: "200ms",
            }}
          >
            {currentProduct ? (
              <div
                key={`product-${productKey}`}
                className={`grid md:grid-cols-2 h-full transition-all duration-400 ease-out ${
                  isTransitioning
                    ? direction === "left"
                      ? "transform translate-x-8 opacity-0 scale-95"
                      : direction === "right"
                      ? "transform -translate-x-8 opacity-0 scale-95"
                      : direction === "down"
                      ? "transform translate-y-8 opacity-0 scale-95"
                      : "transform -translate-y-8 opacity-0 scale-95"
                    : "transform translate-x-0 translate-y-0 opacity-100 scale-100"
                }`}
              >
                {/* Product Image */}
                <div
                  className="relative p-8 flex items-center justify-center  "
                  style={{
                    transform: `translateY(${scrollY * -0.02}px)`,
                  }}
                >
                  <div
                    className="relative z-10"
                    style={{
                      transform: `translateY(${scrollY * 0.015}px) rotateX(${
                        scrollY * 0.01
                      }deg)`,
                    }}
                  >
                    <Image
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      width={600}
                      height={500}
                      className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                    />

                    {/* Product Badge */}
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {currentProduct.badge}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <HeartIcon
                        className={`w-5 h-5 ${
                          isWishlisted
                            ? "text-red-500 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Product Information */}
                <div
                  className={`p-8 flex flex-col justify-between transition-all duration-600 ease-out ${
                    isTransitioning
                      ? "transform translate-x-4 opacity-0"
                      : "transform translate-x-0 opacity-100"
                  }`}
                >
                  {/* Animated content wrapper */}
                  <div
                    className={`transition-all duration-500 ${
                      isTransitioning
                        ? "transform translate-y-4 opacity-0"
                        : "transform translate-y-0 opacity-100"
                    }`}
                    style={{
                      transitionDelay: isTransitioning ? "0ms" : "200ms",
                    }}
                  >
                    <div>
                      {/* Rating and Reviews */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(currentProduct.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {currentProduct.rating} ({currentProduct.reviews}{" "}
                          reviews)
                        </span>
                      </div>

                      {/* Product Name */}
                      <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        {currentProduct.name}
                      </h1>

                      {/* Price */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-primary">
                          From {currentProduct.price}
                        </span>
                        {currentProduct.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            {currentProduct.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {currentProduct.description}
                      </p>

                      {/* Stock Status */}
                      <div className="flex items-center gap-2 mb-6">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            currentProduct.inStock
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        <span
                          className={`text-sm font-medium ${
                            currentProduct.inStock
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {currentProduct.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                          <ShoppingCartIcon className="w-5 h-5" />
                          Choose Flowers
                        </button>

                        <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                          <InfoIcon className="w-5 h-5" />
                          Details
                        </button>
                      </div>

                      {/* Additional Info */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500">Free Delivery</p>
                          <p className="font-semibold text-gray-800">
                            Same Day
                          </p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500">Guarantee</p>
                          <p className="font-semibold text-gray-800">
                            7 Days Fresh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96">
                <p className="text-gray-500 text-lg">
                  No products available in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS for smooth animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-slide-in-down {
          animation: slideInDown 0.5s ease-out forwards;
        }

        .animate-fade-scale {
          animation: fadeInScale 0.4s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          background-size: 200px 100%;
        }
      `}</style>
    </section>
  );
}
