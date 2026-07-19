import { Product } from "@/lib/products";

interface ProductDescriptionProps {
  product: Product;
}

export default function ProductDescription({ product }: ProductDescriptionProps) {
  const highlights = product.highlights && product.highlights.length > 0
    ? product.highlights
    : [
        "Soft premium fabric for all-day comfort",
        "Tailored fit with a modern clean finish",
        "Easy to style with denim, trousers, or ethnic wear",
      ];

  const specs = product.specs && product.specs.length > 0
    ? product.specs
    : [
        { label: "Fabric", value: "100% Cotton" },
        { label: "Care", value: "Machine wash gentle" },
        { label: "Fit", value: "Slim Fit" },
        { label: "Origin", value: "Made in India" },
      ];

  return (
    <section className="mt-8 rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
            Product story
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            Designed to feel effortless and premium
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
            {product.description}
          </p>

          <ul className="mt-5 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[24px] bg-slate-50 p-4 sm:p-5">
          <h3 className="text-lg font-semibold text-slate-900">Details</h3>
          <div className="mt-4 space-y-3">
            {specs.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-slate-200 pb-3 text-sm"
              >
                <span className="text-slate-500">{item.label}</span>
                <span className="font-medium text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}