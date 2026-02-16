import { Hand, Sparkles, Pencil, MousePointer2 } from "lucide-react";

const HandcraftedShowcase = () => {
  return (
    <div className="relative w-full h-full p-4 flex items-center justify-center">
      {/* Main Large Image - Artisan at work / Clean Workspace */}
      <div className="relative w-full h-full max-h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group/image">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200" 
          alt="mdev.com workspace" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover/image:scale-110 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Floating "Man-Made" elements */}
        <div className="absolute top-12 left-12 p-6 glass-card rounded-3xl border-white/20 animate-float shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-connectic-purple/20 flex items-center justify-center">
              <Pencil className="w-6 h-6 text-connectic-purple" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-black">Founded in Passion</p>
              <p className="text-xl font-handwritten text-connectic-purple">Every pixel matters</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 p-6 glass-card rounded-3xl border-white/20 animate-float-delayed shadow-2xl">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-black text-right">Human Review</p>
              <p className="text-xl font-handwritten text-connectic-pink text-right">Signed by mdev</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-connectic-pink/20 flex items-center justify-center">
              <Hand className="w-6 h-6 text-connectic-pink" />
            </div>
          </div>
        </div>

        {/* Floating Code Snippet - Human Logic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 p-4 glass-card rounded-2xl border-white/10 opacity-0 group-hover/image:opacity-100 transition-all duration-700 scale-90 group-hover/image:scale-100 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <pre className="text-[10px] text-black/80 font-mono leading-relaxed">
            <code>{`const buildWithCare = () => {
  return "Where Quality Matters";
};`}</code>
          </pre>
        </div>

        {/* Cursor Indicator */}
        <div className="absolute top-1/4 right-1/4 animate-pulse pointer-events-none">
          <MousePointer2 className="w-6 h-6 text-white drop-shadow-lg" />
          <div className="mt-1 px-2 py-1 bg-connectic-purple rounded-lg text-[8px] font-bold text-white uppercase tracking-tighter">mdev crafting...</div>
        </div>
      </div>

      {/* Background Decorative Blobs */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-connectic-purple/5 blur-[120px] rounded-full" />
    </div>
  );
};

export default HandcraftedShowcase;
