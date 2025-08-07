import heroImage from '@/assets/hero-limo.jpg';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${heroImage})`
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-10">
        <h1 className="font-luxury text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Your Personal Driver.<br />
          <span className="text-luxury-gradient">On Demand.</span><br />
          Without the Apps.
        </h1>
        
        <p className="font-elegant text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
          Ride in style. Arrive like royalty.
        </p>
        
        <button className="btn-gold text-lg px-12 py-5 hover:scale-110 transition-all duration-300">
          Book Now
        </button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;