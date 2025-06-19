
import { Code, Database, Server, Smartphone, Globe, GitBranch, Brain, Cpu, Zap, Network } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "Computer Vision", "Neural Networks", "Deep Learning", "OpenCV"]
    },
    {
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Web Technologies",
      skills: ["ReactJS", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript"]
    },
    {
      icon: <Server className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Backend & Cloud",
      skills: [".NET Core", "PostgreSQL", "Redis", "RabbitMQ", "Azure", "API Development"]
    },
    {
      icon: <Network className="w-6 h-6 md:w-8 md:h-8" />,
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "Azure DevOps", "SignalR", "ADO.NET", "Agile"]
    }
  ];

  const technologies = [
    "React", "Node.js", ".NET Core", "Python", "AI/ML", "MongoDB", "PostgreSQL", "Redis", 
    "Docker", "Azure", "TensorFlow", "Computer Vision", "RabbitMQ", "TypeScript"
  ];

  return (
    <section id="skills" className="min-h-screen py-16 bg-slate-900/50 relative overflow-hidden">
      {/* Background tech elements with smooth movement */}
      <div className="absolute inset-0">
        <div className="absolute top-8 right-8 sm:top-16 sm:right-16 text-blue-500/10 floating-tech-slow">
          <Cpu size={40} className="sm:w-14 sm:h-14 md:w-20 md:h-20 animate-pulse" />
        </div>
        <div className="absolute bottom-8 left-8 sm:bottom-16 sm:left-16 text-purple-500/10 floating-tech-reverse">
          <Brain size={40} className="sm:w-14 sm:h-14 md:w-20 md:h-20 animate-pulse delay-1000" />
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build intelligent, scalable solutions
          </p>
        </div>

        {/* Skill Categories - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-gradient p-4 md:p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 section-fade hover:transform hover:scale-105 skill-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-blue-400 mb-3 md:mb-4">{category.icon}</div>
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-slate-800/50 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cloud - Mobile Responsive */}
        <div className="section-fade">
          <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-6 text-white">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 px-3 md:px-4 py-1 md:py-2 rounded-full text-white font-medium hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-300 transform hover:scale-110 cursor-default text-sm md:text-base"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
