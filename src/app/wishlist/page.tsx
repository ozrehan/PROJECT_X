"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { useWishlistStore } from "@/lib/wishlistStore";
import { useCartStore } from "@/lib/cartStore";
import { masterProducts, Product } from "@/lib/products";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Eye,
  Star,
  Sparkles,
  ChevronRight,
  ShoppingBag,
  ArrowUpDown,
  Filter,
  X,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function WishlistPage() {
  const router = useRouter();
  const { wishlistItems, toggleWishlist, loadWishlist, clearWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);

  const [sortBy, setSortBy] = useState<"default" | "price-low" | "price-high" | "rating">("default");
  const [filterStore, setFilterStore] = useState<string>("all");
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  useEffect(() => {
    loadWishlist();
  }, []);

  const triggerToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => {
      setSuccessToast(null);
    }, 3000);
  };

  const handleRemove = (product: Product) => {
    toggleWishlist(product);
    triggerToast(`Removed "${product.name}" from your wishlist.`);
  };

  const handleMoveToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      discount: product.discount,
      store: product.store,
      image: product.image,
      size: product.sizes[0] || "M",
      color: product.colors[0] || "Black",
    });
    toggleWishlist(product);
    triggerToast(`Moved "${product.name}" to cart successfully!`);
  };

  const handleBuyNow = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      discount: product.discount,
      store: product.store,
      image: product.image,
      size: product.sizes[0] || "M",
      color: product.colors[0] || "Black",
    });
    toggleWishlist(product);
    router.push("/cart");
  };

  // Get unique stores for filter option
  const stores = Array.from(new Set(wishlistItems.map((item) => item.store)));

  // Filter and Sort items
  let processedItems = [...wishlistItems];

  if (filterStore !== "all") {
    processedItems = processedItems.filter((item) => item.store === filterStore);
  }

  if (sortBy === "price-low") {
    processedItems.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortBy === "price-high") {
    processedItems.sort((a, b) => Number(b.price) - Number(a.price));
  } else if (sortBy === "rating") {
    processedItems.sort((a, b) => Number(b.rating) - Number(a.rating));
  }

  // Get recommendations (Trending items from master database that are not in the wishlist)
  const recommendations = masterProducts
    .filter((p) => !wishlistItems.some((w) => w.id === p.id))
    .slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen py-10">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8">
          
          {/* Success Toast */}
          {successToast && (
            <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-2xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white shadow-2xl animate-slideIn">
              <CheckCircle2 size={18} className="text-amber-400" />
              <span>{successToast}</span>
            </div>
          )}

          {/* Breadcrumbs */}
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-black">Wishlist</span>
          </div>

          {/* Header */}
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-slate-200 pb-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">My Wishlist</h1>
              <p className="mt-2 text-sm text-slate-600 font-medium">
                {wishlistItems.length === 0
                  ? "Your list is currently empty."
                  : `You have ${wishlistItems.length} saved ${wishlistItems.length === 1 ? "item" : "items"}.`}
              </p>
            </div>

            {wishlistItems.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {/* Sort control */}
                <div className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3 py-2 shadow-sm">
                  <ArrowUpDown size={15} className="text-slate-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-xs font-semibold text-slate-700 outline-none bg-transparent cursor-pointer"
                  >
                    <option value="default">Default Sort</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>

                {/* Filter control */}
                <div className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3 py-2 shadow-sm">
                  <Filter size={15} className="text-slate-400" />
                  <select
                    value={filterStore}
                    onChange={(e) => setFilterStore(e.target.value)}
                    className="text-xs font-semibold text-slate-700 outline-none bg-transparent cursor-pointer"
                  >
                    <option value="all">All Brands/Stores</option>
                    {stores.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear wishlist */}
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="rounded-xl border border-rose-200 bg-rose-50/50 hover:bg-rose-50 text-rose-600 px-4 py-2.5 text-xs font-bold transition duration-200"
                >
                  Clear Wishlist
                </button>
              </div>
            )}
          </div>

          {/* Confirm Clear Modal Overlay */}
          {showClearConfirm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="w-full max-w-sm rounded-[24px] bg-white p-6 shadow-2xl text-center">
                <AlertCircle size={40} className="mx-auto text-rose-500 mb-3" />
                <h3 className="text-lg font-bold text-slate-900">Clear Wishlist?</h3>
                <p className="text-xs text-slate-500 mt-2">Are you sure you want to remove all saved items from your wishlist? This cannot be undone.</p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="flex-1 rounded-xl border border-slate-200 bg-white py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      clearWishlist();
                      setShowClearConfirm(false);
                      triggerToast("Wishlist cleared successfully.");
                    }}
                    className="flex-1 rounded-xl bg-rose-600 py-3 text-xs font-bold text-white hover:bg-rose-500 transition"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Wishlist Main Area */}
          {processedItems.length === 0 ? (
            /* Empty Wishlist State */
            <div className="flex flex-col items-center justify-center py-20 text-center rounded-[32px] border border-dashed border-slate-300 bg-white p-8 shadow-sm">
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                <Heart size={44} className="animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Your Wishlist is Empty</h2>
              <p className="mx-auto max-w-md text-sm text-slate-500 mt-2 leading-relaxed">
                Save your favorite fashion items so you can find them easily later and check their stock status or price drops.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/products"
                  className="rounded-2xl bg-black px-6 py-3.5 text-xs font-bold text-white hover:bg-zinc-800 transition shadow-lg shadow-zinc-200"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/categories"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
          ) : (
            /* Wishlist Products Grid */
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {processedItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition duration-300"
                >
                  {/* Heart badge active toggle */}
                  <button
                    onClick={() => handleRemove(item)}
                    className="absolute right-4 top-4 z-10 rounded-full bg-white/95 p-2 shadow-md hover:scale-105 transition text-rose-600 active:scale-90"
                    aria-label="Remove from wishlist"
                  >
                    <Heart size={16} fill="red" />
                  </button>

                  {/* Product Image Panel */}
                  <div className="relative h-80 w-full overflow-hidden bg-slate-50 p-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition duration-500"
                    />

                    {/* Stock Status Badge */}
                    <div className="absolute left-4 top-4 flex flex-col gap-2">
                      {item.labels && item.labels.map((label) => (
                        <span key={label} className="rounded-full bg-slate-900 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                          {label}
                        </span>
                      ))}
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase ${
                          item.stockStatus === "Low Stock"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {item.stockStatus}
                      </span>
                    </div>

                    {/* Quick View Trigger Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300">
                      <button
                        onClick={() => setQuickViewProduct(item)}
                        className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-lg hover:scale-105 transition active:scale-95"
                      >
                        <Eye size={14} /> Quick View
                      </button>
                    </div>
                  </div>

                  {/* Card Content details */}
                  <div className="flex-1 p-5 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-slate-600">{item.store}</span>
                      <span className="font-bold text-emerald-600">{item.discount}</span>
                    </div>
                    
                    <h3 className="font-semibold text-slate-900 text-sm mb-2 group-hover:text-amber-700 transition">
                      {item.name}
                    </h3>

                    {/* Ratings */}
                    <div className="mb-3.5 flex items-center gap-1">
                      <div className="flex items-center text-amber-500">
                        <Star size={13} fill="currentColor" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700">{item.rating}</span>
                      <span className="text-[10px] text-slate-400">({item.reviews} reviews)</span>
                    </div>

                    {/* Sizes and Colors */}
                    <div className="mb-4 flex flex-wrap items-center gap-1">
                      <span className="text-[10px] text-slate-400 font-medium mr-1">Sizes:</span>
                      {item.sizes.map((sz) => (
                        <span key={sz} className="rounded-md border border-slate-100 bg-slate-50 px-1.5 py-0.5 text-[9px] font-bold text-slate-600">
                          {sz}
                        </span>
                      ))}
                    </div>

                    {/* Price grid */}
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="text-base font-bold text-slate-900">₹{item.price}</span>
                      <span className="text-xs text-slate-400 line-through">₹{item.oldPrice}</span>
                    </div>

                    {/* Delivery Estimate */}
                    <div className="mt-auto mb-4 border-t border-slate-100 pt-3 flex items-center gap-1.5 text-xs text-slate-500">
                      <Sparkles size={13} className="text-emerald-500 shrink-0" />
                      <span>{item.deliveryEstimate}</span>
                    </div>

                    {/* Buttons row */}
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleMoveToCart(item)}
                          className="flex-1 rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-xs font-bold transition flex items-center justify-center gap-1"
                        >
                          <ShoppingCart size={13} /> Move to Cart
                        </button>
                        <button
                          onClick={() => handleBuyNow(item)}
                          className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-3 py-2.5 text-xs font-bold transition"
                          title="Buy now"
                        >
                          Buy Now
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item)}
                        className="w-full rounded-xl border border-dashed border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-100 hover:bg-rose-50/30 py-2 text-[11px] font-semibold transition flex items-center justify-center gap-1"
                      >
                        <Trash2 size={12} /> Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Related Recommendations Section */}
          <div className="mt-20 border-t border-slate-200 pt-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">You May Also Like</h2>
                <p className="text-xs text-slate-500 mt-1">Recommended items based on your shopping interest</p>
              </div>
              <Link href="/products" className="text-xs font-bold text-black hover:text-amber-600 transition flex items-center gap-0.5">
                Explore More <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {recommendations.map((prod) => (
                <div
                  key={prod.id}
                  className="group relative flex flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white p-3 shadow-sm hover:shadow-lg transition duration-300"
                >
                  <button
                    onClick={() => toggleWishlist(prod)}
                    className="absolute right-4.5 top-4.5 z-10 rounded-full bg-white/95 p-1.5 shadow-md hover:scale-105 transition text-slate-500 hover:text-rose-600"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={14} />
                  </button>

                  <Link href={`/products/${prod.id}`} className="block relative h-48 w-full overflow-hidden bg-slate-50 rounded-xl mb-3">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition duration-500"
                    />
                  </Link>

                  <div className="flex-1 px-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-0.5">{prod.store}</span>
                    <h4 className="text-xs font-semibold text-slate-800 line-clamp-1 group-hover:text-amber-700 transition">{prod.name}</h4>
                    
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-xs font-bold text-slate-900">₹{prod.price}</span>
                      <span className="text-[10px] text-slate-400 line-through">₹{prod.oldPrice}</span>
                    </div>

                    <button
                      onClick={() => toggleWishlist(prod)}
                      className="mt-3.5 w-full rounded-xl bg-slate-950 hover:bg-slate-800 text-white py-2 text-[10px] font-bold transition flex items-center justify-center gap-1 shadow-sm shadow-slate-200"
                    >
                      <ShoppingBag size={11} /> Save to Wishlist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick View Modal Overlay */}
          {quickViewProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="relative w-full max-w-2xl rounded-[32px] bg-white p-6 shadow-2xl md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setQuickViewProduct(null)}
                  className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Left Column Image */}
                  <div className="relative h-72 md:h-96 w-full rounded-2xl bg-slate-50 p-4">
                    <Image
                      src={quickViewProduct.image}
                      alt={quickViewProduct.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Right Column Details */}
                  <div className="space-y-4">
                    <div className="text-[11px] font-bold tracking-[0.2em] text-amber-600 uppercase">
                      {quickViewProduct.store}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-slate-900">{quickViewProduct.name}</h2>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                        <Star size={14} fill="currentColor" /> {quickViewProduct.rating}
                      </div>
                      <span className="text-xs text-slate-500">({quickViewProduct.reviews} verified buyer reviews)</span>
                    </div>

                    <div className="flex items-baseline gap-2.5 py-1">
                      <span className="text-2xl font-bold text-slate-900">₹{quickViewProduct.price}</span>
                      <span className="text-sm text-slate-400 line-through">₹{quickViewProduct.oldPrice}</span>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                        {quickViewProduct.discount}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      Premium tailored silhouette crafted with high-quality weave for maximum breathability and style. Features standard details perfect for casual styling or layering.
                    </p>

                    {/* Details lists */}
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-700 mr-2">Available Sizes:</span>
                        <div className="flex gap-1.5 mt-1.5">
                          {quickViewProduct.sizes.map((s) => (
                            <span key={s} className="rounded-lg border border-slate-200 px-2 py-1 font-bold text-slate-600 bg-slate-50">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2">
                        <span className="font-semibold text-slate-700 mr-2">Color Variants:</span>
                        <div className="flex gap-1.5 mt-1.5">
                          {quickViewProduct.colors.map((c) => (
                            <span key={c} className="rounded-lg border border-slate-200 px-2.5 py-1 font-semibold text-slate-600 bg-white">{c}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Modal Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => {
                          handleMoveToCart(quickViewProduct);
                          setQuickViewProduct(null);
                        }}
                        className="flex-1 rounded-2xl bg-black py-3.5 text-xs font-bold text-white hover:bg-zinc-800 transition flex items-center justify-center gap-1 shadow-lg shadow-zinc-200"
                      >
                        <ShoppingCart size={14} /> Add to Cart
                      </button>
                      <button
                        onClick={() => {
                          handleBuyNow(quickViewProduct);
                          setQuickViewProduct(null);
                        }}
                        className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 py-3.5 text-xs font-bold text-slate-700 transition"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}