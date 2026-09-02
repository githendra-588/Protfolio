import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Building2, 
  Award,
  Users2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';

export const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Career Journey"
          title="Work Experience &"
          highlight="Training Milestones"
          subtitle="Proven track record in university developer bootcamps, technical mock interviews, and full-stack engineering."
        />

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical central/left line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800" />

          {/* Timeline Items */}
          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => {
              const isFreelance = exp.isFreelance;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-20 group"
                >
                  {/* Timeline Dot / Icon */}
                  <div 
                    className={`absolute left-0 sm:left-4 top-1 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isFreelance
                        ? 'bg-slate-950 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:scale-110'
                        : 'bg-slate-950 border-indigo-500 text-indigo-400 shadow-md shadow-indigo-500/20 group-hover:scale-110'
                    }`}
                  >
                    {isFreelance ? (
                      <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    ) : (
                      <Briefcase className="w-4 h-4" />
                    )}
                  </div>

                  {/* Card Body */}
                  <div 
                    className={`rounded-2xl p-6 sm:p-7 border backdrop-blur-sm transition-all duration-300 shadow-sm ${
                      isFreelance
                        ? 'bg-gradient-to-br from-cyan-950/20 via-slate-900/60 to-slate-900/40 border-cyan-500/40 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 ring-1 ring-cyan-500/20'
                        : 'bg-slate-900/40 dark:bg-slate-900/60 border-slate-200/60 dark:border-slate-800 hover:border-indigo-500/40 hover:shadow-lg'
                    }`}
                  >
                    {/* Header Row: Role, Badge, Period */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            {exp.role}
                          </h3>
                          {/* Distinction Pill */}
                          <span 
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                              isFreelance
                                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-400/40 font-mono shadow-sm shadow-cyan-500/20'
                                : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                            }`}
                          >
                            {exp.badge}
                          </span>
                        </div>

                        {/* Organization and Location */}
                        <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-indigo-400" />
                            {exp.organization}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Period Pill */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-xs font-mono">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-4">
                      {exp.summary}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {exp.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              isFreelance ? 'text-cyan-400' : 'text-indigo-400'
                            }`} 
                          />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Institutions Strip */}
                    {exp.institutionsCovered && (
                      <div className={`mt-5 pt-4 border-t flex flex-wrap items-center justify-between gap-2 text-xs ${
                        isFreelance ? 'border-cyan-500/20' : 'border-slate-800'
                      }`}>
                        <span className={`font-semibold flex items-center gap-1.5 ${
                          isFreelance ? 'text-cyan-300' : 'text-indigo-400'
                        }`}>
                          <Users2 className="w-4 h-4" />
                          <span>Key Institutions: {exp.institutionsCovered}</span>
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {isFreelance ? 'Independent Training & Placement Mentorship' : 'Corporate University Training'}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
