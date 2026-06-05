import { ArrowRight, Cpu } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function FeaturedLaptops() {
  const brands = [
    {
      name: "Apple",
      lineup: "MacBook Pro & Air",
      desc: "M-Series & Intel architectures, fully restored.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Lenovo",
      lineup: "ThinkPad Series",
      desc: "Enterprise-grade durability, certified refurbished.",
      img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Dell",
      lineup: "Latitude & XPS",
      desc: "Premium business ultrabooks, tested for performance.",
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "HP",
      lineup: "EliteBook & Spectre",
      desc: "Sleek designs with uncompromised processing power.",
      img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section id="inventory" className="bg-zinc-200 px-6 py-24 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-orange-600">
            <Cpu className="h-5 w-5" />
            <span>Certified Pre-Owned</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-zinc-900 uppercase mb-4">
            Premium Brands. <br className="hidden md:block" />
            Restored to perfection.
          </h2>
          <p className="text-lg text-zinc-600 font-medium max-w-2xl">
            We carry a strictly vetted inventory of the world's most reliable machines. Expertly refurbished, rigorously tested, and backed by our warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="group relative bg-zinc-950 border border-zinc-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                <div className="absolute top-4 left-4 flex gap-1.5 z-20">
                  <div className="h-1 w-1 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
                  <div className="h-1 w-1 rounded-full bg-zinc-600 group-hover:bg-zinc-400 transition-colors" />
                </div>

                <LazyLoadImage
                  src={brand.img}
                  alt={`${brand.name} Refurbished`}
                  effect="blur"
                  className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  wrapperClassName="h-full w-full"
                  threshold={200}
                />

                <div className="absolute bottom-0 left-0 bg-orange-600 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white z-20 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  {brand.name}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {brand.lineup}
                </h3>
                <p className="text-sm font-medium text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {brand.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-3 bg-zinc-900 px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-orange-600 transition-colors group">
            Explore Full Inventory
            <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-2" />
          </button>
        </div>

      </div>
    </section>
  );
}