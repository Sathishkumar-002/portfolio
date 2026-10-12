import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { 
  Award, ShieldCheck, CheckCircle2, 
  Sparkles, Check, Copy, ArrowUpRight 
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCred = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Formal Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Industry <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Validated cloud computing expertise from Amazon Web Services and hands-on DevOps infrastructure training.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 sm:p-7 rounded-2xl bg-[#111827]/90 border shadow-xl flex flex-col justify-between backdrop-blur-sm transition-all hover:scale-[1.01] ${
                cert.id === 'aws-ccp'
                  ? 'border-amber-500/50 shadow-amber-500/5 ring-1 ring-amber-500/20'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                      cert.id === 'aws-ccp'
                        ? 'bg-amber-500/15 border border-amber-500/40 text-amber-300'
                        : 'bg-blue-950/60 border border-blue-800/40 text-sky-300'
                    }`}
                  >
                    {cert.badgeType}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Cert Name */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-1 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 font-mono mb-4">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-5">
                  {cert.description}
                </p>

                {/* Skills Covered */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Curriculum & Skills Tested:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                {cert.verificationCode ? (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified AWS Badge</span>
                    </span>
                    <button
                      onClick={() => copyCred(cert.id, "AWS Certified Cloud Practitioner - Sathishkumar")}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-mono flex items-center gap-1 transition-colors"
                    >
                      {copiedId === cert.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === cert.id ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Hands-on Lab Certificate</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Recruiter Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Looking for Official Documentation or Transcripts?</span>
            </h4>
            <p className="text-xs text-slate-400">
              Certificates and academic scorecards available immediately upon request during recruitment screening.
            </p>
          </div>
          <a
            href={`mailto:${CERTIFICATIONS[0].credentialUrl}`}
            className="shrink-0 px-4 py-2 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-cyan-300 hover:text-white border border-blue-500/40 text-xs font-semibold transition-all flex items-center gap-1.5"
          >
            <span>Request Transcripts</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
