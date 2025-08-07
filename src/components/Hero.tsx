import heroImage from '@/assets/hero-limo.jpg';

const Hero = () => {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-10">
        <h1 className="font-luxury text-4xl md:text-6xl lg:text-7xl font-normal mb-8 leading-tight tracking-tight">
          Your Personal Driver.<br />
          On Demand.<br />
          Without The Apps.
        </h1>
        
        <p className="font-elegant text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/90 tracking-wide">
          Ride Clean. Ride Consistent. Ride Big.
        </p>
        
        <button 
          onClick={() => smoothScrollTo('services')}
          className="bg-white text-black font-elegant text-sm px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300 tracking-wide"
        >
          Learn More
        </button>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full opacity-100"></div>
          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;