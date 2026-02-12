
import React from 'react';
import { Terminal } from 'lucide-react';

const technicalSkills = [
  {
    name: "Microsoft Word",
    description: "Creating and formatting documents professionally.",
    emoji: "📄"
  },
  {
    name: "Microsoft Excel / Google Sheets",
    description: "Basic data entry, organization, and record keeping.",
    emoji: "📊"
  },
  {
    name: "Google Workspace",
    description: "Using Docs, Drive, and Gmail for daily work and collaboration.",
    emoji: "🌐"
  },
  {
    name: "Email & Internet Research",
    description: "Professional email communication and online information searching.",
    emoji: "✉"
  },
  {
    name: "Basic Computer Skills",
    description: "Confident use of Windows, file management, and office tools.",
    emoji: "💻"
  },
  {
    name: "AI Tools",
    description: "Using AI tools such as ChatGPT and Google AI Studio to assist with writing, research, and productivity.",
    emoji: "🤖"
  }
];

const TechnicalSkills: React.FC = () => {
  return (
    <section id="tech-skills" className="scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm rounded-3xl p-8 md:p-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold mb-4">
            <Terminal className="w-4 h-4" />
            <span>TOOLS & TECH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2 serif">Technical Skills</h2>
          <p className="text-slate-500 dark:text-slate-400">My proficiency with modern digital office tools and technology.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-[#FDFCF8]/30 dark:bg-slate-800/20 hover:shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group"
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform inline-block select-none">
                {skill.emoji}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 serif">{skill.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
