
import React from 'react';
import { MapPin, Library, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 md:pt-28 pb-16 overflow-hidden bg-[#FDFCF8] dark:bg-slate-950 scroll-mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full max-w-4xl aspect-square bg-amber-50/50 dark:bg-amber-900/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-[120px] pointer-events-none no-print"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/40 dark:bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none no-print"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:justify-between gap-16 lg:gap-24">
        
        {/* Content Section */}
        <div className="relative z-10 w-full text-center lg:text-left order-2 lg:order-1 flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 dark:bg-amber-900/30 text-amber-900 dark:text-amber-400 text-[0.7rem] font-black uppercase tracking-widest mb-8 no-print border border-amber-200/50 dark:border-amber-800/30 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Future Librarian</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-[1.1] serif tracking-tight">
            Aung Ko Min
          </h1>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10" aria-label="Professional Quick Facts">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-bold shadow-sm transition-all hover:border-amber-300 dark:hover:border-amber-700">
              <MapPin className="w-4 h-4 text-amber-600" />
              Mandalay, Myanmar
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-bold shadow-sm transition-all hover:border-indigo-300 dark:hover:border-indigo-700">
              <Library className="w-4 h-4 text-indigo-600" />
              Preschool Music Teacher
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-amber-800 dark:text-amber-500 mb-8 font-sans tracking-tight opacity-95">
            Aspiring Librarian
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0 font-light">
            I am a passionate reader from Mandalay with a heart for service. With a background in preschool education and customer service, I am now dedicated to building a career in professional librarianship.
          </p>
        </div>

        {/* Professional Portrait - Fixed Static Image */}
        <div className="relative shrink-0 order-1 lg:order-2 flex flex-col items-center">
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px] aspect-square">
            {/* Outer shadow glow */}
            <div className="absolute inset-0 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-2xl no-print"></div>
            
            {/* The Outer Ring Wrapper */}
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-amber-100 via-white to-indigo-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 shadow-2xl flex items-center justify-center">
              
              {/* Inner Circle Container - Guaranteed circular shape */}
              <div className="w-full h-full rounded-full border-[8px] border-white dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-900 relative z-10 flex items-center justify-center">
                <img 
                  src="/profile.png" 
                  alt="Matty profile photo" 
                  className="w-full h-full object-cover transition-transform duration-1000"
                />
                
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
