import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gift Cards', href: '#gift-cards' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-luxury-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-luxury text-2xl font-bold text-luxury-gradient">
            Big Boy Limos
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-luxury-gold transition-colors duration-300 font-elegant font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <button className="btn-gold text-sm">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-luxury-gray-light">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-luxury-gold transition-colors duration-300 font-elegant"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="btn-gold text-sm mt-4 w-full">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;