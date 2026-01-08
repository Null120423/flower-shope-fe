"use client";
import { ButtonPrimary } from "@/components/ui";
import TransitionLink from "@/components/ui/TransitionLink";
import { ROUTES } from "@/routes/routes";
import {
    ArrowLeft,
    Filter,
    Heart,
    ShoppingCart,
    Star,
    Trash2,
} from "lucide-react";
import { useState } from "react";

interface Flower {
	id: number;
	name: string;
	price: number;
	originalPrice?: number;
	rating: number;
	reviews: number;
	image: string;
	category: string;
	inStock: boolean;
	featured?: boolean;
}

const mockFavorites: Flower[] = [
	{
		id: 1,
		name: "Premium Red Roses",
		price: 49.99,
		originalPrice: 69.99,
		rating: 4.8,
		reviews: 128,
		image: "/images/rose.png",
		category: "Roses",
		inStock: true,
		featured: true,
	},
	{
		id: 2,
		name: "Sunflower Delight",
		price: 39.99,
		rating: 4.9,
		reviews: 95,
		image: "/images/sunflower.png",
		category: "Sunflowers",
		inStock: true,
	},
	{
		id: 3,
		name: "Lavender Dreams",
		price: 29.99,
		originalPrice: 34.99,
		rating: 4.7,
		reviews: 67,
		image: "/images/lavender.png",
		category: "Lavender",
		inStock: true,
	},
	{
		id: 4,
		name: "Tulip Collection",
		price: 34.99,
		rating: 4.6,
		reviews: 89,
		image: "/images/tulip.png",
		category: "Tulips",
		inStock: false,
	},
	{
		id: 5,
		name: "Orchid Elegance",
		price: 89.99,
		rating: 4.9,
		reviews: 156,
		image: "/images/orchid.png",
		category: "Orchids",
		inStock: true,
		featured: true,
	},
	{
		id: 6,
		name: "Peony Paradise",
		price: 54.99,
		rating: 4.8,
		reviews: 112,
		image: "/images/peony.png",
		category: "Peonies",
		inStock: true,
	},
	{
		id: 7,
		name: "Lily Bouquet",
		price: 44.99,
		rating: 4.7,
		reviews: 78,
		image: "/images/lily.png",
		category: "Lilies",
		inStock: true,
	},
	{
		id: 8,
		name: "Mixed Garden Flowers",
		price: 64.99,
		originalPrice: 79.99,
		rating: 4.8,
		reviews: 143,
		image: "/images/mixed.png",
		category: "Mixed",
		inStock: true,
	},
];

type SortType = "name" | "price-low" | "price-high" | "rating";

