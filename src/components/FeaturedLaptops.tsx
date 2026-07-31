"use client";

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Wallet, ShieldCheck, ArrowRight } from 'lucide-react';

interface BrandInventory {
  id: string;
  brand: string;
  lineup: string;
  desc: string;
  img: string;
  gridClass: string;
  badge: string;
}

const INVENTORY: BrandInventory[] = [
  {
    id: 'apple',
    brand: 'Apple',
    lineup: 'MacBook Pro & Air',
    desc: 'Unmatched silicon power and silent efficiency. Fully restored.',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    badge: 'Creator Choice',
    gridClass: 'md:col-span-2 md:row-span-1 min-h-[160px] md:min-h-[190px]', 
  },
  {
    id: 'lenovo',
    brand: 'Lenovo',
    lineup: 'ThinkPad Series',
    desc: 'Legendary durability and spill-resistant keyboards.',
    img: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=600',
    badge: 'Business Class',
    gridClass: 'md:col-span-1 md:row-span-1 min-h-[160px] md:min-h-[190px]', 
  },
  {
    id: 'dell',
    brand: 'Dell',
    lineup: 'Latitude & XPS',
    desc: 'Machined aluminum built for heavy multitasking.',
    img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600',
    badge: 'Heavy Duty',
    gridClass: 'md:col-span-1 md:row-span-1 min-h-[160px] md:min-h-[190px]', 
  },
  {
    id: 'hp',
    brand: 'HP',
    lineup: 'EliteBook Series',
    desc: 'Sleek, secure enterprise privacy in a lightweight body.',
    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=600',
    badge: 'Secure Value',
    gridClass: 'md:col-span-2 md:row-span-1 min-h-[160px] md:min-h-[190px]', 
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
};

export default function PremiumInventory() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section 
      ref={sectionRef} 
      id="inventory" 
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white pb-12 pt-4 sm:pb-16 sm:pt-6"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* ================= COMPACT HEADER ================= */}
        <div className="mb-8 flex flex-col items-start gap-3">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-1.5 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
              <Wallet className="h-3.5 w-3.5" /> 
              <span>Smart Investments</span>
            </div>
            <h2 className="text-2xl font-black uppercase leading-none tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Enterprise Grade<span className="text-blue-600">.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="max-w-xl text-xs sm:text-sm font-bold leading-relaxed text-black"
          >
            Get flagship reliability and performance without the showroom markup. Our rotating inventory is fully refurbished, rigorously tested, and built to last.
          </motion.p>
        </div>

        {/* ================= COMPACT BENTO GRID ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-3 lg:gap-4"
        >
          {INVENTORY.map((laptop) => (
            <motion.div 
              key={laptop.id}
              variants={itemVariants}
              className={`group relative flex flex-col justify-end overflow-hidden rounded-xl bg-slate-900 ${laptop.gridClass} shadow-sm`}
            >
              <img 
                src={laptop.img} 
                alt={`${laptop.brand} ${laptop.lineup}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />

              <div className="relative z-20 flex h-full flex-col justify-between p-4 sm:p-5">
                
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-widest text-white backdrop-blur-md ring-1 ring-white/20">
                    <ShieldCheck className="h-3 w-3 text-blue-400" />
                    {laptop.badge}
                  </div>
                </div>

                <div className="mt-4 transition-transform duration-500 ease-out sm:translate-y-3 sm:group-hover:translate-y-0">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">
                    {laptop.brand}
                  </span>
                  <h3 className="mt-0.5 text-lg font-black uppercase tracking-tight text-white sm:text-xl">
                    {laptop.lineup}
                  </h3>
                  
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out sm:group-hover:grid-rows-[1fr] sm:group-hover:opacity-100 sm:group-hover:mt-1.5">
                    <div className="overflow-hidden">
                      <p className="max-w-[90%] text-[11px] font-medium leading-snug text-slate-300">
                        {laptop.desc}
                      </p>
                    </div>
                  </div>

                  <p className="mt-1.5 max-w-[95%] text-[11px] font-medium leading-snug text-slate-300 sm:hidden">
                    {laptop.desc}
                  </p>
                </div>
                
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/0 transition-colors duration-500 group-hover:border-white/20" />
            </motion.div>
          ))}
        </motion.div>

        {/* ================= COMPACT INQUIRY CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 flex w-full flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:px-6"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <h4 className="text-xs font-black tracking-tight text-slate-900">Inventory constantly rotating.</h4>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Message us for today's available stock.</p>
            </div>
          </div>
          
          <a 
            href={`https://wa.me/919999999999?text=Hi,%20I'm%20looking%20for%20a%20refurbished%20laptop.`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex w-full shrink-0 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-600 sm:w-auto"
          >
            Check Availability
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}