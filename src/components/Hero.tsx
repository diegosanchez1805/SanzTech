"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasLeftRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.playbackRate = 0.8;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Si el usuario había salido de los límites de la animación y volvió a ella
          if (hasLeftRef.current) {
            hasLeftRef.current = false;
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        } else {
          // El usuario se salió de los límites de la sección de animación
          hasLeftRef.current = true;
          video.pause();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-10 animate-fade-in shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm md:text-base text-white/80 tracking-wider uppercase font-mono">
            Disponible para nuevos proyectos
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-10 opacity-0 animate-fade-in-up delay-200">
          <span className="block text-white">Creamos</span>
          <span className="block mt-3 bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
            Software
          </span>
          <span className="block mt-3 text-white/45 text-3xl md:text-5xl lg:text-6xl font-light">
            que transforma ideas
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed mb-14 opacity-0 animate-fade-in-up delay-400">
          Soluciones digitales a la medida. Diseñamos y desarrollamos software
          que impulsa tu negocio hacia el futuro.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0 animate-fade-in-up delay-600">
          <a
            href="#proyectos"
            className="group w-full sm:w-auto px-10 py-5 bg-white text-black font-semibold text-lg rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            Ver Proyectos
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contacto"
            className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-800">
        <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
