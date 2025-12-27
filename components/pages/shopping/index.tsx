"use client";
import Toast from "@/components/Plugin/useToast";
import categories from "@/mock/category";
import products from "@/mock/products";
import { useState } from "react";
import { FilterBar } from "./_components/FilterBar";
import { ProductGrid } from "./_components/ProductGrid";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">🌸 Hoa</h1>
          <p className="text-gray-600 text-sm mt-1">
            Tìm kiếm hoa hoàn hảo cho bạn
          </p>
        </div>
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
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products Grid */}
          <ProductGrid
            products={products}
            likedProducts={likedProducts}
            onToggleLike={toggleLike}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      `}</style>
    </div>
  );
}

export default ShoppingView;
