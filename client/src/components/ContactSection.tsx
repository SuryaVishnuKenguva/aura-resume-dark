
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

          <div className="max-w-4xl mx-auto">
            {/* Contact Info - Expanded Single Section */}
            <div className="card-gradient p-6 sm:p-8 md:p-10 rounded-xl border border-gray-700/50 section-fade text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 gradient-text">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-10 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
                Ready to collaborate on innovative projects? Let's discuss how we can bring your ideas to life with cutting-edge technology solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg border border-gray-700/30">
                  <div className="bg-blue-600/20 p-4 rounded-full mb-4">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-gray-400 text-sm font-medium mb-2">Email</p>
                  <p className="text-white font-semibold text-sm break-all">suryakenguva1@gmail.com</p>
                </div>

                <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg border border-gray-700/30">
                  <div className="bg-green-600/20 p-4 rounded-full mb-4">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-gray-400 text-sm font-medium mb-2">Phone</p>
                  <p className="text-white font-semibold text-sm">+91-9182560368</p>
                </div>

                <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg border border-gray-700/30">
                  <div className="bg-purple-600/20 p-4 rounded-full mb-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-gray-400 text-sm font-medium mb-2">Location</p>
                  <p className="text-white font-semibold text-sm">Visakhapatnam, India</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <a
                  href="https://github.com/SuryaVishnuKenguva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-all duration-300 hover:scale-105 border border-gray-600/50 hover:border-gray-500"
                >
                  <Github size={20} />
                  <span className="font-medium">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/kenguva-surya-vishnu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-300 hover:scale-105 border border-blue-500/50 hover:border-blue-400"
                >
                  <Linkedin size={20} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>

              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-sm font-medium">
                  💡 Ready to start your project? Send me an email or connect on LinkedIn!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
