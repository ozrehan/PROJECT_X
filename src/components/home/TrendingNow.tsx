"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useEffect } from "react";
import { useWishlistStore } from "@/lib/wishlistStore";
import { masterProducts } from "@/lib/products";

export default function TrendingNow() {
  const { toggleWishlist, inWishlist, loadWishlist } = useWishlistStore();

  useEffect(() => {
    loadWishlist();
  }, []);

  // Filter or select the products we want to showcase as Trending
  const trendingProducts = masterProducts.filter((p) => 
    p.labels.includes("Trending") || p.labels.includes("Popular") || p.id > 10
  ).slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl uppercase tracking-wide">
          TRENDING NOW
        </h2>
        <Link href="/products" className="font-medium hover:text-amber-600 transition">
          View all →
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-3 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-5 snap-x snap-mandatory no-scrollbar">
        {trendingProducts.map((product) => {
          return (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group cursor-pointer min-w-[150px] sm:min-w-[180px] md:min-w-0 flex-shrink-0 snap-start block"
            >
              <div className="bg-gray-50 rounded-2xl p-4 relative border border-gray-100 hover:border-amber-200 transition">
                <button
                  className={`absolute top-3 right-3 bg-white rounded-full p-2 shadow transition active:scale-95 z-10 ${
                    inWishlist(product.id) ? "text-rose-600 animate-pulse" : "text-slate-500 hover:text-rose-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                >
                  <Heart size={16} fill={inWishlist(product.id) ? "red" : "none"} />
                </button>

                <div className="h-36 sm:h-40 md:h-48 flex items-center justify-center relative overflow-hidden rounded-xl bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 150px"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              <h3 className="mt-3 font-medium text-sm text-black group-hover:text-amber-600 transition line-clamp-1">
                {product.name}
              </h3>

              <p className="text-gray-500 text-xs">
                {product.store}
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="font-bold text-black">
                  ₹{product.price}
                </span>

                <span className="text-red-500 text-xs font-semibold">
                  {product.discount}
                </span>
              </div>

              <p className="text-green-600 text-xs mt-2 font-medium">
                ⚡ {product.deliveryEstimate}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}