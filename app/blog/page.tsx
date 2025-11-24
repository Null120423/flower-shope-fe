"use client";
import { ArrowRight, Calendar, Clock, Eye, Filter, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  featuredImage: string;
  views: number;
  likes: number;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "flower-care-tips",
    title: "Essential Flower Care Tips for Beginners",
    excerpt:
      "Learn the fundamental techniques to keep your flowers fresh and beautiful for longer periods with expert advice and proven methods.",
    author: "Sarah Johnson",
    publishedAt: "2024-03-15",
    readTime: 8,
    category: "Care Tips",
    featuredImage: "/api/placeholder/600/400",
    views: 2547,
    likes: 186,
  },
  {
    id: "2",
    slug: "seasonal-arrangements",
    title: "Creating Stunning Seasonal Arrangements",
    excerpt:
      "Discover how to create beautiful arrangements that celebrate each season with the perfect combination of colors, textures, and fragrances.",
    author: "Emma Wilson",
    publishedAt: "2024-03-10",
    readTime: 6,
    category: "Design",
    featuredImage: "/api/placeholder/600/400",
    views: 1832,
    likes: 124,
  },
  {
    id: "3",
    slug: "wedding-flower-guide",
    title: "Complete Wedding Flower Planning Guide",
    excerpt:
      "Everything you need to know about choosing flowers for your special day, from bouquets to centerpieces and everything in between.",
    author: "Michael Chen",
    publishedAt: "2024-03-08",
    readTime: 12,
    category: "Weddings",
    featuredImage: "/api/placeholder/600/400",
    views: 3421,
    likes: 287,
  },
  {
    id: "4",
    slug: "indoor-garden-setup",
    title: "Setting Up Your Indoor Flower Garden",
    excerpt:
      "Transform your home with a beautiful indoor garden setup that brings nature's beauty inside year-round.",
    author: "Lisa Rodriguez",
    publishedAt: "2024-03-05",
    readTime: 10,
    category: "Indoor Gardening",
    featuredImage: "/api/placeholder/600/400",
    views: 1654,
    likes: 98,
  },
  {
    id: "5",
    slug: "flower-photography-tips",
    title: "Capturing Perfect Flower Photography",
    excerpt:
      "Professional techniques for photographing flowers that will make your images stand out with stunning detail and composition.",
    author: "David Park",
    publishedAt: "2024-03-03",
    readTime: 7,
    category: "Photography",
    featuredImage: "/api/placeholder/600/400",
    views: 987,
    likes: 76,
  },
  {
    id: "6",
    slug: "flower-meanings-guide",
    title: "The Hidden Language of Flowers",
    excerpt:
      "Explore the fascinating world of flower symbolism and what different blooms represent in various cultures and traditions.",
    author: "Anna Thompson",
    publishedAt: "2024-03-01",
    readTime: 9,
    category: "Culture",
    featuredImage: "/api/placeholder/600/400",
    views: 2156,
    likes: 164,
  },
];

const categories = [
  "All",
  "Care Tips",
  "Design",
  "Weddings",
  "Indoor Gardening",
  "Photography",
  "Culture",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterPosts(query, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterPosts(searchQuery, category);
  };

  const filterPosts = (query: string, category: string) => {
    let filtered = blogPosts;

    if (category !== "All") {
      filtered = filtered.filter((post) => post.category === category);
    }

    if (query) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-400 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Flower Care & Design Blog
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Expert tips, stunning designs, and everything you need to know
              about the world of flowers
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tips, and guides..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Featured Article
            </h2>

            <Link href={`/post/${featuredPost.slug}`} className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square relative overflow-hidden">
                    <Image
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-rose-500 text-white rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.publishedAt)}
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>By {featuredPost.author}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime} min read
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {featuredPost.views.toLocaleString()}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                        <span className="font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">
                Filter by category:
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedCategory === "All" ? "All Articles" : selectedCategory}
              </h2>
              <span className="text-gray-500">
                {filteredPosts.length} article
                {filteredPosts.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <Link
                  key={post.id}
                  href={`/post/${post.slug}`}
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/90 text-gray-700 rounded-md text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2 text-lg">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <span>By {post.author}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views.toLocaleString()}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {formatDate(post.publishedAt)}
                        </span>

                        <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setFilteredPosts(blogPosts);
                  }}
                  className="btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
