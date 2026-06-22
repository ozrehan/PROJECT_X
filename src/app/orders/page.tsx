export default function OrdersPage() {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
        My Orders
      </h1>

      <div className="space-y-3 sm:space-y-4">
        <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-md transition">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="flex-1">
              <h2 className="font-bold text-sm sm:text-base md:text-lg">
                Order #OZ1001
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Premium Black Shirt
              </p>
            </div>

            <span className="text-white bg-green-500 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold self-start sm:self-auto">
              Delivered
            </span>
          </div>
          
          <button className="mt-3 text-amber-500 text-xs sm:text-sm font-semibold hover:underline">
            View Details →
          </button>
        </div>

        <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-md transition">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="flex-1">
              <h2 className="font-bold text-sm sm:text-base md:text-lg">
                Order #OZ1002
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Blue Jeans
              </p>
            </div>

            <span className="text-white bg-amber-500 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold self-start sm:self-auto">
              Out For Delivery
            </span>
          </div>
          
          <button className="mt-3 text-amber-500 text-xs sm:text-sm font-semibold hover:underline">
            Track Order →
          </button>
        </div>
      </div>
    </div>
  );
}