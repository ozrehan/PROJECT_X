"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAddressStore, Address } from "@/lib/addressStore";
import {
  MapPin,
  Compass,
  Plus,
  Settings,
  ChevronRight,
  Search,
  Loader2,
  X,
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
  const popupRef = useRef<HTMLDivElement>(null);
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
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
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

  const previewAddresses = addresses.slice(0, 3);

  const handleUseCurrentLocation = async () => {
    setLocating(true);
    const detected = await detectLocation();
    setLocating(false);
    if (detected) {
      onOpenModal();
      onClose();
    }
  };

  const handleSelectAddress = (id: string) => {
    setSelectedAddress(id);
    onClose();
  };

  const handleSuggestionSelect = (place: any) => {
    onOpenModal();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-md p-0 sm:p-4 animate-fadeIn">
      {/* Centered Popup Card on Desktop / Bottom Sheet on Mobile */}
      <div
        ref={popupRef}
        className={`
          w-full max-w-[480px] bg-zinc-950 text-white border border-zinc-800/80 shadow-[0_25px_70px_rgba(0,0,0,0.85)]
          /* Mobile Bottom Sheet */
          rounded-t-[32px] max-h-[75vh] p-6 overflow-y-auto
          /* Desktop Centered Popup */
          sm:rounded-3xl sm:max-h-[85vh] sm:p-7 sm:overflow-visible
          /* Animations */
          transition-all duration-200 ease-out transform
          animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-6 sm:slide-in-from-bottom-0
        `}
      >
        {/* Mobile Handle Indicator */}
        <div className="mb-4 flex justify-center sm:hidden">
          <div className="h-1.5 w-10 rounded-full bg-zinc-800" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-amber-400" />
              <h2 className="text-lg font-bold tracking-tight text-white font-serif">
                Choose Delivery Location
              </h2>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Select where you'd like your order delivered.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
            aria-label="Close popup"
          >
            <X size={18} />
          </button>
        </div>

        {/* Saved Addresses Section (Top 3 max) */}
        <div className="my-5 space-y-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block px-1">
            Saved Addresses ({addresses.length})
          </span>

          <div className="space-y-2">
            {previewAddresses.map((addr) => {
              const isSelected = selectedAddressId === addr.id;
              const shortLocation = `${addr.area || addr.street || addr.building}, ${addr.city}`;
              const fitsDelivery = isServiceable(addr.pincode, addr.city);

              return (
                <div
                  key={addr.id}
                  onClick={() => handleSelectAddress(addr.id)}
                  className={`
                    group flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition-all duration-200
                    ${
                      isSelected
                        ? "border-amber-400/80 bg-gradient-to-r from-amber-500/10 to-zinc-900/60 shadow-md shadow-amber-500/5"
                        : "border-zinc-800/90 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900 hover:-translate-y-0.5"
                    }
                  `}
                >
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    {/* Radio Button */}
                    <div
                      className={`
                        flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors
                        ${
                          isSelected
                            ? "border-amber-400 bg-amber-400 text-black"
                            : "border-zinc-600 group-hover:border-amber-400/60"
                        }
                      `}
                    >
                      {isSelected && <div className="h-2 w-2 rounded-full bg-black" />}
                    </div>

                    {/* Address Brief */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white tracking-wide">
                          {addr.type}
                        </span>
                        {addr.isDefault && (
                          <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2 py-0.2 text-[9px] font-semibold text-amber-400 uppercase">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 truncate mt-0.5 font-medium">
                        {shortLocation}
                      </p>
                    </div>
                  </div>

                  {/* Delivery Badge */}
                  {fitsDelivery && (
                    <div className="flex items-center gap-1 shrink-0 text-[10px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-full ml-2">
                      <Zap size={10} className="fill-emerald-400" />
                      <span>One Day Delivery</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions List Items */}
        <div className="my-5 border-t border-b border-zinc-800/80 py-2.5 space-y-1">
          {/* Action 1: Use Current Location */}
          <button
            onClick={handleUseCurrentLocation}
            disabled={locating}
            className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-900 hover:text-amber-400 transition group"
          >
            <div className="flex items-center gap-3">
              {locating ? (
                <Loader2 size={16} className="animate-spin text-amber-400" />
              ) : (
                <Compass size={16} className="text-amber-400 group-hover:scale-110 transition-transform" />
              )}
              <span>Use Current Location</span>
            </div>
            <ChevronRight size={14} className="text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Action 2: Add New Address */}
          <button
            onClick={() => {
              onOpenModal();
              onClose();
            }}
            className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-900 hover:text-amber-400 transition group"
          >
            <div className="flex items-center gap-3">
              <Plus size={16} className="text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Add New Address</span>
            </div>
            <ChevronRight size={14} className="text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Action 3: Manage Addresses */}
          <button
            onClick={() => {
              onOpenModal();
              onClose();
            }}
            className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-900 hover:text-amber-400 transition group"
          >
            <div className="flex items-center gap-3">
              <Settings size={16} className="text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Manage Addresses</span>
            </div>
            <ChevronRight size={14} className="text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Compact Search Box */}
        <div className="relative mb-4">
          <div className="flex items-center gap-2.5 rounded-2xl border border-zinc-800 bg-zinc-900/90 px-3.5 py-2.5 focus-within:border-amber-400 transition">
            <Search size={15} className="text-zinc-500 shrink-0" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search area, street, landmark or pincode..."
              className="w-full bg-transparent text-xs text-white outline-none placeholder:text-zinc-500"
            />
            {searching && <Loader2 size={14} className="animate-spin text-amber-400 shrink-0" />}
          </div>

          {/* Autocomplete Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 z-30 mt-1 max-h-48 overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-1.5 shadow-2xl space-y-1">
              {suggestions.map((place) => (
                <button
                  key={place.place_id}
                  onClick={() => handleSuggestionSelect(place)}
                  className="flex w-full items-start gap-2.5 rounded-xl p-2.5 text-left hover:bg-zinc-900 transition"
                >
                  <MapPin size={14} className="mt-0.5 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white truncate">
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

        {/* Footer Link */}
        <div className="pt-2 text-center">
          <button
            onClick={() => {
              onOpenModal();
              onClose();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition group"
          >
            <span>View All Saved Addresses</span>
            <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
