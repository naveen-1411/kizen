import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formatCurrency } from '../lib/utils'

// Eagerly import all assets and index them by simplified base name
const assetMap = (() => {
  const files = import.meta.glob('../assets/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, as: 'url' }) as Record<string, string>
  const map = new Map<string, { jpg?: string; png?: string }>()
  const simplify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  for (const [path, url] of Object.entries(files)) {
    const file = path.split('/').pop() || ''
    const ext = (file.split('.').pop() || '').toLowerCase()
    const base = file.replace(/\.[^.]+$/, '')
    const key = simplify(base)
    const entry = map.get(key) || {}
    if (ext === 'png') entry.png = url
    if (ext === 'jpg' || ext === 'jpeg') entry.jpg = url
    map.set(key, entry)
  }
  return map
})()

function resolveAsset(name: string): { url: string | null; isPng: boolean } {
  const simplify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const key = simplify(name)
  // explicit mapping from offer names to asset base names
  const alias: Record<string, string> = {
    // map offer names to actual asset filenames present
    'corporate-package': 'corporate packages',
    'wedding-special': 'weddingspecial',
    'vip-night-out': 'vipnightout',
  }
  const lookupKey = simplify(alias[key] || key)
  const entry = assetMap.get(lookupKey)
  if (!entry) return { url: null, isPng: false }
  if (entry.jpg) return { url: entry.jpg, isPng: false }
  if (entry.png) return { url: entry.png, isPng: true }
  return { url: null, isPng: false }
}

const offers = [
  {
    id: 1,
    name: 'Corporate Package',
    description: 'Perfect for business professionals. Includes airport transfers, hourly service for meetings, and priority booking.',
    price: 299,
    originalPrice: 399,
    imageAlt: 'Corporate Package',
  },
  {
    id: 2,
    name: 'Wedding Special',
    description: 'Make your special day unforgettable with our wedding package including decorated vehicles, champagne service, and red carpet treatment.',
    price: 599,
    originalPrice: 799,
    imageAlt: 'Wedding Special',
  },
  {
    id: 3,
    name: 'VIP Night Out',
    description: 'Experience the city in style with our VIP package. Includes 6 hours of service, complimentary drinks, and VIP club entry arrangements.',
    price: 449,
    originalPrice: 599,
    imageAlt: 'VIP Night Out',
  },
]

export default function SpecialOffers() {
  const navigate = useNavigate()
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Special Offers</h2>
          <p className="section-subtitle">
            Take advantage of our limited-time luxury packages designed to provide exceptional value for our distinguished clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className="luxury-card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                {(() => {
                  const { url, isPng } = resolveAsset(offer.name)
                  if (!url) {
                    return (
                      <div className="luxury-card-img flex items-center justify-center bg-gray-100">
                        <span className="text-gray-400 text-sm">[Image not found]</span>
                      </div>
                    )
                  }
                  return (
                    <div className={`overflow-hidden ${isPng ? 'bg-white' : ''}`}>
                      <img
                        src={url}
                        alt={offer.imageAlt}
                        className="luxury-card-img group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )
                })()}
                <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  SAVE {Math.round(((offer.originalPrice - offer.price) / offer.originalPrice) * 100)}%
                </div>
              </div>
              <div className="luxury-card-body">
                <h3 className="luxury-card-title">{offer.name}</h3>
                <p className="luxury-card-text">{offer.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl font-serif font-bold text-gold-600">{formatCurrency(offer.price)}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">{formatCurrency(offer.originalPrice)}</span>
                  </div>
                  <button
                    onClick={() => navigate(`/book?item=${encodeURIComponent(offer.name)}&price=${encodeURIComponent(offer.price)}`)}
                    className="text-gold-600 font-medium hover:text-gold-800 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact" className="btn btn-primary">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  )
}