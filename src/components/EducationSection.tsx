
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
    <section id="education" className="h-screen flex items-center bg-slate-800/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 text-purple-500/10">
          <GraduationCap size={80} className="animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-20 text-blue-500/10">
          <Trophy size={60} className="animate-pulse delay-1000" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic excellence and continuous learning in computer science
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="card-gradient p-8 rounded-2xl border border-gray-700/50 section-fade magnetic-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">{education.degree}</h4>
                <p className="text-blue-400 font-medium text-lg">{education.university}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={16} />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <Award size={16} />
                  <span>CGPA: {education.cgpa}</span>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-purple-400" />
                  Core Coursework
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {education.coursework.map((course) => (
                    <div key={course} className="bg-slate-900/50 p-3 rounded-lg border border-gray-700/30">
                      <span className="text-gray-300 text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Recognition */}
          <div className="space-y-6">
            {/* Certifications */}
            <div className="card-gradient p-8 rounded-2xl border border-gray-700/50 section-fade magnetic-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-slate-900/50 p-4 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h4 className="text-white font-semibold text-sm leading-relaxed mb-1">{cert.title}</h4>
                    <p className="text-purple-400 font-medium text-sm mb-1">{cert.issuer}</p>
                    <span className="inline-block bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {cert.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="card-gradient p-6 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-600/10 to-orange-600/10">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h4 className="text-lg font-bold text-white">Recognition</h4>
              </div>
              <p className="text-yellow-300 text-sm font-medium leading-relaxed">
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
