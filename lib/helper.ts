export const get = async (route: string, params?: {}) => {
  const queryString = new URLSearchParams(params).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${route}?${queryString}`,
    {
      next: { revalidate: 60 },
    }
  );

  // Kiểm tra response trước khi parse JSON
  const contentType = res.headers.get("content-type");
  if (!res.ok || !contentType?.includes("application/json")) {
    // Trả về lỗi rõ ràng hoặc fallback
    return {
      ok: false,
      status: res.status,
      statusText: res.statusText,
      contentType,
      text: await res.text(),
    };
  }

  return {
    ok: true,
    status: res.status,
    statusText: res.statusText,
    json: await res.json(),
  };
};
export const post = async (route: string, body: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
};

export function splitToArr(description?: string): string[] {
  return (
    description
      ?.split(/\n\n|\n|,|-/)
      .map((chunk) => chunk.trim())
      .filter((chunk) => chunk.length > 0) || []
  );
}
export const blogFormatData = (data: any) => {
  return {
    ...data,
    tags: splitToArr(data?.tags),
  };
};

export const formatDataProperty = (property: any) => {
  return {
    ...property,
    id: property.id,
    name: property.name,
    slug: property.slug,
    address: property.address,
    rating: property.rating,
    reviewsCount: property.reviewsCount,
    image: property.propertyImages?.[0]?.url,
    propertyImages: property.propertyImages,
    minArea: property.minArea,
    maxArea: property.maxArea,
    bedrooms: `${property.minBedrooms}${
      property.maxBedrooms !== property.minBedrooms
        ? `-${property.maxBedrooms}`
        : ""
    }`,
    bathrooms: `${property.minBathrooms}${
      property.maxBathrooms !== property.minBathrooms
        ? `-${property.maxBathrooms}`
        : ""
    }`,
    parkingSpaces: property.parkingSpaces,
    amenities: property.amenities,
    minPrice: property.minPrice,
    maxPrice: property.maxPrice,
    propertyType: property.propertyType,
    city: property.city,
    district: property.district,
    ward: property.ward,
    isFeatured: property.isFeatured,
    viewCount: property.viewCount,
    priority: property.priority,
    createdAt: property.createdAt,
    updatedAt: property.updatedAt,
  };
};

export class Helper {
  static formatCurrency(value: number, locale = "vi-VN", currency = "VND") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
  }
}
