import { 
  MapPin, 
  Phone, 
  Globe, 
  ChevronRight,
  Cpu
} from 'lucide-react';

// --- CUSTOM SVG ICONS (Matches Lucide Aesthetic) ---
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
// --------------------------------------------------

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white relative overflow-hidden border-t border-zinc-200 pt-16 pb-8 px-4 sm:px-6 lg:px-12">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-orange-600 to-white opacity-80"></div>
      
      {/* Subtle Tech Grid (Inverted for light mode) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- MAIN FOOTER GRID --- */}
        {/* Added sm:grid-cols-2 for better tablet/large phone scaling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 lg:mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-orange-600 rounded text-white shrink-0">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-zinc-900 uppercase tracking-tighter">
                  Lucky Computers
                </h3>
              </div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-orange-600">
                Reliable. Affordable. Local Tech Experts.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed pr-4 sm:pr-0">
              Engineering reliability and offering the most trusted, transparent, and high-performance technical solutions in Hyderabad.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5 lg:gap-6 lg:pl-8">
            <h4 className="text-zinc-900 font-black text-xs sm:text-sm uppercase tracking-widest relative pb-3 w-fit">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-600"></div>
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-xs sm:text-sm text-zinc-600 font-medium transition-colors hover:text-orange-600 w-fit py-1"
                  >
                    <ChevronRight className="w-3 h-3 text-zinc-400 transition-all duration-300 group-hover:text-orange-600 group-hover:translate-x-1 shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <h4 className="text-zinc-900 font-black text-xs sm:text-sm uppercase tracking-widest relative pb-3 w-fit">
              Contact Us
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-600"></div>
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed group-hover:text-zinc-900 transition-colors">
                  3-2-33, Hanuman Temple Rd,<br />
                  Bagh Ameer, Baghameeri Village,<br />
                  Kukatpally, Hyderabad,<br />
                  Telangana 500011
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                <div className="flex flex-col text-xs sm:text-sm text-zinc-600 font-medium gap-1">
                  <a href="tel:+919391919214" className="hover:text-orange-600 transition-colors py-0.5">9391919214</a>
                  <a href="tel:+919391919215" className="hover:text-orange-600 transition-colors py-0.5">9391919215</a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <Globe className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                <a href="https://www.luckycomputers.in" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-zinc-600 font-medium hover:text-orange-600 transition-colors py-0.5">
                  www.luckycomputers.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <h4 className="text-zinc-900 font-black text-xs sm:text-sm uppercase tracking-widest relative pb-3 w-fit">
              Follow Us
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-600"></div>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium">
              Stay updated with our latest repairs, builds, and tech tips.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a href="#" aria-label="Facebook" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-600 hover:text-white hover:border-orange-600 hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1">
                <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-600 hover:text-white hover:border-orange-600 hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1">
                <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-600 hover:text-white hover:border-orange-600 hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1">
                <TwitterIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-600 hover:text-white hover:border-orange-600 hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1">
                <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* --- BOTTOM COPYRIGHT BAR --- */}
        <div className="pt-6 sm:pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-[11px] font-medium text-zinc-500 tracking-wider text-center md:text-left">
            &copy; {currentYear} LUCKY COMPUTERS. ALL RIGHTS RESERVED.
          </p>
          
          {/* Decorative Bottom Right Tech Accent */}
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-orange-500 opacity-50"></div>
            <div className="w-1 h-1 bg-orange-500 opacity-75"></div>
            <div className="w-1 h-1 bg-orange-500"></div>
            <div className="w-6 h-1 bg-orange-600 ml-1"></div>
          </div>
        </div>

      </div>
    </footer>
  );
}