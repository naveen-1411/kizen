import { CreditCard, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'American Express', icon: '💳' },
    { name: 'PayPal', icon: '💳' }
  ];

  return (
    <footer id="contact" className="bg-luxury-black text-luxury-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="font-luxury text-3xl font-bold text-luxury-gradient mb-6">
              Big Boy Limos
            </div>
            <p className="font-elegant text-luxury-white/80 leading-relaxed mb-6">
              Dallas's premier luxury transportation service. Experience the difference of true professional chauffeur service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-luxury-white/80">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="font-elegant">(214) 555-LIMO</span>
              </div>
              <div className="flex items-center gap-3 text-luxury-white/80">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="font-elegant">info@bigboylimos.com</span>
              </div>
              <div className="flex items-center gap-3 text-luxury-white/80">
                <MapPin className="w-5 h-5 text-luxury-gold" />
                <span className="font-elegant">Dallas, Texas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-luxury text-xl font-semibold mb-6 text-luxury-gold">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {['Home', 'Services', 'About', 'Gift Cards', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block font-elegant text-luxury-white/80 hover:text-luxury-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-luxury text-xl font-semibold mb-6 text-luxury-gold">
              Our Services
            </h3>
            <nav className="space-y-3">
              {['Airport Transfers', 'Corporate Events', 'Wedding Transportation', 'Special Occasions', '24/7 Service'].map((service) => (
                <div
                  key={service}
                  className="block font-elegant text-luxury-white/80"
                >
                  {service}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="border-t border-luxury-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <CreditCard className="w-6 h-6 text-luxury-gold" />
              <span className="font-elegant text-luxury-white/80">We Accept:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method, index) => (
                  <span key={index} className="text-2xl" title={method.name}>
                    {method.icon}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="font-elegant text-luxury-white/60 text-center md:text-right">
              © 2025 Big Boy Limos. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;