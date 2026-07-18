"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Filter,
  Menu,
  HelpCircle,
  MoreVertical,
  Settings,
  LogOut,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Box,
  DollarSign,
  Users,
  Star,
  Megaphone,
  Store,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Download,
  Eye,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
  Package as PackageIcon,
  TrendingUp,
  Zap,
  Mail,
  RotateCcw,
  FileCheck,
  Building2,
  FileText,
  Shield
} from "lucide-react";

export default function AdminOrders() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [paymentFilter, setPaymentFilter] = useState("All Payment Methods");
  const [dateRange, setDateRange] = useState("01 May 2025 - 11 May 2025");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: FileCheck, label: "Store Approvals", path: "/admin/store-approval" },
    { icon: Store, label: "Stores", path: "/admin/stores" },
    { icon: Users, label: "Customers", path: "/admin/customers" },
    { icon: ShoppingCart, label: "Orders", path: "/admin/orders", active: true },
    { icon: Package, label: "Products", path: "/admin/products" },
    { icon: Building2, label: "Categories", path: "/admin/categories" },
    { icon: CreditCard, label: "Payments", path: "/admin/payments" },
    { icon: DollarSign, label: "Revenue", path: "/admin/revenue" },
    { icon: FileText, label: "Reports", path: "/admin/reports" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  const stats = [
    {
      icon: PackageIcon,
      value: "1,256",
      label: "Total Orders",
      description: "All marketplace orders",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      value: "118",
      label: "Pending Orders",
      description: "Awaiting processing",
      color: "orange",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Truck,
      value: "652",
      label: "Shipped Orders",
      description: "In transit",
      color: "purple",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: CheckCircle,
      value: "486",
      label: "Delivered Orders",
      description: "Successfully delivered",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: DollarSign,
      value: "₹12.5L",
      label: "Total Revenue",
      description: "This month",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  const orders = [
    {
      id: "OZ1001",
      customer: {
        name: "Amit Sharma",
        email: "amit.sharma@gmail.com",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      store: "Fashion Hub",
      date: "May 10, 2025",
      items: [
        { name: "Premium Black Shirt", quantity: 2, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=60&h=60&fit=crop" },
        { name: "Blue Slim Fit Jeans", quantity: 1, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=60&h=60&fit=crop" }
      ],
      totalItems: 3,
      amount: 4097,
      payment: { method: "UPI", status: "Paid" },
      status: "Pending"
    },
    {
      id: "OZ1002",
      customer: {
        name: "Priya Patel",
        email: "priya.patel@yahoo.com",
        avatar: "https://i.pravatar.cc/150?img=5"
      },
      store: "TechZone Electronics",
      date: "May 9, 2025",
      items: [
        { name: "White Cotton Shirt", quantity: 1, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=60&h=60&fit=crop" }
      ],
      totalItems: 1,
      amount: 999,
      payment: { method: "Credit Card", status: "Paid" },
      status: "Shipped"
    },
    {
      id: "OZ1003",
      customer: {
        name: "Rahul Mehta",
        email: "rahul.mehta@hotmail.com",
        avatar: "https://i.pravatar.cc/150?img=3"
      },
      store: "Fresh Grocery Store",
      date: "May 8, 2025",
      items: [
        { name: "Grey Hoodie", quantity: 2, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=60&h=60&fit=crop" },
        { name: "Black Polo T-Shirt", quantity: 1, image: "https://images.unsplash.com/photo-1625910513413-5fc4e5e1c946?w=60&h=60&fit=crop" }
      ],
      totalItems: 3,
      amount: 4597,
      payment: { method: "Debit Card", status: "Paid" },
      status: "Delivered"
    },
    {
      id: "OZ1004",
      customer: {
        name: "Neha Singh",
        email: "neha.singh@gmail.com",
        avatar: "https://i.pravatar.cc/150?img=9"
      },
      store: "Beauty Paradise",
      date: "May 7, 2025",
      items: [
        { name: "Red Casual Shirt", quantity: 1, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=60&h=60&fit=crop" }
      ],
      totalItems: 1,
      amount: 1199,
      payment: { method: "UPI", status: "Paid" },
      status: "Cancelled"
    },
    {
      id: "OZ1005",
      customer: {
        name: "Vikram Rao",
        email: "vikram.rao@outlook.com",
        avatar: "https://i.pravatar.cc/150?img=8"
      },
      store: "Home Decor Studio",
      date: "May 6, 2025",
      items: [
        { name: "Navy Blazer", quantity: 1, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" },
        { name: "Beige Chinos", quantity: 2, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=60&h=60&fit=crop" }
      ],
      totalItems: 3,
      amount: 6897,
      payment: { method: "Net Banking", status: "Paid" },
      status: "Shipped"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-orange-100 text-orange-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-orange-500";
      case "Shipped":
        return "bg-blue-500";
      case "Delivered":
        return "bg-green-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Marketplace Analytics",
      description: "Track order trends across all stores"
    },
    {
      icon: Store,
      title: "Store Performance",
      description: "Monitor individual store metrics"
    },
    {
      icon: Shield,
      title: "Order Dispute Resolution",
      description: "Handle customer complaints efficiently"
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Generate comprehensive order reports"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Top Navbar */}
      <nav className="h-[72px] bg-black flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white hover:text-blue-500 transition-colors">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">OZ</span>
            </div>
          </div>
          <div className="relative">
            <button className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors">
              <span className="text-sm font-medium">Admin Panel</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Center - Search bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="relative text-white hover:text-blue-500 transition-colors">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white font-semibold">AD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-medium">Admin User</span>
              <span className="text-gray-400 text-xs">Super Admin</span>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </nav>

      <div className="flex pt-[72px]">
        {/* Left Sidebar */}
        <aside
          className={`bg-white border-r border-gray-200 transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-0 overflow-hidden"
          } fixed left-0 top-[72px] bottom-0 z-40 overflow-y-auto`}
        >
          <div className="h-full flex flex-col p-4">
            <nav className="flex-1 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    item.active
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon size={20} className={item.active ? "text-blue-600" : ""} />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Help card */}
            <div className="mt-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="text-blue-600" size={20} />
                <span className="font-semibold text-gray-800">Admin Support</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Get admin assistance</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Contact Admin Support
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`}>
          <div className="p-6 lg:p-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-6 lg:mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${stat.bgColor} p-3 rounded-xl`}>
                      <stat.icon size={24} className={stat.iconColor} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm font-medium text-gray-700 mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* Filter Toolbar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4 lg:mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search all marketplace orders by ID, customer, email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                  <select
                    value={paymentFilter}
                    onChange={(e) => setPaymentFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option>All Payment Methods</option>
                    <option>UPI</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Net Banking</option>
                  </select>
                  <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
                    <Calendar size={18} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{dateRange}</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter size={18} />
                    <span className="font-medium">Filters</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download size={18} />
                    <span className="font-medium">Export</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-4 lg:mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Store
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Items
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Payment
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-semibold text-gray-900">{order.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={order.customer.avatar}
                              alt={order.customer.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-semibold text-gray-900">{order.customer.name}</p>
                              <p className="text-sm text-gray-500">{order.customer.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">{order.store}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-600">{order.date}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                              {order.items.slice(0, 2).map((item, idx) => (
                                <img
                                  key={idx}
                                  src={item.image}
                                  alt={item.name}
                                  className="w-10 h-10 rounded-lg object-cover border-2 border-white"
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{order.totalItems} items</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-gray-900">₹{order.amount.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-sm font-medium text-gray-700">{order.payment.method}</p>
                            <span className="text-xs text-green-600">{order.payment.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${getStatusDot(order.status)}`} />
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                              <Eye size={16} className="text-gray-600" />
                            </button>
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                              <MoreVertical size={16} className="text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Showing 1 to 5 of 1,256 orders
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-lg">1</button>
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                  <span className="px-2">...</span>
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">252</button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                  >
                    <option value={5}>5 / page</option>
                    <option value={10}>10 / page</option>
                    <option value={25}>25 / page</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <feature.icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}