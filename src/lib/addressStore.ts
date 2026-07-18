import { create } from "zustand";

export interface Address {
  id: string;
  name: string;
  mobile: string;
  flat: string;
  building: string;
  street: string;
  landmark?: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  type: "Home" | "Work" | "Parents" | "Hostel" | "Other";
  isDefault: boolean;
}

interface AddressStore {
  addresses: Address[];
  selectedAddressId: string | null;
  isModalOpen: boolean;
  loading: boolean;
  error: string | null;
  setModalOpen: (open: boolean) => void;
  loadAddresses: () => void;
  addAddress: (address: Omit<Address, "id">) => void;
  editAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  setSelectedAddress: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  detectLocation: () => Promise<Omit<Address, "id" | "isDefault"> | null>;
  isServiceable: (pincode: string, city: string) => boolean;
}

export const useAddressStore = create<AddressStore>((set, get) => ({
  addresses: [],
  selectedAddressId: null,
  isModalOpen: false,
  loading: false,
  error: null,

  setModalOpen: (open) => set({ isModalOpen: open }),

  loadAddresses: () => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("oz_addresses");
    const selected = localStorage.getItem("oz_selected_address_id");
    const parsedAddresses: Address[] = saved ? JSON.parse(saved) : [
      // Seed default Hyderabad addresses for a premium feel
      {
        id: "addr-1",
        name: "Rehan Ahmed",
        mobile: "9876543210",
        flat: "Flat 402",
        building: "Jubilee Crest",
        street: "Road No. 36, Jubilee Hills",
        landmark: "Near Metro Station",
        area: "Jubilee Hills",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500033",
        type: "Home",
        isDefault: true,
      },
      {
        id: "addr-2",
        name: "Rehan Office",
        mobile: "9876543210",
        flat: "Level 8, Phase 2",
        building: "HITEC City IT Park",
        street: "Madhapur",
        landmark: "Opposite Cyber Towers",
        area: "Madhapur",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500081",
        type: "Work",
        isDefault: false,
      }
    ];

    if (!saved) {
      localStorage.setItem("oz_addresses", JSON.stringify(parsedAddresses));
    }

    const defaultAddress = parsedAddresses.find(a => a.isDefault);
    const selectedId = selected || (defaultAddress ? defaultAddress.id : parsedAddresses[0]?.id) || null;

    set({
      addresses: parsedAddresses,
      selectedAddressId: selectedId,
    });
  },

  addAddress: (newAddr) => {
    const id = `addr-${Date.now()}`;
    const address: Address = { ...newAddr, id };

    let currentAddresses = [...get().addresses];

    if (address.isDefault) {
      currentAddresses = currentAddresses.map((a) => ({ ...a, isDefault: false }));
    } else if (currentAddresses.length === 0) {
      address.isDefault = true;
    }

    const updated = [...currentAddresses, address];
    localStorage.setItem("oz_addresses", JSON.stringify(updated));

    set({
      addresses: updated,
      selectedAddressId: address.isDefault ? id : get().selectedAddressId || id,
    });
  },

  editAddress: (id, updatedFields) => {
    let currentAddresses = [...get().addresses];

    if (updatedFields.isDefault) {
      currentAddresses = currentAddresses.map((a) => ({ ...a, isDefault: false }));
    }

    const updated = currentAddresses.map((a) =>
      a.id === id ? { ...a, ...updatedFields } as Address : a
    );
    localStorage.setItem("oz_addresses", JSON.stringify(updated));

    set({ addresses: updated });
  },

  deleteAddress: (id) => {
    const filtered = get().addresses.filter((a) => a.id !== id);
    let selectedId = get().selectedAddressId;

    if (selectedId === id) {
      const defaultAddr = filtered.find((a) => a.isDefault);
      selectedId = (defaultAddr ? defaultAddr.id : filtered[0]?.id) || null;
    }

    localStorage.setItem("oz_addresses", JSON.stringify(filtered));
    set({
      addresses: filtered,
      selectedAddressId: selectedId,
    });
  },

  setSelectedAddress: (id) => {
    localStorage.setItem("oz_selected_address_id", id);
    set({ selectedAddressId: id });
  },

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  detectLocation: async () => {
    set({ loading: true, error: null });
    return new Promise((resolve) => {
      if (typeof window === "undefined" || !navigator.geolocation) {
        set({ error: "Geolocation is not supported by your browser.", loading: false });
        resolve(null);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            if (!res.ok) throw new Error("Failed to reverse geocode location");

            const data = await res.json();
            const addr = data.address || {};

            // Map Nominatim keys to e-commerce address fields
            const result: Omit<Address, "id" | "isDefault"> = {
              name: "",
              mobile: "",
              flat: addr.house_number || addr.building || "",
              building: addr.neighbourhood || addr.suburb || "",
              street: addr.road || addr.construction || addr.pedestrian || "",
              landmark: addr.tourism || addr.amenity || "",
              area: addr.suburb || addr.residential || addr.city_district || "",
              city: addr.city || addr.town || addr.municipality || "Hyderabad",
              state: addr.state || "Telangana",
              pincode: addr.postcode || "500081",
              type: "Home",
            };

            set({ loading: false });
            resolve(result);
          } catch (err: any) {
            set({ error: err.message || "Failed to resolve address details.", loading: false });
            resolve(null);
          }
        },
        (error) => {
          let msg = "Failed to detect location.";
          if (error.code === error.PERMISSION_DENIED) {
            msg = "Location permission denied. Please search manually.";
          }
          set({ error: msg, loading: false });
          resolve(null);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  },

  isServiceable: (pincode, city) => {
    const isHydPincode = pincode.startsWith("500");
    const isHydCity = city.toLowerCase().includes("hyderabad");
    return isHydPincode || isHydCity;
  },
}));
