import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 border-b ${
        scrolled || isOpen
          ? "bg-black/95 backdrop-blur-2xl border-white/10 py-3 shadow-2xl shadow-primary/5" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1440px] relative z-[1010]">
        <div className="flex items-center justify-between">
          {/* Architectural Logo */}
          <a href="#" className="flex items-center gap-3 group relative">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-connectic-purple to-connectic-pink p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-500 ${scrolled || isOpen ? "scale-90" : "scale-100"}`}>
              <div className="w-full h-full rounded-[15px] bg-zinc-950 flex items-center justify-center">
                <span className="text-white font-black text-xl tracking-tighter">M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tight transition-colors drop-shadow-sm ${
                scrolled || isOpen ? "text-white text-xl" : "text-foreground text-2xl"
              } group-hover:text-connectic-purple`}>
                mdev.com
              </span>
            </div>
            {/* Ambient Glow behind logo when scrolled */}
            {scrolled && (
              <div className="absolute -inset-2 bg-connectic-purple/10 blur-xl rounded-full -z-10 animate-pulse-slow" />
            )}
          </a>
          
          {/* Elite Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 mr-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-connectic-purple to-connectic-pink group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            
            <a href="#contact">
              <Button 
                variant="hero" 
                size="sm" 
                className="rounded-full px-6 py-5 bg-zinc-900/50 border border-white/10 hover:border-connectic-purple hover:bg-connectic-purple/10 transition-all duration-500 group shadow-lg overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest group-hover:text-white">
                  Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-connectic-purple to-connectic-pink opacity-0 group-hover:opacity-10 transition-opacity" />
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu Trigger */}
          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
              isOpen 
                ? "bg-white text-black border-white" 
                : "bg-zinc-900 border border-white/10 text-white hover:border-connectic-purple"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* High-Fidelity Mobile Nav Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-[100dvh] z-[1001] bg-black transition-all duration-500 ease-in-out md:hidden flex flex-col ${isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"}`}
        style={{ backgroundColor: '#000000', height: '100dvh' }}
      >
        <div className="flex-1 flex flex-col justify-start px-8 pb-10 sm:pb-0 overflow-y-auto pt-24 bg-black h-full">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-white hover:text-connectic-purple transition-all duration-300 transform hover:translate-x-4 flex items-center justify-between group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="flex items-center gap-4">
                  <span className="text-zinc-800 text-lg">0{i + 1}</span>
                  {link.name}
                </span>
                <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
            
            <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/5">
              <Button 
                variant="hero" 
                className="w-full h-16 rounded-2xl text-lg font-black uppercase tracking-[0.2em] shadow-glow" 
                onClick={() => setIsOpen(false)}
              >
                Initiate Project
              </Button>
              <div className="mt-8 flex justify-center gap-6">
                {/* Minimalist Mobile Icons */}
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500"><Github className="w-5 h-5" /></div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500"><Twitter className="w-5 h-5" /></div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500"><Linkedin className="w-5 h-5" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
