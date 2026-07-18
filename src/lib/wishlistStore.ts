import { create } from "zustand";
import { Product } from "./products";

interface WishlistStore {
  wishlistItems: Product[];
  loadWishlist: () => void;
  toggleWishlist: (product: Product) => void;
  clearWishlist: () => void;
  inWishlist: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  wishlistItems: [],

  loadWishlist: () => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("oz_wishlist");
    if (saved) {
      try {
        set({ wishlistItems: JSON.parse(saved) });
      } catch (e) {
        console.error("Failed to parse wishlist from local storage", e);
      }
    }
  },

  toggleWishlist: (product) => {
    const current = [...get().wishlistItems];
    const exists = current.some((item) => item.id === product.id);
    let updated;
    if (exists) {
      updated = current.filter((item) => item.id !== product.id);
    } else {
      updated = [...current, product];
    }
    localStorage.setItem("oz_wishlist", JSON.stringify(updated));
    set({ wishlistItems: updated });
  },

  clearWishlist: () => {
    localStorage.setItem("oz_wishlist", JSON.stringify([]));
    set({ wishlistItems: [] });
  },

  inWishlist: (id) => {
    return get().wishlistItems.some((item) => item.id === id);
  },
}));
