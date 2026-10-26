import { useState } from "react";

interface SkillCategory {
  id: string;
  badge: string;
  title: string;
  roleTag: string;
  summary: string;
  items: string[];
  metrics: { label: string; val: string };
  icon: string;
}

const skillData: SkillCategory[] = [
  {
    id: "leadership",
    badge: "Directorate & Governance",
    title: "Executive & Strategy",
    roleTag: "Venture Leadership",
    summary:
      "Directing venture strategy, scaling cross-functional teams, and managing end-to-end product lifecycles with a rigorous focus on sustainable growth.",
    items: [
      "Venture Leadership & Company Roadmapping",
      "Product Strategy & Value Proposition Alignment",
      "Agile / Scrum Operations & Sprint Orchestration",
      "Stakeholder Negotiation & Business Development",
      "Cross-functional Team Mentorship & Culture",
    ],
    metrics: { label: "Execution Velocity", val: "Founder & CEO Momentum" },
    icon: "◈",
  },
  {
    id: "design",
    badge: "User Experience Architecture",
    title: "Product Design & UX",
    roleTag: "Product & UI/UX",
    summary:
      "Designing intuitive digital products grounded in user psychology, rigorous iterative testing, and robust design systems that scale.",
    items: [
      "High-Fidelity Figma Prototyping & Design Systems",
      "Information Architecture & Strategic User Flows",
      "User Research, Usability Testing & Empathy Mapping",
      "Visual Design Principles & Ergonomic Layouts",
      "Organic SEO Strategy & Experience Architecture",
    ],
    metrics: { label: "Design Maturity", val: "High Usability & Retention" },
    icon: "❖",
  },
  {
    id: "technical",
    badge: "Analytics & Engineering",
    title: "Data & Front-end Foundations",
    roleTag: "Data & Tech",
    summary:
      "Analytical problem-solving driven by Python and data pipelines, seamlessly complemented by modern, high-performance front-end architecture.",
    items: [
      "Data Science & Analytical Pipelines with Python",
      "Modern Front-end Development (React, Next.js & TypeScript)",
      "Production Styling with Tailwind CSS & Clean HTML5",
      "Business Intelligence Dashboards & Power BI Analytics",
      "Prompt Engineering & Applied AI Workflow Integration",
    ],
    metrics: { label: "Technical Rigor", val: "Data-Driven Execution" },
    icon: "⬡",
  },
];

export default function SkillsList() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(skillData[0]);

  return (
    <div className="w-full text-left" aria-label="Executive Expertise and Systems">
      {/* Section Header: Fixed Alignment */}
      <div className="space-y-2 mb-10 relative pl-9">
        {/* Decorative line positioned absolutely so it doesn't push the text */}
        <span className="absolute left-0 top-[10px] h-px w-6 bg-[var(--sec)]/60" />
        
        <p className="text-[11px] font-semibold text-[var(--sec)] tracking-[0.25em] uppercase">
          Governance & Competency
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--white)]">
          Core Executive Pillars
        </h2>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Compact Nav Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {skillData.map((category) => {
            const isSelected = activeCategory.id === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`group relative w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 border flex flex-col gap-1.5 overflow-hidden cursor-pointer ${
                  isSelected
                    ? "bg-[#14171c] border-[var(--sec)] shadow-[0_8px_30px_rgba(41,151,159,0.15)] ring-1 ring-[var(--sec)]/30 translate-x-1"
                    : "bg-[#0d0f12]/80 border-zinc-800/80 hover:border-zinc-700 hover:bg-[#12151a]"
                }`}
              >
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--sec)] shadow-[0_0_12px_var(--sec)]" />
                )}

                <div className="flex items-center justify-between">
                  <span className={`text-base font-bold transition-colors ${isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                    {category.title}
                  </span>
                  <span className={`text-sm font-mono ${isSelected ? "text-[var(--sec)]" : "text-zinc-600"}`}>
                    {category.icon}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                    {category.roleTag}
                  </span>
                  <span className={`text-[10px] font-medium transition-opacity ${isSelected ? "text-[var(--sec)] opacity-100" : "opacity-0"}`}>
                    Active View →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Executive Strategic Deck */}
        <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-[#0d0f12] shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Deck Header */}
          <div className="px-8 py-5 bg-[#12151a] border-b border-zinc-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--sec)] font-mono">{activeCategory.icon}</span>
              <span className="text-xs font-mono font-semibold tracking-widest text-zinc-300 uppercase">
                {activeCategory.badge}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/40 border border-zinc-800 text-[10px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>DIRECTORATE_VERIFIED</span>
            </div>
          </div>

          {/* Deck Body */}
          <div className="p-8 space-y-8 flex-1 flex flex-col justify-center">
            <div className="relative pl-5 border-l-2 border-[var(--sec)]">
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
                {activeCategory.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-7 space-y-3">
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                  Strategic Deliverables & Focus
                </h4>
                <ul className="space-y-2.5">
                  {activeCategory.items.map((item, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-zinc-300 flex items-start gap-3">
                      <span className="text-[var(--sec)] mt-0.5 text-xs font-bold">▪</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5">
                <div className="h-full p-5 rounded-xl border border-zinc-800 bg-[#14171c]/90 flex flex-col justify-between space-y-3 shadow-inner relative overflow-hidden group">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[var(--sec)]/5 rounded-full blur-xl pointer-events-none" />
                  
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                      Validated Metric / KPI
                    </span>
                    <div className="text-base md:text-lg font-bold text-white tracking-tight">
                      {activeCategory.metrics.val}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[var(--sec)] uppercase tracking-wider">
                      {activeCategory.metrics.label}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">100%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Deck Footer */}
          <div className="px-8 py-4 bg-[#0a0c0f] border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span className="tracking-wide">AMIRALI MOSAVI — EXECUTIVE PROFILE</span>
            <span className="text-[var(--sec)] tracking-wider">SECURE_SESSION // 2026</span>
          </div>

        </div>

      </div>
    </div>
  );
}
