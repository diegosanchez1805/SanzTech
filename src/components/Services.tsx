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
    <section
      id="servicios"
      className="relative section-y"
    >
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-transparent to-white/10" />

      <div className="container-x">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`reveal ${titleVisible ? "visible" : ""} mb-16 md:mb-20 lg:mb-24`}
        >
          <p className="flex items-center gap-3 text-xs md:text-sm tracking-[0.3em] uppercase text-white/40 font-mono mb-5">
            <span className="h-px w-8 bg-white/30" aria-hidden="true" />
            Nuestros servicios
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-white">Lo que</span>
            <br />
            <span className="text-white/40">hacemos mejor</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
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
      className={`reveal ${isVisible ? "visible" : ""} group relative h-full`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="card-sheen relative h-full flex flex-col justify-between overflow-hidden p-8 sm:p-10 md:p-12 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]">
        {/* Soft glow on hover */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/[0.04] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div>
          {/* Icon */}
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 mb-8">
            {service.icon}
          </div>

          {/* Content */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
            {service.title}
          </h3>
          <p className="text-base md:text-lg text-white/50 leading-relaxed text-pretty mb-8 max-w-md">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-xs md:text-sm font-mono text-white/50 bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 group-hover:text-white/75 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover arrow */}
        <div className="absolute top-8 right-8 md:top-10 md:right-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0">
          <svg
            className="w-6 h-6 text-white/60"
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
    </div>
  );
}
