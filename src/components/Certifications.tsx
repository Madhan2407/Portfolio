import React from 'react';
import { AlignCenterVertical as Certificate, ExternalLink, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const certifications = [
  {
    title: 'UI/UX Design',
    provider: 'Coursera/Udemy',
    type: 'Course Completion',
    date: '2024',
    skills: ['UI/UX Design', 'User Research', 'Prototyping'],
    certificateUrl: 'https://drive.google.com/file/d/1UWphdDanx5usL49tRBxHHg57GFCO54ln/view?usp=sharing'
  },
  {
    title: 'Basics of Python',
    provider: 'Infosys Springboard',
    type: 'Certificate',
    date: '2024',
      skills: ['Python', 'Programming Fundamentals'],
    certificateUrl: 'https://drive.google.com/file/d/19qTooIaCICzMZ-TgOzANuJ9gzm0JGskm/view?usp=sharing'
  },
  {
    title: 'Global Startup Club',
    provider: 'Global Startup Club',
    type: 'Membership',
    date: 'Active',
    skills: ['Entrepreneurship', 'Networking', 'Business Development'],
    
  }
];

const virtualExperiences = [
  {
    title: 'AWS APAC Solutions Architecture Virtual Experience Program on Forage',
    provider: 'Forage',
    date: 'August 2025',
    description: 'Designed a simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times. Described the proposed architecture in plain language ensuring the client understood how it works and how costs will be calculated.',
    skills: ['AWS Elastic Beanstalk', 'Architecture Design', 'Cost Optimization', 'Client Communication', 'Scalable Solutions'],
    certificateUrl: 'https://drive.google.com/file/d/1ZHKEYH7itTvgJ5Pc74b129baGvEpJkGV/view?usp=sharing'
  },
  {
    title: 'Accenture UK Developer and Technology Virtual Experience Programme on Forage',
    provider: 'Forage',
    date: 'August 2025',
    description: 'Completed Developer and Technology Job Simulation with end-to-end SDLC understanding. Researched DevOps trends, compared Agile vs Waterfall methodologies, designed algorithms with flow diagrams, and debugged Python code.',
    skills: ['SDLC', 'DevOps', 'Agile', 'Waterfall', 'Algorithm Design', 'Python Debugging', 'Research & Analysis'],
    certificateUrl: 'https://drive.google.com/file/d/1kO9-0NKIL3aIiZIbwn7YQ7YToRpX8sku/view?usp=sharing'
  },
  {
    title: 'Python 101 for Data Science',
    provider: 'IBM / CognitiveClass.ai',
    date: 'Dec 8, 2024',
    description: 'Learned Python fundamentals for data science applications. Covered data analysis, visualization, and statistical techniques.',
    certificateUrl: 'https://drive.google.com/file/d/1mF6e0pu0FJfLqLzsp8O1nTzBWZSEcjLo/view?usp=sharing',
    skills: ['Python', 'Data Science', 'Data Analysis', 'Visualization']
  },
  {
    title: 'Career Essentials in Generative AI',
    provider: 'Microsoft & LinkedIn',
    date: 'Dec 13, 2024',
    description: 'Learned AI applications, ethics, and practical generative AI use cases.',
    skills: ['Computer Ethics', 'Artificial Intelligence', 'Generative AI'],
    certificateUrl: 'https://drive.google.com/file/d/1VSUoRCQom55BWz1RXuCVCKkpRjucSZZB/view?usp=sharing'
  },
  {
    title: 'Basics of Python',
    provider: 'UniAthena / Cambridge International Qualifications',
    date: 'Oct 14, 2024',
    description: 'Covered Python basics for software development.',
    skills: ['Python', 'Programming Fundamentals'],
    certificateUrl: 'https://drive.google.com/file/d/1HSHBvHAgTTL-yb-2wbHxcxtTwU0m8-N1/view?usp=sharing'
  },
  {
    title: 'Deloitte Australia Data Analytics Job Simulation on Forage',
    provider: 'Forage',
    date: 'August 2025',
    description: 'Completed a Deloitte job simulation involving data analysis and forensic technology. Created a data dashboard using Tableau. Used Excel to classify data and draw business conclusions.',
    skills: ['Data Analysis', 'Forensic Technology', 'Tableau', 'Excel', 'Data Classification', 'Business Intelligence'],
    certificateUrl: 'https://drive.google.com/file/d/11G4rmstRcqg4AI9f4NJL6vGWj3EVB1tK/view?usp=sharing'
  },
  {
    title: 'EC-Council Virtual Experience Program',
    provider: 'EC-Council',
    date: '2024',
    description: 'Participated in cybersecurity-focused virtual experience covering ethical hacking, network security, and information security best practices.',
    skills: ['Cybersecurity', 'Ethical Hacking', 'Network Security', 'Information Security'],
    certificateUrl: 'https://drive.google.com/file/d/1LVKnzWAKHy4M3kZDMBoIoKt6wblr3eYC/view?usp=sharing'
  },
  {
    title: 'Google Virtual Experience Program',
    provider: 'Google',
    date: '2024',
    description: 'Explored Google\'s technology ecosystem, cloud services, and digital innovation through hands-on virtual projects and learning modules.',
    skills: ['Google Cloud', 'Digital Innovation', 'Technology Solutions', 'Cloud Computing'],
    certificateUrl: 'https://drive.google.com/file/d/1ULRO7VlfKP3xY1nNrTXNzxGXEnH7bdB8/view?usp=sharing'
  }
];

const Certifications: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Virtual Experiences
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`
                    bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg
                    transform transition-all duration-300 hover:-translate-y-1
                    animate-fade-in-up
                  `}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Certificate className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {cert.provider}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-500 mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.date}</span>
                        <span>•</span>
                        <span>{cert.type}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {cert.certificateUrl && (
                        <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors"
                          >
                            <span>Verify Certificate</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Virtual Experiences */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Virtual Experience Programs
            </h3>
            <div className="space-y-6">
              {virtualExperiences.map((exp, index) => (
                <div
                  key={index}
                  className={`
                    bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg
                    transform transition-all duration-300 hover:-translate-y-1
                    animate-fade-in-up
                  `}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 mb-2">
                        <span className="font-semibold">{exp.provider}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {exp.certificateUrl && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors"
                      >
                        <span>Verify Certificate</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
