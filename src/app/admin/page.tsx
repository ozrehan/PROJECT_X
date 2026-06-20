export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Oz Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="border rounded-xl p-6">
          <h2>Total Stores</h2>
          <p className="text-3xl font-bold">25</p>
        </div>

        <div className="border rounded-xl p-6">
          <h2>Total Users</h2>
          <p className="text-3xl font-bold">850</p>
        </div>

        <div className="border rounded-xl p-6">
          <h2>Total Orders</h2>
          <p className="text-3xl font-bold">420</p>
        </div>

        <div className="border rounded-xl p-6">
          <h2>Revenue</h2>
          <p className="text-3xl font-bold">₹2.4L</p>
        </div>
      </div>
    </div>
  );
}