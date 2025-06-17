
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    university: "Parul University, Vadodara",
    period: "Aug 2021 - Present",
    cgpa: "7.83/10",
    coursework: [
      "Object Oriented Programming",
      "Databases",
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence",
      "Machine Learning"
    ]
  };

  const certifications = [
    {
      title: "Meta - HTML, CSS, and Version Control",
      issuer: "Coursera",
      type: "Software Engineering"
    },
    {
      title: "NPTEL Certificate",
      issuer: "NPTEL",
      type: "Software Engineering"
    },
    {
      title: "Johns Hopkins University - HTML, CSS, and JavaScript for Web Developers",
      issuer: "Coursera",
      type: "Web Development"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education & Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning in computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="card-gradient p-8 rounded-2xl border border-gray-700/50 section-fade">
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
                  Relevant Coursework
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

          {/* Certifications */}
          <div className="card-gradient p-8 rounded-2xl border border-gray-700/50 section-fade">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/50 p-4 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold text-sm leading-relaxed">{cert.title}</h4>
                  </div>
                  <p className="text-purple-400 font-medium text-sm mb-1">{cert.issuer}</p>
                  <span className="inline-block bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                    {cert.type}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30">
              <p className="text-purple-300 text-sm font-medium">
                🏆 Recognized among top teams for presenting "Drive Aware Alarm," an innovative project using drowsiness detection technology to enhance driver safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
