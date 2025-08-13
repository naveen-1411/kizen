import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CheckoutPage() {
  const { items, total, totalBeforeDiscount, discount, clear, couponCode } = useCart()
  const navigate = useNavigate()
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Checkout | Big Boy Limos'
  }, [])

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    // Simulate payment gateway redirect/processing
    setTimeout(() => {
      clear()
      navigate('/?success=1')
    }, 1200)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-6">Checkout</h1>
        <form onSubmit={handlePay} className="bg-white rounded-xl shadow p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-primary-900">Order Summary</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              {items.map((it) => (
                <li key={it.id} className="flex justify-between">
                  <span>{it.title} — {it.date} {it.timeSlot} × {it.quantity}</span>
                  <span>${(it.price * it.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>${totalBeforeDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Discount {couponCode ? `(${couponCode})` : ''}</span>
                <span className="text-green-700">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-primary-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-primary-900">Payment Details</h2>
            <p className="text-sm text-gray-500 mb-2">Demo form. Integrate a real gateway (Stripe, etc.) in production.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="rounded-md border border-gray-300 px-4 py-2" placeholder="Cardholder Name" required />
              <input className="rounded-md border border-gray-300 px-4 py-2" placeholder="Email" type="email" required />
              <input className="rounded-md border border-gray-300 px-4 py-2" placeholder="Card Number" inputMode="numeric" required />
              <div className="grid grid-cols-2 gap-4">
                <input className="rounded-md border border-gray-300 px-4 py-2" placeholder="MM/YY" required />
                <input className="rounded-md border border-gray-300 px-4 py-2" placeholder="CVC" required />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary" disabled={processing || items.length === 0}>
              {processing ? 'Processing…' : 'Pay Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


