import { create } from 'zustand'

export const CartStore = create((set, get) => ({
  cart: [],

  // ➕ إضافة منتج للسلة
  addToCart: (product) => {
    const existing = get().cart.find((item) => item.id === product.id)
    if (existing) {
      // لو المنتج موجود، نزود الكمية
      set({
        cart: get().cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      })
    } else {
      // لو مش موجود نضيفه بكمية 1
      set({ cart: [...get().cart, { ...product, quantity: 1 }] })
    }
  },

  // ➖ حذف منتج واحد
  removeFromCart: (id) => {
    set({ cart: get().cart.filter((item) => item.id !== id) })
  },

  // 🧹 تفريغ السلة
  clearCart: () => set({ cart: [] }),
}))
