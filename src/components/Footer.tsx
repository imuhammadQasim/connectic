import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-background">Connectic</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Building the digital future with AI, code, and automation. 
              Helping businesses scale with intelligent solutions.
            </p>
            <div className="flex flex-col gap-3 text-background/70">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>hello@connectic.io</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Remote-First Company</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-background">Quick Links</h3>
            <ul className="space-y-3 text-background/70">
              <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-background">Services</h3>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-background transition-colors">AI Integration</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">SEO Services</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Connectic. All rights reserved.
          </p>
          <p className="text-sm">
            Built by <span className="gradient-text font-semibold">Muhammad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
