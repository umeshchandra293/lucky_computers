import { Cpu, Lock, BadgeCheck, ArrowRight, Server } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      num: "01",
      icon: BadgeCheck,
      title: "Trusted Experts",
      desc: "Experienced technicians with certified knowledge in complex IT infrastructure, board-level diagnostics, and hardware restoration."
    },
    {
      num: "02",
      icon: Cpu,
      title: "Quality Repairs",
      desc: "We use strictly vetted OEM components and subject all repairs to rigorous, multi-point stress-testing procedures before handover."
    },
    {
      num: "03",
      icon: Lock,
      title: "Data Security",
      desc: "Your privacy is absolute. We employ military-grade, secure data-handling protocols to ensure your sensitive files are never compromised."
    }
  ];

  return (
    <section id="why-us" className="bg-zinc-950 px-6 py-16 lg:px-16 overflow-hidden relative border-t border-zinc-900">
      
      {/* ================= BACKGROUND ELEMENTS ================= */}
      
      {/* 1. SLANTED WHITE STRIPES (LEFT SIDE) - Lite opacity applied */}
      <div className="absolute left-0 top-0 bottom-0 w-[50%] pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-50%] h-[200%] flex gap-4 transform rotate-[-28deg] opacity-[0.05]">
          <div className="w-1.5 h-full bg-white"></div>
          <div className="w-6 h-full bg-white"></div>
          <div className="w-1 h-full bg-white"></div>
          <div className="w-16 h-full bg-white"></div>
          <div className="w-2 h-full bg-white"></div>
          <div className="w-8 h-full bg-white"></div>
          <div className="w-0.5 h-full bg-white"></div>
        </div>
      </div>

      {/* 2. Background Tech Architecture Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }}>
      </div>
      
      {/* 3. Subtle ambient security glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* ================= CONTENT LAYOUT ================= */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER: COMPACT & TECHNICAL --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-orange-500">
              <Server className="h-4 w-4" />
              <span>The Lucky Standard</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] text-white">
              Why Choose <br />
              {/* Premium transparent stroke effect */}
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #f97316' }}>
                Our Services
              </span>
            </h2>
          </div>
          
          <div className="max-w-sm pb-1 border-l-2 border-zinc-800 pl-4">
            <p className="text-xs lg:text-sm text-zinc-400 font-medium leading-relaxed">
              We don't just fix devices; we engineer reliability. We offer the most trusted, transparent, and high-performance technical solutions in Hyderabad.
            </p>
          </div>
        </div>

        {/* --- SERVER BLADE LAYOUT --- */}
        <div className="flex flex-col border-t-2 border-zinc-900">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col md:flex-row items-start md:items-center py-6 lg:py-8 border-b border-zinc-900 transition-all duration-500 hover:bg-zinc-900/50 cursor-default overflow-hidden"
            >
              {/* Left Hover Accent Wire (Lights up on hover) */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top shadow-[0_0_15px_rgba(234,88,12,0.8)]" />

              {/* Grid Layout for Row Content */}
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center px-4 lg:px-8 transform transition-transform duration-500 group-hover:translate-x-2">
                
                {/* Number & Icon (Cols 1-4) */}
                <div className="md:col-span-4 flex items-center gap-6">
                  {/* Faded background number that lights up */}
                  <span className="text-3xl lg:text-4xl font-black text-zinc-800 transition-colors duration-500 group-hover:text-orange-500/20">
                    {feature.num}
                  </span>
                  
                  {/* Icon Block */}
                  <div className="h-10 w-10 bg-zinc-950 flex items-center justify-center border border-zinc-800 transition-all duration-500 group-hover:border-orange-500 group-hover:bg-orange-500/10 shrink-0 shadow-lg">
                    <feature.icon className="h-5 w-5 text-zinc-500 transition-colors duration-500 group-hover:text-orange-500" />
                  </div>
                </div>

                {/* Title (Cols 5-7) */}
                <div className="md:col-span-3">
                  <h3 className="text-base lg:text-lg font-black uppercase tracking-tight text-zinc-100 transition-colors duration-500 group-hover:text-white">
                    {feature.title}
                  </h3>
                </div>

                {/* Description & Action (Cols 8-12) */}
                <div className="md:col-span-5 flex items-center justify-between gap-6">
                  <p className="text-[11px] lg:text-xs text-zinc-500 font-medium leading-relaxed transition-colors duration-500 group-hover:text-zinc-300 max-w-sm">
                    {feature.desc}
                  </p>
                  {/* Subtle hover arrow - slides in to signify action/forward movement */}
                  <div className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 transition-all duration-500 group-hover:border-orange-500 group-hover:bg-orange-500 shrink-0 overflow-hidden">
                    <ArrowRight className="h-3.5 w-3.5 text-zinc-500 transform -translate-x-4 transition-all duration-500 group-hover:translate-x-0 group-hover:text-white" />
                  </div>
                </div>

              </div>

              {/* Bottom scanline effect on hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-orange-600 to-transparent transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}