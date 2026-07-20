import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

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

            {/* Tall Vertical Portrait Rectangular Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {[
                { name: "Dresses & Maxis", count: 1240, image: "/images/products/dress.jpeg" },
                { name: "Party Dresses", count: 980, image: "/images/products/dress-2.jpeg" },
                { name: "Anarkali & Kurtas", count: 850, image: "/images/products/kurta.jpeg" },
                { name: "Silk Sarees", count: 920, image: "/images/bestsellers/saree.jpeg" },
                { name: "Cotton Kurtas", count: 750, image: "/images/bestsellers/cotton-kurta.jpeg" },
                { name: "Casual Shirts", count: 850, image: "/images/bestsellers/casual-shirt.jpeg" },
                { name: "Formal Shirts", count: 650, image: "/images/products/shirt.jpeg" },
                { name: "Jeans & Trousers", count: 820, image: "/images/products/jeans.jpeg" },
                { name: "Cargo Pants", count: 420, image: "/images/bestsellers/cargo-pant.jpeg" },
                { name: "Jackets & Blazers", count: 540, image: "/images/products/blazer.jpeg" },
                { name: "Hoodies & Sweatshirts", count: 610, image: "/images/bestsellers/hoodie.jpeg" },
                { name: "Footwear & Shoes", count: 560, image: "/images/products/shoe.jpeg" },
              ].map((cat) => (
                <Link
                  key={cat.name}
                  href={`/products?category=${categoryName}&subcategory=${cat.name}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200 flex flex-col justify-between"
                >
                  {/* Tall Portrait Rectangle Image Container */}
                  <div className="relative aspect-[3/4.2] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 250px"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-3.5">
                    <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{cat.name}</h3>
                    {cat.count > 0 && <p className="text-xs text-slate-500 mt-0.5">From ₹299</p>}
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
