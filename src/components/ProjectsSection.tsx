
import { ExternalLink, Github, Code, Database, Brain, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Drive Aware Alarm System",
      category: "Machine Learning & Computer Vision",
      description: "Developed a real-time driver monitoring system on a laptop, detecting drowsiness, yawning, and improper seating position with an accuracy rate of 85%. Applied machine learning and reducing false alert rates by 30%, enhancing driver safety and awareness.",
      technologies: ["Python", "Machine Learning", "Computer Vision", "OpenCV"],
      icon: <Brain className="w-6 h-6" />,
      achievements: ["85% accuracy rate", "30% reduction in false alerts", "Real-time monitoring"],
      award: "Consolation Prize at PU Hackathon 1.0"
    },
    {
      title: "Gemini Clone UI",
      category: "Frontend Development",
      description: "Created a web app replicating the Gemini AI platform's UI, improving usability and performance, with a 10% increase in user satisfaction. Applied HTML, CSS, and JavaScript, reducing load time.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      icon: <Code className="w-6 h-6" />,
      achievements: ["10% increase in user satisfaction", "Improved load times", "Responsive design"]
    },
    {
      title: "TravelEase Platform",
      category: "Full-Stack Development",
      description: "Led the development of a travel management platform for booking flights, hotels, and car rental services, and itinerary management. Integrated real-time notifications and optimized backend performance using Redis and RabbitMQ, improving booking efficiency by 20% and reducing booking errors by 15%.",
      technologies: [".NET Core", "PostgreSQL", "Redis", "RabbitMQ", "Azure DevOps"],
      icon: <Database className="w-6 h-6" />,
      achievements: ["20% improvement in booking efficiency", "15% reduction in booking errors", "Real-time notifications"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-gradient p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 section-fade group hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="bg-blue-600/20 p-3 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                  {project.icon}
                  <div className="text-blue-400">{project.icon}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="bg-transparent border-gray-600 hover:bg-blue-600/20 hover:border-blue-500">
                    <Github size={16} />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent border-gray-600 hover:bg-blue-600/20 hover:border-blue-500">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="mb-4">
                <span className="text-blue-400 text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-slate-800/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Eye size={14} className="text-green-400" />
                  Key Results
                </h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Award */}
              {project.award && (
                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 p-3 rounded-lg">
                  <p className="text-yellow-400 text-sm font-medium">🏆 {project.award}</p>
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
