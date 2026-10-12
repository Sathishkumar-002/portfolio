export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tools: string[];
  duration: string;
  overview: string;
  problemStatement: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenges: string[];
  outcome: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveDemoUrl?: string;
  architectureType: string;
  keyAwsServices: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage
    experience: string;
    badge: string;
    details: string;
  }[];
}

export interface AwsServiceItem {
  id: string;
  name: string;
  fullName: string;
  category: 'Compute' | 'Storage' | 'Networking' | 'Security' | 'Database' | 'Management' | 'Serverless';
  iconName: string;
  description: string;
  handsOnUsage: string;
  keyConcepts: string[];
  level: 'Proficient' | 'Advanced' | 'Working Knowledge';
}

export const PERSONAL_INFO = {
  name: "SATHISHKUMAR",
  title: "Cloud & DevOps Engineer",
  tagline: "Building resilient AWS cloud architectures, automated CI/CD pipelines, and containerized scalable infrastructures.",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91-8946056462",
  email: "sathishkumaraws08@gmail.com",
  linkedin: "https://linkedin.com/in/sathishkumar-cloud/",
  github: "https://github.com/Sathishkumar-002",
  status: "Actively Seeking Opportunities",
  yearsExperience: "Fresher / Hands-on Project Experience",
  availability: "Immediate Joiner",
  openToRelocation: "Open to Relocate / Remote",
  bio: "Motivated fresher with hands-on exposure to cloud platforms and DevOps automation through academic and personal projects. Skilled in containerization, CI/CD pipelines, and Infrastructure as Code using Docker, Kubernetes, Jenkins, and Terraform. Strong fundamentals in Linux administration, networking, and scripting, with a keen interest in building reliable, automated, and scalable deployment systems. Seeking a Cloud/DevOps Engineer role to contribute to infrastructure automation and CI/CD excellence.",
  careerGoal: "To engineer robust, secure, and auto-scaling cloud environments using modern DevOps methodologies, infrastructure as code, and continuous deployment workflows while growing into an AWS Cloud Solutions Architect.",
  stats: [
    { label: "AWS Services Handled", value: "10+" },
    { label: "Academic & Cloud Projects", value: "4+" },
    { label: "CI/CD & IaC Pipelines", value: "Multiple" },
    { label: "Degree CGPA", value: "8.0 / 10" },
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "cloud",
    name: "Cloud Platforms",
    icon: "Cloud",
    description: "Multi-cloud foundation with core expertise in Amazon Web Services infrastructure.",
    skills: [
      { name: "AWS (Core Services)", level: 90, experience: "Primary", badge: "Specialist", details: "EC2, S3, IAM, VPC, Lambda, DynamoDB, CloudWatch, Route53, Security Groups" },
      { name: "Microsoft Azure", level: 65, experience: "Foundation", badge: "Working Knowledge", details: "Virtual Machines, Blob Storage, Virtual Networks, Resource Groups" },
      { name: "Google Cloud Platform", level: 60, experience: "Foundation", badge: "Working Knowledge", details: "Compute Engine, Cloud Storage, VPC networks, IAM roles" },
    ]
  },
  {
    id: "devops-iac",
    name: "DevOps & Infrastructure as Code",
    icon: "Boxes",
    description: "Declarative infrastructure provisioning, automated configurations, and orchestration.",
    skills: [
      { name: "Docker", level: 88, experience: "Hands-on", badge: "Proficient", details: "Dockerfiles, Multi-stage builds, Container Networking, Volumes, Docker Compose" },
      { name: "Kubernetes (K8s)", level: 75, experience: "Hands-on", badge: "Intermediate", details: "Pods, Deployments, ReplicaSets, Services (ClusterIP, NodePort), Helm (basic)" },
      { name: "Terraform", level: 80, experience: "Hands-on", badge: "Proficient", details: "HCL, Providers (AWS), State management, Resources, Variables, Output modules" },
      { name: "Ansible", level: 65, experience: "Hands-on", badge: "Basic", details: "Playbooks, YAML syntax, Inventory files, SSH-based automated configurations" },
    ]
  },
  {
    id: "cicd",
    name: "CI/CD & Automation",
    icon: "GitBranch",
    description: "End-to-end automated testing, building, artifact packaging, and zero-downtime deployment pipelines.",
    skills: [
      { name: "Jenkins", level: 82, experience: "Hands-on", badge: "Proficient", details: "Declarative Pipelines, Jenkinsfile, Webhooks, Build triggers, Docker agent integration" },
      { name: "GitHub Actions", level: 85, experience: "Hands-on", badge: "Proficient", details: "Automated CI workflows, Secrets management, automated container push to ECR/GHCR" },
      { name: "GitLab CI", level: 65, experience: "Hands-on", badge: "Basic", details: ".gitlab-ci.yml pipeline stages, artifact handling, environment triggers" },
    ]
  },
  {
    id: "networking",
    name: "Cloud Networking & Security",
    icon: "Network",
    description: "Strict network isolation, subnets, perimeter defenses, and granular security policies.",
    skills: [
      { name: "VPC & Subnet Architecture", level: 88, experience: "Hands-on", badge: "Proficient", details: "Public/Private subnets, CIDR block allocation, Route Tables, NAT Gateways, IGW" },
      { name: "Network Security", level: 85, experience: "Hands-on", badge: "Proficient", details: "Security Groups (Stateful), NACLs (Stateless), Port hardening, Bastion hosts" },
      { name: "Protocols & DNS", level: 82, experience: "Hands-on", badge: "Proficient", details: "TCP/IP, DNS routing, DHCP, HTTP/HTTPS, SSH keys, SSL/TLS certificates" },
    ]
  },
  {
    id: "linux-programming",
    name: "Operating Systems & Scripting",
    icon: "Terminal",
    description: "Deep Linux CLI administration, automation scripting, and backend API integration.",
    skills: [
      { name: "Linux/Unix Administration", level: 90, experience: "Hands-on", badge: "Proficient", details: "Ubuntu, Amazon Linux, Process monitoring (top/ps), file permissions (chmod/chown), systemd" },
      { name: "Shell Scripting (Bash)", level: 82, experience: "Hands-on", badge: "Proficient", details: "Server automation, cron jobs, log parsing, automated backups, environment provisioning" },
      { name: "Python", level: 78, experience: "Hands-on", badge: "Intermediate", details: "Flask REST APIs, Boto3 AWS SDK automation, script automation, data parsing" },
      { name: "Git & Version Control", level: 88, experience: "Hands-on", badge: "Proficient", details: "Branching strategies, commit history, merge conflict resolution, pull request workflows" },
    ]
  },
  {
    id: "monitoring",
    name: "Monitoring & Observability",
    icon: "Activity",
    description: "Continuous telemetry, resource consumption alerts, and operational visibility.",
    skills: [
      { name: "Prometheus", level: 75, experience: "Hands-on", badge: "Working Knowledge", details: "Time-series metrics scraping, exporters (Node Exporter), alert manager rules" },
      { name: "Grafana", level: 78, experience: "Hands-on", badge: "Intermediate", details: "Custom telemetry dashboards, server health visualization, threshold alert panels" },
      { name: "AWS CloudWatch", level: 82, experience: "Hands-on", badge: "Proficient", details: "EC2 metric alarms, CloudWatch Log Groups, metric filters, SNS notification triggers" },
      { name: "ELK Stack", level: 60, experience: "Foundation", badge: "Basic", details: "Logstash pipeline ingestion, Elasticsearch indexing, Kibana dashboard views" },
    ]
  }
];

