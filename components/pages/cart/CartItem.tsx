import { Helper } from "@/lib/helper";
import { CartProductModel } from "@/lib/model/cart.model";
import { Heart, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

const CartItem = ({
  item,
  isLiked,
  onUpdateQuantity,
  onRemove,
  onToggleLike,
}: {
  item: CartProductModel;
  isLiked: boolean;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onToggleLike: (id: string) => void;
}) => {
  const itemTotal = item.quantity * (item.product.salePrice || 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
      <div className="flex items-start gap-6">
        {/* Product Image */}
        <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-rose-100 to-pink-100 p-2">
          <Image
            src={item.product.thumbnail || "/api/placeholder/120/120"}
            alt={item.product.name}
            width={120}
            height={120}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
          {item.product.badgeName && (
            <div
              className={`absolute top-2 left-2 px-2 py-1 ${item.product.badgeColor} text-white text-xs font-semibold rounded-md`}
            >
              {item.product.badgeName}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-primary transition-colors">
                {item.product.name}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.product.description}
              </p>
              {item.product.category && (
                <span className="inline-block mt-2 px-2 py-1 bg-rose-50 text-rose-600 text-xs rounded-md">
                  {item.product.category.name}
                </span>
              )}
            </div>

            <button
              onClick={() => onToggleLike(item.id)}
              className={`p-2 rounded-full transition-all duration-300 ml-4 ${
                isLiked
                  ? "bg-red-100 text-red-500"
                  : "bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500"
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">
                {Helper.formatCurrency(item.product.salePrice || 0)}
              </span>
              {item.product.basePrice > item.product.salePrice && (
                <span className="text-sm text-gray-400 line-through">
                  {Helper.formatCurrency(item.product.basePrice)}
                </span>
              )}
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-lg">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-2 font-semibold min-w-[4rem] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => onRemove(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
                title="Xóa sản phẩm"
              >
                <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Item Subtotal */}
          <div className="mt-3 text-right">
            <span className="text-sm text-gray-600">
              Thành tiền:
              <span className="font-bold text-primary ml-2 text-lg">
                {Helper.formatCurrency(itemTotal)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
