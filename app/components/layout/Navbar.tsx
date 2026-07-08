"use client";

import Link from "next/link";
import { Search, ShoppingCart, Heart, User, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          OZ
        </Link>

        {/* Location */}
        <div className="hidden lg:flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          <span className="text-sm">
            Deliver to Hyderabad
          </span>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-[420px]">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search clothes, brands or stores..."
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6">

          <Link href="/wishlist">
            <Heart
              size={24}
              className="cursor-pointer hover:text-blue-600 transition"
            />
          </Link>

          <Link href="/cart">
            <ShoppingCart
              size={24}
              className="cursor-pointer hover:text-blue-600 transition"
            />
          </Link>

          <Link href="/profile">
            <User
              size={24}
              className="cursor-pointer hover:text-blue-600 transition"
            />
          </Link>

          <Link
            href="/login"
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}