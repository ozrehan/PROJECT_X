import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Men", icon: "👨" },
  { name: "Women", icon: "👩" },
  { name: "Kids", icon: "👶" },
  { name: "Ethnic Wear", icon: "🧥" },
  { name: "New Arrivals", icon: "⭐" },
  { name: "Brands", icon: "🏷️" },
  { name: "Offers", icon: "🎉" },
];

const sidebarCategories = [
  { name: "Men", count: "" },
  { name: "Women", count: "" },
  { name: "Kids", count: "" },
  { name: "Ethnic Wear", count: "" },
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
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-8">
          <main className="w-full">
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

              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {[
                  { name: "T-Shirts", count: 980, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400" },
                  { name: "Shirts", count: 850, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400" },
                  { name: "Jeans", count: 820, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400" },
                  { name: "Trousers", count: 650, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=400" },
                  { name: "Shorts", count: 420, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=400" },
                  { name: "Jackets", count: 540, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400" },
                  { name: "Hoodies & Sweatshirts", count: 610, image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400" },
                  { name: "Blazers & Suits", count: 310, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" },
                  { name: "Sportswear", count: 560, image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400" },
                  { name: "Ethnic Wear", count: 380, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400" },
                  { name: "Innerwear & Sleepwear", count: 720, image: "https://images.unsplash.com/photo-1544062612-421715494d48?auto=format&fit=crop&q=80&w=400" },
                  { name: "Bags & Backpacks", count: 480, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400" },
                  { name: "Sunglasses", count: 350, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400" },
                ].map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/products?category=${categoryName}&subcategory=${cat.name}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:shadow-lg hover:shadow-slate-200"
                  >
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 250px"
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
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

      {/* Features Section */}
      <div className="border-y border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8">
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
