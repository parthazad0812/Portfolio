// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

// const Hero: React.FC = () => {
//   const [currentSkill, setCurrentSkill] = useState('');
//   const [skillIndex, setSkillIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

// //   const skills = ['Full Stack Developer', 'Data Analyst', 'Backend Developer', 'DSA Expert', 'Problem Solver'];

//   useEffect(() => {
//     const currentSkillText = skills[skillIndex];
    
//     const timer = setTimeout(() => {
//       if (!isDeleting) {
//         if (charIndex < currentSkillText.length) {
//           setCurrentSkill(currentSkillText.substring(0, charIndex + 1));
//           setCharIndex(charIndex + 1);
//         } else {
//           setTimeout(() => setIsDeleting(true), 1100);
//         }
//       } else {
//         if (charIndex > 0) {
//           setCurrentSkill(currentSkillText.substring(0, charIndex - 1));
//           setCharIndex(charIndex - 1);
//         } else {
//           setIsDeleting(false);
//           setSkillIndex((skillIndex + 1) % skills.length);
//         }
//       }
//     }, isDeleting ? 50 : 75);

//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting, skillIndex, skills]);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <div className="space-y-8">
//           <div className="space-y-4">
//             <p className="text-lg sm:text-xl text-green-500 font-medium animate-fade-in">
//               Hello, I'm
//             </p>
//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold dark:text-white text-gray-900 animate-slide-up">
//               Parth Azad
//             </h1>
//             <div className="h-20 flex items-center justify-center">
//               <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-500">
//                 I'm a{' '}
//                 <span className="inline-block min-w-[300px] text-left">
//                   {currentSkill}
//                   <span className="animate-pulse">|</span>
//                 </span>
//               </p>
//             </div>
//           </div>

//           <p className="max-w-2xl mx-auto text-lg sm:text-xl dark:text-gray-300 text-gray-600 leading-relaxed animate-fade-in-delayed">
//             Passionate about transforming data into insights and building robust backend solutions. 
//             I specialize in data analysis, algorithm design, and creating scalable applications 
//             that solve real-world problems.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
//             <button
//               onClick={() => scrollToSection('projects')}
//               className="group px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               View My Work
//             </button>
//             <a
//               href="mailto:parthazad08@gmail.com"
//               className="group px-8 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
//             >
//               Contact Me
//             </a>
//           </div>

//           <div className="flex justify-center space-x-6 animate-fade-in-delayed">
//             <a
//               href="https://github.com/parthazad0812"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group p-3 rounded-lg dark:bg-gray-800 bg-gray-100 hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               <Github className="w-6 h-6 dark:text-gray-300 text-gray-600 group-hover:text-white transition-colors" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/parth-azad-7b749a281/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group p-3 rounded-lg dark:bg-gray-800 bg-gray-100 hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               <Linkedin className="w-6 h-6 dark:text-gray-300 text-gray-600 group-hover:text-white transition-colors" />
//             </a>
//             <a
//               href="mailto:parthazad08@gmail.com"
//               className="group p-3 rounded-lg dark:bg-gray-800 bg-gray-100 hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               <Mail className="w-6 h-6 dark:text-gray-300 text-gray-600 group-hover:text-white transition-colors" />
//             </a>
//             <a
//               href="https://codolio.com/profile/usnFDuX3"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group p-3 rounded-lg dark:bg-gray-800 bg-gray-100 hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               <ExternalLink className="w-6 h-6 dark:text-gray-300 text-gray-600 group-hover:text-white transition-colors" />
//             </a>
//           </div>
//         </div>

//         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <button
//             onClick={() => scrollToSection('about')}
//             className="p-3 rounded-full dark:text-gray-400 text-gray-500 hover:text-green-500 transition-colors duration-300 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50"
//           >
//             <ChevronDown size={32} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

// const Hero: React.FC = () => {
//   const [currentSkill, setCurrentSkill] = useState('');
//   const [skillIndex, setSkillIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const skills = ['Full Stack Developer', 'Data Analyst', 'Backend Developer', 'DSA Expert', 'Problem Solver'];

//   useEffect(() => {
//     const currentSkillText = skills[skillIndex];
    
//     const timer = setTimeout(() => {
//       if (!isDeleting) {
//         if (charIndex < currentSkillText.length) {
//           setCurrentSkill(currentSkillText.substring(0, charIndex + 1));
//           setCharIndex(charIndex + 1);
//         } else {
//           setTimeout(() => setIsDeleting(true), 1100);
//         }
//       } else {
//         if (charIndex > 0) {
//           setCurrentSkill(currentSkillText.substring(0, charIndex - 1));
//           setCharIndex(charIndex - 1);
//         } else {
//           setIsDeleting(false);
//           setSkillIndex((skillIndex + 1) % skills.length);
//         }
//       }
//     }, isDeleting ? 50 : 75);

//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting, skillIndex, skills]);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <div className="space-y-8">
//           <div className="space-y-4">
//             <p className="text-lg sm:text-xl text-green-500 font-medium animate-fade-in">
//               Hello, I'm
//             </p>
//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold dark:text-white text-gray-900 animate-slide-up">
//               Parth Azad
//             </h1>
//             <div className="h-20 flex items-center justify-center">
//               <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-500">
//                 I'm a{' '}
//                 <span className="inline-block min-w-[300px] text-left">
//                   {currentSkill}
//                   <span className="animate-pulse">|</span>
//                 </span>
//               </p>
//             </div>
//           </div>

