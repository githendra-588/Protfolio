import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Briefcase, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  GraduationCap, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Button from './common/Button';

export const Hero = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle Background Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/15 dark:bg-indigo-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-cyan-500/15 dark:bg-cyan-500/15 rounded-full blur-[110px]"
        />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[90px]" />
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] dark:opacity-[0.07]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Dual-Audience Value Prop */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Full-Time Roles &amp; Freelance Projects</span>
            </motion.div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Githendra Mule
              </span>
            </h1>

            {/* Tagline for Recruiters & Clients */}
            <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
              Full-Stack Java Developer <span className="text-indigo-500 dark:text-indigo-400">&amp;</span> Technical Trainer
            </h2>

            {/* 1-Line Value Proposition */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Crafting clean, scalable web applications with <span className="text-slate-900 dark:text-slate-100 font-medium">Java, Spring Boot &amp; React</span> — turning client ideas into production-ready software, and mentoring <span className="text-indigo-600 dark:text-indigo-400 font-semibold">500+ students</span> across 6+ universities with 150+ mock interview sessions.
            </p>

            {/* Location & Quick Meta (B.Tech percentage removed per request) */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500" />
                Bengaluru, Karnataka, India
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-500" />
                500+ Students Mentored
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                6+ Universities (MBU, SVCE, MITS, MSR, LPU, Saveetha)
              </span>
            </div>

            {/* Dual CTAs (Freelance & Job Recruiter) */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              {/* Freelance CTA */}
              <Button
                variant="cyan"
                size="lg"
                icon={Briefcase}
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto"
              >
                Hire Me (Freelance)
              </Button>

              {/* Recruiter / Resume CTA */}
              <Button
                variant="secondary"
                size="lg"
                icon={FileDown}
                onClick={onOpenResume}
                className="w-full sm:w-auto"
              >
                View Resume
              </Button>

              {/* Secondary Navigation */}
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors py-2 px-3"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links Strip */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold">Connect:</span>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personal.socialLinks.email}
                className="p-2 rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Photo / Headshot Frame with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Outer Glow Ring */}
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square sm:aspect-[4/5] max-h-[460px]">
              {/* Gradient border wrapper */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-teal-400 p-1 shadow-2xl shadow-indigo-500/25">
                <div className="w-full h-full bg-slate-950 rounded-[22px] overflow-hidden relative group">
                  
                  {/* Real Profile Image with Professional Styling */}
                  <img 
                    src="/Profile.jpeg" 
                    alt="Githendra Nath Reddy Mule" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.03]"
                    onError={(e) => {
                      // Fallback if file path issues occur
                      e.target.onerror = null;
                      e.target.src = "Profile.jpeg";
                    }}
                  />

                  {/* Gradient bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Name & Role Tag Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 shadow-lg">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                      Githendra Nath Reddy
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">
                      Full-Stack Java &amp; React Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1 (Mentorship / Training) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900/90 dark:bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Students Mentored</div>
                  <div className="text-sm sm:text-base font-bold text-white">500+ Engineers</div>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2 (Mock Interviews) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-slate-900/90 dark:bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Mock Interviews Done</div>
                  <div className="text-sm sm:text-base font-bold text-white">150+ Sessions</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
