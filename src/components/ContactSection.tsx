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
      className="min-h-screen flex items-center bg-slate-900/30 relative overflow-hidden py-16 md:py-20"
    >
      {/* Background Effects with smooth movement */}
      <div className="absolute inset-0">
        <div className="absolute top-16 md:top-20 left-16 md:left-20 w-60 md:w-72 h-60 md:h-72 bg-blue-500/10 rounded-full blur-3xl floating-tech-slow"></div>
        <div className="absolute bottom-16 md:bottom-20 right-16 md:right-20 w-60 md:w-72 h-60 md:h-72 bg-purple-500/10 rounded-full blur-3xl floating-tech-reverse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="text-center mb-8 md:mb-12 section-fade">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="gradient-text text-shadow-glow">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Ready to collaborate on innovative projects? Let's build something
            amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Enhanced Contact Info - Mobile Responsive */}
            <div className="card-gradient p-6 md:p-8 rounded-3xl border border-gray-700/50 section-fade magnetic-hover">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 gradient-text">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Let's discuss your next project or explore collaboration
                opportunities in AI, web development, and innovative technology
                solutions.
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 group">
                  <div className="bg-blue-600/20 p-2 md:p-3 rounded-xl group-hover:bg-blue-600/30 transition-all duration-300 skill-glow">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm font-medium">
                      Email
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">
                      suryakenguva1@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 group">
                  <div className="bg-green-600/20 p-2 md:p-3 rounded-xl group-hover:bg-green-600/30 transition-all duration-300 skill-glow">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm font-medium">
                      Phone
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">
                      +91-9182560368
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 group">
                  <div className="bg-purple-600/20 p-2 md:p-3 rounded-xl group-hover:bg-purple-600/30 transition-all duration-300 skill-glow">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm font-medium">
                      Location
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">
                      Visakhapatnam, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 ">
                <a
                  href="https://github.com/SuryaVishnuKenguva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="neon-border bg-transparent hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group text-sm md:text-base"
                  >
                    <Github
                      className="mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300"
                      size={18}
                    />
                    GitHub
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/kenguva-surya-vishnu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="neon-border bg-transparent hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group text-sm md:text-base"
                  >
                    <Linkedin
                      className="mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300"
                      size={18}
                    />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            {/* Enhanced Contact Form - Mobile Responsive */}
            <div className="card-gradient p-6 md:p-8 rounded-3xl border border-gray-700/50 section-fade magnetic-hover">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 gradient-text">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-gray-300 text-xs md:text-sm font-semibold mb-1 md:mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-effect border-gray-600/50 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 text-sm md:text-base"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs md:text-sm font-semibold mb-1 md:mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-effect border-gray-600/50 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-xs md:text-sm font-semibold mb-1 md:mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass-effect border-gray-600/50 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 text-sm md:text-base"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-xs md:text-sm font-semibold mb-1 md:mb-2">
                    Message *
                  </label>
                  <Textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="glass-effect border-gray-600/50 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 py-2 md:py-3 rounded-xl font-semibold magnetic-hover animate-gradient disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base cursor-pointer !important"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2" size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-4 md:mt-6 p-2 md:p-3 glass-effect rounded-xl border border-green-500/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                  <p className="text-green-400 text-xs md:text-sm font-medium">
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
