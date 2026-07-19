"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useEffect } from "react";
import { useWishlistStore } from "@/lib/wishlistStore";
import { masterProducts } from "@/lib/products";

export default function BestSellers() {
  const { toggleWishlist, inWishlist, loadWishlist } = useWishlistStore();

  useEffect(() => {
    loadWishlist();
  }, []);

  // Filter or select the products we want to showcase as Best Sellers
  const bestSellers = masterProducts.filter((p) => 
    p.labels.includes("Best Seller") || p.rating >= 4.6
  ).slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold uppercase tracking-wide">
          BEST SELLERS
        </h2>
        <Link href="/products" className="font-medium hover:text-amber-600 transition">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {bestSellers.map((product) => {
          return (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group cursor-pointer block"
            >
              <div className="bg-gray-50 rounded-2xl p-4 relative border border-gray-100 hover:border-amber-200 transition">
                <button
                  className={`absolute top-3 right-3 bg-white p-2 rounded-full shadow transition active:scale-95 z-10 ${
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

                <div className="h-64 flex items-center justify-center relative overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              <h3 className="mt-3 font-medium text-black group-hover:text-amber-600 transition line-clamp-1">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {product.store}
              </p>

              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className="font-bold text-xl text-black">
                  ₹{product.price}
                </span>

                <span className="line-through text-gray-400 text-sm">
                  ₹{product.oldPrice}
                </span>

                <span className="text-red-500 text-sm font-semibold">
                  {product.discount}
                </span>
              </div>

              <p className="text-yellow-500 mt-2 text-sm flex items-center gap-1">
                ⭐ {product.rating} <span className="text-gray-400 text-xs">({product.reviews})</span>
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}