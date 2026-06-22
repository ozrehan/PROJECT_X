"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroBanner() {
  const banners = [
    "/images/hero/hero-main.png",
    "/images/hero/hero-slide-2.png",
    "/images/hero/hero-slide-3.png",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-4">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-3xl overflow-hidden"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[520px]">

              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

              <div className="absolute left-6 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 text-white max-w-xl">

                <p className="text-amber-400 text-sm md:text-lg mb-4">
                  FASHION THAT DEFINES YOU
                </p>

                <h1 className="font-bold leading-tight text-3xl md:text-5xl lg:text-7xl">
                  STYLE. QUALITY.
                </h1>

                <h1 className="font-bold text-amber-400 leading-tight text-3xl md:text-5xl lg:text-7xl">
                  DELIVERED TODAY.
                </h1>

                <p className="mt-4 md:mt-8 text-sm md:text-lg lg:text-2xl">
                  Explore the best fashion from
                  <br />
                  Hyderabad's top stores.
                </p>

                <button className="mt-6 md:mt-10 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
                  SHOP NOW →
                </button>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}