import {
  Code2,
  Laptop,
  Server,
  Database,
  Cpu,
  Terminal,
  LucideIcon
} from "lucide-react";

export interface ThesisInfo {
  title: string;
  period: string;
  recordsScraped: string;
  r2Score: string;
  mape: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  university: string;
  major: string;
  graduation: string;
  gpa: string;
  maxGpa: string;
  github: string;
  linkedin: string;
  resumeUrl: string; // NEW: path to CV PDF, e.g. "/willy_chairullah_cv.pdf"
  avatarUrl?: string; // path to photo in /public folder, e.g. "/profile.jpg"
  summary: string;
  thesis: ThesisInfo;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  badge?: string;
  stack: string[];
  points: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  type: string;
  badge?: string;
  stack: string[];
  description: string;
  highlights: string[];
  featured: boolean;
  demoUrl?: string; // NEW: leave undefined/omit if no live demo
  repoUrl?: string; // NEW: leave undefined/omit if private/confidential
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  items: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Willy Chairullah",
  title: "Full-Stack Web Developer",
  email: "willy.chairullahfp@gmail.com",
  location: "Bangkalan",
  university: "Universitas Trunojoyo Madura",
  major: "S1 Teknik Informatika (Informatics Engineering)",
  graduation: "Graduated: July 2026",
  gpa: "3.81",
  maxGpa: "4.00",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "/willy_chairullah_cv.pdf", // place the PDF in your /public folder with this exact name
  avatarUrl: "/photo.png", // simpan file foto Anda di folder /public dengan nama ini (misal: /public/photo.jpg)
  summary: "Fresh graduate in Informatics Engineering with hands-on experience building full-stack web applications, including two client ERP systems, a desktop transaction-recording app now in active business use, and a deployed personal finance tracker PWA.",
  thesis: {
    title: "Predicting Used iPhone Market Prices using XGBoost Regression",
    period: "Dec 2025 – Jul 2026",
    recordsScraped: "~11,510 Records",
    r2Score: "0.9933",
    mape: "2.59%",
    description: "Trained regression models on ~11,510 scraped records using feature engineering, 5-Fold Cross Validation, and GridSearchCV hyperparameter tuning."
  }
};

export const experienceData: ExperienceItem[] = [
  {
    role: "Freelance Full-Stack Developer",
    company: "ERP System for Oil Distribution Company",
    period: "Jul 2025 – Nov 2025",
    type: "Freelance Contract · Team of 2",
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    points: [
      "Built a client-facing ERP system on a freelance contract with a 2-person team to manage business operations for an oil distribution company.",
      "Implemented role-based access control (RBAC) so different users had distinct CRUD permissions based on their role."
    ]
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Mini ATM — Money Transfer Recording System",
    period: "Jun 2025",
    type: "Freelance Contract · Team of 2",
    stack: ["React", "Electron", "SQLite"],
    points: [
      "Built a desktop application for a money-transfer counter business, replacing manual, paper-based transaction logging.",
      "Worked across the stack — React UI, Electron packaging for desktop deployment, and SQLite for local data storage.",
      "Now in active daily use by the business to record transfer transactions."
    ]
  },
  {
    role: "Full-Stack Developer (MBKM Internship)",
    company: "Procurement ERP System",
    period: "Feb 2025 – Jun 2025",
    type: "Structured 4-Month Internship Program",
    stack: ["CodeIgniter", "PostgreSQL", "Full-Stack Web"],
    points: [
      "Developed full-stack features from scratch for an internal procurement ERP system, including role-based access control (RBAC) for distinct CRUD permissions.",
      "Completed a structured 4-month internship program (Merdeka Belajar Kampus Merdeka), delivering functional modules on schedule."
    ]
  }
];

// ── Repo / demo link notes ──────────────────────────────────────────────
// - Client projects (Oil ERP, Mini ATM) intentionally have NO repoUrl/demoUrl:
//   these are confidential client codebases. Leaving the field undefined
//   hides the button automatically — do not fill these with fake/placeholder links.
// - Solo projects (Finance Tracker, Page Chatbot, Thesis ML) are yours alone,
//   so their repos are safe to make public. Replace the "TODO" links below
//   with your real GitHub URLs.
// - demoUrl is only set where you confirmed something is actually live.
//   Everything else is left out on purpose — an empty/dead demo link looks
//   worse than no button at all.

