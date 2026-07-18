"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useEffect } from "react";
import { useWishlistStore } from "@/lib/wishlistStore";
import { masterProducts } from "@/lib/products";

const products = [
  {
    name: "Black Formal Shirt",
    store: "Fashion Hub",
    price: "799",
    image: "/images/products/shirt.jpeg",
  },
  {
    name: "Floral Dress",
    store: "Miss Boutique",
    price: "1199",
    image: "/images/products/dress.jpeg",
  },
  {
    name: "Denim Jacket",
    store: "Urban Tribe",
    price: "1299",
    image: "/images/products/jacket.jpeg",
  },
  {
    name: "Printed Kurta",
    store: "Ethnic Villa",
    price: "999",
    image: "/images/products/kurta.jpeg",
  },
  {
    name: "Oversized T-Shirt",
    store: "Street Style",
    price: "549",
    image: "/images/products/tshirt.jpeg",
  },
  {
    name: "Sneakers White",
    store: "Urban Tribe",
    price: "1999",
    image: "/images/products/shoe.jpeg",
  },
];

export default function TrendingNow() {
  const { toggleWishlist, inWishlist, loadWishlist } = useWishlistStore();

  useEffect(() => {
    loadWishlist();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">

      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl">
          TRENDING NOW
        </h2>

        <button>
          View all →
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-3 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-5 snap-x snap-mandatory no-scrollbar">

        {products.map((product, index) => {
          const masterProduct = masterProducts.find((p) => p.name === product.name) || {
            id: 200 + index,
            name: product.name,
            store: product.store,
            price: Number(product.price),
            oldPrice: Number(product.price) * 1.5,
            discount: "33% OFF",
            rating: 4.5,
            reviews: 80,
            labels: [],
            image: product.image,
            sizes: ["S", "M", "L", "XL"],
            colors: ["Black"],
            deliveryEstimate: "Delivery Today",
            stockStatus: "In Stock" as const
          };

          return (
            <Link
              href={`/search?q=${encodeURIComponent(product.name)}`}
              key={product.name}
              className="group cursor-pointer min-w-[120px] sm:min-w-[140px] md:min-w-0 flex-shrink-0 snap-start block"
            >
              <div className="bg-gray-50 rounded-2xl p-4 relative">
                <button
                  className={`absolute top-3 right-3 bg-white rounded-full p-2 shadow transition active:scale-95 z-10 ${
                    inWishlist(masterProduct.id) ? "text-rose-600 animate-pulse" : "text-slate-500 hover:text-rose-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWishlist(masterProduct);
                  }}
                >
                  <Heart size={16} fill={inWishlist(masterProduct.id) ? "red" : "none"} />
                </button>

              <div className="h-32 sm:h-40 md:h-48 flex items-center justify-center">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={140}
                  height={140}
                  className="object-contain group-hover:scale-105 transition"
                />

              </div>

            </div>

            <h3 className="mt-3 font-medium text-sm text-black">
              {product.name}
            </h3>

            <p className="text-gray-500 text-xs">
              {product.store}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="font-bold text-black">
                ₹{product.price}
              </span>

              <span className="text-red-500 text-xs">
                35% OFF
              </span>
            </div>

            <p className="text-green-600 text-xs mt-2">
              ⚡ Delivery Today
            </p>

          </Link>
          );
        })}

      </div>

    </section>
  );
}