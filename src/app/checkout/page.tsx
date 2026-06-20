export default function CheckoutPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Delivery Address
          </h2>

          <input
            className="border p-3 w-full mb-3 rounded"
            placeholder="Full Name"
          />

          <input
            className="border p-3 w-full mb-3 rounded"
            placeholder="Phone Number"
          />

          <textarea
            className="border p-3 w-full mb-3 rounded"
            placeholder="Address"
          />

          <input
            className="border p-3 w-full rounded"
            placeholder="Pincode"
          />
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          <p>Premium Black Shirt</p>
          <p>₹999</p>

          <hr className="my-4" />

          <p>Delivery: ₹50</p>

          <p className="font-bold text-xl mt-4">
            Total: ₹1049
          </p>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
}   