import Image from "next/image";
import {
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  Grid2X2,
  Heart,
  Mail,
  MapPin,
  Package,
  Phone,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";

const products = [
  { name: "Black Formal Shirt", image: "/images/products/shirt.jpeg", price: "799", oldPrice: "1,299", discount: "38% OFF", badge: "Bestseller", delivery: "Delivery Today" },
  { name: "Navy Blue Shirt", image: "/images/bestsellers/casual-shirt.jpeg", price: "699", oldPrice: "999", discount: "30% OFF", badge: "30% OFF", delivery: "Delivery Today" },
  { name: "White Polo T-Shirt", image: "/images/products/tshirt.jpeg", price: "549", oldPrice: "799", discount: "31% OFF", badge: "New", delivery: "Delivery in 2 Hours" },
  { name: "Denim Jacket", image: "/images/products/jacket.jpeg", price: "1,299", oldPrice: "1,999", discount: "35% OFF", badge: "", delivery: "Delivery Tomorrow" },
  { name: "Grey Hoodie", image: "/images/bestsellers/hoodie.jpeg", price: "899", oldPrice: "1,299", discount: "31% OFF", badge: "Bestseller", delivery: "Delivery Today" },
  { name: "Olive Green Shirt", image: "/images/bestsellers/linen-shirt.jpeg", price: "749", oldPrice: "1,099", discount: "32% OFF", badge: "", delivery: "Delivery Today" },
  { name: "Beige Trousers", image: "/images/bestsellers/cargo-pant.jpeg", price: "899", oldPrice: "1,199", discount: "25% OFF", badge: "20% OFF", delivery: "Delivery Tomorrow" },
  { name: "Black Printed T-Shirt", image: "/images/products/tshirt.jpeg", price: "499", oldPrice: "799", discount: "36% OFF", badge: "", delivery: "Delivery in 2 Hours" },
];

const categoryImages = [
  ["T-Shirts", "/images/products/tshirt.jpeg"],
  ["Shirts", "/images/products/shirt.jpeg"],
  ["Jeans", "/images/bestsellers/cargo-pant.jpeg"],
  ["Trousers", "/images/bestsellers/cargo-pant.jpeg"],
  ["Jackets", "/images/products/jacket.jpeg"],
  ["Hoodies", "/images/bestsellers/hoodie.jpeg"],
  ["Blazers", "/images/bestsellers/linen-shirt.jpeg"],
] as const;

function RatingBars() {
  return (
    <div className="space-y-2.5">
      {[78, 16, 4, 1, 1].map((value, index) => (
        <div className="flex items-center gap-2 text-xs" key={value + index}>
          <span className="w-3">{5 - index}</span><Star size={11} className="fill-amber-400 text-amber-400" />
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-100"><div className="h-full rounded-full bg-amber-500" style={{ width: `${value}%` }} /></div>
          <span className="w-7 text-right text-zinc-500">{value}%</span>
        </div>
      ))}
    </div>
  );
}

function StoreSidebar() {
  return (
    <aside className="space-y-5">
      <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-5 font-bold">Store Information</h2>
        <div className="space-y-4 text-xs text-zinc-600">
          <div className="flex justify-between gap-3"><span className="flex items-center gap-2"><CalendarDays size={14} className="text-amber-600" />Store Since</span><b className="font-medium text-zinc-800">May 2022</b></div>
          <div className="flex justify-between gap-3"><span className="flex items-center gap-2"><MapPin size={14} className="text-amber-600" />Store Location</span><b className="text-right font-medium text-zinc-800">Banjara Hills,<br />Hyderabad, TS</b></div>
          <div className="flex justify-between gap-3"><span className="flex items-center gap-2"><ShoppingBag size={14} className="text-amber-600" />Store Timings</span><b className="text-right font-medium text-zinc-800">10:00 AM - 10:00 PM<br />(Mon - Sun)</b></div>
          <div className="flex justify-between gap-3"><span className="flex items-center gap-2"><Mail size={14} className="text-amber-600" />Store Email</span><b className="font-medium text-zinc-800">support@fashionhub.com</b></div>
          <div className="flex justify-between gap-3"><span className="flex items-center gap-2"><Phone size={14} className="text-amber-600" />Store Phone</span><b className="font-medium text-zinc-800">+91 98765 43210</b></div>
        </div>
      </section>
      <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 font-bold">Store Rating</h2>
        <div className="mb-5 flex items-end gap-3"><b className="text-4xl">4.7</b><div><div className="flex text-amber-400"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></div><span className="text-xs text-zinc-500">(12.1k reviews)</span></div></div>
        <RatingBars />
        <button className="mt-5 w-full rounded-lg bg-black py-3 text-sm font-semibold text-white">Write a Review</button>
      </section>
      <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 font-bold">Why Shop From Us?</h2>
        <ul className="space-y-4 text-sm text-zinc-700">
          {[[ShieldCheck, "100% Original Products"], [BadgeCheck, "Best Prices Guaranteed"], [RotateCcw, "Easy Returns & Refunds"], [Truck, "Fast & Reliable Delivery"], [Package, "Secure Packaging"]].map(([Icon, label]) => { const FeatureIcon = Icon as typeof ShieldCheck; return <li className="flex items-center gap-3" key={label as string}><FeatureIcon size={17} className="text-amber-600" />{label as string}</li>; })}
        </ul>
      </section>
      <section className="overflow-hidden rounded-2xl bg-zinc-950 p-6 text-white">
        <p className="text-3xl font-semibold text-amber-400">10% OFF</p><p className="mt-1 text-sm text-zinc-300">On Your First Order</p>
        <p className="mt-5 rounded-lg border border-amber-400/70 py-2 text-center text-sm">Use Code: <b>HUB10</b></p>
      </section>
    </aside>
  );
}

export default function FashionHubStore() {
  return (
    <main className="bg-zinc-50 pb-12 text-zinc-900">
      <div className="mx-auto max-w-[1440px] px-4 pt-4 text-xs text-zinc-500">Home <span className="mx-2">›</span> Stores <span className="mx-2">›</span> <b className="text-zinc-700">Fashion Hub</b></div>
      <section className="mx-auto max-w-[1440px] px-4 pt-3">
        <div className="relative min-h-[330px] overflow-hidden rounded-2xl bg-black p-6 text-white sm:p-9">
          <Image src="/images/stores/fashion-hub.jpeg" alt="Fashion Hub showroom" fill priority className="object-cover object-center opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/25" />
          <div className="relative z-10 flex h-full flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl border border-zinc-600 bg-black text-center text-xl leading-tight sm:h-36 sm:w-36 sm:text-2xl">FASHION<br />HUB</div>
            <div className="flex-1"><div className="flex flex-wrap items-center gap-2"><h1 className="text-3xl font-bold sm:text-4xl">Fashion Hub</h1><span className="flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-zinc-800"><BadgeCheck size={12} className="text-amber-500" />Verified Store</span></div>
              <p className="mt-3 flex items-center gap-1 text-sm"><b>4.7</b><span className="flex text-amber-400"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></span><span className="text-zinc-300">(12.1k reviews)</span></p>
              <div className="mt-5 grid max-w-xl grid-cols-2 gap-4 text-sm sm:grid-cols-4"><div><b className="text-lg">1200+</b><p className="text-zinc-300">Products</p></div><div><b className="text-lg">98%</b><p className="text-zinc-300">Positive Seller</p></div><div><b className="text-lg">2 Yrs</b><p className="text-zinc-300">On Oz</p></div><div><b className="text-lg">20K+</b><p className="text-zinc-300">Happy Customers</p></div></div>
              <div className="mt-6 flex gap-3"><button className="rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-black">Follow Store</button><button className="rounded-lg border border-zinc-400 px-5 py-3 text-sm font-medium">Share Store</button></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-4 flex max-w-[1440px] items-center gap-4 border-b border-zinc-200 px-4"><div className="flex flex-1 gap-6 overflow-x-auto text-xs font-medium whitespace-nowrap"><b className="border-b-2 border-amber-500 py-4">Store Home</b><span className="py-4">All Products</span><span className="py-4">New Arrivals</span><span className="py-4">Best Sellers</span><span className="py-4">Reviews (12.1k)</span><span className="py-4">Store Info</span></div><label className="hidden items-center gap-2 rounded-lg border bg-white px-3 sm:flex"><input className="w-32 py-2.5 text-xs outline-none" placeholder="Search in store..." /><Search size={15} className="text-zinc-400" /></label></section>
      <section className="mx-auto grid max-w-[1440px] gap-8 px-4 py-7 xl:grid-cols-[1fr_270px]"><div>
        <div className="grid gap-7 lg:grid-cols-[1.25fr_.85fr]"><div><h2 className="text-xl font-bold">About Fashion Hub</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">Fashion Hub brings you the latest trends in men&apos;s fashion. From casual streetwear to smart formal looks, we have everything to match your style. Premium quality, best prices and trusted by thousands of customers.</p><div className="mt-6 grid grid-cols-2 gap-4 text-center text-xs sm:grid-cols-4">{[[ShieldCheck, "Premium Quality", "Products"], [RotateCcw, "Easy Returns", "7 Days Policy"], [Truck, "On-time Delivery", "Across Hyderabad"], [ShoppingBag, "Secure Payments", "100% Safe"]].map(([Icon, first, second]) => { const BenefitIcon = Icon as typeof ShieldCheck; return <div key={first as string}><BenefitIcon className="mx-auto mb-2 text-zinc-700" size={22} /><b className="block">{first as string}</b><span className="text-zinc-500">{second as string}</span></div>; })}</div></div><div className="relative min-h-56 overflow-hidden rounded-2xl"><Image src="/images/stores/fashion-hub.jpeg" alt="Inside Fashion Hub" fill className="object-cover" /></div></div>
        <div className="mt-9"><h2 className="mb-4 text-lg font-bold">Shop by Category</h2><div className="grid grid-cols-4 gap-4 sm:grid-cols-8">{categoryImages.map(([name, image]) => <button key={name} className="group text-center text-xs"><span className="relative mx-auto block h-16 w-16 overflow-hidden rounded-full bg-zinc-100 sm:h-20 sm:w-20"><Image src={image} alt={name} fill className="object-contain p-2" /></span><span className="mt-2 block">{name}</span></button>)}<button className="text-center text-xs"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 sm:h-20 sm:w-20"><Grid2X2 size={24} /></span><span className="mt-2 block">View All</span></button></div></div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[190px_1fr]"><section className="rounded-xl border border-zinc-200 bg-white p-4 text-xs"><div className="mb-5 flex justify-between"><b className="text-sm">Filters</b><button className="text-zinc-500">Clear All</button></div><b>Category</b><div className="mt-3 space-y-3 text-zinc-600">{["T-Shirts (320)", "Shirts (280)", "Jeans (210)", "Trousers (180)", "Jackets (120)"].map(item => <label className="flex gap-2" key={item}><input type="checkbox" />{item}</label>)}</div><button className="mt-3 text-zinc-500">+ View more</button><hr className="my-5" /><b>Price Range</b><input type="range" className="mt-4 w-full accent-amber-500" /><div className="mt-2 flex justify-between"><span className="rounded border px-2 py-1">₹199</span><span className="rounded border px-2 py-1">₹2999</span></div><hr className="my-5" /><b>Size</b><div className="mt-3 flex flex-wrap gap-2">{["S", "M", "L", "XL", "XXL", "3XL"].map(size => <button className="rounded border px-2 py-1" key={size}>{size}</button>)}</div></section>
          <section><div className="mb-4 flex items-center justify-between"><h2 className="font-bold">All Products (1200+)</h2><button className="flex items-center gap-1 rounded border bg-white px-3 py-2 text-xs">Sort by: Popularity <ChevronDown size={14} /></button></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">{products.map(product => <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white" key={product.name}><div className="relative h-44 bg-zinc-100 sm:h-48">{product.badge && <span className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-[10px] font-bold text-white">{product.badge}</span>}<button className="absolute right-2 top-2 z-10 rounded-full bg-white p-1.5"><Heart size={15} /></button><Image src={product.image} alt={product.name} fill className="object-contain p-3" /></div><div className="p-3"><h3 className="truncate text-xs font-semibold sm:text-sm">{product.name}</h3><p className="mt-1 text-sm font-bold">₹{product.price} <del className="ml-1 text-[10px] font-normal text-zinc-400">₹{product.oldPrice}</del></p><span className="text-[10px] font-semibold text-red-500">{product.discount}</span><p className="mt-1 flex items-center gap-1 text-[10px]"><Star size={11} fill="currentColor" className="text-amber-400" />4.6 (120)</p><p className="mt-2 flex items-center gap-1 text-[10px] text-green-600"><Truck size={12} />{product.delivery}</p></div></article>)}</div><button className="mx-auto mt-6 block rounded-lg border bg-white px-5 py-3 text-xs font-medium">View More Products <ChevronDown className="ml-1 inline" size={14} /></button></section>
        </div>
      </div><StoreSidebar /></section>
    </main>
  );
}
