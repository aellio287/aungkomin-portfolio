
import React from 'react';
import { Target } from 'lucide-react';

const FutureVision: React.FC = () => {
  return (
    <section id="vision" className="scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-50/30 dark:bg-amber-900/10 rounded-full blur-3xl -z-0"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold mb-6">
            <Target className="w-4 h-4" />
            <span>MY ASPIRATIONS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 serif">Future Vision</h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              In the future, I would like to build my career in a library and education environment where I can support learning and help people access knowledge. I am especially interested in working in a place that encourages reading, personal development, and community learning.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              I hope to gain professional experience in library services, learn new systems and skills, and grow into a reliable team member. My long-term goal is to become an experienced librarian who can contribute to a welcoming and organized learning space for students and the community.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-12 bg-amber-800 dark:bg-amber-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
