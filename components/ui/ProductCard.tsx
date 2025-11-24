"use client";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import TransitionLink from "./TransitionLink";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    bgColor: string;
    featured?: boolean;
  };
  index: number;
  isVisible: boolean;
  scrollY: number;
  onAddToCart?: (productId: number) => void;
  onClick?: (productId: number) => void;
}

export default function ProductCard({
  product,
  index,
  isVisible,
  scrollY,
  onAddToCart,
  onClick,
}: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(product.id);
  };

  const handleClick = () => {
    onClick?.(product.id);
  };

  return (
    <div
      className={`group relative rounded-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
        isVisible
          ? "opacity-100 transform translate-y-0 scale-100"
          : "opacity-0 transform translate-y-12 scale-95"
      }`}
      style={{
        transform: `translateY(${
          isVisible ? scrollY * (0.02 * ((index % 2) + 2)) : 48
        }px) scale(${isVisible ? 1 : 0.95})`,
        transitionDelay: `${index * 150}ms`,
      }}
      onClick={handleClick}
    >
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute -top-2 -right-2 z-30 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
          ⭐ Featured
        </div>
      )}

      {/* Product Image Container */}
      <div
        className={`${product.bgColor} h-[25rem] p-4 w-full rounded-[150px] mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}
        style={{
          transform: `translateY(${scrollY * -0.03}px) rotateX(${
            scrollY * 0.01
          }deg)`,
        }}
      >
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>

        <div
          className="relative h-48 flex items-center mt-20 justify-center"
          style={{
            transform: `translateY(${scrollY * 0.01}px)`,
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={160}
            height={200}
            className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
            style={{
              transform: `translateY(${
                scrollY * (0.015 * (index % 2 === 0 ? 1 : -1))
              }px)`,
            }}
          />
        </div>

        {/* Cart Button */}
        <TransitionLink
          href="/id"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white hover:bg-primary text-gray-700 hover:text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 z-20"
        >
          <ShoppingCartIcon className="w-4 h-4" />
          Add
        </TransitionLink>

        {/* Quick View Button */}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
          {product.price}
        </p>

        {/* Rating Stars (placeholder) */}
        <div className="flex justify-center items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">
              ★
            </span>
          ))}
          <span className="text-gray-500 text-sm ml-1">(4.8)</span>
        </div>
      </div>
    </div>
  );
}
