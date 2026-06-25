export default function StoreProducts() {
  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold">
          All Products (1200+)
        </h2>

        <select className="border rounded-lg px-3 py-2">
          <option>Popularity</option>
        </select>

      </div>

      <div className="grid grid-cols-2 gap-5">

        {[1,2,3,4,5,6].map((item)=>(
          <div
            key={item}
            className="border rounded-xl h-[320px]"
          />
        ))}

      </div>

    </div>
  );
}