import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Terminal as TerminalIcon, Play, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandOutput {
  command: string;
  output: ReactNode;
  time: string;
}

export const DevOpsTerminal = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'aws sts get-caller-identity',
      time: '12:00:01',
      output: (
        <div className="text-emerald-400 font-mono text-xs whitespace-pre-wrap leading-relaxed">
{`{
  "UserId": "AROA-SATHISHKUMAR-AWS",
  "Account": "918946056462",
  "Arn": "arn:aws:iam::918946056462:user/sathishkumar",
  "Role": "Cloud & DevOps Engineer",
  "Status": "ACTIVE_READY_FOR_DEPLOYMENT"
}`}
        </div>
      ),
    },
    {
      command: 'docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"',
      time: '12:00:04',
      output: (
        <div className="text-sky-300 font-mono text-xs whitespace-pre-wrap leading-relaxed">
{`NAMES                           STATUS              PORTS
cloud-snake-game-app            Up 14 hours         0.0.0.0:5000->5000/tcp
two-tier-student-portal-backend Up 14 hours         0.0.0.0:8000->8000/tcp
prometheus-node-exporter        Up 14 hours         0.0.0.0:9100->9100/tcp`}
        </div>
      ),
    }
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const quickCommands = [
    'aws --version',
    'kubectl get pods',
    'terraform plan',
    'cat skills.json',
    'whoami',
    'help'
  ];

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString();

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputContent: ReactNode;

    switch (trimmed.toLowerCase()) {
      case 'help':
        outputContent = (
          <div className="text-slate-300 font-mono text-xs space-y-1">
            <p className="text-cyan-400 font-semibold">Available Commands:</p>
            <p><span className="text-yellow-400">whoami</span> - Display engineer profile summary</p>
            <p><span className="text-yellow-400">aws --version</span> - Verify AWS CLI and Boto3 bindings</p>
            <p><span className="text-yellow-400">kubectl get pods</span> - View running Kubernetes microservices</p>
            <p><span className="text-yellow-400">terraform plan</span> - Inspect simulated IaC infrastructure diff</p>
            <p><span className="text-yellow-400">cat skills.json</span> - View categorized skills manifest</p>
            <p><span className="text-yellow-400">contact</span> - Get direct email & phone for hiring</p>
            <p><span className="text-yellow-400">clear</span> - Clear the terminal output</p>
          </div>
        );
        break;

      case 'whoami':
        outputContent = (
          <div className="text-slate-300 font-mono text-xs space-y-1">
            <p className="text-cyan-300 font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p className="text-slate-400">Location: {PERSONAL_INFO.location}</p>
            <p className="text-emerald-400">Status: {PERSONAL_INFO.status} ({PERSONAL_INFO.availability})</p>
            <p className="text-slate-400">Education: B.Sc Information Technology (CGPA 8.0/10)</p>
            <p className="text-slate-400">Credentials: AWS Certified Cloud Practitioner</p>
          </div>
        );
        break;

      case 'aws --version':
        outputContent = (
          <div className="text-amber-400 font-mono text-xs">
            aws-cli/2.15.30 Python/3.11.8 Linux/6.5.0-aws botocore/2.4.30
          </div>
        );
        break;

      case 'kubectl get pods':
        outputContent = (
          <div className="text-emerald-300 font-mono text-xs whitespace-pre-wrap">
{`NAME                                 READY   STATUS    RESTARTS   AGE
snake-game-deploy-784f5bc98-xj7m9    1/1     Running   0          42m
student-portal-deploy-599fd768-kr22x 1/1     Running   0          1h
nginx-ingress-controller-4d89fa9     1/1     Running   0          2d`}
          </div>
        );
        break;

      case 'terraform plan':
        outputContent = (
          <div className="text-purple-300 font-mono text-xs whitespace-pre-wrap">
{`Terraform will perform the following actions:

  # aws_vpc.main_vpc will be created
  + cidr_block                       = "10.0.0.0/16"
  + enable_dns_hostnames             = true
  # aws_instance.web_server will be created
  + ami                              = "ami-0c7217cdde317cfec"
  + instance_type                    = "t2.micro"
  + security_groups                  = ["sg-portfolio-hardened"]

Plan: 2 to add, 0 to change, 0 to destroy.`}
          </div>
        );
        break;

      case 'cat skills.json':
        outputContent = (
          <div className="text-cyan-300 font-mono text-xs whitespace-pre-wrap">
{`{
  "cloud": ["AWS (EC2, S3, IAM, VPC, Lambda, DynamoDB)", "Azure (basic)", "GCP (basic)"],
  "containers": ["Docker", "Kubernetes"],
  "cicd": ["Jenkins", "GitHub Actions", "GitLab CI"],
  "iac": ["Terraform", "Ansible"],
  "networking": ["Subnets", "Route Tables", "IGW", "NAT Gateway", "Security Groups"],
  "linux": ["Ubuntu", "Amazon Linux", "Bash Scripting", "systemd"]
}`}
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="text-sky-300 font-mono text-xs space-y-1">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-cyan-400 underline">{PERSONAL_INFO.phone}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">linkedin.com/in/sathishkumar-cloud</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/Sathishkumar-002</a></p>
          </div>
        );
        break;

      default:
        outputContent = (
          <div className="text-rose-400 font-mono text-xs">
            bash: {trimmed}: command not found. Type <span className="text-yellow-400">help</span> for recognized commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: outputContent, time }]);
    setInputVal('');
  };

  const copyRecentOutput = () => {
    navigator.clipboard.writeText("Sathishkumar - Cloud & DevOps Engineer | AWS Certified | sathishkumaraws08@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full rounded-2xl bg-[#090D16] border border-slate-800 shadow-2xl shadow-blue-950/40 overflow-hidden font-mono text-xs flex flex-col">
      {/* Terminal Title Bar */}
      <div className="bg-[#0f172a] px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="ml-2 text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>sathish@aws-bastion-us-east-1:~</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            ssh connected
          </span>
          <button
            onClick={copyRecentOutput}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
            title="Copy Info"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 space-y-3.5 max-h-[300px] sm:max-h-[340px] overflow-y-auto">
        <div className="text-slate-500 text-[11px] border-b border-slate-800/60 pb-2">
          <span>Linux 6.5.0-aws x86_64 | Amazon Linux 2023 | Welcome to Sathish's Cloud Environment</span>
          <br />
          <span>Type <span className="text-cyan-400">help</span> or click presets below to inspect infrastructure status.</span>
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyan-400 font-bold">sathish@aws:~$</span>
              <span className="text-slate-100 font-semibold">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{item.time}</span>
            </div>
            <div className="pl-4 border-l border-slate-800/80">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Command Chips */}
      <div className="px-4 py-2 bg-[#0c1222] border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="text-slate-500 flex items-center gap-1 mr-1">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Quick run:
        </span>
        {quickCommands.map((q) => (
          <button
            key={q}
            onClick={() => handleCommand(q)}
            className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-blue-600/30 text-slate-300 hover:text-cyan-300 border border-slate-700/60 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Interactive Input Line */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(inputVal);
        }}
        className="px-4 py-2.5 bg-[#090D16] border-t border-slate-800 flex items-center gap-2"
      >
        <span className="text-cyan-400 font-bold">sathish@aws:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help', 'whoami', 'terraform plan'..."
          className="flex-1 bg-transparent text-slate-200 focus:outline-none placeholder:text-slate-600 text-xs"
        />
        <button
          type="submit"
          className="p-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          title="Run command"
        >
          <Play className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};
