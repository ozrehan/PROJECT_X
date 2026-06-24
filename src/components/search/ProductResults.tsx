"use client";

import Image from "next/image";
import { Heart, Truck, Sparkles, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Black Formal Shirt",
    subtitle: "Fashion Hub",
    price: 799,
    oldPrice: 1299,
    discount: "38% OFF",
    rating: 4.6,
    reviews: 1200,
    labels: ["Best Seller"],
    image: "/images/products/shirt.jpeg",
  },
  {
    id: 2,
    name: "Black Premium Shirt",
    subtitle: "Urban Tribe",
    price: 699,
    oldPrice: 999,
    discount: "30% OFF",
    rating: 4.5,
    reviews: 890,
    labels: ["30% OFF"],
    image: "/images/products/shirt.jpeg",
  },
  {
    id: 3,
    name: "Black Slim Fit Shirt",
    subtitle: "Street Style",
    price: 749,
    oldPrice: 1199,
    discount: "37% OFF",
    rating: 4.7,
    reviews: 2100,
    labels: ["Fast Delivery"],
    image: "/images/bestsellers/cargo-pant.jpeg",
  },
  {
    id: 4,
    name: "Black Casual Shirt",
    subtitle: "Ethnic Villa",
    price: 649,
    oldPrice: 999,
    discount: "35% OFF",
    rating: 4.4,
    reviews: 760,
    labels: ["New"],
    image: "/images/bestsellers/casual-shirt.jpeg",
  },
  {
    id: 5,
    name: "Black Cotton Shirt",
    subtitle: "Fashion Hub",
    price: 799,
    oldPrice: 1299,
    discount: "38% OFF",
    rating: 4.6,
    reviews: 1130,
    labels: ["Best Seller"],
    image: "/images/bestsellers/linen-shirt.jpeg",
  },
  {
    id: 6,
    name: "Black Linen Shirt",
    subtitle: "Urban Tribe",
    price: 899,
    oldPrice: 1299,
    discount: "31% OFF",
    rating: 4.5,
    reviews: 680,
    labels: ["Fast Delivery"],
    image: "/images/bestsellers/linen-shirt.jpeg",
  },
  {
    id: 7,
    name: "Black Striped Shirt",
    subtitle: "Street Style",
    price: 599,
    oldPrice: 799,
    discount: "25% OFF",
    rating: 4.4,
    reviews: 650,
    labels: ["25% OFF"],
    image: "/images/products/tshirt.jpeg",
  },
  {
    id: 8,
    name: "Black Oversized Shirt",
    subtitle: "Urban Tribe",
    price: 549,
    oldPrice: 899,
    discount: "39% OFF",
    rating: 4.3,
    reviews: 920,
    labels: ["Best Seller"],
    image: "/images/products/jacket.jpeg",
  },
  {
    id: 9,
    name: "Black Mandarin Shirt",
    subtitle: "Ethnic Villa",
    price: 699,
    oldPrice: 1099,
    discount: "36% OFF",
    rating: 4.6,
    reviews: 480,
    labels: ["New"],
    image: "/images/bestsellers/cotton-kurta.jpeg",
  },
  {
    id: 10,
    name: "Black Printed Shirt",
    subtitle: "Street Style",
    price: 699,
    oldPrice: 999,
    discount: "30% OFF",
    rating: 4.5,
    reviews: 720,
    labels: ["Fast Delivery"],
    image: "/images/products/shirt.jpeg",
  },
];

export default function ProductResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "black shirt";
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalProducts = 1248;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="flex-1">
      <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
        <div className="mb-4 text-sm text-slate-500">
          Home / Search / <span className="font-semibold text-slate-900">"{query}"</span>
        </div>

        <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm text-slate-500">Showing results for</p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Results for “{query}”</h1>
            <p className="mt-2 text-sm text-slate-500">(1,248 products found)</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-slate-500" htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              aria-label="Sort products"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            >
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3 overflow-x-auto py-2">
          {['All', 'Men', 'Women', 'Topwear', 'Shirts', 'T-Shirts', 'Formal Shirts', 'More'].map((label, index) => (
            <button key={index} className={`rounded-full border px-4 py-2 text-sm transition ${label === 'All' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-slate-900'}`}>
              {label}
            </button>
          ))}
        </div>

        <div className="mb-6 rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm text-emerald-700 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-slate-700">
            <Truck size={18} />
            <span>Fast Delivery available on 568 products</span>
          </div>
          <span className="font-semibold text-slate-900">Order within 2h 30m for delivery today</span>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
              <div className="relative overflow-hidden bg-white">
                <div className="absolute left-4 top-4 flex gap-2">
                  {product.labels.map((label) => (
                    <span key={label} className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      {label}
                    </span>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product.id);
                  }}
                  aria-label={wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                  className={`absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white p-2 shadow-sm transition ${wishlist.includes(product.id) ? 'text-rose-600' : 'text-slate-500 hover:text-rose-600'}`}
                >
                  <Heart size={18} fill={wishlist.includes(product.id) ? 'red' : 'none'} />
                </button>
                <div className="relative h-72 w-full p-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
                  <span>{product.subtitle}</span>
                  <span className="font-semibold text-amber-600">{product.discount}</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <span key={size} className="rounded-full border border-slate-200 px-2 py-1">{size}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-bold text-slate-900">₹{product.price}</p>
                    <p className="text-sm line-through text-slate-400">₹{product.oldPrice}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-amber-600">
                    <BadgeCheck size={16} />
                    <span>{product.rating} ★</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Sparkles size={16} className="text-emerald-600" />
                  <span>Delivery Today</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalProducts)} of {totalProducts} results</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              ← Prev
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    currentPage === page
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              );
            })}
            {totalPages > 5 && (
              <>
                <span className="text-slate-500">...</span>
                <button
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
