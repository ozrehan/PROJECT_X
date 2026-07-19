import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { masterProducts } from "@/lib/products";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductSidebar from "@/components/product/ProductSidebar";
import ProductDescription from "@/components/product/ProductDescription";
import RelatedProducts from "@/components/product/RelatedProducts";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = parseInt(id);

  if (isNaN(productId)) {
    notFound();
  }

  const product = masterProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Product Not Found</h1>
          <p className="text-slate-500 mt-2">The product you are looking for does not exist or has been removed.</p>
          <Link href="/" className="inline-block mt-6 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition">
            Go Back Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-slate-800 transition">Home</Link> &gt;{" "}
          <Link href={`/categories/${product.category.toLowerCase().replace(/ /g, "-")}`} className="hover:text-slate-800 transition">{product.category}</Link> &gt;{" "}
          {product.subcategory && (
            <>
              <Link href={`/products?category=${product.category}&subcategory=${product.subcategory}`} className="hover:text-slate-800 transition">{product.subcategory}</Link> &gt;{" "}
            </>
          )}
          <span className="text-black font-medium">{product.name}</span>
        </div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <ProductGallery product={product} />
          </div>

          <div className="lg:col-span-4">
            <ProductInfo product={product} />
          </div>

          <div className="lg:col-span-3">
            <ProductSidebar product={product} />
          </div>
        </div>

        <ProductDescription product={product} />

        <RelatedProducts product={product} />
      </main>

      <Footer />
    </>
  );
}