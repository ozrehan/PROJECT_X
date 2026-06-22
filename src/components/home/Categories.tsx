import Image from "next/image";

const categories = [
  { name: "Men", image: "/images/categories/men.png" },
  { name: "Women", image: "/images/categories/women.png" },
  { name: "Kids", image: "/images/categories/kids.png" },
  { name: "Ethnic Wear", image: "/images/categories/ethnic-wear.png" },
];

export default function Categories() {
  return (
    <section className="w-full px-3 sm:px-4 py-4 sm:py-6 max-w-full">
      {/* Mobile: horizontal scroll row; Tablet+ : grid */}
      <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 md:grid-cols-4 sm:gap-4 md:gap-6">
        {categories.map((item) => (
          <button
            key={item.name}
            className="min-w-[110px] sm:min-w-0 flex-shrink-0 sm:flex-shrink-1 flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-100 transition duration-200 hover:shadow-md"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-50 rounded-lg">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
            </div>

            <p className="text-xs sm:text-sm md:text-base font-medium text-center line-clamp-2">
              {item.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}