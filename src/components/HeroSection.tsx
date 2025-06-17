
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Kenguva Surya Vishnu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-in-left">
            Software Engineer & Full-Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 animate-slide-in-right">
            Crafting scalable solutions with modern technologies
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-300 animate-fade-in">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>suryakenguva1@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91-9182560368</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Vadodara, India</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 animate-fade-in">
            <Button variant="outline" size="lg" className="bg-transparent border-gray-600 hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300">
              <Github className="mr-2" size={20} />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-gray-600 hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300">
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animate-glow">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
