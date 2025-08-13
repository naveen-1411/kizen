import React, { createContext, useContext, useMemo, useState } from 'react'

export type BookingItem = {
  id: string
  title: string
  date: string
  timeSlot: string
  quantity: number
  price: number
}

type CartContextValue = {
  items: BookingItem[]
  addItem: (item: BookingItem) => void
  removeItem: (id: string) => void
  clear: () => void
  totalBeforeDiscount: number
  discount: number
  couponCode: string | null
  applyCoupon: (code: string) => { success: true } | { success: false; message: string }
  removeCoupon: () => void
  total: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BookingItem[]>([])
  const [couponCode, setCouponCode] = useState<string | null>(null)

  const addItem = (item: BookingItem) => {
    setItems((prev) => [...prev, item])
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id))
  }

  const clear = () => {
    setItems([])
    setCouponCode(null)
  }

  const totalBeforeDiscount = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.quantity, 0),
    [items]
  )

  const computeDiscount = (subtotal: number, code: string | null): number => {
    if (!code || subtotal <= 0) return 0
    const normalized = code.trim().toUpperCase()
    if (normalized === 'SAVE10') return Math.min(subtotal * 0.1, subtotal)
    if (normalized === 'SAVE20') return Math.min(subtotal * 0.2, subtotal)
    if (normalized === 'OFF50') return Math.min(50, subtotal)
    return 0
  }

  const discount = useMemo(
    () => computeDiscount(totalBeforeDiscount, couponCode),
    [totalBeforeDiscount, couponCode]
  )

  const total = useMemo(() => Math.max(0, totalBeforeDiscount - discount), [totalBeforeDiscount, discount])

  const applyCoupon = (code: string) => {
    const trial = computeDiscount(totalBeforeDiscount, code)
    if (trial <= 0) {
      return { success: false as const, message: 'Invalid coupon code' }
    }
    setCouponCode(code)
    return { success: true as const }
  }

  const removeCoupon = () => setCouponCode(null)

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      clear,
      totalBeforeDiscount,
      discount,
      couponCode,
      applyCoupon,
      removeCoupon,
      total,
    }),
    [items, totalBeforeDiscount, discount, couponCode, total]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}


