import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';

export const About = () => {
  const { personal, education, certifications } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="Bridging Robust Engineering &"
          highlight="Practical Mentorship"
          subtitle="Experienced in architecting end-to-end full stack web platforms and accelerating developer growth through hands-on technical training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-slate-900/40 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Who I Am
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                I am a <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Full-Stack Java Developer</strong> with hands-on experience designing and delivering production applications using <span className="font-medium text-slate-900 dark:text-slate-100">Java, Spring Boot, Hibernate, React.js, MySQL, and RESTful APIs</span>.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                My engineering approach is rooted in solid MVC architecture — engineering reliable CRUD operations, strict role-based authentication, database normalization, and snappy, mobile-first React user interfaces.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Alongside development, I have worked as a <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">Software Technical Trainer</strong>, mentoring over <span className="font-semibold text-slate-900 dark:text-slate-100">500+ aspiring software engineers</span> across 6+ institutions including <span className="font-medium text-slate-900 dark:text-slate-100">Mohan Babu University (MBU), SVCE, MITS, MS Ramaiah, Lovely Professional University (LPU), and Saveetha University</span> in real-time project development, live debugging, and conducting <span className="font-semibold text-cyan-500">150+ technical mock interviews</span>.
              </p>
            </div>

            {/* Dual-Audience Value Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* For Recruiters */}
              <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 dark:bg-indigo-950/20">
                <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>For Hiring Teams &amp; Recruiters</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ready to contribute from Day 1 in Full-Stack Java / React roles with strong OOPs, REST API design, database querying, and debugging intuition.
                </p>
              </div>

              {/* For Clients */}
              <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 dark:bg-cyan-950/20">
                <div className="flex items-center gap-2 mb-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>For Freelance Clients</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fast, reliable turnaround on custom web apps, responsive frontend conversions, bug fixes, or dedicated institutional corporate training.
                </p>
              </div>
            </div>

            {/* What I'm Looking For Highlight Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-transparent border border-indigo-500/30">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Current Availability &amp; Target Roles</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {personal.lookingFor}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Stats, Education & Certifications (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Impact Metric Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personal.stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900/40 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 rounded-xl p-4 text-center hover:border-indigo-500/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className="bg-slate-900/40 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Education
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{education.period}</span>
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {education.degree}
              </p>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">
                {education.institution}, {education.location}
              </p>
              <div className="mt-3 inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-semibold">
                Specialization: Computer Science &amp; Engineering
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-slate-900/40 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Certifications
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Industry Verified</span>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="border-l-2 border-indigo-500/50 pl-3 py-0.5">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {cert.title}
                    </p>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {cert.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
