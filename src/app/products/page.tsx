import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { masterProducts } from "@/lib/products";

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
    subcategory?: string;
    q?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category, subcategory, q } = await searchParams;

  let filtered = [...masterProducts];
  let title = "Fashion Essentials";
  let description = "Browse polished shirts, comfortable tees, and statement layers with a shopping experience that feels as smooth as your favorite app.";

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    title = category;
    description = `Explore our curated selection of premium ${category.toLowerCase()}'s fashion and accessories.`;
  }

  if (subcategory) {
    filtered = filtered.filter(
      (p) => p.subcategory?.toLowerCase() === subcategory.toLowerCase()
    );
    title = `${subcategory}`;
    description = `Premium ${subcategory.toLowerCase()} handpicked for quality, fit, and style.`;
  }

  if (q) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.store.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase())
    );
    title = `Search results for "${q}"`;
    description = `Found ${filtered.length} products matching your search criteria.`;
  }

  return (
    <>
      <Navbar />

      <div className="mx-auto w-full max-w-[1536px] px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
        <section className="overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white shadow-lg sm:p-6 lg:p-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              {category || "Oz Catalog"}
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl font-bold capitalize">
              {title}
            </h1>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
              {description}
            </p>
          </div>
        </section>

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-[24px] mt-6 border border-dashed border-slate-200">
            <span className="text-5xl">🔍</span>
            <h2 className="text-xl font-bold text-slate-700 mt-4">No Products Found</h2>
            <p className="text-slate-500 mt-2">Try clearing your filters or exploring our other sections.</p>
            <Link href="/products" className="inline-block mt-6 bg-slate-950 text-white px-6 py-2.5 rounded-xl text-sm font-semibold">
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
            {filtered.map((product) => {
              const tag = product.labels[0] || "Trending";
              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg flex flex-col justify-between"
                >
                  <Link href={`/products/${product.id}`} className="block relative aspect-[3/4.2] overflow-hidden bg-slate-50">
                    <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-slate-900/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {tag}
                    </span>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-3.5 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[11px] text-slate-400 font-medium block mb-0.5">{product.store}</span>
                      <h2 className="text-sm font-bold text-slate-950 line-clamp-1 hover:text-amber-600 transition">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                      </h2>
                      
                      <div className="mt-1 flex items-center gap-1 text-yellow-500 text-[11px]">
                        <span>⭐ {product.rating}</span>
                        <span className="text-slate-400">({product.reviews})</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
                      <div>
                        <span className="text-base font-extrabold text-slate-950">₹{product.price}</span>
                        <span className="line-through text-slate-400 text-[11px] ml-1.5">₹{product.oldPrice}</span>
                      </div>
                      <Link
                        href={`/products/${product.id}`}
                        className="rounded-full bg-slate-950 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-slate-800 transition"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}