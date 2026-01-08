"use client";
import { ButtonPrimary } from "@/components/ui";
import TransitionLink from "@/components/ui/TransitionLink";
import { ROUTES } from "@/routes/routes";
import {
    ArrowLeft,
    Calendar,
    CheckCircle,
    Clock,
    MapPin,
    Package,
    Truck,
    XCircle
} from "lucide-react";
import { useState } from "react";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: "delivered" | "processing" | "cancelled" | "pending";
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  shippingAddress: {
    name: string;
    address: string;
    phone: string;
  };
  trackingNumber?: string;
  estimatedDelivery?: string;
}

const mockOrders: Order[] = [
  {
    id: "ORD-2024-001",
    date: "2024-01-05",
    status: "delivered",
    items: [
      {
        id: 1,
        name: "Pink Roses Bouquet",
        quantity: 1,
        price: 49.99,
        image: "/images/rose.png",
      },
      {
        id: 2,
        name: "Greeting Card",
        quantity: 1,
        price: 10.0,
        image: "/images/card.png",
      },
    ],
    subtotal: 59.99,
    shipping: 0,
    total: 59.99,
    shippingAddress: {
      name: "John Doe",
      address: "123 Rose Garden Street, Bloom City, BC 12345",
      phone: "+1 234 567 8900",
    },
    trackingNumber: "TRK123456789",
    estimatedDelivery: "January 7, 2024",
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-07",
    status: "processing",
    items: [
      {
        id: 3,
        name: "Sunflower Bundle",
        quantity: 2,
        price: 39.99,
        image: "/images/sunflower.png",
      },
      {
        id: 4,
        name: "Glass Vase",
        quantity: 1,
        price: 25.0,
        image: "/images/vase.png",
      },
    ],
    subtotal: 104.98,
    shipping: 15.0,
    total: 119.98,
    shippingAddress: {
      name: "Jane Smith",
      address: "456 Tulip Avenue, Petal Town, PT 67890",
      phone: "+1 234 567 8901",
    },
    trackingNumber: "TRK987654321",
    estimatedDelivery: "January 10, 2024",
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-08",
    status: "pending",
    items: [
      {
        id: 5,
        name: "Mixed Flower Arrangement",
        quantity: 1,
        price: 79.99,
        image: "/images/mixed.png",
      },
    ],
    subtotal: 79.99,
    shipping: 10.0,
    total: 89.99,
    shippingAddress: {
      name: "John Doe",
      address: "123 Rose Garden Street, Bloom City, BC 12345",
      phone: "+1 234 567 8900",
    },
    estimatedDelivery: "January 12, 2024",
  },
  {
    id: "ORD-2023-099",
    date: "2023-12-28",
    status: "cancelled",
    items: [
      {
        id: 6,
        name: "Orchid Collection",
        quantity: 1,
        price: 129.99,
        image: "/images/orchid.png",
      },
    ],
    subtotal: 129.99,
    shipping: 0,
    total: 129.99,
    shippingAddress: {
      name: "John Doe",
      address: "123 Rose Garden Street, Bloom City, BC 12345",
      phone: "+1 234 567 8900",
    },
  },
];

type FilterType = "all" | "delivered" | "processing" | "pending" | "cancelled";

