"use client";

import React, { useEffect, useState, useRef } from "react";
import { useAddressStore, Address } from "@/lib/addressStore";
import {
  X,
  MapPin,
  Home,
  Briefcase,
  Users,
  Compass,
  Plus,
  Trash2,
  Edit2,
  Loader2,
  CheckCircle,
  AlertCircle,
  BookOpen,
} from "lucide-react";

export default function AddressModal() {
  const {
    addresses,
    selectedAddressId,
    isModalOpen,
    loading,
    error,
    setModalOpen,
    loadAddresses,
    addAddress,
    editAddress,
    deleteAddress,
    setSelectedAddress,
    detectLocation,
    isServiceable,
  } = useAddressStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const [view, setView] = useState<"list" | "form">("list");
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    flat: "",
    building: "",
    street: "",
    landmark: "",
    area: "",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "",
    type: "Home" as Address["type"],
    isDefault: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [serviceability, setServiceability] = useState<{
    checked: boolean;
    available: boolean;
  }>({ checked: false, available: false });

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      loadAddresses();
      setView("list");
      setSearchQuery("");
      setSuggestions([]);
      setFormErrors({});
      setServiceability({ checked: false, available: false });
    }
  }, [isModalOpen]);

  // Handle Autocomplete Address Search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(async () => {
      setSearching(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            searchQuery
          )}&format=json&addressdetails=1&countrycodes=in&limit=5`
        );
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data);
        }
      } catch (err) {
        console.error("Autocomplete search failed", err);
      } finally {
        setSearching(false);
      }
    }, 500);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery]);

  if (!isModalOpen) return null;

  const handleSuggestionClick = (place: any) => {
    const addr = place.address || {};
    const city = addr.city || addr.town || addr.municipality || "";
    const pincode = addr.postcode || "";

    setFormData({
      ...formData,
      flat: addr.house_number || addr.building || "",
      building: addr.neighbourhood || addr.suburb || "",
      street: addr.road || addr.construction || addr.pedestrian || "",
      landmark: addr.tourism || addr.amenity || "",
      area: addr.suburb || addr.residential || addr.city_district || "",
      city: city || "Hyderabad",
      state: addr.state || "Telangana",
      pincode: pincode,
    });

    if (pincode) {
      setServiceability({
        checked: true,
        available: isServiceable(pincode, city),
      });
    }

    setSuggestions([]);
    setSearchQuery("");
    setView("form");
  };

  const handleUseCurrentLocation = async () => {
    const detected = await detectLocation();
    if (detected) {
      setFormData({
        ...formData,
        ...detected,
        isDefault: false,
      });

      if (detected.pincode) {
        setServiceability({
          checked: true,
          available: isServiceable(detected.pincode, detected.city),
        });
      }
      setView("form");
    }
  };

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setFormData({ ...formData, pincode: val });

    if (val.length === 6) {
      setServiceability({
        checked: true,
        available: isServiceable(val, formData.city),
      });
    } else {
      setServiceability({ checked: false, available: false });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.mobile.trim() || formData.mobile.length < 10)
      errors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.flat.trim()) errors.flat = "House/Flat number is required";
    if (!formData.street.trim()) errors.street = "Street/Road details required";
    if (!formData.area.trim()) errors.area = "Area/Locality is required";
    if (!formData.pincode.trim() || formData.pincode.length !== 6)
      errors.pincode = "Enter a valid 6-digit pincode";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingAddressId) {
      editAddress(editingAddressId, formData);
    } else {
      addAddress(formData);
    }

    setView("list");
    setEditingAddressId(null);
  };

  const handleEditClick = (address: Address) => {
    setEditingAddressId(address.id);
    setFormData({
      name: address.name,
      mobile: address.mobile,
      flat: address.flat,
      building: address.building,
      street: address.street,
      landmark: address.landmark || "",
      area: address.area,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      type: address.type,
      isDefault: address.isDefault,
    });
    setServiceability({
      checked: true,
      available: isServiceable(address.pincode, address.city),
    });
    setView("form");
  };

  const handleAddNewClick = () => {
    setEditingAddressId(null);
    setFormData({
      name: "",
      mobile: "",
      flat: "",
      building: "",
      street: "",
      landmark: "",
      area: "",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "",
      type: "Home",
      isDefault: false,
    });
    setServiceability({ checked: false, available: false });
    setView("form");
  };

  const getAddressIcon = (type: Address["type"]) => {
    switch (type) {
      case "Home":
        return <Home size={18} />;
      case "Work":
        return <Briefcase size={18} />;
      case "Parents":
        return <Users size={18} />;
      case "Hostel":
        return <BookOpen size={18} />;
      default:
        return <MapPin size={18} />;
    }
  };

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-0 md:p-4">
      {/* Container - Bottom Sheet on Mobile, Modal on Desktop */}
      <div className="relative flex h-full md:h-auto w-full md:max-w-xl flex-col bg-white rounded-t-[32px] md:rounded-[28px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] mt-auto md:mt-0 transition-transform duration-300 max-h-[95vh] md:max-h-[85vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900">
              {view === "list" ? "Select Delivery Location" : editingAddressId ? "Edit Address" : "Add New Address"}
            </h2>
            {view === "list" && selectedAddress && (
              <p className="text-xs text-zinc-500 mt-1">
                Currently delivering to: <span className="font-semibold text-amber-600">{selectedAddress.type} ({selectedAddress.city})</span>
              </p>
            )}
          </div>
          <button
            onClick={() => setModalOpen(false)}
            className="rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
          
          {view === "list" && (
            <div className="space-y-6">
              {/* Autocomplete Input */}
              <div className="relative">
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 focus-within:border-black focus-within:ring-1 focus-within:ring-black transition">
                  <MapPin size={20} className="text-zinc-400" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search area, landmark, street, or pincode..."
                    className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                  />
                  {searching && <Loader2 size={18} className="animate-spin text-zinc-500" />}
                </div>

                {/* Suggestions List */}
                {suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 z-20 mt-2 rounded-2xl border border-zinc-100 bg-white p-2 shadow-2xl">
                    {suggestions.map((place) => (
                      <button
                        key={place.place_id}
                        onClick={() => handleSuggestionClick(place)}
                        className="flex w-full items-start gap-3 rounded-xl px-4 py-3 text-left hover:bg-zinc-50 transition"
                      >
                        <MapPin size={18} className="mt-0.5 text-zinc-400 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-zinc-800 truncate">{place.display_name.split(",")[0]}</p>
                          <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{place.display_name}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Geolocation trigger */}
              <button
                onClick={handleUseCurrentLocation}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-amber-500/50 bg-amber-50/50 px-5 py-4 text-sm font-semibold text-amber-700 hover:bg-amber-50 transition active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin text-amber-600" />
                ) : (
                  <Compass size={18} className="text-amber-600" />
                )}
                Use My Current Location (Detect via GPS)
              </button>

              {error && (
                <div className="rounded-2xl bg-rose-50 border border-rose-100 p-4 text-xs text-rose-600 flex gap-2">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* Saved Addresses Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Saved Addresses</h3>
                  <button
                    onClick={handleAddNewClick}
                    className="flex items-center gap-1.5 text-xs font-bold text-black hover:text-amber-600 transition"
                  >
                    <Plus size={14} /> Add Address
                  </button>
                </div>

                {addresses.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center rounded-2xl border border-dashed border-zinc-200">
                    <MapPin size={36} className="text-zinc-300 mb-3" />
                    <p className="text-sm font-semibold text-zinc-500">No saved addresses</p>
                    <p className="text-xs text-zinc-400 mt-1">Add an address to check serviceability and delivery options.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        onClick={() => setSelectedAddress(address.id)}
                        className={`relative flex items-start gap-4 rounded-2xl border p-5 cursor-pointer transition hover:shadow-md ${
                          selectedAddressId === address.id
                            ? "border-black bg-zinc-50/50"
                            : "border-zinc-200 bg-white"
                        }`}
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                            selectedAddressId === address.id ? "bg-black text-amber-400" : "bg-zinc-100 text-zinc-500"
                          }`}
                        >
                          {getAddressIcon(address.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0 pr-8">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-zinc-900 text-sm">{address.name}</span>
                            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold text-zinc-500 uppercase">{address.type}</span>
                            {address.isDefault && (
                              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">Default</span>
                            )}
                          </div>
                          
                          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                            {address.flat}, {address.building && `${address.building}, `}{address.street}, {address.area && `${address.area}, `}{address.city} - {address.pincode}
                          </p>
                          <p className="text-[11px] text-zinc-400 mt-1.5">Phone: +91 {address.mobile}</p>
                          
                          {/* Serviceability indicator */}
                          <div className="mt-2.5 flex items-center gap-1 text-[11px]">
                            {isServiceable(address.pincode, address.city) ? (
                              <span className="text-emerald-600 font-medium flex items-center gap-0.5">
                                <CheckCircle size={12} fill="rgba(16,185,129,0.1)" /> One Day Delivery Available
                              </span>
                            ) : (
                              <span className="text-rose-500 font-medium flex items-center gap-0.5">
                                <AlertCircle size={12} /> Unserviceable Location
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="absolute right-4 top-4 flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditClick(address);
                            }}
                            className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800 transition"
                            aria-label="Edit address"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteAddress(address.id);
                            }}
                            className="rounded-full p-1.5 text-zinc-400 hover:bg-rose-50 hover:text-rose-600 transition"
                            aria-label="Delete address"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {view === "form" && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <label className="block text-xs font-semibold text-zinc-500">
                  Full Name *
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-black transition"
                    placeholder="Enter name"
                  />
                  {formErrors.name && <span className="text-rose-600 text-[10px] block mt-1">{formErrors.name}</span>}
                </label>

                <label className="block text-xs font-semibold text-zinc-500">
                  Mobile Number *
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-black transition"
                    placeholder="10-digit number"
                  />
                  {formErrors.mobile && <span className="text-rose-600 text-[10px] block mt-1">{formErrors.mobile}</span>}
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="block text-xs font-semibold text-zinc-500">
                  Flat / House / Office No. *
                  <input
                    value={formData.flat}
                    onChange={(e) => setFormData({ ...formData, flat: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-black transition"
                    placeholder="Flat 101, building etc"
                  />
                  {formErrors.flat && <span className="text-rose-600 text-[10px] block mt-1">{formErrors.flat}</span>}
                </label>

                <label className="block text-xs font-semibold text-zinc-500">
                  Building / Apartment / Colony
                  <input
                    value={formData.building}
                    onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-black transition"
                    placeholder="Apartment name"
                  />
                </label>
              </div>

              <label className="block text-xs font-semibold text-zinc-500">
                Street / Road / Lane *
                <input
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-black transition"
                  placeholder="Street details"
                />
                {formErrors.street && <span className="text-rose-600 text-[10px] block mt-1">{formErrors.street}</span>}
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="block text-xs font-semibold text-zinc-500">
                  Landmark
                  <input
                    value={formData.landmark}
                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-black transition"
                    placeholder="Famous landmark nearby"
                  />
                </label>

                <label className="block text-xs font-semibold text-zinc-500">
                  Area / Locality *
                  <input
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-black transition"
                    placeholder="Madhapur / Jubilee Hills"
                  />
                  {formErrors.area && <span className="text-rose-600 text-[10px] block mt-1">{formErrors.area}</span>}
                </label>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <label className="block text-xs font-semibold text-zinc-500">
                  City
                  <input
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm text-zinc-600 outline-none cursor-not-allowed"
                    readOnly
                  />
                </label>

                <label className="block text-xs font-semibold text-zinc-500">
                  State
                  <input
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-100 bg-zinc-100 px-4 py-3 text-sm text-zinc-600 outline-none cursor-not-allowed"
                    readOnly
                  />
                </label>

                <label className="block text-xs font-semibold text-zinc-500">
                  Pincode *
                  <input
                    type="tel"
                    value={formData.pincode}
                    onChange={handlePincodeChange}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-black transition"
                    placeholder="6-digit PIN"
                  />
                  {formErrors.pincode && <span className="text-rose-600 text-[10px] block mt-1">{formErrors.pincode}</span>}
                </label>
              </div>

              {/* Serviceability Banner */}
              {serviceability.checked && (
                <div
                  className={`rounded-2xl border px-5 py-4 text-xs flex gap-2.5 items-center ${
                    serviceability.available
                      ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                      : "bg-rose-50 border-rose-100 text-rose-700"
                  }`}
                >
                  {serviceability.available ? (
                    <>
                      <CheckCircle size={18} />
                      <span className="font-semibold">✓ One Day Delivery Available in this location</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={18} />
                      <span className="font-semibold">Currently delivery is unavailable in this location.</span>
                    </>
                  )}
                </div>
              )}

              {/* Address Type Selection */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-zinc-500">Address Type</span>
                <div className="flex flex-wrap gap-2">
                  {(["Home", "Work", "Parents", "Hostel", "Other"] as Address["type"][]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, type })}
                      className={`flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-xs font-semibold transition active:scale-95 ${
                        formData.type === type
                          ? "border-black bg-black text-white shadow-sm"
                          : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                      }`}
                    >
                      {getAddressIcon(type)}
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Set Default Toggle */}
              <label className="flex items-center gap-3 cursor-pointer py-1">
                <input
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                  className="h-4.5 w-4.5 rounded-md border-zinc-300 accent-black cursor-pointer"
                />
                <span className="text-xs font-semibold text-zinc-700">Set as my default delivery address</span>
              </label>

              {/* Form Actions */}
              <div className="flex gap-3 pt-3 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className="flex-1 rounded-xl border border-zinc-200 bg-white py-3.5 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-black py-3.5 text-sm font-semibold text-white hover:bg-zinc-800 transition shadow-md shadow-zinc-200"
                >
                  Save Address
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
