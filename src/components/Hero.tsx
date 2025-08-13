import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import bmwImg from '../assets/bmw-7-series.jpg'
import cadillacImg from '../assets/cadillac-escalade.jpg'
import benzImg from '../assets/mercedes-s-class.jpg'

export default function Hero() {
  const navigate = useNavigate()
  const images = [bmwImg, cadillacImg, benzImg]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])
  return (
    <div className="relative overflow-hidden bg-primary-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
              initial={{ opacity: 0.0 }}
              animate={{ opacity: 1.0 }}
              exit={{ opacity: 0.0 }}
              transition={{ duration: 1.0 }}
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70" />
      </div>
      
      <div className="relative z-10 container pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience Luxury <span className="text-gold-500">Transportation</span> Like Never Before
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate your journey with our premium fleet of vehicles and professional chauffeurs. From airport transfers to special events, we provide exceptional service for every occasion.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/fleet" className="btn btn-primary">
              Explore Our Fleet
            </Link>
            <button onClick={() => navigate('/book')} className="btn btn-outline">Book Now</button>
          </motion.div>
        </div>
      </div>
      
      {/* Luxury features */}
      <div className="relative z-10 bg-primary-900/80 backdrop-blur-sm py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-gold-500 text-3xl font-serif font-bold">24/7</div>
              <div className="text-white text-sm mt-1">Service Available</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-gold-500 text-3xl font-serif font-bold">100%</div>
              <div className="text-white text-sm mt-1">Customer Satisfaction</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-gold-500 text-3xl font-serif font-bold">15+</div>
              <div className="text-white text-sm mt-1">Luxury Vehicles</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="text-gold-500 text-3xl font-serif font-bold">10+</div>
              <div className="text-white text-sm mt-1">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}