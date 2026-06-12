import { Award, Users, Zap, Shield, Star } from 'lucide-react';
// Explicit type-only import to satisfy verbatimModuleSyntax
import type { LucideIcon } from 'lucide-react';

// Define the TypeScript interface for our value objects
interface CoreValue {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  gridClass: string;
}

export default function CoreValues() {
  // Apply the interface to the array
  const values: CoreValue[] = [
    {
      num: "01",
      icon: Award,
      title: "Quality",
      desc: "We never compromise on the quality of our services and products. Every repair undergoes rigorous multi-point testing because excellence is our baseline.",
      gridClass: "md:col-span-1"
    },
    {
      num: "02",
      icon: Users,
      title: "Customer Focus",
      desc: "Your data security and satisfaction are our absolute priorities. We listen, diagnose transparently, and deliver reliable solutions.",
      gridClass: "md:col-span-1"
    },
    {
      num: "03",
      icon: Zap,
      title: "Efficiency",
      desc: "Downtime costs you money and peace of mind. We value your time, providing lightning-fast turnarounds without sacrificing precision.",
      gridClass: "md:col-span-2"
    }
  ];

  return (
    <section id="core-values" className="bg-zinc-200 px-6 pt-8 pb-16 lg:px-16 overflow-hidden relative">
      
      {/* SOLID SLANTED STRAIGHT LINES DESIGN (RIGHT SIDE) */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] pointer-events-none z-0 overflow-hidden">
        {/* Clean, un-faded crisp lines grouped and rotated together */}
        <div className="absolute right-[-15%] top-[-20%] h-[150%] flex gap-4 transform rotate-[25deg]">
          <div className="w-1.5 h-full bg-orange-600"></div>
          <div className="w-4 h-full bg-orange-600"></div>
          <div className="w-0.5 h-full bg-orange-600"></div>
          <div className="w-8 h-full bg-orange-600"></div>
          <div className="w-2 h-full bg-orange-600"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-zinc-900">Our Core Values</h3>
          <p className="mt-1 text-base font-medium text-zinc-600">The principles that power our workshop.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Trust & Motivation Block (Left Side) */}
          <div className="lg:col-span-5 bg-zinc-950 p-6 lg:p-8 flex flex-col justify-between text-white relative overflow-hidden group shadow-xl border border-zinc-800/50">
            {/* Faded Shield Graphic */}
            <div className="absolute -right-12 -top-12 opacity-[0.03] transition-transform duration-700 group-hover:scale-110">
              <Shield className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">The Lucky Promise</span>
              </div>
              <h4 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
                Built on Trust. <br />
                <span className="text-zinc-600">Engineered for Performance.</span>
              </h4>
              <p className="text-sm text-zinc-400 font-medium leading-relaxed mb-8">
                We don't just fix hardware; we restore your connection to your work and life. Every screw turned and circuit tested is backed by our unwavering commitment to absolute integrity. Your devices hold your digital life—we treat them with the respect they demand.
              </p>
            </div>

            {/* 5-Star Trust Badge */}
            <div className="relative z-10 flex items-center gap-4 border-t border-zinc-800 pt-6 mt-auto">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-white">5-Star Rated Service</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Trusted in Hyderabad</p>
              </div>
            </div>
          </div>

          {/* Value Cards (Right Side) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-zinc-50 border border-zinc-300 p-6 overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-xl ${val.gridClass}`}
              >
                {/* Giant Faded Number Watermark */}
                <div className="absolute -right-4 -bottom-6 text-[6rem] font-black leading-none text-zinc-200/50 select-none transition-transform duration-500 group-hover:-translate-y-4 group-hover:text-orange-100">
                  {val.num}
                </div>

                <div className="relative z-10">
                  <div className="mb-4 inline-block bg-white border border-zinc-200 p-3 shadow-sm transition-colors duration-300 group-hover:border-orange-200 group-hover:bg-orange-50">
                    <val.icon className="h-6 w-6 text-zinc-900 transition-colors duration-300 group-hover:text-orange-600" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-zinc-900 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-zinc-600 font-medium leading-relaxed max-w-sm">
                    {val.desc}
                  </p>
                </div>

                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}