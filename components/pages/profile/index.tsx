"use client";
import WrapperView from "@/app/warpper-view";
import { BubbleTab, ButtonPrimary, TabItem } from "@/components/ui";
import TransitionLink from "@/components/ui/TransitionLink";
import { ROUTES } from "@/routes/routes";
import {
    Bell,
    CreditCard,
    Edit,
    Heart,
    Lock,
    LogOut,
    Mail,
    MapPin,
    Package,
    Phone,
    Plus,
    Settings,
    ShoppingCart,
    Star,
    Trash2,
    User,
} from "lucide-react";
import { useState } from "react";

type TabType = "profile" | "addresses" | "orders" | "favorites" | "settings";
const routes = [
  { label: "Home", href: ROUTES.PUBLIC_ROUTES.HOME },
  { label: "Profile", href: ROUTES.PRIVATE_ROUTES.PROFILE },
];
interface Address {
  id: number;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
}

interface Order {
  id: string;
  date: string;
  status: "delivered" | "processing" | "cancelled";
  items: { name: string; image: string; quantity: number }[];
  total: number;
}

interface FavoriteFlower {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
}

// Mock data
const mockAddresses: Address[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 8900",
    address: "123 Rose Garden Street, Bloom City, BC 12345",
    isDefault: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 234 567 8901",
    address: "456 Tulip Avenue, Petal Town, PT 67890",
    isDefault: false,
  },
];

const mockOrders: Order[] = [
  {
    id: "ORD-2024-001",
    date: "2024-01-05",
    status: "delivered",
    items: [
      { name: "Pink Roses Bouquet", image: "/images/rose.png", quantity: 1 },
    ],
    total: 59.99,
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-07",
    status: "processing",
    items: [
      { name: "Sunflower Bundle", image: "/images/sunflower.png", quantity: 2 },
    ],
    total: 89.99,
  },
  {
    id: "ORD-2023-099",
    date: "2023-12-28",
    status: "cancelled",
    items: [
      { name: "Orchid Collection", image: "/images/orchid.png", quantity: 1 },
    ],
    total: 129.99,
  },
];

const mockFavorites: FavoriteFlower[] = [
  {
    id: 1,
    name: "Red Roses",
    price: "$49.99",
    image: "/images/rose.png",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Sunflowers",
    price: "$39.99",
    image: "/images/sunflower.png",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Lavender",
    price: "$29.99",
    image: "/images/lavender.png",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Tulips",
    price: "$34.99",
    image: "/images/tulip.png",
    rating: 4.6,
  },
];

