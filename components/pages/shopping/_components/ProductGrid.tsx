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
    <div className="w-full">
      <div className="mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