export default function OrderPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const getStatusConfig = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return {
          color: "bg-green-100 text-green-700 border-green-200",
          icon: CheckCircle,
          text: "Delivered",
        };
      case "processing":
        return {
          color: "bg-blue-100 text-blue-700 border-blue-200",
          icon: Truck,
          text: "Processing",
        };
      case "pending":
        return {
          color: "bg-yellow-100 text-yellow-700 border-yellow-200",
          icon: Clock,
          text: "Pending",
        };
      case "cancelled":
        return {
          color: "bg-red-100 text-red-700 border-red-200",
          icon: XCircle,
          text: "Cancelled",
        };
    }
  };

  const filteredOrders =
    selectedFilter === "all"
      ? mockOrders
      : mockOrders.filter((order) => order.status === selectedFilter);

  const filters: { value: FilterType; label: string; count: number }[] = [
    { value: "all", label: "All Orders", count: mockOrders.length },
    {
      value: "delivered",
      label: "Delivered",
      count: mockOrders.filter((o) => o.status === "delivered").length,
    },
    {
      value: "processing",
      label: "Processing",
      count: mockOrders.filter((o) => o.status === "processing").length,
    },
    {
      value: "pending",
      label: "Pending",
      count: mockOrders.filter((o) => o.status === "pending").length,
    },
    {
      value: "cancelled",
      label: "Cancelled",
      count: mockOrders.filter((o) => o.status === "cancelled").length,
    },
  ];

  if (selectedOrder) {
    const statusConfig = getStatusConfig(selectedOrder.status);
    const StatusIcon = statusConfig.icon;

    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedOrder(null)}
            className="flex items-center gap-2 text-gray-600 hover:text-rose-500 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Orders
          </button>

          {/* Order Header */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Order {selectedOrder.id}
                </h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Placed on {selectedOrder.date}</span>
                </div>
              </div>
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full border font-semibold ${statusConfig.color}`}
              >
                <StatusIcon className="w-5 h-5" />
                {statusConfig.text}
              </div>
            </div>

            {/* Tracking Info */}
            {selectedOrder.trackingNumber && (
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-rose-500" />
                  <span className="font-semibold text-gray-800">
                    Tracking Number
                  </span>
                </div>
                <p className="text-lg font-mono text-gray-700">
                  {selectedOrder.trackingNumber}
                </p>
                {selectedOrder.estimatedDelivery && (
                  <p className="text-sm text-gray-600 mt-2">
                    Estimated Delivery: {selectedOrder.estimatedDelivery}
                  </p>
                )}
              </div>
            )}

            {/* Shipping Address */}
            <div className="border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-rose-500" />
                <h3 className="font-semibold text-gray-800">
                  Shipping Address
                </h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800">
                  {selectedOrder.shippingAddress.name}
                </p>
                <p className="text-gray-600">
                  {selectedOrder.shippingAddress.address}
                </p>
                <p className="text-gray-600">
                  {selectedOrder.shippingAddress.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Items
            </h2>
            <div className="space-y-4">
              {selectedOrder.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl"
                >
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-4xl">🌸</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-800">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${selectedOrder.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>
                  {selectedOrder.shipping === 0
                    ? "Free"
                    : `$${selectedOrder.shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-rose-500">
                  ${selectedOrder.total.toFixed(2)}
                </span>
              </div>
            </div>

            {selectedOrder.status === "delivered" && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ButtonPrimary className="w-full">
                  Reorder This Item
                </ButtonPrimary>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <TransitionLink href={ROUTES.PUBLIC_ROUTES.PROFILE}>
            <button className="flex items-center gap-2 text-gray-600 hover:text-rose-500 mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Profile
            </button>
          </TransitionLink>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2">
            My Orders
          </h1>
          <p className="text-gray-600">Track and manage your flower orders</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl shadow-lg p-2 mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-3 rounded-2xl transition-all duration-300 whitespace-nowrap ${
                  selectedFilter === filter.value
                    ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:bg-pink-50"
                }`}
              >
                <span className="font-semibold">{filter.label}</span>
                <span className="ml-2 text-sm opacity-75">({filter.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length > 0 ? (
          <div className="space-y-4">
            {filteredOrders.map((order, index) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={order.id}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedOrder(order)}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {order.id}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{order.date}</span>
                          </div>
                        </div>
                        <div
                          className={`flex items-center gap-2 px-4 py-2 rounded-full border font-semibold ${statusConfig.color}`}
                        >
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.text}
                        </div>
                      </div>

                      {/* Items Preview */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {order.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-2 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl px-3 py-2"
                          >
                            <span className="text-xl">🌸</span>
                            <span className="text-sm text-gray-700">
                              {item.name} x{item.quantity}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tracking */}
                      {order.trackingNumber && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Truck className="w-4 h-4" />
                          <span>Tracking: {order.trackingNumber}</span>
                        </div>
                      )}
                    </div>

                    {/* Order Total */}
                    <div className="flex lg:flex-col justify-between lg:justify-center items-center lg:items-end gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-6">
                      <div className="text-center lg:text-right">
                        <p className="text-gray-600 text-sm mb-1">Total</p>
                        <p className="text-3xl font-bold text-gray-800">
                          ${order.total.toFixed(2)}
                        </p>
                      </div>
                      <ButtonPrimary className="px-6 py-3 text-base whitespace-nowrap">
                        View Details →
                      </ButtonPrimary>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="mb-6">
              <Package className="w-24 h-24 text-gray-300 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              No orders found
            </h3>
            <p className="text-gray-500 mb-6">
              You haven&apos;t placed any orders yet or no orders match this
              filter.
            </p>
            <TransitionLink href={ROUTES.PUBLIC_ROUTES.SHOPPING}>
              <ButtonPrimary className="px-8">Start Shopping</ButtonPrimary>
            </TransitionLink>
          </div>
        )}
      </div>
    </div>
  );
}
