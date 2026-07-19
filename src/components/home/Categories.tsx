import Image from "next/image";
import Link from "next/link";

const categories = [
  { 
    name: "Men", 
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300" 
  },
  { 
    name: "Women", 
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300" 
  },
  { 
    name: "Kids", 
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=300" 
  },
  { 
    name: "Ethnic Wear", 
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=300" 
  },
];

export default function Categories() {
  return (
    <section className="w-full px-3 sm:px-4 py-4 sm:py-6 max-w-7xl mx-auto">
      <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:gap-4 md:gap-6">
        {categories.map((item) => (
          <Link
            key={item.name}
            href={`/categories/${item.name.toLowerCase().replace(/ /g, "-")}`}
            className="min-w-[110px] sm:min-w-0 flex-shrink-0 flex flex-col items-center gap-2 sm:gap-3 p-3 rounded-2xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50/20 transition duration-300 hover:shadow-md group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative overflow-hidden rounded-xl bg-gray-50">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 80px, 120px"
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <p className="text-xs sm:text-sm md:text-base font-semibold text-center text-slate-800 group-hover:text-amber-700 transition">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}