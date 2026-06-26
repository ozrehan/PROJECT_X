import { Circle, Pencil, Trash2, Plus } from "lucide-react";

export default function DeliveryAddress() {
  return (
    <div className="mb-8">

      <h2 className="text-[30px] font-bold mb-5">
        Delivery Address
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {/* Address Card */}

        <div className="border border-[#D8A233] rounded-xl p-6">

          <div className="flex justify-between">

            <div>

              <div className="flex items-center gap-3 mb-4">

                <Circle
                  size={18}
                  fill="#D8A233"
                  className="text-[#D8A233]"
                />

                <h3 className="font-semibold text-xl">
                  Rohan Verma
                </h3>

                <span className="bg-[#F5E7B5] px-3 py-1 rounded-full text-sm">
                  Default
                </span>

              </div>

              <p className="mb-2">
                H.No. 8-2-293/82/A,
                Road No.12,
                Banjara Hills,
              </p>

              <p className="mb-2">
                Hyderabad, Telangana - 500034
              </p>

              <p>
                Phone: 9876543210
              </p>

            </div>

            <div className="space-y-6">

              <button className="flex items-center gap-2">
                <Pencil size={16}/>
                Edit
              </button>

              <button className="flex items-center gap-2">
                <Trash2 size={16}/>
                Delete
              </button>

            </div>

          </div>

        </div>

        {/* Add Address */}

        <div className="border-2 border-dashed rounded-xl flex items-center justify-center">

          <button className="flex items-center gap-3 text-xl">

            <Plus size={28} />

            Add New Address

          </button>

        </div>

      </div>

    </div>
  );
}