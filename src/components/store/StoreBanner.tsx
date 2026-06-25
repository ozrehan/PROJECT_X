import Image from "next/image";
import { Star, BadgeCheck, Users, Package, Smile } from "lucide-react";

export default function StoreBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">

      <div className="relative rounded-3xl overflow-hidden h-[340px]">

        <Image
          src="/images/stores/fashion-hub-banner.jpg"
          alt="Fashion Hub"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex items-center px-10">

          {/* Store Logo */}

          <div className="w-40 h-40 bg-black border border-gray-700 rounded-2xl flex items-center justify-center">

            <Image
              src="/images/stores/fashion-hub-logo.png"
              alt="Logo"
              width={110}
              height={110}
            />

          </div>

          {/* Store Details */}

          <div className="ml-10 text-white flex-1">

            <div className="flex items-center gap-3">

              <h1 className="text-5xl font-bold">
                Fashion Hub
              </h1>

              <span className="bg-white text-black rounded-full px-3 py-1 text-sm flex items-center gap-1">

                <BadgeCheck size={16} />

                Verified Store

              </span>

            </div>

            <div className="flex items-center gap-3 mt-5">

              <Star
                className="text-yellow-400 fill-yellow-400"
                size={22}
              />

              <span className="text-xl">
                4.7
              </span>

              <span className="text-gray-300">
                (12.1k Reviews)
              </span>

            </div>

            <div className="grid grid-cols-4 gap-8 mt-8">

              <div>
                <Package className="mb-2 text-amber-400" />
                <h3 className="text-3xl font-bold">
                  1200+
                </h3>
                <p className="text-gray-300">
                  Products
                </p>
              </div>

              <div>
                <Star className="mb-2 text-amber-400" />
                <h3 className="text-3xl font-bold">
                  98%
                </h3>
                <p className="text-gray-300">
                  Positive Seller
                </p>
              </div>

              <div>
                <Users className="mb-2 text-amber-400" />
                <h3 className="text-3xl font-bold">
                  20K+
                </h3>
                <p className="text-gray-300">
                  Customers
                </p>
              </div>

              <div>
                <Smile className="mb-2 text-amber-400" />
                <h3 className="text-3xl font-bold">
                  2 Years
                </h3>
                <p className="text-gray-300">
                  On Oz
                </p>
              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-xl transition">
                Follow Store
              </button>

              <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition">
                Share Store
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}