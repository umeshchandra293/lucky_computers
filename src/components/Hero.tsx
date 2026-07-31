"use client";

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';
import { Cpu, HardDrive, MemoryStick, Fan, CircuitBoard, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Phase = 0 | 1 | 2 | 3;

/* ============================================================
   HERO SERVICE IMAGE
   ============================================================ */
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1721333089073-215a56fd710c?auto=format&fit=crop&w=1600&q=80';

/* ============================================================
   BACKGROUND AMBIENCE
   ============================================================ */

type FloaterCfg = { icon: LucideIcon; x: string; y: string; size: number; depth: number; dur: number };

const FLOATERS: FloaterCfg[] = [
  { icon: Cpu,          x: '6%',  y: '22%', size: 34, depth: 45, dur: 7 },
  { icon: HardDrive,    x: '90%', y: '18%', size: 30, depth: 65, dur: 9 },
  { icon: MemoryStick,  x: '9%',  y: '68%', size: 28, depth: 55, dur: 8 },
  { icon: Fan,          x: '88%', y: '62%', size: 36, depth: 38, dur: 10 },
  { icon: CircuitBoard, x: '22%', y: '9%',  size: 26, depth: 70, dur: 8.5 },
  { icon: Wrench,       x: '74%', y: '86%', size: 24, depth: 50, dur: 7.5 },
];

function Floater({ cfg, smx, smy, reduced, index }: {
  cfg: FloaterCfg; smx: MotionValue<number>; smy: MotionValue<number>;
  reduced: boolean; index: number;
}) {
  const px = useTransform(smx, (v) => v * cfg.depth);
  const py = useTransform(smy, (v) => v * cfg.depth);
  const Icon = cfg.icon;
  return (
    <motion.div className="absolute text-blue-600/10" style={{ left: cfg.x, top: cfg.y, x: px, y: py, willChange: 'transform' }}>
      <motion.div
        animate={reduced ? {} : { y: [0, -14, 0], rotate: [0, index % 2 ? 9 : -9, 0] }}
        transition={{ duration: cfg.dur, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      >
        <Icon style={{ width: cfg.size, height: cfg.size }} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}

const PARTICLES = [
  { left: '5%',  size: 5, dur: 14, delay: 0   },
  { left: '14%', size: 3, dur: 18, delay: 3   },
  { left: '24%', size: 4, dur: 16, delay: 7   },
  { left: '35%', size: 3, dur: 20, delay: 1.5 },
  { left: '46%', size: 5, dur: 15, delay: 9   },
  { left: '58%', size: 3, dur: 19, delay: 5   },
  { left: '67%', size: 4, dur: 17, delay: 11  },
  { left: '78%', size: 3, dur: 21, delay: 2.5 },
  { left: '87%', size: 5, dur: 15, delay: 6.5 },
  { left: '95%', size: 3, dur: 18, delay: 10  },
];

function Particles() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: '-110vh', opacity: [0, 0.5, 0.5, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear', times: [0, 0.1, 0.85, 1] }}
          style={{ left: p.left, width: p.size, height: p.size, willChange: 'transform, opacity' }}
          className="absolute bottom-[-20px] rounded-full bg-blue-500/40"
        />
      ))}
    </>
  );
}

/* ============================================================
   HERO SERVICE IMAGE
   ============================================================ */
function ServiceImageBackdrop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      // Changed classes here: removed 'hidden lg:block' and added responsive widths starting from mobile
      className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[85%] sm:w-[70%] lg:w-[58%] xl:w-[52%]"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 38%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 38%, black 100%)',
      }}
    >
      <img
        src={HERO_IMAGE_URL}
        alt=""
        aria-hidden="true"
        // Lowered opacity slightly on mobile so it doesn't overpower the text, restores on sm screens
        className="h-full w-full object-cover object-center opacity-[0.12] sm:opacity-[0.16] grayscale-[15%]"
        loading="eager"
      />
    </motion.div>
  );
}

/* ============================================================
   HERO COMPONENT
   ============================================================ */
