
import React from 'react';
import { HIGHLIGHTS } from '../constants';

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 serif">Professional Highlights</h2>
          <div className="h-1.5 w-20 bg-amber-800 dark:bg-amber-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HIGHLIGHTS.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 select-none">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 serif">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
