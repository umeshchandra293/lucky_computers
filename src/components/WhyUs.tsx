import { Cpu, Lock, BadgeCheck, ArrowRight } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      num: "01",
      icon: BadgeCheck,
      title: "Trusted Experts",
      desc: "Experienced technicians with extensive, certified knowledge in computer repairs, logic boards, and complex IT infrastructure."
    },
    {
      num: "02",
      icon: Cpu,
      title: "Quality Repairs",
      desc: "We use high-quality OEM components and subject all repairs to rigorous, multi-point stress-testing procedures before handover."
    },
    {
      num: "03",
      icon: Lock,
      title: "Data Security",
      desc: "Your privacy is our priority. We employ strict, secure data-handling protocols to ensure your sensitive files are never compromised."
    }
  ];

  return (
    <section id="why-us" className="bg-white px-6 py-24 lg:px-16 text-black border-t border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Split Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-orange-500">
              <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse" />
              <span>The Lucky Standard</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.85] text-black">
              Why Choose <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #000000' }}>Our Services</span>
            </h2>
          </div>
          
          <div className="max-w-md pb-2">
            <p className="text-sm text-black font-medium leading-relaxed">
              We don't just fix devices; we engineer reliability. We offer the most trusted, transparent, and high-performance tech services in Hyderabad.
            </p>
          </div>
        </div>

        {/* Spec Sheet / Server Rack Layout */}
        <div className="flex flex-col border-t border-zinc-200">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col md:flex-row items-start md:items-center py-8 lg:py-10 border-b border-zinc-200 transition-colors duration-500 hover:bg-orange-50 cursor-default overflow-hidden"
            >
              {/* Left Hover Accent Wire */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Grid Layout for Row Content */}
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4 lg:px-8">
                
                {/* Number & Icon (Cols 1-4) */}
                <div className="md:col-span-4 flex items-center gap-8">
                  <span className="text-3xl lg:text-4xl font-black text-orange-500">
                    {feature.num}
                  </span>
                  <div className="h-12 w-12 bg-zinc-100 flex items-center justify-center border border-zinc-200 transition-all duration-500 group-hover:border-orange-500 group-hover:bg-orange-500/10 shrink-0">
                    <feature.icon className="h-6 w-6 text-zinc-400 transition-colors duration-500 group-hover:text-orange-500" />
                  </div>
                </div>

                {/* Title (Cols 5-7) */}
                <div className="md:col-span-3">
                  <h3 className="text-lg lg:text-xl font-black uppercase tracking-tight text-black">
                    {feature.title}
                  </h3>
                </div>

                {/* Description (Cols 8-12) */}
                <div className="md:col-span-5 flex items-center gap-6">
                  <p className="text-xs text-black font-medium leading-relaxed transition-colors duration-500 group-hover:text-zinc-600">
                    {feature.desc}
                  </p>
                  {/* Subtle hover arrow */}
                  <ArrowRight className="hidden lg:block h-5 w-5 text-zinc-300 transition-all duration-500 group-hover:text-orange-500 group-hover:translate-x-2 shrink-0" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}