export const projectsData: ProjectItem[] = [
  {
    id: "finance-pwa",
    title: "Personal Finance Tracker (PWA)",
    category: "Full-Stack & AI",
    period: "Aug 2026",
    type: "Solo Project",
    badge: "Live PWA",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API", "Vercel"],
    description: "Full-stack Progressive Web App featuring a dashboard with spending charts, budget/category management, and natural-language AI transaction parsing.",
    highlights: [
      "Integrated Gemini API to parse natural-language text into structured transactions.",
      "Extended with 2 bearer-token-secured API endpoints for iPhone Shortcuts integration.",
      "Optimized backend performance using Next.js unstable_cache with tag-based invalidation."
    ],
    featured: true,
    repoUrl: "TODO: https://github.com/willyChairullah/your-finance-tracker-repo",
    // demoUrl: "TODO: add back once redeployed on Vercel"
  },
  {
    id: "page-chatbot",
    title: "Page Chatbot — Chrome Extension",
    category: "AI & Browser Tools",
    period: "Ongoing",
    type: "Solo Project",
    badge: "Daily Browsing Tool",
    stack: ["Manifest V3", "DeepSeek API", "OpenAI Proxy", "JavaScript"],
    description: "Chrome side-panel extension that reads webpage content and streams responses using an LLM via a self-hosted OpenAI-compatible proxy.",
    highlights: [
      "Built side-panel extension with Manifest V3 and streaming LLM responses.",
      "Supports persistent chat threads across browsing sessions.",
      "Self-used daily as an active browsing and research assistant."
    ],
    featured: true,
    repoUrl: "TODO: https://github.com/willyChairullah/your-page-chatbot-repo"
  },
  {
    id: "iphone-price-ml",
    title: "Used iPhone Price Prediction Model",
    category: "AI / Machine Learning",
    period: "Dec 2025 – Jul 2026",
    type: "Undergraduate Thesis",
    badge: "R² = 0.9933",
    stack: ["Python", "XGBoost", "scikit-learn", "pandas", "GridSearchCV"],
    description: "Machine learning regression pipeline predicting used iPhone market prices based on ~11,510 scraped data records.",
    highlights: [
      "Achieved high precision with R² of 0.9933 and MAPE of 2.59%.",
      "Applied advanced feature engineering and 5-Fold GridSearchCV tuning.",
      "Formed the core research of undergraduate thesis in Informatics Engineering."
    ],
    featured: true,
    repoUrl: "TODO: https://github.com/willyChairullah/your-thesis-ml-repo"
  },
  {
    id: "oil-erp",
    title: "Oil Distribution ERP System",
    category: "Enterprise ERP",
    period: "Jul 2025 – Nov 2025",
    type: "Freelance (Team of 2)",
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    description: "Client-facing operational ERP system managing supply logistics, user permissions, and transaction workflows.",
    highlights: [
      "Engineered role-based access control (RBAC) system for operational tiers.",
      "Delivered client-facing modules on a tight freelance schedule."
    ],
    featured: false
    // No repoUrl/demoUrl on purpose — confidential client codebase.
  },
  {
    id: "mini-atm",
    title: "Mini ATM Transaction Recorder",
    category: "Desktop Application",
    period: "Jun 2025",
    type: "Freelance (Team of 2)",
    stack: ["React", "Electron", "SQLite"],
    description: "Cross-platform desktop application replacing manual paper records for a money transfer business counter.",
    highlights: [
      "Packaged with Electron & SQLite for fast, offline-first desktop logging.",
      "Currently in active daily commercial use by the client's business."
    ],
    featured: false
    // No repoUrl/demoUrl on purpose — confidential client codebase.
  },
  {
    id: "procurement-erp",
    title: "Procurement ERP System",
    category: "Enterprise ERP",
    period: "Feb 2025 – Jun 2025",
    type: "MBKM Internship",
    stack: ["PostgreSQL", "Full-Stack Web"],
    description: "Internal procurement management module built during 4-month MBKM Internship program.",
    highlights: [
      "Role-based CRUD permission control for procurement team members.",
      "Delivered all assigned functional modules on schedule."
    ],
    featured: false
    // No repoUrl/demoUrl on purpose — internship codebase, not yours to share.
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "PHP", "Python", "SQL", "HTML", "CSS"]
  },
  {
    name: "Frontend",
    icon: Laptop,
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Electron"]
  },
  {
    name: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "CodeIgniter 3", "REST API Design", "Express.js (Coursework)"]
  },
  {
    name: "Database",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQLite", "Supabase", "MongoDB (Coursework)"]
  },
  {
    name: "AI/ML & Data",
    icon: Cpu,
    items: ["XGBoost", "scikit-learn", "pandas", "Gemini API", "Prompt Engineering"]
  },
  {
    name: "Tools & Platforms",
    icon: Terminal,
    items: ["Git", "GitHub", "Vercel", "Postman", "VS Code"]
  }
];