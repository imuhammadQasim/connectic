import React from "react";
import { Quote, ExternalLink, Calendar, Code2 } from "lucide-react";

const testimonialsRow1 = [
  {
    name: "Jonathan Reeves",
    role: "CEO, TechFlow Systems",
    content: "mdev.com transformed our legacy architecture into a high-performance digital powerhouse. Their attention to detail in delivery is unmatched in the industry.",
    avatar: "/testimonials/client_jonathan_reeves_1768741597963.png",
    date: "Oct 2025",
    stack: ["AI Architecture", "Next.js"],
    gradient: "from-connectic-purple/20 to-connectic-blue/20"
  },
  {
    name: "Sarah Chen",
    role: "Lead Trader, BlueAlpha",
    content: "The automation tools developed saved us hundreds of manual hours. It's rare to find a team that understands code and business execution so deeply.",
    avatar: "/testimonials/client_sarah_chen_1768741620010.png",
    date: "Nov 2025",
    stack: ["Node.js", "Python"],
    gradient: "from-connectic-blue/20 to-connectic-pink/20"
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Zenith Retail",
    content: "Our e-commerce conversion jumped by 150% after the redesign. The aesthetic excellence combined with technical speed is exactly what we needed.",
    avatar: "/testimonials/client_marcus_thorne_1768741642237.png",
    date: "Dec 2025",
    stack: ["MERN Stack", "Stripe"],
    gradient: "from-connectic-pink/20 to-connectic-purple/20"
  }
];

const testimonialsRow2 = [
  {
    name: "Elena Rodriguez",
    role: "CTO, NexaCloud",
    content: "Building an enterprise-scale MERN application with mdev.com was the best decision we made. Their cloud infrastructure architecture is future-proof.",
    avatar: "/testimonials/client_elena_rodriguez_1768741668085.png",
    date: "Jan 2026",
    stack: ["Kubernetes", "AWS"],
    gradient: "from-connectic-purple/20 to-connectic-blue/20"
  },
  {
    name: "David Kim",
    role: "Product Manager, SphereV",
    content: "The level of detail in the UI/UX work is cinematic. They didn't just build a product; they crafted a digital experience that our users absolutely love.",
    avatar: "/testimonials/client_jonathan_reeves_1768741597963.png", // Reusing for variety
    date: "Sep 2025",
    stack: ["UI/UX", "Tailwind"],
    gradient: "from-connectic-blue/20 to-connectic-pink/20"
  },
  {
    name: "Sophie Laurent",
    role: "COO, ParisDigital",
    content: "Exceptional communication and surgical execution. They delivered a complex automation system ahead of schedule with zero technical debt.",
    avatar: "/testimonials/client_elena_rodriguez_1768741668085.png", // Reusing for variety
    date: "Aug 2025",
    stack: ["Automation", "DevOps"],
    gradient: "from-connectic-pink/20 to-connectic-purple/20"
  }
];

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  date: string;
  stack: string[];
  gradient: string;
}

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="flex-shrink-0 w-[85vw] sm:w-[450px] group relative mx-4">
    <div className={`absolute -inset-4 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-15 blur-3xl transition-all duration-700 rounded-[3rem] pointer-events-none`} />
    
    <div className="relative p-6 md:p-8 rounded-[2.5rem] bg-zinc-950/80 border border-white/10 backdrop-blur-3xl transition-all duration-500 group-hover:border-white/30 group-hover:bg-zinc-950/90 shadow-2xl h-full flex flex-col justify-between">
      <Quote className="absolute top-8 right-8 w-12 h-12 text-white/[0.05] transition-colors group-hover:text-white/[0.1]" />
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/20 group-hover:border-connectic-purple/60 transition-colors duration-500 shadow-xl">
            <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-white font-extrabold text-lg leading-tight drop-shadow-sm">{t.name}</h4>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/50">{t.role}</p>
          </div>
        </div>
        
        <p className="text-white font-medium text-base leading-relaxed italic drop-shadow-sm">
          "{t.content}"
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <Calendar className="w-3 h-3 text-connectic-purple" />
            <span className="text-[9px] font-black uppercase tracking-widest text-white/60">{t.date}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <Code2 className="w-3 h-3 text-connectic-blue" />
            <span className="text-[9px] font-black uppercase tracking-widest text-white/60">{t.stack[0]}</span>
          </div>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-connectic-purple/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-connectic-purple/30">
          <ExternalLink className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Aura */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-connectic-purple/5 blur-[120px] rounded-full opacity-50 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-connectic-purple/10 border border-connectic-purple/20 mb-6 group cursor-default shadow-sm hover:shadow-connectic-purple/10 transition-all duration-500">
            <span className="w-2 h-2 rounded-full bg-connectic-purple animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-connectic-purple">Kind Words</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-light">
            Every project is a partnership. We take pride in the relationships we build 
            and the value we deliver to businesses around the world.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Rows */}
      <div className="space-y-8 relative py-8">
        {/* Row 1 - Direct */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-scroll-reverse hover:[animation-play-state:paused]">
            {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
        
        {/* Side Fades for Real-time Feel */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      {/* Trust Platforms CTAs - Layered Contrast UX */}
      <div className="container mx-auto px-6 mt-16 relative z-10 flex flex-wrap justify-center gap-6">
        <a 
          href="https://www.upwork.com/freelancers/~013a4ddedb9d32be8a" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-10 py-5 rounded-[2rem] bg-[#14a800] border border-white/10 hover:bg-black/80 hover:backdrop-blur-xl transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 hover:border-[#14a800] hover:shadow-[0_0_30px_rgba(20,168,0,0.2)]"
        >
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-[#14a800]">
            <span className="text-base font-black text-[#14a800] group-hover:text-white transition-colors duration-500">up</span>
          </div>
          <div>
            <div className="text-white font-black text-lg leading-tight tracking-tight drop-shadow-sm">Top Rated Plus</div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-[#14a800] transition-colors">Hire Me on Upwork</div>
          </div>
          <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors ml-2" />
        </a>

        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-10 py-5 rounded-[2rem] bg-emerald-500 border border-white/10 hover:bg-black/80 hover:backdrop-blur-xl transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
        >
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-emerald-500">
            <span className="text-base font-black text-emerald-500 group-hover:text-white transition-colors duration-500 italic">f</span>
          </div>
          <div>
            <div className="text-white font-black text-lg leading-tight tracking-tight drop-shadow-sm">PRO Developer</div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-emerald-500 transition-colors">Order on Fiverr</div>
          </div>
          <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors ml-2" />
        </a>
      </div>

      {/* Footer Trust Indicators */}
      <div className="container mx-auto px-6 mt-20 hidden md:block">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-20 hover:opacity-40 transition-opacity duration-700">
          {["Microsoft", "Stripe", "International Digital", "Austin Davids Apartments"].map(logo => (
            <div key={logo} className="text-sm font-black uppercase tracking-[0.4em] pointer-events-none">{logo}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
