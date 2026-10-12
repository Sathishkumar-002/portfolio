import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { 
  FolderGit2, ExternalLink, Layers, 
  CheckCircle, AlertCircle, Play, X, Trophy, Database, Server
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'challenges' | 'simulator'>('overview');

  // Mini Snake Game state for simulation
  const [snakeGameOpen, setSnakeGameOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(120);
  const [playerName, setPlayerName] = useState('Recruiter_AWS');
  const [simulatedSubmissions, setSimulatedSubmissions] = useState<Array<{ name: string; score: number; id: string; time: string }>>([
    { name: "Sathishkumar", score: 340, id: "gm-7a9b1c", time: "10 mins ago" },
    { name: "AWS_Arch_Lead", score: 280, id: "gm-9c2e4f", time: "1 hour ago" },
    { name: "DevOps_Reviewer", score: 210, id: "gm-3d5a7b", time: "2 hours ago" },
  ]);
  const [isSimulatingUpload, setIsSimulatingUpload] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Mini Student Registration Portal simulator state
  const [studentPortalOpen, setStudentPortalOpen] = useState(false);
  const [studentForm, setStudentForm] = useState({
    name: 'Candidate Test',
    email: 'cloud.engineer@techcorp.com',
    course: 'B.Sc Information Technology',
    semester: 'Semester 6',
  });
  const [portalResponse, setPortalResponse] = useState<any>(null);
  const [portalLoading, setPortalLoading] = useState(false);

  const handleSimulateStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPortalLoading(true);
    setPortalResponse(null);

    setTimeout(() => {
      setPortalLoading(false);
      setPortalResponse({
        status: 200,
        message: "Registration successfully validated and processed on EC2 instance.",
        registrationId: "REG-AWS-" + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toISOString(),
        serverNode: "ec2-instance-ip-10-0-1-42 (Linux 6.5 Ubuntu)",
        securityGroupRule: "SG-INGRESS-PORT-8000-VALIDATED",
        data: studentForm
      });
    }, 1200);
  };

  const handleSimulateScoreSubmit = () => {
    setIsSimulatingUpload(true);
    setUploadSuccess(false);

    setTimeout(() => {
      const newEntry = {
        name: playerName || "Guest_Player",
        score: score + 50,
        id: "gm-" + Math.random().toString(36).substring(2, 8),
        time: "Just now"
      };
      setScore(score + 50);
      if (score + 50 > highScore) setHighScore(score + 50);
      setSimulatedSubmissions(prev => [newEntry, ...prev.slice(0, 4)]);
      setIsSimulatingUpload(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Academic & Cloud <span className="gradient-text">Deployments</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real cloud-hosted applications demonstrating Amazon EC2 compute provisioning, NoSQL persistence with DynamoDB, and decoupled multi-tier architecture.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#111827]/90 border border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-slate-700 transition-all backdrop-blur-sm"
            >
              {/* Project Card Header Banner */}
              <div className="p-6 sm:p-7 border-b border-slate-800/80 bg-gradient-to-r from-slate-900 to-slate-900/60 relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full">
                    {project.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-sky-400 font-mono mt-1">
                  {project.subtitle}
                </p>

                {/* Key AWS Services Used */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.keyAwsServices.map((awsServ, aIdx) => (
                    <span 
                      key={aIdx} 
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20"
                    >
                      AWS {awsServ}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
                
                {/* Overview */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Executive Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {project.overview}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Cloud Architecture & Data Flow</span>
                  </div>
                  <ul className="space-y-1.5">
                    {project.architecture.slice(0, 3).map((arch, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-300 flex items-start gap-2 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-center">
                      <span className="text-xs sm:text-sm font-bold text-white font-mono block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-slate-400 block truncate">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tools Used Badges */}
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Technologies & Frameworks
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  {project.id === 'cloud-snake-game' && (
                    <button
                      onClick={() => setSnakeGameOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/50 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Play & Test DynamoDB</span>
                    </button>
                  )}

                  {project.id === 'two-tier-registration-system' && (
                    <button
                      onClick={() => setStudentPortalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 transition-colors"
                    >
                      <Server className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Test Two-Tier Portal</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveTab('overview');
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Full Deep-Dive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0F172A] border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-900/50 px-6">
              {[
                { id: 'overview', label: 'Problem & Solution' },
                { id: 'architecture', label: 'Cloud Architecture' },
                { id: 'challenges', label: 'Challenges & Results' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3 px-4 text-xs font-medium border-b-2 transition-all ${
                    activeTab === tab.id
                      ? 'border-cyan-400 text-cyan-300 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <h5 className="font-heading font-semibold text-rose-400 text-xs uppercase font-mono mb-2 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      <span>Problem Statement</span>
                    </h5>
                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                      {selectedProject.problemStatement}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <h5 className="font-heading font-semibold text-emerald-400 text-xs uppercase font-mono mb-2 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      <span>Engineered Cloud Solution</span>
                    </h5>
                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-heading font-semibold text-white text-xs uppercase font-mono mb-2">
                      Key Technical Features
                    </h5>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <h5 className="font-heading font-semibold text-cyan-400 text-xs uppercase font-mono mb-3">
                      End-to-End Architectural Breakdown
                    </h5>
                    <div className="space-y-3">
                      {selectedProject.architecture.map((layer, lIdx) => (
                        <div key={lIdx} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                          <span className="text-xs font-semibold text-white block mb-0.5">
                            Step {lIdx + 1}
                          </span>
                          <p className="text-xs text-slate-300 font-light leading-relaxed">
                            {layer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'challenges' && (
                <div className="space-y-4">
                  <div>
                    <h5 className="font-heading font-semibold text-amber-400 text-xs uppercase font-mono mb-2">
                      Engineering Hurdles & Solutions
                    </h5>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((ch, cIdx) => (
                        <li key={cIdx} className="text-xs text-slate-300 p-3 rounded-lg bg-slate-800/40 border border-slate-700/40">
                          {ch}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-heading font-semibold text-emerald-400 text-xs uppercase font-mono mb-2">
                      Measurable Outcomes
                    </h5>
                    <ul className="space-y-2">
                      {selectedProject.outcome.map((out, oIdx) => (
                        <li key={oIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-end gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Snake Game & DynamoDB Simulator Modal */}
      {snakeGameOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#090D16] border border-slate-700 shadow-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Cloud Snake Game & DynamoDB Simulator
                  </h4>
                  <p className="text-[11px] font-mono text-cyan-400">
                    Amazon EC2 Linux Backend + DynamoDB Leaderboard
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSnakeGameOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Simulated Game Box */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-lg bg-slate-800/80 font-mono text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">Player:</span>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded px-2 py-0.5 text-cyan-300 text-xs w-32 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter name"
                  />
                </div>
                <span>Current: <strong className="text-emerald-400">{score}</strong></span>
                <span>High: <strong className="text-amber-400">{highScore}</strong></span>
              </div>

              {/* Game Playground Display */}
              <div className="h-36 rounded-lg bg-[#050811] border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
                <div className="text-xs text-slate-400 font-mono space-y-1 z-10">
                  <p className="text-white font-bold text-sm">🐍 Cloud Session Active</p>
                  <p>Hosted on: AWS EC2 (Ubuntu 22.04 LTS)</p>
                  <p className="text-[11px] text-emerald-400">Flask REST API: /api/v1/score</p>
                </div>
                
                {uploadSuccess && (
                  <div className="absolute inset-0 bg-emerald-950/90 flex items-center justify-center text-xs font-mono text-emerald-300 font-bold animate-in fade-in">
                    ✓ Score written to Amazon DynamoDB Table!
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleSimulateScoreSubmit}
                  disabled={isSimulatingUpload}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs shadow-md shadow-emerald-500/20 disabled:opacity-50 transition-all"
                >
                  {isSimulatingUpload ? "Writing to DynamoDB..." : "Score +50 & Push to Cloud"}
                </button>
                <button
                  onClick={() => setScore(0)}
                  className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700"
                >
                  Reset Score
                </button>
              </div>
            </div>

            {/* Real-time DynamoDB Leaderboard Table */}
            <div className="mt-4">
              <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Database className="w-3.5 h-3.5" />
                  <span>Amazon DynamoDB Table: PlayerLeaderboard</span>
                </span>
                <span className="text-[10px] text-slate-500">Latency: 38ms</span>
              </div>

              <div className="rounded-lg bg-slate-900 border border-slate-800 overflow-hidden font-mono text-xs">
                <div className="grid grid-cols-4 bg-slate-800/80 px-3 py-1.5 text-[10px] font-bold text-slate-300">
                  <span>PLAYER</span>
                  <span>SCORE</span>
                  <span>GAME_ID</span>
                  <span>SYNCED</span>
                </div>
                <div className="divide-y divide-slate-800/60 max-h-32 overflow-y-auto">
                  {simulatedSubmissions.map((entry, idx) => (
                    <div key={idx} className="grid grid-cols-4 px-3 py-1.5 text-[11px] text-slate-300">
                      <span className="text-white font-medium truncate">{entry.name}</span>
                      <span className="text-amber-400 font-bold">{entry.score}</span>
                      <span className="text-slate-500">{entry.id}</span>
                      <span className="text-slate-400">{entry.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Two-Tier Student Portal Simulator Modal */}
      {studentPortalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#090D16] border border-slate-700 shadow-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Two-Tier Registration Portal Simulator
                  </h4>
                  <p className="text-[11px] font-mono text-cyan-400">
                    Tier 1 (HTML/JS) → Tier 2 (Flask on Amazon EC2)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setStudentPortalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSimulateStudentSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-mono text-[11px]">Student Full Name</label>
                <input
                  type="text"
                  value={studentForm.name}
                  onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-mono text-[11px]">Email Address</label>
                <input
                  type="email"
                  value={studentForm.email}
                  onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 mb-1 font-mono text-[11px]">Course Enrolled</label>
                  <input
                    type="text"
                    value={studentForm.course}
                    onChange={(e) => setStudentForm({ ...studentForm, course: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-mono text-[11px]">Academic Semester</label>
                  <input
                    type="text"
                    value={studentForm.semester}
                    onChange={(e) => setStudentForm({ ...studentForm, semester: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={portalLoading}
                className="w-full mt-2 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-md shadow-cyan-500/20 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {portalLoading ? (
                  <span>Processing through EC2 Security Group...</span>
                ) : (
                  <span>Submit HTTP POST Request to EC2</span>
                )}
              </button>
            </form>

            {portalResponse && (
              <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 font-mono text-[11px] text-emerald-300 space-y-1">
                <div className="flex items-center justify-between text-emerald-400 font-bold border-b border-emerald-900/60 pb-1 mb-1">
                  <span>HTTP 200 OK — Flask Backend Response</span>
                  <span>{portalResponse.registrationId}</span>
                </div>
                <p>Node: {portalResponse.serverNode}</p>
                <p>Security Group: {portalResponse.securityGroupRule}</p>
                <p>Payload: Student "{portalResponse.data.name}" registered successfully.</p>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
