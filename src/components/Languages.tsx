import React from 'react';
import { Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const languages = [
  {
    name: 'English',
    proficiency: 'Fluent',
    level: 90
  },
  {
    name: 'Tamil',
    proficiency: 'Native',
    level: 100
  }
];

const Languages: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Languages
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className={`
                  bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-lg
                  transform transition-all duration-300 hover:-translate-y-1
                  animate-fade-in-up
                `}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {language.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {language.proficiency}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {language.level}%
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="h-2 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-full transition-all duration-1000"
                    style={{
                      width: isVisible ? `${language.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;