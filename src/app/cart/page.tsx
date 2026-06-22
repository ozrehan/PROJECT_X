export default function CartPage() {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <div className="md:col-span-2 space-y-3 sm:space-y-4">
          <div className="border rounded-lg sm:rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 hover:shadow-md transition">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gray-200 rounded-lg flex-shrink-0"></div>

            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-sm sm:text-base md:text-lg line-clamp-2">
                Premium Black Shirt
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 mt-1">Fashion Hub</p>

              <p className="text-amber-500 font-bold text-sm sm:text-base mt-2">
                ₹999
              </p>

              <button className="text-xs sm:text-sm text-red-500 hover:text-red-700 mt-2">
                Remove
              </button>
            </div>
          </div>

          <div className="border rounded-lg sm:rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 hover:shadow-md transition">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gray-200 rounded-lg flex-shrink-0"></div>

            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-sm sm:text-base md:text-lg line-clamp-2">
                Blue Jeans
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 mt-1">Style Studio</p>

              <p className="text-amber-500 font-bold text-sm sm:text-base mt-2">
                ₹1499
              </p>

              <button className="text-xs sm:text-sm text-red-500 hover:text-red-700 mt-2">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6 h-fit sticky bottom-0 md:static bg-white">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            Order Summary
          </h2>

          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>Items:</span>
              <span>2</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹2498</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery:</span>
              <span>₹50</span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-base sm:text-lg md:text-xl mb-4">
            <span>Total:</span>
            <span>₹2548</span>
          </div>

          <button className="w-full bg-amber-500 text-white py-3 sm:py-3 rounded-lg font-semibold hover:bg-amber-600 transition text-sm sm:text-base">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}