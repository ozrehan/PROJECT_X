export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-black rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Content */}
        <div className="text-white w-full md:w-auto">
          <h2 className="text-3xl font-bold">
            STAY IN STYLE
          </h2>

          <p className="text-gray-300 mt-2">
            Get the latest updates on new arrivals, offers and more.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex w-full md:w-[550px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-l-xl outline-none text-black"
          />

          <button className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-r-xl font-semibold text-black">
            SUBSCRIBE
          </button>
        </div>

      </div>
    </section>
  );
}