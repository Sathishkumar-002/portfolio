import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowUp, Terminal, 
  Mail, Phone 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'AWS Services', href: '#aws' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070B14] border-t border-slate-800/80 text-slate-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Role */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0B1120] rounded-[6px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-white text-base">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              Cloud & DevOps Engineer passionate about Infrastructure as Code, resilient AWS architectures, and automated CI/CD pipelines.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Full-time Roles & Relocation</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Fast Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="hover:text-cyan-400 transition-colors py-0.5"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Connect Directly
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              Chennai, Tamil Nadu, India
            </p>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© 2026 {PERSONAL_INFO.name}. AWS Certified Cloud Practitioner.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
