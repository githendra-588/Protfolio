import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Code2, 
  Database, 
  Wrench, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';

export const Services = () => {
  const { services, institutions } = portfolioData;

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Code2': return Code2;
      case 'Database': return Database;
      case 'Wrench': return Wrench;
      case 'GraduationCap': return GraduationCap;
      default: return Code2;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Freelance &amp; Consulting"
          title="Services for Clients &amp;"
          highlight="Institutions"
          subtitle="Concrete, production-tested software engineering solutions and university-grade developer training programs."
        />

        {/* Institutional Trust Strip ("Clients / Universities Worked With") */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/30 via-slate-900/60 to-cyan-950/30 border border-slate-800 backdrop-blur-md"
        >
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cyan-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Trusted Training &amp; Mentorship Track Record
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              Trained 500+ Engineers Across 6+ Premier Universities
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl mx-auto">
              Delivered enterprise Java, Spring Boot, React, and 150+ technical mock interview sessions across both independent and corporate programs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {institutions.map((inst, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center hover:border-cyan-500/40 transition-colors group"
              >
                <Building2 className="w-5 h-5 text-indigo-400 group-hover:text-cyan-400 mb-1.5 transition-colors" />
                <span className="text-xs font-bold text-white leading-tight">
                  {inst.short}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {inst.name}
                </span>
                <span className="text-[10px] text-cyan-400 font-mono mt-1 font-semibold">
                  {inst.students}
                </span>
                <span className="text-[9px] text-slate-500 font-mono mt-0.5">
                  {inst.trainedVia}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            const isTraining = service.id === 5;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 border backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1 ${
                  isTraining
                    ? 'bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-slate-900/50 border-cyan-500/40 hover:border-cyan-400 shadow-xl shadow-cyan-500/10 md:col-span-2 lg:col-span-1'
                    : 'bg-slate-900/40 dark:bg-slate-900/60 border-slate-200/60 dark:border-slate-800 hover:border-indigo-500/40 hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Service Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                    isTraining
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                      : 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                            isTraining ? 'text-cyan-400' : 'text-indigo-400'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Action Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-900/40 via-indigo-950/60 to-cyan-900/40 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Have a web project or training requirement in mind?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Whether you need a custom full-stack application built from scratch or high-impact technical bootcamps with mock interviews for your team, I'm ready to collaborate.
            </p>
          </div>
          <Button
            variant="cyan"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            onClick={scrollToContact}
            className="shrink-0"
          >
            Start a Conversation
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Services;
