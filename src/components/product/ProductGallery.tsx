"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight, Play } from "lucide-react";

const images = [
  "/images/products/shirt.jpeg",
  "/images/products/tshirt.jpeg",
  "/images/products/jacket.jpeg",
  "/images/products/kurta.jpeg",
];

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);

  const showNext = () => setSelected((prev) => (prev + 1) % images.length);
  const showPrev = () =>
    setSelected((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-100 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] sm:p-3">
        <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-black/90 px-3 py-1 text-xs font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          Bestseller
        </div>

        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur transition hover:scale-105"
        >
          <Heart size={18} className="text-slate-700" />
        </button>

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

        <Image
          src={images[selected]}
          alt="Selected clothing product"
          width={700}
          height={900}
          priority
          className="aspect-[4/5] w-full rounded-[22px] object-cover"
        />
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={img}
            onClick={() => setSelected(index)}
            aria-label={`View product preview ${index + 1}`}
            className={`shrink-0 overflow-hidden rounded-2xl border-2 ${
              selected === index ? "border-amber-500" : "border-gray-200"
            }`}
          >
            <Image
              src={img}
              alt=""
              width={90}
              height={110}
              className="h-[100px] w-[90px] object-cover"
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
    </div>
  );
}