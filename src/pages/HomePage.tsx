import { useEffect } from 'react'
import Hero from '../components/Hero'
import FeaturedServices from '../components/FeaturedServices'
import SpecialOffers from '../components/SpecialOffers'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'

export default function HomePage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update document title
    document.title = 'Big Boy Limos | Luxury Transportation Services'
  }, [])
  
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <SpecialOffers />
      <Testimonial />
      <Newsletter />
    </div>
  )
}