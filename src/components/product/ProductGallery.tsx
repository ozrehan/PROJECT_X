"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight, Play } from "lucide-react";

const images = [
  "/images/products/black-shirt/front.png",
  "/images/products/black-shirt/back.png",
  "/images/products/black-shirt/side.png",
  "/images/products/black-shirt/fabric.png",
];

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);

  return (
    <div>

      <div className="relative border rounded-3xl overflow-hidden bg-[#f8f8f8]">

        {/* Badge */}

        <div className="absolute left-4 top-4 z-20 bg-black text-white px-3 py-1 rounded-lg text-xs font-semibold">
          Bestseller
        </div>

        {/* Wishlist */}

        <button className="absolute right-4 top-4 z-20 bg-white p-2 rounded-full shadow hover:scale-105 transition">
          <Heart size={20} />
        </button>

        {/* Previous */}

        <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
          <ChevronLeft />
        </button>

        {/* Next */}

        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
          <ChevronRight />
        </button>

        {/* Main Image */}

        <Image
          src={images[selected]}
          alt="Product"
          width={700}
          height={850}
          className="w-full h-[650px] object-contain"
        />

      </div>

      {/* Thumbnails */}

      <div className="flex gap-3 mt-4">

        {images.map((img, index) => (

          <button
            key={img}
            onClick={() => setSelected(index)}
            className={`border rounded-xl overflow-hidden ${
              selected === index
                ? "border-black"
                : "border-gray-300"
            }`}
          >

            <Image
              src={img}
              alt=""
              width={90}
              height={110}
              className="object-cover"
            />

          </button>

        ))}

        {/* Video */}

        <button className="border rounded-xl w-[90px] h-[110px] flex flex-col items-center justify-center hover:bg-gray-100">

          <Play size={28} />

          <span className="text-xs mt-2">
            View Video
          </span>

        </button>

      </div>

    </div>
  );
}