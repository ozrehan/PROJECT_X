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
  Send,
  MoreVertical,
  Clock
} from "lucide-react";

export default function MessagesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutDashboard, label: "Dashboard", path: "/seller/dashboard" },
    { icon: Package, label: "Products", path: "/seller/products" },
    { icon: ShoppingCart, label: "Orders", path: "/seller/orders" },
    { icon: TrendingUp, label: "Analytics", path: "/seller/analytics" },
    { icon: Store, label: "Store Settings", path: "/seller/settings" },
    { icon: MessageSquare, label: "Messages", path: "/seller/messages", active: true },
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

  const conversations = [
    { id: 1, name: "Rahul Kumar", lastMessage: "When will my order be delivered?", time: "2 min ago", unread: 2 },
    { id: 2, name: "Priya Singh", lastMessage: "Thanks for the quick response!", time: "1 hour ago", unread: 0 },
    { id: 3, name: "Amit Patel", lastMessage: "Is this product available in size L?", time: "3 hours ago", unread: 1 },
    { id: 4, name: "Sneha Reddy", lastMessage: "I need to return this item", time: "1 day ago", unread: 0 },
    { id: 5, name: "Vikram Sharma", lastMessage: "Great quality, will order again!", time: "2 days ago", unread: 0 }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {conversations.map((conv) => (
                  <div key={conv.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{conv.name}</span>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className="inline-block mt-2 px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                        {conv.unread} new
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">RK</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rahul Kumar</h3>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-sm text-gray-800">Hi, I ordered a shirt from your store. When will it be delivered?</p>
                    <span className="text-xs text-gray-500 mt-1 block">2 min ago</span>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-orange-500 text-white rounded-lg p-3 max-w-md">
                    <p className="text-sm">Hello! Your order has been shipped and will be delivered within 2-3 business days.</p>
                    <span className="text-xs text-orange-100 mt-1 block">1 min ago</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    FH
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}