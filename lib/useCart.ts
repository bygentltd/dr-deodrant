"use client";

import { create } from "zustand";

type CartState = {
  cartId: string | null;
  count: number;
  setCart: (id: string, count: number) => void;
};

export const useCart = create<CartState>((set) => ({
  cartId: null,
  count: 0,
  setCart: (id, count) => set({ cartId: id, count }),
}));