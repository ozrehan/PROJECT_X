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
  Download,
  BarChart3,
  LineChart,
  PieChart,
  Calendar
} from "lucide-react";

export default function ReportsPage() {
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
    { icon: RefreshCw, label: "Returns", path: "/seller/returns" },
    { icon: FileText, label: "Reports", path: "/seller/reports", active: true },
    { icon: Archive, label: "Inventory", path: "/seller/inventory" },
    { icon: User, label: "Profile", path: "/seller/profile" },
    { icon: HelpCircle, label: "Help", path: "/seller/help" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  const reports = [
    { id: 1, name: "Sales Report", type: "Sales", date: "2026-07-14", status: "Ready" },
    { id: 2, name: "Inventory Report", type: "Inventory", date: "2026-07-13", status: "Ready" },
    { id: 3, name: "Customer Analytics", type: "Analytics", date: "2026-07-12", status: "Processing" },
    { id: 4, name: "Revenue Summary", type: "Financial", date: "2026-07-11", status: "Ready" }
  ];

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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              <Download size={18} />
              Generate Report
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 cursor-pointer hover:border-orange-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-blue-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Sales Report</span>
              </div>
              <button className="text-orange-500 text-sm font-medium hover:text-orange-600">Generate</button>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 cursor-pointer hover:border-orange-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Archive className="text-green-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Inventory Report</span>
              </div>
              <button className="text-orange-500 text-sm font-medium hover:text-orange-600">Generate</button>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 cursor-pointer hover:border-orange-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <LineChart className="text-purple-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Revenue Report</span>
              </div>
              <button className="text-orange-500 text-sm font-medium hover:text-orange-600">Generate</button>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 cursor-pointer hover:border-orange-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <PieChart className="text-orange-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Customer Report</span>
              </div>
              <button className="text-orange-500 text-sm font-medium hover:text-orange-600">Generate</button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <Calendar size={16} />
                Last 30 Days
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {reports.map((report) => (
                <div key={report.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="text-gray-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{report.name}</h3>
                      <p className="text-sm text-gray-500">{report.type} • {report.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      report.status === 'Ready' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {report.status}
                    </span>
                    <button className="p-2 text-gray-600 hover:text-orange-500">
                      <Download size={16} />
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