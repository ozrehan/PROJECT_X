"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=400",
    badge: "Hot",
  },
  {
    name: "Sportswear",
    image: "https://images.unsplash.com/photo-1483721074574-5107e3240e90?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Watches",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400",
    badge: "Luxury",
  },
  {
    name: "Bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Jewellery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Fragrances",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Winter Wear",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Formal Wear",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Casual Wear",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Luxury Brands",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
    badge: "Exclusive",
  },
  {
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Trending",
    image: "https://images.unsplash.com/photo-1620012253295-c05518e99309?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sale",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400",
    badge: "Up to 60% OFF",
  },
  {
    name: "Premium Collection",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=400",
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
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="w-full py-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-5 border-b border-zinc-200/60 pb-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">
            <Sparkles size={14} className="text-amber-500 animate-spin-slow" />
            Curated Collections
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 font-serif">
            Shop by Category
          </h2>
        </div>

        {/* Desktop Carousel Arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:border-amber-500 hover:bg-amber-500 hover:text-black active:scale-95 disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-zinc-200 disabled:hover:text-zinc-800`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:border-amber-500 hover:bg-amber-500 hover:text-black active:scale-95 disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-zinc-200 disabled:hover:text-zinc-800`}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div className="relative group/carousel">
        {/* Left Fade Indicator */}
        {canScrollLeft && (
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent transition-opacity duration-300" />
        )}

        {/* Right Fade Indicator */}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent transition-opacity duration-300" />
        )}

        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth py-2 px-1 no-scrollbar"
        >
          {categories.map((item) => (
            <Link
              key={item.name}
              href={`/categories/${item.name.toLowerCase().replace(/ /g, "-")}`}
              className="group shrink-0 w-[125px] sm:w-[145px] lg:w-[155px] flex flex-col items-center cursor-pointer focus:outline-none"
            >
              {/* Image Container Card */}
              <div className="relative h-32 sm:h-40 w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-200/90 shadow-sm group-hover:border-amber-400 group-hover:shadow-xl group-hover:shadow-amber-500/10 transition-all duration-300 group-hover:-translate-y-1">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 130px, 160px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge if available */}
                {item.badge && (
                  <span className="absolute top-2 left-2 rounded-full bg-amber-500/90 backdrop-blur-md px-2 py-0.5 text-[9px] font-extrabold uppercase text-black tracking-wide shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Category Title */}
              <p className="mt-2.5 text-xs sm:text-sm font-bold text-center text-zinc-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                {item.name}
              </p>

              {/* Gold underline accent on hover */}
              <div className="h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-8 rounded-full mt-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}