const FeaturedServices = () => {
  const services = [
    {
      title: 'DFW Airport',
      price: '$85.00+',
      subtitle: 'First-class service starts at your front door.',
      description: 'Skip the apps and long waits — enjoy a smooth, on-time ride to DFW with bottled water, a clean car, and no surprises.'
    },
    {
      title: 'Love Field Airport',
      price: '$75.00+',
      subtitle: 'The private airport ride you\'ll actually love.',
      description: 'Travel light and lux with a reliable ride to or from Love Field — always on time, always personal.'
    },
    {
      title: 'Hourly Private Driver',
      price: '$90.00+',
      subtitle: 'Your time, your driver — No limits.',
      description: 'Enjoy personalized service by the hour with a dedicated driver who stays on standby for wherever the day (or night) takes you. *Flexible for multiple stops.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-normal mb-8 text-foreground">
            Featured Services
          </h2>
          
          <button className="border border-foreground text-foreground font-elegant text-sm px-12 py-3 rounded-full hover:bg-foreground hover:text-white transition-all duration-300 tracking-wide mb-16">
            Book
          </button>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-border pb-12 last:border-b-0">
              <div className="md:flex-1 mb-6 md:mb-0">
                <h3 className="font-luxury text-3xl md:text-4xl font-normal mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <h4 className="font-luxury text-lg md:text-xl font-normal mb-4 text-foreground italic">
                  {service.subtitle}
                </h4>
                
                <p className="text-muted-foreground font-elegant leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>
              
              <div className="md:ml-8 md:text-right">
                <div className="text-2xl md:text-3xl font-bold text-foreground font-elegant">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;