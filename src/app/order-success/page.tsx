import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircle2, ShoppingBag, Truck, Calendar } from "lucide-react";

export default function OrderSuccessPage() {
  const orderNumber = "OZ-" + Math.floor(100000 + Math.random() * 900000);
  
  return (
    <>
      <Navbar />

      <main className="max-w-[800px] mx-auto px-6 py-16 text-center">
        {/* Success Card */}
        <div className="bg-white border border-gray-150 rounded-[32px] p-8 sm:p-12 shadow-xl shadow-slate-100 flex flex-col items-center">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 animate-scaleIn">
            <CheckCircle2 size={48} strokeWidth={2} />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Order Confirmed
          </p>

          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            Thank you for your purchase!
          </h1>

          <p className="text-slate-500 mt-4 max-w-md text-sm sm:text-base leading-relaxed">
            Your payment went through successfully and your order has been received by our stores. We are preparing it for shipment.
          </p>

          <div className="mt-8 bg-slate-50 rounded-2xl p-5 w-full max-w-md border border-slate-100/80 divide-y divide-slate-200/50 text-left">
            <div className="pb-3 flex justify-between items-center text-sm">
              <span className="text-slate-500">Order ID:</span>
              <span className="font-bold text-slate-900">{orderNumber}</span>
            </div>
            
            <div className="py-3 flex justify-between items-center text-sm">
              <span className="text-slate-500">Estimated delivery:</span>
              <span className="font-bold text-slate-900 flex items-center gap-1">
                <Truck size={14} className="text-amber-500" /> Today (Within 2-4 hours)
              </span>
            </div>

            <div className="pt-3 flex justify-between items-center text-sm">
              <span className="text-slate-500">Payment Status:</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                ✓ Secured & Paid
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <Link
              href="/"
              className="flex-1 bg-slate-950 text-white rounded-xl py-4 font-semibold text-center hover:bg-slate-800 transition active:scale-[0.98] shadow-md shadow-slate-900/10 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} /> Continue Shopping
            </Link>
            
            <Link
              href="/orders"
              className="flex-1 border border-slate-300 text-slate-700 bg-white rounded-xl py-4 font-semibold text-center hover:bg-slate-50 transition active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Calendar size={18} /> Track Orders
            </Link>
          </div>
        </div>

        {/* Small reassurance block */}
        <div className="mt-12 text-slate-400 text-xs flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            📧 Receipt sent to rohan@example.com
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            📞 24/7 Support: +91 98765 43210
          </span>
        </div>
      </main>

      <Footer />
    </>
  );
}