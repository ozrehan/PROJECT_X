"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Menu,
  User,
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  Store,
  LogOut,
  Home,
  HelpCircle,
  Camera,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Key
} from "lucide-react";

export default function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutDashboard, label: "Dashboard", path: "/seller/dashboard" },
    { icon: Package, label: "Products", path: "/seller/products" },
    { icon: ShoppingCart, label: "Orders", path: "/seller/orders" },
    { icon: TrendingUp, label: "Analytics", path: "/seller/analytics" },
    { icon: Store, label: "Store Settings", path: "/seller/settings" },
    { icon: User, label: "Profile", path: "/seller/profile", active: true },
    { icon: HelpCircle, label: "Help", path: "/seller/help" },
    { icon: LogOut, label: "Logout", path: "/logout" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
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

      {/* Sidebar */}
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

      {/* Main Content */}
      <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile Settings</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Photo Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Photo</h2>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden mb-4 border-2 border-dashed border-gray-300">
                  <User size={60} className="text-gray-400" />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  <Camera size={18} />
                  Upload Photo
                </button>
              </div>
            </div>

            {/* Personal Information */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    Rahul Sharma
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    <Mail size={16} className="text-gray-400" />
                    rahul.sharma@example.com
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    <Phone size={16} className="text-gray-400" />
                    +91 98765 43210
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    <Calendar size={16} className="text-gray-400" />
                    15 January 1990
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                    <MapPin size={16} className="text-gray-400" />
                    123, MG Road, Mumbai, Maharashtra - 400001
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="text-orange-500" size={20} />
                    <span className="font-medium text-gray-900">Change Password</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Update your password regularly</p>
                  <button className="text-orange-500 text-sm font-medium hover:text-orange-600">Change Password</button>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Key className="text-orange-500" size={20} />
                    <span className="font-medium text-gray-900">Two-Factor Auth</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Add extra security to your account</p>
                  <button className="text-orange-500 text-sm font-medium hover:text-orange-600">Enable 2FA</button>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Camera className="text-orange-500" size={20} />
                    <span className="font-medium text-gray-900">Login History</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">View your recent login activity</p>
                  <button className="text-orange-500 text-sm font-medium hover:text-orange-600">View History</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}