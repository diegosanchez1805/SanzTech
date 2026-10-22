"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
  { href: "#contacto", label: "Hablemos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          paddingLeft: "clamp(2.5rem, 7vw, 6rem)",
          paddingRight: "clamp(2.5rem, 7vw, 6rem)",
        }}
      >
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center group py-2">
            <Image
              src="/logo.png"
              alt="SanzTech"
              width={260}
              height={75}
              className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link, idx) => (
              <a
                key={`${link.href}-${idx}`}
                href={link.href}
                className="relative py-2 text-base lg:text-lg font-medium text-white/70 hover:text-white transition-colors duration-300 tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className="py-8 flex flex-col gap-4"
          style={{
            paddingLeft: "clamp(2rem, 6vw, 4rem)",
            paddingRight: "clamp(2rem, 6vw, 4rem)",
          }}
        >
          {navLinks.map((link, idx) => (
            <a
              key={`m-${link.href}-${idx}`}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white/70 hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
