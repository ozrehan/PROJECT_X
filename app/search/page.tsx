import { Suspense } from "react";
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
            <Suspense fallback={
              <div className="flex-1 rounded-3xl bg-white p-6 shadow-sm shadow-slate-200 flex items-center justify-center min-h-[400px]">
                <div className="text-slate-500 text-lg animate-pulse">Loading search results...</div>
              </div>
            }>
              <ProductResults />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
