import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, CheckCircle2, Wallet } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface BrandInventory {
  name: string;
  lineup: string;
  desc: string;
  img: string;
  gridClass: string;
  badge: string;
}

export default function FeaturedLaptops() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const brands: BrandInventory[] = [
    {
      name: "Lenovo",
      lineup: "ThinkPad Series",
      desc: "The ultimate workhorse. Military-grade durability that lasts years. Maximum ROI for students & professionals.",
      img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=800",
      gridClass: "md:col-span-2 md:row-span-2",
      badge: "Built Like a Tank",
    },
    {
      name: "Dell",
      lineup: "Latitude Series",
      desc: "Reliable, easy to repair, and handles heavy daily multitasking effortlessly.",
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
      gridClass: "md:col-span-1 md:row-span-1",
      badge: "Smart Value",
    },
    {
      name: "HP",
      lineup: "EliteBook & ProBook",
      desc: "Sleek, fast, and sensible. Solid performance that delivers everyday excellence without the heavy price tag.",
      img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-1 md:row-span-1",
      badge: "Everyday Choice",
    },
    {
      name: "Apple",
      lineup: "Refurbished MacBooks",
      desc: "Experience the premium Apple ecosystem at a fraction of the showroom cost. Fully tested and restored.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-3 md:row-span-1",
      badge: "Accessible Premium",
    }
  ];

  return (
    <section
      id="inventory"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-10 lg:px-12"
    >
      {/* subtle grid (dark lines for the white bg) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* --- HEADER (text darkened for the white bg) --- */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 ${isVisible ? 'animate-in fade-in slide-in-from-bottom-6 duration-700' : 'opacity-0'}`}>
          <div className="max-w-xl">
            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600">
              <Wallet className="h-4 w-4" />
              <span>Smart Investments</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-black tracking-tighter text-slate-900 uppercase leading-tight">
              Enterprise Grade. <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #2563eb' }}>
                Unmatched Value.
              </span>
            </h2>
          </div>

          <div className="md:max-w-xs text-slate-500 font-medium text-xs border-l-2 border-slate-300 pl-3 py-0.5">
            Why pay showroom markups? Get flagship reliability and performance without the premium price tag. Fully refurbished, rigorously tested, and built to last.
          </div>
        </div>

        {/* --- BENTO GRID (cards unchanged — dark tiles on white) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[minmax(160px,auto)] lg:auto-rows-[180px]">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-lg transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col justify-end ${brand.gridClass} ${isVisible ? 'animate-in fade-in slide-in-from-bottom-8 duration-700' : 'opacity-0'}`}
              style={{ animationFillMode: 'both', animationDelay: `${idx * 150}ms` }}
            >
              <LazyLoadImage
                src={brand.img}
                alt={`${brand.name} Refurbished`}
                effect="blur"
                className="absolute inset-0 h-full w-full object-cover grayscale opacity-40 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-70"
                wrapperClassName="absolute inset-0 h-full w-full"
                threshold={200}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              <div className="relative z-20 p-4 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className="inline-flex items-center gap-1 bg-slate-950/80 backdrop-blur-sm border border-slate-700/50 px-2 py-1 rounded text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-300">
                    <ShieldCheck className="w-3 h-3 text-blue-500" />
                    {brand.badge}
                  </div>
                </div>

                <div className="transform transition-transform duration-500 translate-y-1 group-hover:translate-y-0">
                  <h4 className="text-blue-500 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest mb-0.5">
                    {brand.name}
                  </h4>
                  <h3 className={`font-black uppercase tracking-tight text-white mb-1 leading-none ${brand.gridClass.includes('row-span-2') ? 'text-lg lg:text-2xl' : 'text-base lg:text-lg'}`}>
                    {brand.lineup}
                  </h3>

                  <div className="opacity-0 h-0 overflow-hidden transition-all duration-500 ease-out group-hover:opacity-100 group-hover:h-auto mt-1">
                    <p className="text-[10px] sm:text-xs font-medium text-slate-300 leading-snug max-w-[90%] mb-2">
                      {brand.desc}
                    </p>
                    <div className="flex items-center gap-1 text-white text-[9px] font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      In Stock
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-700 ease-out group-hover:w-full z-30" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}