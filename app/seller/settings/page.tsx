"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Upload,
  Edit,
  Menu,
  X,
  Save,
  Store,
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  Settings,
  LogOut,
  Phone,
  Mail,
  MapPin,
  Star,
  Home,
  User,
  CreditCard,
  BarChart3,
  Boxes,
  ShoppingBag,
  Users as UsersIcon,
  HelpCircle,
  MessageSquare,
  Gift,
  Star as StarIcon,
  RefreshCw,
  FileText,
  Archive
} from "lucide-react";

export default function StoreSettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutDashboard, label: "Dashboard", path: "/seller/dashboard" },
    { icon: Package, label: "Products", path: "/seller/products" },
    { icon: ShoppingCart, label: "Orders", path: "/seller/orders" },
    { icon: TrendingUp, label: "Analytics", path: "/seller/analytics" },
    { icon: Store, label: "Store Settings", path: "/seller/settings", active: true },
    { icon: MessageSquare, label: "Messages", path: "/seller/messages" },
    { icon: Gift, label: "Promotions", path: "/seller/promotions" },
    { icon: StarIcon, label: "Reviews", path: "/seller/reviews" },
    { icon: CreditCard, label: "Payments", path: "/seller/payments" },
    { icon: RefreshCw, label: "Returns", path: "/seller/returns" },
    { icon: FileText, label: "Reports", path: "/seller/reports" },
    { icon: Archive, label: "Inventory", path: "/seller/inventory" },
    { icon: User, label: "Profile", path: "/seller/profile" },
    { icon: HelpCircle, label: "Help", path: "/seller/help" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-orange-500 transition-colors">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">OZ</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Marketplace</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
            />
          </div>
          <button className="text-gray-600 hover:text-orange-500 transition-colors relative">
            <Bell size={22} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full text-xs flex items-center justify-center text-white">3</span>
          </button>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
            FH
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-16 bottom-0 bg-white z-40 transition-all duration-300 border-r border-gray-200 ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
        <div className="p-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-orange-50 text-orange-600 border border-orange-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="p-8">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Store Settings</h1>
              <p className="text-gray-600 mt-1">Manage your store information and preferences</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Edit size={18} />
                Edit Store
              </button>
            </div>
          </div>

          {/* Store Settings Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Basic Information Section */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  Active
                </span>
              </div>

              {/* Store Logo Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Logo</label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300">
                    <Store size={40} className="text-gray-400" />
                  </div>
                  <div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors mb-2">
                      <Upload size={18} />
                      Upload Logo
                    </button>
                    <p className="text-xs text-gray-500">Recommended: 200x200px, Max 2MB</p>
                  </div>
                </div>
              </div>

              {/* Store Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                  Fashion Hub
                </div>
              </div>

              {/* Store Type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Type</label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                  Fashion
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                  Premium fashion store offering trendy clothing and accessories for men and women.
                </div>
              </div>
            </div>

            {/* Store Settings Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Store Settings</h2>

              {/* Store URL */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Store URL</label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">oz-marketplace.com/store/</span>
                  <div className="flex-1 px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    fashion-hub
                  </div>
                </div>
              </div>

              {/* Commission Rate */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Commission Rate</label>
                <div className="flex items-center gap-2">
                  <div className="w-20 px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    12
                  </div>
                  <span className="text-gray-500 text-sm">%</span>
                </div>
              </div>

              {/* Store Status */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Status</label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                  Active
                </div>
              </div>

              {/* Featured Store Toggle */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Featured Store</label>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-6 rounded-full bg-orange-500 cursor-pointer">
                    <span className="absolute top-1 left-7 w-4 h-4 bg-white rounded-full transition-transform" />
                  </div>
                  <span className="text-sm text-gray-600">Enabled</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Products</span>
                    <span className="text-sm font-semibold text-gray-900">128</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Orders</span>
                    <span className="text-sm font-semibold text-gray-900">1,245</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Revenue</span>
                    <span className="text-sm font-semibold text-gray-900">₹2,45,680</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-900">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <div className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                      contact@fashionhub.com
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <div className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                      +91 98765 43210
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <div className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                      123, MG Road
                    </div>
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    Mumbai
                  </div>
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    Maharashtra
                  </div>
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    400001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}