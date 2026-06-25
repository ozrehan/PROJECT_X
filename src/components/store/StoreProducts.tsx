"use client";

import Image from "next/image";
import { Heart, Star, Zap } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Black Formal Shirt",
    store: "Fashion Hub",
    image: "/images/products/black-shirt.png",
    price: 799,
    oldPrice: 1299,
    discount: "38% OFF",
    rating: 4.6,
    delivery: "Delivery Today",
    badge: "Bestseller",
    badgeColor: "bg-yellow-500",
  },
  {
    id: 2,
    name: "Navy Blue Shirt",
    store: "Fashion Hub",
    image: "/images/products/navy-shirt.png",
    price: 699,
    oldPrice: 999,
    discount: "30% OFF",
    rating: 4.5,
    delivery: "Delivery Today",
    badge: "30% OFF",
    badgeColor: "bg-red-500",
  },
  {
    id: 3,
    name: "White Polo T-Shirt",
    store: "Fashion Hub",
    image: "/images/products/white-polo.png",
    price: 549,
    oldPrice: 799,
    discount: "31% OFF",
    rating: 4.4,
    delivery: "Delivery in 2 Hours",
    badge: "New",
    badgeColor: "bg-purple-600",
  },
  {
    id: 4,
    name: "Denim Jacket",
    store: "Fashion Hub",
    image: "/images/products/jacket.png",
    price: 1299,
    oldPrice: 1999,
    discount: "35% OFF",
    rating: 4.6,
    delivery: "Delivery Tomorrow",
    badge: "",
    badgeColor: "",
  },
  {
    id: 5,
    name: "Grey Hoodie",
    store: "Fashion Hub",
    image: "/images/products/hoodie.png",
    price: 899,
    oldPrice: 1299,
    discount: "31% OFF",
    rating: 4.8,
    delivery: "Delivery Today",
    badge: "Bestseller",
    badgeColor: "bg-yellow-500",
  },
  {
    id: 6,
    name: "Olive Green Shirt",
    store: "Fashion Hub",
    image: "/images/products/olive-shirt.png",
    price: 749,
    oldPrice: 1099,
    discount: "32% OFF",
    rating: 4.5,
    delivery: "Delivery Today",
    badge: "",
    badgeColor: "",
  },
];

export default function StoreProducts() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          All Products (1200+)
        </h2>

        <select className="border rounded-lg px-4 py-2">
          <option>Popularity</option>
          <option>Newest</option>
          <option>Price Low → High</option>
          <option>Price High → Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition"
          >

            <div className="relative bg-gray-100">

              {product.badge !== "" && (
                <span
                  className={`${product.badgeColor} absolute left-3 top-3 text-white text-xs px-3 py-1 rounded-full`}
                >
                  {product.badge}
                </span>
              )}

              <button className="absolute right-3 top-3 bg-white rounded-full p-2 shadow">

                <Heart size={18} />

              </button>

              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-72 object-contain"
              />

            </div>

            <div className="p-4">

              <h3 className="font-semibold text-lg">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {product.store}
              </p>

              <div className="flex items-center gap-2 mt-3">

                <span className="text-xl font-bold">
                  ₹{product.price}
                </span>

                <span className="line-through text-gray-400">
                  ₹{product.oldPrice}
                </span>

                <span className="text-red-500 text-sm">
                  {product.discount}
                </span>

              </div>

              <div className="flex items-center gap-2 mt-3">

                <Star
                  size={15}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span>{product.rating}</span>

              </div>

              <div className="flex items-center gap-2 text-green-600 mt-3">

                <Zap size={16} />

                <span className="text-sm">
                  {product.delivery}
                </span>

              </div>

              <div className="flex gap-2 mt-4">

                {["S","M","L","XL","XXL"].map((size)=>(
                  <button
                    key={size}
                    className="border rounded px-2 py-1 text-xs hover:bg-black hover:text-white"
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="flex justify-center mt-10">

        <button className="border rounded-xl px-8 py-3 hover:bg-black hover:text-white transition">

          View More Products

        </button>

      </div>

    </div>
  );
}