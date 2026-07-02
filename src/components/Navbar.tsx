"use client";

import Link from "next/link";
import {
  Heart,
  User,
  ShoppingCart,
  MapPin,
  Search,
} from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* TOP NAVBAR */}

      <header className="bg-black h-[78px] flex items-center px-8">

        {/* LOGO */}

        <div className="w-[110px]">
          <h1 className="text-[#D9A441] text-[54px] leading-none font-serif">
            Oz
          </h1>
        </div>

        {/* LOCATION */}

        <div className="ml-4 text-white">
          <p className="text-[12px] text-gray-300">
            Deliver to
          </p>

          <div className="flex items-center gap-1">
            <MapPin
              size={13}
              className="text-[#D9A441]"
            />

            <span className="text-[15px] font-medium">
              Hyderabad, TS
            </span>

            <span className="text-xs">
              ▼
            </span>
          </div>
        </div>

        {/* SEARCH */}

        <div className="flex flex-1 max-w-[760px] ml-12">

          <input
            placeholder="Search for products, brands and more..."
            className="
              h-[42px]
              flex-1
              rounded-l-lg
              px-6
              outline-none
              text-sm
            "
          />

          <div className="w-[170px] bg-white border-l flex items-center justify-center text-gray-600 text-sm">
            All Categories ▼
          </div>

          <button className="bg-[#D9A441] w-[56px] rounded-r-lg flex items-center justify-center">
            <Search
              size={22}
              color="white"
            />
          </button>

        </div>

        {/* RIGHT ICONS */}

        <div className="flex items-center gap-14 ml-auto">

          <div className="flex flex-col items-center text-white cursor-pointer">
            <Heart size={24} />
            <span className="text-[13px] mt-1">
              Wishlist
            </span>
          </div>

          <div className="flex flex-col items-center text-white cursor-pointer">
            <User size={24} />
            <span className="text-[13px] mt-1">
              Account
            </span>
          </div>

          <div className="relative flex flex-col items-center text-white cursor-pointer">

            <div className="absolute -top-2 right-1 bg-[#D9A441] text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              2
            </div>

            <ShoppingCart size={24} />

            <span className="text-[13px] mt-1">
              Cart
            </span>

          </div>

        </div>

      </header>

      {/* CATEGORY BAR */}

      <div className="h-[48px] border-b flex items-center justify-center gap-14 bg-white text-[15px]">

        <Link href="/">Men</Link>
        <Link href="/">Women</Link>
        <Link href="/">Kids</Link>
        <Link href="/">Ethnic Wear</Link>
        <Link href="/">Footwear</Link>
        <Link href="/">Accessories</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Brands</Link>
        <Link href="/">Offers</Link>

      </div>
    </>
  );
}