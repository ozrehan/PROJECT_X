"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Eye,
  EyeOff,
  Headphones,
  Heart,
  Lock,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Search,
  Shield,
  ShoppingCart,
  Truck,
  User,
  UserRound,
} from "lucide-react";

const socialIcons = [
  // Instagram
  <svg key="ig" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>,
  // Facebook
  <svg key="fb" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>,
  // X
  <svg key="x" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>,
  // YouTube
  <svg key="yt" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>,
];

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

function PasswordField({
  placeholder,
  show,
  onToggle,
}: {
  placeholder: string;
  show: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pl-9 pr-9 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30"
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-zinc-400 hover:text-zinc-600"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
    </div>
  );
}

function RegisterFooter() {
  return (
    <footer className="shrink-0 bg-black text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-5 gap-6 px-8 py-5">
        <div>
          <p className="font-serif text-4xl leading-none text-[#D4AF37]">Oz</p>
          <p className="mt-2 text-xs text-zinc-400">Your Style. Our Priority.</p>
          <p className="mt-2 max-w-[180px] text-[11px] leading-5 text-zinc-500">
            India&apos;s fastest fashion marketplace. Shop from top stores near you.
          </p>
          <div className="mt-3 flex gap-2">
            {socialIcons.map((icon, i) => (
              <span
                key={i}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 text-zinc-300"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-bold tracking-wide">SHOP</h3>
          <ul className="space-y-1 text-[11px] text-zinc-400">
            {["Men", "Women", "Kids", "Footwear", "Accessories"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-bold tracking-wide">HELP</h3>
          <ul className="space-y-1 text-[11px] text-zinc-400">
            {["Contact Us", "FAQs", "Returns", "Shipping"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-bold tracking-wide">ABOUT OZ</h3>
          <ul className="space-y-1 text-[11px] text-zinc-400">
            {["About Us", "Careers", "Privacy Policy", "Terms of Service"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-bold tracking-wide">DOWNLOAD OUR APP</h3>
          <div className="space-y-2">
            <button className="flex w-full items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-left text-[10px] transition hover:bg-zinc-900">
              <span className="text-lg">▶</span>
              <span>
                <span className="block text-[9px] text-zinc-400">GET IT ON</span>
                <span className="font-semibold">Google Play</span>
              </span>
            </button>
            <button className="flex w-full items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-left text-[10px] transition hover:bg-zinc-900">
              <span className="text-lg"></span>
              <span>
                <span className="block text-[9px] text-zinc-400">Download on the</span>
                <span className="font-semibold">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-2.5 text-center text-[11px] text-zinc-500">
        © 2025 Oz. All rights reserved.
      </div>
    </footer>
  );
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const trustItems = [
    { icon: Truck, title: "Same Day Delivery", desc: "Super fast delivery within hours" },
    { icon: RotateCcw, title: "Easy Returns", desc: "7 days return policy" },
    { icon: Shield, title: "Secure Payments", desc: "100% safe & secure" },
    { icon: Headphones, title: "24/7 Support", desc: "We're here to help you" },
  ];

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#f3f4f6] text-zinc-900">
      {/* Header */}
      <header className="shrink-0">
        <div className="bg-black text-white shadow-[0_3px_14px_rgba(0,0,0,0.3)]">
          <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-6 px-8">
            <Link href="/" className="shrink-0 font-serif text-[42px] leading-none tracking-tight text-[#D4AF37]">
              Oz
            </Link>

            <button className="flex shrink-0 items-center gap-2 rounded-lg px-2 py-1 text-left transition hover:bg-white/10">
              <MapPin size={16} className="text-[#D4AF37]" />
              <span>
                <span className="block text-[10px] leading-3 text-zinc-400">Deliver to</span>
                <span className="flex items-center gap-1 text-xs font-semibold">
                  Hyderabad, TS <ChevronDown size={12} />
                </span>
              </span>
            </button>

            <form className="flex h-11 min-w-0 flex-1 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
              <div className="flex min-w-0 flex-1 items-center gap-3 px-4 text-zinc-400">
                <Search size={18} strokeWidth={2} />
                <input
                  placeholder="Search for products, brands and more..."
                  className="min-w-0 flex-1 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400"
                />
              </div>
              <button type="button" className="hidden items-center gap-2 border-l border-zinc-200 px-4 text-sm text-zinc-600 md:flex">
                All Categories <ChevronDown size={14} />
              </button>
              <button type="submit" className="flex w-[48px] items-center justify-center bg-[#D4AF37] text-white transition hover:bg-[#c9a430]">
                <Search size={20} />
              </button>
            </form>

            <div className="flex shrink-0 items-center gap-4">
              {[
                { label: "Wishlist", icon: Heart },
                { label: "Account", icon: UserRound },
                { label: "Cart", icon: ShoppingCart, badge: "2" },
              ].map(({ label, icon: Icon, badge }) => (
                <Link
                  key={label}
                  href={label === "Cart" ? "/cart" : label === "Account" ? "/login" : "/wishlist"}
                  className="group relative flex min-w-12 flex-col items-center gap-0.5 rounded-lg px-1 py-1 text-white transition hover:bg-white/10"
                >
                  <span className="relative text-zinc-100 transition group-hover:text-[#D4AF37]">
                    <Icon size={22} />
                    {badge && (
                      <span className="absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#D4AF37] px-1 text-[9px] font-bold text-black">
                        {badge}
                      </span>
                    )}
                  </span>
                  <span className="text-[10px] font-medium leading-none">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <nav className="border-b border-zinc-200 bg-white shadow-sm">
          <div className="mx-auto flex h-11 max-w-[1440px] items-center justify-center gap-8 px-8">
            {categories.map((category) => (
              <Link
                key={category}
                href="/categories"
                className="text-sm font-medium text-zinc-900 transition hover:text-[#b8942d]"
              >
                {category}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Main registration card */}
      <main className="flex min-h-0 flex-1 items-center justify-center px-6 py-3">
        <div className="grid h-full max-h-[520px] w-full max-w-[1280px] grid-cols-2 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]">
          {/* Left promotional panel — image only, text is baked in */}
          <div className="relative min-h-0 overflow-hidden bg-[#f6f2ee]">
            <Image
              src="/images/auth/register-panel.png"
              alt="Join the Oz family"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right registration form */}
          <div className="flex min-h-0 flex-col justify-center overflow-hidden px-8 py-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Create Your Account</h2>
              <p className="mt-0.5 text-sm text-zinc-500">Sign up to get started with Oz</p>
            </div>

            <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30"
                  />
                </div>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30"
                  />
                </div>
              </div>

              <div className="relative">
                <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <PasswordField placeholder="Password" show={showPassword} onToggle={() => setShowPassword((v) => !v)} />
                <PasswordField
                  placeholder="Confirm Password"
                  show={showConfirmPassword}
                  onToggle={() => setShowConfirmPassword((v) => !v)}
                />
              </div>

              <label className="flex cursor-pointer items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-300 accent-[#D4AF37]"
                />
                <span className="text-[11px] leading-4 text-zinc-600">
                  I agree to the{" "}
                  <Link href="/terms" className="font-medium text-[#D4AF37] hover:underline">
                    Terms &amp; Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="font-medium text-[#D4AF37] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-black py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-zinc-200" />
              <span className="text-[11px] text-zinc-400">or sign up with</span>
              <span className="h-px flex-1 bg-zinc-200" />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white py-2.5 text-xs font-medium text-zinc-800 transition hover:bg-zinc-50">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white py-2.5 text-xs font-medium text-zinc-800 transition hover:bg-zinc-50">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.54.12 2.71.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Continue with Apple
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-zinc-500">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#D4AF37] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Trust bar */}
      <section className="shrink-0 border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-4 px-6">
          {trustItems.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className={`flex items-center gap-3 px-4 py-3 ${index > 0 ? "border-l border-zinc-200" : ""}`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-700">
                <Icon size={17} />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">{title}</p>
                <p className="text-[11px] text-zinc-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RegisterFooter />
    </div>
  );
}
