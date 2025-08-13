import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update document title
    document.title = 'About Us | Big Boy Limos'
  }, [])
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About <span className="text-gold-500">Big Boy Limos</span></h1>
            <p className="text-xl text-gray-300">
              Delivering exceptional luxury transportation services with a commitment to excellence, reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our story */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">Our Story</h2>
            <p className="text-lg text-primary-600 mb-4">
              Founded in 2010, Big Boy Limos began with a simple vision: to provide the most luxurious and reliable transportation experience in the industry. What started with a single luxury sedan has grown into a diverse fleet of premium vehicles serving clients across the region.
            </p>
            <p className="text-lg text-primary-600 mb-4">
              Our founder, James Anderson, recognized a gap in the market for truly exceptional luxury transportation services that went beyond just getting from point A to point B. He envisioned a service where every detail was meticulously considered, from the immaculate condition of the vehicles to the professionalism of the chauffeurs.
            </p>
            <p className="text-lg text-primary-600">
              Today, Big Boy Limos has established itself as the premier luxury transportation provider, serving corporate clients, celebrities, and discerning individuals who expect nothing but the best. Our commitment to excellence remains unwavering as we continue to expand our services and fleet.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-center italic">[Company Image Placeholder]</p>
          </motion.div>
        </div>
      </div>
      
      {/* Our values */}
      <div className="bg-gold-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-primary-600">
              These principles guide everything we do and define our approach to luxury transportation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-12 w-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-primary-900 mb-2">Excellence</h3>
              <p className="text-primary-600">
                We strive for excellence in every aspect of our service, from the condition of our vehicles to the professionalism of our chauffeurs. Nothing less than perfection is acceptable.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-primary-900 mb-2">Reliability</h3>
              <p className="text-primary-600">
                Punctuality and dependability are the foundations of our service. We understand the importance of timeliness and ensure our clients can always count on us to be there when needed.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-12 w-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-primary-900 mb-2">Client Focus</h3>
              <p className="text-primary-600">
                Our clients are at the center of everything we do. We listen to their needs, anticipate their requirements, and go above and beyond to exceed their expectations at every turn.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Our team */}
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-lg text-primary-600">
            The experienced professionals behind Big Boy Limos' commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gray-100 rounded-full h-48 w-48 mx-auto mb-6 flex items-center justify-center">
              <p className="text-gray-400 italic">[Photo]</p>
            </div>
            <h3 className="text-xl font-serif font-medium text-primary-900 mb-1">James Anderson</h3>
            <p className="text-gold-600 font-medium mb-3">Founder & CEO</p>
            <p className="text-primary-600">
              With over 20 years in the luxury transportation industry, James brings unparalleled expertise and vision to Big Boy Limo.
            </p>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-100 rounded-full h-48 w-48 mx-auto mb-6 flex items-center justify-center">
              <p className="text-gray-400 italic">[Photo]</p>
            </div>
            <h3 className="text-xl font-serif font-medium text-primary-900 mb-1">Sophia Reynolds</h3>
            <p className="text-gold-600 font-medium mb-3">Operations Director</p>
            <p className="text-primary-600">
              Sophia ensures the seamless operation of our fleet and chauffeur team, maintaining our high standards of service excellence.
            </p>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-100 rounded-full h-48 w-48 mx-auto mb-6 flex items-center justify-center">
              <p className="text-gray-400 italic">[Photo]</p>
            </div>
            <h3 className="text-xl font-serif font-medium text-primary-900 mb-1">Michael Chen</h3>
            <p className="text-gold-600 font-medium mb-3">Client Relations Manager</p>
            <p className="text-primary-600">
              Michael leads our client relations team, ensuring every client receives personalized attention and exceptional service.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl font-serif font-bold mb-4">Experience the <span className="text-gold-500">Big Boy Limos</span> Difference</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join our growing list of satisfied clients who trust us for their luxury transportation needs. Contact us today to book your service or learn more about our offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fleet" className="btn btn-primary">
                Explore Our Fleet
              </Link>
              <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}