import { splitToArr } from "@/lib/helper";
import { Share2 } from "lucide-react";
import TransitionLink from "./TransitionLink";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  authorAvatar?: string;
  category: string;
  date: string;
  readTime: string;
  views?: number;
  likes?: number;
  tags?: string[];
  featured?: boolean;
  createdAt: string;
}

interface BlogItemCardProps {
  post: BlogPost;
  index?: number;
  variant?: "default" | "featured" | "compact";
  showActions?: boolean;
  className?: string;
}

export default function BlogItemCard({
  post,
  index = 0,
  variant = "default",
  showActions = true,
  className = "",
}: BlogItemCardProps) {
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `/${post.slug}`,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/${post.slug}`);
    }
  };

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "featured":
        return {
          card: "md:flex md:flex-row bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200",
          image: "md:w-1/2 h-64 md:h-auto",
          content: "md:w-1/2 p-8",
          title: "text-2xl md:text-3xl",
        };
      case "compact":
        return {
          card: "flex flex-row",
          image: "w-32 h-24 flex-shrink-0",
          content: "flex-1 p-4",
          title: "text-lg",
        };
      default:
        return {
          card: "flex flex-col",
          image: "w-full h-48 sm:h-56",
          content: "p-6",
          title: "text-xl",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <article
      className={`
        group bg-white rounded-xl shadow-lg hover:shadow-2xl 
        transition-all duration-500 transform hover:-translate-y-2 
        overflow-hidden animate-fade-in-stagger border border-gray-100
        ${styles.card} ${className}
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Section */}
      <div
        className={`relative overflow-hidden ${
          variant === "featured" ? "md:rounded-l-xl" : "rounded-t-xl"
        }`}
      >
        <TransitionLink href={`/${post.slug}`} className="block">
          <div
            className={`relative ${styles.image} overflow-hidden aspect-video`}
          >
            <img
              src={post.image}
              alt={post.title}
              className={`
              w-full h-full object-cover transition-all duration-700 
              group-hover:scale-110 group-hover:brightness-110
              `}
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-lg border border-white/20">
                {post.category}
              </span>
            </div>

            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ HOT
                </span>
              </div>
            )}

            {/* Quick Actions Overlay */}
            {showActions && (
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-all duration-200 border border-white/20"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </TransitionLink>
      </div>

      {/* Content Section */}
      <div className={`${styles.content} flex flex-col justify-between flex-1`}>
        {/* Title */}
        <TransitionLink href={`/${post.slug}`}>
          <h3
            className={`
              ${styles.title} font-bold text-slate-900 mb-3 
              line-clamp-[1] group-hover:text-yellow-600 
              transition-colors duration-300 leading-tight capitalize
              text-sm sm:text-base md:text-lg lg:text-xl
            `}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.title}
          </h3>
        </TransitionLink>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm sm:text-base capitalize">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2  mb-4 flex-wrap whitespace-nowrap">
            {(Array.isArray(post.tags) ? post.tags : splitToArr(post.tags))
              .slice(0, 1)
              .map((tag, i) => (
                <span
                  key={i}
                  className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-yellow-100 hover:text-yellow-700 transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            {(Array.isArray(post.tags) ? post.tags : splitToArr(post.tags))
              .length > 2 && (
              <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                ...
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <button
              type="button"
              className="flex items-center gap-1 font-semibold px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200"
              onClick={() => {
                window.location.href = "tel:0906320679";
              }}
              title="Gọi ngay"
            >
              <span>Gọi ngay</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Read More Link */}
            <TransitionLink
              href={`/${post.slug}`}
              className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 font-medium transition-all duration-200 hover:gap-2 group/link"
            >
              <span>Đọc thêm</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </TransitionLink>
          </div>
        </div>
      </div>
    </article>
  );
}
