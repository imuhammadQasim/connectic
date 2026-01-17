const techLogos = [
  { name: "Shopify", color: "#95BF47" },
  { name: "WordPress", color: "#21759B" },
  { name: "Make.com", color: "#6D00CC" },
  { name: "Gemini AI", color: "#4285F4" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Python", color: "#3776AB" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
];

const TechStack = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by <span className="gradient-text">Modern Technology</span>
          </h2>
          <p className="text-muted-foreground">
            We use industry-leading tools to build exceptional solutions
          </p>
        </div>
      </div>
      
      {/* Scrolling carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-6"
              >
                <div className="glass-card rounded-2xl px-8 py-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
