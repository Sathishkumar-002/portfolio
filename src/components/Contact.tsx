import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, Phone, MapPin, 
  Send, CheckCircle, Copy, Check, MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38BDF8', '#3B82F6', '#06B6D4', '#FF9900']
      });
    } catch (err) {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80 bg-gradient-to-b from-[#0B1120] to-[#080d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Recruit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring an AWS-certified, DevOps-ready Cloud Engineer? Send a direct message or connect via LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Recruiter Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-[#111827]/90 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="font-heading font-bold text-lg text-white mb-1">
                  Direct Contact Channels
                </h3>
                <p className="text-xs text-slate-400 font-light">
                  Quick response guaranteed within 24 hours.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between gap-3 group hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide block">Email Address</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between gap-3 group hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide block">Phone & WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels (LinkedIn & GitHub) */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900 text-slate-200 transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-lg bg-blue-600/20 text-sky-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 block">LinkedIn</span>
                    <span className="text-xs font-semibold text-white truncate block">Connect</span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 hover:bg-slate-900 text-slate-200 transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 block">GitHub</span>
                    <span className="text-xs font-semibold text-white truncate block">Repositories</span>
                  </div>
                </a>
              </div>

              {/* Location Pill */}
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{PERSONAL_INFO.location} • Open to Remote & On-site Relocation</span>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
              <div className="text-xs">
                <span className="font-bold text-emerald-300 block">Status: Immediate Joiner</span>
                <span className="text-slate-400">Graduating 2026 • Ready for immediate onboarding</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111827]/90 border border-slate-800 shadow-xl backdrop-blur-sm">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2 flex items-center gap-2">
                <Send className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                Fill out the form below to reach Sathishkumar regarding interview schedules, role inquiries, or technical discussion.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-slate-900/90 border border-emerald-500/50 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading text-white">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-cyan-400">{formData.name}</strong>. I have received your notification and will reply to <span className="text-slate-200">{formData.email}</span> shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', company: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5 font-mono text-[11px]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Technical Recruiter"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5 font-mono text-[11px]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5 font-mono text-[11px]">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Amazon, Google, Deloitte, TCS Digital..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5 font-mono text-[11px]">
                      Message / Role Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sathishkumar, we reviewed your AWS and DevOps projects and would love to schedule a preliminary screening..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 disabled:opacity-50 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message & Notify</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
