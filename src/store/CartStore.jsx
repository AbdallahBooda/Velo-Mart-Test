import { create } from 'zustand'

// 🔹 دالة لحفظ السلة في localStorage
const saveCartToLocalStorage = (cart) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}

// 🔹 دالة لتحميل السلة من localStorage
const loadCartFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  }
  return []
}

export const CartStore = create((set, get) => ({
  cart: loadCartFromLocalStorage(), // 🛒 تحميل السلة عند البداية

  // ➕ إضافة منتج للسلة
  addToCart: (product) => {
    const existing = get().cart.find((item) => item.id === product.id)
    let updatedCart

    if (existing) {
      updatedCart = get().cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    } else {
      updatedCart = [...get().cart, { ...product, quantity: 1 }]
    }

    set({ cart: updatedCart })
    saveCartToLocalStorage(updatedCart) // 💾 حفظ في localStorage
  },

  // ➖ حذف منتج واحد
  removeFromCart: (id) => {
    const updatedCart = get().cart.filter((item) => item.id !== id)
    set({ cart: updatedCart })
    saveCartToLocalStorage(updatedCart)
  },

  // 🧹 تفريغ السلة
  clearCart: () => {
    set({ cart: [] })
    saveCartToLocalStorage([])
  },
}))