export default function ProfileView() {
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [addresses, setAddresses] = useState<Address[]>(mockAddresses);

  const tabs: TabItem<TabType>[] = [
    { id: "profile", label: "Profile", icon: User },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "orders", label: "Orders", icon: Package },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleSetDefaultAddress = (id: number) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const handleRemoveFavorite = (id: number) => {
    // Handle remove favorite
    console.log("Remove favorite:", id);
  };

  const handleAddToCart = (id: number) => {
    // Handle add to cart
    console.log("Add to cart:", id);
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700 border-green-200";
      case "processing":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200";
    }
  };

  const getStatusText = (status: Order["status"]) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <WrapperView routes={routes}>
      <div className="w-full mx-auto pb-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2">
            My Account
          </h1>
          <p className="text-gray-600">Manage your profile and preferences</p>
        </div>

        {/* Tab Navigation */}
        <BubbleTab
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-8"
        />

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-8 animate-fade-in">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center gap-6 pb-8 border-b border-gray-100">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 p-1 shadow-xl">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <User className="w-16 h-16 text-rose-400" />
                    </div>
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-200">
                    <Edit className="w-4 h-4 text-rose-400" />
                  </button>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-1">
                    John Doe
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-3 text-gray-600 mt-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-rose-400" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-rose-400" />
                      <span>+1 234 567 8900</span>
                    </div>
                  </div>
                </div>
                <ButtonPrimary className="px-8">
                  <Edit className="w-5 h-5" />
                  Edit Profile
                </ButtonPrimary>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Total Orders</p>
                      <p className="text-3xl font-bold text-gray-800">24</p>
                    </div>
                    <Package className="w-12 h-12 text-rose-400 opacity-50" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Favorites</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {mockFavorites.length}
                      </p>
                    </div>
                    <Heart className="w-12 h-12 text-rose-400 opacity-50" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Total Spent</p>
                      <p className="text-3xl font-bold text-gray-800">$2,459</p>
                    </div>
                    <CreditCard className="w-12 h-12 text-rose-400 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === "addresses" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  My Addresses
                </h2>
                <ButtonPrimary className="px-6">
                  <Plus className="w-5 h-5" />
                  Add Address
                </ButtonPrimary>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                      address.isDefault
                        ? "border-rose-400 bg-gradient-to-br from-pink-50 to-rose-50"
                        : "border-gray-200 bg-white hover:border-pink-200"
                    }`}
                  >
                    {address.isDefault && (
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        Default
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <MapPin className="w-6 h-6 text-rose-400" />
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-pink-100 rounded-lg transition-colors">
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {address.name}
                    </h3>
                    <p className="text-gray-600 mb-1">{address.phone}</p>
                    <p className="text-gray-700 mb-4">{address.address}</p>
                    {!address.isDefault && (
                      <button
                        onClick={() => handleSetDefaultAddress(address.id)}
                        className="text-rose-500 font-semibold hover:text-rose-600 transition-colors"
                      >
                        Set as default
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                My Orders
              </h2>

              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div
                    key={order.id}
                    className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-pink-200"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">
                          {order.id}
                        </h3>
                        <p className="text-gray-600 text-sm">{order.date}</p>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusText(order.status)}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 bg-pink-50 rounded-xl p-3"
                        >
                          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🌸</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-gray-600">Total: </span>
                        <span className="text-2xl font-bold text-gray-800">
                          ${order.total}
                        </span>
                      </div>
                      <ButtonPrimary className="px-6 py-3 text-base">
                        View Details
                      </ButtonPrimary>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Favorites Tab */}
          {activeTab === "favorites" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                My Favorite Flowers
              </h2>

              {mockFavorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mockFavorites.map((flower) => (
                    <div
                      key={flower.id}
                      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-pink-200 hover:-translate-y-2"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                        <span className="text-6xl">🌸</span>
                        <button
                          onClick={() => handleRemoveFavorite(flower.id)}
                          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors"
                        >
                          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                          {flower.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-semibold text-gray-700">
                            {flower.rating}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-gray-800">
                            {flower.price}
                          </span>
                          <button
                            onClick={() => handleAddToCart(flower.id)}
                            className="bg-gradient-to-r from-rose-400 to-pink-500 p-2 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110"
                          >
                            <ShoppingCart className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="mb-6">
                    <Heart className="w-24 h-24 text-gray-300 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No favorites yet
                  </h3>
                  <p className="text-gray-500 mb-6">
                    You haven&apos;t added any flowers to your favorites yet.
                  </p>
                  <TransitionLink href={ROUTES.PUBLIC_ROUTES.SHOPPING}>
                    <ButtonPrimary className="px-8">
                      Browse Flowers
                    </ButtonPrimary>
                  </TransitionLink>
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Settings
              </h2>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:border-pink-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-pink-50 p-3 rounded-xl">
                      <CreditCard className="w-6 h-6 text-rose-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800">
                        Payment Methods
                      </h3>
                      <p className="text-sm text-gray-600">
                        Manage your payment options
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400">›</span>
                </button>

                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:border-pink-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-pink-50 p-3 rounded-xl">
                      <Bell className="w-6 h-6 text-rose-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800">
                        Notifications
                      </h3>
                      <p className="text-sm text-gray-600">
                        Configure notification preferences
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400">›</span>
                </button>

                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:border-pink-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-pink-50 p-3 rounded-xl">
                      <Lock className="w-6 h-6 text-rose-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800">
                        Change Password
                      </h3>
                      <p className="text-sm text-gray-600">
                        Update your password
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400">›</span>
                </button>

                <button className="w-full flex items-center justify-between p-4 border-2 border-red-200 rounded-2xl hover:bg-red-50 hover:shadow-lg transition-all duration-300 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-50 p-3 rounded-xl">
                      <LogOut className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-red-600">Logout</h3>
                      <p className="text-sm text-red-400">
                        Sign out of your account
                      </p>
                    </div>
                  </div>
                  <span className="text-red-400">›</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </WrapperView>
  );
}
