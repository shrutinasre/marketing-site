import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    megaMenu: [
      {
        heading: "Business IT",
        items: [
          { label: "Startup IT Setup", href: "/services/startup-it-setup", description: "Your entire IT foundation, from zero." },
          { label: "Business Email", href: "/services/business-email-workspace", description: "Professional email & workspace setup." },
          { label: "Employee IT Management", href: "/services/employee-it-management", description: "Onboarding, offboarding, access." },
          { label: "IT Support", href: "/services/managed-it-services", description: "Ongoing technical support." },
        ],
      },
      {
        heading: "Cloud",
        items: [
          { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure", description: "Servers, hosting & scaling." },
          { label: "Application Hosting", href: "/services/cloud-infrastructure", description: "Reliable hosting for your apps." },
          { label: "Managed Database", href: "/services/database-management", description: "Provisioned, tuned, backed up." },
          { label: "Cloud Storage", href: "/services/cloud-infrastructure", description: "Secure, scalable file storage." },
          { label: "Backup & Recovery", href: "/services/backup-disaster-recovery", description: "Automated backups & recovery plans." },
        ],
      },
      {
        heading: "Business Systems",
        items: [
          { label: "Business Systems", href: "/services/business-systems", description: "Implementation & administration." },
          { label: "Business Applications", href: "/services/business-systems", description: "The tools your team runs on." },
          { label: "Workspace Administration", href: "/services/business-email-workspace", description: "Google Workspace / Microsoft 365." },
          { label: "Integrations", href: "/services/business-systems", description: "Connecting your business systems." },
        ],
      },
      {
        heading: "Security",
        items: [
          { label: "Infrastructure Security", href: "/services/it-security", description: "Access control & secure configuration." },
          { label: "Access Management", href: "/services/employee-it-management", description: "Role-based permissions." },
          { label: "Monitoring", href: "/services/it-security", description: "Proactive infrastructure monitoring." },
          { label: "Backup & Disaster Recovery", href: "/services/backup-disaster-recovery", description: "Plans that hold up under pressure." },
        ],
      },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
