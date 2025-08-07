import champagneImage from '@/assets/luxury-champagne.jpg';
import bagImage from '@/assets/luxury-bag.jpg';
import watchImage from '@/assets/luxury-watch.jpg';
import perfumeImage from '@/assets/luxury-perfume.jpg';

const SpecialOffers = () => {
  const offers = [
    {
      image: champagneImage,
      name: 'Premium Champagne Service',
      price: '$125',
      description: 'Dom Pérignon with crystal glasses'
    },
    {
      image: bagImage,
      name: 'Luxury Welcome Package',
      price: '$85',
      description: 'Curated amenity collection'
    },
    {
      image: watchImage,
      name: 'Executive Time Package',
      price: '$200',
      description: 'Premium timepiece rental service'
    },
    {
      image: perfumeImage,
      name: 'Signature Fragrance',
      price: '$65',
      description: 'Exclusive scent experience'
    }
  ];

  return (
    <section id="gift-cards" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-4 text-luxury-gradient">
            Special Offers
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Elevate your experience with our curated luxury additions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="card-luxury group overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-luxury text-xl font-semibold mb-2 text-foreground">
                  {offer.name}
                </h3>
                
                <p className="text-muted-foreground font-elegant text-sm mb-4 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-luxury-gradient font-elegant">
                    {offer.price}
                  </span>
                  
                  <button className="text-luxury-gold hover:text-luxury-black hover:bg-luxury-gold px-4 py-2 rounded-lg transition-all duration-300 font-elegant font-medium">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;