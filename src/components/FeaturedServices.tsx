import { Car, Plane, Clock } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'DFW Airport Transfer',
      price: '$85+',
      description: 'Luxury transportation to and from Dallas/Fort Worth International Airport'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Love Field Airport',
      price: '$75+',
      description: 'Professional service to Dallas Love Field Airport'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Hourly Chauffeur Service',
      price: '$90+',
      description: 'Premium hourly chauffeur service for your convenience'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-4 text-luxury-gradient">
            Featured Services
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled luxury and comfort with our premium transportation services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-luxury p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="text-luxury-gold mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="font-luxury text-2xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <div className="text-3xl font-bold text-luxury-gradient mb-4 font-elegant">
                {service.price}
              </div>
              
              <p className="text-muted-foreground font-elegant leading-relaxed">
                {service.description}
              </p>
              
              <button className="mt-6 btn-luxury text-sm hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;