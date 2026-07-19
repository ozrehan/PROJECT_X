"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ShieldCheck, Zap, Heart } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";
import { useWishlistStore } from "@/lib/wishlistStore";
import { masterProducts } from "@/lib/products";

export default function CartItems() {
  const { items, updateQuantity, removeItem, loadCart } = useCartStore();
  const { toggleWishlist } = useWishlistStore();

  useEffect(() => {
    loadCart();
  }, []);

  if (items.length === 0) {
    return (
      <div className="bg-white border rounded-3xl p-12 text-center shadow-sm flex flex-col items-center">
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-2xl font-bold text-slate-800">Your cart is empty</h3>
        <p className="text-slate-500 mt-2 max-w-sm">
          Add items to your cart to begin shopping. Explore the latest collections and best sellers.
        </p>
        <Link
          href="/"
          className="mt-6 bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-slate-700 transition font-semibold"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
      {/* Table Header - hidden on small screens */}
      <div className="hidden md:grid grid-cols-12 px-8 py-5 bg-gray-50 border-b text-slate-700 text-sm font-semibold">
        <div className="col-span-6">Product</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Quantity</div>
        <div className="col-span-2 text-right">Total</div>
      </div>

      {/* Cart Items List */}
      <div className="divide-y divide-gray-100">
        {items.map((item) => {
          const itemTotal = item.price * item.quantity;
          return (
            <div
              key={`${item.id}-${item.size}-${item.color}`}
              className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-8 items-center gap-4 md:gap-0"
            >
              {/* Product Column */}
              <div className="col-span-1 md:col-span-6 flex gap-4 md:gap-5 items-start">
                <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-slate-50 rounded-xl relative overflow-hidden flex-shrink-0 border border-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-lg md:text-xl text-slate-900 hover:text-amber-600 transition">
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                  </h3>
                  <p className="text-slate-500 text-sm mt-0.5">By {item.store}</p>
                  <p className="text-slate-700 text-xs mt-2 bg-slate-100 w-fit px-2.5 py-1 rounded-md font-medium">
                    Size: {item.size} | Color: {item.color}
                  </p>

                  <div className="flex items-center gap-1.5 mt-3 text-emerald-600 text-xs font-semibold">
                    <Zap size={14} />
                    Delivery Tomorrow
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5 text-slate-400 text-xs">
                    <ShieldCheck size={14} />
                    7 Days Return & Exchange
                  </div>
                </div>
              </div>

              {/* Price Column */}
              <div className="col-span-1 md:col-span-2 flex md:block items-baseline gap-2">
                <span className="md:hidden text-slate-500 text-sm">Price:</span>
                <span className="font-bold text-xl md:text-2xl text-slate-950">
                  ₹{item.price}
                </span>
                <span className="line-through text-slate-400 text-xs block md:mt-1">
                  ₹{item.oldPrice}
                </span>
                <span className="text-red-500 text-xs font-semibold block md:mt-0.5">
                  {item.discount}
                </span>
              </div>

              {/* Quantity Column */}
              <div className="col-span-1 md:col-span-2 flex items-center md:block gap-4">
                <span className="md:hidden text-slate-500 text-sm">Qty:</span>
                <div>
                  <div className="flex border rounded-lg overflow-hidden w-fit bg-slate-50 border-gray-200">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                      className="p-2.5 hover:bg-slate-200 transition text-slate-600"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <div className="px-4 py-2 border-x border-gray-200 text-slate-800 text-sm font-semibold min-w-10 text-center">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                      className="p-2.5 hover:bg-slate-200 transition text-slate-600"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      const foundProduct = masterProducts.find((p) => p.id === item.id) || {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        oldPrice: item.oldPrice,
                        discount: item.discount,
                        store: item.store,
                        image: item.image,
                        sizes: [item.size],
                        colors: [item.color],
                        deliveryEstimate: "Delivery Tomorrow",
                        stockStatus: "In Stock" as const,
                        category: "Men" as const,
                        description: "",
                        highlights: [],
                        specs: [],
                        galleryImages: [item.image],
                        rating: 4.5,
                        reviews: 100,
                        labels: [],
                      };
                      toggleWishlist(foundProduct);
                      removeItem(item.id, item.size, item.color);
                    }}
                    className="text-amber-700 hover:text-amber-800 text-xs font-semibold mt-3 flex items-center gap-1 transition"
                  >
                    <Heart size={12} /> Move to Wishlist
                  </button>
                </div>
              </div>

              {/* Total Column */}
              <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center">
                <span className="md:hidden text-slate-500 text-sm">Total:</span>
                <div className="flex items-center gap-4 text-right">
                  <span className="font-bold text-xl md:text-2xl text-slate-950">
                    ₹{itemTotal}
                  </span>
                  <button
                    onClick={() => removeItem(item.id, item.size, item.color)}
                    className="text-slate-400 hover:text-rose-600 transition p-1"
                    aria-label="Remove item"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}