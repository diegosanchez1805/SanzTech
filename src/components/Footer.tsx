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
      <div className="container-x py-16 md:py-20">
        {/* Main Footer Row: Logo a la izquierda, Enlaces a la derecha */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center rounded-lg" aria-label="SanzTech — Inicio">
            <Image
              src="/logo.png"
              alt="SanzTech"
              width={200}
              height={60}
              className="h-10 md:h-12 w-auto opacity-75 hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Links a la derecha */}
          <nav aria-label="Pie de página" className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3 md:gap-10">
            {["Inicio", "Servicios", "Proyectos", "Contacto"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm md:text-base text-white/50 hover:text-white transition-colors rounded-md"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Fila inferior: Separador y Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© {currentYear} SanzTech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
