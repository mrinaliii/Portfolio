import React from 'react';
import { Heart, Linkedin, Github, Code } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/mrinalicharhate',
      icon: Linkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mrinaliii',
      icon: Github
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/mrinaliii/',
      icon: Code
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-center">
            © {currentYear} Mrinali Charhate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;