import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const education = [
  {
    degree: 'B.Tech – Artificial Intelligence & Data Science',
    institution: 'Gojan School of Business and Technology',
    period: '2023 – Present',
    status: 'In Progress',
    current: true
  },
  {
    degree: 'HSC – Higher Secondary Education',
    institution: 'Good Shepherd Matriculation Higher Secondary School',
    period: '2022 – 2023',
    grade: '75%',
    current: false
  }
];

const Education: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`
                  bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg
                  transform transition-all duration-300 hover:-translate-y-1
                  animate-fade-in-up border-l-4
                  ${edu.current 
                    ? 'border-l-indigo-600' 
                    : 'border-l-teal-600'
                  }
                `}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                    ${edu.current 
                      ? 'bg-indigo-100 dark:bg-indigo-900' 
                      : 'bg-teal-100 dark:bg-teal-900'
                    }
                  `}>
                    <GraduationCap className={`
                      w-6 h-6
                      ${edu.current 
                        ? 'text-indigo-600 dark:text-indigo-400' 
                        : 'text-teal-600 dark:text-teal-400'
                      }
                    `} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      {edu.current && (
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-sm rounded-full mt-2 sm:mt-0">
                          In Progress
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                      {edu.institution}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.grade && (
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Grade: {edu.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;