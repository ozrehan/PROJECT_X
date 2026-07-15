"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Menu,
  Home,
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  Store,
  MessageSquare,
  Gift,
  Star as StarIcon,
  CreditCard,
  RefreshCw,
  FileText,
  Archive,
  User,
  HelpCircle,
  LogOut,
  Package as BoxIcon,
  CheckCircle,
  XCircle,
  Clock,
  MoreVertical
} from "lucide-react";

export default function ReturnsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutDashboard, label: "Dashboard", path: "/seller/dashboard" },
    { icon: Package, label: "Products", path: "/seller/products" },
    { icon: ShoppingCart, label: "Orders", path: "/seller/orders" },
    { icon: TrendingUp, label: "Analytics", path: "/seller/analytics" },
    { icon: Store, label: "Store Settings", path: "/seller/settings" },
    { icon: MessageSquare, label: "Messages", path: "/seller/messages" },
    { icon: Gift, label: "Promotions", path: "/seller/promotions" },
    { icon: StarIcon, label: "Reviews", path: "/seller/reviews" },
    { icon: CreditCard, label: "Payments", path: "/seller/payments" },
    { icon: RefreshCw, label: "Returns", path: "/seller/returns", active: true },
    { icon: FileText, label: "Reports", path: "/seller/reports" },
    { icon: Archive, label: "Inventory", path: "/seller/inventory" },
    { icon: User, label: "Profile", path: "/seller/profile" },
    { icon: HelpCircle, label: "Help", path: "/seller/help" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  const returns = [
    { id: 1, order: "#1001", customer: "Rahul Kumar", product: "Black Formal Shirt", reason: "Size doesn't fit", status: "Pending", date: "2026-07-14" },
    { id: 2, order: "#1002", customer: "Priya Singh", product: "Blue Slim Fit Jeans", reason: "Quality issue", status: "Approved", date: "2026-07-13" },
    { id: 3, order: "#1003", customer: "Amit Patel", product: "White Cotton Shirt", reason: "Wrong item received", status: "Rejected", date: "2026-07-12" },
    { id: 4, order: "#1004", customer: "Sneha Reddy", product: "Black Polo T-Shirt", reason: "Changed mind", status: "Completed", date: "2026-07-11" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved": return <CheckCircle className="text-green-500" size={18} />;
      case "Rejected": return <XCircle className="text-red-500" size={18} />;
      case "Completed": return <CheckCircle className="text-blue-500" size={18} />;
      case "Pending": return <Clock className="text-orange-500" size={18} />;
      default: return <Clock className="text-gray-500" size={18} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-700";
      case "Rejected": return "bg-red-100 text-red-700";
      case "Completed": return "bg-blue-100 text-blue-700";
      case "Pending": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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

      <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Returns & Refunds</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="text-orange-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Pending Returns</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Approved</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">12</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="text-red-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Rejected</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">5</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BoxIcon className="text-blue-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">28</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Return Requests</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {returns.map((ret) => (
                <div key={ret.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <BoxIcon className="text-gray-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{ret.order}</h3>
                        <p className="text-sm text-gray-500">{ret.customer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getStatusIcon(ret.status)}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ret.status)}`}>
                        {ret.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Product:</span>
                      <span className="text-gray-900 ml-2">{ret.product}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Reason:</span>
                      <span className="text-gray-900 ml-2">{ret.reason}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-500">{ret.date}</span>
                    <button className="p-2 text-gray-600 hover:text-gray-900">
                      <MoreVertical size={16} />
                    </button>
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