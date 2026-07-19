"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useWishlistStore } from "@/lib/wishlistStore";
import { Product } from "@/lib/products";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);
  const { toggleWishlist, inWishlist, loadWishlist } = useWishlistStore();

  useEffect(() => {
    loadWishlist();
  }, []);

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image];

  const showNext = () => setSelected((prev) => (prev + 1) % images.length);
  const showPrev = () =>
    setSelected((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-100 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] sm:p-3">
        {product.labels && product.labels.length > 0 && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-black/90 px-3 py-1 text-xs font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            {product.labels[0]}
          </div>
        )}

        <button
          aria-label={inWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggleWishlist(product)}
          className={`absolute right-3 top-3 z-10 rounded-full p-2 shadow-lg backdrop-blur transition hover:scale-105 active:scale-95 ${
            inWishlist(product.id) ? "bg-white text-rose-600 animate-pulse" : "bg-white/90 text-slate-700 hover:text-rose-600"
          }`}
        >
          <Heart size={18} fill={inWishlist(product.id) ? "red" : "none"} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={showPrev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur transition hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="text-slate-700" />
            </button>

            <button
              onClick={showNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur transition hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="text-slate-700" />
            </button>
          </>
        )}

        <div className="relative aspect-[4/5] w-full rounded-[22px] overflow-hidden">
          <Image
            src={images[selected]}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={img}
              onClick={() => setSelected(index)}
              aria-label={`View product preview ${index + 1}`}
              className={`shrink-0 overflow-hidden rounded-2xl border-2 relative h-[100px] w-[90px] ${
                selected === index ? "border-amber-500" : "border-gray-200"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
              />
            </button>
          ))}

          <button
            aria-label="Watch product video"
            className="flex h-[100px] w-[90px] shrink-0 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-xs font-medium text-gray-600 transition hover:bg-gray-100"
          >
            <Play size={20} />
            <span className="mt-2">Video</span>
          </button>
        </div>
      )}
    </div>
  );
}