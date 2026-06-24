import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Men", icon: "👨" },
  { name: "Women", icon: "👩" },
  { name: "Kids", icon: "👶" },
  { name: "Ethnic Wear", icon: "🧥" },
  { name: "Footwear", icon: "👟" },
  { name: "Accessories", icon: "🎩" },
  { name: "New Arrivals", icon: "⭐" },
  { name: "Brands", icon: "🏷️" },
  { name: "Offers", icon: "🎉" },
];

const sidebarCategories = [
  { name: "Men", count: "" },
  { name: "Women", count: "" },
  { name: "Kids", count: "" },
  { name: "Ethnic Wear", count: "" },
  { name: "Footwear", count: "" },
  { name: "Accessories", count: "" },
  { name: "Brands", count: "" },
  { name: "New Arrivals", count: "" },
  { name: "Offers", count: "" },
];

const shopByOptions = [
  { name: "Topwear", count: "" },
  { name: "Bottomwear", count: "" },
  { name: "Winter Wear", count: "" },
  { name: "Sportswear", count: "" },
  { name: "Footwear & Sleepwear", count: "" },
  { name: "Accessories", count: "" },
];

interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = params.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <Navbar />

      {/* Category Navigation */}
      <div className="border-b border-slate-200 bg-white sticky top-16 z-40">
        <div className="mx-auto max-w-[1600px] px-4 xl:px-0">
          <div className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-medium">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/categories/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                className="whitespace-nowrap text-slate-700 hover:text-slate-900 transition pb-3 border-b-2 border-transparent hover:border-amber-500"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-[1600px] px-4 xl:px-0 py-8">
          <div className="grid gap-6 xl:grid-cols-[240px_1fr]">
            {/* Sidebar */}
            <aside className="hidden xl:block">
              <div className="space-y-6 sticky top-32">
                {/* Categories Section */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-900">Categories</h3>
                  <div className="space-y-2">
                    {sidebarCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={`/categories/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                          cat.name === categoryName
                            ? "bg-amber-50 text-amber-700 font-semibold"
                            : "text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <ChevronRight size={16} />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Shop By Section */}
                <div className="border-t border-slate-200 pt-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-900">Shop By</h3>
                  <div className="space-y-2">
                    {shopByOptions.map((option) => (
                      <Link
                        key={option.name}
                        href={`/categories/${categoryName.toLowerCase().replace(/ /g, "-")}/${option.name.toLowerCase().replace(/ /g, "-")}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition text-sm"
                      >
                        <span>{option.name}</span>
                        <ChevronRight size={16} />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="border-t border-slate-200 pt-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-900">Price Range</h3>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span>₹199</span>
                    <span>₹9999</span>
                  </div>
                  <input
                    type="range"
                    min="199"
                    max="9999"
                    defaultValue="5000"
                    aria-label="Price range"
                    className="w-full accent-amber-500"
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main>
              {/* Header */}
              <div className="mb-8">
                <div className="mb-3 text-sm text-slate-600">
                  <Link href="/" className="hover:text-slate-900">Home</Link> / <Link href="/categories" className="hover:text-slate-900">Categories</Link> / <span className="font-semibold text-slate-900">{categoryName}</span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">{categoryName}</h1>
                    <p className="text-slate-600">Discover our wide range of {categoryName.toLowerCase()} fashion across top styles and categories.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">Shop by Category</div>
                    <div className="text-3xl font-bold text-slate-900">36 Categories</div>
                  </div>
                </div>
              </div>

              {/* Category Grid */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {[
                  { name: "T-Shirts", count: 980, image: "👕" },
                  { name: "Shirts", count: 0, image: "🧵" },
                  { name: "Jeans", count: 820, image: "👖" },
                  { name: "Trousers", count: 650, image: "📍" },
                  { name: "Shorts", count: 420, image: "⏱️" },
                  { name: "Jackets", count: 540, image: "🧥" },
                  { name: "Hoodies & Sweatshirts", count: 610, image: "🎽" },
                  { name: "Blazers & Suits", count: 310, image: "🎩" },
                  { name: "Sportswear", count: 560, image: "⚽" },
                  { name: "Ethnic Wear", count: 380, image: "🧣" },
                  { name: "Innerwear & Sleepwear", count: 720, image: "🛏️" },
                  { name: "Shoes", count: 960, image: "👟" },
                  { name: "Accessories", count: 1140, image: "🎒" },
                  { name: "Bags & Backpacks", count: 480, image: "🎒" },
                  { name: "Sunglasses", count: 350, image: "😎" },
                ].map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/products?category=${categoryName}&subcategory=${cat.name}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:shadow-lg hover:shadow-slate-200"
                  >
                    <div className="relative h-40 w-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center overflow-hidden">
                      <span className="text-5xl group-hover:scale-110 transition">{cat.image}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900 text-sm">{cat.name}</h3>
                      {cat.count > 0 && <p className="text-xs text-slate-500 mt-1">From ₹299</p>}
                    </div>
                  </Link>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-y border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-[1600px] px-4 xl:px-0">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: "🏆", title: "Top Quality Products", desc: "Premium quality & trusted brands" },
              { icon: "↩️", title: "Easy Returns", desc: "7 days return & easy refunds" },
              { icon: "🚚", title: "Fast Delivery", desc: "Quick delivery at your doorstep" },
              { icon: "💰", title: "Best Prices", desc: "Unbeatable prices & offers" },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-3 flex justify-center">{feature.icon}</div>
                <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
