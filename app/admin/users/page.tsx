"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Upload,
  Plus,
  Edit,
  Copy,
  Trash2,
  Filter,
  Menu,
  HelpCircle,
  X,
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
  Check,
  XCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Shield,
  User,
  Mail,
  Calendar,
  Ban,
  MoreHorizontal,
  Crown,
  BadgeCheck,
  FileCheck,
  Building2,
  FileText
} from "lucide-react";

interface MenuItem {
  icon: any;
  label: string;
  path: string;
  active?: boolean;
}

export default function UsersPage() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("User Details");
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [storeSelector, setStoreSelector] = useState("My Store");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data for users
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 hours ago",
      joinedDate: "Jan 15, 2024",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      totalOrders: 45,
      totalSpent: "₹45,230"
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Customer",
      status: "Active",
      lastActive: "1 day ago",
      joinedDate: "Feb 20, 2024",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      totalOrders: 23,
      totalSpent: "₹28,450"
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "Seller",
      status: "Active",
      lastActive: "3 hours ago",
      joinedDate: "Mar 10, 2024",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      totalOrders: 0,
      totalSpent: "₹0"
    },
    {
      id: "4",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      role: "Customer",
      status: "Suspended",
      lastActive: "5 days ago",
      joinedDate: "Apr 5, 2024",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      totalOrders: 12,
      totalSpent: "₹15,670"
    },
    {
      id: "5",
      name: "David Brown",
      email: "david.brown@example.com",
      role: "Customer",
      status: "Active",
      lastActive: "30 minutes ago",
      joinedDate: "May 12, 2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      totalOrders: 67,
      totalSpent: "₹78,890"
    },
    {
      id: "6",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Seller",
      status: "Active",
      lastActive: "6 hours ago",
      joinedDate: "Jun 8, 2024",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      totalOrders: 0,
      totalSpent: "₹0"
    },
    {
      id: "7",
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      role: "Customer",
      status: "Inactive",
      lastActive: "1 month ago",
      joinedDate: "Jul 22, 2024",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      totalOrders: 8,
      totalSpent: "₹9,450"
    },
    {
      id: "8",
      name: "Lisa Anderson",
      email: "lisa.anderson@example.com",
      role: "Customer",
      status: "Active",
      lastActive: "4 hours ago",
      joinedDate: "Aug 15, 2024",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      totalOrders: 34,
      totalSpent: "₹42,100"
    }
  ];

  const menuItems: MenuItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: FileCheck, label: "Store Approvals", path: "/admin/store-approval" },
    { icon: Store, label: "Stores", path: "/admin/stores" },
    { icon: Users, label: "Customers", path: "/admin/customers" },
    { icon: ShoppingCart, label: "Orders", path: "/admin/orders" },
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
      icon: Users,
      value: "850",
      label: "Total Users",
      description: "Registered users",
      color: "purple",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Check,
      value: "720",
      label: "Active Users",
      description: "Currently active",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: TrendingUp,
      value: "45",
      label: "New Signups",
      description: "This week",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Ban,
      value: "12",
      label: "Suspended",
      description: "Require attention",
      color: "red",
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    }
  ];

  const tabs = [
    "User Details",
    "Activity Log",
    "Order History",
    "Permissions",
    "Notifications"
  ];

  const roles = ["All Roles", "Admin", "Seller", "Customer"];
  const statuses = ["All Status", "Active", "Inactive", "Suspended"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-green-50";
      case "Inactive":
        return "text-gray-600 bg-gray-50";
      case "Suspended":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-gray-100 text-gray-700";
      case "Suspended":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-700";
      case "Seller":
        return "bg-blue-100 text-blue-700";
      case "Customer":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin":
        return Crown;
      case "Seller":
        return Store;
      case "Customer":
        return User;
      default:
        return User;
    }
  };

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
              placeholder="Search users, orders, customers..."
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
            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Upload size={18} />
                <span className="font-medium">Bulk Import</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Plus size={18} />
                <span className="font-medium">Add User</span>
              </button>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
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

            {/* User Toolbar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4 lg:mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search users by name, email, role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter size={18} />
                    <span className="font-medium">Filters</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-4 text-left">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Last Active
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Total Orders
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Total Spent
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users.map((user) => {
                      const RoleIcon = getRoleIcon(user.role);
                      return (
                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <input
                              type="checkbox"
                              className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-start gap-3">
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <p className="font-semibold text-gray-900 mb-1">{user.name}</p>
                                <p className="text-sm text-gray-500 mb-1">{user.email}</p>
                                <div className="flex items-center gap-1 text-xs text-gray-400">
                                  <Calendar size={12} />
                                  <span>Joined {user.joinedDate}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRoleBadge(user.role)}`}>
                                <RoleIcon size={14} className="mr-1" />
                                {user.role}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(user.status)}`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-600">{user.lastActive}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-gray-900">{user.totalOrders}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-bold text-gray-900">{user.totalSpent}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <Edit size={16} className="text-gray-600" />
                              </button>
                              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <MoreHorizontal size={16} className="text-gray-600" />
                              </button>
                              <button className="p-2 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                                <Ban size={16} className="text-red-500" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Items per page:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="px-3 py-1 bg-orange-500 text-white rounded-lg">1</button>
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                  <span className="px-2">...</span>
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">85</button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Management Panel */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? "text-orange-600 border-b-2 border-orange-500 bg-orange-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "User Details" && (
                  <div className="space-y-6">
                    <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                        alt="Selected User"
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h3>
                        <p className="text-gray-600 mb-3">john.doe@example.com</p>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                            <Crown size={14} className="mr-1" />
                            Admin
                          </span>
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1">Member Since</p>
                        <p className="text-lg font-semibold text-gray-900">Jan 15, 2024</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <ShoppingCart className="text-orange-500" size={20} />
                          <span className="font-semibold">Total Orders</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">45</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="text-green-500" size={20} />
                          <span className="font-semibold">Total Spent</span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">₹45,230</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <BadgeCheck className="text-blue-500" size={20} />
                          <span className="font-semibold">Account Status</span>
                        </div>
                        <p className="text-3xl font-bold text-green-600">Active</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                          <User className="text-orange-500" size={20} />
                          <span className="font-semibold">Personal Information</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Phone:</span>
                            <span className="text-sm font-medium">+91 98765 43210</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Location:</span>
                            <span className="text-sm font-medium">Mumbai, India</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Date of Birth:</span>
                            <span className="text-sm font-medium">Jan 15, 1990</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                          <Shield className="text-orange-500" size={20} />
                          <span className="font-semibold">Security Settings</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">2FA Enabled:</span>
                            <span className="text-sm font-medium text-green-600">Yes</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Last Password Change:</span>
                            <span className="text-sm font-medium">30 days ago</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Login Attempts:</span>
                            <span className="text-sm font-medium">0 failed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Activity Log" && (
                  <div className="space-y-4">
                    {[
                      { action: "Logged in", time: "2 hours ago", ip: "192.168.1.1" },
                      { action: "Updated profile", time: "1 day ago", ip: "192.168.1.1" },
                      { action: "Changed password", time: "3 days ago", ip: "192.168.1.2" },
                      { action: "Placed order #12345", time: "5 days ago", ip: "192.168.1.1" },
                      { action: "Account created", time: "Jan 15, 2024", ip: "192.168.1.1" }
                    ].map((log, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <Check size={20} className="text-orange-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{log.action}</p>
                            <p className="text-sm text-gray-500">IP: {log.ip}</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{log.time}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Order History" && (
                  <div className="space-y-4">
                    {[
                      { id: "#12345", date: "Jun 10, 2024", amount: "₹2,450", status: "Delivered" },
                      { id: "#12344", date: "May 28, 2024", amount: "₹1,890", status: "Delivered" },
                      { id: "#12343", date: "May 15, 2024", amount: "₹3,200", status: "Delivered" },
                      { id: "#12342", date: "Apr 30, 2024", amount: "₹980", status: "Cancelled" }
                    ].map((order, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <ShoppingCart size={24} className="text-gray-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{order.id}</p>
                            <p className="text-sm text-gray-500">{order.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{order.amount}</p>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Permissions" && (
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <h4 className="font-semibold mb-4">User Permissions</h4>
                      <div className="space-y-3">
                        {[
                          "View Products",
                          "Place Orders",
                          "Write Reviews",
                          "Manage Wishlist",
                          "Track Orders"
                        ].map((permission, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">{permission}</span>
                            <div className="w-12 h-6 bg-orange-500 rounded-full relative cursor-pointer">
                              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Notifications" && (
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <h4 className="font-semibold mb-4">Notification Preferences</h4>
                      <div className="space-y-3">
                        {[
                          "Order Updates",
                          "Promotional Emails",
                          "Account Security",
                          "New Product Alerts",
                          "Price Drop Notifications"
                        ].map((notification, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">{notification}</span>
                            <div className="w-12 h-6 bg-orange-500 rounded-full relative cursor-pointer">
                              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}