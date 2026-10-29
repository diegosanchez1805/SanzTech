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
      className="relative min-h-[100svh] flex flex-col justify-end items-center overflow-hidden pb-14 sm:pb-16 md:pb-20 pt-24"
    >
      {/* Video Background (positioned higher up so atom & SanzTech logo stay in upper area) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
          style={{ objectPosition: "center 22%" }}
          className="absolute -top-12 sm:-top-20 md:-top-28 left-0 w-full h-[calc(100%+3rem)] sm:h-[calc(100%+5rem)] md:h-[calc(100%+7rem)] object-cover"
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content (compact, sitting cleanly underneath the animation) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-black/60 backdrop-blur-md mb-3.5 animate-fade-in shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative w-2 h-2 bg-emerald-400 rounded-full" />
          </span>
          <span className="text-xs text-white/80 tracking-wider uppercase font-mono">
            Disponible para nuevos proyectos
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-balance mb-3 md:mb-4 opacity-0 animate-fade-in-up delay-200">
          <span className="text-white">Creamos software</span>{" "}
          <span className="text-white/50 font-light">que transforma ideas</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white/60 leading-relaxed text-pretty mb-6 md:mb-7 opacity-0 animate-fade-in-up delay-400">
          Soluciones digitales a la medida. Diseñamos y desarrollamos software
          que impulsa tu negocio hacia el futuro.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 opacity-0 animate-fade-in-up delay-600">
          <a
            href="#proyectos"
            className="group w-full sm:w-auto px-7 py-3 bg-white text-black font-semibold text-sm sm:text-base rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]"
          >
            Ver Proyectos
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            className="w-full sm:w-auto px-7 py-3 border border-white/20 bg-black/30 text-white font-semibold text-sm sm:text-base rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
