
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'suryakenguva1@gmail.com'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        templateParams
      );

      toast({
        title: "Message Sent Successfully! ✨",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Message Failed",
        description: "Please try again or contact me directly at suryakenguva1@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text text-shadow-glow">Let's Connect</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'm always open to new challenges and innovative ideas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Info */}
            <div className="card-gradient p-10 rounded-3xl border border-gray-700/50 section-fade magnetic-hover">
              <h3 className="text-3xl font-bold text-white mb-8 gradient-text">Get In Touch</h3>
              <p className="text-gray-300 mb-12 leading-relaxed text-lg">
                I'm passionate about creating innovative solutions and building meaningful connections. 
                Whether you have a project in mind or just want to chat about technology, I'd love to hear from you!
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="bg-blue-600/20 p-4 rounded-xl group-hover:bg-blue-600/30 transition-all duration-300 skill-glow">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Email</p>
                    <p className="text-white font-semibold text-lg">suryakenguva1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="bg-green-600/20 p-4 rounded-xl group-hover:bg-green-600/30 transition-all duration-300 skill-glow">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Phone</p>
                    <p className="text-white font-semibold text-lg">+91-9182560368</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="bg-purple-600/20 p-4 rounded-xl group-hover:bg-purple-600/30 transition-all duration-300 skill-glow">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Location</p>
                    <p className="text-white font-semibold text-lg">Vadodara, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-xl font-semibold magnetic-hover">
                  <Github className="mr-2" size={18} />
                  GitHub
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-xl font-semibold magnetic-hover">
                  <Linkedin className="mr-2" size={18} />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="card-gradient p-10 rounded-3xl border border-gray-700/50 section-fade magnetic-hover">
              <h3 className="text-3xl font-bold text-white mb-8 gradient-text">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-3">Name *</label>
                    <Input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-effect border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-3">Email *</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-effect border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-3">Subject *</label>
                  <Input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass-effect border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-3">Message *</label>
                  <Textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="glass-effect border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello! I'd love to hear from you."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 py-4 rounded-xl font-semibold text-lg magnetic-hover animate-gradient disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 p-4 glass-effect rounded-xl border border-green-500/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400 text-sm font-medium">
                    Messages are delivered directly to my inbox within seconds!
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
