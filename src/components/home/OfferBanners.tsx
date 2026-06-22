import Image from "next/image";

export default function OfferBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* New Arrivals */}
        <div className="relative h-[220px] rounded-2xl overflow-hidden group">
          <Image
            src="/images/offers/new-arrivals.png"
            alt="New Arrivals"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute left-6 top-6">
            <h3 className="text-white text-3xl font-bold">
              NEW
              <br />
              ARRIVALS
            </h3>

            <p className="text-white mt-3">
              Fresh Styles
              <br />
              Just For You
            </p>

            <button className="mt-4 bg-white text-black px-5 py-2 rounded-lg font-semibold">
              EXPLORE
            </button>
          </div>
        </div>

        {/* 50% OFF */}
        <div className="relative h-[220px] rounded-2xl overflow-hidden group">
          <Image
            src="/images/offers/sale-50.png"
            alt="50 Percent Off"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-white/10" />

          <div className="absolute left-6 top-6">
            <p className="text-black text-sm font-medium">
              UP TO
            </p>

            <h3 className="text-black text-5xl font-bold">
              50% OFF
            </h3>

            <p className="text-black mt-2">
              On Best Sellers
            </p>

            <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg font-semibold">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Top Brands */}
        <div className="relative h-[220px] rounded-2xl overflow-hidden group">
          <Image
            src="/images/offers/top-brands.png"
            alt="Top Brands"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute left-6 top-6">
            <h3 className="text-white text-3xl font-bold">
              TOP
              <br />
              BRANDS
            </h3>

            <p className="text-white mt-3">
              Premium Quality
              <br />
              Great Prices
            </p>

            <button className="mt-4 bg-white text-black px-5 py-2 rounded-lg font-semibold">
              EXPLORE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}