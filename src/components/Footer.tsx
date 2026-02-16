import { Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram, ExternalLink, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-connectic-purple/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-connectic-purple/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Mission - 4 Columns */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-connectic-purple to-connectic-pink p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-500">
                <div className="w-full h-full rounded-[15px] bg-zinc-950 flex items-center justify-center">
                  <span className="text-white font-black text-xl tracking-tighter">M</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white">mdev.com</span>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm max-w-sm">
              A boutique digital studio focused on high-fidelity products, 
              AI-driven automation, and premium engineering. We turn ambitious 
              visions into beautiful digital realities.
            </p>

            <div className="space-y-4">
              <a href="mailto:muhammad.qasim.dev07@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-connectic-purple/10 group-hover:border-connectic-purple/50 transition-all duration-300">
                  <Mail className="w-4 h-4 text-zinc-400 group-hover:text-connectic-purple" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold group-hover:text-connectic-purple transition-colors">Say Hello</span>
                  <span className="text-sm font-medium text-white">muhammad.qasim.dev07@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Capabilities - 2 Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8 border-l-2 border-connectic-purple pl-4">Capabilities</h4>
            <ul className="space-y-4">
              {['Web Architecture','Full-Stack SaaS','AI Chatbots','AI Automation','Business Solutions','Intelligent UI/UX',].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-zinc-400 hover:text-white flex items-center gap-2 group transition-all duration-300">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-connectic-purple transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Ecosystem - 2 Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8 border-l-2 border-connectic-pink pl-4">Ecosystem</h4>
            <ul className="space-y-4">
              {['Project Genesis', 'Software Development', 'Security Matrix', 'Brand Ethics'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-zinc-400 hover:text-white flex items-center gap-2 group transition-all duration-300">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-connectic-pink transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Us Hub - 4 Columns */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 border-l-2 border-emerald-500 pl-4">Work with us</h4>
            
            <div className="grid grid-cols-1 gap-4">
              <a 
                href="https://www.upwork.com/freelancers/~013a4ddedb9d32be8a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#14a800]/50 hover:bg-[#14a800]/5 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#14a800] font-black text-sm">up</div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-white uppercase tracking-wider">Top Rated Plus</span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-[#14a800]">Freelance on Upwork</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#14a800] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>

              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-500 font-black text-sm italic">f</div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-white uppercase tracking-wider">PRO Developer</span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-emerald-500">Order on Fiverr</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              {[
                { icon: Github, color: 'hover:bg-white hover:text-black', link: '#' },
                { icon: Twitter, color: 'hover:bg-sky-500 hover:text-white', link: '#' },
                { icon: Linkedin, color: 'hover:bg-blue-600 hover:text-white', link: '#' },
                { icon: Instagram, color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-purple-600 hover:text-white', link: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className={`w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 transition-all duration-300 ${social.color} hover:scale-110 active:scale-90`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Architectural Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-20 bg-connectic-purple/10 blur-[60px] rounded-full -translate-y-1/2 -translate-x-1/2" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">
              © {currentYear} mdev.com <span className="text-white/20 mx-2">|</span> All Systems Operational
            </p>
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">
              <a href="#" className="hover:text-white transition-colors hover:cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors hover:cursor-pointer">Terms of Service</a>
            </div>
          </div>

          <div className="flex items-center gap-3 py-2 px-4 rounded-full bg-zinc-900/50 border border-white/5 relative z-10">
            <span className="w-2 h-2 rounded-full bg-connectic-purple animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">
              Built by <span className="text-white">Muhammad</span> <span className="text-zinc-500">mdev.com Software Company</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
