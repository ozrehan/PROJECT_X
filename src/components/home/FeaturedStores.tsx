import Image from "next/image";

const stores = [
  {
    name: "Fashion Hub",
    image: "/images/stores/fashion-hub.jpeg",
    rating: "4.8",
    products: "1300+ Products",
  },
  {
    name: "Ethnic Villa",
    image: "/images/stores/ethnic-villa.jpeg",
    rating: "4.7",
    products: "950+ Products",
  },
  {
    name: "Urban Tribe",
    image: "/images/stores/urban-tribe.jpeg",
    rating: "4.6",
    products: "1100+ Products",
  },
  {
    name: "Street Style",
    image: "/images/stores/street-style.jpeg",
    rating: "4.5",
    products: "950+ Products",
  },
  {
    name: "Miss Boutique",
    image: "/images/stores/miss-boutique.jpeg",
    rating: "4.7",
    products: "700+ Products",
  },
];

export default function FeaturedStores() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">

      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl">
          FEATURED STORES
        </h2>

        <button className="text-gray-600">
          View all stores →
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:grid-cols-5 md:gap-4 no-scrollbar">

        {stores.map((store) => (
          <div
            key={store.name}
            className="relative rounded-2xl overflow-hidden h-36 sm:h-44 md:h-52 min-w-[160px] flex-shrink-0 snap-start group cursor-pointer"
          >

            <Image
              src={store.image}
              alt={store.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute bottom-2 left-3 text-white">

              <h3 className="font-bold text-[13px] sm:text-sm">
                {store.name}
              </h3>

              <p className="text-yellow-400 mt-1 text-[11px]">
                ⭐ {store.rating}
              </p>

              <p className="text-[10px] mt-1">
                👜 {store.products}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}