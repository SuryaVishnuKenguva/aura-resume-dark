
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    company: "Casepoint Pvt. Ltd, Surat",
    position: "Software Engineer Intern",
    period: "Jan 2025 - Present",
    type: "Software Engineering Intern",
    achievements: [
      {
        title: "TravelEase Platform Development",
        description: "Led the development of the TravelEase project (a travel management platform for booking flights, hotels, and car rentals) using .NET MVC, API, ADO.NET, PostgreSQL, MongoDB, Redis, and RabbitMQ. Completed the project in 3 months, reducing delivery time by 20% through Agile methodologies and continuous collaboration in Azure DevOps.",
        impact: "20% reduction in delivery time"
      },
      {
        title: "Real-time Notification System",
        description: "Developed the TrackMyTrip dashboard, incorporating job-based authentication and implementing real-time notifications via SignalR and RabbitMQ, reducing response times by 40%.",
        impact: "40% reduction in response times"
      },
      {
        title: "API Performance Optimization",
        description: "Optimized the TrackMyTrip REST API in .NET Core, enhancing data handling, security and scalability. Achieved a 25% increase in API performance and reduced server load by 15% through code refactoring and efficient database queries.",
        impact: "25% increase in API performance, 15% reduction in server load"
      },
      {
        title: "Agile Development Leadership",
        description: "Collaborated in 3 Agile sprints with a cross-functional team, ensuring on-time delivery of features while using Git for version control. Actively contributed to the completion of 90% of sprint goals within deadlines, helping the team maintain high productivity levels.",
        impact: "90% sprint goals completion rate"
      }
    ]
  };

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey in software development and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
                  <p className="text-gray-400">{experience.type}</p>
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

            {/* Achievements */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Key Achievements
              </h4>
              
              {experience.achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/50 p-6 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h5 className="text-lg font-semibold text-white mb-3">{achievement.title}</h5>
                  <p className="text-gray-300 leading-relaxed mb-3">{achievement.description}</p>
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
