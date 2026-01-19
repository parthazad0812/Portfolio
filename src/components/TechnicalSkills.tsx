import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechnicalSkills: React.FC = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.15 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML & CSS', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 90 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Pandas', level: 80 },
        { name: 'NumPy', level: 75 },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'Figma', level: 70 },
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="skills" 
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-green-500/4 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            {'<Skills />'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            {'// Technologies & tools that power innovative solutions'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group p-6 rounded-lg dark:border dark:border-green-500/20 light:border light:border-green-300/30 hover:dark:border-green-500/60 hover:light:border-green-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:hover:shadow-green-500/20 light:hover:shadow-green-400/20 dark:bg-slate-800/40 light:bg-white/60 dark:backdrop-blur-sm light:backdrop-blur hover:dark:bg-slate-800/60 light:hover:bg-white/80 animate-scroll-in"
              style={{
                animationDelay: `${categoryIndex * 100}ms`
              }}
            >
              <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-green-500/5 dark:to-transparent light:bg-gradient-to-br light:from-green-500/10 light:to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <h3 className="text-xl font-bold dark:text-white light:text-gray-900 mb-6 text-center group-hover:dark:text-green-400 group-hover:light:text-green-600 transition-colors duration-300 relative z-10">
                {'{ ' + category.title + ' }'}
              </h3>
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium dark:text-gray-300 light:text-gray-700 font-mono">
                        {skill.name}
                      </span>
                      <span className="text-xs dark:text-green-400 light:text-green-700 font-semibold dark:bg-green-500/10 light:bg-green-500/20 px-2 py-1 rounded">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full dark:bg-slate-900/50 light:bg-gray-300/30 rounded-full h-3 overflow-hidden dark:border dark:border-green-500/30 light:border light:border-green-400/30 dark:backdrop-blur-sm light:backdrop-blur">
                      <div
                        className="h-3 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-green-400 dark:to-emerald-500 light:bg-gradient-to-r light:from-green-500 light:via-green-600 light:to-green-700 rounded-full transition-all duration-1500 ease-out transform origin-left dark:shadow-lg dark:shadow-green-500/60 light:shadow-lg light:shadow-green-400/40"
                        style={{
                          width: `${skill.level}%`,
                          animation: `fillProgress 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${skillIndex * 0.15}s both`
                        }}
                      ></div>
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

export default TechnicalSkills;