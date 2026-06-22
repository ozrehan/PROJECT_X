export default function AboutPage() {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        About Oz
      </h1>

      <div className="max-w-4xl space-y-6 sm:space-y-8">
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Who We Are</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Oz is a modern e-commerce platform delivering fashion from Hyderabad's top stores directly to your doorstep.
            We connect you with quality brands and sellers offering the best in fashion at competitive prices.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Our Mission</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            To make online shopping convenient, affordable, and accessible to everyone. We believe in delivering not just products,
            but an experience that exceeds expectations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Why Choose Oz?</h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700">
            <li className="flex gap-2 sm:gap-3">
              <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
              <span>Fast & Reliable Delivery</span>
            </li>
            <li className="flex gap-2 sm:gap-3">
              <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
              <span>Quality Assured Products</span>
            </li>
            <li className="flex gap-2 sm:gap-3">
              <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
              <span>Easy Returns & Refunds</span>
            </li>
            <li className="flex gap-2 sm:gap-3">
              <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
              <span>24/7 Customer Support</span>
            </li>
            <li className="flex gap-2 sm:gap-3">
              <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
              <span>Secure Payment Options</span>
            </li>
          </ul>
        </section>

        <section className="bg-amber-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Have questions? We'd love to hear from you!
          </p>
          <button className="w-full bg-amber-500 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-sm sm:text-base">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
}