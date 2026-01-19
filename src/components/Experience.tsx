import React, { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            // Keep observing for re-animations when scrolling back
          }
        });
      },
      { threshold: 0.25, rootMargin: '80px' }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Bachelor of Technology in Computer Science Engineering',
      company: 'Bennett University',
      location: 'Greater Noida, India',
      period: 'Aug 2023 - Aug 2027',
      type: 'Education',
      description: [
        'Current CGPA: 9.2 - Ranked among top 5% of the class',
        'Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Software Engineering',
        'Strong focus on core Computer Science subjects like Data Structures, Algorithms, and Software Development',
        'Active participant in coding competitions and hackathons'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'TechFlow Solutions',
      location: 'Remote',
      period: 'Jun 2024 - Aug 2024',
      type: 'Internship',
      description: [
        'Analyzed large datasets using SQL to identify trends and patterns that improved business decision-making',
        'Built interactive dashboards in Power BI that increased reporting efficiency by 40%',
        'Collaborated with cross-functional teams to translate business requirements into data insights',
        'Implemented data cleaning and preprocessing pipelines that enhanced data quality'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'InnovateTech',
      location: 'Pune, India',
      period: 'Jan 2024 - May 2024',
      type: 'Freelance',
      description: [
        'Developed RESTful APIs using Node.js and Express.js for e-commerce applications',
        'Designed and optimized database schemas resulting in 30% faster query performance',
        'Implemented authentication and authorization systems with JWT tokens',
        'Collaborated with frontend team to ensure seamless API integration'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 light:bg-gradient-to-b light:from-gray-100 light:via-gray-50 light:to-gray-100">
      {/* Optimized background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="dark:absolute light:hidden -top-40 -left-40 w-80 h-80 dark:bg-green-500/2 rounded-full blur-2xl"></div>
        <div className="dark:absolute light:hidden -bottom-40 -right-40 w-80 h-80 dark:bg-green-500/2 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-6 dark:glow-text">
            {'<Experience />'}
          </h2>
          <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-transparent dark:via-green-500 dark:to-transparent light:bg-gradient-to-r light:from-transparent light:via-green-500 light:to-transparent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-sm dark:text-gray-300 light:text-gray-600 font-mono">
            {'// Timeline of professional milestones and achievements'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 dark:bg-gradient-to-b dark:from-green-500/0 dark:via-green-500/30 dark:to-green-500/0 light:bg-gradient-to-b light:from-green-500/0 light:via-green-500/25 light:to-green-500/0 pointer-events-none">
            {/* Glowing effect that activates on visible items */}
            {visibleItems.some(v => v) && (
              <div className="absolute top-0 left-0 w-full h-full dark:bg-gradient-to-b dark:from-transparent dark:via-green-400/60 dark:to-transparent light:bg-gradient-to-b light:from-transparent light:via-green-500/40 light:to-transparent animate-pulse-slow origin-top"></div>
            )}
          </div>

          {/* Timeline Items */}
          <div className="space-y-0">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems[index];

              return (
                <div
                  key={index}
                  data-index={index}
                  className="timeline-item relative flex items-center min-h-80"
                >
                  {/* Left Content (appears on even indices) */}
                  <div className={`w-1/2 pr-12 ${isLeft ? 'text-left' : 'invisible'}`}>
                    <div
                      className={`transition-all duration-700 ease-out ${
                        isLeft && isVisible
                          ? 'opacity-100 translate-x-0'
                          : isLeft
                          ? 'opacity-0 translate-x-8'
                          : ''
                      }`}
                      style={{
                        willChange: isLeft ? 'opacity, transform' : 'auto'
                      }}
                    >
                      {isLeft && (
                        <div className="group dark:bg-slate-800/40 light:bg-white/60 dark:border dark:border-green-500/20 light:border light:border-green-300/30 hover:dark:border-green-500/60 hover:light:border-green-400/60 p-6 rounded-lg dark:backdrop-blur-sm light:backdrop-blur transition-all duration-200 hover:shadow-lg dark:hover:shadow-green-500/20 light:hover:shadow-green-400/20 dark:hover:bg-slate-800/60 light:hover:bg-white/80">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 transition-colors ${
                            experience.type === 'Education' 
                              ? 'dark:bg-blue-500/20 dark:text-blue-400 light:bg-blue-100/70 light:text-blue-700'
                              : experience.type === 'Internship'
                              ? 'dark:bg-green-500/20 dark:text-green-400 light:bg-green-100/70 light:text-green-700'
                              : 'dark:bg-purple-500/20 dark:text-purple-400 light:bg-purple-100/70 light:text-purple-700'
                          }`}>
                            {experience.type}
                          </span>
                          <h3 className="text-xl font-bold dark:text-white light:text-gray-900 mb-2 group-hover:dark:text-green-400 group-hover:light:text-green-600 transition-colors duration-200">
                            {experience.title}
                          </h3>
                          <h4 className="text-lg font-semibold dark:text-green-400 light:text-green-600 mb-3 font-mono">
                            {'> '}{experience.company}
                          </h4>
                          <div className="space-y-2 mb-4 dark:text-gray-400 light:text-gray-600">
                            <div className="flex items-center space-x-2 text-sm font-mono">
                              <Calendar size={14} className="flex-shrink-0" />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm font-mono">
                              <MapPin size={14} className="flex-shrink-0" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {experience.description.map((item, descIndex) => (
                              <li key={descIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 dark:bg-green-500/60 light:bg-green-500/70 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="dark:text-gray-300 light:text-gray-700 text-sm leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center flex-shrink-0">
                    <div className={`transition-all duration-500 ease-out ${
                      isVisible
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                    }`}>
                      <div className="w-6 h-6 dark:bg-gradient-to-br dark:from-green-400 dark:to-green-600 light:bg-gradient-to-br light:from-green-500 light:to-green-600 rounded-full border-4 dark:border-slate-950 light:border-white dark:shadow-lg dark:shadow-green-500/50 light:shadow-lg light:shadow-green-400/30 relative z-20 will-change-transform"></div>
                    </div>
                    {/* Outer glow ring */}
                    <div className={`absolute w-12 h-12 rounded-full border-2 dark:border-green-500/40 light:border-green-400/40 transition-all duration-500 ${
                      isVisible
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                    }`}></div>
                  </div>

                  {/* Right Content (appears on odd indices) */}
                  <div className={`w-1/2 pl-12 ${!isLeft ? 'text-left' : 'invisible'}`}>
                    <div
                      className={`transition-all duration-700 ease-out ${
                        !isLeft && isVisible
                          ? 'opacity-100 translate-x-0'
                          : !isLeft
                          ? 'opacity-0 -translate-x-8'
                          : ''
                      }`}
                      style={{
                        willChange: !isLeft ? 'opacity, transform' : 'auto'
                      }}
                    >
                      {!isLeft && (
                        <div className="group dark:bg-slate-800/40 light:bg-white/60 dark:border dark:border-green-500/20 light:border light:border-green-300/30 hover:dark:border-green-500/60 hover:light:border-green-400/60 p-6 rounded-lg dark:backdrop-blur-sm light:backdrop-blur transition-all duration-200 hover:shadow-lg dark:hover:shadow-green-500/20 light:hover:shadow-green-400/20 dark:hover:bg-slate-800/60 light:hover:bg-white/80">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 transition-colors ${
                            experience.type === 'Education' 
                              ? 'dark:bg-blue-500/20 dark:text-blue-400 light:bg-blue-100/70 light:text-blue-700'
                              : experience.type === 'Internship'
                              ? 'dark:bg-green-500/20 dark:text-green-400 light:bg-green-100/70 light:text-green-700'
                              : 'dark:bg-purple-500/20 dark:text-purple-400 light:bg-purple-100/70 light:text-purple-700'
                          }`}>
                            {experience.type}
                          </span>
                          <h3 className="text-xl font-bold dark:text-white light:text-gray-900 mb-2 group-hover:dark:text-green-400 group-hover:light:text-green-600 transition-colors duration-200">
                            {experience.title}
                          </h3>
                          <h4 className="text-lg font-semibold dark:text-green-400 light:text-green-600 mb-3 font-mono">
                            {'> '}{experience.company}
                          </h4>
                          <div className="space-y-2 mb-4 dark:text-gray-400 light:text-gray-600">
                            <div className="flex items-center space-x-2 text-sm font-mono">
                              <Calendar size={14} className="flex-shrink-0" />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm font-mono">
                              <MapPin size={14} className="flex-shrink-0" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {experience.description.map((item, descIndex) => (
                              <li key={descIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 dark:bg-green-500/60 light:bg-green-500/70 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="dark:text-gray-300 light:text-gray-700 text-sm leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* End marker */}
          <div className="relative flex items-center justify-center h-16">
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-3 h-3 dark:bg-green-500/60 light:bg-green-500/70 rounded-full will-change-transform"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;




// import React, { useEffect, useState } from "react";
// import { Calendar, MapPin } from "lucide-react";

// const Experience: React.FC = () => {
//   const [visibleItems, setVisibleItems] = useState<number[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = parseInt(entry.target.getAttribute("data-index") || "0");
//           if (entry.isIntersecting) {
//             setVisibleItems((prev) => [...new Set([...prev, index])]);
//           } else {
//             setVisibleItems((prev) => prev.filter((i) => i !== index));
//           }
//         });
//       },
//       { threshold: 0.4 }
//     );

//     const elements = document.querySelectorAll(".experience-node");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const experiences = [
//     {
//       title: "Bachelor of Technology in Computer Science Engineering",
//       company: "Bennett University",
//       location: "Greater Noida, India",
//       period: "Aug 2023 - Aug 2027",
//       type: "Education",
//       description: [
//         "Current CGPA: 9.2 - Ranked among top 5% of the class",
//         "Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Software Engineering",
//         "Strong focus on core Computer Science subjects like Data Structures, Algorithms, and Software Development",
//         "Active participant in coding competitions and hackathons",
//       ],
//     },
//     {
//       title: "Data Analyst Intern",
//       company: "TechFlow Solutions",
//       location: "Remote",
//       period: "Jun 2024 - Aug 2024",
//       type: "Internship",
//       description: [
//         "Analyzed large datasets using SQL to identify trends and patterns",
//         "Built dashboards in Power BI that increased reporting efficiency by 40%",
//         "Collaborated with teams to translate requirements into insights",
//         "Implemented preprocessing pipelines that enhanced data quality",
//       ],
//     },
//     {
//       title: "Backend Developer",
//       company: "InnovateTech",
//       location: "Pune, India",
//       period: "Jan 2024 - May 2024",
//       type: "Freelance",
//       description: [
//         "Developed REST APIs using Node.js and Express.js",
//         "Optimized database schemas resulting in 30% faster queries",
//         "Implemented authentication with JWT tokens",
//         "Worked with frontend team for seamless API integration",
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="py-20 relative overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">
//             Experience
//           </h2>
//           <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
//           <p className="max-w-3xl mx-auto text-lg dark:text-gray-300 text-gray-600">
//             My professional journey and educational background
//           </p>
//         </div>

//         {/* Roadmap */}
//         <div className="relative flex flex-col items-center">
//           {/* Vertical line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 via-green-400 to-green-500 h-full"></div>

//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               data-index={index}
//               className={`experience-node relative flex items-center justify-center w-full mb-16`}
//             >
//               {/* Connector line */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 shadow-lg shadow-green-500/50 z-10"></div>

//               {/* Card */}
//               <div
//                 className={`w-[40%] p-6 rounded-2xl border shadow-lg transition-all duration-700 ${
//                   visibleItems.includes(index)
//                     ? "opacity-100 scale-100 shadow-green-500/30"
//                     : "opacity-40 scale-95"
//                 } ${
//                   index % 2 === 0
//                     ? "ml-auto mr-[55%] dark:bg-gray-900/80 bg-white border-gray-200 dark:border-gray-800"
//                     : "mr-auto ml-[55%] dark:bg-gray-900/80 bg-white border-gray-200 dark:border-gray-800"
//                 }`}
//               >
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     exp.type === "Education"
//                       ? "bg-blue-500/20 text-blue-400"
//                       : exp.type === "Internship"
//                       ? "bg-green-500/20 text-green-400"
//                       : "bg-purple-500/20 text-purple-400"
//                   }`}
//                 >
//                   {exp.type}
//                 </span>

//                 <h3 className="text-xl font-bold dark:text-white text-gray-900 mt-3 mb-1">
//                   {exp.title}
//                 </h3>
//                 <h4 className="text-lg font-semibold text-green-500 mb-3">
//                   {exp.company}
//                 </h4>

//                 <div className="flex items-center space-x-4 mb-4 dark:text-gray-300 text-gray-600">
//                   <div className="flex items-center space-x-1">
//                     <Calendar size={16} />
//                     <span className="text-sm">{exp.period}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <MapPin size={16} />
//                     <span className="text-sm">{exp.location}</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-2">
//                   {exp.description.map((d, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start space-x-2 text-sm leading-relaxed dark:text-gray-300 text-gray-600"
//                     >
//                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                       <span>{d}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
