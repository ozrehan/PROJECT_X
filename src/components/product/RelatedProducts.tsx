import Image from "next/image";
import Link from "next/link";
import { Product, masterProducts } from "@/lib/products";

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({ product }: RelatedProductsProps) {
  // Find related products in the same category, excluding the current product
  const related = masterProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Fallback to other products if we don't have enough in the same category
  const displayProducts = related.length >= 2 
    ? related 
    : masterProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
            You may also like
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-900">
            Similar picks for your style
          </h2>
        </div>
        <Link href="/products" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition sm:block">
          View all
        </Link>
      </div>

      <div className="mt-4 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
        {displayProducts.map((item) => {
          const tag = item.labels[0] || "Recommended";
          return (
            <article
              key={item.id}
              className="min-w-[220px] max-w-[220px] snap-start overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/products/${item.id}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                    {tag}
                  </span>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="220px"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 line-clamp-1 hover:text-amber-600 transition">
                  <Link href={`/products/${item.id}`}>{item.name}</Link>
                </h3>
                <p className="text-xs text-gray-500 mt-1">{item.store}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-amber-600">₹{item.price}</span>
                  <Link href={`/products/${item.id}`} className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 transition">
                    View
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}