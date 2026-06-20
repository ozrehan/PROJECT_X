"use client";

import {
  MapPin,
  ChevronDown,
  User,
  Heart,
  ShoppingCart,
  Search,
  Menu,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Row */}
        <div className="h-16 flex items-center justify-between">

          {/* Left */}
          <div>
            <p className="text-[11px] text-gray-400">
              Deliver to
            </p>

            <div className="flex items-center gap-1 mt-1">
              <MapPin size={14} className="text-amber-400" />

              <span className="text-sm font-medium">
                Hyderabad, TS
              </span>

              <ChevronDown size={14} />
            </div>
          </div>

          {/* Logo */}
          <h1 className="text-4xl text-amber-400 font-serif">
            Oz
          </h1>

          {/* Right Icons */}
          <div className="flex items-center gap-8">

            <div className="flex flex-col items-center">
              <User size={20} />
              <span className="text-[11px] mt-1">
                Login / Signup
              </span>
            </div>

            <div className="flex flex-col items-center">
              <Heart size={20} />
              <span className="text-[11px] mt-1">
                Wishlist
              </span>
            </div>

            <div className="relative flex flex-col items-center">

              <ShoppingCart size={20} />

              <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-[10px] px-1 rounded-full">
                0
              </span>

              <span className="text-[11px] mt-1">
                Cart
              </span>

            </div>

          </div>

        </div>

        {/* Search Row */}

        <div className="pb-5">

          <div className="flex items-center gap-4">

            <button className="bg-zinc-900 px-6 h-14 rounded-xl flex items-center gap-3 hover:bg-zinc-800 transition">
              <Menu size={18} />
              <span>All Categories</span>
            </button>

            <div className="flex flex-1 bg-white rounded-xl overflow-hidden">

              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="flex-1 px-6 text-black outline-none"
              />

              <button className="flex items-center gap-2 px-5 text-gray-600 border-l">
                All Categories
                <ChevronDown size={16} />
              </button>

              <button className="bg-amber-500 px-6 flex items-center justify-center hover:bg-amber-600 transition">
                <Search className="text-white" size={22} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}