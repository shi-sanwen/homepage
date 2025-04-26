import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              创梦星际
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {['首页', '特点', '关于', '联系'].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item === '首页' ? 'home' : item === '特点' ? 'features' : item === '关于' ? 'about' : 'contact')}
                className="relative px-5 py-2 group text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 h-full w-full bg-blue-100 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="relative p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
            >
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <span className="relative">
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
              </span>
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden relative p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
            >
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <span className="relative">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg transition-all duration-300 transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-1">
          {['首页', '特点', '关于', '联系'].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item === '首页' ? 'home' : item === '特点' ? 'features' : item === '关于' ? 'about' : 'contact')}
              className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;