import { LOGO, META_TITLE, USER_DATA } from "@/lib/data";

interface StructuredDataProps {
  type?: "website" | "person" | "organization" | "article" | "product";
  data?: any;
}

export default function StructuredData({
  type = "website",
  data,
}: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const generateSchema = () => {
    switch (type) {
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: `${USER_DATA.fullName} `,
          url: baseUrl,
          description: META_TITLE,
          author: {
            "@type": "Person",
            name: USER_DATA.fullName,
            jobTitle: META_TITLE,
            url: baseUrl,
          },
          publisher: {
            "@type": "Organization",
            name: `${USER_DATA.fullName} - ` + META_TITLE,
            description: META_TITLE,
            logo: {
              "@type": "ImageObject",
              url: LOGO,
            },
          },
          potentialAction: {
            "@type": "SearchAction",
            target: `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        };

      case "person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: USER_DATA.fullName,
          jobTitle: META_TITLE,
          url: baseUrl,
          image: USER_DATA.avatar,
          description: META_TITLE,
          sameAs: [USER_DATA.facebookLink, USER_DATA.xLink].filter(Boolean),
          contactPoint: {
            "@type": "ContactPoint",
            telephone: USER_DATA.phoneNumber,
            contactType: "customer service",
            availableLanguage: ["Vietnamese", "English"],
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ho Chi Minh City",
            addressCountry: "VN",
          },
        };

      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: `${USER_DATA.fullName} - ` + META_TITLE,
          url: baseUrl,
          logo: LOGO,
          description: META_TITLE,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: USER_DATA.phoneNumber,
            contactType: "customer service",
            availableLanguage: ["Vietnamese", "English"],
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ho Chi Minh City",
            addressCountry: "VN",
          },
          sameAs: [USER_DATA.facebookLink, USER_DATA.xLink].filter(Boolean),
        };

      case "article":
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data.title,
          description: data.description,
          image: data.image,
          author: {
            "@type": "Person",
            name: USER_DATA.fullName,
          },
          publisher: {
            "@type": "Organization",
            name: `${USER_DATA.fullName} - ` + META_TITLE,
            logo: {
              "@type": "ImageObject",
              url: LOGO,
            },
          },
          datePublished: data.publishedAt,
          dateModified: data.updatedAt,
          url: `${baseUrl}/${data.slug}`,
        };

      case "product":
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          name: data.name,
          description: META_TITLE,
          image: data.images,
          brand: {
            "@type": "Brand",
            name: data.developer || USER_DATA.fullName,
          },
          offers: {
            "@type": "Offer",
            price: data.price,
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
            url: `${baseUrl}/project/${data.slug}`,
          },
          aggregateRating: data.rating
            ? {
                "@type": "AggregateRating",
                ratingValue: data.rating,
                reviewCount: data.reviewsCount || 1,
              }
            : undefined,
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
