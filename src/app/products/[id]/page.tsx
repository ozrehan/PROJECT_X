import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductSidebar from "@/components/product/ProductSidebar";
import ProductDescription from "@/components/product/ProductDescription";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6">

        {/* Breadcrumb */}

        <div className="text-sm text-gray-500 mb-6">
          Home &gt; Men &gt; Shirts &gt;
          <span className="text-black font-medium">
            {" "}Black Formal Shirt
          </span>
        </div>

        {/* Top Section */}

        <div className="grid lg:grid-cols-12 gap-8">

          <div className="lg:col-span-5">
            <ProductGallery />
          </div>

          <div className="lg:col-span-4">
            <ProductInfo />
          </div>

          <div className="lg:col-span-3">
            <ProductSidebar />
          </div>

        </div>

        <ProductDescription />

        <RelatedProducts />

      </main>

      <Footer />
    </>
  );
}