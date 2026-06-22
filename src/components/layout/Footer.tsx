// original Footer.tsx restored to empty file

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
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Footwear</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">HELP</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Returns</li>
            <li>Shipping</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">ABOUT</h3>

          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            DOWNLOAD OUR APP
          </h3>

          <div className="space-y-3">
            <button className="border px-4 py-3 rounded-lg w-full">
              Google Play
            </button>

            <button className="border px-4 py-3 rounded-lg w-full">
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