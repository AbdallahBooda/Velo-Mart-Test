import { create } from 'zustand'

export const ProductStore = create((set) => ({
  products: [], // shared state
  setProducts: (products) => set({ products }), // way to update it
}))
