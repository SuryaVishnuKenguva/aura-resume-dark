
import { Code, Database, Server, Smartphone, Globe, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "MERN Stack", "MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["C#", "Python", "JavaScript"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Technologies & Tools",
      skills: [".NET MVC", "API", "ADO.NET", "PostgreSQL", "MongoDB", "Redis", "AJAX", "jQuery", "SignalR", "RabbitMQ", "GitHub"]
    }
  ];

  const technologies = [
    "React", "Node.js", ".NET Core", "MongoDB", "PostgreSQL", "Redis", "Docker", 
    "Azure", "SignalR", "RabbitMQ", "Python", "JavaScript", "C#", "Git"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise in modern technologies and frameworks for building scalable applications
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-gradient p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 section-fade hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-blue-400 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-slate-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
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
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full text-white font-medium hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-300 transform hover:scale-110 cursor-default"
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
