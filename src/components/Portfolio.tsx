import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "EcoSmart E-Commerce",
    category: "Full Stack Development",
    description: "A sustainable marketplace with AI-driven product recommendations and carbon footprint tracking.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    stats: "150% Sales Boost",
    tags: ["React", "Node.js", "Gemini AI", "Stripe"],
    gradient: "from-connectic-purple to-connectic-blue"
  },
  {
    title: "Lumina CRM Dashboard",
    category: "Enterprise Software",
    description: "Next-gen business intelligence platform with real-time predictive analytics and team collaboration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    stats: "40% Higher ROI",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "AWS"],
    gradient: "from-connectic-blue to-connectic-pink"
  },
  {
    title: "SkyNet Logistics AI",
    category: "Automation Systems",
    description: "Intelligent fleet management and automated warehouse routing system using neural networks.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
    stats: "30% OpEx Reduced",
    tags: ["Python", "Kubernetes", "Docker", "TensorFlow"],
    gradient: "from-connectic-pink to-connectic-purple"
  }
];

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" className="py-12 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1440px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-connectic-purple/10 border border-connectic-purple/20 mb-6 group cursor-default shadow-sm hover:shadow-connectic-purple/10 transition-all duration-500">
              <span className="w-2 h-2 rounded-full bg-connectic-purple animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-connectic-purple">Our Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 md:mb-6 text-foreground">
              Crafting <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
              We don't just write code; we build digital experiences that matter. 
              Here is a look at some of the projects we've poured our hearts into.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button
              variant="default"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full bg-primary/90 hover:bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-110 active:scale-95 border-none group"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              onClick={scrollNext}
              className="rounded-full bg-primary/90 hover:bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-110 active:scale-95 border-none group"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex -ml-6 md:-ml-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="flex-[0_0_92%] md:flex-[0_0_80%] lg:flex-[0_0_65%] min-w-0 pl-3 md:pl-10"
              >
                <div className="group relative cursor-pointer">
                  {/* Floating Glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-1000 rounded-[3rem] pointer-events-none`} />

                  {/* Card Container - Midnight Azure Classy Aesthetic */}
                  <div className="relative overflow-hidden rounded-[3rem] aspect-[3/4] md:aspect-[16/9] bg-blue-50/50 dark:bg-[#030712]/95 border border-foreground/5 dark:border-blue-500/10 backdrop-blur-3xl shadow-2xl transition-all duration-700 group-hover:border-blue-500/20 dark:group-hover:border-blue-500/30 group-hover:shadow-blue-500/5">
                    
                    {/* Background Image with Smart Reveal (Matched to Services) */}
                    <div className="absolute inset-0">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-40 dark:opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 ease-out scale-100 group-hover:scale-110"
                      />
                      {/* Deep Bottom Gradient (Matched to Services) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 group-hover:opacity-95 transition-opacity duration-700" />
                    </div>

                    {/* Content Layer (Matched to Services) */}
                    <div className="absolute inset-0 p-6 md:p-14 flex flex-col justify-end items-start z-10 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                      <div className="w-full space-y-6">
                        
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl animate-float">
                            {project.category}
                          </div>
                          <div className={`px-5 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg`}>
                            {project.stats}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none group-hover:gradient-text transition-all duration-500 drop-shadow-md">
                            {project.title}
                          </h3>
                          <p className="text-white/70 text-sm md:text-xl max-w-2xl leading-relaxed group-hover:text-white transition-colors duration-500 font-light drop-shadow-sm">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack & Action - Elite Reveal */}
                        <div className="flex flex-wrap items-center justify-between gap-8 pt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="text-[10px] font-bold text-white uppercase tracking-widest border border-connectic-purple/20 px-3 py-1.5 rounded-lg bg-gradient-to-r from-connectic-purple/30 to-connectic-blue/30 backdrop-blur-xl shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="inline-flex items-center gap-2 group/btn cursor-pointer">
                            <span className="text-white font-bold tracking-[0.1em] uppercase text-xs border-b-2 border-white/30 group-hover/btn:border-connectic-purple transition-all duration-300">
                              Explore Case Study
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-connectic-purple transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
