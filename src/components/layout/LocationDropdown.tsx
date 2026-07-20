"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAddressStore, Address } from "@/lib/addressStore";
import {
  MapPin,
  Home,
  Briefcase,
  Users,
  BookOpen,
  Compass,
  Plus,
  ChevronRight,
  Check,
  Search,
  Loader2,
  X,
  SlidersHorizontal,
  Zap,
} from "lucide-react";

interface LocationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

export default function LocationDropdown({
  isOpen,
  onClose,
  onOpenModal,
}: LocationDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    addresses,
    selectedAddressId,
    setSelectedAddress,
    detectLocation,
    isServiceable,
  } = useAddressStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const [locating, setLocating] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Autocomplete location search
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
          )}&format=json&addressdetails=1&countrycodes=in&limit=4`
        );
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data);
        }
      } catch (err) {
        console.error("Location search failed", err);
      } finally {
        setSearching(false);
      }
    }, 400);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery]);

  if (!isOpen) return null;

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId) || addresses[0];
  const previewAddresses = addresses.slice(0, 3);

  const getAddressIcon = (type: Address["type"]) => {
    switch (type) {
      case "Home":
        return <Home size={15} />;
      case "Work":
        return <Briefcase size={15} />;
      case "Parents":
        return <Users size={15} />;
      case "Hostel":
        return <BookOpen size={15} />;
      default:
        return <MapPin size={15} />;
    }
  };

  const handleUseCurrentLocation = async () => {
    setLocating(true);
    const detected = await detectLocation();
    setLocating(false);
    if (detected) {
      // Open modal in form mode with detected address or auto-select
      onOpenModal();
      onClose();
    }
  };

  const handleSelectAddress = (id: string) => {
    setSelectedAddress(id);
    onClose();
  };

  const handleSuggestionSelect = (place: any) => {
    // Open full modal for confirmation / complete details
    onOpenModal();
    onClose();
  };

  return (
    <>
      {/* Backdrop for Mobile */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fadeIn"
        onClick={onClose}
      />

      {/* Main Container - Desktop Floating Dropdown vs Mobile Bottom Sheet */}
      <div
        ref={dropdownRef}
        className={`
          z-50 border border-amber-500/20 bg-zinc-950 text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          /* Desktop layout */
          lg:absolute lg:top-full lg:left-0 lg:mt-3 lg:w-[460px] lg:rounded-2xl lg:p-5
          /* Mobile Bottom Sheet */
          fixed bottom-0 inset-x-0 max-h-[80vh] rounded-t-[28px] p-5 overflow-y-auto lg:overflow-visible
          /* Animations */
          transition-all duration-200 ease-out transform
          animate-in fade-in-0 zoom-in-95 lg:slide-in-from-top-2 slide-in-from-bottom-4
        `}
      >
        {/* Mobile Handle Bar */}
        <div className="mb-3 flex justify-center lg:hidden">
          <div className="h-1.5 w-12 rounded-full bg-zinc-800" />
        </div>

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-amber-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Delivery Location
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
            aria-label="Close delivery menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Selected Address Display Card */}
        {selectedAddress && (
          <div className="relative mb-4 overflow-hidden rounded-xl border border-amber-500/30 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 p-4 shadow-inner">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  {getAddressIcon(selectedAddress.type)}
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wide">
                  {selectedAddress.type} {selectedAddress.isDefault && <span className="text-amber-400">(Default)</span>}
                </span>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <Zap size={11} className="fill-emerald-400" /> One Day Delivery Available
              </span>
            </div>

            <p className="mt-2.5 text-xs text-zinc-300 font-medium leading-relaxed">
              {selectedAddress.flat}, {selectedAddress.building ? `${selectedAddress.building}, ` : ""}
              {selectedAddress.street}, {selectedAddress.area}
            </p>
            <p className="text-[11px] text-zinc-400 font-normal mt-0.5">
              {selectedAddress.city} - {selectedAddress.pincode}
            </p>
          </div>
        )}

        {/* Saved Addresses Preview (First 2-3) */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400 uppercase tracking-wider px-1">
            <span>Select Address</span>
            <span className="text-zinc-500">{addresses.length} saved</span>
          </div>

          <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1 no-scrollbar">
            {previewAddresses.map((addr) => {
              const isSelected = selectedAddressId === addr.id;
              return (
                <div
                  key={addr.id}
                  onClick={() => handleSelectAddress(addr.id)}
                  className={`
                    group flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-all duration-150
                    ${
                      isSelected
                        ? "border-amber-400/70 bg-amber-500/10 text-white"
                        : "border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900"
                    }
                  `}
                >
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-zinc-500 group-hover:border-amber-400 transition">
                    {isSelected && (
                      <div className="h-2 w-2 rounded-full bg-amber-400" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        {addr.type}
                        {addr.isDefault && (
                          <span className="text-[9px] text-amber-400 font-semibold">DEFAULT</span>
                        )}
                      </span>
                      {isSelected && (
                        <Check size={14} className="text-amber-400" />
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                      {addr.flat}, {addr.street}, {addr.area || addr.city}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions List */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          <button
            onClick={handleUseCurrentLocation}
            disabled={locating}
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-xs font-semibold text-zinc-200 transition hover:border-amber-500/50 hover:bg-zinc-800 active:scale-[0.98] disabled:opacity-50"
          >
            {locating ? (
              <Loader2 size={14} className="animate-spin text-amber-400" />
            ) : (
              <Compass size={14} className="text-amber-400" />
            )}
            <span>Current Location</span>
          </button>

          <button
            onClick={() => {
              onOpenModal();
              onClose();
            }}
            className="flex items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2.5 text-xs font-bold text-amber-400 transition hover:bg-amber-500/20 active:scale-[0.98]"
          >
            <Plus size={14} />
            <span>Add New Address</span>
          </button>
        </div>

        {/* Search Address Field */}
        <div className="relative mb-4">
          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2.5 focus-within:border-amber-400 transition">
            <Search size={15} className="text-zinc-500 shrink-0" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search locality, street, landmark or pincode..."
              className="w-full bg-transparent text-xs text-white outline-none placeholder:text-zinc-500"
            />
            {searching && <Loader2 size={14} className="animate-spin text-amber-400 shrink-0" />}
          </div>

          {/* Autocomplete Suggestions inside dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 z-30 mt-1 max-h-48 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950 p-1.5 shadow-2xl space-y-1">
              {suggestions.map((place) => (
                <button
                  key={place.place_id}
                  onClick={() => handleSuggestionSelect(place)}
                  className="flex w-full items-start gap-2.5 rounded-lg p-2 text-left hover:bg-zinc-900 transition"
                >
                  <MapPin size={14} className="mt-0.5 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-white truncate">
                      {place.display_name.split(",")[0]}
                    </p>
                    <p className="text-[10px] text-zinc-400 line-clamp-1">
                      {place.display_name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer Link: View All / Manage Addresses */}
        <div className="border-t border-zinc-800/80 pt-3 flex items-center justify-between">
          <button
            onClick={() => {
              onOpenModal();
              onClose();
            }}
            className="flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-amber-400 transition group"
          >
            <SlidersHorizontal size={14} className="text-amber-400" />
            <span>Manage All Addresses</span>
            <ChevronRight size={14} className="transition group-hover:translate-x-1 text-amber-400" />
          </button>
        </div>
      </div>
    </>
  );
}
