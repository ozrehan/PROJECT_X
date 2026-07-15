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
  Star,
  Filter,
  MoreVertical
} from "lucide-react";

export default function ReviewsPage() {
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
    { icon: StarIcon, label: "Reviews", path: "/seller/reviews", active: true },
    { icon: CreditCard, label: "Payments", path: "/seller/payments" },
    { icon: RefreshCw, label: "Returns", path: "/seller/returns" },
    { icon: FileText, label: "Reports", path: "/seller/reports" },
    { icon: Archive, label: "Inventory", path: "/seller/inventory" },
    { icon: User, label: "Profile", path: "/seller/profile" },
    { icon: HelpCircle, label: "Help", path: "/seller/help" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  const reviews = [
    { id: 1, customer: "Rahul Kumar", rating: 5, comment: "Excellent quality and fast delivery! Highly recommended.", date: "2026-07-14", product: "Black Formal Shirt" },
    { id: 2, customer: "Priya Singh", rating: 4, comment: "Good product but shipping was a bit slow.", date: "2026-07-13", product: "Blue Slim Fit Jeans" },
    { id: 3, customer: "Amit Patel", rating: 5, comment: "Perfect fit and amazing material. Will buy again!", date: "2026-07-12", product: "White Cotton Shirt" },
    { id: 4, customer: "Sneha Reddy", rating: 3, comment: "Average quality for the price.", date: "2026-07-11", product: "Black Polo T-Shirt" },
    { id: 5, customer: "Vikram Sharma", rating: 5, comment: "Best purchase I've made this year. Love it!", date: "2026-07-10", product: "Grey Hoodie" }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
      />
    ));
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
            <h1 className="text-3xl font-bold text-gray-900">Reviews</h1>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
              <Filter size={18} />
              Filter Reviews
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="text-yellow-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Average Rating</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">4.4</h3>
              <div className="flex gap-1 mt-2">
                {renderStars(4)}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <StarIcon className="text-green-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Total Reviews</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">128</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <StarIcon className="text-blue-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">5 Star Reviews</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">89</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <StarIcon className="text-red-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">1 Star Reviews</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {reviews.map((review) => (
                <div key={review.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">{review.customer.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{review.customer}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                      <button className="p-2 text-gray-600 hover:text-gray-900">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Product: {review.product}</p>
                  <p className="text-gray-800">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}