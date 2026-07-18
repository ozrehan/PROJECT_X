"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useAddressStore } from "@/lib/addressStore";
import AddressModal from "./layout/AddressModal";
import { useWishlistStore } from "@/lib/wishlistStore";
import {
  Heart,
  User,
  ShoppingCart,
  MapPin,
  Search,
} from "lucide-react";

export default function Navbar() {
  const { addresses, selectedAddressId, setModalOpen, loadAddresses } = useAddressStore();
  const { wishlistItems, loadWishlist } = useWishlistStore();

  useEffect(() => {
    loadAddresses();
    loadWishlist();
  }, []);

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId);
  const locationLabel = selectedAddress
    ? `${selectedAddress.type}: ${selectedAddress.area || selectedAddress.city}`
    : "Hyderabad, TS";
  const truncatedLabel = locationLabel.length > 22 ? locationLabel.slice(0, 20) + "..." : locationLabel;

  return (
    <>
      {/* TOP NAVBAR */}

      <header className="bg-black h-[78px] flex items-center px-8">

        {/* LOGO */}

        <Link href="/" className="w-[110px]">
          <h1 className="text-[#D9A441] text-[54px] leading-none font-serif cursor-pointer hover:opacity-90">
            Oz
          </h1>
        </Link>

        {/* LOCATION */}

        <button
          onClick={() => setModalOpen(true)}
          className="ml-4 text-white text-left transition hover:opacity-85 outline-none"
        >
          <p className="text-[12px] text-gray-300">
            Deliver to
          </p>

          <div className="flex items-center gap-1">
            <MapPin
              size={13}
              className="text-[#D9A441]"
            />

            <span className="text-[15px] font-medium">
              {truncatedLabel}
            </span>

            <span className="text-xs text-zinc-400">
              ▼
            </span>
          </div>
        </button>

        {/* SEARCH */}

        <form action="/search" method="GET" className="flex flex-1 max-w-[760px] ml-12">

          <input
            name="q"
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

          <button type="submit" className="bg-[#D9A441] w-[56px] rounded-r-lg flex items-center justify-center hover:bg-[#c99431] transition">
            <Search
              size={22}
              color="white"
            />
          </button>

        </form>

        {/* RIGHT ICONS */}

        <div className="flex items-center gap-14 ml-auto">

          <Link href="/wishlist" className="flex flex-col items-center text-white cursor-pointer hover:text-[#D9A441] transition">
            <span className="relative">
              <Heart size={24} />
              {wishlistItems.length > 0 && (
                <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-black animate-scaleIn">
                  {wishlistItems.length}
                </span>
              )}
            </span>
            <span className="text-[13px] mt-1">
              Wishlist
            </span>
          </Link>

          <Link href="/login" className="flex flex-col items-center text-white cursor-pointer hover:text-[#D9A441] transition">
            <User size={24} />
            <span className="text-[13px] mt-1">
              Account
            </span>
          </Link>

          <Link href="/cart" className="relative flex flex-col items-center text-white cursor-pointer hover:text-[#D9A441] transition">

            <div className="absolute -top-2 right-1 bg-[#D9A441] text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              2
            </div>

            <ShoppingCart size={24} />

            <span className="text-[13px] mt-1">
              Cart
            </span>

          </Link>

        </div>

      </header>

      {/* CATEGORY BAR */}

      <div className="h-[48px] border-b flex items-center justify-center gap-14 bg-white text-[15px]">

        <Link href="/categories/men" className="hover:text-[#D9A441] transition">Men</Link>
        <Link href="/categories/women" className="hover:text-[#D9A441] transition">Women</Link>
        <Link href="/categories/kids" className="hover:text-[#D9A441] transition">Kids</Link>
        <Link href="/categories/ethnic-wear" className="hover:text-[#D9A441] transition">Ethnic Wear</Link>
        <Link href="/categories/new-arrivals" className="hover:text-[#D9A441] transition">New Arrivals</Link>
        <Link href="/categories/brands" className="hover:text-[#D9A441] transition">Brands</Link>
        <Link href="/categories/offers" className="hover:text-[#D9A441] transition">Offers</Link>

      </div>
      <AddressModal />
    </>
  );
}