export const AWS_SERVICES: AwsServiceItem[] = [
  {
    id: "ec2",
    name: "EC2",
    fullName: "Elastic Compute Cloud",
    category: "Compute",
    iconName: "Server",
    description: "Secure, resizable cloud compute instances supporting Linux workloads and backend services.",
    handsOnUsage: "Provisioned and hardened Ubuntu & Amazon Linux instances for Python Flask web applications, configured AMI backups, and systemd services.",
    keyConcepts: ["Instance Types", "AMI", "Key Pairs", "User Data Scripts", "EBS Volumes"],
    level: "Proficient"
  },
  {
    id: "s3",
    name: "S3",
    fullName: "Simple Storage Service",
    category: "Storage",
    iconName: "HardDrive",
    description: "Scalable object storage offering industry-leading data availability, security, and performance.",
    handsOnUsage: "Configured static asset hosting, versioning, bucket policies, lifecycle management, and IAM-restricted access for project data.",
    keyConcepts: ["Bucket Policies", "Versioning", "CORS Configuration", "Lifecycle Rules", "Static Hosting"],
    level: "Proficient"
  },
  {
    id: "iam",
    name: "IAM",
    fullName: "Identity & Access Management",
    category: "Security",
    iconName: "ShieldCheck",
    description: "Fine-grained control over AWS services and resources with zero-trust access management.",
    handsOnUsage: "Created custom JSON policies applying Principle of Least Privilege, role-based EC2 instance profiles for DynamoDB access, and MFA enforcement.",
    keyConcepts: ["Least Privilege", "IAM Roles", "Custom JSON Policies", "Instance Profiles", "MFA"],
    level: "Proficient"
  },
  {
    id: "vpc",
    name: "VPC",
    fullName: "Virtual Private Cloud",
    category: "Networking",
    iconName: "Network",
    description: "Isolated virtual network environment with customizable IP address ranges, subnets, and route tables.",
    handsOnUsage: "Architected customized VPC with dual public/private subnets, Internet Gateways, NAT Gateways, and route table associations.",
    keyConcepts: ["CIDR Blocks", "Public & Private Subnets", "Internet Gateways", "NAT Gateways", "Route Tables"],
    level: "Proficient"
  },
  {
    id: "lambda",
    name: "Lambda",
    fullName: "AWS Lambda Serverless",
    category: "Serverless",
    iconName: "Zap",
    description: "Run code without provisioning or managing servers, executing on event triggers with auto-scaling.",
    handsOnUsage: "Triggered Python microservices via S3 events and API Gateway for serverless data processing tasks.",
    keyConcepts: ["Event Handlers", "Execution Roles", "Trigger Sources", "Concurrency", "Cold Starts"],
    level: "Working Knowledge"
  },
  {
    id: "dynamodb",
    name: "DynamoDB",
    fullName: "Amazon DynamoDB NoSQL",
    category: "Database",
    iconName: "Database",
    description: "Fast, flexible NoSQL database service delivering single-digit millisecond latency at any scale.",
    handsOnUsage: "Integrated with Flask application for Cloud Snake Game to store player IDs, scores, and timestamps with sub-50ms query speeds.",
    keyConcepts: ["Partition Keys", "Sort Keys", "On-Demand Capacity", "Boto3 Integration", "Global Secondary Indexes"],
    level: "Proficient"
  },
  {
    id: "cloudwatch",
    name: "CloudWatch",
    fullName: "Amazon CloudWatch",
    category: "Management",
    iconName: "Activity",
    description: "Comprehensive monitoring and observability service for AWS cloud resources and applications.",
    handsOnUsage: "Configured CPU utilization alarms for EC2 instances, monitored access logs, and set up SNS alerts for anomalous traffic.",
    keyConcepts: ["Metrics & Alarms", "Log Streams", "Dashboards", "SNS Notifications", "Agent Config"],
    level: "Proficient"
  },
  {
    id: "route53",
    name: "Route 53",
    fullName: "Amazon Route 53 DNS",
    category: "Networking",
    iconName: "Globe",
    description: "Highly available and scalable cloud Domain Name System (DNS) web service.",
    handsOnUsage: "Configured DNS records (A, CNAME), domain routing policies, and health checks to ensure reliable endpoint resolution.",
    keyConcepts: ["Hosted Zones", "A & CNAME Records", "Health Checks", "Failover Routing", "Latency Routing"],
    level: "Working Knowledge"
  },
  {
    id: "security-groups",
    name: "Security Groups",
    fullName: "VPC Security Groups & NACLs",
    category: "Security",
    iconName: "Lock",
    description: "Virtual stateful firewalls controlling inbound and outbound network traffic at the instance level.",
    handsOnUsage: "Restricted SSH ingress to specific administrator IPs, enabled HTTP/HTTPS (ports 80/443), and isolated database backend traffic.",
    keyConcepts: ["Stateful Rules", "Port Hardening", "Inbound/Outbound Rules", "Source IP Filtering"],
    level: "Proficient"
  },
  {
    id: "elb-asg",
    name: "ELB & Auto Scaling",
    fullName: "Elastic Load Balancing & ASG",
    category: "Compute",
    iconName: "Cpu",
    description: "Automatically distribute incoming application traffic and adjust compute capacity dynamically.",
    handsOnUsage: "Designed target groups for Application Load Balancers (ALB) and defined Launch Templates for dynamic auto-scaling policies.",
    keyConcepts: ["Target Groups", "Health Check Paths", "Launch Templates", "Scaling Policies"],
    level: "Working Knowledge"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cloud-snake-game",
    title: "Cloud-Based Snake Game with Real-Time Leaderboard",
    subtitle: "High-Availability Browser Game on AWS EC2 & DynamoDB",
    category: "Cloud Architecture & Full-Stack DevOps",
    tools: ["AWS EC2", "Amazon DynamoDB", "Python Flask", "REST API", "HTML5 Canvas", "JavaScript", "Linux (Ubuntu)", "Boto3 SDK"],
    duration: "Academic Project",
    overview: "Architected and deployed a responsive, browser-based gaming application running on an Amazon EC2 Linux instance, integrated with Amazon DynamoDB for real-time high score persistence, player session tracking, and RESTful telemetry.",
    problemStatement: "Traditional client-side web games run entirely in isolation without persistent cross-device state, leaderboard authentication, or resilient cloud-hosted backends capable of scaling with traffic spikes.",
    solution: "Engineered an end-to-end cloud gaming architecture featuring an interactive HTML5/JavaScript frontend, a lightweight Python Flask REST API server deployed on an AWS EC2 Ubuntu instance, and high-performance NoSQL data ingestion into Amazon DynamoDB.",
    architecture: [
      "Client Layer: Interactive HTML5 Canvas game client running in user browser with zero latency input polling.",
      "Networking Layer: AWS Security Groups strictly configured for HTTP (80/5000) and SSH (22) management access.",
      "Compute Layer: Amazon EC2 Linux instance running Flask REST API daemonized with systemd.",
      "Database Layer: Amazon DynamoDB NoSQL table storing PlayerName, GameID, Timestamp, and HighScores with sub-millisecond lookups.",
      "Integration Layer: Secure Boto3 AWS SDK with IAM instance profile ensuring zero hardcoded credentials."
    ],
    features: [
      "Real-time player name, game session ID, and score recording",
      "Dynamic speed adjustment and progressive difficulty scaling",
      "Global leaderboard query with top score ranking",
      "RESTful API endpoints for score submission (/submit-score) and leaderboards (/leaderboard)",
      "Zero hardcoded AWS credentials using IAM role-based authentication",
      "Responsive UI designed for both desktop keyboard and mobile touch controls"
    ],
    challenges: [
      "Securing communication across origins (CORS) between the client browser and the EC2 Flask endpoint.",
      "Ensuring persistent background execution of the Flask server across SSH disconnects using systemd service units.",
      "Optimizing DynamoDB partition key design to prevent hot partition bottlenecks during concurrent score submissions."
    ],
    outcome: [
      "Achieved 99.9% uptime on EC2 with stable systemd-managed process monitoring.",
      "Sub-50ms round-trip latency for score recording and leaderboard queries via DynamoDB.",
      "Successfully demonstrated full-lifecycle cloud deployment from local prototype to cloud production."
    ],
    metrics: [
      { label: "Query Latency", value: "< 45ms" },
      { label: "Deployment", value: "Amazon EC2" },
      { label: "Database", value: "DynamoDB" },
      { label: "Uptime", value: "99.9%" }
    ],
    githubUrl: "https://github.com/Sathishkumar-002",
    architectureType: "Single-Tier Compute + Managed NoSQL Database",
    keyAwsServices: ["EC2", "DynamoDB", "IAM", "VPC Security Groups"]
  },
  {
    id: "two-tier-registration-system",
    title: "Two-Tier Student Registration Portal on AWS EC2",
    subtitle: "Enterprise Registration Architecture with Network Isolation",
    category: "Cloud Infrastructure & Networking",
    tools: ["AWS EC2", "Linux (Ubuntu)", "Python Flask", "Flask-CORS", "HTTP/REST", "SSH Hardening", "HTML/CSS/JS", "systemd"],
    duration: "Academic Project",
    overview: "Designed and implemented a secure two-tier student registration portal hosted on an Amazon EC2 Linux cloud instance, featuring strict network security group hardening, CORS validation, and resilient form processing.",
    problemStatement: "Educational institutions require dependable, scalable, and secure registration portals that eliminate manual processing bottlenecks while isolating application backends from unauthorized public access.",
    solution: "Built a structured two-tier cloud web application with an intuitive student submission interface, decoupled Python Flask processing layer on AWS EC2, and hardened network perimeter using AWS Security Groups and SSH key isolation.",
    architecture: [
      "Tier 1 (Presentation): Modern responsive client interface accepting student credentials, department, and course preferences.",
      "Security Perimeter: AWS Security Group filters allowing only intended HTTP port access while locking SSH management to authorized administrator IPs.",
      "Tier 2 (Application): Python Flask processing engine deployed on Amazon EC2 Linux executing data sanitization and request validation.",
      "Middleware: Flask-CORS handling preflight OPTIONS requests and restricting origins to authorized domains.",
      "Administration: Secured SSH bastion protocol with RSA-4096 key pairs for server maintenance and log analysis."
    ],
    features: [
      "Client-side and server-side dual validation of student records",
      "Dynamic error handling with clear feedback on form submission status",
      "CORS security middleware preventing cross-site scripting vulnerabilities",
      "Automated HTTP response handling with structured JSON payloads",
      "Linux server log auditing for tracing submission anomalies",
      "Production-ready deployment using Linux service daemons"
    ],
    challenges: [
      "Configuring AWS Security Group ingress/egress rules to prevent unnecessary port exposure while enabling application traffic.",
      "Debugging CORS preflight request headers between different browser origins and the EC2 Flask API.",
      "Handling concurrent form submissions without memory leaks on entry-level EC2 instances."
    ],
    outcome: [
      "Zero form submission dropouts during simulated testing scenarios.",
      "Reduced processing overhead with asynchronous frontend-to-backend API communication.",
      "Implemented production-grade Linux server management and AWS infrastructure practices."
    ],
    metrics: [
      { label: "Form Processing", value: "100% Verified" },
      { label: "Security Group", value: "Hardened" },
      { label: "Server OS", value: "Ubuntu Linux" },
      { label: "Architecture", value: "Two-Tier" }
    ],
    githubUrl: "https://github.com/Sathishkumar-002/cloud-student-registration-portal",
    architectureType: "Decoupled Two-Tier Cloud Architecture",
    keyAwsServices: ["EC2", "VPC", "Security Groups", "IAM"]
  }
];

