"use client";

import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías del mercado.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas y multiplataforma que ofrecen experiencias excepcionales a los usuarios.",
    tags: ["React Native", "Flutter", "iOS/Android"],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    title: "Backend & APIs",
    description:
      "Infraestructura robusta, APIs RESTful y arquitecturas de microservicios que escalan con tu negocio.",
    tags: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Software a la Medida",
    description:
      "Soluciones personalizadas que se adaptan perfectamente a los procesos únicos de tu empresa.",
    tags: ["ERP", "CRM", "Automatización"],
  },
];

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useReveal();

  return (
    <section id="servicios" className="relative py-32 px-6 md:px-12">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`reveal ${titleVisible ? "visible" : ""} mb-20`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-mono mb-4">
            Nuestros servicios
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Lo que</span>
            <br />
            <span className="text-white/40">hacemos mejor</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const { ref, isVisible } = useReveal(0.15);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} group relative`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 mb-6">
          {service.icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono text-white/30 bg-white/5 rounded-full border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover arrow */}
        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <svg
            className="w-5 h-5 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
