import { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from 'framer-motion';
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
  MousePointerClick,
  type LucideIcon,
} from 'lucide-react';
import ecoImg from '../assets/ECO.png';

const WA = '919999999999'; // <-- your WhatsApp number

type Spot = {
  id: string;
  x: number; // % of image width
  y: number; // % of image height
  icon: LucideIcon;
  label: string;
  verdict: string;
  urgent?: boolean;
  steps: string[];
};

// Coordinates sit on the actual parts in ECO.png — nudge if you re-crop the image.
const SPOTS: Spot[] = [
  { id: 'board', x: 11, y: 79, icon: Cpu, label: 'Motherboard', verdict: 'Chip-level micro-soldering brings boards back that others call dead.', steps: ['Board-level diagnosis', 'Micro-soldering & charging-IC repair', 'Load-tested before it leaves the bench'] },
  { id: 'storage', x: 53, y: 81, icon: HardDrive, label: 'Storage & data', verdict: 'Lost files? Stop using the drive — recovery odds are high.', urgent: true, steps: ['Recovery assessment first', 'Forensic recovery from failed or formatted drives', 'Returned on secure backup media'] },
  { id: 'ram', x: 88, y: 82, icon: MemoryStick, label: 'Memory & speed', verdict: 'A RAM + SSD upgrade makes an ageing machine feel brand new.', steps: ['RAM & SSD upgrade', 'Clean OS install & tune', 'Before/after benchmark so you see the gain'] },
  { id: 'fan', x: 8, y: 12, icon: Fan, label: 'Cooling', verdict: 'Random shutdowns and fan noise? Thermal service fixes it.', steps: ['Fan & heatsink service', 'Fresh thermal repaste', 'Stress-tested until stable'] },
  { id: 'phone', x: 19, y: 13, icon: Smartphone, label: 'Phones too', verdict: 'Boards, screens, and data on phones — same precision bench.', steps: ['Board & screen diagnosis', 'Component-level micro-soldering', 'Function & moisture test'] },
  { id: 'screen', x: 47, y: 13, icon: MonitorX, label: 'Screens', verdict: 'Cracked or black display is usually a quick, affordable panel swap.', steps: ['Diagnose: panel vs. board', 'Genuine panel replacement', 'Colour calibration & test'] },
];

const STATS = [
  { v: '10,000+', l: 'Devices revived' },
  { v: '95%', l: 'Same-day fixes' },
  { v: '10+', l: 'Years in Hyderabad' },
];

function waLink(label: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(`Hi Lucky Computers, I need help with: ${label}.`)}`;
}

export default function Ecosystem() {
  const reduced = useReducedMotion() ?? false;
  const [active, setActive] = useState('board');
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const s = SPOTS.find((x) => x.id === active) ?? SPOTS[0];

  return (
    <section ref={sectionRef} id="ecosystem" className="relative w-full overflow-hidden bg-slate-950 text-white">
      <style>{`
        @keyframes ecoScan { 0%{top:0;opacity:0} 12%{opacity:.9} 88%{opacity:.9} 100%{top:100%;opacity:0} }
        .eco-scan { animation: ecoScan 3.6s linear infinite; }
        @media (prefers-reduced-motion: reduce){ .eco-scan{ animation:none; } }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 40%, rgba(37,99,235,0.10), transparent 70%)' }} />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-12">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 max-w-2xl sm:mb-10"
        >
          <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">
            <ShieldCheck className="h-4 w-4" /> Diagnosis — start here
          </div>
          <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl">
            Point at{' '}
            <span className="italic text-transparent" style={{ WebkitTextStroke: '1.5px #3b82f6' }}>
              what&rsquo;s broken.
            </span>
          </h2>
          <p className="mt-4 text-sm text-slate-400 sm:text-base">
            Tap any part below and we&rsquo;ll tell you exactly how we fix it — and whether it&rsquo;s worth saving.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-8">
          {/* interactive image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800">
              <img src={ecoImg} alt="Lucky Computers component bench" className="block h-auto w-full" />

              <div className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-overlay">
                <div className="eco-scan absolute left-0 h-0.5 w-full bg-blue-400 shadow-[0_0_18px_3px_#2563eb]" />
              </div>

              {SPOTS.map((spot) => {
                const on = spot.id === active;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActive(spot.id)}
                    onMouseEnter={() => !reduced && setActive(spot.id)}
                    aria-label={spot.label}
                    className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  >
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {!reduced && (
                        <span className={`absolute inline-flex h-full w-full rounded-full ${on ? 'animate-ping bg-blue-500/70' : 'bg-white/25'}`} />
                      )}
                      <span className={`relative h-3.5 w-3.5 rounded-full ring-2 transition-all ${on ? 'scale-110 bg-blue-500 ring-blue-300' : 'bg-white ring-black/30'}`} />
                    </span>
                    <span className={`pointer-events-none absolute left-1/2 top-7 hidden -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-widest transition-opacity lg:block ${on ? 'bg-blue-600 text-white opacity-100' : 'bg-black/70 text-slate-300 opacity-0 group-hover:opacity-100'}`}>
                      {spot.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              <MousePointerClick className="h-3.5 w-3.5" /> Tap a glowing point to inspect it
            </p>
          </div>

          {/* terminal readout — chrome back, no CTA row */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">diagnostic_readout</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-7"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/40 bg-blue-500/10 text-blue-500">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${s.urgent ? 'bg-blue-500/15 text-blue-400' : 'bg-emerald-500/15 text-emerald-400'}`}>
                    <Check className="h-3.5 w-3.5" />
                    {s.urgent ? 'Act fast — fixable' : 'Fixable'}
                  </span>
                </div>

                <p className="text-lg font-bold leading-snug text-white">{s.verdict}</p>

                <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-slate-500">What we&rsquo;ll do</div>
                <ul className="mt-3 space-y-2.5">
                  {s.steps.map((step, i) => (
                    <motion.li
                      key={step}
                      initial={reduced ? false : { opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: reduced ? 0 : 0.1 + i * 0.1 }}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[10px] font-black text-blue-500">{i + 1}</span>
                      {step}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* trust strip + single quiet contact path */}
        <div className="mt-10 flex flex-col gap-6 border-t border-slate-900 pt-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-8">
            {STATS.map((st) => (
              <div key={st.l}>
                <div className="text-2xl font-black tracking-tighter text-white sm:text-3xl">{st.v}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{st.l}</div>
              </div>
            ))}
          </div>
          <p className="max-w-xs text-xs text-slate-500 sm:text-right">
            We also <span className="text-slate-300">upgrade, build, and equip</span> — desktops, phones, and gear.{' '}
            <a href={waLink('something else')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-blue-500 hover:text-blue-400">
              Just ask <ArrowUpRight className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}