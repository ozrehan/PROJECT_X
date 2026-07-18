"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";

const categories = [
  "Men",
  "Women",
  "Kids",
  "Ethnic Wear",
  "Footwear",
  "Accessories",
  "New Arrivals",
  "Brands",
  "Offers",
];

type ActionButtonProps = {
  label: string;
  children: React.ReactNode;
  badge?: boolean;
};

function ActionButton({ label, children, badge }: ActionButtonProps) {
  return (
    <Link
      href={label === "Cart" ? "/cart" : label === "Wishlist" ? "/wishlist" : "/login"}
      className="group relative flex min-w-14 flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 text-white transition hover:bg-white/10"
      aria-label={label}
    >
      <span className="relative text-zinc-100 transition group-hover:text-amber-400">
        {children}
        {badge && (
          <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-black">
            3
          </span>
        )}
      </span>
      <span className="text-[11px] font-medium leading-none">{label}</span>
    </Link>
  );
}

function SearchBar({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");

  return (
    <form
      className={`flex overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] ${compact ? "h-11" : "h-12"}`}
      onSubmit={(event) => {
        event.preventDefault();
        if (query.trim()) window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3 px-4 text-zinc-400">
        <Search size={compact ? 18 : 21} strokeWidth={2} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for products, brands and more..."
          className="min-w-0 flex-1 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400"
          aria-label="Search products"
        />
      </div>
      {!compact && (
        <button type="button" className="hidden items-center gap-2 border-l border-zinc-200 px-5 text-sm text-zinc-600 transition hover:bg-zinc-50 md:flex">
          All Categories <ChevronDown size={15} />
        </button>
      )}
      <button type="submit" className="flex w-[52px] items-center justify-center bg-amber-500 text-white transition hover:bg-amber-600 active:scale-[0.98]" aria-label="Submit search">
        <Search size={compact ? 20 : 23} />
      </button>
    </form>
  );
}

function CategoryNavigation({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav className={mobile ? "border-t border-white/10 bg-black px-5 py-3" : "hidden border-b border-zinc-200 bg-white shadow-sm lg:block"} aria-label="Product categories">
      <div className={mobile ? "flex flex-wrap gap-x-5 gap-y-1" : "mx-auto flex h-15 max-w-[1440px] items-center justify-center gap-9 px-8 xl:gap-13"}>
        {categories.map((category, index) => (
          <Link
            href={category === "Men" ? "/categories/men" : "/categories"}
            key={category}
            className={`${mobile ? "py-2 text-sm text-zinc-200" : "relative flex h-full items-center text-sm font-medium text-zinc-900 transition hover:text-amber-700 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-amber-500 after:transition-all hover:after:w-full"} ${index === 0 && !mobile ? "after:w-full" : ""}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-black text-white shadow-[0_3px_14px_rgba(0,0,0,0.3)]">
        <div className="mx-auto hidden h-20 max-w-[1440px] items-center gap-7 px-8 lg:flex">
          <Link href="/" className="shrink-0 font-serif text-5xl leading-none tracking-tight text-amber-400 transition hover:text-amber-300" aria-label="Oz home">Oz</Link>
          <button className="flex shrink-0 items-center gap-2 rounded-lg px-2 py-2 text-left transition hover:bg-white/10" aria-label="Select delivery location">
            <MapPin size={17} className="text-amber-400" />
            <span><span className="block text-[10px] leading-3 text-zinc-400">Deliver to</span><span className="flex items-center gap-1 text-xs font-semibold">Hyderabad, TS <ChevronDown size={13} /></span></span>
          </button>
          <div className="min-w-0 flex-1"><SearchBar /></div>
          <div className="flex shrink-0 items-center gap-3 xl:gap-5">
            <ActionButton label="Wishlist"><Heart size={24} /></ActionButton>
            <ActionButton label="Account"><UserRound size={24} /></ActionButton>
            <ActionButton label="Cart" badge><ShoppingCart size={24} /></ActionButton>
          </div>
        </div>

        <div className="px-4 py-3 lg:hidden">
          <div className="flex h-10 items-center justify-between">
            <button onClick={() => setIsMenuOpen((open) => !open)} className="rounded-lg p-2 text-zinc-100 transition hover:bg-white/10" aria-label="Toggle menu">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link href="/" className="font-serif text-4xl leading-none text-amber-400" aria-label="Oz home">Oz</Link>
            <Link href="/cart" className="relative rounded-lg p-2 text-zinc-100" aria-label="Cart"><ShoppingCart size={22} /><span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[9px] font-bold text-black">3</span></Link>
          </div>
          <div className="mt-3"><SearchBar compact /></div>
        </div>
        {isMenuOpen && <CategoryNavigation mobile />}
      </div>
      <CategoryNavigation />
    </header>
  );
}
