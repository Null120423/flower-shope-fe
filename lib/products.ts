export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  bgColor: string;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  description?: string;
  category?: string;
}

export const PRODUCT_DATA: Product[] = [
  {
    id: 1,
    name: "Cute Corsage Flower",
    price: "$29.99",
    image: "/4.png",
    bgColor: "bg-pink-100",
    rating: 4.5,
    reviewCount: 23,
    description: "Perfect for special occasions and romantic gestures",
    category: "Corsage",
  },
  {
    id: 2,
    name: "Enchanted Garden Bouquet",
    price: "$79.99",
    image: "/3.png",
    bgColor: "bg-orange-200",
    featured: true,
    rating: 4.8,
    reviewCount: 45,
    description:
      "A magical mix of seasonal flowers that brings garden beauty indoors",
    category: "Bouquet",
  },
  {
    id: 3,
    name: "Luxury Sunshine Flower Box",
    price: "$99.99",
    image: "/1.png",
    bgColor: "bg-gray-100",
    rating: 4.9,
    reviewCount: 67,
    description: "Premium flower arrangement in an elegant presentation box",
    category: "Premium",
  },
  {
    id: 4,
    name: "Aesthetic Home Flowers",
    price: "$59.99",
    image: "/2.png",
    bgColor: "bg-pink-50",
    rating: 4.6,
    reviewCount: 34,
    description: "Modern and stylish arrangement perfect for home decoration",
    category: "Home Decor",
  },
  {
    id: 5,
    name: "Wedding Elegance",
    price: "$149.99",
    image: "/5.png",
    bgColor: "bg-purple-100",
    featured: true,
    rating: 5.0,
    reviewCount: 89,
    description:
      "Sophisticated bridal bouquet with white roses and baby's breath",
    category: "Wedding",
  },
  {
    id: 6,
    name: "Spring Celebration",
    price: "$45.99",
    image: "/1.png",
    bgColor: "bg-green-100",
    rating: 4.4,
    reviewCount: 28,
    description:
      "Bright and cheerful spring flowers to celebrate new beginnings",
    category: "Seasonal",
  },
];
