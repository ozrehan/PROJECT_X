"use client";

import {
  MapPin,
  User,
  Heart,
  ShoppingCart,
  Search,
  Menu,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4">

          {/* Desktop Top Row */}
          <div className="hidden md:flex items-center justify-between py-4">

            <div>
              <p className="text-xs text-gray-400">
                Deliver to
              </p>

              <div className="flex items-center gap-1 text-sm">
                <MapPin size={14} className="text-amber-400" />
                Hyderabad, TS
                <ChevronDown size={14} />
              </div>
            </div>

            <h1 className="text-5xl font-serif text-amber-400">
              Oz
            </h1>

            <div className="flex gap-8">

              <div className="flex flex-col items-center text-xs">
                <User size={20} />
                Login / Signup
              </div>

              <div className="flex flex-col items-center text-xs">
                <Heart size={20} />
                Wishlist
              </div>

              <div className="relative flex flex-col items-center text-xs">
                <ShoppingCart size={20} />

                <span className="absolute -top-2 -right-2 bg-amber-500 text-black rounded-full text-[10px] px-1">
                  0
                </span>

                Cart
              </div>

            </div>
          </div>

          {/* Mobile Top Row */}

          <div className="md:hidden flex items-center justify-between py-4">

            <button>
              <Menu size={28} />
            </button>

            <h1 className="text-4xl font-serif text-amber-400">
              Oz
            </h1>

            <div className="flex gap-4">
              <Heart size={22} />
              <ShoppingCart size={22} />
            </div>

          </div>

          {/* Mobile Location */}

          <div className="md:hidden flex items-center gap-2 text-sm pb-3">
            <MapPin size={14} className="text-amber-400" />
            Deliver to Hyderabad, TS
          </div>

          {/* Search Row */}

          <div className="flex flex-col md:flex-row gap-3 pb-4">

            <button className="bg-zinc-900 px-4 py-3 rounded-xl flex items-center gap-2 md:w-auto">
              <Menu size={18} />
              All Categories
            </button>

            <div className="flex flex-1">

              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-4 py-3 text-black outline-none"
              />

              <button className="bg-amber-500 px-5 flex items-center justify-center">
                <Search />
              </button>

            </div>

          </div>

        </div>

      </header>

      {/* Desktop Categories */}

      <div className="hidden md:block border-b bg-white">

        <div className="max-w-7xl mx-auto flex justify-center gap-10 py-4 text-sm">

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Ethnic Wear</a>
          <a href="#">Footwear</a>
          <a href="#">Accessories</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
          <a href="#">Offers</a>

        </div>

      </div>

      {/* Mobile Categories */}

      <div className="md:hidden bg-white border-b overflow-x-auto">

        <div className="flex gap-6 px-4 py-3 min-w-max text-sm">

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Ethnic Wear</a>
          <a href="#">Footwear</a>
          <a href="#">Accessories</a>

        </div>

      </div>
    </>
  );
}