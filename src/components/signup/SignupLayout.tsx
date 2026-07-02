export default function SignupLayout() {
  return (
    <div className="max-w-[1500px] mx-auto px-6 py-10">

      <div className="grid grid-cols-2 gap-10">

        {/* LEFT */}

        <div className="bg-[#F6F2EE] rounded-2xl h-[720px]">
        </div>

        {/* RIGHT */}

        <div className="h-[720px]">
        </div>

      </div>

      {/* Trust */}

      <div className="grid grid-cols-4 border rounded-xl mt-10">

        <div className="p-8">
          Same Day Delivery
        </div>

        <div className="p-8 border-l">
          Easy Returns
        </div>

        <div className="p-8 border-l">
          Secure Payments
        </div>

        <div className="p-8 border-l">
          24/7 Support
        </div>

      </div>

    </div>
  );
}   