import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-16 bg-luxury-black text-luxury-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-luxury-gold mx-auto mb-8 opacity-80" />
          
          <blockquote className="font-luxury text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8">
            "Everything went smooth! I appreciate you."
          </blockquote>
          
          <div className="border-t border-luxury-gold/30 pt-6">
            <cite className="font-elegant text-lg text-luxury-gold not-italic">
              — Dallas Client
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;