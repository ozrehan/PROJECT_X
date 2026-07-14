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
  Palette,
  Ruler,
  Clock,
  Warehouse,
  Image as ImageIcon,
  Video,
  FileVideo,
  PlusCircle,
  ChevronUp
} from "lucide-react";

export default function AdminProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("Product Images");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [storeSelector, setStoreSelector] = useState("My Store");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data for products
  const products = [
    {
      id: "1",
      name: "Black Formal Shirt",
      category: "Shirts",
      store: "Fashion Hub",
      sku: "FH-BLK-SH-001",
      stock: 25,
      status: "In Stock",
      price: 1299,
      mrp: 1599,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&h=100&fit=crop",
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: "2",
      name: "Blue Slim Fit Jeans",
      category: "Jeans",
      store: "Fashion Hub",
      sku: "FH-BLU-JN-002",
      stock: 10,
      status: "Low Stock",
      price: 1499,
      mrp: 1799,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&h=100&fit=crop",
      colors: ["Blue", "Black"],
      sizes: ["28", "30", "32", "34"]
    },
    {
      id: "3",
      name: "White Cotton Shirt",
      category: "Shirts",
      store: "Fashion Hub",
      sku: "FH-WHT-SH-003",
      stock: 0,
      status: "Out of Stock",
      price: 999,
      mrp: 1299,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=100&h=100&fit=crop",
      colors: ["White", "Blue"],
      sizes: ["S", "M", "L"]
    },
    {
      id: "4",
      name: "Black Polo T-Shirt",
      category: "T-Shirts",
      store: "Fashion Hub",
      sku: "FH-BLK-PT-004",
      stock: 42,
      status: "In Stock",
      price: 799,
      mrp: 999,
      image: "https://images.unsplash.com/photo-1625910513413-5fc4e5e1c946?w=100&h=100&fit=crop",
      colors: ["Black", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: "5",
      name: "Grey Hoodie",
      category: "Hoodies",
      store: "Fashion Hub",
      sku: "FH-GRY-HD-005",
      stock: 15,
      status: "In Stock",
      price: 1899,
      mrp: 2299,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop",
      colors: ["Grey", "Black"],
      sizes: ["M", "L", "XL"]
    },
    {
      id: "6",
      name: "Red Casual Shirt",
      category: "Shirts",
      store: "Fashion Hub",
      sku: "FH-RED-SH-006",
      stock: 8,
      status: "Low Stock",
      price: 1199,
      mrp: 1499,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=100&h=100&fit=crop",
      colors: ["Red", "White"],
      sizes: ["S", "M", "L"]
    },
    {
      id: "7",
      name: "Navy Blazer",
      category: "Blazers",
      store: "Fashion Hub",
      sku: "FH-NAV-BL-007",
      stock: 5,
      status: "Low Stock",
      price: 3499,
      mrp: 4299,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      colors: ["Navy", "Black"],
      sizes: ["M", "L", "XL"]
    },
    {
      id: "8",
      name: "Beige Chinos",
      category: "Trousers",
      store: "Fashion Hub",
      sku: "FH-BEG-TR-008",
      stock: 30,
      status: "In Stock",
      price: 1699,
      mrp: 1999,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=100&h=100&fit=crop",
      colors: ["Beige", "Olive"],
      sizes: ["30", "32", "34", "36"]
    }
  ];

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Package, label: "Products", path: "/admin/products", active: true },
    { icon: ShoppingCart, label: "Orders", path: "/admin/orders" },
    { icon: Box, label: "Inventory", path: "/admin/inventory" },
    { icon: DollarSign, label: "Revenue", path: "/admin/revenue" },
    { icon: Users, label: "Customers", path: "/admin/customers" },
    { icon: Star, label: "Reviews", path: "/admin/reviews" },
    { icon: Megaphone, label: "Marketing", path: "/admin/marketing" },
    { icon: Settings, label: "Store Settings", path: "/admin/settings" },
    { icon: CreditCard, label: "Payouts", path: "/admin/payouts" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  const stats = [
    {
      icon: Package,
      value: "128",
      label: "Total Products",
      description: "All time products",
      color: "purple",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Check,
      value: "102",
      label: "Active Products",
      description: "Live on store",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: XCircle,
      value: "8",
      label: "Out of Stock",
      description: "Require attention",
      color: "red",
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: TrendingUp,
      value: "₹2,45,680",
      label: "Total Revenue",
      description: "From products",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  const tabs = [
    "Product Images",
    "Product Videos",
    "Size Images",
    "Color Management",
    "Clock Management",
    "Stock Management"
  ];

  const categories = ["All Categories", "Shirts", "Jeans", "T-Shirts", "Hoodies", "Blazers", "Trousers"];
  const statuses = ["All Status", "In Stock", "Low Stock", "Out of Stock"];

  const getStockColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "text-green-600 bg-green-50";
      case "Low Stock":
        return "text-orange-600 bg-orange-50";
      case "Out of Stock":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-700";
      case "Low Stock":
        return "bg-orange-100 text-orange-700";
      case "Out of Stock":
        return "bg-red-100 text-red-700";
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
              placeholder="Search products, orders, customers..."
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
            <div className="flex justify-end gap-3 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Upload size={18} />
                <span className="font-medium">Bulk Upload</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Plus size={18} />
                <span className="font-medium">Add Product</span>
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

            {/* Product Toolbar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search products by name, SKU, status..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
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

            {/* Products Table */}
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
                        Product
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Store
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        SKU
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Price
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
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-start gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-semibold text-gray-900 mb-1">{product.name}</p>
                              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span>Colors: {product.colors.join(", ")}</span>
                                <span>•</span>
                                <span>Sizes: {product.sizes.join(", ")}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-700 font-medium">{product.store}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-600 font-mono text-sm">{product.sku}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStockColor(product.status)}`}>
                            <span>{product.stock}</span>
                            <span className="text-xs">{product.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-bold text-gray-900">₹{product.price.toLocaleString()}</p>
                            <p className="text-sm text-gray-400 line-through">₹{product.mrp.toLocaleString()}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(product.status)}`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                              <Edit size={16} className="text-gray-600" />
                            </button>
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                              <Copy size={16} className="text-gray-600" />
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
                  <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">26</button>
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
                {activeTab === "Product Images" && (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-colors">
                      <Upload size={32} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600 font-medium">Upload Images</span>
                    </div>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="relative group">
                        <img
                          src={`https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop`}
                          alt={`Product ${i}`}
                          className="w-full aspect-square object-cover rounded-xl"
                        />
                        <button className="absolute top-2 right-2 p-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                          <X size={16} className="text-gray-600" />
                        </button>
                      </div>
                    ))}
                    <div className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-colors">
                      <PlusCircle size={32} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600 font-medium">Add More</span>
                    </div>
                  </div>
                )}

                {activeTab === "Product Videos" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="aspect-video border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-colors">
                      <Video size={48} className="text-gray-400 mb-3" />
                      <span className="text-lg text-gray-600 font-medium mb-1">Upload Video</span>
                      <span className="text-sm text-gray-400">MP4 format supported</span>
                    </div>
                    <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <FileVideo size={48} className="text-gray-400 mx-auto mb-3" />
                        <span className="text-sm text-gray-600">Product video preview</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Size Images" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                          key={size}
                          className="px-4 py-2 border-2 border-gray-200 rounded-lg font-medium hover:border-orange-500 hover:bg-orange-50 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                      <button className="px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg font-medium text-gray-500 hover:border-orange-500 hover:bg-orange-50 transition-colors flex items-center gap-2">
                        <Plus size={16} />
                        Add Size
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "Color Management" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "Black", color: "#000000" },
                        { name: "White", color: "#FFFFFF" },
                        { name: "Blue", color: "#3B82F6" },
                        { name: "Grey", color: "#6B7280" },
                        { name: "Red", color: "#EF4444" },
                        { name: "Navy", color: "#1E3A8A" }
                      ].map((color) => (
                        <div
                          key={color.name}
                          className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-orange-500 transition-colors"
                        >
                          <div
                            className="w-6 h-6 rounded-full border-2 border-gray-300"
                            style={{ backgroundColor: color.color }}
                          />
                          <span className="font-medium">{color.name}</span>
                        </div>
                      ))}
                      <button className="px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg font-medium text-gray-500 hover:border-orange-500 hover:bg-orange-50 transition-colors flex items-center gap-2">
                        <Plus size={16} />
                        Add Color
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "Clock Management" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="text-orange-500" size={20} />
                          <span className="font-semibold">Processing Time</span>
                        </div>
                        <input
                          type="text"
                          defaultValue="2-3 business days"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="text-orange-500" size={20} />
                          <span className="font-semibold">Delivery Time</span>
                        </div>
                        <input
                          type="text"
                          defaultValue="5-7 business days"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="text-orange-500" size={20} />
                          <span className="font-semibold">Return Window</span>
                        </div>
                        <input
                          type="text"
                          defaultValue="7 days"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Stock Management" && (
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                          <Warehouse className="text-orange-500" size={20} />
                          <span className="font-semibold">Stock Levels</span>
                        </div>
                        <div className="space-y-3">
                          {products.slice(0, 5).map((product) => (
                            <div key={product.id} className="flex items-center justify-between">
                              <span className="text-sm text-gray-700">{product.name}</span>
                              <input
                                type="number"
                                defaultValue={product.stock}
                                className="w-20 px-3 py-1 border border-gray-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-orange-500"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-80 space-y-4">
                      <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                        <div className="text-center mb-4">
                          <p className="text-sm text-gray-600 mb-1">Total Stock</p>
                          <p className="text-4xl font-bold text-gray-900">90</p>
                        </div>
                        <div className="text-center mb-4">
                          <p className="text-sm text-gray-600 mb-1">Low Stock Alert</p>
                          <p className="text-2xl font-bold text-orange-600">10</p>
                        </div>
                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                          Update Stock
                        </button>
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