//           <p className="max-w-2xl mx-auto text-lg sm:text-xl dark:text-gray-300 text-gray-600 leading-relaxed animate-fade-in-delayed">
//             Passionate about transforming data into insights and building robust backend solutions. 
//             I specialize in data analysis, algorithm design, and creating scalable applications 
//             that solve real-world problems.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
//             <button
//               onClick={() => scrollToSection('projects')}
//               className="group px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               View My Work
//             </button>
//             <a
//               href="mailto:parthazad08@gmail.com"
//               className="group px-8 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
//             >
//               Contact Me
//             </a>
//           </div>

//           {/* Social icons */}
//           <div className="flex justify-center space-x-6 animate-fade-in-delayed">
//             <a
//               href="https://github.com/parthazad0812"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group p-3 rounded-lg dark:bg-gray-800 bg-gray-100 hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               <Github className="w-6 h-6 dark:text-gray-300 text-gray-600 group-hover:text-white transition-colors" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/parth-azad-7b749a281/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group p-3 rounded-lg dark:bg-gray-800 bg-gray-100 hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               <Linkedin className="w-6 h-6 dark:text-gray-300 text-gray-600 group-hover:text-white transition-colors" />
//             </a>
//             <a
//               href="mailto:parthazad08@gmail.com"
//               className="group p-3 rounded-lg dark:bg-gray-800 bg-gray-100 hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               <Mail className="w-6 h-6 dark:text-gray-300 text-gray-600 group-hover:text-white transition-colors" />
//             </a>
//             <a
//               href="https://codolio.com/profile/usnFDuX3"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group p-3 rounded-lg dark:bg-gray-800 bg-gray-100 hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
//             >
//               <ExternalLink className="w-6 h-6 dark:text-gray-300 text-gray-600 group-hover:text-white transition-colors" />
//             </a>
//           </div>

//           {/* Bouncing arrow BELOW social icons */}
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={() => scrollToSection('about')}
//               className="p-3 rounded-full dark:text-gray-400 text-gray-500 hover:text-green-500 transition-colors duration-300 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 animate-bounce"
//             >
//               <ChevronDown size={32} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, FileText, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = ['Full Stack Developer', 'Data Analyst', 'Backend Developer', 'DSA Expert', 'Problem Solver'];

  useEffect(() => {
    const currentSkillText = skills[skillIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentSkillText.length) {
          setCurrentSkill(currentSkillText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1100);
        }
      } else {
        if (charIndex > 0) {
          setCurrentSkill(currentSkillText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setSkillIndex((skillIndex + 1) % skills.length);
        }
      }
    }, isDeleting ? 50 : 75);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, skillIndex, skills]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Intro */}
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-green-400 font-medium animate-fade-in font-mono">
              $ <span className="text-green-300">console</span>.<span className="text-green-500">log</span>(<span className="text-yellow-300">"Hello, I'm"</span>)
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white animate-slide-up glow-text">
              Parth Azad
            </h1>

            {/* Typing effect with code style */}
            <div className="h-20 flex items-center justify-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-400 font-mono">
                <span className="text-slate-400">{'> '}</span>
                <span className="inline-block min-w-[340px] text-center text-green-400">
                  {currentSkill}
                  <span className="animate-pulse text-green-500">_</span>
                </span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed animate-fade-in-delayed font-mono">
            <span className="text-green-400">// </span>
            Transforming data into insights and building scalable solutions.
            <br/>
            <span className="text-green-400">// </span>
            Specializing in backend architecture, algorithm optimization, and clean code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 overflow-hidden"
            >
              <span className="relative z-10">{'→ '} View My Work</span>
              <div className="absolute inset-0 bg-green-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <a
              href="mailto:parthazad08@gmail.com"
              className="group px-8 py-3 border-2 border-green-500/60 text-green-400 hover:text-white hover:bg-green-500/10 font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:border-green-400"
            >
              {'{ '} Contact Me {' }'}
            </a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center space-x-6 animate-fade-in-delayed">
            <a
              href="https://github.com/parthazad0812"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-slate-800/50 border border-green-500/20 hover:border-green-500/60 text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 hover:bg-slate-800"
              title="GitHub"
            >
              <Github className="w-6 h-6 transition-colors" />
            </a>
            <a
              href="https://docs.google.com/document/d/19XYpFwXHXgp3phHd7NW2ynqNSxY09Kcl/edit?usp=sharing&ouid=104669824031844113651&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-slate-800/50 border border-green-500/20 hover:border-green-500/60 text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 hover:bg-slate-800"
              title="View Resume"
            >
              <FileText className="w-6 h-6 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/parth-azad-7b749a281/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-slate-800/50 border border-green-500/20 hover:border-green-500/60 text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 hover:bg-slate-800"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6 transition-colors" />
            </a>
            <a
              href="mailto:parthazad08@gmail.com"
              className="group p-3 rounded-lg bg-slate-800/50 border border-green-500/20 hover:border-green-500/60 text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 hover:bg-slate-800"
              title="Email"
            >
              <Mail className="w-6 h-6 transition-colors" />
            </a>
            <a
              href="https://codolio.com/profile/usnFDuX3"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-slate-800/50 border border-green-500/20 hover:border-green-500/60 text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 hover:bg-slate-800"
              title="Codolio"
            >
              <Code2 className="w-6 h-6 transition-colors" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => scrollToSection('about')}
              className="group p-3 rounded-full text-green-400 hover:text-green-300 transition-all duration-300 bg-slate-800/30 border border-green-500/20 hover:border-green-500/60 backdrop-blur-sm animate-bounce hover:shadow-lg hover:shadow-green-500/20"
            >
              <ChevronDown size={32} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
