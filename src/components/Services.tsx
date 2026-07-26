"use client";

/* ============================================================
   SERVICES — 3D PASS
   ------------------------------------------------------------
   Two changes from the flat version:
   1. Each card tilts toward the cursor in real 3D (perspective +
      rotateX/rotateY + layered translateZ), not just a hover glow.
   2. Each icon is a tiny WebGL scene (react-three-fiber) built
      from primitives shaped like that specific service — a chip
      with pins, a wrench, a shield, a disk platter, wifi arcs,
      a gear — instead of a flat lucide glyph. The icon's rotation
      is coupled to the card's tilt, so it reads as one object.

   Same deps as the hero:
     npm i three @react-three/fiber @react-three/drei maath
   ============================================================ */

import { useRef, type PointerEvent as ReactPointerEvent } from 'react';
import { useState } from 'react';
import {
  motion, useMotionValue, useSpring, useTransform, useMotionTemplate,
  type MotionValue,
} from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  Cpu, ArrowUpRight, Wrench, ShieldCheck,
  HardDrive, Wifi, Settings, MonitorPlay, Laptop, ChevronDown, ChevronUp
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import imgS1 from '../assets/S1.png';
import imgS3 from '../assets/S3.jpg';

type ServiceId = 'refurb' | 'malware' | 'repairs' | 'data' | 'upgrades' | 'network' | 'os' | 'maint';

interface ServiceItem {
  id: ServiceId;
  title: string;
  desc: string;
  icon: LucideIcon; // kept only as a semantic fallback, not rendered
  img: string;
  gridClass: string;
  overlay: string;
  isBlue: boolean;
}

const ICON_BLUE = '#2563eb';
const ICON_BLUE_LIGHT = '#93c5fd';

function IconRig({
  tiltX, tiltY, children,
}: { tiltX: MotionValue<number>; tiltY: MotionValue<number>; children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const spin = useRef(Math.random() * Math.PI * 2);

  useFrame((_, dt) => {
    spin.current += dt * 0.4;
    const g = groupRef.current;
    if (!g) return;
    const targetX = tiltY.get() * 0.7;
    const targetY = spin.current + tiltX.get() * 0.7;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.1);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY, 0.1);
  });

  return <group ref={groupRef}>{children}</group>;
}

