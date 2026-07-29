import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "startup-it-setup",
    icon: "Rocket",
    title: "Business Foundation",
    shortDescription:
      "Domain, professional email, workspace configuration, employee accounts and collaboration tools.",
    category: "foundation",
    problem:
      "New businesses often start with a patchwork of free tools, personal email addresses and no consistent way to manage accounts as the team grows.",
    solution:
      "We set up a complete, professional technology foundation from day one — domain, email, workspace and collaboration tools configured correctly the first time.",
    included: [
      "Domain registration & DNS configuration",
      "Professional business email setup",
      "Google Workspace or Microsoft 365 configuration",
      "Employee account provisioning",
      "Collaboration & file-sharing tools",
      "Baseline security configuration",
    ],
    process: [
      "Understand your team size and workflows",
      "Recommend the right workspace platform",
      "Configure domain, email and accounts",
      "Onboard your team with documentation",
    ],
    benefits: [
      "Professional presence from day one",
      "No technical guesswork",
      "A foundation that scales with you",
    ],
    technologies: ["Google Workspace", "Microsoft 365", "Cloudflare"],
    faqs: [
      {
        question: "How long does initial setup take?",
        answer:
          "Timelines vary by business complexity. We provide a clear project timeline after understanding your requirements.",
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    icon: "Cloud",
    title: "Cloud Infrastructure",
    shortDescription:
      "Cloud servers, application hosting, managed databases, storage, CDN, DNS and SSL.",
    category: "cloud",
    problem:
      "Businesses often outgrow basic hosting or struggle with fragmented cloud services that no one is actively managing.",
    solution:
      "We design, deploy and manage cloud infrastructure sized to your business today, with room to scale as you grow.",
    included: [
      "Cloud server provisioning",
      "Application hosting & deployment",
      "CDN & DNS configuration",
      "SSL certificate management",
      "Performance monitoring",
      "Capacity planning",
    ],
    process: [
      "Assess current infrastructure and requirements",
      "Design an appropriate cloud architecture",
      "Migrate or deploy with minimal disruption",
      "Monitor and optimize on an ongoing basis",
    ],
    benefits: ["Reliable performance", "Infrastructure that scales", "One team responsible for uptime"],
    technologies: ["AWS", "DigitalOcean", "Cloudflare", "Docker"],
    faqs: [
      {
        question: "Can you manage infrastructure we already have?",
        answer:
          "Yes. We start with an infrastructure assessment before proposing any changes or migration.",
      },
    ],
  },
  {
    slug: "application-hosting",
    icon: "Server",
    title: "Application Hosting",
    shortDescription:
      "Reliable, scalable hosting for your business applications — deployed, monitored and kept running.",
    category: "cloud",
    problem:
      "Applications that were fine at launch often start to strain as usage grows — slow performance, occasional downtime, or a deployment process nobody quite trusts anymore.",
    solution:
      "We host and manage your applications on infrastructure sized for how your business actually uses them, with a deployment process that doesn't require crossing your fingers.",
    included: [
      "Application hosting & deployment",
      "Staging and production environments",
      "Zero-downtime release process",
      "Auto-scaling configuration",
      "Uptime & performance monitoring",
      "CDN configuration for faster delivery",
    ],
    process: [
      "Assess your application and current hosting setup",
      "Design a hosting environment sized to your usage",
      "Deploy with a staged, low-risk rollout",
      "Monitor performance and uptime on an ongoing basis",
    ],
    benefits: [
      "Applications that stay fast as usage grows",
      "A deployment process you can trust",
      "One team responsible for uptime",
    ],
    technologies: ["AWS", "DigitalOcean", "Docker", "Cloudflare"],
    faqs: [
      {
        question: "How is this different from Cloud Infrastructure?",
        answer:
          "Cloud Infrastructure covers your broader server, database and storage setup. Application Hosting focuses specifically on how your applications are deployed, scaled and kept running reliably day to day — the two are often managed together.",
      },
    ],
  },
  {
    slug: "business-systems",
    icon: "Users",
    title: "Business Systems",
    shortDescription:
      "Business systems implementation, configuration, customization, hosting, integrations and administration.",
    category: "systems",
    problem:
      "Many growing businesses track customers and deals in spreadsheets or scattered inboxes, causing missed follow-ups and lost visibility.",
    solution:
      "We implement and administer the business systems your team relies on — like your CRM — configured around how your team actually sells and serves customers, integrated with your other business applications.",
    included: [
      "Business system selection guidance",
      "Implementation & configuration",
      "Data migration",
      "Integrations with email and business apps",
      "User training",
      "Ongoing administration",
    ],
    process: [
      "Understand your sales and service workflow",
      "Configure your business systems around that workflow",
      "Migrate existing customer data",
      "Train your team and provide ongoing support",
    ],
    benefits: ["Centralized customer data", "Fewer missed follow-ups", "Reporting you can act on"],
    technologies: ["Google Workspace", "Microsoft 365"],
    faqs: [
      {
        question: "Can you manage our existing business systems?",
        answer:
          "Yes. We can take over administration of your existing CRM or other business applications, fix configuration issues, and manage ongoing changes.",
      },
    ],
  },
  {
    slug: "it-security",
    icon: "ShieldCheck",
    title: "Security & Backup",
    shortDescription:
      "MFA, access control, infrastructure security, automated backups, recovery and monitoring.",
    category: "security",
    problem:
      "Security is often an afterthought for growing businesses — until an account is compromised or data is lost with no backup to restore from.",
    solution:
      "We build security and backup practices into your infrastructure from the start, and monitor them on an ongoing basis.",
    included: [
      "Multi-factor authentication rollout",
      "Role-based access control",
      "Firewall & secure configuration",
      "Automated backup scheduling",
      "Recovery testing",
      "Ongoing monitoring",
    ],
    process: [
      "Assess current security posture",
      "Implement access controls and MFA",
      "Configure automated backups",
      "Monitor and respond proactively",
    ],
    benefits: ["Reduced risk of account compromise", "Recoverable data", "Peace of mind"],
    technologies: ["Google Workspace", "Microsoft 365", "Cloudflare", "AWS"],
    faqs: [
      {
        question: "Do you guarantee against security incidents?",
        answer:
          "No system can guarantee zero incidents. We follow security best practices and monitor proactively to reduce risk and respond quickly.",
      },
    ],
  },
  {
    slug: "website-hosting",
    icon: "Globe",
    title: "Website & Digital Presence",
    shortDescription:
      "Business websites, hosting, SSL, analytics, DNS and business systems lead integration.",
    category: "website",
    problem:
      "A business website is often built once and then neglected — no one is responsible for hosting, security updates or connecting leads into your business systems.",
    solution:
      "We build and manage your website infrastructure, including hosting, SSL, DNS, analytics and lead capture into your business systems.",
    included: [
      "Website hosting & infrastructure",
      "SSL & DNS management",
      "Analytics configuration",
      "Business systems lead integration",
      "Ongoing maintenance",
    ],
    process: [
      "Understand your website and business goals",
      "Configure hosting, DNS and SSL",
      "Connect analytics and lead capture",
      "Maintain and monitor ongoing",
    ],
    benefits: ["A website that stays online and secure", "Leads flow directly into your business systems", "One partner for the whole stack"],
    technologies: ["Cloudflare", "AWS", "DigitalOcean"],
    faqs: [
      {
        question: "Do you build websites too?",
        answer:
          "We focus on the infrastructure, hosting and management behind your website so it stays fast, secure and connected to your business systems.",
      },
    ],
  },
  {
    slug: "employee-it-management",
    icon: "UserCog",
    title: "Employee IT Management",
    shortDescription:
      "Employee onboarding, offboarding, account provisioning, permissions and access management.",
    category: "employee",
    problem:
      "When employees join or leave without a structured process, accounts pile up, permissions go unmanaged, and offboarding gets missed.",
    solution:
      "We manage the full employee IT lifecycle — provisioning accounts on day one and securely removing access when someone leaves.",
    included: [
      "New employee account provisioning",
      "Access & permission management",
      "Device and application setup guidance",
      "Structured offboarding",
      "Access audits",
    ],
    process: [
      "Define standard roles and access levels",
      "Provision accounts for new hires",
      "Manage ongoing permission changes",
      "Execute secure offboarding when needed",
    ],
    benefits: ["Consistent onboarding experience", "No orphaned accounts", "Clear audit trail"],
    technologies: ["Google Workspace", "Microsoft 365"],
    faqs: [
      {
        question: "What happens to an employee's data when they leave?",
        answer:
          "We follow a structured offboarding process to secure company data and transfer ownership according to your policies.",
      },
    ],
  },
  {
    slug: "managed-it-services",
    icon: "Headset",
    title: "Managed IT Support",
    shortDescription:
      "Ongoing troubleshooting, infrastructure administration, maintenance and technical assistance.",
    category: "support",
    problem:
      "Small teams often don't know who to call when something breaks — is it the hosting provider, the email provider, or the business systems vendor?",
    solution:
      "We become your single technical point of contact, coordinating across every part of your infrastructure so you don't have to.",
    included: [
      "Ongoing troubleshooting",
      "Infrastructure administration",
      "Scheduled maintenance",
      "Technical assistance for your team",
      "Vendor coordination",
    ],
    process: [
      "Establish support channels and expectations",
      "Monitor infrastructure proactively",
      "Resolve issues as they arise",
      "Report on infrastructure health regularly",
    ],
    benefits: ["One number to call", "Faster issue resolution", "Less time spent coordinating vendors"],
    technologies: ["Google Workspace", "Microsoft 365", "AWS", "Cloudflare"],
    faqs: [
      {
        question: "What are your support hours?",
        answer:
          "Support coverage is defined as part of your service agreement based on your business needs.",
      },
    ],
  },
  {
    slug: "backup-disaster-recovery",
    icon: "DatabaseBackup",
    title: "Business Continuity",
    shortDescription:
      "Backup strategies, recovery planning, infrastructure redundancy and continuity preparation.",
    category: "continuity",
    problem:
      "Many businesses discover they have no reliable backup only after data is already lost.",
    solution:
      "We design and manage backup and disaster recovery strategies so your business can recover quickly from the unexpected.",
    included: [
      "Automated backup strategy",
      "Database backup scheduling",
      "Recovery plan documentation",
      "Periodic recovery testing",
      "Infrastructure redundancy planning",
    ],
    process: [
      "Assess what needs to be backed up and how often",
      "Implement automated backup schedules",
      "Document a clear recovery plan",
      "Test recovery periodically",
    ],
    benefits: ["Confidence your data can be restored", "A documented recovery plan", "Reduced downtime risk"],
    technologies: ["AWS", "DigitalOcean", "PostgreSQL"],
    faqs: [
      {
        question: "How often are backups tested?",
        answer:
          "Testing frequency is defined in your service plan based on how critical the underlying systems are.",
      },
    ],
  },
  {
    slug: "database-management",
    icon: "Database",
    title: "Database Management",
    shortDescription: "Provisioning, tuning, backups and ongoing administration of your business databases.",
    category: "cloud",
    problem:
      "Databases that aren't actively managed accumulate performance issues, unmanaged access, and backup gaps.",
    solution:
      "We provision, tune, secure and back up your databases as part of your managed infrastructure.",
    included: ["Database provisioning", "Performance tuning", "Access control", "Automated backups", "Monitoring"],
    process: ["Assess current database setup", "Provision or migrate as needed", "Configure backups and monitoring", "Maintain ongoing"],
    benefits: ["Reliable performance", "Secure access", "Recoverable data"],
    technologies: ["PostgreSQL", "AWS", "DigitalOcean"],
    faqs: [
      {
        question: "Which databases do you support?",
        answer: "We work primarily with PostgreSQL and other cloud-managed database services depending on your application.",
      },
    ],
  },
  {
    slug: "it-infrastructure-audit",
    icon: "ClipboardCheck",
    title: "IT Infrastructure Audit",
    shortDescription: "A structured assessment of your current technology environment before any changes are made.",
    category: "support",
    problem:
      "Businesses with existing infrastructure often aren't sure what they have, what's at risk, or where to start improving.",
    solution:
      "We audit your current environment — accounts, infrastructure, security and backups — and provide a clear picture before recommending changes.",
    included: ["Account & access inventory", "Infrastructure review", "Security assessment", "Backup review", "Findings report"],
    process: ["Gather access to relevant systems", "Review infrastructure and configuration", "Document findings and risks", "Present recommendations"],
    benefits: ["Clarity on your current environment", "Prioritized recommendations", "A foundation for planning"],
    technologies: ["Google Workspace", "Microsoft 365", "AWS", "Cloudflare"],
    faqs: [
      {
        question: "Does the audit require making changes?",
        answer: "No. The audit is an assessment only. Any changes are proposed separately and require your approval.",
      },
    ],
  },
  {
    slug: "cloud-migration",
    icon: "ArrowUpRight",
    title: "Cloud Migration",
    shortDescription: "Structured migration of existing systems to modern, managed cloud infrastructure.",
    category: "cloud",
    problem:
      "Legacy or ad-hoc infrastructure can become costly and difficult to scale, but migration feels risky without a clear plan.",
    solution:
      "We plan and execute migrations with backups, validation and a controlled cutover to minimize disruption.",
    included: ["Migration planning", "Pre-migration backups", "Staged migration execution", "Validation testing", "Controlled cutover"],
    process: ["Assess source environment", "Plan target architecture", "Migrate in stages with validation", "Cut over and monitor"],
    benefits: ["Modern, scalable infrastructure", "Minimized downtime", "A clear rollback plan"],
    technologies: ["AWS", "DigitalOcean", "Docker", "Cloudflare"],
    faqs: [
      {
        question: "What happens if something goes wrong during migration?",
        answer: "We maintain backups and a rollback plan at every stage to minimize risk during migration.",
      },
    ],
  },
  {
    slug: "business-email-workspace",
    icon: "Mail",
    title: "Business Email & Workspace",
    shortDescription: "Professional email setup and Google Workspace / Microsoft 365 administration.",
    category: "foundation",
    problem:
      "Using personal or free email addresses undermines credibility and makes account management inconsistent as teams grow.",
    solution:
      "We set up and administer professional email and workspace platforms, including security and permission configuration.",
    included: ["Domain-based email setup", "Workspace platform configuration", "Security settings (MFA, SPF/DKIM/DMARC)", "User account administration", "Ongoing support"],
    process: ["Choose the right workspace platform", "Configure domain and email", "Set up accounts and security", "Provide ongoing administration"],
    benefits: ["Professional credibility", "Secure, well-configured email", "Simplified account management"],
    technologies: ["Google Workspace", "Microsoft 365"],
    faqs: [
      {
        question: "Google Workspace or Microsoft 365 — which is better?",
        answer: "It depends on your team's existing tools and preferences. We help you evaluate both and recommend the right fit.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
