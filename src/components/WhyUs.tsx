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
      { threshold: 0.15 } // Triggers when 15% of the section is visible on screen
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
      desc: "Experienced technicians with certified knowledge in complex IT infrastructure, board-level diagnostics, and hardware restoration."
    },
    {
      num: "02",
      icon: Cpu,
      title: "Quality Repairs",
      desc: "We use strictly vetted OEM components and subject all repairs to rigorous, multi-point stress-testing procedures before handover."
    },
    {
      num: "03",
      icon: Lock,
      title: "Data Security",
      desc: "Your privacy is absolute. We employ military-grade, secure data-handling protocols to ensure your sensitive files are never compromised."
    }
  ];

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className="bg-slate-950 px-6 py-16 lg:px-16 overflow-hidden relative border-t border-slate-900"
    >
      
      {/* ================= BACKGROUND ELEMENTS ================= */}
      
      {/* 1. SLANTED WHITE STRIPES (LEFT SIDE) - Lite opacity applied */}
      <div className="absolute left-0 top-0 bottom-0 w-[50%] pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-50%] h-[200%] flex gap-4 transform rotate-[-28deg] opacity-[0.05]">
          <div className="w-1.5 h-full bg-white"></div>
          <div className="w-6 h-full bg-white"></div>
          <div className="w-1 h-full bg-white"></div>
          <div className="w-16 h-full bg-white"></div>
          <div className="w-2 h-full bg-white"></div>
          <div className="w-8 h-full bg-white"></div>
          <div className="w-0.5 h-full bg-white"></div>
        </div>
      </div>

      {/* 2. Background Tech Architecture Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }}>
      </div>
      
      {/* 3. Subtle ambient security glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* ================= CONTENT LAYOUT ================= */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER: COMPACT & TECHNICAL --- */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 ${isVisible ? 'animate-in fade-in slide-in-from-bottom-6 duration-700' : 'opacity-0'}`}>
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-blue-500">
              <Server className="h-4 w-4" />
              <span>The Lucky Standard</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] text-white">
              Why Choose <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #3b82f6' }}>
                Our Services
              </span>
            </h2>
          </div>
          
          <div className="max-w-sm pb-1 border-l-2 border-slate-800 pl-4">
            <p className="text-xs lg:text-sm text-slate-400 font-medium leading-relaxed">
              We don't just fix devices; we engineer reliability. We offer the most trusted, transparent, and high-performance technical solutions in Hyderabad.
            </p>
          </div>
        </div>

        {/* --- SERVER BLADE LAYOUT --- */}
        <div className="flex flex-col border-t-2 border-slate-900">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col md:flex-row items-start md:items-center py-6 lg:py-8 border-b border-slate-900 transition-all duration-500 hover:bg-slate-900/50 cursor-default overflow-hidden ${isVisible ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 md:animate-none' : 'opacity-0'}`}
              // Stagger delay dynamically so each server blade row drops down elegantly right after each other
              style={isVisible ? { animationFillMode: 'both', animationDelay: `${idx * 150}ms` } : {}}
            >
              {/* Left Hover Accent Wire (Lights up on hover) */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top shadow-[0_0_15px_rgba(37,99,235,0.8)]" />

              {/* Grid Layout for Row Content */}
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center px-4 lg:px-8 transform transition-transform duration-500 group-hover:translate-x-2">
                
                {/* Number & Icon (Cols 1-4) */}
                <div className="md:col-span-4 flex items-center gap-6">
                  {/* Faded background number that lights up */}
                  <span className="text-3xl lg:text-4xl font-black text-slate-800 transition-colors duration-500 group-hover:text-blue-500/20">
                    {feature.num}
                  </span>
                  
                  {/* Icon Block */}
                  <div className="h-10 w-10 bg-slate-950 flex items-center justify-center border border-slate-800 transition-all duration-500 group-hover:border-blue-500 group-hover:bg-blue-500/10 shrink-0 shadow-lg">
                    <feature.icon className="h-5 w-5 text-slate-500 transition-colors duration-500 group-hover:text-blue-500" />
                  </div>
                </div>

                {/* Title (Cols 5-7) */}
                <div className="md:col-span-3">
                  <h3 className="text-base lg:text-lg font-black uppercase tracking-tight text-slate-100 transition-colors duration-500 group-hover:text-white">
                    {feature.title}
                  </h3>
                </div>

                {/* Description & Action (Cols 8-12) */}
                <div className="md:col-span-5 flex items-center justify-between gap-6">
                  <p className="text-[11px] lg:text-xs text-slate-500 font-medium leading-relaxed transition-colors duration-500 group-hover:text-slate-300 max-w-sm">
                    {feature.desc}
                  </p>
                  {/* Subtle hover arrow - slides in to signify forward movement */}
                  <div className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-slate-800 transition-all duration-500 group-hover:border-blue-500 group-hover:bg-blue-500 shrink-0 overflow-hidden">
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500 transform -translate-x-4 transition-all duration-500 group-hover:translate-x-0 group-hover:text-white" />
                  </div>
                </div>

              </div>

              {/* Bottom scanline effect on hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-600 to-transparent transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}