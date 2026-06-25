import Image from "next/image";

const categories = [
  {
    name: "T-Shirts",
    image: "/images/stores/categories/tshirt.png",
  },
  {
    name: "Shirts",
    image: "/images/stores/categories/shirt.png",
  },
  {
    name: "Jeans",
    image: "/images/stores/categories/jeans.png",
  },
  {
    name: "Trousers",
    image: "/images/stores/categories/trousers.png",
  },
  {
    name: "Jackets",
    image: "/images/stores/categories/jacket.png",
  },
  {
    name: "Hoodies",
    image: "/images/stores/categories/hoodie.png",
  },
  {
    name: "Blazers",
    image: "/images/stores/categories/blazer.png",
  },
  {
    name: "View All",
    image: "/images/stores/categories/viewall.png",
  },
];

export default function StoreCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      <h2 className="text-3xl font-bold mb-8">
        Shop by Category
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-6">

        {categories.map((category) => (
          <button
            key={category.name}
            className="group flex flex-col items-center"
          >

            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-lg transition">

              <Image
                src={category.image}
                alt={category.name}
                width={70}
                height={70}
                className="object-contain group-hover:scale-110 transition"
              />

            </div>

            <span className="mt-3 text-sm font-medium">
              {category.name}
            </span>

          </button>
        ))}

      </div>

    </section>
  );
}