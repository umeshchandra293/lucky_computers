export default function Navbar() {
  return (
    <nav className="absolute top-0 z-50 flex w-full items-center justify-between p-6 lg:px-12 lg:py-8">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 bg-orange-600" />
        <span className="text-xl font-black uppercase tracking-tighter text-zinc-900">LuckyComputers</span>
      </div>

      <div className="hidden space-x-8 text-sm font-bold uppercase tracking-widest text-zinc-500 md:flex items-center">
        <a href="#home" className="hover:text-zinc-900 transition-colors">Home</a>
        <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
        <a href="#why-us" className="hover:text-zinc-900 transition-colors">Why Us</a>
        <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
      </div>

      <button className="border-2 border-zinc-900 bg-zinc-900 px-6 py-2 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-zinc-900">
        Book Repair
      </button>
    </nav>
  );
}