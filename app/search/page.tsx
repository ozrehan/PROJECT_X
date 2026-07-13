import Navbar from "@/components/layout/Navbar";
import FiltersSidebar from "@/components/search/FiltersSidebar";
import ProductResults from "@/components/search/ProductResults";

export default function SearchPage() {
  return (
    <>
      <Navbar />

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
