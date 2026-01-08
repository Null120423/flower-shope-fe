"use client";
import TransitionLink from "@/components/ui/TransitionLink";
import { ROUTES } from "@/routes/routes";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  featuredImage: string;
  category: string;
  author?: string;
  publishDate: string;
  readTime?: string;
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  variant?: "default" | "featured" | "compact";
}

export default function BlogCard({
  post,
  index = 0,
  variant = "default",
}: BlogCardProps) {
  if (variant === "compact") {
    return (
      <TransitionLink href={ROUTES.PUBLIC_ROUTES.BLOG_DETAIL(post.slug)}>
        <div className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="flex gap-4 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300">
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 py-3 pr-4">
              <div className="inline-block bg-pink-100 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {post.category}
              </div>
              <h3 className="font-bold text-gray-800 line-clamp-2 group-hover:text-rose-500 transition-colors mb-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>{post.publishDate}</span>
              </div>
            </div>
          </div>
        </div>
      </TransitionLink>
    );
  }

  if (variant === "featured") {
    return (
      <TransitionLink href={ROUTES.PUBLIC_ROUTES.BLOG_DETAIL(post.slug)}>
        <div className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
          <div className="relative h-96 overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block bg-gradient-to-r from-rose-400 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 shadow-lg">
                {post.category}
              </div>
              <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-200 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishDate}</span>
                </div>
                {post.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </TransitionLink>
    );
  }

  return (
    <TransitionLink href={ROUTES.PUBLIC_ROUTES.BLOG_DETAIL(post.slug)}>
      <div
        className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-white/95 backdrop-blur-sm text-rose-600 text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Tag className="w-3 h-3" />
              {post.category}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date & Read Time */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-rose-400" />
              <span>{post.publishDate}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-rose-500 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-rose-500 font-semibold group-hover:gap-4 transition-all duration-300">
            <span>Đọc thêm</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </TransitionLink>
  );
}
