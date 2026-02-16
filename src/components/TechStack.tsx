import React, { useState, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const techLogos = [
  { 
    name: "Next.js", 
    color: "#000000", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "High-performance full-stack web architectures."
  },
  { 
    name: "TypeScript", 
    color: "#3178C6", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Type-safe, scalable application development."
  },
  { 
    name: "MongoDB", 
    color: "#47A248", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "Scalable, high-performance NoSQL data storage."
  },
  { 
    name: "Express.js", 
    color: "#000000", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Fast, minimal web frameworks for Node.js."
  },
  { 
    name: "React", 
    color: "#61DAFB", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Dynamic and responsive user interfaces."
  },
  { 
    name: "Node.js", 
    color: "#339933", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Fast, scalable server-side runtime environments."
  },
  { 
    name: "AWS", 
    color: "#FF9900", 
    icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
    description: "Enterprise-grade cloud infrastructure."
  },
  { 
    name: "Google Cloud", 
    color: "#4285F4", 
    icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    description: "Scalable computing & data solutions by Google."
  },
  { 
    name: "Docker", 
    color: "#2496ED", 
    icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    description: "Predictable, isolated container environments."
  },
  { 
    name: "Kubernetes", 
    color: "#326CE5", 
    icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    description: "Automated scaling and management for large systems."
  },
  { 
    name: "Redis", 
    color: "#DC382D", 
    icon: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    description: "Extreme-speed caching and real-time state management."
  },
  { 
    name: "PostgreSQL", 
    color: "#336791", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Industrial-strength relational data storage."
  },
  { 
    name: "OpenAI", 
    color: "#74AA9C", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
    description: "Cutting-edge AI automation and reasoning."
  },
  { 
    name: "Stripe", 
    color: "#635BFF", 
    icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
    description: "Seamless global commerce and payment processing."
  },
  { 
    name: "Python", 
    color: "#3776AB", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Intelligent analytics and backend automation."
  },
  { 
    name: "Vercel", 
    color: "#000000", 
    icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
    description: "High-performance edge deployment platform."
  },
];

const TechCard = ({ tech }: { tech: typeof techLogos[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex-shrink-0 mx-8 cursor-help perspective-1000"
          >
            {/* Gradient Border Container */}
            <div 
              className="relative p-[1px] rounded-[22px] transition-all duration-200 bg-gradient-to-br from-primary/20 via-primary/5 to-primary/10 hover:from-primary/40 hover:to-primary/20"
              style={{ 
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                '--hover-border': tech.color 
              } as React.CSSProperties}
            >
              <div 
                className="group relative glass-card rounded-[21px] px-10 py-8 flex items-center gap-5 transition-all duration-500 hover:-translate-y-1 border-none shadow-sm hover:shadow-xl overflow-hidden"
              >
                {/* Subtle color overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-[21px]"
                  style={{ backgroundColor: tech.color }}
                />
                
                {/* Icon with brand reveal logic */}
                <div className="w-14 h-14 relative flex items-center justify-center">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-10 h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>

                <span className="font-bold text-lg text-foreground/70 group-hover:text-foreground transition-colors duration-500 whitespace-nowrap tracking-wide uppercase text-sm">
                  {tech.name}
                </span>

                {/* Dynamic brand glow */}
                <div 
                  className="absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2 w-3/4 h-8 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-background/95 backdrop-blur-md border-primary/20 px-4 py-2 text-sm shadow-2xl">
          <p className="font-medium">{tech.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const TechStack = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-background">
      {/* Background aesthetic details */}
      <div className="absolute inset-0 bg-secondary/80" />
      <div className="absolute inset-0 opacity-30 mesh-gradient" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-10 max-w-[1440px] relative z-20">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-connectic-purple/10 border border-connectic-purple/20 mb-6 font-handwritten text-xl text-connectic-purple">
            <span className="w-2 h-2 rounded-full bg-connectic-purple animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-connectic-purple font-sans">Our Toolkit</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
            Tools we <span className="gradient-text">mastered</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            We use a curated selection of modern technologies to build stable, 
            performant, and beautiful digital products for our clients.
          </p>
        </div>
      </div>
      
      {/* Scrolling carousel with high-visibility logos */}
      <div className="relative z-10 py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-20" />
        
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll hover:[animation-play-state:paused] py-10">
            {[...techLogos, ...techLogos, ...techLogos].map((tech, index) => (
              <TechCard key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
