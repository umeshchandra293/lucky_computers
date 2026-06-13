"use client";

import { useState } from 'react';
import { 
  Cpu, ArrowUpRight, Wrench, ShieldCheck, 
  HardDrive, Wifi, Settings, MonitorPlay, Laptop, ChevronDown, ChevronUp
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import imgS1 from '../assets/S1.png';
import imgS3 from '../assets/S3.jpg';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  img: string;
  gridClass: string;
  overlay: string;
  isOrange: boolean;
  alwaysColored?: boolean;
}

export default function Services() {
  const [isExpanded, setIsExpanded] = useState(false);

  const services: ServiceItem[] = [
    {
      id: 'refurb',
      title: "Refurbished, Sales & Services",
      desc: "Quality refurbished desktops, laptops, and Apple products at affordable prices. We ensure all products are thoroughly tested and come with a warranty.",
      icon: Laptop,
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2",
      overlay: "bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20 group-hover:via-zinc-950/60",
      isOrange: false,
      alwaysColored: true,
    },
    {
      id: 'malware',
      title: "Malware Removal",
      desc: "Complete virus and malware removal services using professional tools to eliminate threats.",
      icon: ShieldCheck,
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    },
    {
      id: 'repairs',
      title: "PC & Laptop Repairs",
      desc: "Expert hardware and software repairs. Fast diagnostics and efficient solutions.",
      icon: Wrench,
      img: imgS1,
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/40",
      isOrange: false,
    },
    {
      id: 'data',
      title: "Data Recovery",
      desc: "Professional data recovery for corrupted drives, deletions, and secure backups.",
      icon: HardDrive,
      img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    },
    {
      id: 'upgrades',
      title: "Computer Upgrades",
      desc: "RAM upgrades, SSD installations, and other hardware enhancements.",
      icon: Cpu,
      img: imgS3,
      gridClass: "col-span-1",
      overlay: "bg-orange-600/90 mix-blend-multiply group-hover:bg-orange-600/70",
      isOrange: true,
    },
    {
      id: 'network',
      title: "Network Setup",
      desc: "Home and office network configuration, WiFi setup, and troubleshooting.",
      icon: Wifi,
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
      gridClass: "col-span-1 md:col-span-2",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    },
    {
      id: 'os',
      title: "OS Installation",
      desc: "Clean installation and configuration of Windows, Linux, and MacOS.",
      icon: MonitorPlay,
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    },
    {
      id: 'maint',
      title: "Preventive Maint.",
      desc: "Regular maintenance services to keep your systems running smoothly.",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    }
  ];

  return (
    <div className="w-full bg-zinc-200 relative">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
      </div>

      <section id="services" className="relative z-10 px-4 py-12 lg:px-12 lg:py-16 max-w-[1440px] mx-auto">
        
        {/* --- SHARP ARCHITECTURAL HEADER --- */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6">
          <div className="text-left w-full md:w-1/2">
            <div className="mb-3 flex items-center justify-start gap-2 text-[9px] font-black uppercase tracking-widest text-orange-600">
              <Settings className="h-3.5 w-3.5" />
              <span className="tracking-[0.2em]">Our Capabilities</span>
            </div>
            
            <h2 className="text-3xl lg:text-[3.25rem] font-black text-zinc-900 leading-[0.85] tracking-tighter uppercase">
              Specialized <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #18181b' }}>Services</span>
            </h2>
          </div>

          <div className="text-left w-full md:w-[45%] flex flex-col justify-end pb-1">
            <p className="text-[11px] md:text-xs text-zinc-600 font-medium pl-3 border-l-2 border-orange-600">
              Comprehensive tech solutions engineered for precision. From structural hardware revival to deep data forensics, we deliver unmatched technical expertise.
            </p>
          </div>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 auto-rows-[minmax(220px,auto)]">
          {services.map((card, index) => {
            const Icon = card.icon;
            const isLarge = card.id === 'refurb';
            
            const isExtraCard = index >= 3;
            const hideOnMobile = !isExpanded && isExtraCard;
            const animateOnMobile = isExpanded && isExtraCard;

            return (
              <div
                key={card.id}
                // We use the new plugin classes here: animate-in, fade-in, slide-in-from-bottom-8
                className={`group relative overflow-hidden bg-zinc-950 ${card.gridClass} 
                  ${hideOnMobile ? 'hidden md:block' : 'block'} 
                  ${animateOnMobile ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 md:animate-none' : ''}
                `}
                // This inline style dynamically staggers the delay so they drop in one-by-one!
                style={animateOnMobile ? { animationFillMode: 'both', animationDelay: `${(index - 3) * 150}ms` } : {}}
              >
                <LazyLoadImage
                  src={card.img}
                  alt={card.title}
                  effect="blur"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
                    card.alwaysColored
                      ? "opacity-100 grayscale-0"
                      : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                  }`}
                  wrapperClassName="absolute inset-0 h-full w-full"
                  threshold={300}
                />

                <div className={`absolute inset-0 transition-colors duration-500 ${card.overlay}`} />

                <div className="absolute top-5 left-5 flex gap-1 z-20">
                  <div className={`h-1 w-1 rounded-full ${card.isOrange ? 'bg-white/50' : 'bg-orange-500/50'}`} />
                  <div className={`h-1 w-1 rounded-full ${card.isOrange ? 'bg-white/30' : 'bg-zinc-500/50'}`} />
                </div>

                <div className="absolute top-5 right-5 z-20 overflow-hidden">
                  <ArrowUpRight className={`h-5 w-5 transform translate-y-6 -translate-x-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 ${card.isOrange ? 'text-white' : 'text-orange-500'}`} />
                </div>

                <div className={`relative h-full w-full flex flex-col p-5 sm:p-6 z-10 ${isLarge ? 'justify-end' : 'justify-between'}`}>

                  <div className={isLarge ? 'mb-auto pt-4' : 'mb-4'}>
                    <Icon className={`h-8 w-8 lg:h-9 lg:w-9 transition-transform duration-500 group-hover:scale-110 ${card.isOrange ? 'text-white' : 'text-orange-500'}`} />
                  </div>

                  <div className="mt-auto">
                    <h3 className={`font-black uppercase tracking-tight text-white ${isLarge ? 'text-2xl lg:text-[1.75rem] mb-2 lg:mb-3 leading-tight' : 'text-base lg:text-lg mb-1.5'}`}>
                      {card.title}
                    </h3>
                    <p className={`text-[11px] lg:text-xs font-medium leading-relaxed max-w-[280px] transition-colors duration-500 ${card.isOrange ? 'text-orange-100' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                      {card.desc}
                    </p>
                  </div>

                </div>

                <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 ease-out group-hover:w-full ${card.isOrange ? 'bg-white' : 'bg-orange-500'}`} />
              </div>
            );
          })}
        </div>

        {/* --- MOBILE "VIEW MORE" BUTTON --- */}
        <div className="mt-6 flex justify-center md:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex h-12 items-center gap-2 bg-zinc-950 px-6 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-orange-600 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            {isExpanded ? 'View Less' : 'View All Services'}
            {isExpanded ? (
              <ChevronUp className="h-3.5 w-3.5 text-orange-500 group-hover:text-white transition-colors" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-orange-500 group-hover:text-white transition-colors" />
            )}
          </button>
        </div>

      </section>
    </div>
  );
}