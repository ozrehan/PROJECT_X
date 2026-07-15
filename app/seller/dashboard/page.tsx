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
  DollarSign,
  Users,
  Box,
  ArrowUpRight,
  ArrowDownRight,
  MessageSquare,
  Gift,
  Star as StarIcon,
  CreditCard,
  RefreshCw,
  FileText,
  Archive
} from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutDashboard, label: "Dashboard", path: "/seller/dashboard", active: true },
    { icon: Package, label: "Products", path: "/seller/products" },
    { icon: ShoppingCart, label: "Orders", path: "/seller/orders" },
    { icon: TrendingUp, label: "Analytics", path: "/seller/analytics" },
    { icon: Store, label: "Store Settings", path: "/seller/settings" },
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

  const stats = [
    {
      icon: DollarSign,
      value: "₹2,45,680",
      label: "Total Revenue",
      change: "+12.5%",
      positive: true,
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: ShoppingCart,
      value: "1,245",
      label: "Total Orders",
      change: "+8.2%",
      positive: true,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Package,
      value: "128",
      label: "Active Products",
      change: "+3.1%",
      positive: true,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Users,
      value: "3,842",
      label: "Total Customers",
      change: "-2.4%",
      positive: false,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={stat.iconColor} size={24} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <ShoppingCart className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">New Order #{1000 + item}</p>
                    <p className="text-sm text-gray-600">Customer placed an order for ₹{1000 + item * 100}</p>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}