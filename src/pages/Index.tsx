import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import Testimonial from '@/components/Testimonial';
import SpecialOffers from '@/components/SpecialOffers';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedServices />
        <Testimonial />
        <SpecialOffers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
