import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const achievements = [
  {
    title: 'Startup Winner – 1st place at BizCanvas 2025',
    description: 'First place winner in startup competition',
    icon: Trophy,
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30'
  },
  {
    title: 'Symposium Winner – TRIDENT\'25',
    description: 'Winner for innovation, startup strategy, and tech presentation excellence',
    icon: Award,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30'
  }
];

const Achievements: React.FC = () => {
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
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
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
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${achievement.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;