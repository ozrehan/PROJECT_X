export default function CheckoutSteps() {
  const steps = [
    "Cart",
    "Address",
    "Payment",
    "Place Order",
  ];

  return (
    <div className="mb-10">

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <h1 className="text-5xl font-bold">
          Checkout
        </h1>

        <span className="text-green-600 flex items-center gap-2">
          🔒 100% Secure
        </span>

      </div>

      {/* Steps */}

      <div className="flex items-center justify-between">

        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center flex-1"
          >

            <div className="flex items-center gap-3">

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
                ${
                  index < 2
                    ? "bg-amber-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </div>

              <span className="font-medium">
                {step}
              </span>

            </div>

            {index !== steps.length - 1 && (
              <div className="flex-1 h-[2px] bg-gray-300 mx-6" />
            )}

          </div>
        ))}

      </div>

    </div>
  );
}