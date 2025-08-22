import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, View } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Waves from './Waves';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link as fallback
    const mailtoLink = `mailto:madhankumar070406@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1BTBeBWzGgqJoJ6GnMdNFNxlhl4m8N8-K/view?usp=sharing';
    link.download = 'Madhan_Kumar_P_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      {/* Contact Waves Background */}
      <Waves
        lineColor="rgba(20, 184, 166, 0.06)"
        backgroundColor="transparent"
        waveSpeedX={0.01}
        waveSpeedY={0.006}
        waveAmpX={20}
        waveAmpY={12}
        friction={0.93}
        tension={0.006}
        maxCursorMove={60}
        xGap={18}
        yGap={45}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 px-4 lg:px-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with fellow developers and designers. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:madhankumar070406@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-all">madhankumar070406@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919342745299"
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">+91 93427 45299</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Chennai, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links & Resume */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <a
                    href="https://www.linkedin.com/in/madhan-kumar-p-759402324/"
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors group w-full"
                    aria-label="LinkedIn - Link coming soon"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Madhan2407"
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors group w-full"
                    aria-label="GitHub - Link coming soon"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                  <button
                    onClick={handleResumeDownload}
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors group w-full"
                  >
                    <View className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl mx-4 lg:mx-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white resize-none transition-colors"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 sm:mt-4 text-center">
                * This form will open your default email client
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Madhan Kumar P. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;