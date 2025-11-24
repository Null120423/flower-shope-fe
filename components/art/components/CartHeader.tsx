"use client";
import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowLeft, ShoppingBag } from "lucide-react";

interface CartHeaderProps {
  itemCount: number;
}

export default function CartHeader({ itemCount }: CartHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <TransitionLink
          href="/"
          className="flex items-center gap-2 text-primary hover:text-teal-600 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Continue Shopping
        </TransitionLink>
      </div>

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Your Floral
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 italic">
          Shopping Cart
        </h2>
        <p className="text-gray-600 mt-2">
          {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      <div className="flex items-center gap-2 text-primary">
        <ShoppingBag className="w-6 h-6" />
        <span className="font-semibold">{itemCount}</span>
      </div>
    </div>
  );
}
