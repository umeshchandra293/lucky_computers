import { useState, useEffect } from 'react';
import { Power } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="absolute top-0 z-50 flex w-full items-center justify-between p-6 lg:px-12 lg:py-8">
        
        {/* --- LOGO --- */}
        <div className="flex items-center gap-2 relative z-50">
          <div className="h-4 w-4 bg-orange-600" />
          <span className="text-xl font-black uppercase tracking-tighter text-zinc-900">
            LuckyComputers
          </span>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden space-x-8 text-sm font-bold uppercase tracking-widest text-zinc-500 md:flex items-center">
          <a href="#home" className="hover:text-zinc-900 transition-colors">Home</a>
          <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#why-us" className="hover:text-zinc-900 transition-colors">Why Us</a>
        </div>

        {/* --- DESKTOP CONTACT BUTTON (Premium Dark Glass) --- */}
        <a 
          href="#contact"
          className="hidden md:flex items-center justify-center rounded-lg bg-zinc-900/70 backdrop-blur-md border border-zinc-700/50 px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5"
        >
          Contact Us
        </a>

        {/* --- MOBILE POWER BUTTON TOGGLE (Glass Style) --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/70 backdrop-blur-md border border-zinc-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Toggle Menu"
        >
          {/* The Power icon glows orange when the menu is open */}
          <Power 
            className={`h-5 w-5 transition-all duration-500 ${
              isOpen 
                ? 'text-orange-500 drop-shadow-[0_0_10px_rgba(234,88,12,0.8)] scale-110' 
                : 'text-zinc-300'
            }`} 
          />
        </button>

      </nav>

      {/* ================= MOBILE MENU DRAWER ================= */}
      
      {/* Background Blur Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-zinc-900/40 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Side Sliding Drawer */}
      <div 
        className={`fixed top-0 right-0 z-40 h-[100dvh] w-[75vw] max-w-sm bg-zinc-950 border-l border-zinc-900 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col mt-28 px-8 space-y-6">
          <a href="#home" onClick={closeMenu} className="text-2xl font-black uppercase tracking-tighter text-white hover:text-orange-500 transition-colors">
            Home
          </a>
          <div className="w-full h-px bg-zinc-900" />
          
          <a href="#services" onClick={closeMenu} className="text-2xl font-black uppercase tracking-tighter text-white hover:text-orange-500 transition-colors">
            Services
          </a>
          <div className="w-full h-px bg-zinc-900" />
          
          <a href="#about" onClick={closeMenu} className="text-2xl font-black uppercase tracking-tighter text-white hover:text-orange-500 transition-colors">
            About
          </a>
          <div className="w-full h-px bg-zinc-900" />
          
          <a href="#why-us" onClick={closeMenu} className="text-2xl font-black uppercase tracking-tighter text-white hover:text-orange-500 transition-colors">
            Why Us
          </a>
        </div>

        {/* --- MOBILE CONTACT BUTTON (Glowing Orange Glass) --- */}
        <div className="mt-auto p-8">
          <a 
            href="#contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center rounded-lg bg-orange-600/20 backdrop-blur-md border border-orange-500/30 px-6 py-4 text-xs font-black uppercase tracking-widest text-orange-500 shadow-[0_8px_32px_rgba(234,88,12,0.15)] transition-all duration-300 hover:bg-orange-600 hover:text-white hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}