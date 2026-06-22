export default function ProfilePage() {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        My Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Profile Card */}
        <div className="border rounded-lg sm:rounded-xl p-6 col-span-full md:col-span-1">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h2 className="text-lg sm:text-xl font-bold text-center">John Doe</h2>
          <p className="text-sm text-gray-600 text-center">john@example.com</p>
          <button className="w-full mt-4 bg-amber-500 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-600 transition text-sm sm:text-base">
            Edit Profile
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-1 col-span-full md:col-span-2 gap-3 md:gap-4">
          <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6">
            <p className="text-gray-600 text-xs sm:text-sm mb-2">Total Orders</p>
            <h3 className="text-2xl sm:text-3xl font-bold">12</h3>
          </div>
          <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6">
            <p className="text-gray-600 text-xs sm:text-sm mb-2">Wishlist Items</p>
            <h3 className="text-2xl sm:text-3xl font-bold">8</h3>
          </div>
          <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6">
            <p className="text-gray-600 text-xs sm:text-sm mb-2">Loyalty Points</p>
            <h3 className="text-2xl sm:text-3xl font-bold">450</h3>
          </div>
          <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6">
            <p className="text-gray-600 text-xs sm:text-sm mb-2">Member Since</p>
            <h3 className="text-lg sm:text-xl font-bold">Jan 2024</h3>
          </div>
        </div>
      </div>

      {/* Profile Options */}
      <div className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Settings</h2>
        <div className="space-y-2">
          <button className="w-full text-left p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition text-sm sm:text-base">
            📍 Manage Addresses
          </button>
          <button className="w-full text-left p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition text-sm sm:text-base">
            💳 Payment Methods
          </button>
          <button className="w-full text-left p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition text-sm sm:text-base">
            🔐 Change Password
          </button>
          <button className="w-full text-left p-3 sm:p-4 border rounded-lg text-red-600 hover:bg-red-50 transition text-sm sm:text-base">
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}