import React, { memo, useRef } from "react";
import projectImg1 from "../assets/images/portfolio-project-dark.webp";
import projectImg2 from "../assets/images/todo-list-project-dark.webp";
import projectImg3 from "../assets/images/Handsign_recognition_project-ml.png";
import projectImg4 from "../assets/images/WeatherWeb-Project.png";
import DecryptedText from "./UX-Components/DecryptedText";

function CursorFollowImage({ src, alt }) {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  const handleMove = (e) => {
    if (!wrapperRef.current || !imgRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const moveX = (x - 0.5) * 24;
    const moveY = (y - 0.5) * 24;

    imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.06)`;
  };

  const handleLeave = () => {
    if (!imgRef.current) return;
    imgRef.current.style.transform = "translate(0px, 0px) scale(1)";
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="overflow-hidden rounded-xl border border-black/10 dark:border-white/15 aspect-video bg-white/60 dark:bg-black/50 backdrop-blur-md"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-200 ease-out"
      />
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Developer Portfolio",
      description:
        "A modern, animated portfolio site showcasing interactive UX components, smooth scrolling, and responsive layouts built with React and Tailwind CSS.",
      image: projectImg1,
      alt: "Developer portfolio preview",
    },
    {
      title: "Todo Application",
      description:
        "A polished task manager with delightful hover interactions, subtle 3D motion, and a clean dark UI focused on usability and clarity.",
      image: projectImg2,
      alt: "Todo application preview",
    },
    {
      title: "Handsign Recognition (ML)",
      description:
        "A real-time Hand Sign / Gesture Recognition project built using Python, OpenCV, and MediaPipe. Detects hand landmarks from webcam feed and recognizes gestures using an ML classifier.",
      image: projectImg3,
      alt: "Handsign recognition preview",
    },
    {
      title: "Weather Forecast WebApp",
      description:
        "A sleek responsive weather app built with TailwindCSS and JavaScript, powered by WeatherAPI.com. Get real-time updates and forecasts for any location worldwide.",
      image: projectImg4,
      alt: "Weather Forecast WebApp",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full pt-20 bg-white dark:bg-black transition-colors duration-300 overflow-hidden"
    >
      {/* CYBER BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {/* HUD grid */}
        <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18] bg-[linear-gradient(rgba(0,0,0,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.14)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* scanlines */}
        <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.10] bg-[linear-gradient(to_bottom,transparent_0px,transparent_6px,rgba(0,0,0,0.25)_7px)] dark:bg-[linear-gradient(to_bottom,transparent_0px,transparent_6px,rgba(255,255,255,0.16)_7px)] bg-[length:100%_8px]" />

        {/* glow blobs */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-black/5 dark:bg-white/10 blur-3xl animate-[pulseGlow_7s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-black/5 dark:bg-white/10 blur-3xl animate-[pulseGlow_8s_ease-in-out_infinite]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-12 max-w-6xl mx-auto w-full px-5 xl:px-20">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-doto uppercase tracking-widest text-black dark:text-white transition-colors duration-300">
            <DecryptedText text="PROJECTS" />
          </h2>
          <p className="text-gray-700 dark:text-white/70 font-poppins-lt mt-2 transition-colors duration-300">
            Featured work — from UI experiments to full web apps.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 pb-16">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                relative min-w-0 rounded-2xl group overflow-hidden
                border border-black/10 dark:border-white/15
                bg-white/70 dark:bg-black/55 backdrop-blur-md
                p-5 md:p-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10
              "
            >
              {/* cyber sweep */}
              <div
                className="
                  pointer-events-none absolute inset-0 opacity-0
                  bg-linear-to-r from-transparent via-white/12 to-transparent
                  -translate-x-full group-hover:translate-x-full
                  group-hover:opacity-100
                  transition-all duration-700
                "
              />

              {/* glow ring */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl opacity-0
                  ring-1 ring-black/10 dark:ring-white/10
                  group-hover:opacity-100
                  group-hover:ring-2 group-hover:ring-black/15 dark:group-hover:ring-white/20
                  transition-all duration-300
                "
              />

              {/* Image */}
              <div className="relative z-10">
                <CursorFollowImage src={project.image} alt={project.alt} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-4 text-lg sm:text-xl font-poppins-med tracking-wide text-black dark:text-white transition-colors duration-300">
                {project.title}
              </h3>

              {/* Desc */}
              <p className="relative z-10 mt-3 text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed transition-colors duration-300">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.07); }
        }
      `}</style>
    </section>
  );
}

export default memo(Projects);
