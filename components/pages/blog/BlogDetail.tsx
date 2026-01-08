"use client";
import WrapperView from "@/app/warpper-view";
import BlogCard, { BlogPost } from "@/components/common/BlogCard";
import TransitionLink from "@/components/ui/TransitionLink";
import { ROUTES } from "@/routes/routes";
import { Calendar, Clock, Heart, Share2, Tag, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const routes = [
  { label: "Trang chủ", href: ROUTES.PUBLIC_ROUTES.BLOG },
  { label: "Bài viết", href: ROUTES.PUBLIC_ROUTES.BLOG },
];
interface BlogDetailProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export default function BlogDetailView({ post, relatedPosts = [] }: BlogDetailProps) {
  const [isLiked, setIsLiked] = useState(false);

  const finalRoutes = [
    ...routes,
    { label: post.title, href: ROUTES.PUBLIC_ROUTES.BLOG_DETAIL(post.slug) },
  ];

  return (
    <WrapperView routes={finalRoutes}>
      {/* Featured Image */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </div>

      {/* Article Content */}
      <article className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="mb-8 animate-fade-in">
          {/* Category */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 px-4 py-2 rounded-full mb-4">
            <Tag className="w-4 h-4" />
            <span className="font-semibold">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-rose-400" />
              <span>{post.publishDate}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-400" />
                <span>{post.readTime}</span>
              </div>
            )}
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-rose-400" />
                <span>{post.author}</span>
              </div>
            )}
          </div>
        </header>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isLiked
                ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg"
                : "bg-white border-2 border-gray-200 text-gray-700 hover:border-pink-300"
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-white" : ""}`} />
            <span>{isLiked ? "Đã thích" : "Yêu thích"}</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-pink-300 transition-all duration-300">
            <Share2 className="w-5 h-5" />
            <span>Chia sẻ</span>
          </button>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            {/* Content sections */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <>
                  <p className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-rose-500 first-letter:mr-2 first-letter:float-left">
                    {post.excerpt}
                  </p>
                  
                  <p>
                    Hoa không chỉ đơn thuần là những cánh hoa xinh đẹp, mà còn là ngôn ngữ của tình yêu, 
                    sự quan tâm và những cảm xúc sâu sắc nhất. Mỗi loài hoa đều mang trong mình một ý nghĩa 
                    riêng biệt, một câu chuyện độc đáo đang chờ được kể.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                    Ý nghĩa của các loài hoa
                  </h2>

                  <p>
                    Trong thế giới hoa tươi, mỗi loài hoa đều có một thông điệp riêng. Hoa hồng đỏ 
                    tượng trưng cho tình yêu nồng cháy, hoa lan thể hiện sự thanh lịch và quý phái, 
                    còn hoa hướng dương mang đến năng lượng tích cực và niềm vui.
                  </p>

                  <blockquote className="border-l-4 border-rose-400 pl-6 py-2 my-8 italic text-gray-600 bg-gradient-to-r from-pink-50 to-rose-50 rounded-r-2xl">
                    "Hoa là bài thơ của thiên nhiên, và mỗi bông hoa là một vần điệu đẹp đẽ 
                    trong bản nhạc của cuộc sống."
                  </blockquote>

                  <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
                    Cách chăm sóc hoa tươi lâu
                  </h3>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cắt tỉa cuống hoa theo góc 45 độ mỗi 2-3 ngày</li>
                    <li>Thay nước sạch hàng ngày và thêm dinh dưỡng cho hoa</li>
                    <li>Đặt hoa ở nơi thoáng mát, tránh ánh nắng trực tiếp</li>
                    <li>Loại bỏ lá úa và cánh hoa héo để giữ hoa tươi lâu hơn</li>
                  </ul>

                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 my-8">
                    <h4 className="text-lg font-bold text-rose-600 mb-3">💡 Mẹo hay</h4>
                    <p className="text-gray-700">
                      Thêm một chút đường vào nước cắm hoa sẽ giúp hoa tươi lâu hơn, 
                      vì đường cung cấp năng lượng cho hoa tiếp tục nở và giữ màu sắc rực rỡ.
                    </p>
                  </div>

                  <p>
                    Việc chăm sóc hoa không chỉ giúp chúng tươi lâu mà còn là cách chúng ta 
                    thể hiện sự trân trọng với món quà tuyệt vời từ thiên nhiên. Hãy dành thời gian 
                    chăm sóc hoa của bạn, và chúng sẽ đem lại niềm vui và sự tươi mới cho không gian sống.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>


        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Bài viết liên quan</h2>
              <TransitionLink href={ROUTES.PUBLIC_ROUTES.BLOG}>
                <button className="text-rose-500 font-semibold hover:text-rose-600 transition-colors flex items-center gap-2">
                  Xem tất cả
                  <span>→</span>
                </button>
              </TransitionLink>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.id}
                  post={relatedPost}
                  index={index}
                  variant="default"
                />
              ))}
            </div>
          </div>
        )}
    
      </article>
    </WrapperView>
  );
}
