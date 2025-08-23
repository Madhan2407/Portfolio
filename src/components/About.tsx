import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Waves from './Waves';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      {/* Subtle Waves Background */}
      <Waves
        lineColor="rgba(79, 70, 229, 0.04)"
        backgroundColor="transparent"
        waveSpeedX={0.008}
        waveSpeedY={0.005}
        waveAmpX={15}
        waveAmpY={10}
        friction={0.95}
        tension={0.005}
        maxCursorMove={50}
        xGap={20}
        yGap={50}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 sm:p-12">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Passionate Web Developer with a B.Tech in Artificial Intelligence and Data Science and 1 year of experience at UNAI Tech. Skilled in delivering responsive, scalable, and AI-powered web solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Seeking to apply my web development and AI expertise to create innovative, user-friendly products in a growth-driven company.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1+</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Years Experience</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Professional development</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">10+</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Projects Completed</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Web & AI solutions</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Certifications</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Technical expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
