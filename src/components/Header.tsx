import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode?: boolean;
  toggleTheme?: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const darkMode = true; // Always use dark mode

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-green-500/10 shadow-xl shadow-green-500/5' 
          : 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold transition-all duration-300 hover:text-green-400 glow-text hover:glow-text ${
                darkMode ? 'text-green-500' : 'text-gray-900'
              }`}
            >
              {'</>'}
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-green-400 hover:scale-105 border-b-2 border-transparent hover:border-green-500/50 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                darkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`md:hidden transition-all duration-300 ${
            darkMode ? 'bg-slate-900/95 border border-green-500/10' : 'bg-white/95'
          } backdrop-blur-md rounded-lg mt-2 p-4`}>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-green-400 hover:bg-green-500/10' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-500/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;