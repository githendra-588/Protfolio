import React from 'react';
import { 
  FileDown, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Award,
  Download
} from 'lucide-react';
import Modal from './common/Modal';
import Button from './common/Button';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { personal, skills, experiences, projects, education, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Githendra_Nath_Reddy_Mule_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Curriculum Vitae / Resume"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6 text-slate-800 dark:text-slate-200">
        
        {/* Action Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              icon={Printer}
              onClick={handlePrint}
            >
              Print
            </Button>
            <Button
              variant="cyan"
              size="sm"
              icon={FileDown}
              onClick={handleDownload}
            >
              Download PDF
            </Button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-8 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {personal.name}
            </h2>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
              Full-Stack Java Developer &amp; Technical Trainer
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                {personal.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-500" />
                {personal.phoneFormatted}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-500" />
                {personal.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {personal.fullBio}
            </p>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-2">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skills.map((cat, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">{cat.category}:</span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {cat.items.map(item => item.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-3">
              Professional Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.role} — <span className="text-indigo-600 dark:text-indigo-400">{exp.organization}</span>
                    </h4>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-indigo-500">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-3">
              Selected Technical Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white mb-1">
                    <span>{proj.title}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                    {proj.description}
                  </p>
                  <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-300">
                    {proj.tech.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                Education
              </h3>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">{education.degree}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{education.institution} ({education.period})</p>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono mt-0.5">Computer Science &amp; Engineering</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                Certifications
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                {certifications.map((c, idx) => (
                  <li key={idx}>• {c.title} — <span className="text-indigo-600 dark:text-indigo-400">{c.issuer}</span></li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </Modal>
  );
};

export default ResumeModal;