export const EXPERIENCE = [
  {
    id: "login360-intern",
    role: "Cloud & DevOps Intern",
    company: "Login 360",
    location: "Chennai, Tamil Nadu, India",
    period: "Jun 2026 - Oct 2026",
    badge: "Completed Internship",
    description: "Hands-on engineering internship focused on architecting, deploying, and managing scalable cloud applications on Amazon Web Services and automating development workflows.",
    responsibilities: [
      "Developed and deployed production-ready cloud applications on AWS EC2 Linux instances.",
      "Integrated Amazon DynamoDB and developed RESTful APIs in Python Flask for persistent data management.",
      "Configured AWS Security Groups, VPC subnets, and tested secure application connectivity between decoupled frontend and backend layers.",
      "Administered Linux server environments, automating routine maintenance tasks using Bash shell scripts.",
      "Participated in containerizing application components using Docker to ensure environment parity across stages.",
      "Practiced continuous integration concepts using Git version control and Jenkins automated build triggers."
    ],
    skillsApplied: ["AWS EC2", "Amazon DynamoDB", "Python Flask", "Linux Administration", "Security Groups", "REST APIs", "Docker", "Git"]
  },
  {
    id: "hands-on-cloud-practice",
    role: "Hands-on Cloud & DevOps Labs",
    company: "Academic & Self-Directed Labs",
    location: "Chennai, India",
    period: "2023 - Present",
    badge: "Continuous Practical Learning",
    description: "Dedicated practical implementation labs encompassing Infrastructure as Code, CI/CD automation, and container orchestration.",
    responsibilities: [
      "Engineered multi-container deployments using Docker and managed container lifecycle via Docker Compose.",
      "Experimented with Kubernetes fundamentals including Pod deployment manifests, Service definitions, and ClusterIP networking.",
      "Authored Infrastructure as Code templates in Terraform (HCL) to provision AWS VPCs, EC2 instances, and S3 storage automatically.",
      "Built automated CI/CD pipelines in Jenkins and GitHub Actions for continuous code testing and image building.",
      "Configured system monitoring with Prometheus and Grafana dashboards for visualizing server metrics."
    ],
    skillsApplied: ["Kubernetes", "Docker", "Terraform", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Bash"]
  }
];

export const EDUCATION = [
  {
    degree: "B.Sc. in Information Technology",
    institution: "JJ College of Arts and Science / Bharathidasan University",
    location: "Tamil Nadu, India",
    period: "2023 - 2026",
    score: "CGPA: 8.0 / 10",
    highlights: [
      "Core coursework: Cloud Computing, Computer Networks, Operating Systems (Linux/Unix), Database Management Systems, Data Structures & Python Programming.",
      "Developed two major cloud projects on AWS during academic tenure.",
      "Consistent academic performer with strong foundation in computing principles."
    ]
  },
  {
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Government Higher Secondary School",
    location: "Tamil Nadu, India",
    period: "2022 - 2023",
    score: "Percentage: 65%",
    highlights: [
      "Focused on Mathematics, Physics, and Computer Science fundamentals.",
      "Discovered passion for computer networking and software systems."
    ]
  }
];

export const CERTIFICATIONS = [
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2026",
    badgeType: "AWS Certification",
    credentialUrl: "https://aws.amazon.com/verification",
    description: "Validates overall understanding of AWS Cloud platform, core services (Compute, Storage, Database, Networking), security principles, compliance, cloud economics, and billing architecture.",
    skillsCovered: ["AWS Cloud Concepts", "Security & Compliance", "Core AWS Services", "Cloud Economics & Pricing", "Shared Responsibility Model"],
    featured: true,
    verificationCode: "AWS-CCP-VERIFIED"
  },
  {
    id: "aws-training-login360",
    name: "AWS Training & Hands-on Architecture",
    issuer: "Login 360, Chennai",
    issueDate: "2026",
    badgeType: "Professional Training",
    credentialUrl: "#",
    description: "In-depth enterprise training covering AWS Solutions Architecture: VPC design, EC2 scaling, IAM policy authoring, S3 storage tiers, and serverless architectures.",
    skillsCovered: ["VPC Subnetting", "EC2 & Auto Scaling", "IAM JSON Policies", "S3 & CloudFront", "DynamoDB & RDS"],
    featured: true
  },
  {
    id: "devops-training-login360",
    name: "DevOps Engineering & Automation",
    issuer: "Login 360, Chennai",
    issueDate: "2026",
    badgeType: "DevOps Specialization",
    credentialUrl: "#",
    description: "Practical engineering training covering the end-to-end DevOps lifecycle: Linux, Git, Docker containerization, Kubernetes orchestration, Jenkins pipelines, and Terraform IaC.",
    skillsCovered: ["Docker & Multi-Stage Builds", "Kubernetes Deployments", "Jenkins CI/CD Pipelines", "Terraform AWS Automation", "Linux Administration & Bash"],
    featured: true
  }
];

