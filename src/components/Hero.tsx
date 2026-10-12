import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DevOpsTerminal } from './DevOpsTerminal';
import { 
  ShieldCheck, ArrowRight, 
  FileText, Send, MapPin, Mail, Sparkles 
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: FC<HeroProps> = ({ onOpenResume }) => {
  const roles = [
    "Cloud & DevOps Engineer",
    "AWS Certified Cloud Practitioner",
    "Infrastructure as Code Builder",
    "CI/CD & Container Specialist",
    "Linux Systems Administrator"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const floatingBadges = [
    { label: "AWS Cloud", color: "from-amber-500/20 to-orange-600/30", text: "text-amber-400", border: "border-amber-500/30", delay: "0s" },
    { label: "Docker", color: "from-blue-500/20 to-sky-600/30", text: "text-sky-400", border: "border-sky-500/30", delay: "1.2s" },
    { label: "Kubernetes", color: "from-indigo-500/20 to-blue-600/30", text: "text-indigo-400", border: "border-indigo-500/30", delay: "2.4s" },
    { label: "Terraform", color: "from-purple-500/20 to-violet-600/30", text: "text-purple-400", border: "border-purple-500/30", delay: "3.6s" },
    { label: "Linux", color: "from-emerald-500/20 to-teal-600/30", text: "text-emerald-400", border: "border-emerald-500/30", delay: "1.8s" },
    { label: "Jenkins CI/CD", color: "from-rose-500/20 to-red-600/30", text: "text-rose-400", border: "border-rose-500/30", delay: "0.8s" },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glows & Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                <span>Open to Work • Fresher Ready to Deploy</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-300 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>AWS Certified Cloud Practitioner</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">
                Hello World, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
                <span className="gradient-text">{PERSONAL_INFO.name}</span>
              </h1>
              
              {/* Dynamic Role Typing */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-mono text-xl sm:text-2xl text-slate-300 font-semibold flex items-center">
                  <span className="text-cyan-400 mr-2">&gt;</span>
                  <span className="text-white">{displayText}</span>
                  <span className="w-2.5 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
                </span>
              </div>
            </div>

            {/* Resume Summary / Bio */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Motivated fresher with hands-on exposure to AWS cloud platforms, containerization with <span className="text-sky-300 font-medium">Docker & Kubernetes</span>, CI/CD automation with <span className="text-cyan-300 font-medium">Jenkins</span>, and Infrastructure as Code using <span className="text-purple-300 font-medium">Terraform</span>. Strong Linux administration & networking foundation.
            </p>

            {/* Location & Quick Contact */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {PERSONAL_INFO.email}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>View / Download Resume</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Floating Tech Badges */}
            <div className="pt-3">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Core Toolchain & Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {floatingBadges.map((badge, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border bg-gradient-to-r ${badge.color} ${badge.border} ${badge.text} backdrop-blur-sm transition-all hover:scale-105 cursor-default`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive DevOps Terminal */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 rounded-3xl blur-lg opacity-30 animate-pulse-glow" />
              <DevOpsTerminal />
            </div>

            {/* Quick Helper Tip */}
            <div className="mt-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5 shadow-lg">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-200">Interactive Terminal:</strong> Click any preset command or type into the prompt to review simulated AWS infrastructure status, Docker containers, and K8s pods!
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
