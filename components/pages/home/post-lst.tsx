"use client";
import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
interface FlowerPost {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  readTime: string;
  views: number;
  likes: number;
  featured?: boolean;
}

export default function PostList() {
  const posts: FlowerPost[] = [
    {
      id: 1,
      title: "Spring Arrangements",
      category: "Seasonal",
      description:
        "Discover the beauty of spring with our vibrant seasonal flower arrangements that bring life to any space.",
      image: "/4.png",
      readTime: "5 min read",
      views: 1200,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      title: "Wedding Bouquets",
      category: "Bridal",
      description:
        "Create unforgettable moments with our expertly crafted wedding bouquets designed for your special day.",
      image: "/2.png",
      readTime: "8 min read",
      views: 2400,
      likes: 156,
    },
    {
      id: 3,
      title: "Care Tips Guide",
      category: "Tutorial",
      description:
        "Learn essential flower care techniques to keep your arrangements fresh and beautiful for longer.",
      image: "/3.png",
      readTime: "6 min read",
      views: 980,
      likes: 73,
      featured: true,
    },
    {
      id: 4,
      title: "Rose Collection",
      category: "Premium",
      description:
        "Explore our exquisite rose collection featuring rare varieties and classic favorites in stunning colors.",
      image: "/1.png",
      readTime: "4 min read",
      views: 1800,
      likes: 124,
    },
    {
      id: 5,
      title: "Corporate Events",
      category: "Business",
      description:
        "Transform your corporate events with our professional floral arrangements and decoration services.",
      image: "/5.png",
      readTime: "7 min read",
      views: 650,
      likes: 45,
    },
  ];

  const categoryColors: { [key: string]: string } = {
    Seasonal: "bg-green-500",
    Bridal: "bg-pink-500",
    Tutorial: "bg-blue-500",
    Premium: "bg-purple-500",
    Business: "bg-orange-500",
  };

  return (
    <section className="bg-gradient-to-br from-bg-primary to-bg-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-primary/30 flex-1 max-w-32 animate-slide-in-left"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary px-8 animate-slide-up">
              Want to learn{" "}
              <span className="text-teal-600 italic animate-pulse-slow">
                Flower Care
              </span>
              ?
            </h2>
            <div className="h-px bg-primary/30 flex-1 max-w-32 animate-slide-in-right"></div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
          {posts?.slice(0, 4).map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-stagger"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ItemCard post={post} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 m-auto w-full justify-center items-center flex animate-fade-in-delay">
          <button className="underline flex justify-center items-center gap-2 text-lg px-8 py-4 hover:text-primary hover:font-semibold transition-all duration-300 hover:scale-105 hover:gap-3 group">
            View All Flower Care Tips
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

{
  /* Custom CSS animations */
}
<style jsx global>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulseSlow {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.8s ease-out;
  }

  .animate-fade-in-stagger {
    animation: fadeIn 0.6s ease-out both;
  }

  .animate-fade-in-delay {
    animation: fadeIn 0.8s ease-out 1.2s both;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease-out 0.3s both;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out 0.3s both;
  }

  .animate-slide-up {
    animation: slideUp 0.6s ease-out 0.2s both;
  }

  .animate-slide-down {
    animation: slideDown 0.6s ease-out 0.4s both;
  }

  .animate-pulse-slow {
    animation: pulseSlow 3s ease-in-out infinite;
  }

  /* Prevent animation on page load for better performance */
  .prefers-reduced-motion .animate-fade-in,
  .prefers-reduced-motion .animate-slide-in-left,
  .prefers-reduced-motion .animate-slide-in-right,
  .prefers-reduced-motion .animate-slide-up,
  .prefers-reduced-motion .animate-slide-down {
    animation: none;
  }
`}</style>;

const ItemCard = ({ post, index }: { post: FlowerPost; index: number }) => {
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
            href={`post/${post.id}`}
            className="text-white underline hover:text-yellow-300 transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-200 flex items-center gap-2 group/btn"
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
