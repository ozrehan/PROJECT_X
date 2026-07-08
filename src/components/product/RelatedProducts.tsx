import Image from "next/image";

const items = [
  {
    name: "Relaxed Linen Shirt",
    price: "₹1,199",
    image: "/images/products/tshirt.jpeg",
    tag: "New",
  },
  {
    name: "Smart Tailored Jacket",
    price: "₹2,499",
    image: "/images/products/jacket.jpeg",
    tag: "Trending",
  },
  {
    name: "Modern Kurta Set",
    price: "₹1,899",
    image: "/images/products/kurta.jpeg",
    tag: "Best seller",
  },
  {
    name: "Classic Formal Shirt",
    price: "₹1,349",
    image: "/images/products/shirt.jpeg",
    tag: "Recommended",
  },
];

export default function RelatedProducts() {
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
        <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 sm:block">
          View all
        </button>
      </div>

      <div className="mt-4 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
        {items.map((item) => (
          <article
            key={item.name}
            className="min-w-[220px] max-w-[220px] snap-start overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/5]">
              <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                {item.tag}
              </span>
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 220px"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900">{item.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-600">{item.price}</span>
                <button className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                  Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}