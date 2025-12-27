import ProductModel from "@/lib/model/product.model";
import { AnimatePresence } from "framer-motion";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: ProductModel[];
  likedProducts: string[];
  onToggleLike: (productId: string) => void;
  onAddToCart: (productName: string) => void;
}

export function ProductGrid({
  products,
  likedProducts,
  onToggleLike,
  onAddToCart,
}: ProductGridProps) {
  return (
    <div className="lg:col-span-3">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Kết quả</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isLiked={likedProducts.includes(product.id)}
                onToggleLike={onToggleLike}
                onAddToCart={onAddToCart}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
