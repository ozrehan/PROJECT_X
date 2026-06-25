"use client";

import { useState } from "react";

const tabs = [
  "Store Home",
  "All Products",
  "New Arrivals",
  "Best Sellers",
  "Reviews (12.1k)",
  "Store Info",
];

export default function StoreTabs() {
  const [activeTab, setActiveTab] = useState("Store Home");

  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">

      <div className="flex gap-8 border-b overflow-x-auto">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 whitespace-nowrap font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-amber-500 text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>

    </section>
  );
}