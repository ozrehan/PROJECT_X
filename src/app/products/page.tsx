import { Product } from "@/types/product";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "http://localhost:3000/api/products",
    {
      cache: "no-store",
    }
  );

  return res.json() as Promise<Product[]>;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
        Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="border rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-lg transition hover:border-amber-400"
          >
            <h2 className="font-bold text-xs sm:text-sm md:text-base line-clamp-2">
              {product.name}
            </h2>

            <p className="text-amber-500 font-semibold text-sm sm:text-base mt-2">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}