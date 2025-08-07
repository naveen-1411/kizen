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
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-luxury text-3xl md:text-4xl font-normal mb-8 text-background">
            Stay in the loop
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-background/20 rounded-none bg-transparent text-background placeholder:text-background/60 focus:outline-none focus:border-background font-elegant"
              required
            />
            
            <button 
              type="submit"
              className="bg-background text-foreground px-8 py-3 font-elegant text-sm hover:bg-background/90 transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;