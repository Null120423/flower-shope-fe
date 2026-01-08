"use client";
import BlogCard, { BlogPost } from "@/components/common/BlogCard";
import { Input } from "@/components/ui";
import BubbleTab, { TabItem } from "@/components/ui/BubbleTab";
import { mockBlogPosts } from "@/lib/mock/blog-posts";
import { Filter } from "lucide-react";
import { useState } from "react";

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "cham-soc-hoa-hong-tuoi-lau",
    title: "Bí quyết chăm sóc hoa hồng tươi lâu cả tuần",
    excerpt:
      "Khám phá những mẹo đơn giản nhưng hiệu quả để giữ hoa hồng của bạn tươi đẹp và thơm ngát suốt nhiều ngày.",
    featuredImage: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800",
    category: "Chăm sóc hoa",
    author: "Nguyễn Thị Hoa",
    publishDate: "05/01/2026",
    readTime: "5 phút đọc",
  },
  {
    id: 2,
    slug: "y-nghia-cua-hoa-tuong-ung-moi-mua",
    title: "Ý nghĩa của các loài hoa tương ứng với mỗi mùa",
    excerpt:
      "Mỗi mùa trong năm đều có những loài hoa đặc trưng riêng. Cùng tìm hiểu ý nghĩa và vẻ đẹp của chúng.",
    featuredImage: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
    category: "Hoa theo mùa",
    author: "Trần Văn Xuân",
    publishDate: "03/01/2026",
    readTime: "7 phút đọc",
  },
  {
    id: 3,
    slug: "trang-tri-tiec-cuoi-voi-hoa-tuoi",
    title: "Cách trang trí tiệc cưới hoàn hảo với hoa tươi",
    excerpt:
      "Hoa tươi là linh hồn của mọi đám cưới. Học cách kết hợp màu sắc và loại hoa để tạo nên không gian lãng mạn.",
    featuredImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    category: "Sự kiện",
    author: "Lê Thị Mai",
    publishDate: "01/01/2026",
    readTime: "10 phút đọc",
  },
  {
    id: 4,
    slug: "hoa-lan-va-phong-thuy",
    title: "Hoa lan trong phong thủy: Đặt ở đâu để may mắn?",
    excerpt:
      "Hoa lan không chỉ đẹp mà còn mang ý nghĩa phong thủy sâu sắc. Tìm hiểu cách đặt hoa lan đúng vị trí.",
    featuredImage: "https://images.unsplash.com/photo-1568603774912-5df0f035f824?w=800",
    category: "Câu chuyện hoa",
    author: "Phạm Minh Tuấn",
    publishDate: "28/12/2025",
    readTime: "6 phút đọc",
  },
  {
    id: 5,
    slug: "cach-phoi-mau-hoa-dep-mat",
    title: "Nghệ thuật phối màu hoa để tạo bó hoa ấn tượng",
    excerpt:
      "Phối màu hoa là một nghệ thuật. Cùng học cách kết hợp màu sắc hài hòa và bắt mắt cho bó hoa của bạn.",
    featuredImage: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800",
    category: "Chăm sóc hoa",
    author: "Nguyễn Thị Hoa",
    publishDate: "26/12/2025",
    readTime: "8 phút đọc",
  },
  {
    id: 6,
    slug: "hoa-huong-duong-va-nang-luong-tich-cuc",
    title: "Hoa hướng dương: Nguồn năng lượng tích cực cho ngôi nhà",
    excerpt:
      "Hoa hướng dương mang đến sự tươi vui và năng lượng tích cực. Khám phá lý do tại sao bạn nên có chúng trong nhà.",
    featuredImage: "https://images.unsplash.com/photo-1597848212624-e530bb7d4a0b?w=800",
    category: "Câu chuyện hoa",
    author: "Trần Văn Xuân",
    publishDate: "24/12/2025",
    readTime: "5 phút đọc",
  },
  {
    id: 7,
    slug: "qua-tang-hoa-dip-tet",
    title: "Top 5 loài hoa may mắn nên tặng dịp Tết Nguyên Đán",
    excerpt:
      "Tết đến xuân về, hãy tìm hiểu những loài hoa mang lại may mắn và tài lộc cho năm mới.",
    featuredImage: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800",
    category: "Hoa theo mùa",
    author: "Lê Thị Mai",
    publishDate: "22/12/2025",
    readTime: "6 phút đọc",
  },
  {
    id: 8,
    slug: "kien-thuc-co-ban-ve-cham-soc-hoa",
    title: "10 điều cần biết khi bắt đầu chăm sóc hoa tại nhà",
    excerpt:
      "Bạn mới bắt đầu trồng và chăm sóc hoa? Đây là những kiến thức cơ bản không thể bỏ qua.",
    featuredImage: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800",
    category: "Chăm sóc hoa",
    author: "Phạm Minh Tuấn",
    publishDate: "20/12/2025",
    readTime: "12 phút đọc",
  },
];

type CategoryType = "all" | "care" | "seasonal" | "events" | "stories";

export default function BlogListingView() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: TabItem<CategoryType>[] = [
    { id: "all", label: "Tất cả", icon: Filter },
    { id: "care", label: "Chăm sóc hoa", icon: Filter },
    { id: "seasonal", label: "Hoa theo mùa", icon: Filter },
    { id: "events", label: "Sự kiện", icon: Filter },
    { id: "stories", label: "Câu chuyện hoa", icon: Filter },
  ];

  const categoryMapping: Record<CategoryType, string> = {
    all: "Tất cả",
    care: "Chăm sóc hoa",
    seasonal: "Hoa theo mùa",
    events: "Sự kiện",
    stories: "Câu chuyện hoa",
  };

  const filteredPosts = mockBlogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === categoryMapping[selectedCategory];
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100 opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f472b6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
        
        <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Câu Chuyện & Bí Quyết Hoa
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Khám phá thế giới hoa tươi qua những câu chuyện, mẹo chăm sóc và cảm hứng theo mùa
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto ">
            <div className="relative">
              <Input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="max-w-7xl -translate-y-8 mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <BubbleTab
          tabs={categories}
          activeTab={selectedCategory}
          onTabChange={setSelectedCategory}
        />
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Bài viết nổi bật</h2>
          <BlogCard post={filteredPosts[0]} variant="featured" />
        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {selectedCategory === "all" ? "Tất cả bài viết" : categoryMapping[selectedCategory]}
          </h2>
          <span className="text-gray-600">
            {filteredPosts.length} bài viết
          </span>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.slice(1).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              Không tìm thấy bài viết
            </h3>
            <p className="text-gray-500">
              Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > 9 && (
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-pink-300 transition-all">
              ← Trước
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
              1
            </button>
            <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-pink-300 transition-all">
              2
            </button>
            <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-pink-300 transition-all">
              3
            </button>
            <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-pink-300 transition-all">
              Sau →
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
