const Footer = () => {
  const paymentMethods = [
    '💳', '💳', '💳', '🍎', '📱'
  ];

  return (
    <footer id="contact" className="bg-muted/30 text-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="font-elegant text-sm text-muted-foreground">Accepted here</span>
            <div className="flex gap-2">
              {paymentMethods.map((icon, index) => (
                <span key={index} className="text-xl opacity-70">
                  {icon}
                </span>
              ))}
            </div>
          </div>
          
          <div className="font-elegant text-sm text-muted-foreground">
            © 2025 Big Boy Limos. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;