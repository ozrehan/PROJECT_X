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
  Box,
  AlertTriangle,
  CheckCircle,
  Plus,
  Edit,
  Trash2,
  MoreVertical
} from "lucide-react";

export default function InventoryPage() {
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
    { icon: FileText, label: "Reports", path: "/seller/reports" },
    { icon: Archive, label: "Inventory", path: "/seller/inventory", active: true },
    { icon: User, label: "Profile", path: "/seller/profile" },
    { icon: HelpCircle, label: "Help", path: "/seller/help" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  const inventory = [
    { id: 1, product: "Black Formal Shirt", sku: "FH-BLK-SH-001", quantity: 25, threshold: 10, status: "In Stock" },
    { id: 2, product: "Blue Slim Fit Jeans", sku: "FH-BLU-JN-002", quantity: 8, threshold: 15, status: "Low Stock" },
    { id: 3, product: "White Cotton Shirt", sku: "FH-WHT-SH-003", quantity: 0, threshold: 20, status: "Out of Stock" },
    { id: 4, product: "Black Polo T-Shirt", sku: "FH-BLK-PT-004", quantity: 42, threshold: 15, status: "In Stock" },
    { id: 5, product: "Grey Hoodie", sku: "FH-GRY-HD-005", quantity: 3, threshold: 10, status: "Low Stock" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Stock": return <CheckCircle className="text-green-500" size={18} />;
      case "Low Stock": return <AlertTriangle className="text-orange-500" size={18} />;
      case "Out of Stock": return <AlertTriangle className="text-red-500" size={18} />;
      default: return <Box className="text-gray-500" size={18} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock": return "bg-green-100 text-green-700";
      case "Low Stock": return "bg-orange-100 text-orange-700";
      case "Out of Stock": return "bg-red-100 text-red-700";
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              <Plus size={18} />
              Add Stock
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Box className="text-blue-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Total Products</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">128</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">In Stock</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">98</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="text-orange-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Low Stock</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">22</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="text-red-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Out of Stock</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Stock Levels</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
                  />
                </div>
              </div>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Threshold</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inventory.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{item.product}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.sku}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{item.quantity}</td>
                    <td className="px-6 py-4 text-gray-600">{item.threshold}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(item.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-600 hover:text-orange-500">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-gray-900">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}