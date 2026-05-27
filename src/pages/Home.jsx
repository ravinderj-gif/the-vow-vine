import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Storytelling from '../components/Storytelling';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import Booking from '../components/Booking';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Storytelling />
        <Pricing />
        <Testimonials />
        <InstagramFeed />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
