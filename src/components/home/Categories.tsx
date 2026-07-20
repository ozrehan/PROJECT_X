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
    name: "Kurtas",
    image: "/images/products/kurta.jpeg",
    badge: "New",
  },
  {
    name: "Sarees",
    image: "/images/bestsellers/saree.jpeg",
    badge: "Ethnic",
  },
  {
    name: "Dresses",
    image: "/images/products/dress.jpeg",
    badge: "Hot",
  },
  {
    name: "Blazers",
    image: "/images/products/blazer.jpeg",
    badge: "Formal",
  },
  {
    name: "Jackets",
    image: "/images/products/jacket.jpeg",
    badge: "Winter",
  },
  {
    name: "Hoodies",
    image: "/images/bestsellers/hoodie.jpeg",
  },
  {
    name: "Jeans",
    image: "/images/products/jeans.jpeg",
  },
  {
    name: "Cargo Pants",
    image: "/images/bestsellers/cargo-pant.jpeg",
  },
  {
    name: "Formal Shirts",
    image: "/images/products/shirt.jpeg",
  },
  {
    name: "Casual Shirts",
    image: "/images/bestsellers/casual-shirt.jpeg",
  },
  {
    name: "Linen Shirts",
    image: "/images/bestsellers/linen-shirt.jpeg",
  },
  {
    name: "T-Shirts",
    image: "/images/products/tshirt.jpeg",
  },
  {
    name: "Footwear",
    image: "/images/products/shoe.jpeg",
  },
  {
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=400",
    badge: "Hot",
  },
  {
    name: "Sportswear",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Accessories",
    image: "/images/products/sunglasses.jpeg",
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
    name: "Luxury Brands",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
    badge: "Exclusive",
  },
  {
    name: "Designer Wear",
    image: "/images/products/dress-2.jpeg",
  },
  {
    name: "Cotton Kurtas",
    image: "/images/bestsellers/cotton-kurta.jpeg",
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

  // Mouse Drag State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);

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

  // Mouse Drag to Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setDraggedDistance(0);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
    setDraggedDistance(Math.abs(walk));
    checkScrollability();
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (draggedDistance > 5) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="w-full py-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 select-none">
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

      {/* Compact Horizontal Carousel Container with Mouse Drag & Touch Support */}
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
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`
            flex gap-2.5 sm:gap-3.5 overflow-x-auto py-1 px-0.5 no-scrollbar
            ${isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab scroll-smooth"}
          `}
        >
          {categories.map((item) => (
            <Link
              key={item.name}
              href={`/categories/${item.name.toLowerCase().replace(/ /g, "-")}`}
              onClick={handleCardClick}
              className="group shrink-0 w-[95px] sm:w-[110px] lg:w-[118px] flex flex-col items-center focus:outline-none"
              draggable={false}
            >
              {/* Image Container Card */}
              <div className="relative h-24 sm:h-28 w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200/80 shadow-sm group-hover:border-amber-400 group-hover:shadow-md transition-all duration-200 group-hover:-translate-y-0.5 pointer-events-none">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 95px, 120px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  draggable={false}
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />

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