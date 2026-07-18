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
  Download,
  Eye,
  FileText,
  Building2,
  User as UserIcon,
  MapPin,
  Calendar,
  Shield,
  Clock,
  FileCheck,
  Building,
  BadgeCheck,
  Ban,
  File,
  Briefcase,
  Phone,
  Mail,
  Globe,
  Landmark,
  CreditCard as CardIcon,
  MessageSquare
} from "lucide-react";

export default function StoreApprovalPage() {
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("Store Documents");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [cityFilter, setCityFilter] = useState("All Cities");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [marketplaceSelector, setMarketplaceSelector] = useState("OZ Marketplace");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data for store approvals
  const stores = [
    {
      id: "1",
      storeName: "Fashion Hub",
      ownerName: "Rahul Sharma",
      ownerEmail: "rahul.sharma@example.com",
      ownerPhone: "+91 98765 43210",
      businessType: "Fashion",
      gstNumber: "27AABCU9603R1ZM",
      city: "Mumbai",
      state: "Maharashtra",
      submittedOn: "14 July 2026",
      status: "Pending",
      verified: false,
      storeLogo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
      ownerPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      category: "Clothing & Accessories"
    },
    {
      id: "2",
      storeName: "TechZone Electronics",
      ownerName: "Priya Patel",
      ownerEmail: "priya.patel@example.com",
      ownerPhone: "+91 87654 32109",
      businessType: "Electronics",
      gstNumber: "29AABCU9603R1ZN",
      city: "Bangalore",
      state: "Karnataka",
      submittedOn: "13 July 2026",
      status: "Approved",
      verified: true,
      storeLogo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop",
      ownerPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      category: "Electronics & Gadgets"
    },
    {
      id: "3",
      storeName: "Fresh Grocery Store",
      ownerName: "Amit Kumar",
      ownerEmail: "amit.kumar@example.com",
      ownerPhone: "+91 76543 21098",
      businessType: "Groceries",
      gstNumber: "27AABCU9603R1ZP",
      city: "Delhi",
      state: "Delhi",
      submittedOn: "12 July 2026",
      status: "Under Review",
      verified: false,
      storeLogo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&h=100&fit=crop",
      ownerPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      category: "Food & Groceries"
    },
    {
      id: "4",
      storeName: "Beauty Paradise",
      ownerName: "Sneha Reddy",
      ownerEmail: "sneha.reddy@example.com",
      ownerPhone: "+91 65432 10987",
      businessType: "Beauty",
      gstNumber: "36AABCU9603R1ZQ",
      city: "Hyderabad",
      state: "Telangana",
      submittedOn: "11 July 2026",
      status: "Rejected",
      verified: false,
      storeLogo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop",
      ownerPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      category: "Beauty & Personal Care"
    },
    {
      id: "5",
      storeName: "Home Decor Studio",
      ownerName: "Vikram Singh",
      ownerEmail: "vikram.singh@example.com",
      ownerPhone: "+91 54321 09876",
      businessType: "Home Decor",
      gstNumber: "27AABCU9603R1ZR",
      city: "Mumbai",
      state: "Maharashtra",
      submittedOn: "10 July 2026",
      status: "Pending",
      verified: false,
      storeLogo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop",
      ownerPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      category: "Home & Living"
    },
    {
      id: "6",
      storeName: "Foodie's Kitchen",
      ownerName: "Anjali Mehta",
      ownerEmail: "anjali.mehta@example.com",
      ownerPhone: "+91 43210 98765",
      businessType: "Restaurants",
      gstNumber: "29AABCU9603R1ZS",
      city: "Pune",
      state: "Maharashtra",
      submittedOn: "9 July 2026",
      status: "Approved",
      verified: true,
      storeLogo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop",
      ownerPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      category: "Food & Beverages"
    },
    {
      id: "7",
      storeName: "Sports World",
      ownerName: "Rajesh Gupta",
      ownerEmail: "rajesh.gupta@example.com",
      ownerPhone: "+91 32109 87654",
      businessType: "Sports",
      gstNumber: "27AABCU9603R1ZT",
      city: "Chennai",
      state: "Tamil Nadu",
      submittedOn: "8 July 2026",
      status: "Pending",
      verified: false,
      storeLogo: "https://images.unsplash.com/photo-1461896836934- voices-08c5c8f0849?w=100&h=100&fit=crop",
      ownerPhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      category: "Sports & Fitness"
    },
    {
      id: "8",
      storeName: "Kids Kingdom",
      ownerName: "Meera Nair",
      ownerEmail: "meera.nair@example.com",
      ownerPhone: "+91 21098 76543",
      businessType: "Kids",
      gstNumber: "29AABCU9603R1ZU",
      city: "Kochi",
      state: "Kerala",
      submittedOn: "7 July 2026",
      status: "Under Review",
      verified: false,
      storeLogo: "https://images.unsplash.com/photo-1558119540-3f8a3c6b4d5e?w=100&h=100&fit=crop",
      ownerPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      category: "Kids & Baby Products"
    }
  ];

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: FileCheck, label: "Store Approvals", path: "/admin/store-approval", active: true },
    { icon: Store, label: "Stores", path: "/admin/stores" },
    { icon: Users, label: "Customers", path: "/admin/customers" },
    { icon: ShoppingCart, label: "Orders", path: "/admin/orders" },
    { icon: Package, label: "Products", path: "/admin/products" },
    { icon: Building2, label: "Categories", path: "/admin/categories" },
    { icon: CreditCard, label: "Payments", path: "/admin/payments" },
    { icon: DollarSign, label: "Revenue", path: "/admin/revenue" },
    { icon: FileText, label: "Reports", path: "/admin/reports" },
    { icon: MessageSquare, label: "Support", path: "/admin/support" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
    { icon: Shield, label: "Audit Logs", path: "/admin/audit-logs" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  const stats = [
    {
      icon: Clock,
      value: "124",
      label: "Pending Stores",
      description: "Awaiting Review",
      color: "orange",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Check,
      value: "985",
      label: "Approved Stores",
      description: "Live on Marketplace",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: XCircle,
      value: "47",
      label: "Rejected Stores",
      description: "Need Corrections",
      color: "red",
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Store,
      value: "1,156",
      label: "Total Vendors",
      description: "Registered Sellers",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  const tabs = [
    "Store Documents",
    "Business Details",
    "Owner Details",
    "Bank Details",
    "Verification Notes",
    "Approval History"
  ];

  const statuses = ["All Status", "Pending", "Approved", "Rejected", "Under Review"];
  const cities = ["All Cities", "Mumbai", "Bangalore", "Delhi", "Hyderabad", "Pune", "Chennai", "Kochi"];
  const categories = ["All Categories", "Fashion", "Electronics", "Groceries", "Beauty", "Home Decor", "Restaurants", "Sports", "Kids"];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Under Review":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
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
              <span className="text-sm font-medium">{marketplaceSelector}</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Center - Search bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search stores, owners, GST, email..."
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
              <span className="text-white font-semibold">SA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-medium">Super Admin</span>
              <span className="text-gray-400 text-xs">System Administrator</span>
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
            <div className="flex justify-end gap-3 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download size={18} />
                <span className="font-medium">Export</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Check size={18} />
                <span className="font-medium">Bulk Approve</span>
              </button>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

            {/* Store Toolbar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by Store Name, Owner, GST, Mobile..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="flex items-center gap-3">
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
                  <select
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
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

            {/* Stores Table */}
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
                        Store
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Owner
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Business Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        GST Number
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Submitted On
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
                    {stores.map((store) => (
                      <tr key={store.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-start gap-3">
                            <img
                              src={store.storeLogo}
                              alt={store.storeName}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-gray-900">{store.storeName}</p>
                                {store.verified && (
                                  <BadgeCheck size={16} className="text-blue-500" />
                                )}
                              </div>
                              <p className="text-sm text-gray-500">{store.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-start gap-3">
                            <img
                              src={store.ownerPhoto}
                              alt={store.ownerName}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium text-gray-900 text-sm">{store.ownerName}</p>
                              <p className="text-xs text-gray-500">{store.ownerEmail}</p>
                              <p className="text-xs text-gray-400">{store.ownerPhone}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">{store.businessType}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600 font-mono">{store.gstNumber}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin size={14} />
                            <span>{store.city}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500">{store.state}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{store.submittedOn}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(store.status)}`}>
                            {store.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                              <Eye size={16} className="text-gray-600" />
                            </button>
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                              <Check size={16} className="text-green-500" />
                            </button>
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                              <X size={16} className="text-red-500" />
                            </button>
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                              <Trash2 size={16} className="text-red-500" />
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
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">12</button>
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
                {activeTab === "Store Documents" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "GST Certificate", status: "Verified" },
                      { name: "PAN Card", status: "Verified" },
                      { name: "Trade License", status: "Verified" },
                      { name: "Aadhaar Card", status: "Verified" },
                      { name: "Store Images", status: "Verified" },
                      { name: "Cancelled Cheque", status: "Pending" }
                    ].map((doc, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <File size={20} className="text-gray-600" />
                            <span className="font-medium text-gray-900">{doc.name}</span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            doc.status === "Verified" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {doc.status}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex items-center gap-1 px-3 py-1 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                            <Eye size={14} />
                            Preview
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                            <Download size={14} />
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Business Details" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="text-orange-500" size={20} />
                          <span className="font-semibold">Store Name</span>
                        </div>
                        <p className="text-gray-900">Fashion Hub</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="text-orange-500" size={20} />
                          <span className="font-semibold">Business Category</span>
                        </div>
                        <p className="text-gray-900">Clothing & Accessories</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl md:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="text-orange-500" size={20} />
                          <span className="font-semibold">Business Description</span>
                        </div>
                        <p className="text-gray-900">Premium fashion store offering latest trends in clothing and accessories for men and women.</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl md:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="text-orange-500" size={20} />
                          <span className="font-semibold">Address</span>
                        </div>
                        <p className="text-gray-900">123 Fashion Street, Bandra West, Mumbai, Maharashtra - 400050</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="text-orange-500" size={20} />
                          <span className="font-semibold">Pincode</span>
                        </div>
                        <p className="text-gray-900">400050</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="text-orange-500" size={20} />
                          <span className="font-semibold">City</span>
                        </div>
                        <p className="text-gray-900">Mumbai</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="text-orange-500" size={20} />
                          <span className="font-semibold">State</span>
                        </div>
                        <p className="text-gray-900">Maharashtra</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="text-orange-500" size={20} />
                          <span className="font-semibold">Country</span>
                        </div>
                        <p className="text-gray-900">India</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="text-orange-500" size={20} />
                          <span className="font-semibold">GST Number</span>
                        </div>
                        <p className="text-gray-900 font-mono">27AABCU9603R1ZM</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="text-orange-500" size={20} />
                          <span className="font-semibold">Website</span>
                        </div>
                        <p className="text-gray-900">www.fashionhub.com</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Owner Details" && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                        alt="Owner"
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Rahul Sharma</h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Mail size={14} />
                            <span>rahul.sharma@example.com</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Phone size={14} />
                            <span>+91 98765 43210</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            <BadgeCheck size={14} className="mr-1" />
                            Verified
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1">Date Joined</p>
                        <p className="text-lg font-semibold text-gray-900">Jan 15, 2024</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                          <UserIcon className="text-orange-500" size={20} />
                          <span className="font-semibold">Personal Information</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">PAN Number:</span>
                            <span className="text-sm font-medium">ABCDE1234F</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Aadhaar Number:</span>
                            <span className="text-sm font-medium">****-****-1234</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Date of Birth:</span>
                            <span className="text-sm font-medium">15 Jan 1990</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                          <Shield className="text-orange-500" size={20} />
                          <span className="font-semibold">Verification Status</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">KYC Status:</span>
                            <span className="text-sm font-medium text-green-600">Verified</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Email Verified:</span>
                            <span className="text-sm font-medium text-green-600">Yes</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Phone Verified:</span>
                            <span className="text-sm font-medium text-green-600">Yes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Bank Details" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <UserIcon className="text-orange-500" size={20} />
                          <span className="font-semibold">Account Holder</span>
                        </div>
                        <p className="text-gray-900">Rahul Sharma</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Landmark className="text-orange-500" size={20} />
                          <span className="font-semibold">Bank</span>
                        </div>
                        <p className="text-gray-900">HDFC Bank</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="text-orange-500" size={20} />
                          <span className="font-semibold">Branch</span>
                        </div>
                        <p className="text-gray-900">Bandra West, Mumbai</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="text-orange-500" size={20} />
                          <span className="font-semibold">IFSC Code</span>
                        </div>
                        <p className="text-gray-900 font-mono">HDFC0001234</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <CardIcon className="text-orange-500" size={20} />
                          <span className="font-semibold">Account Number</span>
                        </div>
                        <p className="text-gray-900 font-mono">****-****-4567</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="text-orange-500" size={20} />
                          <span className="font-semibold">UPI ID</span>
                        </div>
                        <p className="text-gray-900">rahul.sharma@hdfc</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Verification Notes" && (
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <h4 className="font-semibold mb-4">Admin Review Notes</h4>
                      <textarea
                        placeholder="Add your verification notes here..."
                        className="w-full h-40 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                      />
                      <div className="flex justify-end mt-4">
                        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                          Save Notes
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Approval History" && (
                  <div className="space-y-4">
                    {[
                      { action: "Store Submitted", date: "14 July 2026", admin: "System", status: "Completed" },
                      { action: "Documents Uploaded", date: "14 July 2026", admin: "Rahul Sharma", status: "Completed" },
                      { action: "KYC Verification", date: "14 July 2026", admin: "System", status: "Completed" },
                      { action: "Manual Review", date: "15 July 2026", admin: "Super Admin", status: "In Progress" }
                    ].map((history, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            history.status === "Completed" ? "bg-green-100" : "bg-blue-100"
                          }`}>
                            {history.status === "Completed" ? (
                              <Check size={20} className="text-green-600" />
                            ) : (
                              <Clock size={20} className="text-blue-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{history.action}</p>
                            <p className="text-sm text-gray-500">By: {history.admin}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">{history.date}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            history.status === "Completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                          }`}>
                            {history.status}
                          </span>
                        </div>
                      </div>
                    ))}
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