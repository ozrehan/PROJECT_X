import {
  Truck,
  RotateCcw,
  Star,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Same Day Delivery",
    subtitle: "Super fast delivery",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "7 days return policy",
  },
  {
    icon: Star,
    title: "Top Rated Stores",
    subtitle: "Best quality products",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    subtitle: "100% safe & secure",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "We're here to help",
  },
];

export default function WhyShop() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      <h2 className="text-3xl font-bold mb-8">
        WHY SHOP WITH OZ?
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="bg-white border rounded-2xl p-5 shadow-sm"
            >
              <Icon
                size={34}
                className="text-amber-500 mb-3"
              />

              <h3 className="font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {feature.subtitle}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}