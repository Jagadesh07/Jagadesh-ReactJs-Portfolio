import { lazy, Suspense, useEffect } from "react";

// ✅ Load critical above-the-fold section normally
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// ✅ Lazy load below-the-fold sections
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  // Optional: smooth scroll / performance friendly
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />
      <Hero />

      <Suspense
        fallback={
          <div className="py-10 text-center opacity-70">
            Loading content...
          </div>
        }
      >
        <main>
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </Suspense>
    </div>
  );
}
