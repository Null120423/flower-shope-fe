import BlogDetailView from "@/components/pages/blog/BlogDetail";
import { mockBlogPosts } from "@/lib/mock/blog-posts";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog không tìm thấy | Flower Shop",
    };
  }

  return {
    title: `${post.title} | Flower Shop Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailView post={post} />;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return mockBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}