export const TOOLS_LIST = [
  { name: "AWS", category: "Cloud", icon: "Cloud", color: "#FF9900" },
  { name: "Docker", category: "Containers", icon: "Boxes", color: "#2496ED" },
  { name: "Kubernetes", category: "Orchestration", icon: "Cpu", color: "#326CE5" },
  { name: "Terraform", category: "IaC", icon: "Layers", color: "#844FBA" },
  { name: "Jenkins", category: "CI/CD", icon: "GitBranch", color: "#D24939" },
  { name: "GitHub Actions", category: "CI/CD", icon: "GitPullRequest", color: "#2088FF" },
  { name: "Linux", category: "OS", icon: "Terminal", color: "#FCC624" },
  { name: "Bash", category: "Scripting", icon: "Code", color: "#4EAA25" },
  { name: "Python", category: "Language", icon: "Terminal", color: "#3776AB" },
  { name: "Ansible", category: "Automation", icon: "Settings", color: "#EE0000" },
  { name: "Prometheus", category: "Monitoring", icon: "Activity", color: "#E6522C" },
  { name: "Grafana", category: "Visualization", icon: "BarChart3", color: "#F46800" },
  { name: "Git", category: "VCS", icon: "GitFork", color: "#F05032" },
  { name: "GitHub", category: "Platform", icon: "Github", color: "#FFFFFF" },
  { name: "VS Code", category: "IDE", icon: "Laptop", color: "#007ACC" },
  { name: "DynamoDB", category: "Database", icon: "Database", color: "#4053D6" },
];
