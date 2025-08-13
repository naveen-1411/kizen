import { useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    // In a real application, you would send this to your backend
    console.log('Subscribing email:', email)
    
    // Simulate success
    setSubmitted(true)
    setError('')
    setEmail('')
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }
  
  return (
    <section className="section bg-gold-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Stay Updated</h2>
          <p className="section-subtitle">
            Subscribe to our newsletter for exclusive offers, luxury transportation tips, and updates on our newest fleet additions.
          </p>
          
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitted}
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent bg-gold-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 sm:px-10 disabled:opacity-75"
                  disabled={submitted}
                >
                  {submitted ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
            </form>
            
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
            
            {submitted && (
              <p className="mt-2 text-sm text-green-600">Thank you for subscribing!</p>
            )}
            
            <p className="mt-3 text-sm text-gray-500">
              <EnvelopeIcon className="h-4 w-4 inline mr-1" />
              We care about your data. Read our{' '}
              <a href="#" className="font-medium text-gold-600 hover:text-gold-500">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}