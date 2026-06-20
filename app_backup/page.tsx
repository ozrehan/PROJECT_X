export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b">
        <h1 className="text-3xl font-bold text-orange-500">Oz</h1>

        <input
          type="text"
          placeholder="Search fashion products..."
          className="border rounded-lg px-4 py-2 w-96"
        />

        <div className="flex gap-6">
          <button>Become Seller</button>
          <button>Login</button>
          <button>Cart</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 bg-orange-50">
        <h1 className="text-6xl font-bold mb-4">
          Fashion Delivered in 24 Hours
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Shop from Hyderabad's best clothing stores.
        </p>

        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">Categories</h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            "Men",
            "Women",
            "Kids",
            "Shoes",
            "Sports",
            "Accessories",
          ].map((cat) => (
            <div
              key={cat}
              className="border rounded-xl p-6 text-center hover:shadow-lg cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Stores */}
      <section className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Featured Stores</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Fashion Hub",
            "Style Studio",
            "Urban Closet",
            "Trendify",
          ].map((store) => (
            <div
              key={store}
              className="bg-white border rounded-xl p-6 hover:shadow-lg"
            >
              <h3 className="font-bold">{store}</h3>
              <p className="text-gray-500">
                Premium Fashion Store
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">Trending Products</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="border rounded-xl overflow-hidden hover:shadow-xl"
            >
              <div className="h-56 bg-gray-200"></div>

              <div className="p-4">
                <h3 className="font-bold">Premium Shirt</h3>
                <p className="text-gray-500">Fashion Hub</p>
                <p className="font-bold text-orange-500">₹999</p>

                <button className="w-full bg-orange-500 text-white py-2 mt-3 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-10 text-center">
        <h2 className="text-2xl font-bold">Oz</h2>
        <p>Fashion delivered fast across Hyderabad.</p>
      </footer>
    </main>
  );
}