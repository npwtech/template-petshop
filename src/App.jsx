import { useEffect } from 'react';
import { ensureGsap, ScrollTrigger } from './utils/animations.js';

import Cursor from './components/Cursor.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Manifesto from './components/Manifesto.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import Grooming from './components/Grooming.jsx';
import WhyUs from './components/WhyUs.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import MobileNav from './components/MobileNav.jsx';

export default function App() {
  useEffect(() => {
    ensureGsap();
    // recalcula os ScrollTriggers depois que tudo (fontes, imagens) montou
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 600);
    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Products />
        <Grooming />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <About />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </>
  );
}
