import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Brain,
  Cpu,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer & Full-Stack Developer";

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
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 md:py-0">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse floating-card"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 floating-card"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500 floating-card"></div>

        {/* Tech floating icons with smooth movement */}
        <div className="absolute top-16 md:top-20 left-10 md:left-20 text-blue-400/30 animate-pulse floating-tech">
          <Brain size={24} className="md:w-8 md:h-8" />
        </div>
        <div className="absolute top-24 md:top-32 right-16 md:right-32 text-purple-400/30 animate-pulse delay-1000 floating-tech">
          <Cpu size={20} className="md:w-7 md:h-7" />
        </div>
        <div className="absolute bottom-24 md:bottom-32 left-16 md:left-32 text-cyan-400/30 animate-pulse delay-500 floating-tech">
          <Zap size={22} className="md:w-8 md:h-8" />
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* NEW: AI-based animated elements */}
        <div className="ai-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={`ai-particle-${i}`}
              className="ai-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* NEW: Neural network lines */}
        <svg
          className="neural-network"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(8)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <line
                key={`line-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                className="neural-line"
                style={{
                  animationDuration: `${Math.random() * 5 + 5}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            );
          })}
        </svg>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 relative">
            <span className="gradient-text text-shadow-glow">
              Surya Vishnu Kenguva
            </span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 md:mb-4 h-8 md:h-12 flex items-center justify-center">
            <span className="animate-typing font-mono">{displayText}</span>
          </div>

          <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 animate-slide-in-right max-w-xl md:max-w-2xl mx-auto leading-relaxed px-4">
            A recent B.Tech graduate with practical experience in AI, machine
            learning, and full-stack development. I enjoy building real-world
            projects and continuously upgrading my skills.
          </p>

          {/* Enhanced Contact Info - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-8 mb-8 md:mb-12 text-gray-300 animate-fade-in px-4">
            <div className="flex items-center gap-2 md:gap-3 glass-effect px-3 md:px-4 py-2 rounded-full magnetic-hover text-sm md:text-base">
              <Mail
                size={16}
                className="md:w-[18px] md:h-[18px] text-blue-400"
              />
              <span className="font-medium truncate">
                suryakenguva1@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 glass-effect px-3 md:px-4 py-2 rounded-full magnetic-hover text-sm md:text-base">
              <Phone
                size={16}
                className="md:w-[18px] md:h-[18px] text-green-400"
              />
              <span className="font-medium">+91-9182560368</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 glass-effect px-3 md:px-4 py-2 rounded-full magnetic-hover text-sm md:text-base">
              <MapPin
                size={16}
                className="md:w-[18px] md:h-[18px] text-purple-400"
              />
              <span className="font-medium">Visakhapatnam, India</span>
            </div>
          </div>

          {/* Enhanced Social Links - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-8 md:mb-12 animate-fade-in px-4">
            <a
              href="https://github.com/SuryaVishnuKenguva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="neon-border bg-transparent hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group text-sm md:text-base"
              >
                <Github
                  className="mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300"
                  size={18}
                />
                GitHub
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/kenguva-surya-vishnu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="neon-border bg-transparent hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group text-sm md:text-base"
              >
                <Linkedin
                  className="mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300"
                  size={18}
                />
                LinkedIn
              </Button>
            </a>
          </div>

          {/* Enhanced CTA Buttons - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 animate-fade-in px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 magnetic-hover animate-gradient text-base md:text-lg font-semibold shadow-2xl"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="neon-border bg-transparent hover:bg-gray-800/50 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 magnetic-hover text-base md:text-lg font-semibold group"
              onClick={() => {
                // Create a link to download the resume
                const link = document.createElement("a");
                link.href = "/Resume.pdf";
                link.download = "Surya_Vishnu_Kenguva_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download
                className="mr-2 md:mr-3 group-hover:animate-bounce"
                size={18}
              />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
