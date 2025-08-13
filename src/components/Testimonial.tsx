import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    content: 'Big Boy Limos provided exceptional service for our corporate event. The chauffeur was professional, punctual, and the vehicle was immaculate. Highly recommended for business transportation needs.',
    author: {
      name: 'Michael Thompson',
      role: 'CEO, Thompson Enterprises',
    },
    rating: 5,
  },
  {
    id: 2,
    content: 'We used Big Boy Limos for our wedding day transportation and couldn\'t be happier. The attention to detail, the beautiful decoration of the vehicle, and the courtesy of the driver made our special day even more memorable.',
    author: {
      name: 'Jessica & David Miller',
      role: 'Newlyweds',
    },
    rating: 5,
  },
  {
    id: 3,
    content: 'The airport transfer service was flawless. Despite my flight delay, the chauffeur was waiting for me, helped with my luggage, and ensured a comfortable ride to my hotel. This is luxury transportation at its finest.',
    author: {
      name: 'Robert Chen',
      role: 'Business Traveler',
    },
    rating: 5,
  },
]

export default function Testimonial() {
  return (
    <section className="section bg-primary-900 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-white">What Our Clients Say</h2>
          <p className="section-subtitle text-gray-300">
            Don't just take our word for it. Hear from our satisfied clients who have experienced our luxury transportation services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-gold-500' : 'text-gray-400'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-200 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gold-500 flex items-center justify-center text-white font-serif font-bold">
                  {testimonial.author.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-medium">{testimonial.author.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.author.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}