import React, { useState } from 'react';
import { AWS_SERVICES } from '../data/portfolioData';
import type { AwsServiceItem } from '../data/portfolioData';
import { 
  Server, HardDrive, ShieldCheck, Network, Zap, 
  Database, Activity, Globe, Lock, Cpu, Sparkles, 
  Layers, ExternalLink, X, CheckCircle 
} from 'lucide-react';

export const AwsServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeService, setActiveService] = useState<AwsServiceItem | null>(null);

  const categories = ['All', 'Compute', 'Storage', 'Networking', 'Security', 'Database', 'Management', 'Serverless'];

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Server': return <Server className="w-5 h-5 text-amber-400" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      case 'Network': return <Network className="w-5 h-5 text-purple-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Database': return <Database className="w-5 h-5 text-sky-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-orange-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      default: return <Server className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredServices = AWS_SERVICES.filter(service => {
    if (selectedCategory === 'All') return true;
    return service.category === selectedCategory;
  });

  return (
    <section id="aws" className="py-20 relative border-t border-slate-800/80 bg-gradient-to-b from-[#0B1120] to-[#0c1427]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Amazon Web Services Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            AWS Cloud <span className="gradient-text-aws">Architecture Services</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical implementation experience across the AWS ecosystem, supporting high availability, automated security policies, and cost-effective scaling.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              className="p-6 rounded-2xl bg-[#111827]/80 border border-slate-800/90 hover:border-amber-500/40 hover:bg-[#111827] transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 group-hover:border-amber-500/30 transition-all">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                        AWS {service.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {service.fullName}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/50 text-amber-300">
                    {service.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 mb-4 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Hands-on Implementation Highlight */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 mb-4">
                  <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Hands-on Usage in Projects</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.handsOnUsage}
                  </p>
                </div>
              </div>

              {/* Concepts Tags */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {service.keyConcepts.map((concept, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/70 text-slate-400 border border-slate-700/50"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AWS Architecture Summary Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/60 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-heading font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>Multi-Tier High Availability Architecture Pattern</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
              Designed VPC architectures following the AWS Well-Architected Framework: dual Availability Zones, Public/Private subnets, Internet Gateways, NAT Gateways for backend updates, and Least-Privilege IAM execution roles.
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20"
          >
            <span>See Applied Projects</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl bg-[#0F172A] border border-amber-500/30 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  {getServiceIcon(activeService.iconName)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">AWS {activeService.name}</h4>
                  <p className="text-[11px] font-mono text-slate-400">{activeService.fullName}</p>
                </div>
              </div>
              <button onClick={() => setActiveService(null)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">{activeService.description}</p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                Project Implementation
              </span>
              <p className="text-xs text-slate-200">{activeService.handsOnUsage}</p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Core Architectural Concepts
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeService.keyConcepts.map((k, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-cyan-300 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    <span>{k}</span>
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveService(null)}
              className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
