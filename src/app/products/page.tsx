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
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4"
          >
            <h2 className="font-bold">
              {product.name}
            </h2>

            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}