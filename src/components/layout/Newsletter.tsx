export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
      <div className="bg-black rounded-2xl px-6 py-6 sm:px-8 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

        {/* Left Content */}
        <div className="text-white w-full md:w-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            STAY IN STYLE
          </h2>

          <p className="text-gray-300 mt-2">
            Get the latest updates on new arrivals, offers and more.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex w-full md:w-[550px] flex-col md:flex-row gap-3 md:gap-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg md:rounded-l-xl md:rounded-r-none bg-white/10 placeholder:text-gray-300 text-white outline-none focus:ring-2 focus:ring-amber-500"
          />

          <button className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-lg md:rounded-r-xl md:rounded-l-none font-semibold text-black w-full md:w-auto">
            SUBSCRIBE
          </button>
        </div>

      </div>
    </section>
  );
}