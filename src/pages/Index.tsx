
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections with fade animation
    const sections = document.querySelectorAll('.section-fade');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        <div id="experience">
          <ExperienceSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="education">
          <EducationSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-gray-800/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Kenguva Surya Vishnu. Crafted with passion and modern technologies.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Building the future, one line of code at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
