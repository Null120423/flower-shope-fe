"use client";
import {
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Gift,
  MapPin,
  MessageSquare,
  Shield,
  Truck,
} from "lucide-react";
import { useState } from "react";

interface CheckoutSectionProps {
  total: number;
  itemCount: number;
}

export default function CheckoutSection({
  total,
  itemCount,
}: CheckoutSectionProps) {
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [giftWrap, setGiftWrap] = useState(false);
  const [specialMessage, setSpecialMessage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const deliveryOptions = [
    {
      id: "standard",
      name: "Standard Delivery",
      description: "3-5 business days",
      price: 0,
      icon: Truck,
    },
    {
      id: "express",
      name: "Express Delivery",
      description: "1-2 business days",
      price: 9.99,
      icon: Clock,
    },
    {
      id: "same-day",
      name: "Same Day Delivery",
      description: "Order by 2 PM",
      price: 19.99,
      icon: Calendar,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Delivery Information */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <Truck className="w-5 h-5" />
          Delivery Options
        </h3>

        <div className="space-y-3">
          {deliveryOptions.map((option) => (
            <div key={option.id} className="relative">
              <input
                type="radio"
                id={option.id}
                name="delivery"
                value={option.id}
                checked={deliveryOption === option.id}
                onChange={(e) => setDeliveryOption(e.target.value)}
                className="sr-only"
              />
              <label
                htmlFor={option.id}
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  deliveryOption === option.id
                    ? "border-secondary bg-secondary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <option.icon
                    className={`w-5 h-5 ${
                      deliveryOption === option.id
                        ? "text-secondary"
                        : "text-gray-500"
                    }`}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {option.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {option.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">
                    {option.price === 0 ? "FREE" : `+$${option.price}`}
                  </span>
                  {deliveryOption === option.id && (
                    <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>

        {/* Delivery Date Selection */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Delivery Date
          </label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>
      </div>

      {/* Delivery Address */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Delivery Address
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Street Address"
            className="md:col-span-2 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <input
            type="text"
            placeholder="City"
            className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <input
            type="text"
            placeholder="ZIP Code"
            className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="md:col-span-2 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>
      </div>

      {/* Gift Options */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5" />
          Gift Options
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-purple-500" />
              <div>
                <h4 className="font-semibold">Gift Wrapping</h4>
                <p className="text-sm text-gray-600">
                  Beautiful packaging with ribbon
                </p>
              </div>
            </div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={giftWrap}
                onChange={(e) => setGiftWrap(e.target.checked)}
                className="w-4 h-4 text-secondary focus:ring-secondary border-gray-300 rounded"
              />
              <span className="font-semibold">+$5.99</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Special Message (Optional)
            </label>
            <textarea
              value={specialMessage}
              onChange={(e) => setSpecialMessage(e.target.value)}
              placeholder="Add a personal message..."
              maxLength={200}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              {specialMessage.length}/200 characters
            </p>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payment Information
        </h3>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
            <input
              type="text"
              placeholder="CVC"
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-500" />
          <span className="text-sm text-gray-600">
            Your payment information is encrypted and secure
          </span>
        </div>
      </div>

      {/* Final Order Button */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-semibold text-gray-800">Final Total</h4>
            <p className="text-sm text-gray-600">{itemCount} items</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              ${total.toFixed(2)}
            </div>
          </div>
        </div>

        <button className="w-full btn-primary text-lg py-4">
          Complete Order
        </button>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            By placing this order, you agree to our{" "}
            <a href="#" className="text-secondary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-secondary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
