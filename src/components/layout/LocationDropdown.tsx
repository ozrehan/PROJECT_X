"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useAddressStore } from "@/lib/addressStore";
import {
  MapPin,
  Compass,
  Plus,
  Search,
  Loader2,
  X,
  Check,
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
  const [mounted, setMounted] = useState(false);
  const {
    addresses,
    selectedAddressId,
    setSelectedAddress,
    detectLocation,
  } = useAddressStore();

  const [pincodeInput, setPincodeInput] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const [locating, setLocating] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    if (!pincodeInput.trim()) {
      setSuggestions([]);
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(async () => {
      setSearching(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            pincodeInput
          )}&format=json&addressdetails=1&countrycodes=in&limit=3`
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
  }, [pincodeInput]);

  if (!isOpen || !mounted) return null;

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

  const handleApplySearch = () => {
    if (!pincodeInput.trim()) return;
    onOpenModal();
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
      {/* Explicit 380px narrow centered card */}
      <div
        ref={popupRef}
        style={{ width: "380px", maxWidth: "90vw" }}
        className="mx-auto rounded-2xl bg-zinc-950 text-white border border-zinc-800 shadow-[0_25px_70px_rgba(0,0,0,0.9)] p-5 transition-all duration-200 ease-out transform animate-in fade-in-0 zoom-in-95 shrink-0"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-1">
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight">
              Choose your location
            </h2>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-tight">
              Select delivery location for product availability
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
            aria-label="Close popup"
          >
            <X size={16} />
          </button>
        </div>

        {/* Address Cards List */}
        <div className="mt-3 space-y-2 max-h-[220px] overflow-y-auto pr-0.5 no-scrollbar">
          {addresses.map((addr) => {
            const isSelected = selectedAddressId === addr.id;
            const fullAddressText = `${addr.flat}, ${addr.building ? addr.building + ", " : ""}${addr.street}, ${addr.area ? addr.area + ", " : ""}${addr.city}`;

            return (
              <div
                key={addr.id}
                onClick={() => handleSelectAddress(addr.id)}
                className={`
                  relative rounded-xl border p-3 text-left cursor-pointer transition-all duration-150
                  ${
                    isSelected
                      ? "border-2 border-amber-400 bg-amber-500/10"
                      : "border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900"
                  }
                `}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-white">
                    {addr.name ? `${addr.name}` : `${addr.type}`}
                    {addr.name && <span className="text-zinc-400 font-normal ml-1">({addr.type})</span>}
                  </span>
                  {isSelected && (
                    <Check size={14} className="text-amber-400 shrink-0" />
                  )}
                </div>

                <p className="text-[11px] text-zinc-300 mt-1 leading-snug line-clamp-2">
                  {fullAddressText}
                </p>

                {addr.isDefault && (
                  <span className="text-[9px] text-amber-400 font-semibold block mt-1">
                    Default address
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Action Links */}
        <div className="mt-3.5 space-y-2 pt-1 text-[11px]">
          <button
            onClick={() => {
              onOpenModal();
              onClose();
            }}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition"
          >
            <Plus size={13} /> Add address or manage locations
          </button>

          <button
            onClick={handleUseCurrentLocation}
            disabled={locating}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-amber-400 font-medium transition disabled:opacity-50"
          >
            {locating ? (
              <Loader2 size={13} className="animate-spin text-amber-400" />
            ) : (
              <Compass size={13} className="text-amber-400" />
            )}
            <span>Use current location (GPS)</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-3.5 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800" />
          </div>
          <span className="relative bg-zinc-950 px-2 text-[10px] text-zinc-500">
            or enter pincode
          </span>
        </div>

        {/* Pincode Input + Apply Button */}
        <div className="relative">
          <div className="flex gap-2">
            <div className="flex flex-1 items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 focus-within:border-amber-400 transition">
              <Search size={13} className="text-zinc-500 shrink-0" />
              <input
                value={pincodeInput}
                onChange={(e) => setPincodeInput(e.target.value)}
                placeholder="Pincode or locality"
                className="w-full bg-transparent text-xs text-white outline-none placeholder:text-zinc-500"
              />
              {searching && <Loader2 size={13} className="animate-spin text-amber-400 shrink-0" />}
            </div>
            <button
              onClick={handleApplySearch}
              className="rounded-xl bg-amber-500 px-3.5 py-1.5 text-xs font-bold text-black hover:bg-amber-400 active:scale-95 transition"
            >
              Apply
            </button>
          </div>

          {/* Autocomplete Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 z-30 mt-1 max-h-36 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950 p-1 shadow-2xl space-y-1">
              {suggestions.map((place) => (
                <button
                  key={place.place_id}
                  onClick={() => {
                    onOpenModal();
                    onClose();
                  }}
                  className="flex w-full items-start gap-2 rounded-lg p-1.5 text-left hover:bg-zinc-900 transition"
                >
                  <MapPin size={12} className="mt-0.5 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white truncate">
                      {place.display_name.split(",")[0]}
                    </p>
                    <p className="text-[9px] text-zinc-400 line-clamp-1">
                      {place.display_name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
