import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Menu, X, Terminal, FileText, Send, Sparkles 
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'aws', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'AWS Services', href: '#aws', id: 'aws' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Sathishkumar Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] font-mono text-cyan-400/90 tracking-wider">
                CLOUD / DEVOPS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              title="View Resume"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1120]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-xs font-medium ${
                  activeSection === link.id
                    ? 'bg-blue-600/30 text-cyan-300 border border-blue-500/40'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Full Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500"
            >
              <Send className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
