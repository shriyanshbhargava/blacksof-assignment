import HeroSection from './components/sections/HeroSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/shared/Footer';
import CarouselSection from './components/sections/CarouselSection';
import Header from './components/shared/Header';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CarouselSection />
      <ContactSection />
      <Footer />
    </>
  );
}
