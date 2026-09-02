import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Terminal, 
  Flame, 
  CheckCircle,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';

export const Skills = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    'Frontend': Code2,
    'Backend': Server,
    'Databases': Database,
    'Tools & DevOps': Terminal,
    'Core Computer Science': Cpu,
  };

  const categories = ['All', ...skills.map(s => s.category)];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/30 dark:bg-slate-950/50 border-y border-slate-200/40 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Skills"
          title="Proficiencies &"
          highlight="Tech Stack"
          subtitle="Engineered with core enterprise Java practices, Spring Boot ecosystem, and modern frontend agility."
        />

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400/50'
                    : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((categoryGroup, index) => {
              const IconComponent = categoryIcons[categoryGroup.category] || Layers;

              return (
                <motion.div
                  key={categoryGroup.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-slate-900/40 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group backdrop-blur-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {categoryGroup.category}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {categoryGroup.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Badges (Clean skills without level labels) */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {categoryGroup.items.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            skill.hot
                              ? 'bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 font-semibold shadow-sm'
                              : 'bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                          }`}
                        >
                          {skill.hot && <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Footer Indicator */}
                  <div className="mt-5 pt-3 border-t border-slate-200/50 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      Hands-on &amp; Teaching Verified
                    </span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                      {categoryGroup.items.length} skills
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
