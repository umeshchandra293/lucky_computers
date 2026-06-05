import { MapPin, Award, Users, Zap, Shield, Star } from 'lucide-react';
import imgA1 from '../assets/A1.png';
import imgA2 from '../assets/A2.png';

export default function About() {
  const values = [
    {
      num: "01",
      icon: Award,
      title: "Quality",
      desc: "We never compromise on the quality of our services and products. Every repair undergoes rigorous multi-point testing because excellence is our baseline.",
      gridClass: "md:col-span-1"
    },
    {
      num: "02",
      icon: Users,
      title: "Customer Focus",
      desc: "Your data security and satisfaction are our absolute priorities. We listen, diagnose transparently, and deliver reliable solutions.",
      gridClass: "md:col-span-1"
    },
    {
      num: "03",
      icon: Zap,
      title: "Efficiency",
      desc: "Downtime costs you money and peace of mind. We value your time, providing lightning-fast turnarounds without sacrificing precision.",
      gridClass: "md:col-span-2"
    }
  ];

  return (
    <section id="about" className="bg-zinc-200 px-6 py-24 lg:px-16 overflow-hidden">
      
      {/* --- OUR STORY (Split Layout) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 max-w-7xl mx-auto">
        
        {/* Left Side: Dual Image Collage */}
        <div className="relative h-[500px] lg:h-[650px] w-full group">
          
          <div className="absolute top-4 right-4 lg:-top-6 lg:-right-6 h-[80%] w-[80%] bg-zinc-900 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
          
          <div className="absolute top-0 right-0 h-[75%] w-[85%] border-4 border-zinc-900 overflow-hidden bg-zinc-900 z-10">
            <img 
              src={imgA1} 
              alt="Lucky Computers Interior Display" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="absolute bottom-0 left-0 h-[60%] w-[70%] border-8 border-zinc-200 overflow-hidden bg-zinc-900 z-20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:translate-x-4">
            <img 
              src={imgA2} 
              alt="Lucky Computers Storefront" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 flex gap-2 z-0">
            <div className="h-3 w-3 rounded-full bg-orange-600" />
            <div className="h-3 w-3 rounded-full bg-zinc-900" />
            <div className="h-3 w-3 rounded-full bg-zinc-400" />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-orange-600">
            <div className="h-2 w-2 bg-orange-600 rounded-full" />
            <span>Our Story</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-zinc-900 uppercase mb-8">
            Get to know <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #18181b' }}>Lucky Computers</span>
          </h2>
          
          <div className="space-y-6 text-lg font-medium text-zinc-600">
            <p className="leading-relaxed">
              "LUCKY COMPUTERS was founded with a mission to provide affordable and expert computer repair services to our community. With a passion for tech and a heart for helping people, we specialize in refurbished systems, fast repairs, and data recovery. Our customers are our top priority, and we strive to deliver reliable solutions every time."
            </p>
            
            <div className="flex items-start gap-4 bg-zinc-300/50 p-6 border-l-4 border-orange-600">
              <MapPin className="h-8 w-8 shrink-0 text-orange-600" />
              <p className="text-zinc-900 text-base leading-relaxed">
                Located in the heart of Kukatpally, near <span className="font-bold">Metro Station Pillar No. 808</span>, our team of qualified technicians has been serving Hyderabad with dedication and technical expertise.
              </p>
            </div>
            
            <p className="leading-relaxed">
              We believe in building long-term relationships with our customers through honest service and transparent pricing. Whether you need a simple repair or a complete system overhaul, we're here to help.
            </p>
          </div>
        </div>

      </div>

      {/* --- MOTIVATION & VALUES (Asymmetric Trust Grid) --- */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-zinc-900">Our Core Values</h3>
          <p className="mt-2 text-lg font-medium text-zinc-600">The principles that power our workshop.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Trust & Motivation Block (Left Side) */}
          <div className="lg:col-span-5 bg-zinc-950 p-10 flex flex-col justify-between text-white relative overflow-hidden group">
            {/* Faded Shield Graphic */}
            <div className="absolute -right-16 -top-16 opacity-[0.03] transition-transform duration-700 group-hover:scale-110">
              <Shield className="w-80 h-80" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-orange-500">The Lucky Promise</span>
              </div>
              <h4 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                Built on Trust. <br />
                <span className="text-zinc-600">Engineered for Performance.</span>
              </h4>
              <p className="text-zinc-400 font-medium leading-relaxed mb-12">
                We don't just fix hardware; we restore your connection to your work and life. Every screw turned and circuit tested is backed by our unwavering commitment to absolute integrity. Your devices hold your digital life—we treat them with the respect they demand.
              </p>
            </div>

            {/* 5-Star Trust Badge */}
            <div className="relative z-10 flex items-center gap-5 border-t border-zinc-800 pt-8 mt-auto">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-wider text-white">5-Star Rated Service</p>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Trusted in Hyderabad</p>
              </div>
            </div>
          </div>

          {/* Value Cards (Right Side) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-zinc-50 border border-zinc-300 p-8 overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-xl ${val.gridClass}`}
              >
                {/* Giant Faded Number Watermark */}
                <div className="absolute -right-4 -bottom-8 text-[8rem] font-black leading-none text-zinc-200/50 select-none transition-transform duration-500 group-hover:-translate-y-4 group-hover:text-orange-100">
                  {val.num}
                </div>

                <div className="relative z-10">
                  <div className="mb-6 inline-block bg-white border border-zinc-200 p-4 shadow-sm transition-colors duration-300 group-hover:border-orange-200 group-hover:bg-orange-50">
                    <val.icon className="h-8 w-8 text-zinc-900 transition-colors duration-300 group-hover:text-orange-600" />
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-3">
                    {val.title}
                  </h4>
                  <p className="text-zinc-600 font-medium leading-relaxed max-w-sm">
                    {val.desc}
                  </p>
                </div>

                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}