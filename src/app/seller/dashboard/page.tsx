export default function SellerDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h1 className="text-5xl text-yellow-500 mb-10">
          Oz
        </h1>

        <div className="space-y-4">
          <p>Dashboard</p>
          <p>Products</p>
          <p>Orders</p>
          <p>Inventory</p>
          <p>Revenue</p>
          <p>Customers</p>
          <p>Reviews</p>
          <p>Marketing</p>
          <p>Reports</p>
          <p>Settings</p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1">

        {/* Topbar */}
        <div className="h-20 bg-black text-white flex items-center justify-between px-8">
          <h2>My Store</h2>

          <input
            className="w-[400px] h-12 rounded-lg px-4 text-black"
            placeholder="Search..."
          />

          <div>Store Owner</div>
        </div>

        {/* Content */}
        <div className="p-8">

          <h1 className="text-4xl font-bold">
            Revenue Dashboard
          </h1>

          <div className="grid grid-cols-5 gap-5 mt-8">

            <div className="bg-white p-6 rounded-xl shadow">
              ₹8,45,230
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              256 Orders
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              ₹3,299 AOV
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              ₹2,45,680 Profit
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              28.9%
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}