function ServiceGeometry({ id, color, accent }: { id: ServiceId; color: string; accent: string }) {
  const accentColor = useRef(new THREE.Color(accent)).current;

  switch (id) {
    case 'refurb':
      return (
        <group scale={0.7} position={[0, -0.05, 0]}>
          <mesh position={[0, -0.12, 0]}>
            <boxGeometry args={[1.15, 0.06, 0.75]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
          </mesh>
          <group position={[0, -0.08, -0.36]} rotation={[-0.55, 0, 0]}>
            <mesh position={[0, 0.36, 0.02]}>
              <boxGeometry args={[1.15, 0.66, 0.04]} />
              <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.3} />
            </mesh>
            <mesh position={[0, 0.36, 0.045]}>
              <planeGeometry args={[0.95, 0.5]} />
              <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.7} />
            </mesh>
          </group>
        </group>
      );

    case 'malware': {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0.6);
      shape.quadraticCurveTo(0.55, 0.45, 0.5, -0.05);
      shape.quadraticCurveTo(0.45, -0.55, 0, -0.75);
      shape.quadraticCurveTo(-0.45, -0.55, -0.5, -0.05);
      shape.quadraticCurveTo(-0.55, 0.45, 0, 0.6);
      return (
        <group scale={0.78}>
          <mesh>
            <extrudeGeometry args={[shape, { depth: 0.14, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 }]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={0.4} />
          </mesh>
          <mesh position={[-0.06, -0.02, 0.16]} rotation={[0, 0, -0.78]}>
            <boxGeometry args={[0.4, 0.08, 0.05]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.7} />
          </mesh>
          <mesh position={[0.1, -0.2, 0.16]} rotation={[0, 0, 0.62]}>
            <boxGeometry args={[0.22, 0.08, 0.05]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.7} />
          </mesh>
        </group>
      );
    }

    case 'repairs':
      return (
        <group scale={0.85} rotation={[0, 0, 0.5]}>
          <mesh position={[0.42, 0.42, 0]}>
            <torusGeometry args={[0.24, 0.09, 12, 24, Math.PI * 1.5]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={0.55} />
          </mesh>
          <mesh position={[-0.16, -0.16, 0]}>
            <boxGeometry args={[0.95, 0.16, 0.16]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={0.55} />
          </mesh>
          <mesh position={[-0.58, -0.58, 0]}>
            <boxGeometry args={[0.05, 0.24, 0.24]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.5} />
          </mesh>
        </group>
      );

    case 'data':
      return (
        <group scale={0.8}>
          <mesh>
            <cylinderGeometry args={[0.6, 0.6, 0.22, 32]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
          </mesh>
          <mesh position={[0, 0.115, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.36, 0.03, 8, 32]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.6} />
          </mesh>
          <mesh position={[0.2, 0.13, 0]}>
            <sphereGeometry args={[0.055, 12, 12]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={1} />
          </mesh>
        </group>
      );

    case 'upgrades':
      return (
        <group scale={0.78}>
          <mesh>
            <boxGeometry args={[0.85, 0.14, 0.85]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.09, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.5, 0.5]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.7} />
          </mesh>
          {[
            [0.55, -0.02, 0.18], [0.55, -0.02, -0.18],
            [-0.55, -0.02, 0.18], [-0.55, -0.02, -0.18],
            [0.18, -0.02, 0.55], [-0.18, -0.02, 0.55],
            [0.18, -0.02, -0.55], [-0.18, -0.02, -0.55],
          ].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]}>
              <boxGeometry args={[0.14, 0.05, 0.05]} />
              <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} />
            </mesh>
          ))}
        </group>
      );

    case 'network':
      return (
        <group scale={0.85} rotation={[0.45, 0, 0]}>
          <mesh>
            <torusGeometry args={[0.55, 0.045, 8, 24, Math.PI]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={0.4} transparent opacity={0.5} />
          </mesh>
          <mesh position={[0, 0.13, 0]}>
            <torusGeometry args={[0.36, 0.045, 8, 24, Math.PI]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={0.4} transparent opacity={0.72} />
          </mesh>
          <mesh position={[0, 0.26, 0]}>
            <torusGeometry args={[0.17, 0.045, 8, 24, Math.PI]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={0.4} />
          </mesh>
          <mesh position={[0, 0.38, 0]}>
            <sphereGeometry args={[0.065, 16, 16]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={1} />
          </mesh>
        </group>
      );

    case 'os':
      return (
        <group scale={0.8}>
          <mesh>
            <boxGeometry args={[1, 0.68, 0.06]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0, 0.035]}>
            <planeGeometry args={[0.86, 0.54]} />
            <meshStandardMaterial color="#020617" roughness={0.4} />
          </mesh>
          <mesh position={[-0.03, 0, 0.05]} rotation={[0, 0, -Math.PI / 2]}>
            <coneGeometry args={[0.13, 0.2, 3]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.9} />
          </mesh>
          <mesh position={[0, -0.42, 0]}>
            <boxGeometry args={[0.28, 0.1, 0.1]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
          </mesh>
        </group>
      );

    case 'maint':
    default:
      return (
        <group scale={0.72}>
          <mesh>
            <torusGeometry args={[0.42, 0.16, 10, 24]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={0.55} />
          </mesh>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[Math.cos(angle) * 0.58, Math.sin(angle) * 0.58, 0]}
                rotation={[0, 0, angle]}
              >
                <boxGeometry args={[0.18, 0.16, 0.16]} />
                <meshStandardMaterial color={color} roughness={0.35} metalness={0.55} />
              </mesh>
            );
          })}
          <mesh>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.6} />
          </mesh>
        </group>
      );
  }
}

function ServiceIcon3D({
  id, white, tiltX, tiltY,
}: { id: ServiceId; white: boolean; tiltX: MotionValue<number>; tiltY: MotionValue<number> }) {
  const color = white ? '#ffffff' : ICON_BLUE;
  const accent = white ? '#dbeafe' : ICON_BLUE_LIGHT;

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [1.6, 1.3, 2.2], fov: 32 }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 3, 2]} intensity={1.1} />
      <directionalLight position={[-2, -1, -2]} intensity={0.25} color={accent} />
      <IconRig tiltX={tiltX} tiltY={tiltY}>
        <ServiceGeometry id={id} color={color} accent={accent} />
      </IconRig>
    </Canvas>
  );
}

/* ============================================================
   TILT — real pointer-driven 3D on each card, layered depth
   ============================================================ */

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0); // -0.5 .. 0.5
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 240, damping: 22, mass: 0.6 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 240, damping: 22, mass: 0.6 });
  const glareX = useSpring(useTransform(mx, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 24 });
  const glareY = useSpring(useTransform(my, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 24 });
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 24 });

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
    glareOpacity.set(1);
  };
  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
    glareOpacity.set(0);
  };

  return { ref, mx, my, rotateX, rotateY, glareX, glareY, glareOpacity, onPointerMove, onPointerLeave };
}

