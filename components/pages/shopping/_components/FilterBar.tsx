import CategoryModel from "@/lib/model/category.model";
import { FilterDropdown } from "./FilterDropdown";

interface FilterBarProps {
  categories: CategoryModel[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedPrice: string;
  onPriceChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  openDropdown: string | null;
  onDropdownToggle: (key: string | null) => void;
  onClearFilters: () => void;
}

const PRICE_OPTIONS = ["Tất cả", "Dưới ฿300k", "฿300k - ฿500k", "Trên ฿500k"];
const SORT_OPTIONS = [
  "Đề xuất",
  "Mới nhất",
  "Phổ biến",
  "Giá: Thấp đến Cao",
  "Giá: Cao đến Thấp",
];

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
  sortBy,
  onSortChange,
  openDropdown,
  onDropdownToggle,
  onClearFilters,
}: FilterBarProps) {
  const categoryOptions = categories.map((c) => c.name);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <FilterDropdown
            label="Danh mục"
            options={categoryOptions}
            value={selectedCategory}
            onChange={onCategoryChange}
            isOpen={openDropdown === "category"}
            onToggle={() =>
              onDropdownToggle(openDropdown === "category" ? null : "category")
            }
          />
          <FilterDropdown
            label="Giá"
            options={PRICE_OPTIONS}
            value={selectedPrice}
            onChange={onPriceChange}
            isOpen={openDropdown === "price"}
            onToggle={() =>
              onDropdownToggle(openDropdown === "price" ? null : "price")
            }
          />
          <FilterDropdown
            label="Sắp xếp"
            options={SORT_OPTIONS}
            value={sortBy}
            onChange={onSortChange}
            isOpen={openDropdown === "sort"}
            onToggle={() =>
              onDropdownToggle(openDropdown === "sort" ? null : "sort")
            }
          />
          {(selectedCategory || selectedPrice) && (
            <button
              onClick={onClearFilters}
              className="text-sm text-pink-600 hover:text-pink-700 font-medium ml-auto transition-colors"
            >
              Xóa bộ lọc
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
