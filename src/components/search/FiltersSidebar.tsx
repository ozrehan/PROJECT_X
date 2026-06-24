export default function FiltersSidebar() {
  return (
    <aside className="w-[320px] border-r border-slate-200 min-h-screen p-6 hidden xl:block bg-white">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold tracking-[0.05em] text-slate-900">FILTERS</h2>
        <button className="text-sm text-amber-500">Clear All</button>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Category</h3>
          <span className="text-xs text-slate-400">1,248</span>
        </div>
        <div className="space-y-3 text-sm text-slate-700">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-amber-500" />
            <span>All Categories</span>
            <span className="ml-auto text-slate-400">(1,248)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-amber-500" />
            <span>Shirts</span>
            <span className="ml-auto text-slate-400">(520)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-amber-500" />
            <span>T-Shirts</span>
            <span className="ml-auto text-slate-400">(420)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-amber-500" />
            <span>Formal Shirts</span>
            <span className="ml-auto text-slate-400">(210)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-amber-500" />
            <span>Casual Shirts</span>
            <span className="ml-auto text-slate-400">(120)</span>
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Price Range</h3>
        <div className="space-y-4 text-sm text-slate-700">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>₹199</span>
            <span>₹2,999</span>
          </div>
          <input
            type="range"
            min="199"
            max="2999"
            defaultValue="1400"
            aria-label="Price range"
            className="w-full accent-amber-500"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Size</h3>
        <div className="flex flex-wrap gap-2">
          {['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'].map((size) => (
            <button key={size} className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:border-amber-500 hover:text-amber-600 transition">
              {size}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Color</h3>
        <div className="flex flex-wrap gap-2 items-center">
          {['bg-black', 'bg-slate-500', 'bg-white border', 'bg-blue-500', 'bg-green-600'].map((color) => (
            <span key={color} className={`h-8 w-8 rounded-full border border-slate-200 ${color}`} />
          ))}
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-500">+3</span>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Brand / Store</h3>
        <input
          type="search"
          placeholder="Search brand or store"
          className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-700 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
        />
        <div className="mt-4 space-y-3 text-sm text-slate-700">
          {[
            ['Fashion Hub', 210],
            ['Urban Tribe', 180],
            ['Street Style', 150],
            ['Ethnic Villa', 120],
            ['Miss Boutique', 90],
          ].map(([name, count]) => (
            <label key={name} className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 accent-amber-500" />
              <span>{name}</span>
              <span className="ml-auto text-slate-400">({count})</span>
            </label>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Delivery</h3>
        <div className="space-y-3 text-sm text-slate-700">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-amber-500" />
            <span>Same Day Delivery</span>
            <span className="ml-auto text-slate-400">(320)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-amber-500" />
            <span>Delivery in 2 Hours</span>
            <span className="ml-auto text-slate-400">(560)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 accent-amber-500" />
            <span>Delivery by Tomorrow</span>
            <span className="ml-auto text-slate-400">(900)</span>
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Rating</h3>
        <div className="space-y-3 text-sm text-slate-700">
          {['4 & above', '3 & above', '2 & above', '1 & above'].map((rating) => (
            <label key={rating} className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 accent-amber-500" />
              <span>{rating}</span>
            </label>
          ))}
        </div>
      </section>
    </aside>
  );
}
