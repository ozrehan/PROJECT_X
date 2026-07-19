import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: string;
  store: string;
  image: string;
  quantity: number;
  size: string;
  color: string;
}

interface CartStore {
  items: CartItem[];
  loadCart: () => void;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: number, size: string, color: string) => void;
  updateQuantity: (id: number, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  loadCart: () => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("oz_cart");
    if (saved) {
      try {
        set({ items: JSON.parse(saved) });
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
      }
    }
  },

  addItem: (newItem) => {
    const current = [...get().items];
    const qty = newItem.quantity ?? 1;

    // Check if the item with same id, size and color already exists in cart
    const existingIndex = current.findIndex(
      (item) =>
        item.id === newItem.id &&
        item.size === newItem.size &&
        item.color === newItem.color
    );

    let updated;
    if (existingIndex > -1) {
      updated = current.map((item, idx) =>
        idx === existingIndex
          ? { ...item, quantity: item.quantity + qty }
          : item
      );
    } else {
      updated = [...current, { ...newItem, quantity: qty }];
    }

    localStorage.setItem("oz_cart", JSON.stringify(updated));
    set({ items: updated });
  },

  removeItem: (id, size, color) => {
    const current = get().items;
    const updated = current.filter(
      (item) => !(item.id === id && item.size === size && item.color === color)
    );
    localStorage.setItem("oz_cart", JSON.stringify(updated));
    set({ items: updated });
  },

  updateQuantity: (id, size, color, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id, size, color);
      return;
    }
    const current = get().items;
    const updated = current.map((item) =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity }
        : item
    );
    localStorage.setItem("oz_cart", JSON.stringify(updated));
    set({ items: updated });
  },

  clearCart: () => {
    localStorage.setItem("oz_cart", JSON.stringify([]));
    set({ items: [] });
  },
}));