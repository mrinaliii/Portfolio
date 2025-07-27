import React from 'react';
import { Linkedin, Github, Code, Download, Mail } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mrinalicharhate/',
      icon: Linkedin,
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mrinaliii',
      icon: Github,
      color: 'text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/mrinaliii/',
      icon: Code,
      color: 'text-orange-500 hover:text-orange-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Replace with actual CV URL
    const cvUrl = 'MrinaliCharhateResume1pg.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mrinali_Charhate_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hello, I'm{' '}
                <span className="text-blue-600 dark:text-blue-400">
                  Mrinali Charhate
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                Software Developer
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Aspiring CSE student passionate about AI/ML, full-stack software development, and technology. 
              Crafting digital experiences with code and creativity.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Contact
              </button>
              <button
                onClick={downloadCV}
                className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Photo and Social Links */}
          <div className="flex flex-col items-center space-y-8">
            {/* Circular Photo Frame */}
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src="/pfp.jpg"
                    alt="Mrinali Charhate"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent size={28} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
