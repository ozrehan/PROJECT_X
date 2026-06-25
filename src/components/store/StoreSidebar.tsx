import {
  Calendar,
  MapPin,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  BadgeDollarSign,
  RotateCcw,
  Truck,
  Star,
} from "lucide-react";

export default function StoreSidebar() {
  return (
    <div className="space-y-6">

      {/* STORE INFORMATION */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-bold mb-6">
          Store Information
        </h2>

        <div className="space-y-5 text-sm">

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Calendar size={16} className="text-amber-500" />
              <span>Store Since</span>
            </div>

            <span>May 2022</span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <MapPin size={16} className="text-amber-500" />
              <span>Location</span>
            </div>

            <span>Banjara Hills</span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Clock size={16} className="text-amber-500" />
              <span>Timings</span>
            </div>

            <span>10 AM - 10 PM</span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Mail size={16} className="text-amber-500" />
              <span>Email</span>
            </div>

            <span>fashionhub@gmail.com</span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Phone size={16} className="text-amber-500" />
              <span>Phone</span>
            </div>

            <span>+91 9876543210</span>
          </div>

        </div>

      </div>

      {/* STORE RATING */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-bold mb-5">
          Store Rating
        </h2>

        <div className="flex items-center gap-3 mb-6">

          <span className="text-5xl font-bold">
            4.7
          </span>

          <div>

            <div className="flex text-yellow-400">
              ★★★★★
            </div>

            <p className="text-gray-500 text-sm">
              12.1k Reviews
            </p>

          </div>

        </div>

        {[78,16,4,1,1].map((value,index)=>(
          <div
            key={index}
            className="flex items-center gap-3 mb-3"
          >

            <span className="w-3">
              {5-index}
            </span>

            <div className="flex-1 bg-gray-200 rounded-full h-2">

              <div
                className="bg-amber-500 h-2 rounded-full"
                style={{width:`${value}%`}}
              />

            </div>

            <span className="text-sm">
              {value}%
            </span>

          </div>
        ))}

        <button className="mt-6 w-full bg-black text-white rounded-xl py-3 hover:bg-gray-800">

          Write a Review

        </button>

      </div>

      {/* WHY SHOP */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-bold mb-5">
          Why Shop From Us?
        </h2>

        <div className="space-y-5">

          <div className="flex gap-3 items-center">
            <ShieldCheck className="text-amber-500" />
            <span>100% Original Products</span>
          </div>

          <div className="flex gap-3 items-center">
            <BadgeDollarSign className="text-amber-500" />
            <span>Best Prices Guaranteed</span>
          </div>

          <div className="flex gap-3 items-center">
            <RotateCcw className="text-amber-500" />
            <span>Easy Returns & Refunds</span>
          </div>

          <div className="flex gap-3 items-center">
            <Truck className="text-amber-500" />
            <span>Fast Delivery</span>
          </div>

          <div className="flex gap-3 items-center">
            <Star className="text-amber-500" />
            <span>Top Rated Store</span>
          </div>

        </div>

      </div>

      {/* OFFER */}

      <div className="rounded-2xl bg-gradient-to-r from-black to-gray-900 text-white p-6">

        <h2 className="text-4xl font-bold text-amber-400">
          10% OFF
        </h2>

        <p className="mt-2">
          On Your First Order
        </p>

        <div className="mt-5 border border-amber-400 rounded-lg p-3 text-center font-bold">

          Use Code: HUB10

        </div>

      </div>

    </div>
  );
}