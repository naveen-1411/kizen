import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Events', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gift Cards', href: '#gift-cards' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center h-20 relative">
          {/* Mobile Menu Button - Left */}
          <button
            className="md:hidden absolute left-0 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation - Left */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-0">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-muted-foreground transition-colors duration-300 font-elegant text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Logo - Center */}
          <div className="font-luxury text-3xl font-normal tracking-tight text-foreground">
            Big Boy Limos
          </div>

          {/* Desktop Navigation - Right */}
          <nav className="hidden md:flex items-center space-x-12 absolute right-0">
            {navLinks.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-muted-foreground transition-colors duration-300 font-elegant text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-muted-foreground transition-colors duration-300 font-elegant text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;