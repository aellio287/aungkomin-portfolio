
import React from 'react';
import { Languages } from 'lucide-react';

const LanguageSkills: React.FC = () => {
  const languages = [
    { name: 'Myanmar (Burmese)', level: 'Native Speaker' },
    { name: 'English', level: 'Intermediate' },
  ];

  return (
    <section id="languages" className="scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm rounded-3xl p-8 md:p-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold mb-4">
            <Languages className="w-4 h-4" />
            <span>LINGUISTIC ABILITY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2 serif">Language Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-[#FDFCF8]/30 dark:bg-slate-800/20 hover:shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 serif leading-none">{lang.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                Level: {lang.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSkills;
