import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const timeSlots = [
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
]

export default function BookingPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { addItem } = useCart()

  const params = new URLSearchParams(location.search)
  const prefillTitle = params.get('item') || 'Luxury Ride'
  const basePrice = Number(params.get('price') || 199)

  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Book Now | Big Boy Limos'
  }, [])

  const todayISO = useMemo(() => {
    const d = new Date()
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    return `${yyyy}-${mm}-${dd}`
  }, [])

  const canSubmit = useMemo(() => Boolean(date && slot && qty > 0), [date, slot, qty])

  const blockedSlots = useMemo(() => {
    if (!date) return [] as string[]
    const selected = new Date(date)
    const now = new Date()
    // If selected date is today, block past time slots
    const isToday = selected.getFullYear() === now.getFullYear() && selected.getMonth() === now.getMonth() && selected.getDate() === now.getDate()
    if (!isToday) return []
    const currentMinutes = now.getHours() * 60 + now.getMinutes()
    return timeSlots.filter((t) => {
      const [time, meridiem] = t.split(' ')
      let [hh, mm] = time.split(':').map((n) => parseInt(n, 10))
      if (meridiem === 'PM' && hh !== 12) hh += 12
      if (meridiem === 'AM' && hh === 12) hh = 0
      const minutes = hh * 60 + mm
      return minutes < currentMinutes
    })
  }, [date])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) {
      setError('Please select date, time slot and quantity')
      return
    }
    const id = `${prefillTitle}-${date}-${slot}-${Date.now()}`
    addItem({
      id,
      title: prefillTitle,
      date,
      timeSlot: slot,
      quantity: qty,
      price: basePrice,
    })
    navigate('/cart')
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-6">Book Now</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
            <input value={prefillTitle} readOnly className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-50" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input type="date" value={date} min={todayISO} onChange={(e) => setDate(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
              <select value={slot} onChange={(e) => setSlot(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-2" required disabled={!date}>
                <option value="">Select a slot</option>
                {timeSlots.map((t) => {
                  const disabled = blockedSlots.includes(t)
                  return (
                    <option key={t} value={t} disabled={disabled}>
                      {t}{disabled ? ' (unavailable)' : ''}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 rounded-md border border-gray-300">-</button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || '1', 10)))}
                  className="w-20 text-center rounded-md border border-gray-300 px-3 py-2"
                />
                <button type="button" onClick={() => setQty((q) => q + 1)} className="px-3 py-2 rounded-md border border-gray-300">+</button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
              <input value={`$${basePrice.toFixed(2)} / unit`} readOnly className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-50" />
            </div>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">Add to Cart</button>
          </div>
        </form>
      </div>
    </div>
  )
}


