"use client";

import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Desarrollo Web",
    description:
      "Plataforma de comercio electrónico con gestión de inventario, pagos y analítica en tiempo real.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    year: "2024",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "App de Gestión Empresarial",
    category: "Software a la Medida",
    description:
      "Sistema ERP completo para automatizar procesos internos, facturación y reportes financieros.",
    tech: ["React", "Node.js", "MongoDB"],
    year: "2024",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    category: "Aplicación Web",
    description:
      "Panel de control interactivo con visualizaciones de datos en tiempo real y reportes automatizados.",
    tech: ["TypeScript", "D3.js", "Firebase"],
    year: "2023",
    color: "from-orange-500/20 to-rose-500/20",
  },
  {
    id: 4,
    title: "App Móvil Delivery",
    category: "App Móvil",
    description:
      "Aplicación de entregas con tracking en tiempo real, notificaciones push y sistema de valoraciones.",
    tech: ["React Native", "Express", "Redis"],
    year: "2023",
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
];

export default function Projects() {
  const { ref: titleRef, isVisible: titleVisible } = useReveal();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="proyectos"
      className="relative"
      style={{
        paddingTop: "clamp(5rem, 10vh, 8rem)",
        paddingBottom: "clamp(4rem, 8vh, 6rem)",
        paddingLeft: "clamp(3rem, 8vw, 8rem)",
        paddingRight: "clamp(3rem, 8vw, 8rem)",
      }}
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`reveal ${titleVisible ? "visible" : ""} mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8`}
        >
          <div>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/40 font-mono mb-4">
              Portafolio
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-white">Proyectos</span>
              <br />
              <span className="text-white/40">destacados</span>
            </h2>
          </div>
          <p className="max-w-md text-base md:text-lg text-white/50 leading-relaxed">
            Una selección de nuestros trabajos más recientes que demuestran
            nuestra capacidad de crear soluciones impactantes.
          </p>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-5 md:gap-7">
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
        className={`group relative p-8 md:p-10 lg:p-12 rounded-2xl border transition-all duration-500 cursor-pointer ${
          isHovered
            ? "bg-white/[0.05] border-white/20 scale-[1.01] shadow-2xl"
            : anyHovered
              ? "bg-transparent border-white/5 opacity-40"
              : "bg-white/[0.02] border-white/10 hover:border-white/20"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
          {/* Number */}
          <span className="text-6xl md:text-8xl font-bold text-white/[0.08] group-hover:text-white/20 transition-colors duration-500 font-mono shrink-0">
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
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p
              className={`text-base md:text-lg text-white/50 leading-relaxed max-w-2xl transition-all duration-500 ${
                isHovered
                  ? "opacity-100 max-h-24"
                  : "opacity-0 max-h-0 md:opacity-0"
              } overflow-hidden`}
            >
              {project.description}
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap md:flex-nowrap gap-3 shrink-0">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 text-xs md:text-sm font-mono text-white/40 bg-white/5 rounded-full border border-white/10 whitespace-nowrap group-hover:border-white/20 group-hover:text-white/70 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <div className="hidden md:block shrink-0">
            <svg
              className={`w-7 h-7 text-white/30 group-hover:text-white transition-all duration-300 ${
                isHovered ? "translate-x-1.5 -translate-y-1.5 scale-110" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
        </div>

        {/* Gradient accent on hover */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
        />
      </div>
    </div>
  );
}
