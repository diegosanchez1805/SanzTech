"use client";

import { useReveal } from "@/hooks/useReveal";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useReveal();
  const { ref: formRef, isVisible: formVisible } = useReveal(0.1);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email service / API
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contacto"
      className="relative py-48 lg:py-64"
      style={{
        paddingLeft: "clamp(2.5rem, 7vw, 6rem)",
        paddingRight: "clamp(2.5rem, 7vw, 6rem)",
      }}
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side — Info */}
          <div
            ref={titleRef}
            className={`reveal ${titleVisible ? "visible" : ""}`}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-mono mb-4">
              Contacto
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              <span className="text-white">Hablemos de</span>
              <br />
              <span className="text-white/40">tu proyecto</span>
            </h2>
            <p className="text-base text-white/40 leading-relaxed mb-12 max-w-md">
              ¿Tienes una idea en mente? Cuéntanos sobre tu proyecto y
              encontraremos la mejor solución tecnológica para hacerlo realidad.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a
                href="mailto:contacto@sanztech.com"
                className="group flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-white/50 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-white/40 mb-1 font-mono uppercase tracking-wider">Email</p>
                  <p className="text-base md:text-lg text-white/80 group-hover:text-white transition-colors font-medium">
                    contacto@sanztech.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-white/40 mb-1 font-mono uppercase tracking-wider">Ubicación</p>
                  <p className="text-base md:text-lg text-white/80 font-medium">México</p>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-8 flex gap-4">
                {[
                  {
                    label: "GitHub",
                    href: "#",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: "#",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side — Form */}
          <div
            ref={formRef}
            className={`reveal ${formVisible ? "visible" : ""} p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl`}
            style={{ transitionDelay: "200ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-300 text-white/40 ${
                    focused === "name" || formState.name
                      ? "text-xs -top-5 text-white/60"
                      : "text-base top-4"
                  }`}
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full bg-transparent border-b border-white/15 focus:border-white py-4 text-white text-base md:text-lg outline-none transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-300 text-white/40 ${
                    focused === "email" || formState.email
                      ? "text-xs -top-5 text-white/60"
                      : "text-base top-4"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full bg-transparent border-b border-white/15 focus:border-white py-4 text-white text-base md:text-lg outline-none transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-300 text-white/40 ${
                    focused === "message" || formState.message
                      ? "text-xs -top-5 text-white/60"
                      : "text-base top-4"
                  }`}
                >
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/15 focus:border-white py-4 text-white text-base md:text-lg outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className={`group w-full py-5 px-10 rounded-full font-semibold text-base md:text-lg transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(255,255,255,0.15)] ${
                    submitted
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {submitted ? (
                    <>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      ¡Mensaje enviado!
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
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
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
