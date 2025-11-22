"use client";
import { useState } from "react";
import BlogItemCard, { BlogPost } from "../ui/BlogItemCard";
import Title from "../ui/Title";

const categories = [
  "Tất cả",
  "SALE Tips",
  "Keyword Research",
  "Google Ads",
  "Content Marketing",
  "Local SALE",
  "Analytics",
];

export default function BlogSection({
  blogPosts,
  featuredPost,
}: {
  blogPosts: BlogPost[];
  featuredPost: BlogPost | null | undefined;
}) {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts =
    selectedCategory === "Tất cả"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 ">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Title title="Bài viết của tôi" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chia sẻ kiến thức SALE, Digital Marketing và chiến lược tăng doanh
            số chốt giao dịch bất động sản
          </p>
        </div>
        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center py-4 gap-4 mb-12 animate-fade-in-delay">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "gradient text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}
        {/* Blog Grid */}
        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <BlogItemCard key={index} post={post} />
          ))}
          {filteredPosts.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-gray-500">
              Không có bài viết nào trong danh mục này
            </div>
          )}
        </div>
        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <div className="text-center animate-fade-in">
            <button
              onClick={() => setVisiblePosts((prev) => prev + 3)}
              className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Xem thêm bài viết
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
