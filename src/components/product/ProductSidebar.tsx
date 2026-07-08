import { Clock3, Gift, MessageCircleMore, BadgeCheck } from "lucide-react";

const perks = [
  {
    title: "Estimated delivery",
    detail: "Today, 2-4 hours",
    icon: Clock3,
  },
  {
    title: "Exclusive offer",
    detail: "Free shipping above ₹999",
    icon: Gift,
  },
  {
    title: "Trusted seller",
    detail: "Verified by 12k happy buyers",
    icon: BadgeCheck,
  },
];

export default function ProductSidebar() {
  return (
    <aside className="rounded-[28px] border border-gray-200 bg-slate-950 p-5 text-white shadow-sm sm:p-6">
      <div className="rounded-2xl bg-white/10 p-4">
        <p className="text-sm font-semibold text-amber-300">Limited stock</p>
        <p className="mt-2 text-2xl font-semibold">Only 8 left</p>
        <p className="mt-2 text-sm text-slate-300">
          Popular in this style. Order soon to avoid missing out.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {perks.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon size={16} className="text-amber-300" />
                {item.title}
              </div>
              <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-amber-200">
          <MessageCircleMore size={16} />
          Need help choosing?
        </div>
        <p className="mt-2 text-sm text-slate-300">
          Chat with our style guide and get personalized recommendations.
        </p>
      </div>
    </aside>
  );
}