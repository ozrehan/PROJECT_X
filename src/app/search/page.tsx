export default function SearchPage() {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        Search Results
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {/* Search result cards would be populated here */}
        <div className="border rounded-lg sm:rounded-xl p-3 sm:p-4 bg-gray-50 flex items-center justify-center text-center text-gray-500 h-32 sm:h-40">
          <p className="text-xs sm:text-sm">Search results appear here</p>
        </div>
      </div>
    </div>
  );
}