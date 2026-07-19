import Image from "next/image";
import Link from "next/link";

export default function OfferBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* New Arrivals */}
        <div className="relative h-[220px] rounded-2xl overflow-hidden group border border-slate-100 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=500"
            alt="New Arrivals"
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300" />
          <div className="absolute left-6 top-6 z-10">
            <h3 className="text-white text-3xl font-bold">
              NEW
              <br />
              ARRIVALS
            </h3>
            <p className="text-gray-200 mt-2 text-sm">
              Fresh Styles Just For You
            </p>
            <Link href="/categories/new-arrivals" className="inline-block mt-4 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-amber-400 hover:text-black transition active:scale-95 text-xs">
              EXPLORE
            </Link>
          </div>
        </div>

        {/* 50% OFF */}
        <div className="relative h-[220px] rounded-2xl overflow-hidden group border border-slate-100 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=500"
            alt="50 Percent Off"
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition duration-300" />
          <div className="absolute left-6 top-6 z-10">
            <p className="text-black text-xs font-bold uppercase tracking-widest text-amber-800">
              UP TO
            </p>
            <h3 className="text-black text-4xl font-extrabold mt-1">
              50% OFF
            </h3>
            <p className="text-slate-800 mt-2 text-sm font-medium">
              On Best Sellers
            </p>
            <Link href="/categories/offers" className="inline-block mt-4 bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-amber-500 hover:text-black transition active:scale-95 text-xs">
              SHOP NOW
            </Link>
          </div>
        </div>

        {/* Top Brands */}
        <div className="relative h-[220px] rounded-2xl overflow-hidden group border border-slate-100 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=500"
            alt="Top Brands"
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300" />
          <div className="absolute left-6 top-6 z-10">
            <h3 className="text-white text-3xl font-bold">
              TOP
              <br />
              BRANDS
            </h3>
            <p className="text-gray-200 mt-2 text-sm">
              Premium Quality & Great Prices
            </p>
            <Link href="/categories/brands" className="inline-block mt-4 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-amber-400 hover:text-black transition active:scale-95 text-xs">
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}