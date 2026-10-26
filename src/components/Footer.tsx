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
        className="max-w-7xl mx-auto py-16 md:py-20"
        style={{
          paddingLeft: "clamp(2.5rem, 7vw, 6rem)",
          paddingRight: "clamp(2.5rem, 7vw, 6rem)",
        }}
      >
        {/* Main Footer Row: Logo a la izquierda, Enlaces a la derecha */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo.png"
              alt="SanzTech"
              width={200}
              height={60}
              className="h-10 md:h-12 w-auto opacity-75 hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Links a la derecha */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-10">
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
        </div>

        {/* Fila inferior: Separador y Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© {currentYear} SanzTech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
