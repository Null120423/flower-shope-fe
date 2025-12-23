"use client";
import ProductCard from "@/components/app/ProductCard";
import { useEffect, useRef, useState } from "react";

// Product data - you can move this to a separate data file later
const PRODUCT_DATA = [
  {
    id: 1,
    name: "Cute Corsage Flower",
    price: "$29.99",
    image: "/4.png",
    bgColor: "bg-pink-100",
  },
  {
    id: 2,
    name: "Enchanted Garden Bouquet",
    price: "$79.99",
    image: "/3.png",
    bgColor: "bg-orange-200",
    featured: true,
  },
  {
    id: 3,
    name: "Luxury Sunshine Flower Box",
    price: "$99.99",
    image: "/1.png",
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    name: "Aesthetic Home Flowers",
    price: "$59.99",
    image: "/2.png",
    bgColor: "bg-pink-50",
  },
];

export default function ListItemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(PRODUCT_DATA.length).fill(false)
  );

  // Handler functions for ProductCard
  const handleAddToCart = (productId: number) => {
    console.log("Added to cart:", productId);
    // Add your cart logic here
    // Example: dispatch(addToCart(productId));
  };

  const handleProductClick = (productId: number) => {
    console.log("Product clicked:", productId);
    // Add navigation logic here
    // Example: router.push(`/products/${productId}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInView && !isVisible) {
          setIsVisible(true);

          // Stagger card animations
          PRODUCT_DATA.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 150);
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 lg:px-12 relative min-h-screen"
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-2 bg-gradient-to-br from-white/95 via-white/90 to-pink-50/95 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      ></div>

      {/* Animated Background Elements */}
      <div
        className="absolute inset-0 z-3 opacity-20 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-200 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateX(${Math.sin(scrollY * 0.01) * 20}px)`,
          }}
        ></div>
        <div
          className="absolute top-60 right-20 w-40 h-40 bg-gradient-to-br from-orange-300 to-pink-200 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateX(${Math.cos(scrollY * 0.01) * -15}px)`,
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-36 h-36 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.008) * 10}px)`,
            animationDelay: "4s",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex justify-between items-start mb-12 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
          style={{
            transform: `translateY(${isVisible ? 0 : 32}px) translateX(${
              scrollY * -0.05
            }px)`,
          }}
        >
          <div
            className="transform transition-all duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Discover
              <br />
              Our Finest Selection
            </h2>
          </div>
          <button
            className="bg-white border-2 border-gray-300 hover:border-primary px-6 py-3 rounded-full font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            See All Collections
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5rem]">
          {PRODUCT_DATA.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isVisible={visibleCards[index]}
              scrollY={scrollY}
              onAddToCart={handleAddToCart}
              onClick={handleProductClick}
            />
          ))}
        </div>

        {/* Enhanced Animations and Parallax Effects */}
        <style jsx>{`
          @keyframes gentle-float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .animate-gentle-float {
            animation: gentle-float 3s ease-in-out infinite;
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }

          @keyframes parallax-fade-in {
            0% {
              opacity: 0;
              transform: translateY(60px) scale(0.9);
            }
            50% {
              opacity: 0.8;
              transform: translateY(20px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0px) scale(1);
            }
          }

          .animate-parallax-fade-in {
            animation: parallax-fade-in 0.8s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          @keyframes wave-motion {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-5px) rotate(1deg);
            }
            50% {
              transform: translateY(-8px) rotate(0deg);
            }
            75% {
              transform: translateY(-3px) rotate(-1deg);
            }
          }

          .animate-wave-motion {
            animation: wave-motion 4s ease-in-out infinite;
          }

          /* Smooth scrolling performance optimization */
          * {
            will-change: transform;
          }

          section {
            transform: translate3d(0, 0, 0);
          }
        `}</style>
      </div>
    </section>
  );
}
