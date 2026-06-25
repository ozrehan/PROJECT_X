"use client";

const categories = [
  ["T-Shirts",320],
  ["Shirts",280],
  ["Jeans",210],
  ["Trousers",180],
  ["Jackets",120],
];

const sizes = ["S","M","L","XL","XXL","3XL"];

const colors = [
"#000000",
"#1D4ED8",
"#9CA3AF",
"#F5F5F5",
"#374151",
"#8B5CF6",
"#EF4444",
];

export default function StoreFilters(){

return(

<div className="space-y-8">

<div className="flex justify-between items-center">

<h2 className="text-2xl font-bold">
Filters
</h2>

<button className="text-amber-500">
Clear All
</button>

</div>

{/* CATEGORY */}

<div>

<h3 className="font-semibold mb-4">
Category
</h3>

<div className="space-y-3">

{categories.map(([name,count])=>(

<label
key={String(name)}
className="flex justify-between items-center cursor-pointer"
>

<div className="flex items-center gap-2">

<input type="checkbox"/>

<span>{name}</span>

</div>

<span className="text-gray-400">
({count})
</span>

</label>

))}

</div>

</div>

{/* PRICE */}

<div>

<h3 className="font-semibold mb-4">
Price Range
</h3>

<input
type="range"
min="199"
max="2999"
className="w-full accent-amber-500"
/>

<div className="flex justify-between mt-3">

<div className="border rounded px-3 py-1">
₹199
</div>

<div className="border rounded px-3 py-1">
₹2999
</div>

</div>

</div>

{/* SIZE */}

<div>

<h3 className="font-semibold mb-4">
Size
</h3>

<div className="flex flex-wrap gap-2">

{sizes.map(size=>(

<button
key={size}
className="border rounded-lg px-3 py-2 hover:bg-black hover:text-white"
>

{size}

</button>

))}

</div>

</div>

{/* COLORS */}

<div>

<h3 className="font-semibold mb-4">
Color
</h3>

<div className="flex flex-wrap gap-3">

{colors.map(color=>(

<button
key={color}
className="w-8 h-8 rounded-full border-2"
style={{background:color}}
/>

))}

</div>

</div>

</div>

)

}