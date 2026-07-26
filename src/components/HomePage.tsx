import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import FeaturedLaptops from './FeaturedLaptops'; // <-- 1. Import it
import WhyUs from './WhyUs';
import CoreValues from './CoreValues';
import Ecosystem from './Ecosystem';
import Contact from './Contact';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Ecosystem />
      <FeaturedLaptops />
      <WhyUs />
      <About />
      <CoreValues />
      <Contact />
      <Footer />   
    </div>
  );
}