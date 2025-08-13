import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  UserGroupIcon, 
  BuildingOfficeIcon, 
  HeartIcon, 
  GlobeAltIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Airport Transfers',
    description: 'Start and end your journey in comfort with our reliable airport transfer service. Our chauffeurs track your flight and ensure timely pickups and drop-offs.',
    icon: GlobeAltIcon,
    href: '/services#airport',
  },
  {
    name: 'Corporate Travel',
    description: 'Make a lasting impression with our executive transportation services. Perfect for business meetings, conferences, and client entertainment.',
    icon: BuildingOfficeIcon,
    href: '/services#corporate',
  },
  {
    name: 'Wedding Transportation',
    description: 'Arrive in style on your special day. Our luxury vehicles add elegance to your wedding and ensure you and your guests travel in comfort.',
    icon: HeartIcon,
    href: '/services#wedding',
  },
  {
    name: 'Special Events',
    description: 'From proms to anniversaries, our chauffeurs ensure you arrive at your special event in luxury and style, making every moment memorable.',
    icon: UserGroupIcon,
    href: '/services#events',
  },
  {
    name: 'Wine Tours',
    description: 'Explore local vineyards and wineries with our curated wine tour packages. Enjoy the scenery while we handle the transportation.',
    icon: GlobeAltIcon,
    href: '/services#wine-tours',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function FeaturedServices() {
  return (
    <section className="section bg-white" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            Experience the pinnacle of luxury transportation with our comprehensive range of services designed to meet your every need.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.name}
              className="luxury-card group hover:border-gold-500 hover:border"
              variants={itemVariants}
            >
              <div className="luxury-card-body">
                <div className="h-12 w-12 bg-gold-100 text-gold-600 rounded-md flex items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="luxury-card-title">{service.name}</h3>
                <p className="luxury-card-text">{service.description}</p>
                <Link 
                  to={service.href} 
                  className="inline-flex items-center text-gold-600 font-medium hover:text-gold-800 transition-colors"
                >
                  Learn more
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}