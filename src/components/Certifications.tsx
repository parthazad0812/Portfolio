import React, { useEffect, useState, useRef } from 'react';
import { Award, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false, false]);
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
          }
        });
      },
      { threshold: 0.15, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.cert-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'IBM Data Science Professional Certificate',
      issuer: 'IBM',
      date: '2024',
      description: 'Comprehensive professional certification covering the full data science methodology including data analysis, visualization, machine learning, and hands-on projects with Python.',
      credentialId: '005XTGMSE3SQ',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/005XTGMSE3SQ',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      skills: ['Data Science', 'Python', 'Machine Learning', 'Data Analysis']
    },
    {
      title: 'Algorithmic Toolbox',
      issuer: 'Coursera',
      date: '2024',
      description: 'In-depth course covering fundamental algorithmic techniques and ideas for computational problems, focusing on algorithm design, complexity analysis, and problem-solving strategies.',
      credentialId: '8ASHWNKZGLU5',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/8ASHWNKZGLU5',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      skills: ['Algorithms', 'Data Structures', 'Problem Solving', 'Complexity Analysis']
    },
    {
      title: 'Databases and SQL for Data Science with Python',
      issuer: 'IBM',
      date: '2024',
      description: 'Certification covering SQL fundamentals, database management, and how to use Python for data science applications involving relational databases.',
      credentialId: 'URUHW3KC4JU6',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/URUHW3KC4JU6',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      skills: ['SQL', 'Python', 'Databases', 'Data Science']
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'IBM',
      date: '2024',
      description: 'Foundation course in machine learning concepts, supervised and unsupervised learning, model evaluation, and practical ML implementation using Python.',
      credentialId: 'M53KCYCHE3LD',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/M53KCYCHE3LD',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      skills: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Analysis']
    }
  ];

  return (
    <section 
      id="certifications" 
      className="py-20 relative overflow-hidden dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 light:bg-gradient-to-b light:from-gray-100 light:via-gray-50 light:to-gray-100"
    >
      {/* Optimized background - removed heavy animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="dark:absolute light:hidden -top-40 left-1/4 w-80 h-80 dark:bg-green-500/2 rounded-full blur-2xl"></div>
        <div className="dark:absolute light:hidden -bottom-40 right-1/4 w-80 h-80 dark:bg-green-500/2 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-6 dark:glow-text">
            {'<Certifications />'}
          </h2>
          <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-transparent dark:via-green-500 dark:to-transparent light:bg-gradient-to-r light:from-transparent light:via-green-500 light:to-transparent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-sm dark:text-gray-300 light:text-gray-600 font-mono">
            {'// Professional credentials validating expertise'}
          </p>
        </div>

        {/* Horizontal Scroll Container with External Navigation */}
        <div className="relative group">
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

          {/* Scrollable Certifications Container */}
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
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-index={index}
              className="cert-item flex-shrink-0 w-full sm:w-96 snap-start will-change-transform"
            >
              <div className="group dark:bg-slate-800/40 light:bg-white/80 dark:border dark:border-green-500/20 light:border light:border-green-300/30 hover:dark:border-green-500/60 hover:light:border-green-400/60 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg dark:hover:shadow-green-500/20 light:hover:shadow-green-400/20 dark:hover:bg-slate-800/60 light:hover:bg-white/90 backdrop-blur-sm h-full flex flex-col">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-slate-950/90 dark:via-slate-950/40 light:bg-gradient-to-t light:from-white/80 light:via-white/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="p-2 dark:bg-green-500/20 light:bg-green-400/20 dark:border dark:border-green-500/50 light:border light:border-green-400/50 rounded-lg">
                      <Award className="w-5 h-5 dark:text-green-400 light:text-green-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 dark:text-green-300 light:text-green-700 text-xs font-mono">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="mb-4 flex-grow">
                    <h3 className="text-lg font-bold dark:text-white light:text-gray-900 mb-1 group-hover:dark:text-green-400 group-hover:light:text-green-600 transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <p className="dark:text-green-400 light:text-green-600 font-semibold text-sm font-mono">{'{ '}{cert.issuer}{' }'}</p>
                  </div>

                  <p className="dark:text-gray-300 light:text-gray-700 mb-3 leading-relaxed text-sm line-clamp-2">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="tech-badge text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 dark:border-t dark:border-green-500/10 light:border-t light:border-green-300/20">
                    <span className="text-xs dark:text-gray-400 light:text-gray-600 font-mono truncate">
                      [{cert.credentialId}]
                    </span>
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 dark:text-green-400 light:text-green-600 hover:dark:text-green-300 hover:light:text-green-700 transition-colors duration-200 text-xs"
                    >
                      <span>View</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-lg hover:border-green-500/80 hover:bg-green-500/30 transition-all">
            <Award className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium font-mono text-sm">
              {`${certifications.length}++ certifications | expertise++`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;