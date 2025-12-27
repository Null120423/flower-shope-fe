import { ROUTES } from "@/routes/routes";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import { FlowerPost } from "../pages/home/post-lst";
import TransitionLink from "../ui/TransitionLink";

const PostCard = ({ post, index }: { post: FlowerPost; index: number }) => {
  const isTop = index % 2 == 0;
  return (
    <div className="relative cursor-pointer group">
      {isTop && (
        <div className="w-full h-32 flex justify-center flex-col gap-2 items-center animate-slide-down">
          <h2 className="font-semibold text-primary transition-colors duration-300 group-hover:text-teal-600">
            {post.title}
          </h2>
          <ArrowUp className="w-8 h-16 text-primary/30 transition-all duration-500 group-hover:text-primary group-hover:animate-bounce" />
        </div>
      )}
      <div className="rounded-lg relative overflow-hidden  hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={900}
          className="rounded-lg h-[30rem] object-contain transition-transform duration-700 group-hover:scale-110"
        />
        <div className="flex-col justify-end absolute transition-all duration-500 hover:backdrop-blur-sm bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 rounded-lg p-6 inset-0 flex items-end transform translate-y-4 hover:translate-y-0">
          <p className="text-white font-medium mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {post.description}
          </p>
          <TransitionLink
            href={ROUTES.PUBLIC_ROUTES.BLOG_DETAIL(post?.slug)}
            className="text-white underline hover:text-primary transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-200 flex items-center gap-2 group/btn"
          >
            Read more
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </TransitionLink>
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-200 ease-out"></div>
      </div>
      {!isTop && (
        <div className="w-full h-32 flex justify-center flex-col gap-2 items-center animate-slide-up">
          <ArrowDown className="w-8 h-16 text-primary/30 transition-all duration-500 group-hover:text-primary group-hover:animate-bounce" />
          <h2 className="font-semibold text-primary transition-colors duration-300 group-hover:text-teal-600">
            {post.title}
          </h2>
        </div>
      )}
    </div>
  );
};

export default PostCard;
