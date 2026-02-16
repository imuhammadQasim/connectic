import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle2, MessageSquare, Clock, Globe } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setSelectedServices([]);
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="relative py-12 overflow-hidden bg-background">
      {/* Decorative background  */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-[1440px]">
        <div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content: Info - Elite Bento Layout */}
            <div className="animate-slide-up lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-connectic-purple/10 border border-connectic-purple/20 mb-8 group cursor-default shadow-sm hover:shadow-connectic-purple/10 transition-all duration-500">
                <span className="w-2 h-2 rounded-full bg-connectic-purple animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-connectic-purple">Let's Connect</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight leading-[1.1] relative">
                Ready to transform your <br className="hidden sm:block" />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 gradient-text">Digital Presence?</span>
                  <div className="absolute -bottom-2 -left-2 -right-2 h-6 bg-connectic-purple/10 -rotate-1 skew-x-12 -z-0 rounded-sm" />
                </span>
                <span className="absolute -top-12 -right-4 hidden lg:block font-handwritten text-3xl text-connectic-purple animate-float">Let's talk!</span>
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-12 md:mb-16 max-w-lg leading-relaxed font-light">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'm here to help you navigate the world of technology.
              </p>

              {/* Bento Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
                <div className="group/card relative overflow-hidden glass-card p-5 md:p-6 rounded-[2rem] border-foreground/5 transition-all duration-500 hover:border-connectic-purple/30 hover:shadow-2xl hover:shadow-connectic-purple/5">
                  <div className="absolute -inset-10 bg-connectic-purple/5 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 space-y-3 md:space-y-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-connectic-purple/10 flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-connectic-purple transition-all duration-500">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover/card:text-white" />
                    </div>
                    <div>
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Email</h4>
                      <p className="font-bold text-sm md:text-base text-foreground break-all">mq80140@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="group/card relative overflow-hidden glass-card p-5 md:p-6 rounded-[2rem] border-foreground/5 transition-all duration-500 hover:border-connectic-blue/30 hover:shadow-2xl hover:shadow-connectic-blue/5">
                  <div className="absolute -inset-10 bg-connectic-blue/5 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 space-y-3 md:space-y-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-connectic-blue/10 flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-connectic-blue transition-all duration-500">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 group-hover/card:text-white" />
                    </div>
                    <div>
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Direct Line</h4>
                      <p className="font-bold text-sm md:text-base text-foreground">Let's Connect</p>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2 group/card relative overflow-hidden glass-card p-5 md:p-6 rounded-[2rem] border-foreground/5 transition-all duration-500 hover:border-foreground/20 hover:shadow-2xl">
                  <div className="absolute -inset-10 bg-foreground/5 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 flex items-center gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-foreground/5 flex items-center justify-center">
                      <Globe className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Global Presence</h4>
                      <p className="font-bold text-sm md:text-base text-foreground">Remote-First • Operating Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust indicators - Mobile Wrapped */}
              <div className="pt-8 border-t border-border flex flex-wrap items-center gap-6 md:gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground">24h Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground">Expert Consultation</span>
                </div>
              </div>
            </div>

            {/* Right Content: Form - Elite Cinematic Styling */}
            <div className="animate-fade-in relative mt-12 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-connectic-purple/10 to-connectic-blue/10 blur-[100px] opacity-30 dark:opacity-50" />
              
              <div className="relative glass-card p-6 sm:p-8 md:p-12 rounded-[2rem] border-white/5 dark:border-white/10 shadow-3xl overflow-hidden shadow-black/20">
                {/* Submit Success Overlay */}
                {isSubmitted && (
                  <div className="absolute inset-0 bg-background/98 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 animate-float">
                      <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 text-foreground tracking-tighter">Message Received</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-10 max-w-sm leading-relaxed">
                      Thanks for reaching out! I've received your vision and will get back to you personally within 24 hours.
                    </p>
                    <Button variant="outline" size="xl" onClick={() => setIsSubmitted(false)} className="rounded-xl border-connectic-purple/30 text-connectic-purple hover:bg-connectic-purple hover:text-white px-8 py-6 h-auto">
                      Send New Vision
                    </Button>
                  </div>
                )}

                <div className="mb-8 md:mb-10 space-y-2 relative">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">Tell me your story</h3>
                  <p className="text-[9px] text-muted-foreground/60 uppercase font-black tracking-[0.2em] italic font-handwritten text-sm">Every detail matters</p>
                  
                  {/* Scribble accent */}
                  <svg className="absolute -top-4 -right-4 w-12 h-12 text-connectic-purple/20 hidden md:block" viewBox="0 0 100 100">
                    <path d="M20,80 Q40,20 80,40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 px-1">How should I call you?</label>
                      <Input 
                        placeholder="Your Name" 
                        required 
                        className="h-12 md:h-14 bg-white/50 dark:bg-zinc-900/50 border-foreground/10 focus:border-connectic-purple/30 focus:ring-0 transition-all rounded-2xl placeholder:text-foreground/20 font-medium text-sm"
                      />
                    </div>
                    <div className="space-y-3 relative">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 px-1">Your Email</label>
                      <Input 
                        type="email" 
                        placeholder="hello@world.com" 
                        required 
                        className="h-12 md:h-14 bg-white/50 dark:bg-zinc-900/50 border-foreground/10 focus:border-connectic-blue/30 focus:ring-0 transition-all rounded-2xl placeholder:text-foreground/20 font-medium text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 px-1">How can we help?</label>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {["SaaS Development", "AI Integration", "Web Architecture", "UI/UX Design", "Graphic Design", "Cloud Systems", "AI-SEO", "Social Media Management" ].map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] border transition-all duration-300 active:scale-95 ${
                            selectedServices.includes(service) 
                              ? "bg-connectic-purple text-white border-connectic-purple shadow-lg shadow-connectic-purple/20 rotate-1" 
                              : "border-foreground/10 bg-white/50 dark:bg-zinc-900/50 text-muted-foreground hover:bg-connectic-purple/10 hover:border-connectic-purple/30 hover:text-connectic-purple -rotate-1"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 px-1">Message</label>
                    <Textarea 
                      placeholder="Tell me about the future you want to build..." 
                      className="min-h-[160px] bg-white/50 dark:bg-zinc-900/50 border-foreground/10 focus:border-connectic-purple/30 focus:ring-0 transition-all rounded-2xl resize-none placeholder:text-foreground/20 font-medium leading-relaxed"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      size="xl"
                      className="w-full relative overflow-hidden gradient-bg hover:opacity-100 transition-all shadow-2xl shadow-primary/30 group z-10"
                    >
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="text-xs uppercase font-black tracking-widest">Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-sm uppercase font-black tracking-widest">Send Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      )}
                    </Button>
                    {/* Hand-drawn circle accent under button */}
                    <svg className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] text-connectic-purple/10 pointer-events-none group-hover:text-connectic-purple/20 transition-colors duration-500" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <path d="M10,50 C10,20 390,20 390,50 C390,80 10,80 10,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                    </svg>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-[10px] font-handwritten text-muted-foreground/60 italic">
                      "I'll get back to you personally." — Muhammad
                    </p>
                  </div>
                  {/* Authentic Stamp */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 opacity-20 pointer-events-none -rotate-12 group-hover:opacity-30 transition-opacity duration-700">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-connectic-purple">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
                      <text x="50" y="45" textAnchor="middle" className="text-[10px] font-black uppercase tracking-widest" fill="currentColor">Quality</text>
                      <text x="50" y="60" textAnchor="middle" className="text-[12px] font-handwritten" fill="currentColor">Matter</text>
                    </svg>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
