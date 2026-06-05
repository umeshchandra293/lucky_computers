import { Activity, ArrowUpRight } from 'lucide-react';
import heroBg from '../assets/Bg1.jpg';

// Preload image so it's never dropped from memory
const preloadImg = new Image();
preloadImg.src = heroBg;

export default function Hero() {
  return (
    <main id="home" className="flex flex-col lg:flex-row min-h-screen w-full bg-zinc-200">
      
      <div className="w-full lg:w-[55%] flex flex-col justify-center pt-32 lg:pt-40 px-6 pb-12 lg:pl-16 lg:pr-12 relative z-10">
        
        <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-orange-600 shrink-0">
          <Activity className="h-5 w-5" />
          <span>Emergency Repair Services Active</span>
        </div>

        <h1 className="text-[3.5rem] font-black leading-[0.85] tracking-tighter text-zinc-900 md:text-[5rem] lg:text-[6rem] shrink-0">
          BRING IT <br />
          BACK <br className="lg:hidden" />
          <span style={{ WebkitTextStroke: '2px #18181b', color: 'transparent' }}>ONLINE.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg font-medium text-zinc-600 shrink-0">
          We don't just replace parts. We engineer solutions. Component-level
          micro-soldering, data forensics, and extreme performance modifications.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6 shrink-0">
          <button className="flex h-14 items-center bg-orange-600 px-8 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-zinc-900">
            Start Diagnostic
            <ArrowUpRight className="ml-3 h-5 w-5" />
          </button>
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            Avg Turnaround: 24h
          </span>
        </div>
        
      </div>

      {/* Right image column — eager loaded, high priority, no transitions */}
      <div className="hidden lg:block lg:w-[45%] relative">
        <img
          src={heroBg}
          alt="Lucky Computers Hardware Lab"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 via-zinc-200/20 to-transparent" />
      </div>
      
    </main>
  );
}