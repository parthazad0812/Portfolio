

// import React from "react";
// import { ExternalLink, Github } from "lucide-react";

// const Projects: React.FC = () => {
//   const projects = [
//     {
//       title: "Data Analytics Dashboard",
//       description:
//         "Interactive dashboard for visualizing complex datasets with real-time analytics and insights.",
//       image:
//         "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
//       tags: ["Python", "Pandas", "Plotly", "Streamlit"],
//       github: "#",
//       live: "#",
//     },
//     {
//       title: "E-commerce Backend API",
//       description:
//         "Scalable REST API with authentication, payment processing, and inventory management.",
//       image:
//         "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
//       tags: ["Node.js", "Express", "MongoDB", "JWT"],
//       github: "#",
//       live: "#",
//     },
//     {
//       title: "Algorithm Visualizer",
//       description:
//         "Interactive tool to visualize sorting and pathfinding algorithms with step-by-step execution.",
//       image:
//         "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
//       tags: ["React", "TypeScript", "D3.js", "CSS"],
//       github: "#",
//       live: "#",
//     },
//     {
//       title: "Task Management System",
//       description:
//         "Full-stack application for team collaboration with real-time updates and progress tracking.",
//       image:
//         "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
//       tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
//       github: "#",
//       live: "#",
//     },
//     {
//       title: "Portfolio Analytics",
//       description:
//         "Personal portfolio with integrated analytics to track visitor engagement and interactions.",
//       image:
//         "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
//       tags: ["React", "Google Analytics", "Tailwind", "Vercel"],
//       github: "#",
//       live: "#",
//     },
//     {
//       title: "Machine Learning Classifier",
//       description:
//         "ML model for image classification with web interface for real-time predictions.",
//       image:
//         "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
//       tags: ["Python", "TensorFlow", "Flask", "OpenCV"],
//       github: "#",
//       live: "#",
//     },
//   ];

//   const [filter, setFilter] = React.useState("All");
//   const filterOptions = ["All", "React", "Python", "Machine Learning", "Backend"];

//   // Filtering logic
//   const filteredProjects = projects.filter((project) => {
//     if (filter === "All") return true;
//     if (filter === "Machine Learning") {
//       return (
//         project.tags.includes("TensorFlow") ||
//         project.tags.includes("Flask") ||
//         project.tags.includes("OpenCV")
//       );
//     }
//     if (filter === "Backend") {
//       return (
//         project.tags.includes("Node.js") ||
//         project.tags.includes("Express") ||
//         project.tags.includes("MongoDB") ||
//         project.tags.includes("PostgreSQL")
//       );
//     }
//     return project.tags.includes(filter);
//   });

