import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SanzTech — Soluciones de Software a la Medida",
  description:
    "Desarrollo de software personalizado, aplicaciones web y móviles. Transformamos tus ideas en tecnología.",
  keywords: [
    "software",
    "desarrollo",
    "aplicaciones",
    "web",
    "móvil",
    "SanzTech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="noise-bg">{children}</body>
    </html>
  );
}
