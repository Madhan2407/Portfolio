import React, { useState } from 'react';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  id: number;
  title: string;
  description: string;
  techTags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Chatbot',
    description: 'Voice chatbot with file upload & summarization features.',
    techTags: ['Python', 'NLP', 'Speech-to-Text', 'Summarization'],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Responsive portfolio with project showcase.',
    techTags: ['React', 'Tailwind', 'Responsive Web Design'],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'AI Customer Support Bot',
    description: 'Smart chatbot for handling customer queries.',
    techTags: ['NLP', 'Chatbot', 'Python'],
    imageUrl: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'AI/ML'
  }
];

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const allTechTags = Array.from(new Set(projects.flatMap(project => project.techTags)));
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filterProjects = (tech: string | null = selectedTech, category: string = selectedCategory) => {
    let filtered = projects;

    if (category !== 'All') {
      filtered = filtered.filter(project => project.category === category);
    }

    if (tech) {
      filtered = filtered.filter(project => project.techTags.includes(tech));
    }

    setFilteredProjects(filtered);
  };

  const handleTechFilter = (tech: string) => {
    const newTech = selectedTech === tech ? null : tech;
    setSelectedTech(newTech);
    filterProjects(newTech, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterProjects(selectedTech, category);
  };

  const clearFilters = () => {
    setSelectedTech(null);
    setSelectedCategory('All');
    setFilteredProjects(projects);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Explore my portfolio of web applications, AI solutions, and innovative projects
            </p>
          </div>

          {/* Filter Controls */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 px-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Filter by:</span>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Tag Filters */}
            <div className="flex flex-wrap gap-2 mb-4 px-4">
              {allTechTags.map(tech => (
                <button
                  key={tech}
                  onClick={() => handleTechFilter(tech)}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 ${
                    selectedTech === tech
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/50'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Clear Filters */}
            {(selectedTech || selectedCategory !== 'All') && (
              <div className="px-4">
                <button
                onClick={clearFilters}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                <X className="w-4 h-4" />
                  <span className="text-sm">Clear Filters</span>
                </button>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full flex-shrink-0 ml-2">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.techTags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors">
                      Project Details
                    </button>
                    <div className="flex space-x-2">
                      <button
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        aria-label="View repository"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                Try adjusting your filters or browse all projects
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;