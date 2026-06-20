export default function OrdersPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      <div className="border rounded-xl p-6 mb-4">
        <h2 className="font-bold">
          Order #OZ1001
        </h2>

        <p>Premium Black Shirt</p>

        <p className="text-green-600">
          Delivered
        </p>
      </div>

      <div className="border rounded-xl p-6">
        <h2 className="font-bold">
          Order #OZ1002
        </h2>

        <p>Blue Jeans</p>

        <p className="text-orange-500">
          Out For Delivery
        </p>
      </div>
    </div>
  );
}