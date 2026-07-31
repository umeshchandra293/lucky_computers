"use client";

import { useState, useEffect, useRef } from 'react';
import { Cpu, Lock, BadgeCheck, ArrowRight, Server } from 'lucide-react';

export default function WhyUs() {
  // --- Scroll Trigger Animation State ---
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      num: "01",
      icon: BadgeCheck,
      title: "Trusted Experts",
      desc: "Experienced technicians with certified knowledge in complex IT infrastructure and board-level diagnostics."
    },
    {
      num: "02",
      icon: Cpu,
      title: "Quality Repairs",
      desc: "We use strictly vetted OEM components and subject all repairs to rigorous stress-testing before handover."
    },
    {
      num: "03",
      icon: Lock,
      title: "Data Security",
      desc: "Your privacy is absolute. We employ military-grade secure protocols to protect your sensitive files."
    }
  ];

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      // Compact, reduced padding with the clean white-and-blue gradient background, grids removed
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-12 sm:py-16 px-5 sm:px-8 border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER: COMPACT & TECHNICAL --- */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 ${isVisible ? 'animate-in fade-in slide-in-from-bottom-6 duration-700' : 'opacity-0'}`}>
          <div>
            <div className="mb-2 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
              <Server className="h-3.5 w-3.5" />
              <span>The Lucky Standard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter uppercase leading-none text-slate-900">
              Why Choose <br />
              <span className="text-blue-600">
                Our Services
              </span>
            </h2>
          </div>
          
          <div className="max-w-md pb-0.5 border-l-2 border-blue-200 pl-3">
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              We don't just fix devices; we engineer reliability with the most trusted and transparent technical solutions in Hyderabad.
            </p>
          </div>
        </div>

        {/* --- COMPACT SERVER BLADE LAYOUT --- */}
        <div className="flex flex-col border-t border-slate-200">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col md:flex-row items-start md:items-center py-4 lg:py-5 border-b border-slate-200 transition-all duration-300 hover:bg-white/80 hover:shadow-sm cursor-default overflow-hidden ${isVisible ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 md:animate-none' : 'opacity-0'}`}
              style={isVisible ? { animationFillMode: 'both', animationDelay: `${idx * 150}ms` } : {}}
            >
              {/* Left Hover Accent Wire */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top shadow-[0_0_10px_rgba(37,99,235,0.4)]" />

              {/* Grid Layout for Row Content */}
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-3 lg:px-6 transform transition-transform duration-300 group-hover:translate-x-1.5">
                
                {/* Number & Icon (Cols 1-4) */}
                <div className="md:col-span-4 flex items-center gap-4">
                  <span className="text-2xl lg:text-3xl font-black text-slate-300 transition-colors duration-300 group-hover:text-blue-600">
                    {feature.num}
                  </span>
                  
                  <div className="h-9 w-9 bg-blue-50 flex items-center justify-center border border-blue-100 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600 shrink-0 shadow-sm rounded-lg">
                    <feature.icon className="h-4 w-4 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>

                {/* Title (Cols 5-7) */}
                <div className="md:col-span-3">
                  <h3 className="text-sm lg:text-base font-black uppercase tracking-tight text-slate-900">
                    {feature.title}
                  </h3>
                </div>

                {/* Description & Action (Cols 8-12) */}
                <div className="md:col-span-5 flex items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed transition-colors duration-300 group-hover:text-slate-700 max-w-sm">
                    {feature.desc}
                  </p>
                  
                  <div className="hidden lg:flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 border border-slate-200 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 shrink-0 overflow-hidden">
                    <ArrowRight className="h-3 w-3 text-slate-400 transform -translate-x-4 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white" />
                  </div>
                </div>

              </div>

              {/* Bottom scanline effect on hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-600 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}