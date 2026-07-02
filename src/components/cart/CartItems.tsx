import Image from "next/image";
import {
  Minus,
  Plus,
  X,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function CartItems() {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">

      {/* table header */}

      <div className="grid grid-cols-12 px-8 py-5 bg-gray-50 border-b">

        <div className="col-span-5 font-medium">
          Product
        </div>

        <div className="col-span-2 font-medium">
          Price
        </div>

        <div className="col-span-3 font-medium">
          Quantity
        </div>

        <div className="col-span-2 font-medium">
          Total
        </div>

      </div>

      {/* row 1 */}

      <div className="grid grid-cols-12 p-8 border-b">

        <div className="col-span-5 flex gap-5">

          <input
            type="checkbox"
            checked
            className="mt-14"
          />

          <div className="w-[130px] h-[130px] bg-gray-100 rounded-lg relative">

            <Image
              src="/products/blackshirt.png"
              alt=""
              fill
              className="object-contain"
            />

          </div>

          <div>

            <h3 className="font-semibold text-2xl">
              Black Formal Shirt
            </h3>

            <p className="text-gray-500">
              By Fashion Hub
            </p>

            <p className="text-gray-500 mt-2">
              Size: L | Color: Black
            </p>

            <div className="flex items-center gap-2 mt-3 text-green-600">

              <Zap size={16} />

              Delivery by Tomorrow

            </div>

            <div className="flex items-center gap-2 mt-2 text-gray-500">

              <ShieldCheck size={16} />

              7 Days Return & Exchange

            </div>

          </div>

        </div>

        <div className="col-span-2">

          <h3 className="font-bold text-3xl">
            ₹799
          </h3>

          <p className="line-through text-gray-400 mt-4">
            ₹1299
          </p>

          <p className="text-red-500 mt-3">
            38% OFF
          </p>

        </div>

        <div className="col-span-3">

          <div className="flex border rounded-lg overflow-hidden w-fit">

            <button className="p-3">
              <Minus size={18}/>
            </button>

            <div className="px-6 py-3 border-x">
              1
            </div>

            <button className="p-3">
              <Plus size={18}/>
            </button>

          </div>

          <button className="text-blue-600 mt-5">
            Move to Wishlist
          </button>

        </div>

        <div className="col-span-2 flex justify-between">

          <h3 className="font-bold text-3xl">
            ₹799
          </h3>

          <button>
            <X />
          </button>

        </div>

      </div>

      {/* row 2 */}

      <div className="grid grid-cols-12 p-8 border-b">

        <div className="col-span-5">
          Black Cotton T-Shirt
        </div>

        <div className="col-span-2">
          ₹499
        </div>

        <div className="col-span-3">
          Quantity
        </div>

        <div className="col-span-2">
          ₹499
        </div>

      </div>

      {/* row 3 */}

      <div className="grid grid-cols-12 p-8">

        <div className="col-span-5">
          Blue Slim Fit Jeans
        </div>

        <div className="col-span-2">
          ₹999
        </div>

        <div className="col-span-3">
          Quantity
        </div>

        <div className="col-span-2">
          ₹999
        </div>

      </div>

    </div>
  );
}