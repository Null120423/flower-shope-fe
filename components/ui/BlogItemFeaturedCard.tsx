import { ArrowRight, Calendar, Eye, Share2 } from "lucide-react";
import { BlogPost } from "./BlogItemCard";
import TransitionLink from "./TransitionLink";

interface BlogItemFeaturedCardProps {
  post: BlogPost;
  index?: number;
  variant?: "default" | "featured" | "compact";
  showActions?: boolean;
  className?: string;
}

export default function BlogItemFeaturedCard({
  post,
  index = 0,
  variant = "default",
  showActions = true,
  className = "",
}: BlogItemFeaturedCardProps) {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
    <TransitionLink
      href={`/${post.slug}`}
      className={`animate-slide-up block ${className}`}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[320px] lg:min-h-[360px]">
          {/* Image Section - Taking 5/12 of the grid on large screens */}
          <div className="relative lg:col-span-5 h-72 lg:h-auto overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/800x600?text=Image+Not+Available";
              }}
            />
            {/* Featured Badge with enhanced shadow and design */}
            <div className="absolute top-4 left-4 rotate-[-2deg]">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Nổi bật
              </span>
            </div>

            {/* Overlay gradient for better visual effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

            {/* Category displayed on image for better visibility on mobile */}
            <div className="absolute bottom-4 left-4 lg:hidden">
              <span className="bg-white/90 backdrop-blur-sm text-yellow-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-md">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content Section - Taking 7/12 of the grid on large screens */}
          <div className="p-6 lg:p-8 flex flex-col justify-between lg:col-span-7 relative">
            {/* Top content area */}
            <div>
              {/* Category and View Count - Hidden on small screens as it's shown on the image */}
              <div className="hidden lg:flex items-center gap-4 mb-4">
                <span className="bg-yellow-50 text-yellow-800 px-3 py-1.5 rounded-lg text-sm font-semibold border border-yellow-100">
                  {post.category}
                </span>
                {post.views && (
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{post.views.toLocaleString()} lượt xem</span>
                  </div>
                )}
              </div>

              {/* Title with improved typography */}
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt with better spacing and line clamping */}
              <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 lg:line-clamp-4 text-base">
                {post.excerpt}
              </p>
            </div>

            {/* Bottom action area with flexible layout */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Date and additional metadata */}
              <div className="flex items-center flex-wrap gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
              </div>

              {/* Read more button with enhanced hover effect */}
              <button className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold transition-all duration-300 hover:gap-3 group bg-yellow-50 hover:bg-yellow-100 px-4 py-2 rounded-full self-start sm:self-center">
                Đọc tiếp
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Share button (optional) - positioned in top right */}
            {showActions && (
              <button
                onClick={handleShare}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-full transition-colors"
                aria-label="Share post"
              >
                <Share2 className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </TransitionLink>
  );
}
