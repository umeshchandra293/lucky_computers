import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import FeaturedLaptops from './FeaturedLaptops'; // <-- 1. Import it
import WhyUs from './WhyUs';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zinc-200 font-sans text-zinc-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
       <Services />
      <About />
      <FeaturedLaptops />  {/* <-- 2. Place it here */}
      <WhyUs />
    </div>
  );
}