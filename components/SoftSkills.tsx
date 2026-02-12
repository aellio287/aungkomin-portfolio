
import React from 'react';
import { MessageSquare, HeartHandshake, ClipboardCheck, Users, Clock, Zap, Star } from 'lucide-react';

const skills = [
  {
    title: "Communication",
    description: "I communicate clearly and politely with students, customers, and team members.",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/40"
  },
  {
    title: "Customer Service",
    description: "Patient and friendly support learned through retail and teaching roles.",
    icon: <HeartHandshake className="w-5 h-5" />,
    color: "bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-900/40"
  },
  {
    title: "Organization",
    description: "Careful and methodical when handling inventory, records, and book arrangements.",
    icon: <ClipboardCheck className="w-5 h-5" />,
    color: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/40"
  },
  {
    title: "Teamwork",
    description: "I enjoy contributing to a positive and supportive collaborative team environment.",
    icon: <Users className="w-5 h-5" />,
    color: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-900/40"
  },
  {
    title: "Time Management",
    description: "Responsible for managing tasks and staying organized during busy hours.",
    icon: <Clock className="w-5 h-5" />,
    color: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-900/40"
  },
  {
    title: "Adaptability",
    description: "Eager to learn new systems and adapt quickly to library environments.",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-900/40"
  }
];

const SoftSkills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm rounded-3xl p-8 md:p-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold mb-4">
            <Star className="w-4 h-4" />
            <span>PERSONAL QUALITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2 serif">Soft Skills</h2>
          <p className="text-slate-500 dark:text-slate-400">The interpersonal strengths I bring to the library environment.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-[#FDFCF8]/30 dark:bg-slate-800/20 hover:shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${skill.color} border`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 serif">{skill.title}</h3>
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

export default SoftSkills;
