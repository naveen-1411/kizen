import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, removeItem, total, totalBeforeDiscount, discount, applyCoupon, couponCode, removeCoupon } = useCart()
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Your Cart | Big Boy Limos'
  }, [])

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-6">Your Cart</h1>
        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <p className="text-gray-600">Your cart is empty.</p>
            <Link to="/services" className="btn btn-primary mt-4 inline-block">Browse Services</Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-6">
            <div className="divide-y">
              {items.map((it) => (
                <div key={it.id} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="font-semibold text-primary-900">{it.title}</div>
                    <div className="text-sm text-gray-600">{it.date} at {it.timeSlot} · Qty {it.quantity}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-semibold">${(it.price * it.quantity).toFixed(2)}</div>
                    <button onClick={() => removeItem(it.id)} className="text-red-600 hover:underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-medium text-gray-800 mb-2">Coupon</div>
                {couponCode ? (
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">Applied: <span className="font-semibold">{couponCode}</span></div>
                    <button className="text-red-600 text-sm" onClick={removeCoupon}>Remove</button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input value={code} onChange={(e) => setCode(e.target.value)} className="flex-1 rounded-md border border-gray-300 px-3 py-2" placeholder="Enter coupon (SAVE10, SAVE20, OFF50)" />
                    <button
                      onClick={() => {
                        const res = applyCoupon(code)
                        if ('message' in res) setMessage(res.message)
                        else setMessage('Coupon applied')
                      }}
                      className="btn btn-primary"
                      type="button"
                    >
                      Apply
                    </button>
                  </div>
                )}
                {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600">Subtotal</div>
                  <div className="font-semibold">${totalBeforeDiscount.toFixed(2)}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600">Discount</div>
                  <div className="font-semibold text-green-700">-${discount.toFixed(2)}</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-gray-800 font-medium">Total</div>
                  <div className="text-xl font-bold text-primary-900">${total.toFixed(2)}</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Link to="/services" className="btn btn-outline">Continue Shopping</Link>
              <button onClick={() => navigate('/checkout')} className="btn btn-primary">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


