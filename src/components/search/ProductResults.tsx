"use client";

import Image from "next/image";
import { Heart, Truck, BadgeCheck, Star } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useWishlistStore } from "@/lib/wishlistStore";
import { useCartStore } from "@/lib/cartStore";
import { masterProducts } from "@/lib/products";
import toast from "react-hot-toast";

export default function ProductResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { toggleWishlist, loadWishlist, inWishlist } = useWishlistStore();
  const { addItem, loadCart } = useCartStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  useEffect(() => {
    loadWishlist();
    loadCart();
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
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-slate-200/80">
        <div className="mb-3 text-xs text-slate-500">
          Home / Search / <span className="font-semibold text-slate-900">"{query || "All Products"}"</span>
        </div>

        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-950">
              Results for “{query || "All Products"}”
            </h1>
            <p className="mt-1 text-xs text-slate-500">({totalProducts} products found)</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-slate-500" htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              aria-label="Sort products"
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 outline-none transition focus:border-amber-500"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* Quick Filter Tag Pills */}
        <div className="mb-5 flex flex-wrap items-center gap-2 overflow-x-auto py-1 no-scrollbar">
          {['All', 'Dresses', 'Kurtas', 'Sarees', 'Men', 'Women', 'Topwear', 'Shirts', 'T-Shirts', 'Ethnic Wear'].map((label, index) => {
            const isActive = label === 'All' && !query || query.toLowerCase() === label.toLowerCase();
            return (
              <Link 
                key={index}
                href={label === 'All' ? '/search' : `/search?q=${encodeURIComponent(label)}`}
                className={`rounded-full border px-3.5 py-1 text-xs font-medium transition ${
                  isActive 
                    ? 'border-amber-500 bg-amber-50 text-amber-800 font-bold shadow-xs' 
                    : 'border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-slate-900'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {totalProducts === 0 ? (
          <div className="text-center py-16 border border-dashed border-slate-200 rounded-3xl">
            <span className="text-4xl">🔍</span>
            <h2 className="text-lg font-bold text-slate-700 mt-3">No Matches Found</h2>
            <p className="text-xs text-slate-500 mt-1">We couldn't find any products matching your query. Try searching for "dress", "shirt", or "kurta".</p>
            <Link href="/search" className="inline-block mt-5 bg-slate-950 text-white px-5 py-2 rounded-xl text-xs font-semibold">
              Clear Search
            </Link>
          </div>
        ) : (
          /* High-Density Amazon-Style Grid Layout */
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
            {paginatedProducts.map((product) => (
              <div 
                key={product.id} 
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Image Container with compact aspect ratio */}
                  <Link href={`/products/${product.id}`} className="relative block aspect-[3/3.8] w-full overflow-hidden rounded-xl bg-slate-100 mb-2.5">
                    {product.labels[0] && (
                      <span className="absolute left-2 top-2 z-10 rounded-md bg-slate-900/90 backdrop-blur-sm px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wider text-white">
                        {product.labels[0]}
                      </span>
                    )}

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                      aria-label={inWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                      className={`absolute right-2 top-2 z-10 rounded-full border border-slate-200/80 bg-white/90 p-1.5 shadow-xs transition active:scale-95 ${
                        inWishlist(product.id) ? 'text-rose-600' : 'text-slate-400 hover:text-rose-600'
                      }`}
                    >
                      <Heart size={14} fill={inWishlist(product.id) ? 'red' : 'none'} />
                    </button>
                    
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 180px"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </Link>

                  {/* Store / Brand Name */}
                  <span className="text-[10px] font-extrabold text-slate-900 uppercase tracking-wider block mb-0.5 truncate">
                    {product.store}
                  </span>

                  {/* Title (2 lines max) */}
                  <Link href={`/products/${product.id}`}>
                    <h2 className="text-xs font-medium text-slate-800 line-clamp-2 leading-snug hover:text-amber-600 transition">
                      {product.name}
                    </h2>
                  </Link>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold mt-1">
                    <span className="flex items-center">
                      <Star size={11} className="fill-amber-400 text-amber-400" />
                      <span className="ml-0.5">{product.rating}</span>
                    </span>
                    <span className="text-slate-400 font-normal text-[10px]">({product.reviews})</span>
                  </div>

                  {/* Social Proof Subtext */}
                  <p className="text-[10px] text-slate-400 mt-0.5">100+ bought in past month</p>

                  {/* Price Row */}
                  <div className="flex items-baseline gap-1 mt-1.5 flex-wrap">
                    <span className="text-sm font-extrabold text-slate-950">₹{product.price}</span>
                    <span className="text-[10px] line-through text-slate-400">M.R.P: ₹{product.oldPrice}</span>
                    <span className="text-[10px] font-bold text-amber-700">({product.discount})</span>
                  </div>

                  {/* Delivery Tag */}
                  <p className="text-[10px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                    <Truck size={11} className="text-emerald-600" />
                    <span>FREE delivery Today</span>
                  </p>
                </div>

                {/* Yellow Amazon-Style Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      oldPrice: product.oldPrice,
                      discount: product.discount,
                      store: product.store,
                      image: product.image,
                      size: product.sizes[0] || 'M',
                      color: product.colors[0] || 'Default',
                    });
                    toast.success(`${product.name} added to cart!`);
                  }}
                  className="mt-3 w-full rounded-full bg-amber-400 hover:bg-amber-500 active:scale-95 py-1.5 text-xs font-bold text-black shadow-xs transition duration-150"
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalProducts)} of {totalProducts} results
            </p>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`rounded-lg px-2.5 py-1.5 text-xs transition ${
                      currentPage === page
                        ? "bg-slate-900 text-white font-bold"
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
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition"
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
