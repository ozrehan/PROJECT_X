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

export default function CategoriesPage() {
  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-8">
          <main className="w-full">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-3 text-sm text-slate-600">
                  <Link href="/" className="hover:text-slate-900">Home</Link> / <Link href="/categories" className="hover:text-slate-900">Categories</Link> / <span className="font-semibold text-slate-900">Men</span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Men</h1>
                    <p className="text-slate-600">Discover our wide range of men&apos;s fashion across top styles and categories.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">Shop by Category</div>
                    <div className="text-3xl font-bold text-slate-900">36 Categories</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {[
                  { name: "T-Shirts", count: 980, image: "/images/products/tshirt.jpeg" },
                  { name: "Shirts", count: 850, image: "/images/products/shirt.jpeg" },
                  { name: "Jeans", count: 820, image: "/images/products/jeans.jpeg" },
                  { name: "Trousers", count: 650, image: "/images/bestsellers/cargo-pant.jpeg" },
                  { name: "Shorts", count: 420, image: "/images/bestsellers/cargo-pant.jpeg" },
                  { name: "Jackets", count: 540, image: "/images/products/jacket.jpeg" },
                  { name: "Hoodies & Sweatshirts", count: 610, image: "/images/bestsellers/hoodie.jpeg" },
                  { name: "Blazers & Suits", count: 310, image: "/images/products/blazer.jpeg" },
                  { name: "Sportswear", count: 560, image: "/images/products/tshirt.jpeg" },
                  { name: "Ethnic Wear", count: 380, image: "/images/products/kurta.jpeg" },
                  { name: "Innerwear & Sleepwear", count: 720, image: "/images/bestsellers/hoodie.jpeg" },
                  { name: "Bags & Backpacks", count: 480, image: "/images/products/jacket.jpeg" },
                  { name: "Sunglasses", count: 350, image: "/images/products/sunglasses.jpeg" },
                ].map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/categories/men/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:shadow-lg hover:shadow-slate-200"
                  >
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
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
