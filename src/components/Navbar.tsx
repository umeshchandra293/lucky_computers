"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Power } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Why Us', href: '#why-us' },
] as const;

const WHATSAPP_URL = 'https://wa.me/919999999999?text=Hi%2C%20my%20laptop%20needs%20repair';

function NavLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      className="group relative text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 hover:text-blue-600"
    >
      {name}
      <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');`}</style>

      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 top-2 sm:top-4 z-50 w-full px-3 sm:px-4 md:px-8"
      >
        {/* Ambient blue glow behind the pill — echoes the hero's background gradients */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-16 w-[92%] max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-2xl" />

        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/70 px-3 py-2 sm:px-4 sm:py-2.5 shadow-sm backdrop-blur-xl">

          {/* ================= LOGO ================= */}
          <a href="#home" className="flex shrink-0 items-center gap-2 sm:gap-3">
            <img
              src="src/assets/Logo.webp"
              alt="Lucky Computers Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 rounded-full object-cover shadow-sm ring-2 ring-white/70"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[13px] sm:text-base font-black tracking-tight text-slate-900">
                LUCKY COMPUTERS
              </span>
              <span
                className="-mt-0.5 text-[11px] sm:text-sm text-blue-600"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                fast, honest &amp; reliable
              </span>
            </span>
          </a>

          {/* ================= DESKTOP LINKS ================= */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </div>

          {/* ================= ACTIONS ================= */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Desktop Contact CTA — mirrors the hero's "Get Directions" button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden h-11 shrink-0 items-center justify-between gap-3 overflow-hidden rounded-full bg-slate-900 pl-5 pr-1.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] active:scale-95 md:flex"
            >
              <span className="relative z-10">Contact</span>
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                <Phone className="h-4 w-4 text-white" />
              </div>
            </a>

            {/* Mobile Power Button Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition-all duration-300 md:hidden ${
                isOpen
                  ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'border-white/60 bg-white/50 text-slate-600 backdrop-blur-md hover:bg-white/80'
              }`}
            >
              <Power className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </nav>

        {/* ================= MOBILE DROPDOWN MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-3 right-3 top-[calc(100%+0.5rem)] z-40 mx-auto max-w-sm rounded-2xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:left-4 sm:right-4 md:hidden"
            >
              <div className="flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="my-2 h-px w-full bg-slate-200" />
                
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-slate-900 py-2.5 pl-4 pr-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-600 active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Contact Us
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                    <Phone className="h-3.5 w-3.5 text-white" />
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}