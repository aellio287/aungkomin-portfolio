
import React from 'react';
import { Send } from 'lucide-react';

const ApplicationReason: React.FC = () => {
  return (
    <section id="why" className="scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
          <Send className="w-64 h-64 -rotate-12 translate-x-12 -translate-y-12 text-slate-900 dark:text-amber-500" />
        </div>
        
        <div className="relative z-10">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 serif leading-tight">
              Why I Am Applying for British Council Myanmar Librarian Position
            </h2>
            <div className="h-1.5 w-20 bg-amber-800 dark:bg-amber-600 mt-4 rounded-full"></div>
          </div>
          
          <div className="grid gap-6 text-slate-700 dark:text-slate-300 leading-relaxed text-lg max-w-3xl">
            <p>
              I am applying for the Librarian position at the British Council Myanmar because I truly believe in the power of books, learning, and access to information. Reading has always been an important part of my life, and I want to work in an environment where I can help others discover knowledge.
            </p>
            
            <p>
              The British Council is well known for supporting education and cultural exchange. I would be proud to contribute to a place that helps students and the community access reliable resources and develop their learning skills.
            </p>
            
            <p>
              I am especially interested in working in a library because it combines my love for books with my desire to help people. I want to support visitors in finding the right materials, maintain an organized space, and learn professional library systems.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 text-amber-900 dark:text-amber-500 font-bold">
            <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center border border-amber-100 dark:border-amber-900/40">
              <Send className="w-5 h-5" />
            </div>
            <span className="text-sm uppercase tracking-widest">Application Statement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationReason;
