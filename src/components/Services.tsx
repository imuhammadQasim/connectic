import { Globe, Brain, Cog, TrendingUp, Smartphone, Palette, Cloud, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance MERN stack architectures (MongoDB, Express, React, Node.js) built for enterprise-grade scalability and extreme speed.",
    gradient: "from-connectic-purple to-connectic-blue",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Brain,
    title: "AI Website Integration",
    description: "Deep integration of Gemini AI, Anthropic, and OpenAI into your digital ecosystem. Intelligent reasoning and automation for smarter web apps.",
    gradient: "from-connectic-blue to-connectic-pink",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Cog,
    title: "Automation Tool Development",
    description: "Custom intelligent automation using Python and Node.js. Save thousands of hours by syncing entire business ecosystems with high-speed tools.",
    gradient: "from-connectic-pink to-connectic-purple",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: TrendingUp,
    title: "AI-Driven SEO",
    description: "Proprietary AI content clustering and technical SEO that dominates rankings faster than anything traditional methods can offer.",
    gradient: "from-connectic-purple to-connectic-pink",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide premium, fluid user experiences across every device.",
    gradient: "from-connectic-blue to-connectic-purple",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Palette,
    title: "Premium UI/UX Design",
    description: "Cinematic visual identities and user interfaces built for high conversion. We focus on aesthetic excellence and intuitive navigation.",
    gradient: "from-connectic-pink to-connectic-blue",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable enterprise cloud on AWS and Google Cloud. Utilizing Docker and Kubernetes for rock-solid, auto-scaling global infrastructure.",
    gradient: "from-connectic-purple to-connectic-blue",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description: "Unlock massive growth with data-driven consulting. We help you navigate the AI-first digital landscape with surgical precision.",
    gradient: "from-connectic-blue to-connectic-pink",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
];

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="services" className="py-12 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-connectic-purple/5 blur-[120px] rounded-full opacity-50 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-[1440px]">
        {/* Standardized Elite Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4 md:px-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-connectic-purple/10 border border-connectic-purple/20 mb-6 group cursor-default shadow-sm hover:shadow-connectic-purple/10 transition-all duration-500">
              <span className="w-2 h-2 rounded-full bg-connectic-purple animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-connectic-purple">Full-Stack Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 text-foreground">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We architect high-performance digital ecosystems with surgical precision. 
              From AI integration to enterprise cloud, we deliver the future of business.
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
        
        {/* Carousel viewport */}
        <div className="overflow-visible px-4 md:px-0" ref={emblaRef}>
          <div className="flex -ml-6 md:-ml-8 lg:-ml-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex-[0_0_92%] md:flex-[0_0_75%] lg:flex-[0_0_52%] min-w-0 pl-3 md:pl-8 lg:pl-10"
              >
                <div className="group relative cursor-pointer p-4">
                  {/* Brand-Matched Background Glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 blur-[60px] transition-all duration-1000 rounded-[3rem] pointer-events-none`} />

                  {/* Main Bento Card - Slightly lightened for a more premium look while keeping contrast */}
                  <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] md:aspect-[16/10.5] bg-zinc-950/90 border border-white/5 backdrop-blur-2xl transition-all duration-700 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-black/40">
                    
                    {/* Background Image - Smart Reveal (Monochrome to Color) */}
                    <div className="absolute inset-0 transition-all duration-1000 ease-out group-hover:scale-105">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                      />
                    </div>

                    {/* Gradient Overlays - Deepened for elite text legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-overlay opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />

                    {/* Content Layer */}
                    <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end items-start z-10">
                      <div className="flex flex-col gap-6 w-full">
                        
                        {/* Luminous Icon Container */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} p-[1px] shadow-2xl transform transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:rotate-3`}>
                          <div className="w-full h-full rounded-2xl bg-black/60 backdrop-blur-md flex items-center justify-center overflow-hidden relative group-hover:bg-transparent transition-colors duration-500">
                            <service.icon className="w-8 h-8 text-white relative z-10" />
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                            {service.title}
                          </h3>
                          
                          <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-xl drop-shadow-sm group-hover:text-white transition-all duration-500">
                            {service.description}
                          </p>
                        </div>

                        {/* Animated Underline Reveal */}
                        <div className="h-[2px] w-0 group-hover:w-24 bg-gradient-to-r from-white/80 to-transparent transition-all duration-700 delay-100 rounded-full" />
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

export default Services;
