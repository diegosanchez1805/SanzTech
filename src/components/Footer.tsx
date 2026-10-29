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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
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
          <nav aria-label="Pie de página" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-10">
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

          {/* Copyright */}
          <p className="text-sm text-white/30 text-center md:text-right">
            © {currentYear} SanzTech. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
