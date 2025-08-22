import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Skill {
  name: string;
  category: 'technical' | 'soft';
}

const skills: Skill[] = [
  { name: 'Python', category: 'technical' },
  { name: 'HTML, CSS, JavaScript', category: 'technical' },
  { name: 'Git, GitHub', category: 'technical' },
  { name: 'Responsive Web Design', category: 'technical' },
  { name: 'AI Tools', category: 'technical' },
  { name: 'AWS Elastic Beanstalk', category: 'technical' },
  { name: 'Angular (Basics)', category: 'technical' },
  { name: 'Agile & Waterfall Methodologies', category: 'technical' },
  { name: 'Software Development Lifecycle (SDLC) & QA', category: 'technical' },
  { name: 'Algorithmic Thinking', category: 'technical' },
  { name: 'Problem-solving', category: 'soft' },
  { name: 'Technical Communication', category: 'soft' },
  { name: 'Team Collaboration', category: 'soft' },
  { name: 'Technology Trends Analysis', category: 'soft' }
];

interface SkillsProps {
  onSkillClick?: (skill: string) => void;
  selectedSkills?: string[];
}

const Skills: React.FC<SkillsProps> = ({ onSkillClick, selectedSkills = [] }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const handleSkillClick = (skillName: string) => {
    if (onSkillClick) {
      onSkillClick(skillName);
    }
  };

  const SkillTag: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    const isSelected = selectedSkills.includes(skill.name);
    const isHovered = hoveredSkill === skill.name;

    return (
      <button
        onClick={() => handleSkillClick(skill.name)}
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
        className={`
          inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium
          transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
          animate-fade-in-up cursor-pointer
          ${skill.category === 'technical'
            ? isSelected
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50'
            : isSelected
            ? 'bg-teal-600 text-white shadow-lg'
            : 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/50'
          }
          ${isHovered ? 'shadow-lg' : 'shadow-md'}
        `}
        style={{
          animationDelay: `${index * 100}ms`
        }}
        aria-label={`Filter projects by ${skill.name}`}
      >
        <span className={`
          w-2 h-2 rounded-full mr-1 sm:mr-2 transition-all duration-300
          ${skill.category === 'technical'
            ? isSelected ? 'bg-white' : 'bg-indigo-500 dark:bg-indigo-400'
            : isSelected ? 'bg-white' : 'bg-teal-500 dark:bg-teal-400'
          }
          ${isHovered ? 'animate-pulse' : ''}
        `}></span>
        {skill.name}
      </button>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Click on any skill to filter projects that use that technology or expertise
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center px-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4">
              {technicalSkills.map((skill, index) => (
                <SkillTag key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center px-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4">
              {softSkills.map((skill, index) => (
                <SkillTag key={skill.name} skill={skill} index={index + technicalSkills.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;