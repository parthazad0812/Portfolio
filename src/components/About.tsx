import React from 'react';
import { Code, Database, Brain, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Analysis',
      description: 'Extracting insights from complex datasets'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Optimizing algorithms and data structures'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Oriented',
      description: 'Delivering results that matter'
    }
  ];

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="about" 
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-green-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            {'<About />'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Transforming ideas into elegant, efficient, and scalable digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <div className="relative -inset-1 dark:bg-gradient-to-r dark:from-green-500 dark:to-green-600 light:bg-gradient-to-r light:from-green-500 light:to-green-600 rounded-full blur dark:opacity-30 light:opacity-20 group-hover:dark:opacity-100 group-hover:light:opacity-60 transition duration-200"></div>
              <div className="relative w-80 h-80 mx-auto rounded-full dark:bg-slate-900 light:bg-white p-1 dark:border dark:border-green-500/30 light:border light:border-green-300/30 overflow-hidden">
                <img 
                  src="/images/profile.png" 
                  alt="Parth Azad - Full Stack Developer" 
                  className="w-full h-full rounded-full object-cover shadow-2xl dark:shadow-green-500/20 light:shadow-green-400/20"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold dark:text-white light:text-gray-900 mb-4 dark:glow-text">
                Full Stack Developer, Backend Developer & Data Analyst
              </h3>
              <p className="dark:text-gray-300 light:text-gray-700 leading-relaxed mb-6 font-mono text-sm">
                {'// Passionate full stack developer with expertise in data analysis, backend development,'}<br/>
                {'// and algorithmic problem solving. Building solutions that matter.'}
              </p>
              <p className="dark:text-gray-400 light:text-gray-600 leading-relaxed font-mono text-sm">
                {'const skills = ['}<br/>
                {'  "Full Stack Development", "Clean Code", "Problem Solving", "Data Insights",'}<br/>
                {'  "Scalable Architecture", "Performance Optimization"'}<br/>
                {']; // Continuous Learning'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg dark:bg-slate-800/40 light:bg-white/60 dark:border dark:border-green-500/20 light:border light:border-green-300/30 hover:dark:border-green-500/60 hover:light:border-green-400/60 transition-all duration-200 hover:scale-105 hover:shadow-lg dark:hover:shadow-green-500/20 light:hover:shadow-green-400/20 dark:hover:bg-slate-800/60 light:hover:bg-white/80 dark:backdrop-blur-sm light:backdrop-blur"
                >
                  <div className="dark:text-green-400 light:text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold dark:text-white light:text-gray-900 mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-sm dark:text-gray-400 light:text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;