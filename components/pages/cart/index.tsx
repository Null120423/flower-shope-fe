"use client";
import WrapperView from "@/app/warpper-view";
import { CartModel } from "@/lib/model/cart.model";
import carts from "@/mock/cart";
import { ShoppingBag, Tag } from "lucide-react";
import { useState } from "react";
import CartItem from "./CartItem";
import SummaryOrder from "./SummaryOrder";

const routes = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giỏ hàng",
    href: "/cart",
  },
];

function CartView() {
  const [data, setData] = useState<CartModel>(carts);
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = data.products.reduce(
    (total, item) => total + item.quantity * (item.product.salePrice || 0),
    0
  );
  const shipping = subtotal > 500000 ? 0 : 30000;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax - discount;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setData((prev) => ({
      ...prev,
      products: prev.products.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ),
    }));
  };

  const removeItem = (id: string) => {
    setData((prev) => ({
      ...prev,
      products: prev.products.filter((item) => item.id !== id),
    }));
  };

  const toggleLike = (id: string) => {
    setLikedItems((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "flower10") {
      setDiscount(subtotal * 0.1);
    }
  };

  return (
    <WrapperView routes={routes}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Giỏ hàng của bạn
          </h1>
          <p className="text-gray-600">
            {data.products.length} sản phẩm trong giỏ hàng
          </p>
        </div>

        {data.products.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
            <div className="w-32 h-32 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-rose-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-3">
              Giỏ hàng trống
            </h3>
            <p className="text-gray-500 mb-8">
              Thêm những bông hoa xinh đẹp vào giỏ hàng của bạn
            </p>
            <button className="btn-primary text-lg">
              <ShoppingBag className="w-5 h-5" />
              Khám phá sản phẩm
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1 space-y-4">
              {data.products.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  isLiked={likedItems.has(item.id)}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                  onToggleLike={toggleLike}
                />
              ))}

              {/* Promo Code Section */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-rose-500" />
                  Mã khuyến mãi
                </h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Nhập mã khuyến mãi"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  />
                  <button
                    onClick={applyPromoCode}
                    disabled={!promoCode}
                    className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-lg font-medium hover:from-rose-500 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    Áp dụng
                  </button>
                </div>
                {discount > 0 && (
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-2">
                    <Tag className="w-4 h-4" />
                    Mã khuyến mãi đã được áp dụng thành công!
                  </p>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <SummaryOrder
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              discount={discount}
              total={total}
            />
          </div>
        )}
      </div>
    </WrapperView>
  );
}

export default CartView;
