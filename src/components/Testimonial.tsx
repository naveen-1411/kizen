const Testimonial = () => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-luxury text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-12 italic">
            "Everything went smooth! I appreciate you."
          </blockquote>
          
          <div>
            <cite className="font-elegant text-lg text-background/80 not-italic tracking-wide">
              — Jay, Dallas, TX
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;