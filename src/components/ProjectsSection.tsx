
import { ExternalLink, Github, Code, Database, Brain, Eye, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Drive Aware Alarm System",
      category: "AI & Computer Vision",
      description: "Real-time driver monitoring system with 85% accuracy in detecting drowsiness and improper positioning. Reduced false alerts by 30% using advanced ML algorithms.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      icon: <Brain className="w-6 h-6" />,
      achievements: ["85% accuracy rate", "30% reduction in false alerts", "Real-time processing"],
      award: "Consolation Prize at PU Hackathon 1.0"
    },
    {
      title: "TravelEase Platform",
      category: "Full-Stack Development",
      description: "Comprehensive travel management platform with real-time booking, notifications, and itinerary management. Enhanced booking efficiency by 20%.",
      technologies: [".NET Core", "PostgreSQL", "Redis", "RabbitMQ", "Azure"],
      icon: <Database className="w-6 h-6" />,
      achievements: ["20% booking efficiency improvement", "15% error reduction", "Real-time notifications"]
    },
    {
      title: "Gemini Clone UI",
      category: "Frontend Development",
      description: "Modern AI platform interface replica with enhanced UX/UI, improving user satisfaction by 10% and optimizing load times.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: <Code className="w-6 h-6" />,
      achievements: ["10% user satisfaction increase", "Optimized performance", "Responsive design"]
    }
  ];

  return (
    <section id="projects" className="h-screen flex items-center bg-slate-900/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 text-purple-500/10">
          <Rocket size={70} className="animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-20 text-blue-500/10">
          <Code size={70} className="animate-pulse delay-1000" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions showcasing technical excellence and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-gradient p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 section-fade group hover:transform hover:scale-105 skill-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-600/20 p-3 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                  <div className="text-blue-400">{project.icon}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="bg-transparent border-gray-600 hover:bg-blue-600/20 hover:border-blue-500 h-8 w-8 p-0">
                    <Github size={14} />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent border-gray-600 hover:bg-blue-600/20 hover:border-blue-500 h-8 w-8 p-0">
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="mb-4">
                <span className="text-blue-400 text-xs font-medium">{project.category}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3 text-sm">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-slate-800/50 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1">
                  <Eye size={12} className="text-green-400" />
                  Results
                </h4>
                <ul className="space-y-1">
                  {project.achievements.slice(0, 2).map((achievement, i) => (
                    <li key={i} className="text-gray-400 text-xs flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Award */}
              {project.award && (
                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 p-2 rounded-lg">
                  <p className="text-yellow-400 text-xs font-medium">🏆 {project.award}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
