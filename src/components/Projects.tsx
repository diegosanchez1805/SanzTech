"use client";

import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Finanzas Personales",
    category: "Aplicación Web",
    description:
      "Control de ingresos, gastos y presupuestos con carteras, pagos recurrentes, metas de ahorro y gráficas mensuales.",
    tech: ["React", "Firebase", "Chart.js"],
    year: "2026",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Apuntes App",
    category: "Aplicación Web",
    description:
      "Organizador de apuntes por materia con editor Markdown, fórmulas, diagramas, búsqueda global y flashcards para repasar.",
    tech: ["React", "TypeScript", "Mermaid"],
    year: "2026",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "THOR GYM",
    category: "Software a la Medida",
    description:
      "Control de acceso y gestión de socios: check-in por código o lector QR, alertas de vencimiento y funcionamiento offline.",
    tech: ["JavaScript", "HTML", "CSS"],
    year: "2026",
    color: "from-orange-500/20 to-rose-500/20",
  },
  {
    id: 4,
    title: "CaféUCOL",
    category: "App Web Progresiva",
    description:
      "Pedidos anticipados en la cafetería universitaria con horario de recolección, historial y recompensas con CaféCoins.",
    tech: ["React", "Node.js", "Express"],
    year: "2026",
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    id: 5,
    title: "Ruleta de Estudio",
    category: "Aplicación Web",
    description:
      "Ruleta interactiva que elige temas de 24 áreas de ingeniería de software para guiar cada sesión de estudio.",
    tech: ["JavaScript", "Tailwind", "HTML"],
    year: "2026",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 6,
    title: "CV Interactivo",
    category: "Sitio Web",
    description:
      "Portafolio personal con animaciones al hacer scroll, efecto de escritura y fondo de partículas.",
    tech: ["TypeScript", "GSAP", "Vite"],
    year: "2026",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
];

export default function Projects() {
  const { ref: titleRef, isVisible: titleVisible } = useReveal();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="proyectos"
      className="relative section-y"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] max-w-full h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`reveal ${titleVisible ? "visible" : ""} mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8`}
        >
          <div>
            <p className="flex items-center gap-3 text-xs md:text-sm tracking-[0.3em] uppercase text-white/40 font-mono mb-5">
              <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              Portafolio
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-white">Proyectos</span>
              <br />
              <span className="text-white/40">destacados</span>
            </h2>
          </div>
          <p className="max-w-md text-base md:text-lg text-white/50 leading-relaxed text-pretty">
            Una selección de nuestros trabajos más recientes: aplicaciones web,
            software a la medida y herramientas creadas desde cero.
          </p>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-4 md:gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredId === project.id}
              anyHovered={hoveredId !== null}
              onHover={() => setHoveredId(project.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isHovered,
  anyHovered,
  onHover,
  onLeave,
}: {
  project: (typeof projects)[number];
  index: number;
  isHovered: boolean;
  anyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onFocus={onHover}
        onBlur={onLeave}
        tabIndex={0}
        className={`card-sheen group relative overflow-hidden p-7 sm:p-8 md:p-10 lg:p-12 rounded-3xl border transition-all duration-500 ${
          isHovered
            ? "bg-white/[0.05] border-white/20 scale-[1.01] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]"
            : anyHovered
              ? "bg-transparent border-white/5 opacity-40"
              : "bg-white/[0.02] border-white/10 hover:border-white/20"
        }`}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          {/* Number */}
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/[0.08] group-hover:text-white/20 transition-colors duration-500 font-mono tabular-nums leading-none shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs md:text-sm font-mono text-white/40 tracking-wider uppercase">
                {project.category}
              </span>
              <span className="text-xs text-white/20">•</span>
              <span className="text-xs md:text-sm font-mono text-white/30">
                {project.year}
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight text-balance">
              {project.title}
            </h3>
            <p
              className={`text-base md:text-lg text-white/50 leading-relaxed text-pretty max-w-2xl transition-all duration-500 ${
                isHovered
                  ? "opacity-100 max-h-40 mt-4"
                  : "opacity-100 max-h-40 mt-4 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:mt-0"
              } overflow-hidden`}
            >
              {project.description}
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap lg:flex-nowrap gap-2.5 md:max-w-[16rem] lg:max-w-none shrink-0">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 text-xs md:text-sm font-mono text-white/40 bg-white/5 rounded-full border border-white/10 whitespace-nowrap group-hover:border-white/20 group-hover:text-white/70 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Gradient accent on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
        />
      </div>
    </div>
  );
}
