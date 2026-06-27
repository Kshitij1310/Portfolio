import {
  Briefcase,
  Code2,
  Database,
  FolderKanban,
  GraduationCap,
  Layout,
  Server,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Optional cover image in /public; falls back to a generated gradient. */
  image?: string;
  /** Tailwind gradient classes used for the fallback cover. */
  gradient: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number; color: string }[];
}

export interface Stat {
  icon: LucideIcon;
  /** Numeric value for the animated counter, or null for a text-only stat. */
  value: number | null;
  decimals?: number;
  suffix?: string;
  /** Shown instead of a number when value is null. */
  display?: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export const profile = {
  name: "Shitij Yadav",
  role: "Frontend Developer",
  tagline:
    "I craft fast, accessible React interfaces with clean architecture — turning designs into scalable, production-grade products.",
  intro:
    "Frontend Developer Intern at SoluLab building production features in React, TypeScript and Tailwind. I care about clean code, smooth UX, and shipping work recruiters and users can feel.",
  location: "Chhattisgarh, India",
  /** Drop a square photo at /public/profile.jpg to replace the initials avatar. */
  avatar: "/profile.jpg",
  initials: "SY",
  floatingTech: ["React", "TypeScript", "Tailwind", "Node.js"],
};

export const socials = {
  email: "shitijyadav56@gmail.com",
  phone: "+91 97549 69133",
  phoneHref: "tel:+919754969133",
  github: "https://github.com/Kshitij1310",
  linkedin: "https://www.linkedin.com/in/shitij-yadav-33956a243/",
};

export const resume = {
  /** Hosted on Google Drive — opens in a new tab. */
  url: "https://drive.google.com/file/d/1ptAKviv-pv9k5NZZcxI29OUqtzNfKNxe/view?usp=drive_link",
  format: "PDF",
  host: "Google Drive",
  updated: "June 2026",
};

export const certificate = {
  /** Internship completion certificate, hosted on Google Drive. */
  url: "https://drive.google.com/file/d/1yY6K1yUS765T9TGkEGlCR7Tg6kFPK38r/view?usp=sharing",
  issuer: "SoluLab",
};

export const stats: Stat[] = [
  {
    icon: Briefcase,
    value: null,
    display: "Intern",
    label: "Frontend Developer @ SoluLab",
  },
  { icon: FolderKanban, value: 5, suffix: "+", label: "Projects Built" },
  { icon: GraduationCap, value: 8.02, decimals: 2, label: "CGPA / 10" },
  { icon: Code2, value: null, display: "React + TS", label: "Core Stack" },
];

export const about = {
  summary:
    "Frontend Developer Intern with hands-on experience building scalable React applications using modular architecture, Zustand state management, and REST API integration. Skilled in Zod validation, Tailwind CSS, and shadcn/ui — passionate about clean code and user-focused development.",
  objective:
    "Seeking a frontend role where I can ship polished, accessible products at scale, deepen my expertise across the React ecosystem, and grow alongside a strong engineering team.",
  education: [
    {
      degree: "B.Tech — Computer Science (Artificial Intelligence)",
      school: "Bhilai Institute of Technology, Durg",
      period: "Nov 2023 – Present",
      detail: "CGPA: 8.02 / 10",
    },
    {
      degree: "Diploma in Civil Engineering",
      school: "Rungta College of Engineering & Technology",
      period: "Nov 2020 – Jun 2023",
      detail: "82.2%",
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", level: 90, color: "#61dafb" },
      { name: "TypeScript", level: 85, color: "#3178c6" },
      { name: "JavaScript", level: 88, color: "#f7df1e" },
      { name: "Tailwind CSS", level: 92, color: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 75, color: "#3c873a" },
      { name: "Express.js", level: 72, color: "#a3b1c2" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [{ name: "MongoDB", level: 70, color: "#4db33d" }],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 85, color: "#f1502f" },
      { name: "GitHub", level: 85, color: "#cbd5e1" },
      { name: "VS Code", level: 90, color: "#3b82f6" },
      { name: "Postman", level: 78, color: "#ff6c37" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "QuickCart",
    tagline: "eCommerce Web Application",
    description:
      "A modular eCommerce platform with product listing, cart management and authentication across 5+ user flows — built for scalability and a frictionless buying experience.",
    tech: ["React", "Zustand", "Zod", "shadcn/ui", "Tailwind"],
    features: [
      "Global cart state with Zustand — zero prop drilling",
      "Type-safe forms via Zod schema validation",
      "Reusable component architecture (~40% less duplicate code)",
      "Authentication and 5+ complete user flows",
    ],
    repoUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    gradient: "from-indigo-500/40 via-violet-500/30 to-fuchsia-500/40",
  },
  {
    title: "FormBuilder",
    tagline: "Dynamic Form Creation Tool",
    description:
      "A client-side form builder with live preview supporting 8+ field types, real-time validation, and persistence — no backend required.",
    tech: ["JavaScript", "React", "Tailwind"],
    features: [
      "8+ configurable field types with live preview",
      "Controlled inputs with real-time error feedback",
      "LocalStorage persistence for session continuity",
      "Fully responsive across mobile, tablet, desktop",
    ],
    repoUrl: "https://github.com/",
    gradient: "from-cyan-500/40 via-sky-500/30 to-blue-500/40",
  },
  {
    title: "TrustRoute",
    tagline: "Risk-Aware Route Navigation",
    description:
      "A safety-focused navigation interface that visualizes risk zones on interactive maps with real-time geolocation and resilient data handling.",
    tech: ["HTML", "CSS", "JavaScript", "Leaflet"],
    features: [
      "Leaflet maps with risk-zone visualization",
      "Real-time geolocation tracking via Geolocation API",
      "Robust JSON parsing and error-state handling",
      "Semantic, accessible markup",
    ],
    repoUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    gradient: "from-emerald-500/40 via-teal-500/30 to-cyan-500/40",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer Intern",
    company: "SoluLab",
    period: "Feb 2026 — Present",
    location: "Remote",
    achievements: [
      "Developing production-grade frontend features on a live client project using React with a modular, reusable component architecture.",
      "Managing server state and caching with TanStack Query; handling global UI state via Zustand to cut unnecessary re-renders.",
      "Integrating REST APIs with structured async flows, loading states, and error boundaries for reliable data handling.",
      "Enforcing type-safe form validation with Zod schemas for secure, predictable user input.",
      "Building responsive, accessible UI with Tailwind CSS and shadcn/ui across all screen sizes.",
      "Collaborating cross-functionally with designers and backend engineers in an agile workflow.",
    ],
  },
];
