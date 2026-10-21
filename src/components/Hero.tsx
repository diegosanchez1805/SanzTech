"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs text-white/70 tracking-wider uppercase font-mono">
            Disponible para nuevos proyectos
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 opacity-0 animate-fade-in-up delay-200">
          <span className="block text-white">Creamos</span>
          <span className="block mt-2 bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
            Software
          </span>
          <span className="block mt-2 text-white/40 text-3xl md:text-5xl lg:text-6xl font-light">
            que transforma ideas
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/50 leading-relaxed mb-12 opacity-0 animate-fade-in-up delay-400">
          Soluciones digitales a la medida. Diseñamos y desarrollamos software
          que impulsa tu negocio hacia el futuro.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-600">
          <a
            href="#proyectos"
            className="group px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
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
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
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
