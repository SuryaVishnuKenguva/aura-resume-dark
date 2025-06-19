
import { GraduationCap, Calendar, Award, BookOpen, Trophy } from 'lucide-react';

const EducationSection = () => {
  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    university: "Parul University, Vadodara",
    period: "Aug 2021 - Present",
    cgpa: "7.83/10",
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
    <section id="education" className="h-screen flex items-center bg-slate-800/30 relative overflow-hidden py-16 md:py-20">
      {/* Background elements with smooth movement */}
      <div className="absolute inset-0">
        <div className="absolute top-16 md:top-20 left-16 md:left-20 text-purple-500/10 floating-tech-slow">
          <GraduationCap size={60} className="md:w-20 md:h-20 animate-pulse" />
        </div>
        <div className="absolute bottom-16 md:bottom-20 right-16 md:right-20 text-blue-500/10 floating-tech-reverse">
          <Trophy size={50} className="md:w-16 md:h-16 animate-pulse delay-1000" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="text-center mb-8 md:mb-12 section-fade">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Academic excellence and continuous learning in computer science
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Education */}
          <div className="card-gradient p-6 md:p-8 rounded-2xl border border-gray-700/50 section-fade magnetic-hover h-fit">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-blue-600/20 p-2 md:p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Education</h3>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">{education.degree}</h4>
                <p className="text-blue-400 font-medium text-base md:text-lg">{education.university}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                  <Calendar size={14} className="md:w-4 md:h-4" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 font-semibold text-sm md:text-base">
                  <Award size={14} className="md:w-4 md:h-4" />
                  <span>CGPA: {education.cgpa}</span>
                </div>
              </div>

              <div>
                <h5 className="text-base md:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <BookOpen size={16} className="md:w-[18px] md:h-[18px] text-purple-400" />
                  Core Coursework
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {education.coursework.map((course) => (
                    <div key={course} className="bg-slate-900/50 p-2 md:p-3 rounded-lg border border-gray-700/30">
                      <span className="text-gray-300 text-xs md:text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Recognition */}
          <div className="space-y-4 md:space-y-6">
            {/* Certifications */}
            <div className="card-gradient p-6 md:p-8 rounded-2xl border border-gray-700/50 section-fade magnetic-hover">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-purple-600/20 p-2 md:p-3 rounded-lg">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Certifications</h3>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-slate-900/50 p-3 md:p-4 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h4 className="text-white font-semibold text-sm md:text-base leading-relaxed mb-1">{cert.title}</h4>
                    <p className="text-purple-400 font-medium text-xs md:text-sm mb-1">{cert.issuer}</p>
                    <span className="inline-block bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {cert.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="card-gradient p-4 md:p-6 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-600/10 to-orange-600/10">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <Trophy className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                <h4 className="text-base md:text-lg font-bold text-white">Recognition</h4>
              </div>
              <p className="text-yellow-300 text-xs md:text-sm font-medium leading-relaxed">
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
