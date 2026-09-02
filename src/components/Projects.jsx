import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Code, 
  Building, 
  Landmark, 
  Hotel, 
  BookOpen 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';

export const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const filterOptions = [
    { label: 'All Projects', value: 'All' },
    { label: 'Client Deliverables (Freelance)', value: 'Freelance Deliverable' },
    { label: 'Full-Stack Java Enterprise', value: 'Full-Stack Java' },
    { label: 'React Web Apps', value: 'React' }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => {
        if (filter === 'Freelance Deliverable') return p.category.includes('Freelance');
        if (filter === 'Full-Stack Java') return p.category.includes('Java');
        if (filter === 'React') return p.category.includes('React') || p.category.includes('Frontend');
        return true;
      });

  const getProjectIcon = (id) => {
    switch(id) {
      case 'candeur-crescent': return Building;
      case 'banking-system': return Landmark;
      case 'hostel-hub': return Hotel;
      case 'bibliostack': return BookOpen;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-950/20 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Portfolio"
          title="Engineered Solutions &"
          highlight="Client Deliverables"
          subtitle="Real-world software built to demonstrate robust backend Java architecture alongside conversion-driven client frontends."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => {
            const isActive = filter === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400/50'
                    : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project.id);
              const isFreelanceLead = project.id === 'candeur-crescent';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`flex flex-col justify-between rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-300 group ${
                    isFreelanceLead
                      ? 'bg-slate-900/70 border-cyan-500/40 hover:border-cyan-400 shadow-xl shadow-cyan-500/5 ring-1 ring-cyan-500/20'
                      : 'bg-slate-900/50 border-slate-200/60 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10'
                  }`}
                >
                  {/* Top Screenshot / Graphic Visual (16:9 Aspect Ratio) */}
                  <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-800/80 flex items-center justify-center group-hover:brightness-105 transition-all">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/50 flex flex-col items-center justify-center p-6 text-center">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
                      
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                        isFreelanceLead
                          ? 'bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 shadow-cyan-500/20'
                          : 'bg-indigo-500/15 border border-indigo-400/30 text-indigo-400 shadow-indigo-500/20'
                      }`}>
                        <ProjectIcon className="w-7 h-7" />
                      </div>

                      <span className="text-base font-bold text-white tracking-wide">
                        {project.title}
                      </span>
                      <span className="text-xs text-slate-400 font-mono mt-1">
                        {project.tech.slice(0, 3).join(' • ')}
                      </span>
                    </div>

                    {/* Top Right Category Pill */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-md ${
                        isFreelanceLead
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                          : 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30'
                      }`}>
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content (Clean layout without footer button clutter) */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* "What Problem This Solved" Block */}
                      <div className="mt-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs leading-relaxed">
                        <div className="flex items-center gap-1.5 font-semibold text-amber-400 dark:text-amber-300 mb-1">
                          <Lightbulb className="w-4 h-4 text-amber-400" />
                          <span>Key Problem Solved &amp; Architecture:</span>
                        </div>
                        <p className="text-slate-300">
                          {project.problemSolved}
                        </p>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
