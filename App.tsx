
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import LibraryServiceSkills from './components/LibraryServiceSkills';
import ApplicationReason from './components/ApplicationReason';
import WorkExperience from './components/WorkExperience';
import TechnicalSkills from './components/TechnicalSkills';
import SoftSkills from './components/SoftSkills';
import LanguageSkills from './components/LanguageSkills';
import FutureVision from './components/FutureVision';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main className="space-y-12 md:space-y-20 pb-20">
        <Hero />
        
        <Highlights />

        <div className="max-w-5xl mx-auto px-6 space-y-12 md:space-y-20">
          <LibraryServiceSkills />
          <WorkExperience />
          <TechnicalSkills />
          <SoftSkills />
          <ApplicationReason />
          <LanguageSkills />
          <FutureVision />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
