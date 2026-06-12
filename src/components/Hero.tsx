import {  ArrowUpRight } from 'lucide-react';
import heroBg from '../assets/Bg1.jpg';

// Preload image so it's never dropped from memory
const preloadImg = new Image();
preloadImg.src = heroBg;

export default function Hero() {
  return (
    // Reduced from 100dvh/screen to 85dvh/90vh to decrease overall component height
    <main id="home" className="relative flex flex-col lg:flex-row min-h-[85dvh] lg:min-h-[90vh] w-full bg-zinc-200 overflow-hidden">
      {/* Inline styles for the word-by-word reveal animation */}
      <style>
        {`
          @keyframes revealWord {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-word {
            opacity: 0;
            animation: revealWord 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .delay-1 { animation-delay: 0.1s; }
          .delay-2 { animation-delay: 0.3s; }
          .delay-3 { animation-delay: 0.5s; }
          .delay-4 { animation-delay: 0.7s; }
        `}
      </style>

      {/* 
        Tightened top and bottom padding (pt-20 pb-20) to make the text block more compact.
      */}
      <div className="w-full lg:w-[55%] min-h-[85dvh] lg:min-h-0 flex flex-col justify-center pt-28 pb-20 lg:pt-36 lg:pb-16 px-6 lg:pl-16 lg:pr-12 relative z-10">
        


        {/* Word-by-word animated headline */}
        <h1 className="text-[3.5rem] font-black leading-[0.85] tracking-tighter text-zinc-900 md:text-[5rem] lg:text-[6rem] shrink-0">
          <span className="inline-block animate-word delay-1">BRING</span>{' '}
          <span className="inline-block animate-word delay-2">IT</span> <br />
          <span className="inline-block animate-word delay-3">BACK</span> <br className="lg:hidden" />
          <span 
            className="inline-block animate-word delay-4" 
            style={{ WebkitTextStroke: '2px #18181b', color: 'transparent' }}
          >
            ONLINE.
          </span>
        </h1>

        {/* Tighter margin top (mt-4 on both mobile and desktop) */}
        <p className="mt-4 max-w-xl text-lg font-medium text-zinc-600 shrink-0">
          We don't just replace parts. We engineer solutions. Component-level
          micro-soldering, data forensics, and extreme performance modifications.
        </p>

        {/* Tighter margin top for the buttons (mt-6 on both) */}
        <div className="mt-6 flex flex-wrap items-center gap-6 shrink-0">
          <a 
            href="https://www.google.com/maps/place/Lucky+Computers/@17.4848963,78.3941357,14z/data=!4m7!3m6!1s0x3bcb91ab6663e18b:0xc592e3ddcb1fd730!8m2!3d17.4847989!4d78.4122266!15sCg9sdWNreSBjb21wdXRlcnOSARpjb21wdXRlcl9hY2Nlc3Nvcmllc19zdG9yZaoBTBABKhMiD2x1Y2t5IGNvbXB1dGVycygAMh4QASIaT_cyiCf7Mq5CW2FHZ-FbdajzVjA-Coza9lcyExACIg9sdWNreSBjb21wdXRlcnPgAQA!16s%2Fg%2F11md3td0n4?entry=tts&g_ep=EgoyMDI1MDYyNi4wIPu8ASoASAFQAw%3D%3D&skid=c044e2f8-6b2c-4d52-8e2d-0515aac4ded8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center bg-orange-600 px-8 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-zinc-900"
          >
            Visit Our Store
            <ArrowUpRight className="ml-3 h-5 w-5" />
          </a>
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            Avg Turnaround: 24h
          </span>
        </div>
        
      </div>

      {/* Image column — absolute background on mobile, relative right column on desktop */}
      <div className="absolute inset-0 z-0 lg:relative lg:block lg:w-[45%]">
        <img
          src={heroBg}
          alt="Lucky Computers Hardware Lab"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        
        {/* Desktop gradient */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-zinc-200 via-zinc-200/20 to-transparent" />
        
        {/* Mobile gradient overlay: Fades from dark on the left to completely clear on the right */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-r from-zinc-200/95 via-zinc-200/60 to-transparent" />
      </div>
      
    </main>
  );
}