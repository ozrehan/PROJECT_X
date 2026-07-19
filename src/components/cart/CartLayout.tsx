"use client";

import { useEffect } from "react";
import Link from "next/link";
import CartItems from "./CartItems";
import { useCartStore } from "@/lib/cartStore";

export default function CartLayout() {
  const { items, loadCart } = useCartStore();

  useEffect(() => {
    loadCart();
  }, []);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const bagTotal = items.reduce((acc, item) => acc + item.oldPrice * item.quantity, 0);
  const discountedTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalDiscount = bagTotal - discountedTotal;

  // Let's add extra 5% off if discountedTotal is > 2000, just for nice real-world discount logic
  const extraDiscount = discountedTotal > 2000 ? Math.round(discountedTotal * 0.05) : 0;
  const finalPrice = discountedTotal - extraDiscount;

  const targetForDiscount = 2000;
  const remainsForExtraDiscount = Math.max(0, targetForDiscount - discountedTotal);
  const extraDiscountProgress = Math.min(100, Math.round((discountedTotal / targetForDiscount) * 100));

  return (
    <div className="max-w-[1450px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Your Cart
          </h1>
          <span className="text-gray-400 text-lg md:text-xl font-medium">
            ({totalItems} {totalItems === 1 ? "Item" : "Items"})
          </span>
        </div>

        <Link href="/" className="text-slate-500 hover:text-black font-semibold flex items-center gap-2 hover:-translate-x-0.5 transition duration-200">
          ← Continue Shopping
        </Link>
      </div>

      {items.length > 0 && (
        <>
          {/* Free Delivery Banner */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-6 py-4 mb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚚</span>
                <span className="text-emerald-800 font-semibold text-base sm:text-lg">
                  Yay! You are eligible for FREE Delivery
                </span>
              </div>

              {remainsForExtraDiscount > 0 ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
                  <span className="text-emerald-700 text-sm font-medium">
                    Add ₹{remainsForExtraDiscount} more to get extra 5% off
                  </span>
                  <div className="w-full sm:w-[200px] h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                      style={{ width: `${extraDiscountProgress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-emerald-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold animate-pulse">
                  🎉 Extra 5% Discount Applied! Saved ₹{extraDiscount} more.
                </div>
              )}
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side */}
            <div className="lg:col-span-8">
              <CartItems />
            </div>

            {/* Right Side */}
            <div className="lg:col-span-4">
              {/* Price Details */}
              <div className="border rounded-2xl p-6 sm:p-8 bg-white shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">
                  Price Details
                </h2>

                <div className="space-y-4 text-slate-700">
                  <div className="flex justify-between text-base">
                    <span>Bag Total ({totalItems} Items)</span>
                    <span className="font-semibold text-slate-900">₹{bagTotal}</span>
                  </div>

                  <div className="flex justify-between text-base">
                    <span>Product Discount</span>
                    <span className="text-emerald-600 font-semibold">
                      −₹{totalDiscount}
                    </span>
                  </div>

                  {extraDiscount > 0 && (
                    <div className="flex justify-between text-base">
                      <span>Extra 5% Discount</span>
                      <span className="text-emerald-600 font-semibold">
                        −₹{extraDiscount}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-base">
                    <span>Delivery Charges</span>
                    <div className="flex items-center">
                      <span className="line-through text-gray-400 mr-2 text-sm">
                        ₹99
                      </span>
                      <span className="text-emerald-600 font-semibold">
                        FREE
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-gray-100" />

                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      Total Amount
                    </h3>
                    <p className="text-emerald-600 text-xs mt-1 font-semibold">
                      You will save ₹{totalDiscount + extraDiscount} on this order
                    </p>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-950">
                    ₹{finalPrice}
                  </div>
                </div>

                {/* Coupon */}
                <div className="border border-slate-100 rounded-xl p-4 mb-6 hover:bg-slate-50 cursor-pointer transition flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">
                      Apply Coupon
                    </h4>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Select coupon to get extra discounts
                    </p>
                  </div>
                  <span className="text-slate-400 text-xl font-bold">›</span>
                </div>

                {/* Button */}
                <Link
                  href="/checkout"
                  className="w-full bg-slate-950 text-white rounded-xl py-4 font-semibold text-center block hover:bg-slate-800 transition active:scale-[0.98] shadow-md shadow-slate-950/10"
                >
                  🔒 Proceed to Checkout
                </Link>

                <div className="text-center text-slate-400 text-xs mt-4 flex items-center justify-center gap-1">
                  <span>🛡️</span> 100% Secure Payments
                </div>
              </div>

              {/* Savings Summary Banner */}
              <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100/50 mt-6">
                <p className="text-emerald-800 font-bold text-sm mb-3">
                  🎉 Total Savings Summary
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Product Discount</span>
                    <span className="text-emerald-700 font-semibold">−₹{totalDiscount}</span>
                  </div>
                  {extraDiscount > 0 && (
                    <div className="flex justify-between">
                      <span>Extra Campaign discount</span>
                      <span className="text-emerald-700 font-semibold">−₹{extraDiscount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery saved</span>
                    <span className="text-emerald-700 font-semibold">−₹99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-100 rounded-2xl mt-12 bg-slate-50/50 divide-y md:divide-y-0 md:divide-x divide-gray-100 overflow-hidden text-center md:text-left">
        <div className="p-6">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">Same Day Delivery</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">Super fast delivery within hours</p>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">Easy Returns</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">7 days easy return policy</p>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">100% Secure Payments</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">Multiple secure checkout gateways</p>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">Best Price Guaranteed</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">We price match our brands</p>
        </div>
      </div>
    </div>
  );
}