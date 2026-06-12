import { useState, useEffect, useRef } from 'react';
import { MapPin, Target, Wrench } from 'lucide-react';
import imgA1 from '../assets/A1.png';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`bg-zinc-200 px-4 sm:px-6 py-10 sm:py-12 lg:px-16 lg:py-14 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      
      {/* ================= ANIMATION STYLES ================= */}
      <style>
        {`
          @keyframes floatAmbient {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes glowPulse {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.55; transform: scale(1.08); }
          }

          .animate-float-ambient { animation: floatAmbient 6s ease-in-out infinite; }
          .animate-glow-pulse { animation: glowPulse 8s ease-in-out infinite; }

          .reveal-up { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
          .is-visible .reveal-up { opacity: 1; transform: translateY(0); }
          
          .delay-100 { transition-delay: 100ms; }
          .delay-200 { transition-delay: 200ms; }
          .delay-300 { transition-delay: 300ms; }
          .delay-400 { transition-delay: 400ms; }

          @media (prefers-reduced-motion: reduce) {
            .animate-float-ambient, .animate-glow-pulse { animation: none; }
            .reveal-up { transition: none; opacity: 1; transform: none; }
          }
        `}
      </style>

      {/* ================= DYNAMIC BACKGROUND (ORANGE EFFECTS) ================= */}

      {/* Soft Orange Glow behind the image (right side) */}
      <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[60vw] max-w-[600px] aspect-square rounded-full bg-orange-500/30 blur-[110px] pointer-events-none z-0 animate-glow-pulse"></div>

      {/* Secondary smaller orange glow (top-left for balance) */}
      <div className="absolute left-[-10%] top-[-10%] w-[35vw] max-w-[350px] aspect-square rounded-full bg-orange-400/20 blur-[90px] pointer-events-none z-0"></div>

      {/* Slanted Orange Accent Lines (right side, behind image) */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none z-0 overflow-hidden opacity-60">
        <div className="absolute right-[-20%] top-[-25%] h-[150%] flex gap-3 sm:gap-4 transform rotate-[25deg]">
          <div className="w-1 h-full bg-gradient-to-b from-orange-500/40 via-orange-600/20 to-transparent"></div>
          <div className="w-6 h-full bg-gradient-to-b from-orange-500/30 via-orange-600/15 to-transparent"></div>
          <div className="w-2 h-full bg-gradient-to-b from-orange-500/40 via-orange-600/20 to-transparent"></div>
          <div className="w-10 h-full bg-gradient-to-b from-orange-500/20 via-orange-600/10 to-transparent"></div>
          <div className="w-1.5 h-full bg-gradient-to-b from-orange-500/40 via-orange-600/20 to-transparent"></div>
        </div>
      </div>

      {/* Subtle Tech Dot-Grid Background Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#000_2px, transparent 2px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Decorative Technical Line across the bottom */}
      <div className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent opacity-50 z-0"></div>

      {/* ================= CONTENT LAYOUT ================= */}
      {/* Changed flex-col-reverse to flex-col to control specific mobile stacking order */}
      <div className={`max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-14 items-center relative z-10 ${isVisible ? 'is-visible' : ''}`}>
        
        {/* --- MOBILE HEADER: Only visible on small screens (Order 1) --- */}
        <div className="w-full order-1 block lg:hidden">
          {/* Badge */}
          <div className="mb-3 sm:mb-4 flex items-center gap-3 reveal-up delay-100">
            <div className="flex h-6 w-6 items-center justify-center bg-orange-600 text-white shadow-lg shadow-orange-600/30">
              <Target className="h-3 w-3" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Our Story</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-left text-3xl sm:text-4xl font-black tracking-tighter text-zinc-900 uppercase mb-2 leading-[1.05] reveal-up delay-200">
            Get to know <br/>
            <span className="relative inline-block mt-1 text-orange-600">
              Lucky Computers
              <span className="absolute bottom-1.5 left-0 w-full h-2 bg-orange-200/50 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
        </div>

        {/* --- LEFT SIDE: Company Profile Content (Order 3 on mobile, Order 1 on Desktop) --- */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-3 lg:order-1">
          
          {/* --- DESKTOP HEADER: Only visible on large screens --- */}
          <div className="hidden lg:block">
            {/* Badge */}
            <div className="mb-4 flex items-center gap-3 reveal-up delay-100">
              <div className="flex h-6 w-6 items-center justify-center bg-orange-600 text-white shadow-lg shadow-orange-600/30">
                <Target className="h-3 w-3" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Our Story</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-left text-5xl font-black tracking-tighter text-zinc-900 uppercase mb-5 leading-[1.05] reveal-up delay-200">
              Get to know <br/>
              <span className="relative inline-block mt-1 text-orange-600">
                Lucky Computers
                <span className="absolute bottom-1.5 left-0 w-full h-2 bg-orange-200/50 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
          </div>
          
          {/* Description Body (Shared across mobile and desktop) */}
          <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-[15px] font-medium text-zinc-600 reveal-up delay-300">
            <p className="leading-relaxed">
              <strong className="text-zinc-900 font-black">LUCKY COMPUTERS</strong> was founded with a mission to provide affordable and expert computer repair services to our community. With a passion for tech and a heart for helping people, we specialize in refurbished systems, fast repairs, and data recovery.
            </p>

            <p className="leading-relaxed">
              Our customers are our top priority, and we strive to deliver reliable solutions every time. We believe in building long-term relationships through honest service and transparent pricing.
            </p>
            
            {/* High-Contrast Location Card */}
            <div className="mt-5 sm:mt-6 p-4 sm:p-5 bg-zinc-950 border-l-4 border-orange-600 shadow-xl flex gap-4 items-start group hover:bg-zinc-900 transition-all duration-300 hover:translate-x-2 reveal-up delay-400">
              <div className="p-2 bg-zinc-800/50 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-orange-500" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base mb-1 uppercase tracking-tight group-hover:text-orange-500 transition-colors">Our Hardware Lab</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Located in the heart of Kukatpally, near <span className="text-zinc-100 font-bold border-b border-orange-600/50 pb-0.5">Metro Station Pillar No. 808</span>, our team of qualified technicians has been serving Hyderabad with dedication and technical expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Animated Profile Imagery (Order 2 on mobile, Order 2 on Desktop) --- */}
        <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[480px] flex-shrink-0 group animate-float-ambient order-2 lg:order-2">
          
          {/* Architectural Backdrop Frame */}
          <div className="absolute top-5 right-5 left-0 bottom-5 bg-zinc-300 border border-zinc-400 transition-transform duration-700 group-hover:-translate-x-3 group-hover:translate-y-3 z-0"></div>
          
          {/* Main Primary Image (anchored to the right) */}
          <div className="absolute top-0 right-0 w-[92%] h-[92%] z-10 overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
            <img 
              src={imgA1} 
              alt="Lucky Computers Inside Setup" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Orange Accent Overlay Tab */}
            <div className="absolute top-0 right-0 w-2 h-14 bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.8)]"></div>

            {/* Subtle bottom gradient so the floating stats card reads cleanly */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950/70 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Stats Card — replaces the standalone stats row to save space */}
          <div className="absolute bottom-2 left-0 sm:bottom-4 sm:left-2 z-30 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 border-l-4 border-l-orange-600 shadow-[0_15px_40px_rgba(0,0,0,0.45)] flex items-center divide-x divide-zinc-800 transition-transform duration-500 group-hover:-translate-y-2 reveal-up delay-400">
            
            <div className="px-4 py-3 sm:px-5 sm:py-3.5">
              <p className="text-xl sm:text-2xl font-black text-white tracking-tighter leading-none">10k<span className="text-orange-500">+</span></p>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Repairs Done</p>
            </div>
            
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-2.5">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-orange-600/15 text-orange-500 shrink-0">
                <Wrench className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-black text-white uppercase tracking-tight leading-none">Expert</p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Technicians</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}