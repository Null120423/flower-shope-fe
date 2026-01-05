"use client";
import WrapperView from "@/app/warpper-view";
import Toast from "@/components/Plugin/useToast";
import categories from "@/mock/category";
import products from "@/mock/products";
import { useState } from "react";
import { FilterBar } from "./_components/FilterBar";
import { ProductGrid } from "./_components/ProductGrid";

const routes = [
  { href: "/", label: "Home" },
  { href: "/shopping", label: "Shopping" },
]
function ShoppingView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Recommended");
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleLike = (productId: string) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productName: string) => {
    Toast.success(`Đã thêm ${productName} vào giỏ!`, {
      duration: 2000,
      position: "bottom-center",
    });
  };

  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedPrice("");
  };

  // Render
  return (
    <WrapperView routes={routes}>
      {/* Header */}
      <div className="mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">🌸 Hoa</h1>
          <p className="text-gray-600 text-sm mt-1">
            Tìm kiếm hoa hoàn hảo cho bạn
          </p>
        </div>

      {/* Filters */}
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedPrice={selectedPrice}
        onPriceChange={setSelectedPrice}
        sortBy={sortBy}
        onSortChange={setSortBy}
        openDropdown={openDropdown}
        onDropdownToggle={setOpenDropdown}
        onClearFilters={handleClearFilters}
      />

      {/* Main Content */}
          <ProductGrid
            products={products}
            likedProducts={likedProducts}
            onToggleLike={toggleLike}
            onAddToCart={handleAddToCart}
          />
    </WrapperView>
  );
}

export default ShoppingView;
