import {
  Cpu, ArrowUpRight, Wrench, ShieldCheck,
  HardDrive, Wifi, Settings, MonitorPlay, Laptop
} from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import imgS1 from '../assets/S1.png';
import imgS3 from '../assets/S3.jpg';

export default function Services() {
  const services = [
    {
      id: 'refurb',
      title: "Refurbished, Sales & Services",
      desc: "Quality refurbished desktops, laptops, and Apple products at affordable prices. We ensure all products are thoroughly tested and come with a warranty.",
      icon: Laptop,
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2",
      overlay: "bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20 group-hover:via-zinc-950/60",
      isOrange: false,
      alwaysColored: true,
    },
    {
      id: 'malware',
      title: "Malware Removal",
      desc: "Complete virus and malware removal services using professional tools to eliminate all threats.",
      icon: ShieldCheck,
      img: "https://images.unsplash.com/photo-1614064641913-6b71f3bb4441?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    },
    {
      id: 'repairs',
      title: "PC & Laptop Repairs",
      desc: "Expert hardware and software repairs. Fast diagnostics and efficient solutions for any issue.",
      icon: Wrench,
      img: imgS1,
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/40",
      isOrange: false,
    },
    {
      id: 'data',
      title: "Data Recovery",
      desc: "Professional data recovery for corrupted drives, accidental deletions, and secure backups.",
      icon: HardDrive,
      img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    },
    {
      id: 'upgrades',
      title: "Computer Upgrades",
      desc: "RAM upgrades, SSD installations, and other hardware enhancements to improve performance.",
      icon: Cpu,
      img: imgS3,
      gridClass: "col-span-1",
      overlay: "bg-orange-600/90 mix-blend-multiply group-hover:bg-orange-600/70",
      isOrange: true,
    },
    {
      id: 'network',
      title: "Network Setup",
      desc: "Home and office network configuration, WiFi setup, and troubleshooting for optimal connectivity.",
      icon: Wifi,
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
      gridClass: "col-span-1 md:col-span-2",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    },
    {
      id: 'os',
      title: "OS Installation",
      desc: "Clean installation and configuration of Windows, Linux, and MacOS with all necessary drivers.",
      icon: MonitorPlay,
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    },
    {
      id: 'maint',
      title: "Preventive Maint.",
      desc: "Regular maintenance services to keep your systems running smoothly and prevent potential issues.",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-zinc-950/85 group-hover:bg-zinc-950/60",
      isOrange: false,
    }
  ];

  return (
    <section id="services" className="px-6 py-24 lg:px-16 bg-zinc-200">

      <div className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-zinc-900 uppercase">
          Our Services
        </h2>
        <p className="mt-2 text-lg font-medium text-zinc-600">
          Comprehensive tech solutions for all your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 auto-rows-[minmax(280px,auto)]">
        {services.map((card) => {
          const Icon = card.icon;
          const isLarge = card.id === 'refurb';

          return (
            <div
              key={card.id}
              className={`group relative overflow-hidden bg-zinc-950 ${card.gridClass}`}
            >
              <LazyLoadImage
                src={card.img}
                alt={card.title}
                effect="blur"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
                  card.alwaysColored
                    ? "opacity-100 grayscale-0"
                    : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                }`}
                wrapperClassName="absolute inset-0 h-full w-full"
                threshold={300}
              />

              <div className={`absolute inset-0 transition-colors duration-500 ${card.overlay}`} />

              <div className="absolute top-6 left-6 flex gap-1.5 z-20">
                <div className={`h-1 w-1 rounded-full ${card.isOrange ? 'bg-white/50' : 'bg-orange-500/50'}`} />
                <div className={`h-1 w-1 rounded-full ${card.isOrange ? 'bg-white/30' : 'bg-zinc-500/50'}`} />
              </div>

              <div className="absolute top-6 right-6 z-20 overflow-hidden">
                <ArrowUpRight className={`h-6 w-6 transform translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 ${card.isOrange ? 'text-white' : 'text-orange-500'}`} />
              </div>

              <div className={`relative h-full w-full flex flex-col p-8 z-10 ${isLarge ? 'justify-end' : 'justify-between'}`}>

                <div className={isLarge ? 'mb-auto pt-6' : 'mb-6'}>
                  <Icon className={`h-10 w-10 transition-transform duration-500 group-hover:scale-110 ${card.isOrange ? 'text-white' : 'text-orange-500'}`} />
                </div>

                <div className="mt-auto">
                  <h3 className={`font-black uppercase tracking-tight text-white ${isLarge ? 'text-3xl lg:text-4xl mb-4' : 'text-xl mb-2'}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm font-medium leading-relaxed max-w-sm transition-colors duration-500 ${card.isOrange ? 'text-orange-100' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                    {card.desc}
                  </p>
                </div>

              </div>

              <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 ease-out group-hover:w-full ${card.isOrange ? 'bg-white' : 'bg-orange-500'}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}