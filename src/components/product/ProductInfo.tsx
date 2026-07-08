import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";

const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = ["Black", "Navy", "Stone"];

export default function ProductInfo() {
  return (
    <section className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
        Trending fit
      </div>

      <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
        Signature Slim Fit Shirt
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px]">
        Premium cotton with a polished finish, designed for everyday comfort and
        elevated style. Soft texture, wrinkle-resistant feel, and a clean tailored
        silhouette.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
          <Star size={16} fill="currentColor" />
          4.8
        </div>
        <span className="text-sm text-slate-500">2.4k reviews</span>
        <span className="text-sm text-slate-500">• Fashion Hub</span>
      </div>

      <div className="mt-6 flex flex-wrap items-end gap-3">
        <span className="text-3xl font-bold text-slate-900">₹1,499</span>
        <span className="text-base text-slate-400 line-through">₹2,499</span>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          40% off
        </span>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold text-slate-700">Color</p>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className="rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-amber-500 hover:text-amber-600"
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold text-slate-700">Size</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className="min-w-12 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Buy now
        </button>
        <button className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-600">
          Add to bag
        </button>
      </div>

      <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
        <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3">
          <Truck size={16} className="text-amber-600" />
          Fast delivery
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3">
          <ShieldCheck size={16} className="text-amber-600" />
          Secure pay
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3">
          <RotateCcw size={16} className="text-amber-600" />
          Easy returns
        </div>
      </div>
    </section>
  );
}