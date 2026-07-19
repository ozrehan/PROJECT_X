import Image from "next/image";
import Link from "next/link";

const stores = [
  {
    name: "Fashion Hub",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400",
    rating: "4.8",
    products: "1300+ Products",
  },
  {
    name: "Ethnic Villa",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=400",
    rating: "4.7",
    products: "950+ Products",
  },
  {
    name: "Urban Tribe",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=400",
    rating: "4.6",
    products: "1100+ Products",
  },
  {
    name: "Street Style",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=400",
    rating: "4.5",
    products: "950+ Products",
  },
  {
    name: "Miss Boutique",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=400",
    rating: "4.7",
    products: "700+ Products",
  },
];

export default function FeaturedStores() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl uppercase tracking-wide">
          FEATURED STORES
        </h2>
        <Link href="/stores" className="text-gray-600 hover:text-amber-600 transition">
          View all stores →
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:grid-cols-5 md:gap-4 no-scrollbar">
        {stores.map((store) => (
          <Link
            href={store.name === "Fashion Hub" ? "/stores/fashion-hub" : `/search?q=${encodeURIComponent(store.name)}`}
            key={store.name}
            className="relative rounded-2xl overflow-hidden h-36 sm:h-44 md:h-52 min-w-[160px] flex-shrink-0 snap-start group cursor-pointer border border-slate-100"
          >
            <Image
              src={store.image}
              alt={store.name}
              fill
              sizes="(max-width: 768px) 160px, 250px"
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition duration-300" />

            <div className="absolute bottom-3 left-4 text-white">
              <h3 className="font-bold text-sm sm:text-base group-hover:text-amber-300 transition">
                {store.name}
              </h3>
              <p className="text-yellow-400 mt-1 text-xs">
                ⭐ {store.rating}
              </p>
              <p className="text-gray-300 text-[11px] mt-1">
                👜 {store.products}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}