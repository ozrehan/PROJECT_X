"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ChevronDown,
  User,
  Heart,
  ShoppingCart,
  Search,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6">
        {/* Top Row */}
        <div className="h-14 sm:h-16 flex items-center justify-between">
          {/* Left - Location (hidden on mobile) */}
          <div className="hidden sm:block min-w-max">
            <p className="text-[10px] sm:text-[11px] text-gray-400">
              Deliver to
            </p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={14} className="text-amber-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium truncate">
                Hyderabad, TS
              </span>
              <ChevronDown size={14} className="flex-shrink-0" />
            </div>
          </div>

          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl sm:text-4xl text-amber-400 font-serif mx-auto sm:mx-0 cursor-pointer hover:opacity-80 transition">
              Oz
            </h1>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-3 sm:gap-6 ml-auto">
            {/* User - Icon only on mobile, with label on tablet+ */}
            <button className="hidden sm:flex flex-col items-center hover:opacity-75 transition" aria-label="Login">
              <User size={20} />
              <span className="text-[10px] mt-1">Login</span>
            </button>
            <button className="sm:hidden p-2 hover:bg-zinc-900 rounded" aria-label="User account">
              <User size={18} />
            </button>

            {/* Wishlist - Icon only on mobile */}
            <button className="hidden sm:flex flex-col items-center hover:opacity-75 transition" aria-label="Wishlist">
              <Heart size={20} />
              <span className="text-[10px] mt-1">Wishlist</span>
            </button>
            <button className="sm:hidden p-2 hover:bg-zinc-900 rounded" aria-label="Wishlist">
              <Heart size={18} />
            </button>

            {/* Cart */}
            <button className="relative">
              <div className="hidden sm:flex flex-col items-center hover:opacity-75 transition">
                <ShoppingCart size={20} />
                <span className="text-[10px] mt-1">Cart</span>
              </div>
              <ShoppingCart className="sm:hidden" size={18} />
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-amber-500 text-black text-[9px] sm:text-[10px] px-1 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                0
              </span>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-zinc-900 rounded"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Row - Full width on mobile */}
        <div className="pb-3 sm:pb-5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
            {/* All Categories Button - Hidden on mobile, shown on tablet+ */}
            <button className="hidden sm:flex bg-zinc-900 px-4 sm:px-6 h-12 sm:h-14 rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-3 hover:bg-zinc-800 transition flex-shrink-0">
              <Menu size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="text-sm">All Categories</span>
            </button>

            {/* Search Input */}
            <form 
              className="flex flex-1 bg-white rounded-lg sm:rounded-xl overflow-hidden"
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                }
              }}
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-3 sm:px-6 py-3 sm:py-0 h-12 sm:h-14 text-black outline-none text-sm"
              />

              {/* Category Filter - Hidden on mobile, shown on tablet+ */}
              <button className="hidden sm:flex items-center gap-2 px-3 sm:px-5 text-gray-600 border-l hover:bg-gray-50 transition">
                Categories
                <ChevronDown size={14} />
              </button>

              {/* Search Button */}
              <button type="submit" className="bg-amber-500 px-3 sm:px-6 flex items-center justify-center hover:bg-amber-600 transition flex-shrink-0" aria-label="Search">
                <Search className="text-white" size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden pb-4 border-t border-zinc-800">
            <nav className="flex flex-col gap-4 mt-4">
              <button className="flex items-center gap-3 p-3 hover:bg-zinc-900 rounded transition w-full text-left">
                <User size={20} />
                <span>Login / Signup</span>
              </button>
              <button className="flex items-center gap-3 p-3 hover:bg-zinc-900 rounded transition w-full text-left">
                <Heart size={20} />
                <span>Wishlist</span>
              </button>
              <button className="flex items-center gap-3 p-3 hover:bg-zinc-900 rounded transition w-full text-left">
                <MapPin size={20} />
                <span>Deliver to: Hyderabad, TS</span>
              </button>
              <button className="flex items-center gap-3 p-3 hover:bg-zinc-900 rounded transition w-full text-left">
                <Menu size={20} />
                <span>All Categories</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}