import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-secondary/70 to-secondary/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-7">
            <span className="gradient-text block mb-4">سعد موبائل اینڈ طلحہ جنرل سٹور</span>
            <span className="text-foreground text-3xl md:text-5xl lg:text-6xl">Saad Mobile & Talha General Store</span>
          </h1>
          
          <div className="highlight-strip inline-block mb-8 text-xl md:text-2xl animate-pulse-glow">
            <Sparkles className="inline-block w-6 h-6 mr-2" />
            Everything You Need – All in One Place!
            <Sparkles className="inline-block w-6 h-6 ml-2" />
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto">
            Mobile Services • EasyPaisa • JazzCash • Snacks • Drinks • Electronics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 animate-float"
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("products")}
              className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
            >
              View Products
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
    </section>
  );
};

export default Hero;