export default function FavouritePage() {
	const [favorites, setFavorites] = useState<Flower[]>(mockFavorites);
	const [sortBy, setSortBy] = useState<SortType>("name");
	const [showSortMenu, setShowSortMenu] = useState(false);

	const handleRemoveFavorite = (id: number) => {
		setFavorites(favorites.filter((flower) => flower.id !== id));
	};

	const handleAddToCart = (id: number) => {
		console.log("Add to cart:", id);
		// Add to cart logic here
	};

	const sortedFavorites = [...favorites].sort((a, b) => {
		switch (sortBy) {
			case "name":
				return a.name.localeCompare(b.name);
			case "price-low":
				return a.price - b.price;
			case "price-high":
				return b.price - a.price;
			case "rating":
				return b.rating - a.rating;
			default:
				return 0;
		}
	});

	const sortOptions = [
		{ value: "name" as SortType, label: "Name (A-Z)" },
		{ value: "price-low" as SortType, label: "Price: Low to High" },
		{ value: "price-high" as SortType, label: "Price: High to Low" },
		{ value: "rating" as SortType, label: "Highest Rated" },
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-8">
					<TransitionLink href={ROUTES.PUBLIC_ROUTES.PROFILE}>
						<button className="flex items-center gap-2 text-gray-600 hover:text-rose-500 mb-4 transition-colors">
							<ArrowLeft className="w-5 h-5" />
							Back to Profile
						</button>
					</TransitionLink>
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
						<div>
							<h1 className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2">
								My Favorite Flowers
							</h1>
							<p className="text-gray-600">
								{favorites.length} {favorites.length === 1 ? "item" : "items"}{" "}
								in your wishlist
							</p>
						</div>

						{/* Sort Dropdown */}
						<div className="relative">
							<button
								onClick={() => setShowSortMenu(!showSortMenu)}
								className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl hover:border-pink-200 transition-all duration-300 shadow-sm hover:shadow-md"
							>
								<Filter className="w-5 h-5 text-gray-600" />
								<span className="font-semibold text-gray-700">Sort By</span>
							</button>
							{showSortMenu && (
								<div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-10">
									{sortOptions.map((option) => (
										<button
											key={option.value}
											onClick={() => {
												setSortBy(option.value);
												setShowSortMenu(false);
											}}
											className={`w-full text-left px-4 py-3 hover:bg-pink-50 transition-colors ${
												sortBy === option.value
													? "bg-gradient-to-r from-pink-50 to-rose-50 text-rose-600 font-semibold"
													: "text-gray-700"
											}`}
										>
											{option.label}
										</button>
									))}
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Favorites Grid */}
				{sortedFavorites.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{sortedFavorites.map((flower, index) => (
							<div
								key={flower.id}
								className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
								style={{ animationDelay: `${index * 50}ms` }}
							>
								{/* Featured Badge */}
								{flower.featured && (
									<div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
										⭐ Featured
									</div>
								)}

								{/* Remove from Favorites Button */}
								<button
									onClick={() => handleRemoveFavorite(flower.id)}
									className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-110"
								>
									<Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
								</button>

								{/* Stock Badge */}
								{!flower.inStock && (
									<div className="absolute top-14 left-3 z-10 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
										Out of Stock
									</div>
								)}

								{/* Image Container */}
								<div
									className={`relative h-64 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center overflow-hidden ${
										!flower.inStock ? "opacity-60" : ""
									}`}
								>
									<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
									<span className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
										🌸
									</span>
								</div>

								{/* Content */}
								<div className="p-5">
									{/* Category */}
									<div className="mb-2">
										<span className="inline-block bg-pink-100 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full">
											{flower.category}
										</span>
									</div>

									{/* Name */}
									<h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-rose-500 transition-colors">
										{flower.name}
									</h3>

									{/* Rating */}
									<div className="flex items-center gap-2 mb-3">
										<div className="flex items-center gap-1">
											<Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
											<span className="text-sm font-semibold text-gray-700">
												{flower.rating}
											</span>
										</div>
										<span className="text-sm text-gray-500">
											({flower.reviews} reviews)
										</span>
									</div>

									{/* Price */}
									<div className="flex items-center gap-2 mb-4">
										<span className="text-2xl font-bold text-gray-800">
											${flower.price}
										</span>
										{flower.originalPrice && (
											<span className="text-sm text-gray-500 line-through">
												${flower.originalPrice}
											</span>
										)}
										{flower.originalPrice && (
											<span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
												{Math.round(
													((flower.originalPrice - flower.price) /
														flower.originalPrice) *
														100
												)}
												% OFF
											</span>
										)}
									</div>

									{/* Actions */}
									<div className="flex gap-2">
										<button
											onClick={() => handleAddToCart(flower.id)}
											disabled={!flower.inStock}
											className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 ${
												flower.inStock
													? "bg-gradient-to-r from-rose-400 to-pink-500 text-white hover:shadow-lg hover:scale-105"
													: "bg-gray-200 text-gray-500 cursor-not-allowed"
											}`}
										>
											<ShoppingCart className="w-5 h-5" />
											{flower.inStock ? "Add to Cart" : "Out of Stock"}
										</button>
										<button
											onClick={() => handleRemoveFavorite(flower.id)}
											className="px-4 py-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-all duration-300 hover:scale-105"
										>
											<Trash2 className="w-5 h-5" />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="bg-white rounded-3xl shadow-xl p-12 text-center animate-fade-in">
						<div className="mb-6">
							<Heart className="w-32 h-32 text-gray-300 mx-auto" />
						</div>
						<h3 className="text-3xl font-bold text-gray-600 mb-3">
							No favorites yet
						</h3>
						<p className="text-gray-500 mb-8 text-lg">
							You haven&apos;t added any flowers to your favorites yet.
							<br />
							Start exploring and save your favorite blooms!
						</p>
						<TransitionLink href={ROUTES.PUBLIC_ROUTES.SHOPPING}>
							<ButtonPrimary className="px-8">
								<ShoppingCart className="w-5 h-5" />
								Browse Flowers
							</ButtonPrimary>
						</TransitionLink>
					</div>
				)}

				{/* Stats Section */}
				{sortedFavorites.length > 0 && (
					<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-white rounded-3xl shadow-lg p-6 text-center">
							<div className="bg-gradient-to-br from-pink-100 to-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
							</div>
							<h3 className="text-3xl font-bold text-gray-800 mb-1">
								{favorites.length}
							</h3>
							<p className="text-gray-600">Total Favorites</p>
						</div>
						<div className="bg-white rounded-3xl shadow-lg p-6 text-center">
							<div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<ShoppingCart className="w-8 h-8 text-green-600" />
							</div>
							<h3 className="text-3xl font-bold text-gray-800 mb-1">
								{favorites.filter((f) => f.inStock).length}
							</h3>
							<p className="text-gray-600">In Stock</p>
						</div>
						<div className="bg-white rounded-3xl shadow-lg p-6 text-center">
							<div className="bg-gradient-to-br from-yellow-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
							</div>
							<h3 className="text-3xl font-bold text-gray-800 mb-1">
								{favorites.filter((f) => f.rating >= 4.7).length}
							</h3>
							<p className="text-gray-600">Highly Rated</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
