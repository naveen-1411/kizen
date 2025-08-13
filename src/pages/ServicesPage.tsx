import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  UserGroupIcon, 
  BuildingOfficeIcon, 
  HeartIcon, 
  GlobeAltIcon, 
  EyeIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

// Build an asset resolver for jpg/png with PNG-specific background
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
  // Explicit mapping from service names to asset base names
  const alias: Record<string, string> = {
    // map to actual filenames in assets
    'airport-transfers': 'airport transfer',
    'corporate-travel': 'Corporate Travel',
    'wedding-transportation': 'weddingspecial',
    'wine-tours': 'winetour',
    'special-events': 'special events',
    'hourly-charters': 'Hourly Charters',
    'executive-protection': 'Executive Protection',
    'roadshow-tour-management': 'Roadshow & Tour Management',
  }
  const lookupKey = simplify(alias[key] || key)
  const entry = assetMap.get(lookupKey)
  if (!entry) return { url: null, isPng: false }
  if (entry.jpg) return { url: entry.jpg, isPng: false }
  if (entry.png) return { url: entry.png, isPng: true }
  return { url: null, isPng: false }
}

const services = [
  {
    id: 'airport',
    name: 'Airport Transfers',
    description: 'Start and end your journey in comfort with our reliable airport transfer service. Our chauffeurs track your flight and ensure timely pickups and drop-offs.',
    icon: GlobeAltIcon,
    features: [
      'Flight tracking and monitoring',
      'Meet and greet service',
      'Luggage assistance',
      'Complimentary wait time',
      'Fixed rates with no hidden fees',
      'Available 24/7, 365 days a year'
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate Travel',
    description: 'Make a lasting impression with our executive transportation services. Perfect for business meetings, conferences, and client entertainment.',
    icon: BuildingOfficeIcon,
    features: [
      'Professional, uniformed chauffeurs',
      'Late-model luxury vehicles',
      'Wi-Fi equipped fleet',
      'Corporate accounts available',
      'Roadshow and event coordination',
      'Confidentiality guaranteed'
    ]
  },
  {
    id: 'wedding',
    name: 'Wedding Transportation',
    description: 'Arrive in style on your special day. Our luxury vehicles add elegance to your wedding and ensure you and your guests travel in comfort.',
    icon: HeartIcon,
    features: [
      'Decorated vehicles available',
      'Red carpet service',
      'Champagne service',
      'Coordination with wedding planners',
      'Photo opportunity stops',
      'Custom packages for all wedding sizes'
    ]
  },
  {
    id: 'events',
    name: 'Special Events',
    description: 'From proms to anniversaries, our chauffeurs ensure you arrive at your special event in luxury and style, making every moment memorable.',
    icon: UserGroupIcon,
    features: [
      'Proms and homecomings',
      'Bachelor/bachelorette parties',
      'Sporting events',
      'Concert transportation',
      'Anniversary celebrations',
      'Group transportation options'
    ]
  },
  {
    id: 'wine-tours',
    name: 'Wine Tours',
    description: 'Explore local vineyards and wineries with our curated wine tour packages. Enjoy the scenery while we handle the transportation.',
    icon: EyeIcon,
    features: [
      'Custom itinerary planning',
      'Knowledgeable chauffeurs',
      'Picnic lunch arrangements',
      'Private and group tours',
      'Partnerships with premium wineries',
      'Door-to-door service'
    ]
  },
  {
    id: 'hourly',
    name: 'Hourly Charters',
    description: 'Hire our luxury vehicles by the hour for maximum flexibility. Perfect for multi-stop trips, shopping excursions, or city tours.',
    icon: ClockIcon,
    features: [
      'Minimum 3-hour booking',
      'Flexible itinerary changes',
      'Wait and return service',
      'Multiple stops allowed',
      'Professional route planning',
      'All-inclusive pricing'
    ]
  },
  {
    id: 'security',
    name: 'Executive Protection',
    description: 'Combine luxury transportation with security services for VIPs, celebrities, and executives requiring enhanced protection.',
    icon: ShieldCheckIcon,
    features: [
      'Trained security personnel',
      'Armored vehicle options',
      'Advance route planning',
      'Threat assessment',
      'Discreet service',
      'Global coordination'
    ]
  },
  {
    id: 'roadshow',
    name: 'Roadshow & Tour Management',
    description: 'Comprehensive transportation logistics for multi-city business roadshows, artist tours, or promotional events.',
    icon: TruckIcon,
    features: [
      'Multi-city coordination',
      'Dedicated account manager',
      'Fleet consistency across locations',
      'Backup vehicles on standby',
      'Real-time tracking and reporting',
      'International service available'
    ]
  },
]

export default function ServicesPage() {
  const navigate = useNavigate()
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update document title
    document.title = 'Our Services | Big Boy Limos'
    
    // Handle hash navigation
    const { hash } = window.location
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 100
          })
        }, 100)
      }
    }
  }, [])
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Premium <span className="text-gold-500">Services</span></h1>
            <p className="text-xl text-gray-300">
              Experience the pinnacle of luxury transportation with our comprehensive range of services designed to meet your every need.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services list */}
      <div className="container py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-32"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="h-20 w-20 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-10 w-10" aria-hidden="true" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">{service.name}</h2>
                  <p className="text-lg text-primary-600 mb-6">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gold-500">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 rounded-xl h-80 flex items-center justify-center overflow-hidden">
                  {(() => {
                    const { url, isPng } = resolveAsset(service.name)
                    if (!url) {
                      return (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <p className="text-gray-400 text-center italic">[Image not found]</p>
                        </div>
                      )
                    }
                    return (
                      <div className={`w-full h-full ${isPng ? 'bg-white' : 'bg-gray-100'}`}>
                        <img
                          src={url}
                          alt={service.name}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    )
                  })()}
                </div>
                <div className="w-full lg:w-1/2">
                  <button
                    onClick={() => navigate(`/book?item=${encodeURIComponent(service.name)}&price=${encodeURIComponent(199)}`)}
                    className="btn btn-primary mt-6"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-gold-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Ready to Experience Luxury Transportation?</h2>
            <p className="text-lg text-primary-600 mb-8">
              Contact us today to book your service or request a custom quote tailored to your specific needs.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Book Your Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}