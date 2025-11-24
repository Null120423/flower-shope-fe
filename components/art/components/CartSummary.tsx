"use client";
import { Gift, Shield, Tag, Truck } from "lucide-react";
import { useState } from "react";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  itemCount: number;
}

export default function CartSummary({
  subtotal,
  shipping,
  tax,
  discount,
  total,
  itemCount,
}: CartSummaryProps) {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "flower10") {
      setIsPromoApplied(true);
      // In a real app, this would call a parent function to update the discount
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h3 className="text-xl font-semibold text-primary mb-1">
          Order Summary
        </h3>
        <p className="text-sm text-gray-600">{itemCount} items in cart</p>
      </div>

      {/* Order Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">Shipping</span>
          </div>
          <span className="font-semibold">
            {shipping === 0 ? (
              <span className="text-green-600">FREE</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Tax</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between items-center text-green-600">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Discount</span>
            </div>
            <span className="font-semibold">-${discount.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Promo Code Section */}
      <div className="mb-6">
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <button
            onClick={applyPromoCode}
            disabled={!promoCode || isPromoApplied}
            className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Apply
          </button>
        </div>
        {isPromoApplied && (
          <p className="text-sm text-green-600 flex items-center gap-1">
            <Tag className="w-3 h-3" />
            Promo code applied successfully!
          </p>
        )}
      </div>

      {/* Total */}
      <div className="border-t border-gray-100 pt-4 mb-6">
        <div className="flex justify-between items-center text-lg font-bold">
          <span className="text-gray-800">Total</span>
          <span className="text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full btn-primary text-lg py-4 mb-4">
        Proceed to Checkout
      </button>

      {/* Trust Indicators */}
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-500" />
          <span>Secure SSL encrypted checkout</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-blue-500" />
          <span>Free shipping on orders over $50</span>
        </div>
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4 text-purple-500" />
          <span>Free gift wrapping available</span>
        </div>
      </div>
    </div>
  );
}
