export default function CheckoutPage() {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            Delivery Address
          </h2>

          <div className="space-y-3">
            <input
              className="border border-gray-300 p-3 sm:p-4 w-full rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm sm:text-base"
              placeholder="Full Name"
            />

            <input
              className="border border-gray-300 p-3 sm:p-4 w-full rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm sm:text-base"
              placeholder="Phone Number"
              type="tel"
            />

            <textarea
              className="border border-gray-300 p-3 sm:p-4 w-full rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm sm:text-base resize-none"
              placeholder="Address"
              rows={4}
            />

            <input
              className="border border-gray-300 p-3 sm:p-4 w-full rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm sm:text-base"
              placeholder="Pincode"
            />
          </div>
        </div>

        <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6 sticky bottom-0 md:static h-fit bg-white">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm sm:text-base mb-4">
            <div>
              <p className="font-medium">Premium Black Shirt</p>
              <p className="text-amber-500 font-semibold">₹999</p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-sm sm:text-base mb-2">
            <span>Delivery Charge:</span>
            <span>₹50</span>
          </div>

          <div className="flex justify-between font-bold text-base sm:text-lg md:text-xl mb-6">
            <span>Total:</span>
            <span className="text-amber-500">₹1049</span>
          </div>

          <button className="w-full bg-amber-500 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-sm sm:text-base">
            Place Order
          </button>

          <button className="w-full mt-2 border border-gray-300 text-gray-700 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-50 transition text-sm sm:text-base">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}