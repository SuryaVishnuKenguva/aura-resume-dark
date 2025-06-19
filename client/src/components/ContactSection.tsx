
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Form submission started");
    e.preventDefault();

    // Check if required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("whsCtgIw96tlwzheN"); // Your public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "suryakenguva1@gmail.com",
      };

      await emailjs.send(
        "service_m7zqhqg", // Your service ID
        "template_kc7xm8v", // Your template ID
        templateParams
      );

      toast({
        title: "Message Sent Successfully! ✨",
        description:
          "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Message Failed",
        description:
          "Please try again or contact me directly at suryakenguva1@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-20 h-20 sm:top-20 sm:left-20 sm:w-32 sm:h-32 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl floating-tech-slow"></div>
        <div className="absolute bottom-10 right-4 w-20 h-20 sm:bottom-20 sm:right-20 sm:w-32 sm:h-32 md:w-72 md:h-72 bg-purple-500/10 rounded-full blur-3xl floating-tech-reverse"></div>
      </div>

      <div className="relative z-10 w-full px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 section-fade">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text text-shadow-glow">
                Let's Connect
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on innovative projects? Let's build something
              amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="card-gradient p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-700/50 section-fade order-2 lg:order-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 gradient-text">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Let's discuss your next project or explore collaboration
                opportunities in AI, web development, and innovative technology
                solutions.
              </p>
              
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3 group">
                  <div className="bg-blue-600/20 p-2.5 rounded-lg group-hover:bg-blue-600/30 transition-all duration-300 skill-glow flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs font-medium mb-1">
                      Email
                    </p>
                    <p className="text-white font-semibold text-sm break-words">
                      suryakenguva1@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-green-600/20 p-2.5 rounded-lg group-hover:bg-green-600/30 transition-all duration-300 skill-glow flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs font-medium mb-1">
                      Phone
                    </p>
                    <p className="text-white font-semibold text-sm">
                      +91-9182560368
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-purple-600/20 p-2.5 rounded-lg group-hover:bg-purple-600/30 transition-all duration-300 skill-glow flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs font-medium mb-1">
                      Location
                    </p>
                    <p className="text-white font-semibold text-sm">
                      Visakhapatnam, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-6 md:mt-8">
                <a
                  href="https://github.com/SuryaVishnuKenguva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full h-11 neon-border bg-transparent hover:bg-blue-600/20 transition-all duration-300 group !cursor-pointer text-sm"
                  >
                    <Github className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={16} />
                    GitHub
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/kenguva-surya-vishnu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full h-11 neon-border bg-transparent hover:bg-blue-600/20 transition-all duration-300 group !cursor-pointer text-sm"
                  >
                    <Linkedin className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={16} />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-gradient p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-700/50 section-fade order-1 lg:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 gradient-text">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 glass-effect border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 text-base"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 glass-effect border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 glass-effect border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 text-base"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full glass-effect border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 resize-none text-base"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 text-base shadow-lg hover:shadow-xl"
                  style={{ 
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    pointerEvents: 'auto'
                  }}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-3 glass-effect rounded-lg border border-green-500/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm font-medium">
                    Direct delivery to inbox within seconds!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
