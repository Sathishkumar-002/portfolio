import { useState } from 'react';
import type { FC } from 'react';
import { PERSONAL_INFO, EDUCATION, PROJECTS } from '../data/portfolioData';
import { 
  X, Download, Printer, Copy, Check, FileText, 
  Mail, Phone, MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawResumeText = `SATHISHKUMAR
Cloud & DevOps Engineer
Chennai, Tamil Nadu, India | +91-8946056462 | sathishkumaraws08@gmail.com
LinkedIn: linkedin.com/in/sathishkumar-cloud/ | GitHub: github.com/Sathishkumar-002

PROFESSIONAL SUMMARY
Motivated fresher with hands-on exposure to cloud platforms and DevOps automation through academic and personal projects. Skilled in containerization, CI/CD pipelines, and Infrastructure as Code using Docker, Kubernetes, Jenkins, and Terraform. Strong fundamentals in Linux administration, networking, and scripting, with a keen interest in building reliable, automated, and scalable deployment systems. Seeking a Cloud/DevOps Engineer role to contribute to infrastructure automation and CI/CD excellence.

TECHNICAL SKILLS
• Cloud Platforms: AWS (EC2, S3, IAM, VPC, Lambda), Microsoft Azure (basic), Google Cloud Platform (basic)
• Networking: IP Addressing, DNS, DHCP, Subnets, Routing, Internet Gateway, NAT Gateway, Security Groups
• Containerization & Orchestration: Docker, Kubernetes (Pods, Deployments, Services, Helm - basic)
• CI/CD & Automation: Jenkins, GitHub Actions, GitLab CI (basic)
• Infrastructure as Code: Terraform, Ansible (basic)
• Monitoring & Logging: Prometheus, Grafana, ELK Stack (basic)
• Other: Linux/Unix Administration, Shell Scripting (Bash), Python, Git/GitHub

EDUCATION
• B.Sc Information Technology (2023 - 2026)
  JJ College of Arts and Science / Bharathidasan University | CGPA: 8 / 10
• Higher Secondary Certificate (12th Grade, 2022 - 2023)
  Government Higher Secondary School | Percentage: 65%

ACADEMIC PROJECTS
1. DESIGN AND IMPLEMENTATION OF A CLOUD-BASED SNAKE GAME
   Tools: EC2, DynamoDB, REST API, HTML/CSS/JS, Python Flask
   • Developed a cloud-based Snake Game using HTML, CSS, JavaScript, and Python Flask.
   • Deployed the application on Amazon EC2 to enable browser-based access.
   • Integrated Amazon DynamoDB to store and manage player scores.
   • Configured frontend-to-backend communication using Flask REST APIs.
   • Implemented player name, game ID, score tracking, and adjustable game speed.
   • Applied AWS cloud deployment, Linux server management, and client-server architecture concepts.

2. IMPLEMENTATION OF A TWO-TIER STUDENT REGISTRATION SYSTEM ON AMAZON EC2
   Tools: EC2, Linux, Flask-CORS, HTTP, SSH, HTML/CSS/JS
   • Developed a student registration portal using HTML, CSS and JavaScript for a user-friendly interface.
   • Built a backend application using Python Flask to process student registration requests.
   • Deployed the application on Amazon EC2 using a Linux-based cloud server.
   • Configured AWS Security Groups to control network access and enable application connectivity.
   • Implemented frontend-to-backend communication using HTTP requests and Flask routes.
   • Tested the registration workflow to verify form submission, backend processing, and response handling.

INTERNSHIP
• Cloud/DevOps Intern (Jun 2026 - Oct 2026) | Login 360, Chennai
  • Developed and deployed cloud-based applications using AWS EC2, Linux, and Python Flask.
  • Integrated DynamoDB and REST APIs for application functionality and data management.
  • Configured AWS Security Groups and tested application connectivity between frontend and backend.

CERTIFICATIONS
• AWS Certified Cloud Practitioner (Amazon Web Services)
• AWS Training — Login360
• DevOps Training — Login360`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([rawResumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sathishkumar_Cloud_DevOps_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#0F172A] border border-slate-700 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-4">
        
        {/* Modal Top Toolbar */}
        <div className="p-4 sm:px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-heading font-bold text-white text-sm sm:text-base">
              Verified Technical Resume
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 border border-emerald-800/50 text-emerald-400">
              AWS Certified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090D16] text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-cyan-400 mt-1">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-4 text-xs text-slate-400 font-mono mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {PERSONAL_INFO.email}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-cyan-400 mt-2">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5" /> linkedin.com/in/sathishkumar-cloud
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5" /> github.com/Sathishkumar-002
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800/80 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800/80 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <p><strong className="text-slate-200">Cloud Platforms:</strong> AWS (EC2, S3, IAM, VPC, Lambda, DynamoDB), Microsoft Azure (basic), Google Cloud Platform (basic)</p>
              <p><strong className="text-slate-200">Networking:</strong> IP Addressing, DNS, DHCP, Subnets, Routing, Internet Gateway, NAT Gateway, Security Groups</p>
              <p><strong className="text-slate-200">Containerization & Orchestration:</strong> Docker, Kubernetes (Pods, Deployments, Services, Helm - basic)</p>
              <p><strong className="text-slate-200">CI/CD & Automation:</strong> Jenkins, GitHub Actions, GitLab CI (basic)</p>
              <p><strong className="text-slate-200">Infrastructure as Code:</strong> Terraform, Ansible (basic)</p>
              <p><strong className="text-slate-200">Monitoring & Logging:</strong> Prometheus, Grafana, ELK Stack (basic)</p>
              <p><strong className="text-slate-200">Operating Systems & Scripting:</strong> Linux/Unix Administration, Shell Scripting (Bash), Python, Git/GitHub</p>
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800/80 pb-1 mb-3">
              Academic Projects
            </h2>
            <div className="space-y-5">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400">
                      Tools: {proj.tools.join(', ')}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-light leading-relaxed pl-1">
                    <li>Developed and deployed application on Amazon EC2 to enable reliable browser-based access.</li>
                    <li>Configured network ingress and security rules via AWS Security Groups.</li>
                    <li>Built backend REST API routes using Python Flask for seamless client-to-cloud communication.</li>
                    {proj.id === 'cloud-snake-game' && (
                      <li>Integrated Amazon DynamoDB NoSQL database to store and track player scores with sub-50ms latency.</li>
                    )}
                    {proj.id === 'two-tier-registration-system' && (
                      <li>Implemented Flask-CORS middleware and tested submission validation workflows end-to-end.</li>
                    )}
                    <li>Demonstrated Linux server management, daemonization with systemd, and client-server cloud architecture.</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800/80 pb-1 mb-3">
              Internship Experience
            </h2>
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    Cloud/DevOps Intern — Login 360
                  </h3>
                  <span className="text-xs text-slate-400">Chennai, Tamil Nadu, India</span>
                </div>
                <span className="text-xs font-mono text-cyan-400">
                  Jun 2026 - Oct 2026
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-light leading-relaxed pl-1">
                <li>Developed and deployed cloud-based applications using AWS EC2, Linux, and Python Flask.</li>
                <li>Integrated DynamoDB and REST APIs for application functionality and persistent data management.</li>
                <li>Configured AWS Security Groups and tested application connectivity between frontend and backend.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800/80 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-wrap items-baseline justify-between gap-1 text-xs">
                  <div>
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-slate-400">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-cyan-400 block">{edu.period}</span>
                    <span className="font-mono text-emerald-400 font-bold block">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800/80 pb-1 mb-2">
              Certifications & Training
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>• <strong className="text-white">AWS Certified Cloud Practitioner</strong> — Amazon Web Services (AWS)</p>
              <p>• <strong className="text-white">AWS Training</strong> — Login 360</p>
              <p>• <strong className="text-white">DevOps Training</strong> — Login 360</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
