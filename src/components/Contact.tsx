import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Send, TerminalSquare } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="w-full bg-zinc-950 relative overflow-hidden border-t border-zinc-900 py-16 lg:py-24 px-6 lg:px-12"
    >
      
      {/* --- ANIMATION STYLES --- */}
      <style>
        {`
          .scroll-reveal { opacity: 0; transform: translateY(15px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
          .scroll-slide-right { opacity: 0; transform: translateX(-20px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
          .scroll-slide-left { opacity: 0; transform: translateX(20px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
          
          .active-scrolled .scroll-reveal,
          .active-scrolled .scroll-slide-right,
          .active-scrolled .scroll-slide-left { opacity: 1; transform: translate(0); }

          .active-scrolled .delay-100 { transition-delay: 100ms; }
          .active-scrolled .delay-200 { transition-delay: 200ms; }
          .active-scrolled .delay-300 { transition-delay: 300ms; }
          .active-scrolled .delay-400 { transition-delay: 400ms; }
        `}
      </style>

      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Subtle Tech Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
      </div>

      {/* Slanted Orange Accent Line (Top Right) */}
      <div className="absolute right-0 top-0 w-[30%] h-full pointer-events-none z-0 overflow-hidden hidden lg:block">
        <div className="absolute right-[-20%] top-[-10%] h-[120%] flex gap-4 transform rotate-[25deg] opacity-[0.03]">
          <div className="w-4 h-full bg-orange-600"></div>
          <div className="w-16 h-full bg-orange-600"></div>
          <div className="w-1 h-full bg-orange-600"></div>
        </div>
      </div>

      {/* Ambient Orange Glow behind the form */}
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className={`max-w-7xl mx-auto relative z-10 ${isVisible ? 'active-scrolled' : ''}`}>
        
        {/* --- HEADER --- */}
        <div className="text-center md:text-left mb-12 scroll-reveal">
          <div className="mb-3 flex items-center justify-center md:justify-start gap-2 text-[10px] font-black uppercase tracking-widest text-orange-500">
            <TerminalSquare className="h-4 w-4" />
            <span className="tracking-[0.2em]">Initiate Connection</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Get In <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f97316' }}>Touch</span>
          </h2>
          <p className="text-zinc-400 font-medium text-sm max-w-md mx-auto md:mx-0 border-l-2 border-orange-600 pl-3">
            Whether you need emergency data recovery, a custom build quote, or routine maintenance, our lab is standing by.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: CONTACT DETAILS & MAP --- */}
          <div className="w-full lg:w-[45%] flex flex-col gap-8 scroll-slide-right delay-100">
            
            {/* Info Cards Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Node */}
              <div className="col-span-1 sm:col-span-2 bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl hover:border-orange-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-orange-500 group-hover:bg-orange-500/10 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1.5">Headquarters</h4>
                    <p className="text-zinc-400 text-[11px] leading-relaxed font-medium">
                      3-2-33, Hanuman Temple Rd,<br />
                      Bagh Ameer, Baghameeri Village,<br />
                      Kukatpally, Hyderabad,<br />
                      Telangana 500011
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Node */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl hover:border-orange-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg text-orange-500 group-hover:bg-orange-500/10 transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">Support Line</h4>
                  </div>
                  <div className="text-zinc-300 font-medium text-xs">
                    <p className="hover:text-orange-400 transition-colors cursor-pointer block mb-1">9391919214</p>
                    <p className="hover:text-orange-400 transition-colors cursor-pointer block">9391919215</p>
                  </div>
                </div>
              </div>

              {/* Hours Node */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl hover:border-orange-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg text-orange-500 group-hover:bg-orange-500/10 transition-colors">
                      <Clock className="h-4 w-4" />
                    </div>
                    <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">Business Hours</h4>
                  </div>
                  <div className="text-zinc-300 font-medium text-[11px] leading-relaxed">
                    <p>Mon - Sat</p>
                    <p className="text-orange-500 font-bold mt-0.5">10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps iFrame Terminal */}
            <div className="w-full h-64 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden relative group">
              <div className="absolute top-2 left-2 bg-zinc-950/80 backdrop-blur text-orange-500 text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded border border-zinc-700 z-10">
                Live Radar
              </div>
              <iframe 
                src="https://maps.google.com/maps?q=Lucky+Computers,+3-2-33,+Hanuman+Temple+Rd,+Bagh+Ameer,+Kukatpally,+Hyderabad&t=m&z=15&output=embed&iwloc=near" 
                title="Lucky Computers Location"
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="w-full lg:w-[55%] scroll-slide-left delay-200">
            <div className="bg-zinc-900/40 border border-zinc-800 p-6 lg:p-10 rounded-2xl backdrop-blur-sm relative overflow-hidden">
              
              {/* Form Graphic Accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-[40px] rounded-full pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-12 h-1 bg-orange-600"></div>
              
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">
                Send a <span className="text-orange-500">Message</span>
              </h3>

              <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                
                {/* Top Row: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="+91 00000 00000"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="johndoe@example.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Inquiry Type</label>
                  <select 
                    id="service" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-zinc-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Select a Service...</option>
                    <option value="repair">PC & Laptop Repairs</option>
                    <option value="data">Data Recovery</option>
                    <option value="upgrade">Hardware Upgrade</option>
                    <option value="buy">Buy Refurbished</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Diagnostic Details</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Briefly describe the issue or your requirements..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="mt-2 w-full bg-orange-600 text-white font-black uppercase tracking-widest text-xs py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white hover:text-zinc-900 group shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  Transmit Request
                  <Send className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}