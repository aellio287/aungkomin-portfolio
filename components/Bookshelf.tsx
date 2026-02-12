
import React from 'react';
import { FEATURED_BOOKS } from '../constants';

const Bookshelf: React.FC = () => {
  return (
    <section id="bookshelf" className="py-24 bg-[#FDFCF8] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 serif">My Virtual Bookshelf</h2>
            <p className="text-slate-600 dark:text-slate-400">
              A curated selection of books that have influenced my thinking and fueled my passion for library sciences and storytelling.
            </p>
          </div>
          <button className="text-amber-800 dark:text-amber-500 font-semibold hover:underline">View All Collections →</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {FEATURED_BOOKS.map((book, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[2/3] overflow-hidden rounded-lg shadow-md group-hover:shadow-2xl dark:group-hover:shadow-amber-900/20 transition-all duration-500 mb-6">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 dark:opacity-90 dark:group-hover:opacity-100"
                />
              </div>
              <span className="text-xs font-bold text-amber-700 dark:text-amber-500 uppercase tracking-widest block mb-2">{book.category}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 serif">{book.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookshelf;