//   return (
//     <section id="projects" className="py-20 relative">
//       {/* Background */}
//       <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black bg-gradient-to-b from-white via-gray-50 to-white" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">
//             Featured Projects
//           </h2>
//           <div className="w-20 h-1 bg-green-500 mx-auto mb-8" />
//           <p className="max-w-3xl mx-auto text-lg dark:text-gray-300 text-gray-600">
//             A showcase of my recent work and personal projects
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {filterOptions.map((option) => (
//             <button
//               key={option}
//               onClick={() => setFilter(option)}
//               className={`px-6 py-2 rounded-full font-medium transition-transform duration-300 hover:scale-105 ${
//                 filter === option
//                   ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
//                   : "dark:bg-gray-800 bg-gray-100 dark:text-gray-300 text-gray-600 hover:bg-green-500 hover:text-white"
//               }`}
//             >
//               {option}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={index}
//               className="group dark:bg-gray-900/50 bg-white rounded-xl overflow-hidden border dark:border-gray-800 border-gray-200 
//                          hover:border-green-500 transition-transform duration-300 
//                          hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 h-fit"
//             >
//               {/* Image + Overlay */}
//               <div className="relative overflow-hidden h-40">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   loading="lazy"
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
//                   >
//                     <Github size={16} className="text-gray-900" />
//                   </a>
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
//                   >
//                     <ExternalLink size={16} className="text-gray-900" />
//                   </a>
//                 </div>
//               </div>

//               {/* Project Info */}
//               <div className="p-4">
//                 <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3 group-hover:text-green-500 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="dark:text-gray-300 text-gray-600 mb-3 leading-relaxed text-sm">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="px-3 py-1 text-xs font-medium rounded-full dark:bg-gray-800 bg-gray-100 dark:text-gray-300 text-gray-600 
//                                  group-hover:bg-green-500 group-hover:text-white transition-colors duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Projects Button */}
//         <div className="text-center mt-12">
//           <a
//             href="https://github.com/parthazad0812"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center space-x-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
//           >
//             <Github size={20} />
//             <span>View All Projects</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;








import React, { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const Projects: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 400;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  const projects = [
    {
      title: "CareerPilot",
      description:
        "AI-powered career guidance platform helping users discover career paths, get personalized recommendations, and track their professional growth.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      tags: ["React", "Node.js", "AI/ML", "Vercel"],
      github: "#",
      live: "https://careerpilot-ashy.vercel.app/",
    },
    {
      title: "WheelORent",
      description:
        "Modern car rental platform with seamless booking experience, vehicle browsing, and rental management features.",
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      tags: ["React", "TypeScript", "Tailwind", "Vercel"],
      github: "#",
      live: "https://wheel-o-rent.vercel.app/",
    },
    {
      title: "Resume Insight",
      description:
        "Smart resume analysis tool that provides insights, suggestions, and improvements for better job applications.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      tags: ["Python", "NLP", "Flask", "Machine Learning"],
      github: "#",
      live: "https://resume-insight.onrender.com/",
    },
    {
      title: "SuperStore Sales Analysis & 15-Day Forecast",
      description:
        "Comprehensive Power BI dashboard analyzing superstore sales data with interactive visualizations and 15-day sales forecasting.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      tags: ["Power BI", "Data Analysis", "Forecasting", "DAX"],
      github: "https://github.com/parthazad0812/Super_Store_Sales_Analysis_PowerBI",
      live: "#",
    },
  ];

  const filteredProjects = projects;

  return (
    <section id="projects" className="py-20 relative overflow-hidden dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 light:bg-gradient-to-b light:from-gray-100 light:via-gray-50 light:to-gray-100">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="dark:absolute light:hidden -top-40 right-0 w-96 h-96 dark:bg-green-500/3 rounded-full blur-3xl"></div>
        <div className="dark:absolute light:hidden -bottom-40 left-1/4 w-96 h-96 dark:bg-green-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-6 dark:glow-text">
            {'<Featured Projects />'}
          </h2>
          <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-transparent dark:via-green-500 dark:to-transparent light:bg-gradient-to-r light:from-transparent light:via-green-500 light:to-transparent mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-sm dark:text-gray-300 light:text-gray-600 font-mono">
            {'// Showcase of innovative solutions and real-world implementations'}
          </p>
        </div>

        {/* Horizontal Scroll Container with External Navigation */}
        <div className="relative group px-4">
          {/* Left Arrow - Outside */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center ${
              canScrollLeft
                ? 'dark:bg-gradient-to-r dark:from-green-500 dark:to-green-600 dark:hover:from-green-400 dark:hover:to-green-500 dark:text-white dark:shadow-green-500/50 light:bg-green-500 light:hover:bg-green-600 light:text-white light:shadow-green-500/40 cursor-pointer'
                : 'dark:bg-gray-600/50 dark:text-gray-400 light:bg-gray-300/50 light:text-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow - Outside */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center ${
              canScrollRight
                ? 'dark:bg-gradient-to-r dark:from-green-500 dark:to-green-600 dark:hover:from-green-400 dark:hover:to-green-500 dark:text-white dark:shadow-green-500/50 light:bg-green-500 light:hover:bg-green-600 light:text-white light:shadow-green-500/40 cursor-pointer'
                : 'dark:bg-gray-600/50 dark:text-gray-400 light:bg-gray-300/50 light:text-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Projects Container */}
          <div
            ref={scrollContainer}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              contain: 'layout style paint',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-full sm:w-96 dark:bg-slate-800/40 light:bg-white/80 dark:border dark:border-green-500/20 light:border light:border-green-300/30 hover:dark:border-green-500/60 hover:light:border-green-400/60 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg dark:hover:shadow-green-500/20 light:hover:shadow-green-400/20 dark:hover:bg-slate-800/60 light:hover:bg-white/90 backdrop-blur-sm snap-start will-change-transform"
              >
                {/* Image + Overlay */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold dark:text-white light:text-gray-900 mb-2 group-hover:dark:text-green-400 group-hover:light:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="dark:text-gray-300 light:text-gray-700 mb-4 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="tech-badge text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Links at bottom right */}
                  <div className="flex justify-end space-x-3 pt-3 border-t dark:border-green-500/10 light:border-green-300/20">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 dark:text-green-400 light:text-green-600 hover:dark:text-green-300 hover:light:text-green-700 transition-colors duration-200 text-xs"
                      >
                        <span>Repository</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 dark:text-green-400 light:text-green-600 hover:dark:text-green-300 hover:light:text-green-700 transition-colors duration-200 text-xs"
                      >
                        <span>View</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/parthazad0812"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-green-500/20 border border-green-500/50 hover:bg-green-500/40 hover:border-green-500/80 text-green-400 hover:text-green-300 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
