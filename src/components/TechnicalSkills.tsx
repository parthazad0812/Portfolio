import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Terminal, Database, Layout, Wrench } from 'lucide-react';

const TechnicalSkills: React.FC = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.15 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5" />,
      skills: ['React.js', 'JavaScript', 'HTML & CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <Terminal className="w-5 h-5" />,
      skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL']
    },
    {
      title: 'Data',
      icon: <Database className="w-5 h-5" />,
      skills: ['SQL', 'Python', 'Pandas', 'NumPy']
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-5 h-5" />,
      skills: ['Git & GitHub', 'VS Code', 'Postman', 'MongoDB']
    }
  ];

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="skills" 
      className="py-20 relative overflow-hidden"
    >
      {/* Dark matrix-like background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal-style header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-2 text-green-400 font-mono text-sm mb-2">
              <span className="animate-pulse">●</span>
              <span className="text-gray-500">system@portfolio</span>
              <span className="text-green-400">~</span>
              <span className="text-gray-400">$</span>
              <span className="text-green-300">cat skills.json</span>
              <span className="animate-pulse text-green-400">▊</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-green-400">{'<'}</span>
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            <span className="text-green-400">{' />'}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-8 shadow-lg shadow-green-500/50"></div>
          <p className="max-w-3xl mx-auto text-sm text-gray-400 font-mono">
            <span className="text-green-500">{'// '}</span>
            <span className="text-gray-300">Technologies & tools that power innovative solutions</span>
          </p>
        </div>

        {/* Skills Grid - Terminal Card Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative animate-scroll-in"
              style={{
                animationDelay: `${categoryIndex * 150}ms`
              }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              
              {/* Terminal card */}
              <div className="relative bg-slate-900/90 border border-green-500/30 rounded-lg overflow-hidden backdrop-blur-sm hover:border-green-400/60 transition-all duration-300">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-green-500/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">{category.title.toLowerCase()}.sh</span>
                </div>
                
                {/* Terminal content */}
                <div className="p-5">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-green-400">{category.icon}</span>
                    <h3 className="text-lg font-bold text-green-400 font-mono">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex items-center space-x-2 group/skill"
                      >
                        <span className="text-green-500 font-mono text-xs">{'>'}</span>
                        <span className="text-sm font-mono text-gray-300 group-hover/skill:text-green-400 transition-colors duration-200 cursor-default">
                          {skill}
                        </span>
                        <span className="text-green-500/0 group-hover/skill:text-green-500 transition-all duration-200 text-xs">✓</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Terminal prompt */}
                  <div className="mt-4 pt-3 border-t border-green-500/10">
                    <span className="text-xs font-mono text-gray-500">
                      <span className="text-green-400">$</span> loaded {category.skills.length} modules
                      <span className="animate-pulse text-green-400 ml-1">_</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-900/60 border border-green-500/30 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-mono text-green-400">
              system.skills.status: <span className="text-emerald-400">active</span>
            </span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;