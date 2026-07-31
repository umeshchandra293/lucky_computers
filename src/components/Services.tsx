"use client";

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  Wrench, 
  Wifi, 
  MonitorPlay, 
  Settings, 
  Laptop,
  ArrowRight
} from 'lucide-react';

/* ============================================================
   SERVICE DATA
   ============================================================ */
const SERVICES = [
  {
    id: 'repairs',
    title: "PC & Laptop Repairs",
    desc: "Expert hardware and software repairs. Fast diagnostics and efficient, long-lasting solutions.",
    icon: Wrench,
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'data',
    title: "Data Recovery",
    desc: "Professional forensic data recovery for corrupted drives, accidental deletions, and secure backups.",
    icon: HardDrive,
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'upgrades',
    title: "Performance Upgrades",
    desc: "RAM expansions, NVMe SSD installations, and GPU upgrades to breathe new life into aging systems.",
    icon: Cpu,
    img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'malware',
    title: "Malware Removal",
    desc: "Deep system cleanses using enterprise-grade tools to eliminate viruses, ransomware, and spyware.",
    icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'refurb',
    title: "Refurbished Sales",
    desc: "Quality refurbished desktops, laptops, and Apple products. Rigorously tested and warranty-backed.",
    icon: Laptop,
    img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'network',
    title: "Network Architecture",
    desc: "Home and office network configuration, mesh WiFi setup, and secure routing troubleshooting.",
    icon: Wifi,
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'os',
    title: "OS Installation",
    desc: "Clean installation, formatting, and flawless configuration of Windows, Linux, and MacOS systems.",
    icon: MonitorPlay,
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'maint',
    title: "Preventive Maint.",
    desc: "Thermal paste replacement, deep dust cleaning, and regular checkups to prevent hardware failure.",
    icon: Settings,
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  }
];

// Framer Motion Variants for staggered entry
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 120, damping: 20 } 
  }
};

export default function ServicesImageGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section 
      ref={sectionRef}
      id="services" 
      // Reduced top padding (pt-8 sm:pt-10) to close the gap with the hero section
      className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-50/50 pb-16 pt-8 sm:pb-24 sm:pt-10"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');`}</style>
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* HEADER */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="shrink-0"
          >
            <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Core Capabilities
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Engineered <br />
              <span className="text-blue-600">Solutions.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            // Shifted slightly left (md:mr-12 lg:mr-24) and updated to doodle style
            className="max-w-md text-[clamp(1.2rem,2vw,1.5rem)] font-bold leading-snug text-slate-700 md:mr-12 md:text-left lg:mr-24"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Forget generic repairs. We operate a precision technical bench designed to salvage, restore, and upgrade hardware at the highest level.
          </motion.p>
        </div>

        {/* IMAGE CARD GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10"
            >
              {/* Card Image Header - Clear and Unfiltered */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-100 sm:h-40">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Icon with a subtle ring to pop against bright images */}
                <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
                  <service.icon className="h-5 w-5" strokeWidth={2} />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="mb-2 text-sm font-black uppercase tracking-tight text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium leading-relaxed text-slate-500">
                    {service.desc}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-5 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">View Protocol</span>
                  <ArrowRight className="h-3 w-3 text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}