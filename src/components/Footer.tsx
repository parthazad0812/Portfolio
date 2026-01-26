import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart, FileText, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/parthazad0812',
      label: 'GitHub',
      title: 'GitHub'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      href: 'https://docs.google.com/document/d/19XYpFwXHXgp3phHd7NW2ynqNSxY09Kcl/edit?usp=sharing&ouid=104669824031844113651&rtpof=true&sd=true',
      label: 'Resume',
      title: 'Resume'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/parth-azad-7b749a281/',
      label: 'LinkedIn',
      title: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:parthazad08@gmail.com',
      label: 'Email',
      title: 'Email'
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      href: 'https://codolio.com/profile/usnFDuX3',
      label: 'Codolio',
      title: 'Codolio'
    }
  ];

  const technologies = [
    'React',
    'TypeScript', 
    'Tailwind CSS',
    'Vite'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden dark:bg-slate-950 light:bg-gray-100 dark:border-t dark:border-green-500/20 light:border-t light:border-green-300/30">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-green-500/4 light:bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 dark:bg-green-500/3 light:bg-green-500/4 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold dark:text-green-400 light:text-green-600 dark:glow-text">
              &lt;/&gt;
            </h3>
            <p className="dark:text-gray-300 light:text-gray-700 leading-relaxed font-mono text-sm">
              Full Stack Developer, Data Analyst & Backend Developer crafting<br/>
              elegant solutions through code & insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-3 rounded-lg dark:bg-slate-800/40 light:bg-white/60 dark:border dark:border-green-500/20 light:border light:border-green-300/30 dark:text-gray-400 light:text-gray-600 dark:hover:text-green-400 light:hover:text-green-600 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:hover:shadow-green-500/30 light:hover:shadow-green-400/20 dark:hover:bg-slate-800 light:hover:bg-white/80"
                  aria-label={link.label}
                  title={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold dark:text-white light:text-gray-900 font-mono">
              {'{ navigation }'}
            </h4>
            <nav className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Experience', id: 'experience' },
                { name: 'Certifications', id: 'certifications' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block dark:text-gray-400 light:text-gray-700 dark:hover:text-green-400 light:hover:text-green-600 transition-colors duration-300 text-sm"
                >
                  {'→ '}{item.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold dark:text-white light:text-gray-900 font-mono">
              {'[ stack ]'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="tech-badge"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed font-mono">
              {'// Built with modern tech'}<br/>
              {'// Performance first approach'}
            </p>
          </div>
        </div>

        <div className="dark:border-t dark:border-green-500/10 light:border-t light:border-green-300/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 dark:text-gray-400 light:text-gray-600 text-sm font-mono">
              <span>&lt; © {currentYear} Parth Azad <span className="dark:text-green-400 light:text-green-600">/</span> &gt;</span>
            </div>
            <div className="flex items-center space-x-2 dark:text-gray-400 light:text-gray-600 text-sm font-mono">
              <span>Made with</span>
              <Heart className="w-4 h-4 dark:text-green-400 light:text-green-600" />
              <span>and {'<code/>'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;