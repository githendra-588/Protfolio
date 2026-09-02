import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';

export const Testimonials = () => {
  const { testimonials } = portfolioData;

  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-slate-950/20 dark:bg-slate-950/40 border-t border-slate-200/40 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Endorsements"
          title="What Collaborators &amp;"
          highlight="Students Say"
          subtitle="Feedback from university technical training programs, hands-on developer workshops, and client project stakeholders."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex flex-col justify-between rounded-2xl p-6 bg-slate-900/40 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 hover:border-indigo-500/40 transition-all backdrop-blur-sm group"
            >
              {/* Quote Icon */}
              <div className="mb-4 flex items-center justify-between">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Quote className="w-5 h-5" />
                </div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote Body */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
                "{item.content}"
              </p>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-xs font-mono">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default Testimonials;

