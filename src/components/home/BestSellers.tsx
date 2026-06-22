import Image from "next/image";
import { Heart } from "lucide-react";

const products = [
  {
    name: "Linen Shirt",
    store: "Fashion Hub",
    price: "799",
    oldPrice: "1499",
    discount: "47% OFF",
    rating: "4.8",
    image: "/images/bestsellers/linen-shirt.jpeg",
  },
  {
    name: "Casual Shirt",
    store: "Urban Tribe",
    price: "649",
    oldPrice: "1299",
    discount: "50% OFF",
    rating: "4.6",
    image: "/images/bestsellers/casual-shirt.jpeg",
  },
  {
    name: "Cotton Kurta",
    store: "Ethnic Villa",
    price: "899",
    oldPrice: "1699",
    discount: "47% OFF",
    rating: "4.7",
    image: "/images/bestsellers/cotton-kurta.jpeg",
  },
  {
    name: "Cargo Pants",
    store: "Street Style",
    price: "799",
    oldPrice: "1499",
    discount: "47% OFF",
    rating: "4.8",
    image: "/images/bestsellers/cargo-pant.jpeg",
  },
  {
    name: "Saree",
    store: "Miss Boutique",
    price: "1499",
    oldPrice: "2499",
    discount: "40% OFF",
    rating: "4.6",
    image: "/images/bestsellers/saree.jpeg",
  },
  {
    name: "Hoodie",
    store: "Urban Tribe",
    price: "699",
    oldPrice: "1299",
    discount: "46% OFF",
    rating: "4.6",
    image: "/images/bestsellers/hoodie.jpeg",
  },
];

export default function BestSellers() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          BEST SELLERS
        </h2>

        <button className="font-medium">
          View all →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        {products.map((product) => (
          <div
            key={product.name}
            className="group cursor-pointer"
          >

            <div className="bg-gray-50 rounded-2xl p-4 relative">

              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                <Heart size={16} />
              </button>

              <div className="h-64 flex items-center justify-center">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={220}
                  className="object-contain group-hover:scale-105 transition"
                />

              </div>

            </div>

            <h3 className="mt-3 font-medium">
              {product.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {product.store}
            </p>

            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <span className="font-bold text-xl">
                ₹{product.price}
              </span>

              <span className="line-through text-gray-400 text-sm">
                ₹{product.oldPrice}
              </span>

              <span className="text-red-500 text-sm">
                {product.discount}
              </span>
            </div>

            <p className="text-yellow-500 mt-2">
              ⭐ {product.rating}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}