export default function CinematicHero() {
  const reduced = useReducedMotion() ?? false;
  const [phase, setPhase] = useState<Phase>(reduced ? 3 : 0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduced) return;
    const t1 = setTimeout(() => setPhase(1), 1000); 
    const t2 = setTimeout(() => setPhase(2), 3500); 
    const t3 = setTimeout(() => setPhase(3), 6000); 
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [reduced]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  
  const giantTextX = useTransform(smx, (v) => v * -30);
  const giantTextY = useTransform(smy, (v) => v * -30);
  
  const onMouseMove = (e: React.MouseEvent) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r || reduced) return;
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <main
      id="home"
      ref={containerRef}
      onMouseMove={onMouseMove}
      className="relative h-[100dvh] w-full overflow-hidden bg-[#f0f4f8] selection:bg-blue-600 selection:text-white"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');`}</style>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-400/10 blur-[120px]" />
      </div>

      <ServiceImageBackdrop />

      {/* Floaters & Particles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {FLOATERS.map((cfg, i) => (
          <Floater key={i} cfg={cfg} smx={smx} smy={smy} reduced={reduced} index={i} />
        ))}
        {!reduced && <Particles />}
      </div>

      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-center px-4 sm:px-10 lg:px-16">
        <AnimatePresence mode="wait">

          {/* ================= PHASE 1 & 2 ================= */}
          {phase === 1 && (
            <motion.div
              key="phase1"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center px-4 text-center pointer-events-none"
            >
              <h1 className="max-w-[19ch] text-balance text-[clamp(1.8rem,9vw,6rem)] sm:text-[clamp(2.5rem,9vw,6rem)] font-black uppercase leading-[0.95] tracking-tight text-slate-900 drop-shadow-sm sm:leading-[0.9] lg:max-w-none lg:tracking-tighter">
                YOUR LAPTOP <br className="hidden lg:block" /> ISN&rsquo;T <span className="text-slate-400 line-through decoration-blue-500 decoration-4">DEAD.</span>
              </h1>
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center px-4 text-center pointer-events-none"
            >
              <h1 className="max-w-[17ch] text-balance text-[clamp(1.8rem,8.5vw,5.5rem)] sm:text-[clamp(2.5rem,8.5vw,5.5rem)] font-black uppercase leading-[0.95] tracking-tight text-slate-900 drop-shadow-sm sm:leading-[0.9] lg:max-w-none lg:tracking-tighter">
                IT JUST NEEDS <br />
                <motion.span
                  animate={reduced ? {} : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg, #2563eb, #0ea5e9, #2563eb)', backgroundSize: '200% 100%' }}
                >
                  THE RIGHT HANDS.
                </motion.span>
              </h1>
            </motion.div>
          )}

          {/* ================= PHASE 3 ================= */}
          {phase === 3 && (
            <motion.div
              key="final"
              className="relative flex h-full w-full flex-col items-start justify-center pt-8 overflow-hidden"
            >

              <motion.div 
                initial={{ x: "15vw" }}
                animate={{ x: "0vw" }}
                transition={{ delay: 2.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none relative z-10 flex w-full max-w-7xl flex-col items-start justify-center sm:pl-[2%] lg:pl-[4%]"
              >
                
                {/* ANIMATED LINE DRAWING: LUCKY */}
                <motion.div style={{ x: giantTextX, y: giantTextY }} className="flex w-full justify-start">
                  <svg viewBox="0 0 1200 180" className="w-full h-auto sm:max-h-[20vh] lg:max-h-[25vh]">
                    <motion.text
                      x="2%"
                      y="55%"
                      textAnchor="start"
                      dominantBaseline="central"
                      className="font-black uppercase tracking-tighter"
                      style={{ fontSize: "140px" }}
                      initial={{ 
                        strokeDasharray: 2500, 
                        strokeDashoffset: 2500, 
                        fill: "rgba(37, 99, 235, 0)" 
                      }}
                      animate={{ 
                        strokeDashoffset: 0, 
                        fill: "rgba(37, 99, 235, 1)" 
                      }}
                      transition={{
                        strokeDashoffset: { duration: 2.8, ease: "easeInOut" },
                        fill: { delay: 2.2, duration: 1, ease: "easeIn" }
                      }}
                      stroke="#2563eb"
                      strokeWidth="3"
                    >
                      LUCKY
                    </motion.text>
                  </svg>
                </motion.div>

                {/* HANDWRITTEN ACCENT NOTE (Responsive scaling for mobile) */}
                <motion.div
                  initial={{ opacity: 0, y: -8, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, rotate: -6 }}
                  transition={{ delay: 2.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute right-[2%] -top-4 z-20 flex origin-top-right scale-[0.6] flex-col items-end sm:-top-0 sm:right-[10%] sm:top-[10%] sm:scale-100 lg:right-[10%]"
                >
                  <p
                    className="whitespace-nowrap text-[clamp(1.25rem,2.6vw,2rem)] text-blue-600"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    fast, honest &amp; reliable
                  </p>
                  <svg viewBox="0 0 160 40" className="mt-1 h-7 w-36 text-blue-500" fill="none">
                    <motion.path
                      d="M4 6 C 40 2, 70 32, 128 18 C 138 15, 148 18, 154 10"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 3.1, duration: 1, ease: 'easeInOut' }}
                    />
                  </svg>
                </motion.div>

                {/* FOREGROUND SOLID TEXT: COMPUTERS */}
                <div className="mt-1 flex w-full justify-start pl-[4%] sm:mt-2 sm:pl-[15%] lg:pl-[14%]">
                  <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(2.2rem,11vw,9rem)] sm:text-[clamp(3rem,8vw,9rem)] font-black uppercase leading-[0.85] tracking-tight text-slate-900 drop-shadow-xl sm:tracking-tighter"
                  >
                    Computers
                  </motion.h2>
                </div>

                {/* BOTTOM ROW: CTA BUTTON & 2-ROW DOODLE TEXT */}
                <div className="mt-6 flex w-full flex-col items-start justify-between gap-6 pl-[4%] pr-[4%] sm:mt-10 sm:flex-row sm:items-end sm:gap-6 sm:pl-[15%] sm:pr-[6%] lg:pl-[14%] lg:pr-[10%]">

                  {/* CALL TO ACTION BUTTON */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
                    className="pointer-events-auto shrink-0 w-full sm:w-auto"
                  >
                    <a
                      href="https://www.google.com/maps/place/Lucky+Computers/@17.4848963,78.3941357,14z/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex h-14 w-full max-w-[280px] sm:w-[240px] items-center justify-between overflow-hidden rounded-full bg-slate-900 px-6 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] active:scale-95"
                    >
                      <span className="relative z-10">Get Directions</span>
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </motion.div>

                  {/* DESCRIPTION (Doodler type, pitch black, stacked in 2 rows on desktop, flows on mobile) */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-left text-[clamp(1rem,4.5vw,1.6rem)] sm:text-[clamp(1.1rem,1.8vw,1.6rem)] font-bold leading-snug text-black sm:text-right"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    Expert repair &amp; upgrades for laptops and desktops — screens, batteries,<br className="hidden sm:block" />
                    data recovery, and more, backed by honest pricing.
                  </motion.p>

                </div>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}