import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { AwsServices } from './components/AwsServices';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FileText } from 'lucide-react';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F9FAFB] relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Fixed Sticky Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <AwsServices />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Sticky Quick Resume Pill on Desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsResumeOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 shadow-2xl shadow-cyan-950/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95 text-xs font-semibold group"
        >
          <FileText className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
          <span>Quick Resume</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
        </button>
      </div>
    </div>
  );
}

export default App;
