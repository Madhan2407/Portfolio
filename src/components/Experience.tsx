import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    title: 'Financial Manager & Co-Founder',
    company: 'Hive5',
    period: 'Aug 2025 – Present',
    location: 'Chennai',
    responsibilities: [
      'Manage financial planning, budgeting, and resource allocation',
      'Oversee project sales and internship program operations',
      'Collaborate with clients and academic institutions to deliver tailored tech solutions'
    ],
    
    current: true
  },
  {
    title: 'Developer & Co-Ordinator',
    company: 'UNAI TECH',
    period: 'Jan 2024 – Present',
    location: 'Chennai',
    responsibilities: [
      'Delivered client websites, web apps, and portfolios with React, Node.js, Firebase, and Tailwind',
      'Led EVE platform with interactive UI and progress tracking',
      'Built scalable, performance-optimized solutions'
    ],
    current: false
  },
  {
    title: 'Intern',
    company: 'Xenovex Technologies Pvt. Ltd.',
    period: 'Jul 3, 2025 – Jul 24, 2025',
    location: 'Ekkatuthangal, Chennai',
    responsibilities: [
      'Learned and applied basics of HTML, CSS, and Java',
      'Introduced to JavaScript fundamentals including functions, mapping, filtering, and essential features',
      'Gained an overview of Angular framework and navigation techniques',
      'Developed a portfolio website application with a login screen, dashboard, and content management page'
    ],
    current: false
  },
  {
    title: 'Intern',
    company: 'Thirumoolar IT Solutions Pvt Ltd',
    period: 'Mar 2025 – May 2025',
    location: 'Remote',
    responsibilities: [
      'Built ML models for classification & prediction using Python and Scikit-learn',
      'Worked on NLP & Computer Vision tasks like text classification and object detection'
    ],
    current: false
  }
];

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`
                  relative bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg 
                  transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1
                  animate-fade-in-up border-l-4
                  ${exp.current 
                    ? 'border-l-indigo-600' 
                    : 'border-l-gray-300 dark:border-l-gray-600'
                  }
                `}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {exp.current && (
                  <div className="absolute -top-2 -left-2">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full animate-pulse"></div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    {exp.description && (
                      <p className="text-sm text-gray-600 mb-3 italic">
                        {exp.description}
                      </p>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 mb-2">
                      <Building className="w-5 h-5" />
                      <span className="font-semibold">{exp.company}</span>
                      {exp.current && (
                        <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;