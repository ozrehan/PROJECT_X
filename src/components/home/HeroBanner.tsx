import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-4">
      <div className="relative overflow-hidden rounded-3xl h-[520px]">

        {/* Background Image */}
        <Image
          src="/images/hero/hero-main.png"
          alt="Oz Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        {/* Content */}
        <div className="absolute left-14 top-16 z-10 max-w-xl">

          <p className="text-amber-400 text-lg tracking-wide mb-6">
            FASHION THAT DEFINES YOU
          </p>

          <h1 className="text-white text-7xl font-bold leading-tight">
            STYLE. QUALITY.
          </h1>

          <h1 className="text-amber-400 text-7xl font-bold leading-tight">
            DELIVERED TODAY.
          </h1>

          <p className="text-white text-2xl mt-8 leading-relaxed">
            Explore the best fashion from
            <br />
            Hyderabad's top stores.
          </p>

          {/* Features */}
          <div className="flex gap-8 mt-10 text-white">

            <div className="flex items-center gap-2">
              ⚡
              <span>Same Day Delivery</span>
            </div>

            <div className="flex items-center gap-2">
              ↻
              <span>Easy Returns</span>
            </div>

            <div className="flex items-center gap-2">
              ⭐
              <span>Top Rated Stores</span>
            </div>

          </div>

          {/* CTA */}
          <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
            SHOP NOW →
          </button>

        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-8 h-3 bg-amber-400 rounded-full" />
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>

      </div>
    </section>
  );
}