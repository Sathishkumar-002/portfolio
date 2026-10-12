import { EXPERIENCE, TOOLS_LIST } from '../data/portfolioData';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, 
  Terminal, Sparkles 
} from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/80 bg-gradient-to-b from-[#0c1427] to-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internship & Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Work Experience & <span className="gradient-text">Cloud Labs</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Professional internship experience at Login 360, Chennai, complemented by rigorous hands-on infrastructure automation labs.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-slate-800">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-10 sm:pl-16 group">
              
              {/* Timeline Dot Icon */}
              <div className="absolute left-2 sm:left-6 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0B1120] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111827]/90 border border-slate-800 hover:border-slate-700 shadow-xl transition-all backdrop-blur-sm">
                
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/50">
                        {exp.badge}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-sky-400 flex items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-normal">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {exp.description}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Key Engineering Deliverables</span>
                  </h4>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Applied Tags */}
                <div>
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Technologies Exercised
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skillsApplied.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-sky-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tool Matrix Grid */}
        <div className="mt-20 p-6 sm:p-8 rounded-2xl bg-[#111827]/70 border border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
              DevOps & Cloud Engineering Tool Matrix
            </h3>
            <p className="text-xs text-slate-400">
              Every day tooling leveraged across development, deployment, and monitoring.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {TOOLS_LIST.map((tool, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all text-center flex flex-col items-center justify-center gap-1.5 group"
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
                >
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="font-semibold text-xs text-slate-200 group-hover:text-white">
                  {tool.name}
                </span>
                <span className="text-[9px] font-mono text-slate-500 uppercase">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