/* ============================================================
   CARD
   ============================================================ */

function ServiceCard({
  card, isLarge, hideOnMobile, animateOnMobile, animationDelay,
}: {
  card: ServiceItem; isLarge: boolean; hideOnMobile: boolean; animateOnMobile: boolean; animationDelay: number;
}) {
  const Icon = card.icon;
  const { ref, rotateX, rotateY, glareX, glareY, glareOpacity, onPointerMove, onPointerLeave } = useTilt();
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22), transparent 55%)`;

  // FIX: Added transformPerspective to the type intersection
  const outerStyle: React.CSSProperties & { animationFillMode?: string; animationDelay?: string; transformPerspective?: number } = animateOnMobile
    ? { transformPerspective: 1000, animationFillMode: 'both', animationDelay: `${animationDelay}ms` }
    : { transformPerspective: 1000 };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={outerStyle}
      className={`group relative ${card.gridClass}
        ${hideOnMobile ? 'hidden md:block' : 'block'}
        ${animateOnMobile ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 md:animate-none' : ''}
      `}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full overflow-hidden bg-slate-950"
      >
        <motion.div style={{ transformStyle: 'preserve-3d' }} className="absolute inset-0">
          <LazyLoadImage
            src={card.img}
            alt={card.title}
            effect="blur"
            /* Images are now completely clear and static (no opacity, grayscale, or hover-zoom animations) */
            className="absolute inset-0 h-full w-full object-cover"
            wrapperClassName="absolute inset-0 h-full w-full"
            threshold={300}
          />

          {/* Simple bottom-up gradient so white text remains readable, but the image is completely clear at the top */}
          <div className={`absolute inset-0 ${card.overlay}`} />

          {/* glare sheen, tracks the pointer */}
          <motion.div
            style={{ background: glareBackground, opacity: glareOpacity, z: 55, transformStyle: 'preserve-3d' }}
            className="pointer-events-none absolute inset-0"
          />
        </motion.div>

        <motion.div style={{ z: 30, transformStyle: 'preserve-3d' }} className="absolute top-5 left-5 flex gap-1 z-20">
          <div className={`h-1 w-1 rounded-full ${card.isBlue ? 'bg-white/50' : 'bg-blue-500/50'}`} />
          <div className={`h-1 w-1 rounded-full ${card.isBlue ? 'bg-white/30' : 'bg-slate-500/50'}`} />
        </motion.div>

        <motion.div style={{ z: 40 }} className="absolute top-5 right-5 z-20 overflow-hidden">
          <ArrowUpRight className={`h-5 w-5 transform translate-y-6 -translate-x-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 ${card.isBlue ? 'text-white' : 'text-blue-500'}`} />
        </motion.div>

        <div className={`relative h-full w-full flex flex-col p-5 sm:p-6 z-10 ${isLarge ? 'justify-end' : 'justify-between'}`}>

          <motion.div
            style={{ z: 70, transformStyle: 'preserve-3d' }}
            className={`${isLarge ? 'mb-auto pt-4' : 'mb-4'} ${isLarge ? 'h-16 w-16 lg:h-20 lg:w-20' : 'h-12 w-12 lg:h-14 lg:w-14'} transition-transform duration-500 group-hover:scale-110`}
            aria-hidden="true"
          >
            <ServiceIcon3D id={card.id} white={card.isBlue} tiltX={rotateY as unknown as MotionValue<number>} tiltY={rotateX as unknown as MotionValue<number>} />
            <span className="sr-only">
              <Icon className="h-1 w-1" />
            </span>
          </motion.div>

          <motion.div style={{ z: 45, transformStyle: 'preserve-3d' }} className="mt-auto">
            <h3 className={`font-black uppercase tracking-tight text-white ${isLarge ? 'text-2xl lg:text-[1.75rem] mb-2 lg:mb-3 leading-tight' : 'text-base lg:text-lg mb-1.5'}`}>
              {card.title}
            </h3>
            <p className={`text-[11px] lg:text-xs font-medium leading-relaxed max-w-[280px] transition-colors duration-500 ${card.isBlue ? 'text-blue-100' : 'text-slate-400 group-hover:text-slate-300'}`}>
              {card.desc}
            </p>
          </motion.div>

        </div>

        <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 ease-out group-hover:w-full ${card.isBlue ? 'bg-white' : 'bg-blue-500'}`} />
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   SERVICES
   ============================================================ */

