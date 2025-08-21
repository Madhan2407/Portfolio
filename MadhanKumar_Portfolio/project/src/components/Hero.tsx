import React, { useEffect, useState } from 'react';
import { Github, Linkedin, ExternalLink, ChevronDown, Download } from 'lucide-react';
import AnimatedText from './AnimatedText';
import Waves from './Waves';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Madhan_Kumar_P_Resume.pdf';
    link.click();
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Animated Waves Background */}
      <Waves
        lineColor="rgba(79, 70, 229, 0.08)"
        backgroundColor="transparent"
        waveSpeedX={0.015}
        waveSpeedY={0.008}
        waveAmpX={25}
        waveAmpY={15}
        friction={0.92}
        tension={0.008}
        maxCursorMove={80}
        xGap={15}
        yGap={40}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                <span>Available for opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">MADHAN KUMAR P</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium px-4 lg:px-0">
                <AnimatedText />
              </h2>

              <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 px-4 lg:px-0">
                "Building impactful, user-focused digital solutions."
              </p>

              {/* Quick Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4 pt-4 px-4 lg:px-0">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors group w-full sm:w-auto"
                  aria-label="LinkedIn - Link coming soon"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group w-full sm:w-auto"
                  aria-label="GitHub - Link coming soon"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors group w-full sm:w-auto"
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full p-3 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/Madhan.jpeg"
                    alt="Madhan Kumar P - Professional Profile"
                    className="w-full h-full object-cover object-center scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-gray-500 hover:text-indigo-600 transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-sm">Scroll down</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;