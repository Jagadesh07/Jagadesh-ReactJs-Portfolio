import React, { lazy, Suspense, useEffect } from "react";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("App crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white p-6 font-mono">
          <h1 className="text-xl mb-3">⚠️ App crashed</h1>
          <p className="opacity-80 mb-4">
            Check the import paths / default exports of your components.
          </p>
          <pre className="whitespace-pre-wrap text-red-300">
            {String(this.state.error)}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

function SafeLazy(factory, name = "Component") {
  return lazy(async () => {
    try {
      const module = await factory();

      // If module has no default export => throw with helpful error
      if (!module?.default) {
        throw new Error(
          `${name} has no default export. Add: export default ${name}; OR use named export handling.`
        );
      }

      return module;
    } catch (err) {
      console.error(`Failed to load ${name}:`, err);


      return {
        default: function LazyErrorComponent() {
          return (
            <div className="p-6 border border-red-400/40 rounded-xl bg-red-500/10 text-red-200">
              <h2 className="font-mono text-sm mb-2">
                ❌ Failed to load: {name}
              </h2>
              <p className="text-xs opacity-80">
                Check file name + path + export default.
              </p>
              <pre className="text-xs mt-3 whitespace-pre-wrap">
                {String(err)}
              </pre>
            </div>
          );
        },
      };
    }
  });
}


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = SafeLazy(() => import("./components/About"), "About");
const Skills = SafeLazy(() => import("./components/Skills"), "Skills");
const Projects = SafeLazy(() => import("./components/Projects"), "Projects");
const Contact = SafeLazy(() => import("./components/Contact"), "Contact");

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white">
 
        <Navbar />
        <Hero />

        <Suspense
          fallback={
            <div className="py-10 text-center opacity-70 font-mono text-sm">
              Loading sections...
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
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
