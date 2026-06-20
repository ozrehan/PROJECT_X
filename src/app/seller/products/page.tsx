export default function SellerProducts() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Product Management
      </h1>

      <button className="bg-orange-500 text-white px-6 py-3 rounded-lg mb-6">
        Add Product
      </button>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-4">
          <h2 className="font-bold">Premium Black Shirt</h2>
          <p>₹999</p>
          <p>Stock: 25</p>
        </div>

        <div className="border rounded-xl p-4">
          <h2 className="font-bold">Blue Jeans</h2>
          <p>₹1499</p>
          <p>Stock: 18</p>
        </div>
      </div>
    </div>
  );
}