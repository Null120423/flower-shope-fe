import HomeView from "@/components/pages/home";
import { KEYWORDS, LOGO, META_TITLE, USER_DATA } from "@/lib/data";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // Comprehensive fallback metadata
  return {
    title: USER_DATA.fullName + " - Tư vấn bất động Hàng Đầu",
    description: META_TITLE,
    keywords: [...KEYWORDS, USER_DATA.fullName],
    openGraph: {
      title: USER_DATA.fullName + " - Tư vấn bất động Hàng Đầu",
      description: META_TITLE,
      images: [USER_DATA.avatar, LOGO],
      url: "/",
      siteName: USER_DATA.fullName + " - Bất Động Sản",
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: USER_DATA.fullName + " - Bất Động Sản",
      description: META_TITLE,
      images: [USER_DATA.avatar],
    },
  };
}

export default async function HomePage() {
  return (
    <>
      {/* SALE Structured Data */}
      {/* <StructuredData type="website" />
      <StructuredData type="person" />
      <StructuredData type="organization" /> */}
      <HomeView />
    </>
  );
}
