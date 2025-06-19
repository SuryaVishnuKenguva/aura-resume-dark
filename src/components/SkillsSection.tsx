
import { Code, Database, Server, Smartphone, Globe, GitBranch, Brain, Cpu, Zap, Network } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "Computer Vision", "Neural Networks", "Deep Learning", "OpenCV"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      skills: ["ReactJS", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend & Cloud",
      skills: [".NET Core", "PostgreSQL", "Redis", "RabbitMQ", "Azure", "API Development"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "Azure DevOps", "SignalR", "ADO.NET", "Agile"]
    }
  ];

  const technologies = [
    "React", "Node.js", ".NET Core", "Python", "AI/ML", "MongoDB", "PostgreSQL", "Redis", 
    "Docker", "Azure", "TensorFlow", "Computer Vision", "RabbitMQ", "TypeScript"
  ];

  return (
    <section id="skills" className="h-screen flex items-center bg-slate-900/50 relative overflow-hidden">
      {/* Background tech elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 text-blue-500/10">
          <Cpu size={80} className="animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-20 text-purple-500/10">
          <Brain size={80} className="animate-pulse delay-1000" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build intelligent, scalable solutions
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-gradient p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 section-fade hover:transform hover:scale-105 skill-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-blue-400 mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
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

        {/* Technology Cloud */}
        <div className="section-fade">
          <h3 className="text-xl font-semibold text-center mb-6 text-white">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full text-white font-medium hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-300 transform hover:scale-110 cursor-default"
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
