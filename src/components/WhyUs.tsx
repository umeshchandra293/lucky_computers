"use client";

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import {
  Server,
  Shield,
  Star,
  BadgeCheck,
  Cpu,
  Lock,
  Users,
  Zap,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

/* ============================================================
   DATA
   One list, one voice — replaces the overlapping "why us" copy
   that used to live in three separate sections.
   ============================================================ */
interface Reason {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const REASONS: Reason[] = [
  {
    icon: BadgeCheck,
    title: 'Trusted Experts',
    desc: 'Certified technicians with deep knowledge of board-level diagnostics and complex IT infrastructure.',
  },
  {
    icon: Cpu,
    title: 'Quality Repairs',
    desc: 'Strictly vetted OEM components and rigorous stress-testing on every repair before handover.',
  },
  {
    icon: Lock,
    title: 'Data Security',
    desc: 'Military-grade secure protocols protect your sensitive files throughout the repair process.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'Downtime costs you money and peace of mind — most repairs are diagnosed and quoted same day.',
  },
  {
    icon: Users,
    title: 'Transparent Pricing',
    desc: 'No surprise fees. We diagnose openly, quote upfront, and explain every line before we touch a screw.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/* ============================================================
   COMPONENT
   ============================================================ */
export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white pt-4 pb-16 sm:pt-6 sm:pb-20 px-5 sm:px-8"
    >
      {/* Ambient glow — consistent with site-wide background language */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-10%] top-[10%] h-[40vw] w-[40vw] max-h-[420px] max-w-[420px] rounded-full bg-blue-400/15 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:mb-14"
        >
          <div>
            <div className="mb-2 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
              <Server className="h-3.5 w-3.5" />
              <span>The Lucky Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none text-slate-900">
              Why Choose <br className="sm:hidden" />
              <span className="text-blue-600">Lucky Computers.</span>
            </h2>
          </div>

          <p className="max-w-md border-l-2 border-blue-200 pl-3 text-sm font-medium leading-relaxed text-slate-600">
            We don&rsquo;t just fix devices, We engineer reliability, backed by honest pricing and long-term relationships with every customer.
          </p>
        </motion.div>

        {/* ================= MAIN LAYOUT: TRUST PANEL + REASON LIST ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">

          {/* ---------- LEFT: DARK TRUST PANEL (signature element) ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-950 p-6 text-white shadow-xl lg:col-span-4 lg:p-8"
          >
            {/* Faded shield watermark */}
            <div className="absolute -right-12 -top-12 opacity-[0.04] transition-transform duration-700 group-hover:scale-110">
              <Shield className="h-64 w-64" />
            </div>

            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">The Lucky Promise</span>
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-[0.95] tracking-tighter lg:text-3xl">
                Built on Trust.{' '}
                <span className="text-slate-500">Engineered for Performance.</span>
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-400">
                Your devices hold your digital life — we treat every repair with the respect that demands, backed by transparent pricing from quote to handover.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-800 pt-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                ))}
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-white">10,000+ Repairs</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Trusted in Hyderabad</p>
              </div>
            </div>
          </motion.div>

          {/* ---------- RIGHT: REASON ROWS (scannable, single numbering system) ---------- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-8"
          >
            {REASONS.map((reason, idx) => (
              <motion.div
                key={reason.title}
                variants={rowVariants}
                className={`group relative flex items-start gap-4 overflow-hidden px-4 py-4 transition-colors duration-300 hover:bg-blue-50/40 sm:items-center sm:px-6 sm:py-5 ${
                  idx !== REASONS.length - 1 ? 'border-b border-slate-100' : ''
                }`}
              >
                {/* Left hover accent wire */}
                <div className="absolute left-0 top-0 bottom-0 w-1 origin-top scale-y-0 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-y-100" />

                {/* Index */}
                <span className="w-6 shrink-0 text-right text-sm font-black tabular-nums text-slate-300 transition-colors duration-300 group-hover:text-blue-600 sm:w-8 sm:text-base">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600">
                  <reason.icon className="h-4 w-4 text-blue-600 transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
                </div>

                {/* Title + desc */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 sm:text-[15px]">
                    {reason.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] font-medium leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-700 sm:text-xs sm:max-w-md">
                    {reason.desc}
                  </p>
                </div>

                {/* Arrow affordance */}
                <div className="hidden h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 lg:flex">
                  <ArrowRight className="h-3 w-3 -translate-x-4 text-slate-400 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}