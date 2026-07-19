"use client";

import { useState } from "react";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/cartStore";
import { useRouter } from "next/navigation";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "M");
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "Black");
  const [addedMessage, setAddedMessage] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      discount: product.discount,
      store: product.store,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    });
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      discount: product.discount,
      store: product.store,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    });
    router.push("/cart");
  };

  return (
    <section className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      {product.labels && product.labels.length > 0 && (
        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
          {product.labels[0]}
        </div>
      )}

      <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
        {product.name}
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px]">
        {product.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
          <Star size={16} fill="currentColor" />
          {product.rating}
        </div>
        <span className="text-sm text-slate-500">{product.reviews} reviews</span>
        <span className="text-sm text-slate-500">• {product.store}</span>
      </div>

      <div className="mt-6 flex flex-wrap items-end gap-3">
        <span className="text-3xl font-bold text-slate-900">₹{product.price}</span>
        <span className="text-base text-slate-400 line-through">₹{product.oldPrice}</span>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          {product.discount}
        </span>
      </div>

      {product.colors && product.colors.length > 0 && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold text-slate-700">Color</p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedColor === color
                    ? "border-amber-500 bg-amber-500 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-amber-500 hover:text-amber-600"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.sizes && product.sizes.length > 0 && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold text-slate-700">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-12 rounded-full border px-3 py-2 text-sm font-medium transition ${
                  selectedSize === size
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-900"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleBuyNow}
          className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 active:scale-[0.98]"
        >
          Buy now
        </button>
        <button
          onClick={handleAddToCart}
          className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-600 active:scale-[0.98]"
        >
          Add to bag
        </button>
      </div>

      {addedMessage && (
        <div className="mt-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl p-3 text-center font-medium animate-fadeIn">
          ✓ Added to bag successfully!
        </div>
      )}

      <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
        <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3">
          <Truck size={16} className="text-amber-600 animate-bounce" />
          Fast delivery
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3">
          <ShieldCheck size={16} className="text-amber-600" />
          Secure pay
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3">
          <RotateCcw size={16} className="text-amber-600 animate-spin-slow" />
          Easy returns
        </div>
      </div>
    </section>
  );
}