import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  const toggleTheme = () => {
    setDarkMode((currentMode) => !currentMode);
  };

  if (isLoading) {
    return (
      <div className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-950'
      }`}>
        <div className={`absolute inset-0 ${
          darkMode
            ? 'bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.18),transparent_34%),linear-gradient(180deg,#030712_0%,#0f172a_50%,#030712_100%)]'
            : 'bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_75%_75%,rgba(14,165,233,0.10),transparent_32%),linear-gradient(180deg,#f9fafb_0%,#ffffff_50%,#f3f4f6_100%)]'
        }`}></div>
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
          <div className="relative h-20 w-20">
            <div className={`absolute inset-0 rounded-full border ${
              darkMode ? 'border-green-500/20' : 'border-green-600/25'
            }`}></div>
            <div className={`absolute inset-2 animate-spin rounded-full border-2 border-transparent ${
              darkMode ? 'border-r-green-500 border-t-green-400' : 'border-r-green-700 border-t-green-500'
            }`}></div>
            <div className={`absolute inset-6 rounded-full shadow-lg ${
              darkMode ? 'bg-green-500/20 shadow-green-500/30' : 'bg-green-500/15 shadow-green-400/25'
            }`}></div>
          </div>
          <div className="space-y-3">
            <p className={`font-mono text-sm uppercase tracking-[0.35em] ${
              darkMode ? 'text-green-300' : 'text-green-700'
            }`}>
              Loading
            </p>
            <h1 className={`animate-loading-title text-3xl font-bold sm:text-5xl ${
              darkMode ? 'text-white' : 'text-gray-950'
            }`}>
              Parth's Portfolio
            </h1>
            <div className={`mx-auto h-1 w-56 overflow-hidden rounded-full ${
              darkMode ? 'bg-slate-800' : 'bg-gray-200'
            }`}>
              <div className={`h-full w-1/2 animate-loading-bar rounded-full bg-gradient-to-r ${
                darkMode ? 'from-green-400 to-emerald-500' : 'from-green-600 to-emerald-500'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-slate-950 dark:text-white light:bg-gray-50 light:text-gray-900">
      <div className="portfolio-sky" aria-hidden="true">
        <div className="star-field star-field-soft"></div>
        <div className="star-field star-field-bright"></div>
        <span className="meteor meteor-one"></span>
        <span className="meteor meteor-two"></span>
        <span className="meteor meteor-three"></span>
      </div>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
