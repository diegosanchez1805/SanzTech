import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Suspense>
        <Navbar />
      </Suspense>
      <Suspense>
        <Hero />
      </Suspense>
      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <Projects />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
}
