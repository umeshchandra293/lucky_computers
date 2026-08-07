"use client";

import { useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { MapPin, Phone, Clock, Send, TerminalSquare } from 'lucide-react';

/* ============================================================
   MOTION
   ============================================================ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-60px' });

  /* --- Form State --- */
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  /* --- Handle Form Submission to WhatsApp --- */
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Website Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || 'Not provided'}%0A*Inquiry Type:* ${formData.service || 'Not selected'}%0A*Details:* ${formData.message}`;

    const whatsappNumber = "919391919214";

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-4 pb-16 sm:pt-6 sm:pb-24 px-5 sm:px-8 lg:px-12"
    >

      {/* ================= BACKGROUND ACCENTS ================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-10%] top-[10%] h-[45vw] w-[45vw] max-h-[460px] max-w-[460px] rounded-full bg-blue-400/15 blur-[110px]" />
        <div className="absolute left-[-8%] bottom-[5%] h-[30vw] w-[30vw] max-h-[320px] max-w-[320px] rounded-full bg-indigo-400/10 blur-[90px]" />
      </div>

      {/* Slanted line motif — same recurring device as CoreValues, tuned to light bg */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-full w-[30%] overflow-hidden lg:block">
        <div className="absolute right-[-20%] top-[-10%] flex h-[120%] rotate-[25deg] gap-4 opacity-[0.06]">
          <div className="h-full w-4 bg-blue-600" />
          <div className="h-full w-16 bg-blue-600" />
          <div className="h-full w-1 bg-blue-600" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-12 text-center md:text-left"
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 md:justify-start">
            <TerminalSquare className="h-4 w-4" />
            <span>Initiate Connection</span>
          </div>
          <h2 className="mb-4 text-4xl font-black uppercase leading-none tracking-tighter text-slate-950 lg:text-6xl">
            Get In <span className="text-blue-600">Touch.</span>
          </h2>
          <p className="mx-auto max-w-md border-l-2 border-blue-600 pl-3 text-sm font-semibold text-slate-700 md:mx-0">
            Whether you need emergency data recovery, a custom build quote, or routine maintenance, our lab is standing by.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          {/* ================= LEFT: CONTACT DETAILS & MAP ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="flex w-full flex-col gap-4 lg:w-[45%]"
          >

            {/* Info Cards Matrix */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Address Node */}
              <div className="group relative col-span-1 overflow-hidden rounded-xl border-2 border-slate-900 bg-white p-5 shadow-sm transition-colors hover:border-blue-600 sm:col-span-2">
                <div className="absolute left-0 top-0 bottom-0 w-1 origin-top scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border-2 border-slate-900 bg-blue-50 p-2.5 text-blue-600 transition-colors group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1.5 text-xs font-black uppercase tracking-widest text-slate-950">Headquarters</h4>
                    <p className="text-[11px] font-semibold leading-relaxed text-slate-700">
                      3-2-33, Hanuman Temple Rd,<br />
                      Bagh Ameer, Baghameeri Village,<br />
                      Kukatpally, Hyderabad,<br />
                      Telangana 500011
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Node */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-slate-900 bg-white p-5 shadow-sm transition-colors hover:border-blue-600">
                <div className="absolute left-0 top-0 bottom-0 w-1 origin-top scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border-2 border-slate-900 bg-blue-50 p-2 text-blue-600 transition-colors group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      <Phone className="h-4 w-4" />
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-950">Support Line</h4>
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    <a href="tel:+919391919214" className="mb-1 block cursor-pointer transition-colors hover:text-blue-600">9391919214</a>
                    <a href="tel:+919391919215" className="block cursor-pointer transition-colors hover:text-blue-600">9391919215</a>
                  </div>
                </div>
              </div>

              {/* Hours Node */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-slate-900 bg-white p-5 shadow-sm transition-colors hover:border-blue-600">
                <div className="absolute left-0 top-0 bottom-0 w-1 origin-top scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border-2 border-slate-900 bg-blue-50 p-2 text-blue-600 transition-colors group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      <Clock className="h-4 w-4" />
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-950">Business Hours</h4>
                  </div>
                  <div className="text-[11px] font-semibold leading-relaxed text-slate-800">
                    <p>Mon - Sat</p>
                    <p className="mt-0.5 font-black text-blue-600">10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps iFrame */}
            <div className="group relative h-64 w-full overflow-hidden rounded-xl border-2 border-slate-900 bg-slate-100 shadow-sm">
              <div className="absolute left-2 top-2 z-10 rounded border-2 border-slate-900 bg-white px-2 py-1 text-[9px] font-black uppercase tracking-widest text-blue-600">
                Live Radar
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Lucky+Computers,+3-2-33,+Hanuman+Temple+Rd,+Bagh+Ameer,+Kukatpally,+Hyderabad&t=m&z=15&output=embed&iwloc=near"
                title="Lucky Computers Location"
                className="h-full w-full grayscale-[40%] opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </motion.div>

          {/* ================= RIGHT: CONTACT FORM ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[55%]"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-sm lg:p-10">

              {/* Form graphic accents */}
              <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-400/10 blur-[40px]" />
              <div className="absolute right-0 top-0 h-1.5 w-12 bg-blue-600" />

              <h3 className="mb-8 text-2xl font-black uppercase tracking-tight text-slate-950">
                Send a <span className="text-blue-600">Message</span>
              </h3>

              <form className="relative z-10 flex flex-col gap-5" onSubmit={handleWhatsAppSubmit}>

                {/* Top Row: Name & Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-800">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-lg border-2 border-slate-900 bg-white px-4 py-3.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 placeholder:font-normal transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-800">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full rounded-lg border-2 border-slate-900 bg-white px-4 py-3.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 placeholder:font-normal transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-800">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="w-full rounded-lg border-2 border-slate-900 bg-white px-4 py-3.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 placeholder:font-normal transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>

                {/* Service Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-[10px] font-black uppercase tracking-widest text-slate-800">Inquiry Type</label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full cursor-pointer appearance-none rounded-lg border-2 border-slate-900 bg-white px-4 py-3.5 text-sm font-medium text-slate-950 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  >
                    <option value="" disabled>Select a Service...</option>
                    <option value="PC & Laptop Repairs">PC & Laptop Repairs</option>
                    <option value="Data Recovery">Data Recovery</option>
                    <option value="Hardware Upgrade">Hardware Upgrade</option>
                    <option value="Buy Refurbished">Buy Refurbished</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-800">Diagnostic Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe the issue or your requirements..."
                    className="w-full resize-none rounded-lg border-2 border-slate-900 bg-white px-4 py-3.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 placeholder:font-normal transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  ></textarea>
                </div>

                {/* Submit Button — matches Hero / Navbar primary CTA pattern */}
                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-3 rounded-lg bg-slate-950 py-4 text-xs font-black uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(15,23,42,0.25)] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] active:scale-[0.98]"
                >
                  Send
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}