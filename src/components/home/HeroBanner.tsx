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
    <section className="w-full px-3 sm:px-4 mt-2 sm:mt-4 max-w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ enabled: true, hiddenClass: "hidden" }}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-2xl sm:rounded-3xl overflow-hidden"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[200px] sm:h-[280px] md:h-[380px] lg:h-[480px] xl:h-[520px]">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent sm:from-black/70 sm:via-black/30" />

              <div className="absolute left-3 sm:left-6 md:left-8 lg:left-12 xl:left-16 top-1/2 -translate-y-1/2 text-white max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                <p className="text-amber-400 text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-4 font-semibold">
                  FASHION THAT DEFINES YOU
                </p>

                <h1 className="font-bold leading-tight text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
                  STYLE. QUALITY.
                </h1>

                <h1 className="font-bold text-amber-400 leading-tight text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
                  DELIVERED TODAY.
                </h1>

                <p className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl leading-relaxed">
                  Explore the best fashion
                  <br className="hidden sm:block" />
                  from Hyderabad's top stores.
                </p>

                <button className="mt-3 sm:mt-6 md:mt-8 lg:mt-10 bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-200 transition active:scale-95 text-xs sm:text-sm md:text-base lg:text-lg">
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