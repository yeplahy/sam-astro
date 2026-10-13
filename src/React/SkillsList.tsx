import { useState } from "react";

interface SkillCategory {
  id: string;
  command: string;
  title: string;
  roleTag: string;
  summary: string;
  items: string[];
  metrics: { label: string; val: string };
}

const skillData: SkillCategory[] = [
  {
    id: "fullstack",
    command: "yeplahy inspect --arch fullstack",
    title: "Full-stack & Architecture",
    roleTag: "System Engineering",
    summary:
      "Scalable web applications, type-safe API layers, and distributed cloud services.",
    items: [
      "Next.js, React, Astro & TypeScript ecosystems",
      "Node.js, Python microservices & asynchronous pipelines",
      "PostgreSQL, SQLite, Supabase & schema migrations",
      "Dockerized deployments, CI/CD automation & edge runtimes",
    ],
    metrics: { label: "Engineered For", val: "Resilience & Zero Latency" },
  },
  {
    id: "design",
    command: "yeplahy inspect --dir design-systems",
    title: "Design & Product Direction",
    roleTag: "Product & UI Engineering",
    summary:
      "Design systems, ergonomic user interfaces, and interaction architecture.",
    items: [
      "Atomic design tokens & scalable component libraries",
      "Figma to production-grade TailwindCSS workflows",
      "WCAG 2.2 AA accessibility-first implementation",
      "Design management methodologies & user experience audits",
    ],
    metrics: { label: "Design Authority", val: "PhD Design Mgmt." },
  },
  {
    id: "bioit",
    command: "yeplahy inspect --lab bio-research",
    title: "Bio-IT & Research Tools",
    roleTag: "Applied Bioinformatics",
    summary:
      "Data pipelines, research automation, and medical platform architectures.",
    items: [
      "Immunology data parsing & analytical pipelines",
      "Python computational workflows for biological datasets",
      "Persian Bio digital infrastructure & enterprise consulting",
      "Specialized scientific data visualization tools",
    ],
    metrics: { label: "Focus Domain", val: "Immunology & Health Tech" },
  },
];

export default function SkillsList() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    skillData[0]
  );

  return (
    <div className="w-full text-left" aria-label="Technical Expertise and Systems">
      <div className="space-y-1 mb-6">
        <p className="text-xs font-mono font-medium text-[var(--sec)] tracking-widest uppercase">
          Capabilities & Toolkit
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--white)]">
          What I Engineer
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Domain Selectors */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
          {skillData.map((category) => {
            const isSelected = activeCategory.id === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isSelected}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex flex-col gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-[#18181b] border-[var(--sec)] shadow-[0_0_24px_rgba(164,118,255,0.14)] ring-1 ring-[var(--sec)]/40"
                    : "bg-[#121214] border-[var(--white-icon-tr)] hover:border-zinc-700 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-semibold tracking-wide ${
                      isSelected ? "text-[var(--white)]" : "text-zinc-300"
                    }`}
                  >
                    {category.title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-zinc-400">
                    {category.roleTag}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-1 leading-relaxed">
                  {category.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Interactive Terminal */}
        <div className="lg:col-span-7 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-[#0c0c0e] shadow-2xl font-mono text-xs min-h-[320px]">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#16161a] border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 inline-block" />
              <span className="ml-2 text-zinc-400 text-[11px]">yeplahy@system:~</span>
            </div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
              zsh session
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-zinc-300">
            <div className="space-y-4">
              {/* Command line invocation */}
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="text-zinc-500 select-none">$</span>
                <span className="text-zinc-100 font-semibold">{activeCategory.command}</span>
              </div>

              {/* Status / Output */}
              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60 text-zinc-300 leading-relaxed text-[12px]">
                <span className="text-[var(--sec)] font-semibold block mb-1">
                  &gt; [domain.overview]
                </span>
                {activeCategory.summary}
              </div>

              {/* Stack items */}
              <div className="space-y-2">
                <span className="text-zinc-500 uppercase text-[10px] tracking-wider block">
                  Executed Competencies:
                </span>
                <ul className="space-y-1.5 pl-1">
                  {activeCategory.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-300">
                      <span className="text-[var(--sec)] select-none">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>status: operational</span>
              </div>
              <div className="text-zinc-400">
                <span>{activeCategory.metrics.label}: </span>
                <strong className="text-zinc-200 font-medium">
                  {activeCategory.metrics.val}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
