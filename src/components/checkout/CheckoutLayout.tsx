"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DeliveryAddress from "./DeliveryAddress";
import CheckoutSteps from "./CheckoutSteps";
import { useCartStore } from "@/lib/cartStore";
import { Truck, Check, Edit2 } from "lucide-react";

export default function CheckoutLayout() {
  const router = useRouter();
  const { items, clearCart, loadCart } = useCartStore();
  const [deliveryOption, setDeliveryOption] = useState<"standard" | "express">("standard");
  const [orderNotes, setOrderNotes] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  useEffect(() => {
    loadCart();
  }, []);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const bagTotal = items.reduce((acc, item) => acc + item.oldPrice * item.quantity, 0);
  const discountedTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const productDiscount = bagTotal - discountedTotal;
  
  const deliveryCharge = deliveryOption === "express" ? 150 : 0;
  const finalPrice = discountedTotal + deliveryCharge;

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    setIsPlacingOrder(true);
    
    // Simulate API order placement
    setTimeout(() => {
      clearCart();
      router.push("/order-success");
    }, 1500);
  };

  if (items.length === 0 && !isPlacingOrder) {
    return (
      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-3xl font-bold text-slate-800">Your checkout is empty</h1>
        <p className="text-slate-500 mt-2">You don't have any items in your cart to checkout.</p>
        <Link href="/" className="inline-block mt-6 bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-slate-700 transition font-semibold">
          Shop Clothes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      {/* Stepper Header */}
      <CheckoutSteps />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-8 space-y-6">
          {/* Delivery Address */}
          <DeliveryAddress />

          {/* Delivery Options */}
          <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Truck size={24} className="text-amber-500" />
              Delivery Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Standard option */}
              <div 
                onClick={() => setDeliveryOption("standard")}
                className={`border rounded-xl p-4 cursor-pointer transition flex items-center justify-between ${
                  deliveryOption === "standard" 
                    ? "border-amber-500 bg-amber-500/5 shadow-sm" 
                    : "border-slate-200 hover:border-amber-300"
                }`}
              >
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Standard Delivery</h3>
                  <p className="text-slate-500 text-xs mt-1">Delivery tomorrow (Within 24 hours)</p>
                </div>
                <div className="text-right">
                  <span className="text-emerald-600 font-bold text-sm">FREE</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-2 ${
                    deliveryOption === "standard" ? "bg-amber-500 border-amber-500 text-white" : "border-slate-300"
                  }`}>
                    {deliveryOption === "standard" && <Check size={12} strokeWidth={3} />}
                  </div>
                </div>
              </div>

              {/* Express option */}
              <div 
                onClick={() => setDeliveryOption("express")}
                className={`border rounded-xl p-4 cursor-pointer transition flex items-center justify-between ${
                  deliveryOption === "express" 
                    ? "border-amber-500 bg-amber-500/5 shadow-sm" 
                    : "border-slate-200 hover:border-amber-300"
                }`}
              >
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Express Courier</h3>
                  <p className="text-slate-500 text-xs mt-1">Superfast delivery today (Within 2-4 hours)</p>
                </div>
                <div className="text-right">
                  <span className="text-slate-800 font-bold text-sm">₹150</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-2 ${
                    deliveryOption === "express" ? "bg-amber-500 border-amber-500 text-white" : "border-slate-300"
                  }`}>
                    {deliveryOption === "express" && <Check size={12} strokeWidth={3} />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Notes */}
          <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Edit2 size={20} className="text-amber-500" />
              Delivery Instruction Notes
            </h2>
            <textarea
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              placeholder="E.g., Please leave the package with the guard, ring bell twice, or gate code #1234..."
              className="w-full border border-slate-200 rounded-xl p-3 outline-none text-slate-700 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-50 font-sans min-h-[90px] text-sm"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-4">
          {/* Order Summary */}
          <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Order Summary
            </h2>

            {/* Items List */}
            <div className="max-h-[220px] overflow-y-auto divide-y divide-slate-50 pr-2">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-3 py-3 items-center">
                  <div className="w-14 h-14 relative rounded-lg overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-sm text-slate-800 truncate">{item.name}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Size: {item.size} | Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-bold text-slate-950 text-sm">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Details */}
            <div className="border-t border-slate-100 pt-4 space-y-3.5 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Bag Total ({totalItems} items)</span>
                <span className="font-semibold text-slate-950">₹{bagTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Coupon & discounts</span>
                <span className="text-emerald-600 font-semibold">−₹{productDiscount}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping fee</span>
                <span className="text-slate-950">
                  {deliveryCharge > 0 ? `₹${deliveryCharge}` : "FREE"}
                </span>
              </div>
            </div>

            {/* Final Total */}
            <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
              <div>
                <span className="text-base font-bold text-slate-950">Grand Total</span>
                <p className="text-emerald-600 text-xs mt-0.5 font-medium">Saved ₹{productDiscount} today</p>
              </div>
              <span className="text-3xl font-extrabold text-slate-950">₹{finalPrice}</span>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              disabled={isPlacingOrder}
              className={`w-full text-white font-bold py-4 rounded-xl shadow-md transition active:scale-[0.98] mt-2 block text-center ${
                isPlacingOrder 
                  ? "bg-slate-400 cursor-not-allowed" 
                  : "bg-slate-950 hover:bg-slate-850 shadow-slate-900/10"
              }`}
            >
              {isPlacingOrder ? "Placing Order..." : "Place Order & Pay"}
            </button>
            
            <p className="text-center text-slate-400 text-xs">
              By checking out, you agree to our Terms of Sale and Privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}