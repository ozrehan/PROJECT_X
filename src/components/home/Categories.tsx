import Image from "next/image";

const categories = [
  { name: "Men", image: "/images/categories/men.png" },
  { name: "Women", image: "/images/categories/women.png" },
  { name: "Kids", image: "/images/categories/kids.png" },
  { name: "Ethnic Wear", image: "/images/categories/ethnic-wear.png" },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            <p className="mt-2 text-sm font-medium">
              {item.name}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}