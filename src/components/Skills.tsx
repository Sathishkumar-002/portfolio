import { useState } from 'react';
import type { ReactNode } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Cloud, Boxes, GitBranch, Network, Terminal, Activity, 
  Search, Zap 
} from 'lucide-react';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categoryIcons: Record<string, ReactNode> = {
    cloud: <Cloud className="w-4 h-4 text-amber-400" />,
    'devops-iac': <Boxes className="w-4 h-4 text-sky-400" />,
    cicd: <GitBranch className="w-4 h-4 text-cyan-400" />,
    networking: <Network className="w-4 h-4 text-purple-400" />,
    'linux-programming': <Terminal className="w-4 h-4 text-emerald-400" />,
    monitoring: <Activity className="w-4 h-4 text-rose-400" />,
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeTab !== 'all' && cat.id !== activeTab) return false;
    return true;
  }).map((cat) => {
    if (!searchTerm.trim()) return cat;
    const filteredSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.badge.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, skills: filteredSkills };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical stack spanning AWS cloud design, container orchestration, automated CI/CD pipelines, and systems administration.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by keyword (e.g. Docker, VPC, Bash)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
              No matching skills found for "{searchTerm}". Try a different term or clear the filter.
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div 
                key={category.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#111827]/80 border border-slate-800 shadow-xl backdrop-blur-sm"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {categoryIcons[category.id]}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-light">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-1 rounded-full self-start sm:self-auto">
                    {category.skills.length} Competencies
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        {/* Skill Title & Badge */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-heading font-semibold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/50 text-sky-300">
                            {skill.badge}
                          </span>
                        </div>

                        {/* Progress Meter Bar */}
                        <div className="w-full bg-slate-800/90 h-2 rounded-full overflow-hidden mb-2.5">
                          <div
                            className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Details / Covered Concepts */}
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                          {skill.details}
                        </p>
                      </div>

                      {/* Bottom Micro Tag */}
                      <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                        <span>Proficiency</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
