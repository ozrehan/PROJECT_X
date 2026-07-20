"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryItem {
  name: string;
  image: string;
  badge?: string;
}

const categories: CategoryItem[] = [
  {
    name: "Men",
    image: "/images/categories/men.png",
    badge: "Popular",
  },
  {
    name: "Women",
    image: "/images/categories/women.png",
    badge: "Trending",
  },
  {
    name: "Kids",
    image: "/images/categories/kids.png",
  },
  {
    name: "Ethnic Wear",
    image: "/images/categories/ethnic-wear.png",
    badge: "Festive",
  },
  {
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=300",
    badge: "Hot",
  },
  {
    name: "Sportswear",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Watches",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=300",
    badge: "Luxury",
  },
  {
    name: "Bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Jewellery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Fragrances",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Winter Wear",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Formal Wear",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Casual Wear",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Luxury Brands",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=300",
    badge: "Exclusive",
  },
  {
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Trending",
    image: "https://images.unsplash.com/photo-1620012253295-c05518e99309?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Sale",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=300",
    badge: "Up to 60% OFF",
  },
  {
    name: "Premium Collection",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=300",
  },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="w-full py-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 border-b border-zinc-200/50 pb-2">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-serif">
          Shop by Category
        </h2>

        {/* Desktop Carousel Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:border-amber-500 hover:bg-amber-500 hover:text-black active:scale-95 disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-zinc-200"
            aria-label="Scroll left"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:border-amber-500 hover:bg-amber-500 hover:text-black active:scale-95 disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-zinc-200"
            aria-label="Scroll right"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Compact Horizontal Carousel Container */}
      <div className="relative group/carousel">
        {/* Left Fade Indicator */}
        {canScrollLeft && (
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-white to-transparent transition-opacity duration-300" />
        )}

        {/* Right Fade Indicator */}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-white to-transparent transition-opacity duration-300" />
        )}

        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className="flex gap-2.5 sm:gap-3.5 overflow-x-auto scroll-smooth py-1 px-0.5 no-scrollbar"
        >
          {categories.map((item) => (
            <Link
              key={item.name}
              href={`/categories/${item.name.toLowerCase().replace(/ /g, "-")}`}
              className="group shrink-0 w-[95px] sm:w-[110px] lg:w-[118px] flex flex-col items-center cursor-pointer focus:outline-none"
            >
              {/* Image Container Card - Small & Compact */}
              <div className="relative h-24 sm:h-28 w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200/80 shadow-sm group-hover:border-amber-400 group-hover:shadow-md transition-all duration-200 group-hover:-translate-y-0.5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 95px, 120px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Badge if available */}
                {item.badge && (
                  <span className="absolute top-1.5 left-1.5 rounded-md bg-amber-500/90 backdrop-blur-md px-1.5 py-0.5 text-[8px] font-extrabold uppercase text-black tracking-wider shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Category Title */}
              <p className="mt-1.5 text-[11px] sm:text-xs font-bold text-center text-zinc-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}