import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { 
  GraduationCap, Target, Compass, 
  CheckCircle, Cpu, Cloud, Shield, Server, ArrowUpRight 
} from 'lucide-react';

export const About: React.FC = () => {
  const strengths = [
    {
      title: "AWS Cloud Infrastructure",
      desc: "Architecting resilient compute, object storage, and secure IAM roles across public and private subnets.",
      icon: Cloud,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20"
    },
    {
      title: "DevOps & CI/CD Pipelines",
      desc: "Automating integration and deployment cycles using Jenkins and GitHub Actions with containerized packaging.",
      icon: Cpu,
      color: "text-sky-400",
      bg: "bg-sky-400/10",
      border: "border-sky-400/20"
    },
    {
      title: "Infrastructure as Code",
      desc: "Standardizing reproducible environments using Terraform HCL configuration and Ansible playbooks.",
      icon: Server,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20"
    },
    {
      title: "Linux Administration & Security",
      desc: "Server hardening, SSH key bastion configs, systemd process supervision, and custom Bash shell scripting.",
      icon: Shield,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20"
    }
  ];

  const quickFacts = [
    { label: "Location", val: "Chennai, Tamil Nadu, India" },
    { label: "Current Status", val: "Fresh Graduate / Immediate Joiner" },
    { label: "Target Roles", val: "Cloud Engineer, DevOps Engineer, AWS Associate" },
    { label: "Core Cloud", val: "Amazon Web Services (AWS CCP Certified)" },
    { label: "Relocation", val: "Open to Relocate / Hybrid / Remote" },
    { label: "Communication", val: "English, Tamil" },
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            About <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging software delivery and cloud infrastructure with automated, reliable, and scalable deployment pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Career Goal */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111827]/80 border border-slate-800 shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Professional Summary</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-5 font-light">
                {PERSONAL_INFO.bio}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 mb-6">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  <span>Career Objective</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{PERSONAL_INFO.careerGoal}"
                </p>
              </div>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
                {quickFacts.map((fact, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/50">
                    <span className="text-[11px] font-mono text-slate-400 block">{fact.label}</span>
                    <span className="text-xs font-semibold text-slate-200 block">{fact.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths Matrix */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span>Core Engineering Pillars</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index} 
                      className={`p-4 rounded-xl bg-[#111827]/70 border ${item.border} hover:border-slate-600 transition-all group`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${item.bg}`}>
                          <Icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <h5 className="font-heading font-semibold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111827]/80 border border-slate-800 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Academic Education</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-slate-800">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-9 group">
                    {/* Timeline Node Dot */}
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#0B1120] border-2 border-cyan-400 group-hover:scale-125 transition-transform flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/50">
                          {edu.period}
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                          {edu.score}
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-sky-300 mb-3 font-medium">
                        {edu.institution}
                      </p>

                      <ul className="space-y-1.5">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5 leading-relaxed font-light">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Credentials Callout */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-900/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wide block">
                    Verified Credential
                  </span>
                  <p className="text-xs font-semibold text-white">
                    AWS Certified Cloud Practitioner
                  </p>
                </div>
                <a
                  href="#certifications"
                  className="p-2 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-cyan-300 hover:text-white transition-colors"
                  title="View Certificate"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
