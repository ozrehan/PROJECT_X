import CartItems from "./CartItems";

export default function CartLayout() {
  return (
    <div className="max-w-[1450px] mx-auto px-6 py-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-4">

          <h1 className="text-[52px] font-bold tracking-tight">
            Your Cart
          </h1>

          <span className="text-gray-400 text-xl">
            (3 Items)
          </span>

        </div>

        <button className="text-gray-500 hover:text-black flex items-center gap-2">
          ← Continue Shopping
        </button>

      </div>

      {/* Free Delivery Banner */}

      <div className="bg-[#F3F9F3] border border-[#E1EEE1] rounded-xl px-8 py-5 mb-6">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-4">

            <div className="text-green-700 text-2xl">
              🚚
            </div>

            <span className="text-green-700 text-lg font-medium">
              Yay! You are eligible for FREE Delivery
            </span>

          </div>

          <div className="flex items-center gap-6">

            <span className="text-green-700 text-lg">
              Add ₹351 more to get extra 5% off
            </span>

            <div className="w-[250px] h-2 bg-gray-200 rounded-full">

              <div className="w-[75%] h-2 bg-green-700 rounded-full">
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-12 gap-10">

        {/* Left Side */}

        <div className="col-span-8">

          <CartItems />

        </div>

        {/* Right Side */}

        <div className="col-span-4">

          {/* Price Details */}

          <div className="border rounded-xl p-8">

            <h2 className="text-[36px] font-bold mb-8">
              Price Details
            </h2>

            <div className="space-y-6">

              <div className="flex justify-between text-xl">
                <span>Bag Total (3 Items)</span>
                <span>₹2,297</span>
              </div>

              <div className="flex justify-between text-xl">
                <span>Discount</span>
                <span className="text-green-600">
                  −₹689
                </span>
              </div>

              <div className="flex justify-between text-xl">
                <span>Delivery Charges</span>

                <div>
                  <span className="line-through text-gray-400 mr-3">
                    ₹99
                  </span>

                  <span className="text-green-600">
                    FREE
                  </span>
                </div>

              </div>

            </div>

            <hr className="my-8" />

            <div className="flex justify-between">

              <div>

                <h3 className="text-[36px] font-bold">
                  Total Amount
                </h3>

                <p className="text-green-600 mt-2">
                  You will save ₹689 on this order
                </p>

              </div>

              <div className="text-[52px] font-bold">
                ₹1,608
              </div>

            </div>

            {/* Coupon */}

            <div className="border rounded-xl p-5 mt-8">

              <div className="flex justify-between">

                <div>
                  <h4 className="font-semibold text-xl">
                    Apply Coupon
                  </h4>

                  <p className="text-gray-500 mt-2">
                    Select coupon to get extra discounts
                  </p>
                </div>

                <span className="text-2xl">
                  ›
                </span>

              </div>

            </div>

            {/* Button */}

            <button className="w-full bg-black text-white rounded-xl py-5 text-xl font-semibold mt-6">
              🔒 Proceed to Checkout
            </button>

            <div className="text-center text-gray-500 mt-4">
              🛡️ 100% Secure Payments
            </div>

          </div>

          {/* Savings */}

          <div className="bg-[#F3F9F3] rounded-xl p-6 mt-6">

            <p className="text-green-700 font-semibold mb-5">
              🎉 You saved ₹689 on this order
            </p>

            <div className="flex justify-between mb-4">
              <span>Product Discount</span>
              <span className="text-green-700">
                −₹589
              </span>
            </div>

            <div className="flex justify-between">
              <span>Free Delivery</span>
              <span className="text-green-700">
                −₹99
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Trust Section */}

      <div className="grid grid-cols-4 border rounded-xl mt-8">

        <div className="p-8">
          <h3 className="font-bold">
            Same Day Delivery
          </h3>
          <p className="text-gray-500">
            Super fast delivery within hours
          </p>
        </div>

        <div className="p-8 border-l">
          <h3 className="font-bold">
            Easy Returns
          </h3>
          <p className="text-gray-500">
            7 days return policy
          </p>
        </div>

        <div className="p-8 border-l">
          <h3 className="font-bold">
            100% Secure Payments
          </h3>
          <p className="text-gray-500">
            Multiple secure payment options
          </p>
        </div>

        <div className="p-8 border-l">
          <h3 className="font-bold">
            Best Price Guaranteed
          </h3>
          <p className="text-gray-500">
            We'll match it
          </p>
        </div>

      </div>

    </div>
  );
}