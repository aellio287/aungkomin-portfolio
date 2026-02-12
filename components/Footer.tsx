import React from 'react';
import { BookText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-400 mb-2 serif tracking-tight">Contact</h2>
          <div className="h-1 w-12 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <BookText className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-bold serif">Address</span>
            </div>
            <p className="text-slate-400 font-medium italic">Mandalay, 46x111 St, Myanmar</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">Phone:</span>
              <a href="tel:09780952734" className="hover:text-amber-400 transition-colors">09780952734</a>
            </div>
            <span className="hidden md:block text-slate-700">•</span>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">Email:</span>
              <a href="mailto:aelliodreww@gmail.com" className="hover:text-amber-400 transition-colors">aelliodreww@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Aung Ko Min. Professional Portfolio for Library Science.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;