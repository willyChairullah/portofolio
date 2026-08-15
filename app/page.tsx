"use client";

import { useState } from "react";
import {
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Bot,
  ShieldCheck,
  Copy,
  Check,
  GraduationCap,
  Download,
  ExternalLink
} from "lucide-react";

function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}
import {
  personalInfo,
  experienceData,
  projectsData,
  skillsCategories,
  ProjectItem,
  ExperienceItem,
  SkillCategory
} from "../data/portfolio";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredProjects: ProjectItem[] = activeFilter === "All"
    ? projectsData
    : activeFilter === "Featured"
      ? projectsData.filter((p: ProjectItem) => p.featured)
      : activeFilter === "AI & ML"
        ? projectsData.filter((p: ProjectItem) => p.category.includes("AI") || p.category.includes("Machine"))
        : activeFilter === "ERP & Desktop"
          ? projectsData.filter((p: ProjectItem) => p.category.includes("ERP") || p.category.includes("Desktop"))
          : projectsData;

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-gray-900 selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-200/70 bg-[#f7f7f5]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-xl text-gray-950">
            WP<span className="text-indigo-600">.</span>
          </a> */}

          <div className="hidden gap-7 text-sm font-medium text-gray-600 md:flex">
            <a href="#about" className="transition hover:text-indigo-600">About</a>
            <a href="#experience" className="transition hover:text-indigo-600">Experience</a>
            <a href="#projects" className="transition hover:text-indigo-600">Projects</a>
            <a href="#skills" className="transition hover:text-indigo-600">Skills</a>
            <a href="#education" className="transition hover:text-indigo-600">Education</a>
            <a href="#contact" className="transition hover:text-indigo-600">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download
              className="hidden items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 transition hover:border-gray-950 hover:bg-gray-50 sm:inline-flex"
            >
              <Download size={16} /> CV
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-600 hover:shadow-indigo-200 hover:shadow-md"
            >
              Let's talk
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="grid-bg relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_.8fr]">
            <div className="fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Seeking Full-Stack Developer Role
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-indigo-600 sm:text-sm">
                {personalInfo.title}
              </p>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-gray-950 sm:text-6xl lg:text-7xl">
                From Business Problems to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Working Software.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Full-stack Web Developer building applications that solve real operational needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  View Work <ArrowUpRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:border-gray-950 hover:bg-gray-50"
                >
                  Contact Me <Mail size={18} />
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:border-gray-950 hover:bg-gray-50"
                >
                  Download CV <Download size={18} />
                </a>
              </div>

              {/* Quick links & socials */}
              <div className="mt-10 flex items-center gap-5 text-gray-500">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Connect:</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-gray-950">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" /></svg>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-gray-950">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05C21.68 8.59 22 11.06 22 14.27V21h-4v-6c0-1.43-.03-3.27-1.99-3.27-2 0-2.31 1.56-2.31 3.17V21h-4V9Z" /></svg>
                </a>
                <a href="#contact" aria-label="Email" className="transition hover:text-gray-950">
                  <Mail size={22} />
                </a>
              </div>
            </div>

            {/* Profile Photo & Overlaid Info */}
            <div className="fade-up flex justify-center lg:justify-end mt-6 lg:mt-8">
              <div className="relative flex w-full max-w-[340px] sm:max-w-[380px] flex-col items-center">
                {/* Soft ambient background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-400/15 to-blue-300/20 blur-3xl -z-10 pointer-events-none" />

                {/* Main Photo Card with Crisp Border & Tighter Framing */}
                <div className="relative w-full overflow-hidden rounded-[2.2rem] bg-[#e4e4e0] border border-gray-300/90 shadow-xl transition duration-500 hover:border-indigo-300 hover:shadow-2xl flex flex-col justify-end min-h-[350px] sm:min-h-[439px]">

                  {/* Top Floating Status Badge (Tighter Corner Gap) */}
                  <div className="absolute top-2.5 right-2.5 z-20">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/60 bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 backdrop-blur-md shadow-xs">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                      </span>
                      Available
                    </div>
                  </div>

                  {/* Photo Display (Fills Card Nicely Without Excessive Top Space) */}
                  <div className="relative flex w-full items-end justify-center pt-4">
                    {personalInfo.avatarUrl ? (
                      <img
                        src={personalInfo.avatarUrl}
                        alt={personalInfo.name}
                        className="relative z-10 max-h-[350px] sm:max-h-[390px] w-auto object-contain object-bottom scale-[1.32] sm:scale-[1.38] origin-bottom translate-y-7 transition duration-500 hover:scale-[1.40]"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.avatar-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}

                    {/* Fallback if image not yet loaded */}
                    <div className={`avatar-fallback ${personalInfo.avatarUrl ? 'hidden' : ''} z-10 flex h-72 w-full flex-col items-center justify-center text-gray-400 text-center p-6`}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white font-extrabold text-2xl shadow-md shadow-indigo-500/25 mb-3">
                        {personalInfo.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase() || "WP"}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">Foto Cutout (Tanpa Background)</span>
                    </div>
                  </div>

                  {/* Dark Gradient Fade Overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950/85 via-gray-950/45 to-transparent z-15 pointer-events-none" />

                  {/* Overlaid Name & Role with Display Font Matching Headline */}
                  <div className="absolute bottom-4 inset-x-0 z-20 text-center px-4">
                    <h3 className="text-lg sm:text-xl font-extrabold tracking-[-0.03em] text-white drop-shadow-md">
                      {personalInfo.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-[11px] font-medium tracking-wider text-indigo-300 uppercase">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>

                {/* Grounding Shadow Underneath the Frame */}
                <div className="mt-2 h-3 w-3/4 rounded-full bg-gray-950/15 blur-md" />
              </div>
            </div>
          </div>
        </section>

        {/* About / Summary Section */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-10 md:grid-cols-[.5fr_1.5fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-indigo-600">01 / About Me</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">Professional Summary</h2>
            </div>

            <div>
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                Fresh graduate in <strong>Informatics Engineering</strong> with hands-on experience building full-stack web applications, including two client ERP systems, a desktop transaction-recording app now in active business use, and a deployed personal finance tracker PWA.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Skilled across the stack from database design to responsive UI, with a track record of shipping features end-to-end in production and client-facing environments. Seeking a <strong>Full-Stack Developer</strong> role to contribute technical execution and continuous learning.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 text-indigo-600"><Layers size={24} /></div>
                  <h4 className="font-semibold text-gray-950">Full-Stack Execution</h4>
                  <p className="mt-1 text-xs text-gray-500">From PostgreSQL schema design to responsive frontend interfaces.</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 text-indigo-600"><ShieldCheck size={24} /></div>
                  <h4 className="font-semibold text-gray-950">RBAC & Enterprise ERP</h4>
                  <p className="mt-1 text-xs text-gray-500">Built multi-role CRUD permission engines for procurement & distribution.</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 text-indigo-600"><Bot size={24} /></div>
                  <h4 className="font-semibold text-gray-950">AI Integrated</h4>
                  <p className="mt-1 text-xs text-gray-500">Built features using Gemini & DeepSeek APIs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="border-t border-gray-200 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[.25em] text-indigo-600">02 / Experience</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                Work Experience & Freelance
              </h2>
              <p className="mt-2 text-base text-gray-600">Production experience in client contracts, team projects, and internship programs.</p>
            </div>

            <div className="relative border-l-2 border-indigo-100 pl-6 sm:pl-10 space-y-12">
              {experienceData.map((exp: ExperienceItem, index: number) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-600 bg-white group-hover:bg-indigo-600 group-hover:text-white transition">
                    <div className="h-2 w-2 rounded-full bg-indigo-600 group-hover:bg-white" />
                  </div>

                  <div className="rounded-3xl border border-gray-200 bg-[#f7f7f5]/50 p-6 sm:p-8 transition hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                          {exp.type}
                        </span>
                        <h3 className="mt-2 text-xl font-bold text-gray-950">{exp.role}</h3>
                        <p className="text-base font-semibold text-indigo-600">{exp.company}</p>
                      </div>

                      <div className="flex flex-col sm:items-end">
                        <span className="text-sm font-semibold text-gray-500">{exp.period}</span>
                        {exp.badge && (
                          <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-semibold text-emerald-800">
                            <CheckCircle2 size={13} /> {exp.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2 text-sm leading-relaxed text-gray-600">
                      {exp.points.map((pt: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-gray-200/60">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-2 self-center">Tech Stack:</span>
                      {exp.stack.map((tech: string) => (
                        <span key={tech} className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Projects Section */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-indigo-600">03 / Portfolio</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-2 text-base text-gray-600">Real production apps, ML thesis models, and browser extensions.</p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 rounded-2xl bg-gray-200/60 p-1.5 text-xs font-semibold">
              {["All", "Featured", "AI & ML", "ERP & Desktop"].map((filter: string) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-4 py-2 transition-all ${activeFilter === filter
                    ? "bg-white text-gray-950 shadow-sm font-bold"
                    : "text-gray-600 hover:text-gray-950"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project: ProjectItem) => {
              const hasLinks = Boolean(project.demoUrl || project.repoUrl);
              return (
                <div
                  key={project.id}
                  className="group flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600">
                        {project.type}
                      </span>
                      {project.badge && (
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-950 group-hover:text-indigo-600 transition">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-gray-400">{project.period}</p>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {project.description}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-gray-100 pt-4">
                      {project.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                      {project.stack.map((tech: string) => (
                        <span key={tech} className="rounded-md bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Demo / Repo buttons — only rendered when a link actually exists.
                        Client/confidential projects (no demoUrl/repoUrl set) simply show no buttons. */}
                    {hasLinks && (
                      <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-gray-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-600"
                          >
                            <ExternalLink size={13} /> Live Demo
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-900 transition hover:border-gray-950"
                          >
                            <GithubIcon size={13} /> View Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="border-t border-gray-200 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[.25em] text-indigo-600">04 / Technical Stack</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                Skills & Technologies
              </h2>
              <p className="mt-2 text-base text-gray-600">Tools and frameworks used across real client projects and engineering coursework.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skillsCategories.map((cat: SkillCategory) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={cat.name}
                    className="rounded-3xl border border-gray-200 bg-[#f7f7f5]/40 p-7 transition hover:border-indigo-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                      <IconComponent size={22} />
                    </div>

                    <h3 className="text-lg font-bold text-gray-950">{cat.name}</h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {cat.items.map((skill: string) => (
                        <span
                          key={skill}
                          className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-2xs transition hover:border-indigo-400 hover:text-indigo-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education & Undergraduate Thesis Section */}
        <section id="education" className="bg-gray-950 text-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[.45fr_1.55fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.25em] text-indigo-400">05 / Education</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Academic Background
                </h2>
              </div>

              <div className="space-y-8">
                {/* UTM Degree Card */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <span className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300">
                        {personalInfo.major}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold">{personalInfo.university}</h3>
                      <p className="text-sm text-gray-400">{personalInfo.graduation}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center sm:text-right">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">GPA Score</p>
                      <p className="text-2xl font-extrabold text-white">{personalInfo.gpa} <span className="text-xs font-normal text-gray-400">/ {personalInfo.maxGpa}</span></p>
                    </div>
                  </div>

                  {/* Thesis Highlight Box */}
                  <div className="mt-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/60 to-purple-950/40 p-6">
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                      <GraduationCap size={18} />
                      Undergraduate Thesis ({personalInfo.thesis.period})
                    </div>

                    <h4 className="mt-2 text-lg font-bold text-white">
                      {personalInfo.thesis.title}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-gray-300">
                      {personalInfo.thesis.description}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 border-t border-indigo-500/20 pt-4">
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400">R² Accuracy Score</p>
                        <p className="text-xl font-black text-emerald-400">{personalInfo.thesis.r2Score}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400">MAPE Error Rate</p>
                        <p className="text-xl font-black text-indigo-300">{personalInfo.thesis.mape}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <p className="text-[10px] font-semibold text-gray-400">Dataset Size</p>
                        <p className="text-xl font-bold text-gray-200">{personalInfo.thesis.recordsScraped}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 p-8 text-white shadow-2xl sm:p-14">
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[.25em] text-indigo-200">06 / Get In Touch</p>

              <div className="mt-4 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div>
                  <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Ready to bring full-stack technical execution to your team.
                  </h2>
                  <p className="mt-5 max-w-xl text-base text-indigo-100 sm:text-lg">
                    Open for Full-Stack Web Developer roles, software engineering positions, and project collaborations.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-gray-950 shadow-lg transition hover:bg-gray-100 hover:scale-105"
                  >
                    <Mail size={18} /> Send Email
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    <Download size={18} /> Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center text-xs text-gray-500">
        <p>© 2026 {personalInfo.name}. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}