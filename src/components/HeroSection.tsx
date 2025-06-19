
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowDown, Brain, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Engineer & Full-Stack Developer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-gradient h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse floating-card"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 floating-card"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500 floating-card"></div>
        
        {/* Tech floating icons */}
        <div className="absolute top-20 left-20 text-blue-400/30 animate-pulse">
          <Brain size={32} />
        </div>
        <div className="absolute top-32 right-32 text-purple-400/30 animate-pulse delay-1000">
          <Cpu size={28} />
        </div>
        <div className="absolute bottom-32 left-32 text-cyan-400/30 animate-pulse delay-500">
          <Zap size={30} />
        </div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="gradient-text text-shadow-glow">Kenguva Surya Vishnu</span>
          </h1>
          
          <div className="text-xl md:text-3xl text-gray-300 mb-4 h-12 flex items-center justify-center">
            <span className="animate-typing font-mono">{displayText}</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-8 animate-slide-in-right max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent solutions with cutting-edge AI, machine learning, and full-stack technologies
          </p>
          
          {/* Enhanced Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-gray-300 animate-fade-in">
            <div className="flex items-center gap-3 glass-effect px-4 py-2 rounded-full magnetic-hover">
              <Mail size={18} className="text-blue-400" />
              <span className="font-medium">suryakenguva1@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 glass-effect px-4 py-2 rounded-full magnetic-hover">
              <Phone size={18} className="text-green-400" />
              <span className="font-medium">+91-9182560368</span>
            </div>
            <div className="flex items-center gap-3 glass-effect px-4 py-2 rounded-full magnetic-hover">
              <MapPin size={18} className="text-purple-400" />
              <span className="font-medium">Vadodara, India</span>
            </div>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in">
            <Button 
              variant="outline" 
              size="lg" 
              className="neon-border bg-transparent hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group"
            >
              <Github className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="neon-border bg-transparent hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
              LinkedIn
            </Button>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 magnetic-hover animate-gradient text-lg font-semibold shadow-2xl"
            >
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="neon-border bg-transparent hover:bg-gray-800/50 px-8 py-4 rounded-full transition-all duration-300 magnetic-hover text-lg font-semibold group"
            >
              <Download className="mr-3 group-hover:animate-bounce" size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ArrowDown size={16} className="text-blue-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
