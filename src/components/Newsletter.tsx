import { Mail } from 'lucide-react';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-16 h-16 text-luxury-gold mx-auto mb-8" />
          
          <h2 className="font-luxury text-4xl font-bold mb-4 text-luxury-gradient">
            Stay in the Loop
          </h2>
          
          <p className="font-elegant text-lg text-muted-foreground mb-8 leading-relaxed">
            Get exclusive access to special offers, premium services, and luxury updates
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg border border-luxury-gray-light bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent font-elegant"
              required
            />
            
            <button 
              type="submit"
              className="btn-gold whitespace-nowrap hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4 font-elegant">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;