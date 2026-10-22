"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div
        className="max-w-7xl mx-auto py-24"
        style={{
          paddingLeft: "clamp(2.5rem, 7vw, 6rem)",
          paddingRight: "clamp(2.5rem, 7vw, 6rem)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="SanzTech"
              width={200}
              height={60}
              className="h-10 md:h-12 w-auto opacity-75 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {["Inicio", "Servicios", "Proyectos", "Contacto"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm md:text-base text-white/50 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/30">
            © {currentYear} SanzTech. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
