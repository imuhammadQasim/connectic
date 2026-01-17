import { Globe, Brain, Cog, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance, SEO-optimized sites built for conversion. From landing pages to complex web applications.",
    gradient: "from-connectic-purple to-connectic-blue",
  },
  {
    icon: Brain,
    title: "AI Website Integration",
    description: "Implementing LLMs and AI features directly into your web ecosystem. Chatbots, content generation, and smart automation.",
    gradient: "from-connectic-blue to-connectic-pink",
  },
  {
    icon: Cog,
    title: "Automation Tool Development",
    description: "Custom-built tools to automate repetitive tasks and sync your favorite apps. Save hours every week.",
    gradient: "from-connectic-pink to-connectic-purple",
  },
  {
    icon: TrendingUp,
    title: "AI-Driven SEO",
    description: "Our proprietary technique using AI-powered content clusters and technical SEO to rank websites faster than traditional methods.",
    gradient: "from-connectic-purple to-connectic-pink",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-connectic-purple/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with strategic thinking to deliver solutions that drive real results.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-connectic-purple transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
