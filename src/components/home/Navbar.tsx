export default function Navbar() {
  return (
    <>
      <header className="bg-black text-white">

        <div className="max-w-7xl mx-auto px-4 py-4">

          <div className="flex flex-col lg:flex-row items-center gap-4">

            {/* Location */}
            <div className="text-sm">
              <p className="text-gray-400">Deliver to</p>
              <p>📍 Hyderabad, TS</p>
            </div>

            {/* Logo */}
            <div className="flex-1 text-center">
              <h1 className="text-5xl font-bold text-amber-400">
                Oz
              </h1>
            </div>

            {/* Icons */}
            <div className="flex gap-6">
              <button>👤 Login</button>
              <button>🤍 Wishlist</button>
              <button>🛒 Cart</button>
            </div>

          </div>

          {/* Search Bar */}

          <div className="mt-6 flex">

            <button className="bg-zinc-900 px-6 py-4 rounded-l-xl">
              ☰ All Categories
            </button>

            <input
              type="text"
              placeholder="Search products, brands and more..."
              className="flex-1 px-6 py-4 text-black"
            />

            <button className="bg-amber-500 px-8 py-4 rounded-r-xl">
              🔍
            </button>

          </div>

        </div>

      </header>

      {/* Category Menu */}

      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto flex justify-center gap-10 py-4 overflow-x-auto">

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Ethnic Wear</a>
          <a href="#">Footwear</a>
          <a href="#">Accessories</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
          <a href="#">Offers</a>

        </div>

      </div>
    </>
  );
}