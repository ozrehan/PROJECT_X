import DeliveryAddress from "./DeliveryAddress";

export default function CheckoutLayout() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <h1 className="text-[46px] font-bold">
          Checkout
        </h1>

        <div className="flex items-center gap-2 text-green-600">
          <span>🔒</span>
          <span>100% Secure</span>
        </div>

      </div>

      {/* Steps */}

      <div className="flex items-center mb-12">

        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-[#D8A233] text-white flex items-center justify-center font-bold">
            1
          </div>

          <span className="ml-4 mr-16 text-lg">
            Cart
          </span>
        </div>

        <div className="w-40 h-[2px] bg-[#D8A233]" />

        <div className="flex items-center ml-8">
          <div className="w-10 h-10 rounded-full bg-[#D8A233] text-white flex items-center justify-center font-bold">
            2
          </div>

          <span className="ml-4 mr-16 text-lg">
            Address
          </span>
        </div>

        <div className="w-40 h-[2px] bg-gray-300" />

        <div className="flex items-center ml-8">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            3
          </div>

          <span className="ml-4 mr-16 text-lg">
            Payment
          </span>
        </div>

        <div className="w-40 h-[2px] bg-gray-300" />

        <div className="flex items-center ml-8">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            4
          </div>

          <span className="ml-4 text-lg">
            Place Order
          </span>
        </div>

      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-12 gap-10">

        {/* LEFT SIDE */}

        <div className="col-span-8">

          {/* Delivery Address */}
          <DeliveryAddress />

          {/* Delivery Options */}
          <div className="border rounded-xl h-[90px] mb-8">
          </div>

          {/* Order Notes */}
          <div className="border rounded-xl h-[120px]">
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="col-span-4">

          {/* Order Summary */}
          <div className="border rounded-xl h-[520px]">
          </div>

        </div>

      </div>

    </div>
  );
}