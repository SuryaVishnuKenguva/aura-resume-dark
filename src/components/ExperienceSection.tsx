
import { Briefcase, Calendar, MapPin, TrendingUp, Zap } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    company: "Casepoint Pvt. Ltd, Surat",
    position: "Software Engineer Intern",
    period: "Jan 2025 - Present",
    type: "Software Engineering Intern",
    achievements: [
      {
        title: "TravelEase Platform Development",
        description: "Led development of travel management platform using .NET MVC, PostgreSQL, MongoDB, Redis, and RabbitMQ. Delivered in 3 months with 20% faster delivery through Agile methodologies.",
        impact: "20% delivery time reduction"
      },
      {
        title: "Real-time Notification System",
        description: "Implemented TrackMyTrip dashboard with job-based authentication and real-time notifications via SignalR and RabbitMQ.",
        impact: "40% response time improvement"
      },
      {
        title: "API Performance Optimization",
        description: "Enhanced REST API performance in .NET Core with optimized database queries and security improvements.",
        impact: "25% performance boost, 15% load reduction"
      },
      {
        title: "Agile Development Leadership",
        description: "Led 3 Agile sprints with cross-functional teams, maintaining high productivity and meeting deadlines consistently.",
        impact: "90% sprint goals completion"
      }
    ]
  };

  return (
    <section id="experience" className="h-screen flex items-center bg-slate-800/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 text-blue-500/10">
          <Zap size={60} className="animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-20 text-purple-500/10">
          <TrendingUp size={60} className="animate-pulse delay-1000" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering innovative solutions and driving technical excellence
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-gradient p-8 rounded-2xl border border-gray-700/50 section-fade">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.position}</h3>
                  <p className="text-blue-400 font-semibold text-lg">{experience.company}</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={16} />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} />
                  <span>Surat, India</span>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {experience.achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/50 p-6 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 magnetic-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h5 className="text-lg font-semibold text-white mb-3">{achievement.title}</h5>
                  <p className="text-gray-300 leading-relaxed mb-3 text-sm">{achievement.description}</p>
                  <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    <TrendingUp size={14} />
                    {achievement.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
