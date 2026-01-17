import { Quote, Linkedin, Twitter } from "lucide-react";

const CEOSpotlight = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-connectic-purple/10 blur-3xl rounded-full" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-connectic-blue/10 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Photo section */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-connectic-purple/20 to-connectic-pink/20 blur-xl scale-110" />
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-connectic-purple/30 animate-spin" style={{ animationDuration: "20s" }} />
                
                {/* Photo container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-connectic-purple to-connectic-blue flex items-center justify-center">
                    <span className="text-6xl md:text-7xl font-bold text-white">M</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content section */}
            <div className="lg:col-span-3">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-connectic-purple/20" />
                
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Meet <span className="gradient-text">Muhammad</span>
                </h2>
                <p className="text-connectic-purple font-semibold mb-6">Founder & CEO</p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Led by Muhammad, our CEO, we bridge the gap between complex technology and simple, 
                  effective business solutions. With expertise in AI, web development, and automation, 
                  we transform how businesses operate in the digital age.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  "Our mission is to democratize access to powerful technology. Every business, 
                  regardless of size, deserves the tools to compete in today's digital landscape."
                </p>
                
                {/* Social links */}
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-connectic-purple/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-connectic-purple" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-connectic-purple/10 transition-colors">
                    <Twitter className="w-5 h-5 text-connectic-purple" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSpotlight;
