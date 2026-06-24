import Navbar from "@/components/layout/Navbar";
import FiltersSidebar from "@/components/search/FiltersSidebar";
import ProductResults from "@/components/search/ProductResults";

export default function SearchPage() {
  return (
    <>
      <Navbar />
      
      {/* Category Navigation */}
      <div className="border-b border-slate-200 bg-white sticky top-16 z-40">
        <div className="mx-auto max-w-[1600px] px-4 xl:px-0">
          <div className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-medium">
            {['Men', 'Women', 'Kids', 'Ethnic Wear', 'Footwear', 'Accessories', 'New Arrivals', 'Brands', 'Offers'].map((category) => (
              <button
                key={category}
                className="whitespace-nowrap text-slate-700 hover:text-slate-900 transition pb-3 border-b-2 border-transparent hover:border-amber-500"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 min-h-screen py-8">
        <div className="mx-auto max-w-[1600px] px-4 xl:px-0">
          <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
            <FiltersSidebar />
            <ProductResults />
          </div>
        </div>
      </div>
    </>
  );
}