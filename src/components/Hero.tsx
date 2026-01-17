import { Button } from "@/components/ui/button";
import ConnectivityGraphic from "./ConnectivityGraphic";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-connectic-purple/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-connectic-pink/10 blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-connectic-purple" />
              <span className="text-sm font-medium text-muted-foreground">AI-Powered Digital Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Build the{" "}
              <span className="gradient-text">Digital Future</span>
              <br />
              <span className="text-foreground/90">AI, Code, & Automation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Helping businesses scale with intelligent websites and automated workflows. 
              Transform your operations with cutting-edge technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Get a Free Audit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                View Our Work
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right graphic */}
          <div className="relative lg:h-[600px] animate-fade-in">
            <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
              <ConnectivityGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
