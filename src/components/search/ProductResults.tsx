"use client";

import Image from "next/image";
import { Heart, Truck, Sparkles, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useWishlistStore } from "@/lib/wishlistStore";
import { masterProducts } from "@/lib/products";

export default function ProductResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { toggleWishlist, loadWishlist, inWishlist } = useWishlistStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    loadWishlist();
  }, []);

  // Filter products based on search query
  const filteredProducts = masterProducts.filter((product) => {
    if (!query) return true;
    const term = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      product.store.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.subcategory?.toLowerCase().includes(term)
    );
  });

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  
  // Slice for pagination
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="flex-1 animate-fadeIn">
      <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
        <div className="mb-4 text-sm text-slate-500">
          Home / Search / <span className="font-semibold text-slate-900">"{query || "All Products"}"</span>
        </div>

        <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm text-slate-500">Showing results for</p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Results for “{query || "All Products"}”
            </h1>
            <p className="mt-2 text-sm text-slate-500">({totalProducts} products found)</p>
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
          {['All', 'Men', 'Women', 'Topwear', 'Shirts', 'T-Shirts', 'Ethnic Wear'].map((label, index) => {
            const isActive = label === 'All' && !query || query.toLowerCase() === label.toLowerCase();
            return (
              <Link 
                key={index}
                href={label === 'All' ? '/search' : `/search?q=${encodeURIComponent(label)}`}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive 
                    ? 'border-amber-500 bg-amber-50 text-amber-700 font-medium' 
                    : 'border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-slate-900'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="mb-6 rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm text-emerald-700 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-slate-750 font-medium">
            <Truck size={18} className="text-emerald-600" />
            <span>Fast Delivery available on major items</span>
          </div>
          <span className="font-semibold text-slate-900">Order within 2h 30m for delivery today</span>
        </div>

        {totalProducts === 0 ? (
          <div className="text-center py-20 border border-dashed border-slate-200 rounded-3xl">
            <span className="text-5xl">🔍</span>
            <h2 className="text-xl font-bold text-slate-700 mt-4">No Matches Found</h2>
            <p className="text-slate-500 mt-2">We couldn't find any products matching your query. Try searching for "shirt", "jeans" or "kurta".</p>
            <Link href="/search" className="inline-block mt-6 bg-slate-950 text-white px-6 py-2.5 rounded-xl text-sm font-semibold">
              Clear Search
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
            {paginatedProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`} 
                className="group block overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200 flex flex-col justify-between"
              >
                <div className="relative overflow-hidden bg-white aspect-[4/5]">
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2 z-10">
                    {product.labels.map((label) => (
                      <span key={label} className="rounded-full bg-slate-900 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                        {label}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    aria-label={inWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                    className={`absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white p-2 shadow-sm transition active:scale-95 ${
                      inWishlist(product.id) ? 'text-rose-600' : 'text-slate-500 hover:text-rose-600'
                    }`}
                  >
                    <Heart size={18} fill={inWishlist(product.id) ? 'red' : 'none'} />
                  </button>
                  
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="space-y-3 p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
                      <span>{product.store}</span>
                      <span className="font-semibold text-amber-600">{product.discount}</span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-950 mt-1 line-clamp-1 group-hover:text-amber-600 transition">
                      {product.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mt-2">
                      {product.sizes.slice(0, 4).map((size) => (
                        <span key={size} className="rounded-md border border-slate-200 px-1.5 py-0.5">{size}</span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 mt-2">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-base font-extrabold text-slate-900">₹{product.price}</p>
                        <p className="text-xs line-through text-slate-400">₹{product.oldPrice}</p>
                      </div>
                      <div className="flex items-center gap-0.5 text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-lg">
                        <BadgeCheck size={14} />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-emerald-600 mt-3 font-medium">
                      <Sparkles size={14} />
                      <span>{product.deliveryEstimate}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalProducts)} of {totalProducts} results
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => {
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
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
