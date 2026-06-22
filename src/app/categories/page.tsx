const categories = [
  { id: 1, name: "Men", color: "bg-blue-100" },
  { id: 2, name: "Women", color: "bg-pink-100" },
  { id: 3, name: "Kids", color: "bg-yellow-100" },
  { id: 4, name: "Ethnic Wear", color: "bg-purple-100" },
  { id: 5, name: "Accessories", color: "bg-green-100" },
  { id: 6, name: "Footwear", color: "bg-orange-100" },
  { id: 7, name: "Activewear", color: "bg-red-100" },
  { id: 8, name: "Formal", color: "bg-gray-100" },
];

export default function CategoriesPage() {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        Categories
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${category.color} p-4 sm:p-6 rounded-lg sm:rounded-xl hover:shadow-lg transition transform hover:-translate-y-1 active:scale-95`}
          >
            <p className="font-bold text-sm sm:text-base md:text-lg text-center line-clamp-2">
              {category.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}