export default function Services() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Overlay strings are updated to clean gradients that protect text but leave the images clear and unmodified.
  const services: ServiceItem[] = [
    {
      id: 'refurb',
      title: "Refurbished, Sales & Services",
      desc: "Quality refurbished desktops, laptops, and Apple products at affordable prices. We ensure all products are thoroughly tested and come with a warranty.",
      icon: Laptop,
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
      gridClass: "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2",
      overlay: "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent",
      isBlue: false,
    },
    {
      id: 'malware',
      title: "Malware Removal",
      desc: "Complete virus and malware removal services using professional tools to eliminate threats.",
      icon: ShieldCheck,
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent",
      isBlue: false,
    },
    {
      id: 'repairs',
      title: "PC & Laptop Repairs",
      desc: "Expert hardware and software repairs. Fast diagnostics and efficient solutions.",
      icon: Wrench,
      img: imgS1,
      gridClass: "col-span-1",
      overlay: "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent",
      isBlue: false,
    },
    {
      id: 'data',
      title: "Data Recovery",
      desc: "Professional data recovery for corrupted drives, deletions, and secure backups.",
      icon: HardDrive,
      img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent",
      isBlue: false,
    },
    {
      id: 'upgrades',
      title: "Computer Upgrades",
      desc: "RAM upgrades, SSD installations, and other hardware enhancements.",
      icon: Cpu,
      img: imgS3,
      gridClass: "col-span-1",
      overlay: "bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent",
      isBlue: true,
    },
    {
      id: 'network',
      title: "Network Setup",
      desc: "Home and office network configuration, WiFi setup, and troubleshooting.",
      icon: Wifi,
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
      gridClass: "col-span-1 md:col-span-2",
      overlay: "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent",
      isBlue: false,
    },
    {
      id: 'os',
      title: "OS Installation",
      desc: "Clean installation and configuration of Windows, Linux, and MacOS.",
      icon: MonitorPlay,
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent",
      isBlue: false,
    },
    {
      id: 'maint',
      title: "Preventive Maint.",
      desc: "Regular maintenance services to keep your systems running smoothly.",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      overlay: "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent",
      isBlue: false,
    }
  ];

  return (
    <div className="w-full bg-slate-50 relative">

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
           style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
      </div>

      <section id="services" className="relative z-10 px-4 py-12 lg:px-12 lg:py-16 max-w-[1440px] mx-auto">

        {/* --- SHARP ARCHITECTURAL HEADER --- */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6">
          <div className="text-left w-full md:w-1/2">
            <div className="mb-3 flex items-center justify-start gap-2 text-[9px] font-black uppercase tracking-widest text-blue-600">
              <Settings className="h-3.5 w-3.5" />
              <span className="tracking-[0.2em]">Our Capabilities</span>
            </div>

            <h2 className="text-3xl lg:text-[3.25rem] font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
              Specialized <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #18181b' }}>Services</span>
            </h2>
          </div>

          <div className="text-left w-full md:w-[45%] flex flex-col justify-end pb-1">
            <p className="text-[11px] md:text-xs text-slate-600 font-medium pl-3 border-l-2 border-blue-600">
              Comprehensive tech solutions engineered for precision. From structural hardware revival to deep data forensics, we deliver unmatched technical expertise.
            </p>
          </div>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 auto-rows-[minmax(220px,auto)]">
          {services.map((card, index) => {
            const isLarge = card.id === 'refurb';
            const isExtraCard = index >= 3;
            const hideOnMobile = !isExpanded && isExtraCard;
            const animateOnMobile = isExpanded && isExtraCard;

            return (
              <ServiceCard
                key={card.id}
                card={card}
                isLarge={isLarge}
                hideOnMobile={hideOnMobile}
                animateOnMobile={animateOnMobile}
                animationDelay={(index - 3) * 150}
              />
            );
          })}
        </div>

        {/* --- MOBILE "VIEW MORE" BUTTON --- */}
        <div className="mt-6 flex justify-center md:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex h-12 items-center gap-2 bg-slate-950 px-6 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            {isExpanded ? 'View Less' : 'View All Services'}
            {isExpanded ? (
              <ChevronUp className="h-3.5 w-3.5 text-blue-500 group-hover:text-white transition-colors" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-blue-500 group-hover:text-white transition-colors" />
            )}
          </button>
        </div>

      </section>
    </div>
  );
}