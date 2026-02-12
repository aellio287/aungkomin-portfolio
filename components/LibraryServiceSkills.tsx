
import React from 'react';
import { BookMarked, CheckCircle2 } from 'lucide-react';

const LibraryServiceSkills: React.FC = () => {
  const skills = [
    "Customer-focused library support",
    "Record keeping and organization",
    "Assisting users and answering enquiries",
    "Supporting events and activities",
    "Willing to learn Library Management Systems"
  ];

  return (
    <section id="library-skills" className="scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
          <BookMarked className="w-32 h-32" />
        </div>

        <div className="relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold mb-4">
              <BookMarked className="w-4 h-4" />
              <span>CORE COMPETENCIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 serif">Library Service Skills</h2>
          </div>

          <div className="bg-[#FDFCF8]/50 dark:bg-slate-800/40 border border-amber-50 dark:border-slate-800 rounded-2xl p-6 md:p-10 hover:shadow-inner transition-all">
            <ul className="grid md:grid-cols-2 gap-y-5 gap-x-12">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center group-hover:bg-amber-200 dark:group-hover:bg-amber-800/60 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  </div>
                  <span className="text-lg font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryServiceSkills;
