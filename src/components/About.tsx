"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Target,
  MapPin,
  Wrench,
} from 'lucide-react';

import imgA1 from '../assets/A1.png';

/* ============================================================
   COMPONENT
   ============================================================ */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-40px' });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pb-8 pt-4 sm:pb-10 sm:pt-6"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-12%] top-[20%] h-[50vw] w-[50vw] max-h-[500px] max-w-[500px] rounded-full bg-blue-400/15 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[10%] h-[35vw] w-[35vw] max-h-[350px] max-w-[350px] rounded-full bg-indigo-400/10 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="shrink-0"
          >
            <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
              <Target className="h-3.5 w-3.5" />
              <span>Our Story</span>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-[1.05]">
              Get to know <br />
              <span className="text-blue-600">Lucky Computers.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="max-w-md text-sm font-medium leading-relaxed text-slate-500 md:text-right"
          >
            Founded with a mission to deliver affordable, expert computer repair. We believe in long-term relationships through honest service and transparent pricing.
          </motion.p>
        </div>

        {/* ================= ABOUT CONTENT: IMAGE + TEXT ================= */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-14 lg:items-center">

          {/* Image block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="relative w-full lg:w-1/2 shrink-0"
          >
            <div className="group relative">
              {/* Offset frame */}
              <div className="absolute top-4 right-4 left-0 bottom-0 rounded-2xl bg-slate-200 border border-slate-300 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl">
                <img
                  src={imgA1}
                  alt="Lucky Computers workshop"
                  className="w-full h-[260px] sm:h-[340px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Accent strip */}
                <div className="absolute top-0 right-0 w-1.5 h-12 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
              </div>

              {/* Floating stat card */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-4 z-20 flex items-center divide-x divide-slate-700 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <div className="px-4 py-3 sm:px-5">
                  <p className="text-xl sm:text-2xl font-black text-white tracking-tighter leading-none">10k<span className="text-blue-500">+</span></p>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Repairs Done</p>
                </div>
                <div className="px-4 py-3 sm:px-5 flex items-center gap-2.5">
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-600/15 text-blue-500 shrink-0">
                    <Wrench className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-black text-white uppercase tracking-tight leading-none">Expert</p>
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Technicians</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="space-y-4 text-sm sm:text-[15px] font-medium text-slate-600">
              <p className="leading-relaxed">
                <strong className="text-slate-900 font-black">LUCKY COMPUTERS</strong> was founded with a mission to provide affordable and expert computer repair services to our community. With a passion for tech and a heart for helping people, we specialize in refurbished systems, fast repairs, and data recovery.
              </p>
              <p className="leading-relaxed">
                Our customers are our top priority, and we strive to deliver reliable solutions every time. We believe in building long-term relationships through honest service and transparent pricing.
              </p>
            </div>

            {/* Location card */}
            <div className="mt-6 flex gap-4 items-start rounded-xl bg-slate-950 border border-slate-800 border-l-4 border-l-blue-600 p-4 sm:p-5 shadow-xl group hover:bg-slate-900 transition-all duration-300">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base mb-1 uppercase tracking-tight group-hover:text-blue-500 transition-colors">Our Hardware Lab</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Located in the heart of Kukatpally, near <span className="text-slate-100 font-bold border-b border-blue-600/50 pb-0.5">Metro Station Pillar No. 808</span>, our team of qualified technicians has been serving Hyderabad with dedication and technical expertise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}