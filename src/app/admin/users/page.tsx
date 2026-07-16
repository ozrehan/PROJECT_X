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
  Download,
  MapPin,
  Phone,
  Eye,
  FileText,
  Send,
  Truck,
  Building2,
  FileCheck
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

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Package, label: "Products", path: "/admin/products" },
    { icon: ShoppingCart, label: "Orders", path: "/admin/orders" },
    { icon: Box, label: "Inventory", path: "/admin/inventory" },
    { icon: DollarSign, label: "Revenue", path: "/admin/revenue" },
    { icon: Users, label: "Users", path: "/admin/users", active: true },
    { icon: Star, label: "Reviews", path: "/admin/reviews" },
    { icon: Megaphone, label: "Marketing", path: "/admin/marketing" },
    { icon: Settings, label: "Store Settings", path: "/admin/settings" },
    { icon: CreditCard, label: "Payouts", path: "/admin/payouts" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  const stats = [
    {
      icon: Users,
      value: "2,847",
      label: "Total Users",
      change: "+12.5%",
      changePositive: true,
      description: "from last month",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: User,
      value: "1,856",
      label: "Customers",
      change: "+8.2%",
      changePositive: true,
      description: "from last month",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Store,
      value: "523",
      label: "Store Owners",
      change: "+15.3%",
      changePositive: true,
      description: "from last month",
      color: "purple",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Truck,
      value: "312",
      label: "Delivery Partners",
      change: "+5.7%",
      changePositive: true,
      description: "from last month",
      color: "orange",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Crown,
      value: "156",
      label: "Admins",
      change: "+2.1%",
      changePositive: true,
      description: "from last month",
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

  const roles = ["All Roles", "Admin", "Store Owner", "Delivery Partner", "Customer"];
  const statuses = ["All Status", "Active", "Inactive", "Suspended"];
  const locations = ["All Locations", "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];

  const roleDistribution = [
    { role: "Customers", count: 1856, percentage: 65, color: "#22c55e" },
    { role: "Store Owners", count: 523, percentage: 18, color: "#a855f7" },
    { role: "Delivery Partners", count: 312, percentage: 11, color: "#f97316" },
    { role: "Admins", count: 156, percentage: 6, color: "#ef4444" }
  ];

  const newUsersThisMonth = [
    { role: "Customers", count: 142, icon: User, color: "text-green-600" },
    { role: "Store Owners", count: 38, icon: Store, color: "text-purple-600" },
    { role: "Delivery Partners", count: 24, icon: Truck, color: "text-orange-600" },
    { role: "Admins", count: 5, icon: Crown, color: "text-red-600" }
  ];

  const usersByLocation = [
    { location: "Mumbai", count: 523 },
    { location: "Delhi", count: 412 },
    { location: "Bangalore", count: 387 },
    { location: "Chennai", count: 298 },
    { location: "Kolkata", count: 245 },
    { location: "Hyderabad", count: 198 },
    { location: "Others", count: 784 }
  ];

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
        return "bg-red-100 text-red-700";
      case "Store Owner":
        return "bg-purple-100 text-purple-700";
      case "Delivery Partner":
        return "bg-orange-100 text-orange-700";
      case "Customer":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin":
        return Crown;
      case "Store Owner":
        return Store;
      case "Delivery Partner":
        return Truck;
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
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white hover:text-orange-500 transition-colors">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">OZ</span>
            </div>
          </div>
          <div className="relative">
            <button className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors">
              <span className="text-sm font-medium">{storeSelector}</span>
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
              className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="relative text-white hover:text-orange-500 transition-colors">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <span className="text-white font-semibold">JD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-medium">John Doe</span>
              <span className="text-gray-400 text-xs">Store Owner</span>
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
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon size={20} className={item.active ? "text-orange-600" : ""} />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Help card */}
            <div className="mt-auto bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="text-orange-600" size={20} />
                <span className="font-semibold text-gray-800">Need Help?</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Get support for your store</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`}>
          <div className="p-8">
            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download size={18} />
                  <span className="font-medium">Export Users</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Plus size={18} />
                  <span className="font-medium">Add New User</span>
                </button>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`${stat.bgColor} p-2.5 rounded-xl`}>
                      <stat.icon size={20} className={stat.iconColor} />
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${stat.changePositive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.changePositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm font-medium text-gray-700">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* User Toolbar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search users by name, email, phone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
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
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                  <select
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
                    <Calendar size={16} className="text-gray-400" />
                    <input
                      type="date"
                      className="border-none focus:outline-none text-sm text-gray-600"
                    />
                  </div>
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
                          className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                        />
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email/Phone
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Joined On
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Total Orders
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
                              className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-start gap-3">
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <p className="font-semibold text-gray-900 mb-0.5">{user.name}</p>
                                <p className="text-xs text-gray-400">ID: #{user.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                              <RoleIcon size={12} className="mr-1" />
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                <Mail size={12} className="text-gray-400" />
                                <span className="truncate max-w-[150px]">{user.email}</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                <Phone size={12} className="text-gray-400" />
                                <span>+91 98765 43210</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1.5 text-sm text-gray-600">
                              <MapPin size={14} className="text-gray-400" />
                              <span>Mumbai</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-600">{user.joinedDate}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(user.status)}`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-gray-900">{user.totalOrders}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1.5">
                              <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <Eye size={14} className="text-gray-600" />
                              </button>
                              <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <Edit size={14} className="text-gray-600" />
                              </button>
                              <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <MoreVertical size={14} className="text-gray-600" />
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
                    className="px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
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
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-lg">1</button>
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                  <span className="px-2">...</span>
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">285</button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Users by Role - Pie Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Users by Role</h3>
                <div className="flex items-center gap-6">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle
                        cx="18"
                        cy="18"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#22c55e"
                        strokeWidth="3"
                        strokeDasharray="65 35"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#a855f7"
                        strokeWidth="3"
                        strokeDasharray="18 82"
                        strokeDashoffset="-65"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeDasharray="11 89"
                        strokeDashoffset="-83"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#ef4444"
                        strokeWidth="3"
                        strokeDasharray="6 94"
                        strokeDashoffset="-94"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2">
                    {roleDistribution.map((item) => (
                      <div key={item.role} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-sm text-gray-600">{item.role}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-gray-900">{item.count}</span>
                          <span className="text-xs text-gray-500 ml-1">({item.percentage}%)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* New Users This Month */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">New Users This Month</h3>
                <div className="space-y-3">
                  {newUsersThisMonth.map((item) => (
                    <div key={item.role} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${item.color.replace('text-', 'bg-').replace('600', '100')}`}>
                          <item.icon size={18} className={item.color} />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.role}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Users by Location */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Users by Location</h3>
                <div className="space-y-3">
                  {usersByLocation.map((item) => (
                    <div key={item.location} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-600">{item.location}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                    <Plus size={24} className="text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Add New User</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all group">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                    <Upload size={24} className="text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Import Users</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all group">
                  <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                    <Edit size={24} className="text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Bulk Update</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all group">
                  <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                    <Send size={24} className="text-orange-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Send Notification</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}