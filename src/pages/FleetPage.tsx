import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, Check, Users, Briefcase, Star, Shield, Clock, Phone } from 'lucide-react'
import mercedesSClassImg from '../assets/mercedes-s-class.jpg'
import bmw7SeriesImg from '../assets/bmw-7-series.jpg'
import cadillacEscaladeImg from '../assets/cadillac-escalade.jpg'
import lincolnStretchImg from '../assets/lincoln-stretch.jpg'
import mercedesSprinterImg from '../assets/mercedes-sprinter.jpg'
import miniCoachImg from '../assets/mini-coach.jpg'

const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

const categories = [
  { id: 'all', name: 'All Vehicles' },
  { id: 'sedan', name: 'Luxury Sedans' },
  { id: 'suv', name: 'Premium SUVs' },
  { id: 'stretch', name: 'Stretch Limousines' },
  { id: 'van', name: 'Executive Vans' },
  { id: 'bus', name: 'Luxury Buses' },
]

// Define the Vehicle interface
interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  capacity: string;
  luggage: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  priceRange: string;
}

// Define the vehicles array with better placeholder images
const vehicles: Vehicle[] = [
  {
    id: 'mercedes-s-class',
    name: 'Mercedes-Benz S-Class',
    category: 'sedan',
    description: 'Our flagship luxury sedan offering unparalleled comfort and sophistication.',
    capacity: '3 Passengers',
    luggage: '3 Suitcases',
    imageSrc: mercedesSClassImg,
    imageAlt: 'Mercedes-Benz S-Class',
    priceRange: 'From $150/hr',
    features: [
      'Premium leather seats',
      'Climate control',
      'Privacy partition',
      'WiFi hotspot',
      'Refreshment cooler',
      'Ambient lighting'
    ]
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series',
    category: 'sedan',
    description: 'Executive sedan combining luxury with cutting-edge technology and performance.',
    capacity: '3 Passengers',
    luggage: '3 Suitcases',
    imageSrc: bmw7SeriesImg,
    imageAlt: 'BMW 7 Series',
    priceRange: 'From $140/hr',
    features: [
      'Executive rear seats',
      'Panoramic sunroof',
      'Harman Kardon audio',
      'Tablet controls',
      'Massage function',
      'Ambient air package'
    ]
  },
  {
    id: 'cadillac-escalade',
    name: 'Cadillac Escalade',
    category: 'suv',
    description: 'Iconic luxury SUV with commanding presence and spacious interior.',
    capacity: '6 Passengers',
    luggage: '6 Suitcases',
    imageSrc: cadillacEscaladeImg,
    imageAlt: 'Cadillac Escalade',
    priceRange: 'From $180/hr',
    features: [
      'Captain chairs',
      'Premium audio system',
      'Rear entertainment',
      'Heated/cooled seats',
      'Extended legroom',
      'Tinted windows'
    ]
  },
  {
    id: 'lincoln-stretch',
    name: 'Lincoln Stretch Limousine',
    category: 'stretch',
    description: 'Classic stretch limousine for special occasions and elegant transportation.',
    capacity: '8-10 Passengers',
    luggage: '4 Suitcases',
    imageSrc: lincolnStretchImg,
    imageAlt: 'Lincoln Stretch Limousine',
    priceRange: 'From $250/hr',
    features: [
      'Bar setup',
      'Fiber optic lighting',
      'Premium sound system',
      'Privacy partition',
      'Multiple LCD TVs',
      'Extended seating'
    ]
  },
  {
    id: 'mercedes-sprinter',
    name: 'Mercedes-Benz Sprinter',
    category: 'van',
    description: 'Luxury van offering exceptional space and comfort for group travel.',
    capacity: '12 Passengers',
    luggage: '12 Suitcases',
    imageSrc: mercedesSprinterImg,
    imageAlt: 'Mercedes-Benz Sprinter',
    priceRange: 'From $200/hr',
    features: [
      'Executive seating',
      'High roof design',
      'Individual USB ports',
      'Luggage space',
      'Premium audio',
      'Climate control'
    ]
  },
  {
    id: 'mini-coach',
    name: 'Luxury Mini Coach',
    category: 'bus',
    description: 'Premium mini coach perfect for corporate events and large group transportation.',
    capacity: '28 Passengers',
    luggage: '28 Suitcases',
    imageSrc: miniCoachImg,
    imageAlt: 'Luxury Mini Coach',
    priceRange: 'From $300/hr',
    features: [
      'Reclining seats',
      'Onboard restroom',
      'DVD entertainment',
      'PA system',
      'Ample storage',
      'Tinted windows'
    ]
  }
]

const fleetFeatures = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'All vehicles are fully licensed and insured for your peace of mind.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock service to accommodate your schedule.'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Meticulously maintained vehicles with luxury amenities.'
  }
]

export default function FleetPage() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  // Memoize filtered vehicles for better performance
  const filteredVehicles = useMemo(() => {
    if (selectedCategory === 'all') {
      return vehicles
    }
    return vehicles.filter(vehicle => vehicle.category === selectedCategory)
  }, [selectedCategory])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Our Fleet | Big Boy Limos'
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleBookNow = (vehicleName: string) => {
    navigate(`/book?item=${encodeURIComponent(vehicleName)}&price=${encodeURIComponent(199)}`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading our luxury fleet...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Our Luxury Fleet
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our collection of meticulously maintained luxury vehicles, 
              each designed to provide the ultimate in comfort and style.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white rounded-2xl p-2 shadow-lg">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={cn(
                'px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300',
                'hover:shadow-md transform hover:-translate-y-0.5',
                selectedCategory === category.id
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
              )}
              aria-label={`Filter by ${category.name}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Vehicle Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-amber-600">{filteredVehicles.length}</span> 
            {filteredVehicles.length === 1 ? ' vehicle' : ' vehicles'}
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.imageSrc}
                  alt={vehicle.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-2 rounded-full flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {vehicle.capacity}
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-amber-600 text-xs font-bold px-3 py-2 rounded-full">
                  {vehicle.priceRange}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {vehicle.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-amber-500" />
                    Premium Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {vehicle.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="text-sm text-gray-600 flex items-center">
                        <Check className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {vehicle.features.length > 4 && (
                      <div className="text-xs text-amber-600 font-medium">
                        +{vehicle.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600 flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    <span className="font-medium">Luggage:</span>
                    <span className="ml-1">{vehicle.luggage}</span>
                  </div>
                  <button
                    onClick={() => handleBookNow(vehicle.name)}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center"
                  >
                    Book Now
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Features */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Fleet?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {fleetFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Book your premium ride today and travel in unparalleled style and comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert('This would open the booking form')}
              className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
            >
              Book Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => alert('This would initiate a phone call')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: (555) 123-4567
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}