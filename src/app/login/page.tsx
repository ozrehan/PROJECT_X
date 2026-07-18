"use client";
import Image from "next/image";
import { ArrowRight, Heart, MapPin, Search, ShoppingCart, Truck, ShieldCheck, User } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f1efe8] text-slate-900">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/auth/jack.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-white/60" />
      <header className="relative border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="text-[46px] font-serif font-semibold tracking-tight text-[#D9A441]">Oz</div>
            <div className="hidden sm:flex flex-col text-sm text-slate-500">
              <span>Deliver to</span>
              <div className="flex items-center gap-1 font-medium text-slate-900">
                <MapPin size={14} className="text-[#D9A441]" />
                Hyderabad, TS
                <span className="text-[10px]">▼</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <Search size={18} className="text-slate-400" />
            <input
              type="search"
              placeholder="Search for products, brands and more..."
              className="ml-3 flex-1 border-none bg-transparent text-sm outline-none"
            />
            <div className="ml-4 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">All Categories ▼</div>
          </div>

          <div className="ml-auto flex items-center gap-10 text-slate-700">
            <div className="hidden md:flex items-center gap-2 text-sm"><Heart size={18} />Wishlist</div>
            <div className="hidden md:flex items-center gap-2 text-sm"><User size={18} />Account</div>
            <div className="relative flex items-center gap-2 text-sm">
              <ShoppingCart size={18} />
              Cart
              <span className="absolute -right-3 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#D9A441] px-1.5 text-[10px] font-bold text-black">2</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-6 py-10">
        <div className="grid gap-8 xl:grid-cols-[1.45fr_1fr]">
          <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_35px_60px_-30px_rgba(15,23,42,0.5)]">
            <div className="grid gap-8 xl:grid-cols-[1fr_0.9fr] items-start">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D9A441]">Welcome back</p>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950">
                  Welcome back to
                  <span className="block text-[#D9A441]">Oz</span>
                </h1>
                <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
                  Login to access the best of fashion from top stores near you.
                </p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  <div className="flex gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#D9A441]/10 text-[#D9A441]"><MapPin size={18} /></div>
                    <div>
                      <p className="font-semibold text-slate-900">Top Stores Near You</p>
                      <p className="text-sm text-slate-500">Shop from the best local stores around you.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#D9A441]/10 text-[#D9A441]"><Truck size={18} /></div>
                    <div>
                      <p className="font-semibold text-slate-900">Same Day Delivery</p>
                      <p className="text-sm text-slate-500">Get your order delivered in hours, not days.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#D9A441]/10 text-[#D9A441]"><ShieldCheck size={18} /></div>
                    <div>
                      <p className="font-semibold text-slate-900">Secure Shopping</p>
                      <p className="text-sm text-slate-500">100% secure payments and easy returns.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#D9A441]/10 text-[#D9A441]"><Heart size={18} /></div>
                    <div>
                      <p className="font-semibold text-slate-900">Best Prices</p>
                      <p className="text-sm text-slate-500">Exclusive deals & offers every day.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] bg-slate-100">
                <Image src="/images/auth/login-banner.png" alt="Login banner" width={900} height={900} className="object-cover" />
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <p className="text-2xl font-semibold text-slate-950">10,000+</p>
                <p className="mt-2 text-sm text-slate-500">Happy Customers</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <p className="text-2xl font-semibold text-slate-950">500+</p>
                <p className="mt-2 text-sm text-slate-500">Top Stores</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <p className="text-2xl font-semibold text-slate-950">4.7</p>
                <p className="mt-2 text-sm text-slate-500">App Rating</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <p className="text-2xl font-semibold text-slate-950">Fast & Reliable</p>
                <p className="mt-2 text-sm text-slate-500">Every order delivered quickly</p>
              </div>
            </div>
          </section>

          <aside className="relative rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_35px_60px_-30px_rgba(15,23,42,0.4)]">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#D9A441]/15 to-transparent" />
            <div className="relative">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D9A441]">Login</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-950">Welcome back! Please login to your account.</h2>
              </div>

              <div className="space-y-6">
                <label className="block text-sm font-medium text-slate-700">
                  Phone Number
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/20"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Password
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/20"
                  />
                </label>
              </div>

              <div className="mt-4 flex justify-end text-sm text-slate-600">
                <button className="font-medium text-slate-900">Forgot Password?</button>
              </div>

              <button className="mt-8 flex w-full items-center justify-center rounded-3xl bg-slate-950 px-5 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
                Login
                <ArrowRight size={18} />
              </button>

              <div className="my-6 flex items-center gap-3 text-sm text-slate-500">
                <span className="flex-1 h-px bg-slate-200"></span>
                OR
                <span className="flex-1 h-px bg-slate-200"></span>
              </div>

              <div className="space-y-4">
                <button className="flex w-full items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-base">G</span>
                  Continue with Google
                </button>
                <button className="flex w-full items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-base">A</span>
                  Continue with Apple
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-slate-500">
                Don&apos;t have an account? <span className="font-semibold text-[#D9A441]">Sign Up</span>
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="font-semibold text-slate-950">Same Day Delivery</p>
            <p className="mt-2 text-sm text-slate-500">Super fast delivery within hours</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="font-semibold text-slate-950">Easy Returns</p>
            <p className="mt-2 text-sm text-slate-500">7 days return policy</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="font-semibold text-slate-950">Secure Payments</p>
            <p className="mt-2 text-sm text-slate-500">100% safe & secure</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="font-semibold text-slate-950">24/7 Support</p>
            <p className="mt-2 text-sm text-slate-500">We&apos;re here to help you</p>
          </div>
        </div>
      </main>
    </div>
  );
}
