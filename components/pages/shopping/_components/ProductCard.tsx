import { ButtonPrimary } from "@/components/ui";
import ProductModel from "@/lib/model/product.model";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: ProductModel;
  isLiked: boolean;
  onToggleLike: (productId: string) => void;
  onAddToCart: (productName: string) => void;
}

export function ProductCard({
  product,
  isLiked,
  onToggleLike,
  onAddToCart,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 border border-gray-100 group"
    >
      {/* Product Image */}
      <div className="relative bg-gray-100 h-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={100}
          height={120}
          className="object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggleLike(product.id)}
          className={`absolute top-2 right-2 p-1.5 rounded-full transition-all duration-300 ${
            isLiked
              ? "bg-red-500 text-white shadow-lg"
              : "bg-white/80 text-gray-400 hover:text-red-500"
          }`}
        >
          <Heart className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} />
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>

        {/* Ratings */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">(2.6k)</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <span className="text-lg font-bold text-gray-900">
            ฿{product.salePrice.toLocaleString()}
          </span>
          <span className="text-xs text-gray-400 line-through ml-2">
            ฿{product.basePrice.toLocaleString()}
          </span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAddToCart(product.name)}
          className="w-full"
        >
          <ButtonPrimary className="w-full p-2 m-2 h-10">
            Thêm vào giỏ
          </ButtonPrimary>
        </motion.button>
      </div>
    </motion.div>
  );
}
