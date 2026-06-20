export default function StorePage() {
  return (
    <div className="min-h-screen">
      <div className="h-64 bg-orange-500"></div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 bg-gray-300 rounded-full"></div>

          <div>
            <h1 className="text-4xl font-bold">
              Fashion Hub
            </h1>

            <p className="text-gray-600">
              Premium Fashion Store • Hyderabad
            </p>

            <p className="mt-2">
              ⭐ 4.8 | 1,200 Products
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          Store Products
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map((item) => (
            <div
              key={item}
              className="border rounded-xl overflow-hidden"
            >
              <div className="h-56 bg-gray-200"></div>

              <div className="p-4">
                <h3 className="font-bold">
                  Premium Shirt
                </h3>

                <p className="text-orange-500 font-bold">
                  ₹999
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}