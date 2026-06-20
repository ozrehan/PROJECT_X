export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">

          <div className="border rounded-xl p-4 flex gap-4">
            <div className="w-28 h-28 bg-gray-200 rounded-lg"></div>

            <div>
              <h2 className="font-bold">
                Premium Black Shirt
              </h2>

              <p>Fashion Hub</p>

              <p className="text-orange-500 font-bold">
                ₹999
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-4 flex gap-4">
            <div className="w-28 h-28 bg-gray-200 rounded-lg"></div>

            <div>
              <h2 className="font-bold">
                Blue Jeans
              </h2>

              <p>Style Studio</p>

              <p className="text-orange-500 font-bold">
                ₹1499
              </p>
            </div>
          </div>

        </div>

        <div className="border rounded-xl p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          <p>Items: 2</p>
          <p>Subtotal: ₹2498</p>
          <p>Delivery: ₹50</p>

          <hr className="my-4" />

          <p className="font-bold text-xl">
            Total: ₹2548
          </p>

          <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}