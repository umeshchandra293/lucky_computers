"use client";

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion';
import { 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Fan, 
  Smartphone, 
  MonitorX, 
  Check, 
  ShieldCheck, 
  ChevronDown,
  type LucideIcon 
} from 'lucide-react';

import keyboardImg from '../assets/LC3.webp';

type ServiceProtocol = {
  id: string;
  icon: LucideIcon;
  label: string;
  verdict: string;
  urgent?: boolean;
  steps: string[];
};

const SERVICES: ServiceProtocol[] = [
  { id: 'board', icon: Cpu, label: 'Motherboard', verdict: 'Micro-soldering brings dead boards back to life.', steps: ['Bench Diagnosis', 'Micro-soldering', 'Load-testing'] },
  { id: 'storage', icon: HardDrive, label: 'Data Recovery', verdict: 'Stop using the drive. We extract lost files.', urgent: true, steps: ['Media Assessment', 'Forensic Extraction', 'Secure Transfer'] },
  { id: 'ram', icon: MemoryStick, label: 'Speed Upgrades', verdict: 'RAM + NVMe SSDs make ageing machines fast.', steps: ['Compatibility Check', 'Clean OS Install', 'Benchmarking'] },
  { id: 'fan', icon: Fan, label: 'Thermal Systems', verdict: 'Fix random shutdowns and overheating.', steps: ['Deep Clean', 'Thermal Repaste', 'Stress Testing'] },
  { id: 'phone', icon: Smartphone, label: 'Mobile Bench', verdict: 'Phones serviced on the same precision bench.', steps: ['Board Diagnosis', 'Component Repair', 'Moisture Test'] },
  { id: 'screen', icon: MonitorX, label: 'Screen Repair', verdict: 'Cracked displays swapped quickly and affordably.', steps: ['Panel Diagnosis', 'Genuine Swap', 'Calibration'] },
];

const MOBILE_INITIAL_COUNT = 3;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
};

/* ============================================================
   SERVICE CARD
   ============================================================ */
function ServiceCard({ service }: { service: ServiceProtocol }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <service.icon className="h-4 w-4" strokeWidth={2} />
            </div>
            <h3 className="text-sm font-black uppercase tracking-tight text-slate-900">
              {service.label}
            </h3>
          </div>
          {service.urgent && (
            <span className="shrink-0 rounded bg-rose-50 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-rose-600">
              Urgent
            </span>
          )}
        </div>

        <p className="mb-5 text-xs font-medium leading-relaxed text-slate-500">
          {service.verdict}
        </p>
      </div>

      <div className="border-t border-slate-100 pt-3">
        <ul className="flex flex-col gap-2">
          {service.steps.map((step, i) => (
            <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
              <Check className="h-3.5 w-3.5 text-blue-500" strokeWidth={3} />
              {step}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function DiagnosticServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-20px' });
  const [showAll, setShowAll] = useState(false);

  return (
    <section 
      ref={sectionRef} 
      id="ecosystem" 
      className="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-blue-50/30 to-white pb-16 pt-4 sm:pt-8"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="shrink-0"
          >
            <div className="mb-2 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
              <ShieldCheck className="h-3.5 w-3.5" /> 
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl font-black uppercase leading-none tracking-tight text-slate-900 sm:text-4xl">
              Hardware Mastery<span className="text-blue-600">.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="max-w-[480px] text-sm font-medium leading-relaxed text-slate-500 md:text-right"
          >
            We don&rsquo;t just replace parts,We repair them. From dead logic boards to complex data recovery, our bench is equipped for absolute precision.
          </motion.p>
        </div>

        {/* ================= KEYBOARD BANNER ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-10 w-full max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
            <div className="flex h-28 items-center justify-center overflow-hidden rounded-xl bg-black sm:h-36 md:h-48">
              <img 
                src={keyboardImg} 
                alt="Lucky Computers Keyboard" 
                className="w-full object-cover opacity-90 transition-transform duration-700 hover:scale-[1.03]" 
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          </div>
        </motion.div>

        {/* ===== DESKTOP GRID: always show all 6 ===== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* ===== MOBILE GRID: show 3 initially, rest on expand ===== */}
        <div className="sm:hidden">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 gap-4"
          >
            {SERVICES.slice(0, MOBILE_INITIAL_COUNT).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>

          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 gap-4 overflow-hidden pt-4"
              >
                {SERVICES.slice(MOBILE_INITIAL_COUNT).map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-5 flex justify-center"
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-900 shadow-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-lg active:scale-95"
            >
              <span>{showAll ? 'Show Less' : 'View More'}</span>
              <ChevronDown 
                className={`h-3.5 w-3.5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
              />
            </button>
          </motion.div>
        </div>


      </div>
    </section>
  );
}