import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: "₹999",
    image: "/images/products/shirt.jpeg",
    tag: "Best seller",
  },
  {
    id: 2,
    name: "Soft Cotton Tee",
    price: "₹699",
    image: "/images/products/tshirt.jpeg",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Modern Jacket",
    price: "₹1,799",
    image: "/images/products/jacket.jpeg",
    tag: "New",
  },
  {
    id: 4,
    name: "Elegant Kurta",
    price: "₹1,499",
    image: "/images/products/kurta.jpeg",
    tag: "Premium",
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white shadow-xl sm:p-8 lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
            Clothing essentials
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Fresh styles for every day and every occasion.
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            Browse polished shirts, comfortable tees, and statement layers with a
            shopping experience that feels as smooth as your favorite app.
          </p>
        </div>
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {featuredProducts.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                {product.tag}
              </span>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h2 className="text-base font-semibold text-slate-900">{product.name}</h2>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-600">{product.price}</span>
                <button className="rounded-full bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white">
                  View
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}