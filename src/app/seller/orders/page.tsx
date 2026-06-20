export default function SellerOrders() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Orders Management
      </h1>

      <div className="border rounded-xl p-6">
        <h2 className="font-bold">
          Order #OZ1001
        </h2>

        <p>Premium Black Shirt</p>

        <p>Customer: Rehan</p>

        <p>Status: Pending</p>

        <div className="mt-4 flex gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Accept
          </button>

          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}