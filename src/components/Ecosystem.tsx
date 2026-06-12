import { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Keyboard, Fingerprint } from 'lucide-react';
import ecoImg from '../assets/ECO.png';

export default function Ecosystem() {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const introRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntroVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } 
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative overflow-hidden bg-zinc-950">
      
      {/* --- ANIMATION STYLES --- */}
      <style>
        {`
          /* Scroll Reveal Effects */
          .scroll-reveal { opacity: 0; transform: translateY(15px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
          .scroll-scale { opacity: 0; transform: scale(0.95); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
          
          .active-scrolled .scroll-reveal { opacity: 1; transform: translateY(0); }
          .active-scrolled .scroll-scale { opacity: 1; transform: scale(1); }

          .active-scrolled .delay-100 { transition-delay: 100ms; }
          .active-scrolled .delay-200 { transition-delay: 200ms; }
          .active-scrolled .delay-300 { transition-delay: 300ms; }

          /* Background Grid Parallax */
          @keyframes gridMove {
            0% { transform: translateY(0); }
            100% { transform: translateY(32px); }
          }
          .animate-grid { animation: gridMove 2s linear infinite; }

          /* 3D Hardware Float */
          @keyframes float3d {
            0%, 100% { transform: translateY(0) rotateX(1deg) rotateY(-1deg); }
            50% { transform: translateY(-8px) rotateX(-1deg) rotateY(1deg); }
          }
          .animate-3d-float { animation: float3d 6s ease-in-out infinite; transform-style: preserve-3d; }

          /* Holographic Diagnostics Scanline */
          @keyframes scanline {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          .animate-scan { animation: scanline 3s linear infinite; }

          /* Masked grid — fades out toward the edges so it doesn't look like wallpaper */
          .grid-mask {
            -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%);
            mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%);
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-grid, .animate-3d-float, .animate-scan { animation: none; }
            .scroll-reveal, .scroll-scale { transition: none; opacity: 1; transform: none; }
          }
        `}
      </style>

      {/* --- BACKGROUND ELEMENTS (Layered for depth, not flat black) --- */}
      
      {/* 1. Vertical depth gradient: lighter at top, darkest at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black pointer-events-none z-0"></div>

      {/* 2. Radial spotlight behind the hero image — focuses the eye on the hardware */}
      <div className="absolute inset-0 pointer-events-none z-0"
           style={{ background: 'radial-gradient(ellipse 60% 45% at 50% 48%, rgba(234,88,12,0.08), transparent 70%)' }}>
      </div>

      {/* 3. Hairline top border to crisply separate from the light section above */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/50 to-transparent z-10"></div>

      {/* 4. Moving Tech Grid — now masked so it fades at the edges */}
      <div className="absolute inset-[-100%] opacity-[0.05] pointer-events-none z-0 animate-grid grid-mask" 
           style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* 5. Ambient corner glows (subtle, asymmetric) */}
      <div className="absolute top-[35%] right-[-12%] w-[55vw] max-w-[520px] aspect-[5/3] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none z-0 transform -rotate-45"></div>
      <div className="absolute bottom-[-10%] left-[-12%] w-[40vw] max-w-[400px] aspect-square bg-orange-500/[0.06] blur-[110px] rounded-full pointer-events-none z-0"></div>

      {/* 6. Edge vignette — darkens the corners so content pops in the center */}
      <div className="absolute inset-0 pointer-events-none z-0"
           style={{ background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.5) 100%)' }}>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <section 
        ref={introRef}
        className={`relative z-10 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 ${
          isIntroVisible ? 'active-scrolled' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          
          {/* --- SPLIT HEADER SECTION --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-8 sm:mb-10 lg:mb-12 gap-6 md:gap-8">
            
            {/* Left Side: Headline */}
            <div className="text-left w-full md:w-1/2">
              <div className="mb-3 sm:mb-4 flex items-center justify-start gap-2 text-[10px] font-black uppercase tracking-widest text-orange-500 scroll-reveal">
                <Fingerprint className="h-4 w-4" />
                <span className="tracking-[0.2em]">The Complete Ecosystem</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-6xl xl:text-[4rem] font-black text-white leading-[0.9] lg:leading-[0.85] tracking-tighter scroll-reveal delay-100 uppercase">
                We Repair.<br />
                We Upgrade.
              </h3>
            </div>

            {/* Right Side: Continuation */}
            <div className="text-left w-full md:w-[45%] flex flex-col">
              <h3 className="text-3xl sm:text-4xl lg:text-6xl xl:text-[4rem] font-black text-transparent italic leading-[0.9] lg:leading-[0.85] tracking-tighter mb-3 sm:mb-4 scroll-reveal delay-200 uppercase" style={{ WebkitTextStroke: '1.5px #f97316' }}>
                We Equip.
              </h3>
              
              {/* Sharp left-bordered description */}
              <p className="text-xs md:text-sm text-zinc-400 font-medium scroll-reveal delay-300 pl-4 border-l-2 border-orange-600">
                If it processes data, we handle it. From reviving core structural hardware to arming you with premium precision peripherals.
              </p>
            </div>

          </div>

          {/* --- CENTER HERO IMAGE WITH DIAGNOSTIC SCANNER --- */}
          <div className="w-full max-w-4xl relative my-2 sm:my-4 scroll-scale delay-200 z-20 perspective-[1000px]">
            <div className="animate-3d-float relative">
              
              {/* Soft reflection/glow pad under the hardware */}
              <div className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[80%] h-10 sm:h-14 bg-orange-600/15 blur-2xl rounded-[100%] pointer-events-none"></div>

              {/* Diagnostic Laser Scanline Container */}
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden mix-blend-overlay rounded-xl">
                <div className="w-full h-0.5 bg-orange-400 shadow-[0_0_20px_4px_#ea580c] animate-scan absolute left-0"></div>
                <div className="w-full h-12 bg-gradient-to-b from-transparent to-orange-500/20 animate-scan absolute left-0 -translate-y-full"></div>
              </div>

              {/* The Hardware Image */}
              <img
                src={ecoImg}
                alt="Hardware and Peripherals Ecosystem Layout"
                className="w-full h-auto object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* --- BOTTOM FEATURES GRID (Left-Aligned) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full mt-8 sm:mt-10 relative z-10">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-start text-left group scroll-reveal delay-100 p-4 sm:p-5 rounded-xl hover:bg-zinc-900/60 transition-colors border border-zinc-900/80 sm:border-transparent sm:hover:border-zinc-800 bg-zinc-900/30 sm:bg-transparent">
              <div className="flex-shrink-0 w-10 h-10 bg-zinc-950 border border-zinc-800 shadow-xl flex items-center justify-center rounded-lg text-zinc-500 mb-3 sm:mb-4 transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                <Monitor className="w-4 h-4" />
              </div>
              <h4 className="text-zinc-100 font-black text-sm uppercase tracking-tight mb-1.5">Systems & Laptops</h4>
              <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">
                Advanced board diagnostics, thermal optimization, and high-performance custom builds.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-start text-left group scroll-reveal delay-200 p-4 sm:p-5 rounded-xl hover:bg-zinc-900/60 transition-colors border border-zinc-900/80 sm:border-transparent sm:hover:border-zinc-800 bg-zinc-900/30 sm:bg-transparent">
              <div className="flex-shrink-0 w-10 h-10 bg-zinc-950 border border-zinc-800 shadow-xl flex items-center justify-center rounded-lg text-zinc-500 mb-3 sm:mb-4 transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                <Smartphone className="w-4 h-4" />
              </div>
              <h4 className="text-zinc-100 font-black text-sm uppercase tracking-tight mb-1.5">Mobile Devices</h4>
              <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">
                Precision micro-soldering, flawless screen architecture, and secure deep data extraction.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-start text-left group scroll-reveal delay-300 p-4 sm:p-5 rounded-xl hover:bg-zinc-900/60 transition-colors border border-zinc-900/80 sm:border-transparent sm:hover:border-zinc-800 bg-zinc-900/30 sm:bg-transparent sm:col-span-2 md:col-span-1">
              <div className="flex-shrink-0 w-10 h-10 bg-zinc-950 border border-zinc-800 shadow-xl flex items-center justify-center rounded-lg text-zinc-500 mb-3 sm:mb-4 transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                <Keyboard className="w-4 h-4" />
              </div>
              <h4 className="text-zinc-100 font-black text-sm uppercase tracking-tight mb-1.5">Premium Gear</h4>
              <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">
                Vetted performance mechanical keyboards, precision hardware tracking mice, and high-speed storage.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}