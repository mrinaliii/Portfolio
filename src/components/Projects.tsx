import React from 'react';
import { Github } from 'lucide-react';
import { ProjectCategory } from '../types';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projectCategories: ProjectCategory[] = [
    {
      title: 'Web Development',
      badgeColor: 'emerald',
      projects: [
        // {
        //   title: 'Fitness Blog',
        //   description: 'A dynamic fitness blog featuring health tips, workout routines, and nutrition advice.',
        //   technologies: ['HTML5', 'CSS3'],
        //   code: 'https://github.com/mrinaliii/FitnessBlog',
        //   image: '/fitness.png'
        // },
        
        {
          title: 'Gaming News Website',
          description: 'A visually striking frontend web app designed with a modern RGB gaming theme, showcasing dynamic UI elements and responsive layouts tailored for gaming enthusiasts.',
          technologies: ['HTML5', 'CSS3'],
          code: 'https://github.com/mrinaliii/GameGrid',
          image: '/gamegrid.png'
        },
        {
          title: 'Night Slip Tracker',
          description: 'A web app built to streamline night slip applications and attendance tracking for VIT clubs, enabling secretaries to manage requests efficiently while keeping members informed with timely updates.',
          technologies: ['HTML5', 'CSS3', 'React.js'],
          code: 'https://github.com/Red2Ninja/mini_project',
          image: '/nstracker.jpg'
        },
        
        {
          title: 'Productivity Dashboard',
          description: 'A sleek productivity tool featuring a Pomodoro timer, to-do list, and integrated Lofi music via the YouTube API—designed to help users stay focused and organized with a calming aesthetic.',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          code: 'https://github.com/mrinaliii/ProductivityDashboard',
          image: '/lofi.png'
        }
      ]
    },
    {
      title: 'UI/UX Design',
      badgeColor: 'purple',
      projects: [
        {
          title: 'Resort Website Design',
          description: 'A visually stunning resort website design created using Canva.',
          technologies: ['Canva'],
          image: '/resort.png'
        },
        {
          title: 'Arcs Website Redesign',
          description: 'Redesign for IEEE CS club\'s flagship event.',
          technologies: ['Figma'],
          image: '/arcs.png'
        },
        {
          title: 'HackBattle Website Redesign',
          description: 'Redesign for IEEE CS club\'s flagship event.',
          technologies: ['Figma'],
          image: '/hackbattle.jpg'
        }
      ]
    },
    {
      title: 'AI/ML Projects',
      badgeColor: 'orange',
      projects: [
        {
          title: 'Solar Energy RAG System',
          description: 'Built a sophisticated LangChain-powered Question-Answering system using Llama3 and Streamlit for intelligent querying of solar energy PDFs. Features advanced retrieval-augmented generation for accurate, context-aware responses.',
          technologies: ['LangChain', 'Llama3', 'Streamlit', 'Python', 'RAG'],
          image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=500'
        },
        {
          title: 'MedAssist Chatbot',
          description: 'Created an intelligent FastAPI-driven AI chatbot that analyzes user symptoms and suggests appropriate medical departments. Features real-time UI interactions and machine learning-based symptom analysis for accurate healthcare guidance.',
          technologies: ['FastAPI', 'Machine Learning', 'Python', 'Real-time UI', 'IBM WatsonX', 'NLP'],
          code: 'https://github.com/mrinaliii/MedicalChatbot',
          image: '/medassist.jpg'
        }
      ]
    }
  ];

  const getBadgeColor = (category: string) => {
    switch (category) {
      case 'emerald':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'purple':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'orange':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Frontend Development':
        return '';
      case 'UI/UX Design':
        return '';
      case 'AI/ML Projects':
        return '';
      default:
        return '';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            A showcase of my work across different domains
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {projectCategories.map((category) => (
            <div key={category.title} className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                  <span className="text-4xl">{getCategoryIcon(category.title)}</span>
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                          {project.title}
                        </h4>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${getBadgeColor(category.badgeColor)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.code && (
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors"
                          >
                            <Github size={16} />
                            <span className="text-sm">Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
