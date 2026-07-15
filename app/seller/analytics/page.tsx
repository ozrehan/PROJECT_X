"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Menu,
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  Store,
  LogOut,
  Home,
  User,
  HelpCircle,
  BarChart3,
  LineChart,
  PieChart,
  Download,
  Calendar
} from "lucide-react";

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutDashboard, label: "Dashboard", path: "/seller/dashboard" },
    { icon: Package, label: "Products", path: "/seller/products" },
    { icon: ShoppingCart, label: "Orders", path: "/seller/orders" },
    { icon: TrendingUp, label: "Analytics", path: "/seller/analytics", active: true },
    { icon: Store, label: "Store Settings", path: "/seller/settings" },
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <Calendar size={18} />
                Last 30 Days
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Download size={18} />
                Export Report
              </button>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-blue-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Total Revenue</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">₹2,45,680</h3>
              <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="text-green-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Total Orders</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1,245</h3>
              <p className="text-sm text-green-600 mt-1">+8.2% from last month</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Package className="text-purple-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Products Sold</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3,842</h3>
              <p className="text-sm text-green-600 mt-1">+15.3% from last month</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-orange-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Conversion Rate</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3.2%</h3>
              <p className="text-sm text-red-600 mt-1">-0.8% from last month</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>
                <LineChart className="text-gray-400" size={20} />
              </div>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Revenue chart will be displayed here</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Sales by Category</h2>
                <PieChart className="text-gray-400" size={20} />
              </div>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Category distribution will be displayed here</p>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Products</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Package className="text-gray-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Product {item}</p>
                    <p className="text-sm text-gray-600">Category: Fashion</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₹{(1000 + item * 100).toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{50 + item * 10} sold</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}