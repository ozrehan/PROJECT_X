export default function SellerDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Seller Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white border rounded-xl p-6">
          <h2>Total Products</h2>
          <p className="text-3xl font-bold">120</p>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h2>Total Orders</h2>
          <p className="text-3xl font-bold">89</p>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h2>Revenue</h2>
          <p className="text-3xl font-bold">₹45,000</p>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h2>Rating</h2>
          <p className="text-3xl font-bold">4.8⭐</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          Add Product
        </button>

        <button className="border px-6 py-3 rounded-lg">
          View Orders
        </button>
      </div>
    </div>
  );
}