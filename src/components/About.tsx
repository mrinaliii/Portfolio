import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const skills = {
    languages: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://www.svgrepo.com/show/333609/tailwind-css.svg' }
    ],
    tools: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
    ]
  };

  const certifications = [
    {
      name: 'Generative AI Fundamentals',
      provider: 'Google Cloud',
      url: 'https://example.com/cert1',
      icon: '🤖'
    },
    {
      name: 'Machine Learning Specialization',
      provider: 'Stanford & DeepLearning.AI',
      url: 'https://example.com/cert2',
      icon: '🧠'
    },
    {
      name: 'Deep Learning Specialization',
      provider: 'DeepLearning.AI',
      url: 'https://example.com/cert3',
      icon: '🔬'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={isDark 
                    ? "doodle2.jpg"
                    : "doodle1.avif"
                  }
                  alt="About Mrinali"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a Computer Science Engineering student specializing in Information Security, driven by a passion for AI, machine learning, and full-stack development. With a strong academic background and hands-on experience in real-world projects, I thrive on building intelligent systems that solve meaningful problems.
              </p>
              <p>
                From designing retrieval-augmented generation pipelines at Reliance to crafting user-focused web apps and dashboards, I enjoy transforming complex ideas into impactful solutions. My skill set spans both backend logic and UI/UX design, enabling me to deliver end-to-end applications that are both functional and intuitive.
              </p>
              <p>
                Beyond academics, I contribute to open-source projects, lead design efforts at IEEE-CS, and stay engaged through hackathons and certifications in advanced AI topics. I'm always exploring new challenges to sharpen my skills and make a difference through technology.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-blue-600"></span>
                Programming Languages
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.languages.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="w-12 h-12 mx-auto mb-2">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Frameworks */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-blue-600"></span>
                Tools & Frameworks
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.tools.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="w-12 h-12 mx-auto mb-2">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {cert.provider}
                  </p>
                  <div className="flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <ExternalLink size={16} className="mr-1" />
                    <span className="text-sm font-medium">View Certificate</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;