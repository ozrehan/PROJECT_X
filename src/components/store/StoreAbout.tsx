import Image from "next/image";
import {
  ShieldCheck,
  RotateCcw,
  Truck,
  BadgeCheck,
} from "lucide-react";

export default function StoreAbout() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Left */}

        <div>

          <h2 className="text-3xl font-bold mb-5">
            About Fashion Hub
          </h2>

          <p className="text-gray-600 leading-8">
            Fashion Hub brings you the latest trends in men's fashion.
            From casual streetwear to smart formal looks, we have
            everything to match your style. Premium quality,
            best prices and trusted by thousands of customers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

            <div className="text-center">
              <ShieldCheck className="mx-auto text-amber-500" size={30} />
              <p className="mt-2 font-medium">Premium Quality</p>
            </div>

            <div className="text-center">
              <RotateCcw className="mx-auto text-amber-500" size={30} />
              <p className="mt-2 font-medium">Easy Returns</p>
            </div>

            <div className="text-center">
              <Truck className="mx-auto text-amber-500" size={30} />
              <p className="mt-2 font-medium">Fast Delivery</p>
            </div>

            <div className="text-center">
              <BadgeCheck className="mx-auto text-amber-500" size={30} />
              <p className="mt-2 font-medium">Secure Payment</p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative h-[320px] rounded-2xl overflow-hidden">

          <Image
            src="/images/stores/store-inside.jpg"
            alt="Store"
            fill
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}