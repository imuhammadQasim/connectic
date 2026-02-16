import { Quote, Linkedin, Github, Award, CheckCircle2, Terminal } from "lucide-react";

const CEOSpotlight = () => {
  return (
    <section id="about" className="py-12 relative overflow-hidden bg-background">
      {/* Background Cinematic Aura - Theme Aware */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-connectic-purple/5 blur-[120px] rounded-full animate-float opacity-50" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-connectic-blue/5 blur-[100px] rounded-full animate-float-delayed opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-[1440px]">
        <div className="relative">
          {/* Asymmetrical Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Founder Photo & Metadata - Bento Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Visual Aura */}
                <div className="absolute -inset-10 bg-gradient-to-br from-connectic-purple/20 to-connectic-blue/20 blur-[80px] opacity-0 group-hover:opacity-40 transition-all duration-1000" />
                
                {/* Photo Frame - Premium Glass */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden glass-card p-3 border-foreground/5 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
                  <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-connectic-purple to-connectic-blue flex items-center justify-center relative overflow-hidden">
                    <span className="text-8xl md:text-9xl font-black text-white/20 select-none">MQ</span>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Founder Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="text-white font-black text-sm uppercase tracking-widest">Muhammad Qasim</div>
                      <div className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">Elite Architect</div>
                    </div>
                  </div>
                </div>

                {/* Leadership Badge - Floating */}
                <div className="absolute -top-6 -right-6 px-6 py-4 bg-background/80 backdrop-blur-2xl border border-connectic-purple/30 rounded-3xl shadow-xl animate-float z-20 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-connectic-purple/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-connectic-purple" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/60">Founded in</div>
                      <div className="text-sm font-black text-foreground tracking-tighter">2023 • Vision 2030</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Executive Narrative */}
            <div className="lg:col-span-7 space-y-10 lg:pl-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-connectic-purple/10 border border-connectic-purple/20 mb-6 group cursor-default shadow-sm hover:shadow-connectic-purple/10 transition-all duration-500">
                  <span className="w-2 h-2 rounded-full bg-connectic-purple animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-connectic-purple">Our Leadership Vision</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                  Meet <span className="gradient-text">Muhammad</span>.
                </h2>
                
                <div className="flex items-center gap-4 text-connectic-purple">
                  <div className="h-[1px] w-12 bg-connectic-purple/30" />
                  <span className="font-black uppercase tracking-[0.3em] text-xs">Founder & Chief Visionary</span>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-8 -left-8 w-16 h-16 text-connectic-purple/10 -rotate-12" />
                <p className="text-xl md:text-xl text-foreground font-light leading-relaxed italic border-l-4 border-connectic-purple/30 pl-8 mb-8">
                  "Our mission is to translate complex code into human value. We don't just build systems; 
                  we engineer the future of digital legacy for brands that dare to lead."
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
                  Under Muhammad's leadership, mdev.com has evolved into a powerhouse laboratory 
                  for AI, high-performance web development, and intelligent automation. We bridge the gap 
                  between raw technology and surgical business execution.
                </p>

                {/* Signature & Badges - Elite Polish */}
                <div className="flex flex-wrap items-center gap-12 pt-8">
                  <div className="space-y-1 group/sig cursor-default">
                    <div className="text-4xl font-handwritten text-foreground/80 transition-colors duration-500 group-hover/sig:text-foreground">Muhammad Qasim</div>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-connectic-purple/60 to-transparent transition-all duration-500 group-hover/sig:w-full" />
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-muted-foreground/60 text-[10px] uppercase font-bold tracking-widest border border-foreground/5 py-2 px-3 rounded-lg bg-foreground/[0.02]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> AI Specialist
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground/60 text-[10px] uppercase font-bold tracking-widest border border-foreground/5 py-2 px-3 rounded-lg bg-foreground/[0.02]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Elite Architect
                    </div>
                  </div>
                </div>

                {/* Professional Social Connectivity */}
                <div className="flex items-center gap-6 pt-12">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">Connect Professionally</span>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/isoftwaredeveloper/" 
                      className="group/link flex items-center gap-3 px-6 py-3 rounded-2xl bg-foreground/[0.03] border border-foreground/5 hover:bg-connectic-purple hover:text-white hover:border-connectic-purple transition-all duration-500 shadow-sm"
                    >
                      <Linkedin className="w-5 h-5 transition-transform group-hover/link:scale-110" />
                      <span className="text-sm font-bold tracking-tight">LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/imuhammadQasim" 
                      className="group/link p-4 rounded-2xl bg-foreground/[0.03] border border-foreground/5 hover:bg-foreground hover:text-background transition-all duration-500 shadow-sm"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
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
