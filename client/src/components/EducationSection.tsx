
import { GraduationCap, Calendar, Award, BookOpen, Trophy, Brain, Cpu, Network, Database, Code, Zap } from 'lucide-react';

const EducationSection = () => {
  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    university: "Parul University, Vadodara",
    period: "Aug 2021 - Present",
    cgpa: "8.01/10",
    coursework: [
      "AI & Machine Learning",
      "Data Structures & Algorithms", 
      "Object Oriented Programming",
      "Computer Networks",
      "Operating Systems",
      "Database Systems"
    ]
  };

  const certifications = [
    {
      title: "Meta - HTML, CSS, and Version Control",
      issuer: "Coursera",
      type: "Software Engineering"
    },
    {
      title: "Johns Hopkins - Web Development",
      issuer: "Coursera", 
      type: "Full-Stack Development"
    },
    {
      title: "NPTEL Certificate",
      issuer: "NPTEL",
      type: "Computer Science"
    }
  ];

  return (
    <section id="education" className="h-screen flex items-center bg-slate-800/30 relative overflow-hidden">
      {/* Enhanced AI-themed background elements with smooth movement */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 text-purple-500/10 floating-tech-slow">
          <GraduationCap size={70} className="animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-20 text-blue-500/10 floating-tech-reverse">
          <Trophy size={60} className="animate-pulse delay-1000" />
        </div>
        
        {/* AI-themed floating elements */}
        <div className="absolute top-1/4 right-1/4 text-cyan-400/15 floating-tech">
          <Brain size={50} className="animate-pulse delay-500" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-green-400/15 floating-tech-slow">
          <Cpu size={45} className="animate-pulse delay-700" />
        </div>
        <div className="absolute top-1/2 left-1/6 text-orange-400/15 floating-tech-reverse">
          <Network size={40} className="animate-pulse delay-300" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-pink-400/15 floating-tech">
          <Database size={42} className="animate-pulse delay-900" />
        </div>
        <div className="absolute top-3/4 left-1/2 text-indigo-400/15 floating-tech-slow">
          <Code size={38} className="animate-pulse delay-1200" />
        </div>
        <div className="absolute top-1/6 right-1/6 text-yellow-400/15 floating-tech-reverse">
          <Zap size={35} className="animate-pulse delay-400" />
        </div>
        
        {/* Additional floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center py-20">
        <div className="text-center mb-8 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic excellence and continuous learning in computer science
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
          {/* Education */}
          <div className="card-gradient p-6 rounded-2xl border border-gray-700/50 section-fade magnetic-hover h-fit">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{education.degree}</h4>
                <p className="text-blue-400 font-medium">{education.university}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Calendar size={16} />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                  <Award size={16} />
                  <span>CGPA: {education.cgpa}</span>
                </div>
              </div>

              <div>
                <h5 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <BookOpen size={16} className="text-purple-400" />
                  Core Coursework
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {education.coursework.map((course) => (
                    <div key={course} className="bg-slate-900/50 p-2 rounded-lg border border-gray-700/30">
                      <span className="text-gray-300 text-xs">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Recognition */}
          <div className="space-y-4">
            {/* Certifications */}
            <div className="card-gradient p-6 rounded-2xl border border-gray-700/50 section-fade magnetic-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Certifications</h3>
                </div>
              </div>

              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-slate-900/50 p-3 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h4 className="text-white font-semibold text-sm leading-relaxed mb-1">{cert.title}</h4>
                    <p className="text-purple-400 font-medium text-xs mb-1">{cert.issuer}</p>
                    <span className="inline-block bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {cert.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="card-gradient p-4 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-600/10 to-orange-600/10">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <h4 className="text-base font-bold text-white">Recognition</h4>
              </div>
              <p className="text-yellow-300 text-xs leading-relaxed">
                🏆 Recognized among top teams for presenting "Drive Aware Alarm" - an innovative drowsiness detection system enhancing driver safety through AI and computer vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
