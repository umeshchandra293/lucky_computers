"use client";

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Fan, 
  Smartphone, 
  MonitorX, 
  Check, 
  ShieldCheck, 
  ArrowUpRight, 
  type LucideIcon 
} from 'lucide-react';

import keyboardImg from '../assets/LC3.webp';

const WA = '919999999999';

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

const STATS = [
  { v: '10,000+', l: 'Devices revived' },
  { v: '95%', l: 'Same-day fixes' },
  { v: '10+', l: 'Years in Hyderabad' },
];

function waLink(label: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(`Hi Lucky Computers, I need help with: ${label}.`)}`;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
};

export default function DiagnosticServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-20px' });

  return (
    <section 
      ref={sectionRef} 
      id="ecosystem" 
      // Pulled right up to the previous section with minimal top padding
      className="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-blue-50/30 to-white pb-16 pt-4 sm:pt-8"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* ================= SHARP, COMPACT HEADER ================= */}
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
            // Clean, professional sans-serif text. No doodles.
            className="max-w-[480px] text-sm font-medium leading-relaxed text-slate-500 md:text-right"
          >
            We don't just replace parts—we repair them. From dead logic boards to complex data recovery, our bench is equipped for absolute precision.
          </motion.p>
        </div>

        {/* ================= SLIM KEYBOARD BANNER ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          // Constrained width and height to keep it out of the way
          className="mx-auto mb-10 w-full max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
            <div className="flex h-28 items-center justify-center overflow-hidden rounded-xl bg-black sm:h-36 md:h-48">
              <img 
                src={keyboardImg} 
                alt="Lucky Computers Keyboard" 
                className="w-full object-cover opacity-90 transition-transform duration-700 hover:scale-[1.03]" 
                style={{ objectPosition: 'center 40%' }} // Focuses on the keys
              />
            </div>
          </div>
        </motion.div>

        {/* ================= HIGH-DENSITY SERVICES GRID ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
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
          ))}
        </motion.div>

        {/* ================= COMPACT TRUST STRIP ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm sm:flex-row sm:px-8"
        >
          <div className="flex w-full justify-between sm:w-auto sm:gap-10">
            {STATS.map((st) => (
              <div key={st.l} className="text-center sm:text-left">
                <div className="text-lg font-black tracking-tight text-slate-900">{st.v}</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{st.l}</div>
              </div>
            ))}
          </div>
          
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />
          
          <div className="flex w-full items-center justify-between sm:w-auto sm:gap-6">
            <p className="text-xs font-medium text-slate-500 sm:max-w-[180px]">
              Need a custom <span className="font-bold text-slate-900">upgrade</span> or <span className="font-bold text-slate-900">build</span>?
            </p>
            <a 
              href={waLink('bench consult')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-600"
            >
              Consult Us
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}