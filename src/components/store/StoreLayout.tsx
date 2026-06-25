import StoreFilters from "./StoreFilters";
import StoreProducts from "./StoreProducts";
import StoreSidebar from "./StoreSidebar";

export default function StoreLayout() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      <div className="grid grid-cols-12 gap-6">

        {/* Left Filters */}
        <div className="col-span-3">
          <StoreFilters />
        </div>

        {/* Products */}
        <div className="col-span-6">
          <StoreProducts />
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3">
          <StoreSidebar />
        </div>

      </div>

    </section>
  );
} 