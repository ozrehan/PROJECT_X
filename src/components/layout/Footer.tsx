import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-5 gap-10">

        <div>
          <h2 className="text-6xl text-amber-400 font-serif">
            Oz
          </h2>

          <p className="mt-4 text-gray-400">
            Your Style. Our Priority.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">SHOP</h3>

          <ul className="space-y-2 text-gray-400">
            <li><Link href="/categories/men" className="hover:text-amber-400 transition">Men</Link></li>
            <li><Link href="/categories" className="hover:text-amber-400 transition">Women</Link></li>
            <li><Link href="/categories" className="hover:text-amber-400 transition">Kids</Link></li>
            <li><Link href="/categories" className="hover:text-amber-400 transition">Footwear</Link></li>
            <li><Link href="/categories" className="hover:text-amber-400 transition">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">HELP</h3>

          <ul className="space-y-2 text-gray-400">
            <li><Link href="/contact" className="hover:text-amber-400 transition">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-amber-400 transition">FAQs</Link></li>
            <li><Link href="/faq" className="hover:text-amber-400 transition">Returns</Link></li>
            <li><Link href="/faq" className="hover:text-amber-400 transition">Shipping</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">ABOUT</h3>

          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-amber-400 transition">About Us</Link></li>
            <li><Link href="/about" className="hover:text-amber-400 transition">Careers</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-amber-400 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            DOWNLOAD OUR APP
          </h3>

          <div className="space-y-3">
            <button className="border border-zinc-700 px-4 py-3 rounded-lg w-full hover:bg-white/10 transition">
              Google Play
            </button>

            <button className="border border-zinc-700 px-4 py-3 rounded-lg w-full hover:bg-white/10 transition">
              App Store
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 py-5 text-center text-gray-400">
        © 2026 Oz. All rights reserved.
      </div>

    </footer>
  );
}