import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dsa-6060.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-slide-in-left">
            Vishal Hirani
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-slide-in-right">
            AI Student | ML Enthusiast
          </p>
          
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            Passionate about building intelligent systems and exploring the frontiers of 
            artificial intelligence. Currently pursuing BSc in AI at QUEST, Nawabshah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button 
              onClick={() => scrollToSection("about")}
              className="hero-glow bg-gradient-to-r from-[hsl(var(--ai-purple))] to-[hsl(var(--ai-blue))] 
                         hover:shadow-2xl transition-all duration-300 px-8 py-3 text-lg"
            >
              Explore My Work
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-[hsl(var(--ai-purple)/0.5)] hover:bg-[hsl(var(--ai-purple)/0.1)] 
                         transition-all duration-300 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[hsl(var(--ai-purple))] rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-[hsl(var(--ai-blue))] rounded-full animate-float delay-1000 opacity-60" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-[hsl(var(--ai-cyan))] rounded-full animate-float delay-2000 opacity-60" />
    </section>
  );
};

export default Hero;
