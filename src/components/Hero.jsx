import { memo, useEffect, useRef } from "react";

function Hero() {
  const imgRef = useRef(null);
  const rectRef = useRef(null);
  const rafRef = useRef(null);

  // Cache the image rect only when needed
  const updateRect = () => {
    if (!imgRef.current) return;
    rectRef.current = imgRef.current.getBoundingClientRect();
  };

  useEffect(() => {
    const onResize = () => updateRect();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleEnter = () => updateRect();

  const handleMove = (e) => {
    const img = imgRef.current;
    const rect = rectRef.current;
    if (!img || !rect) return;

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 14;
    const rotateX = (0.5 - y) * 14;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      img.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });
  };

  const handleLeave = () => {
    const img = imgRef.current;
    if (!img) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    img.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full pt-20 bg-white dark:bg-black transition-colors duration-300 overflow-hidden"
    >
      {/* BACKGROUND CYBER HUD */}
      <div className="pointer-events-none absolute inset-0">
        {/* HUD grid */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.18] bg-[linear-gradient(rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* glow blobs */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-black/5 dark:bg-white/10 blur-3xl animate-[pulseGlow_7s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-black/5 dark:bg-white/10 blur-3xl animate-[pulseGlow_8s_ease-in-out_infinite]" />

        {/* scanlines */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10] bg-[linear-gradient(to_bottom,transparent_0px,transparent_6px,rgba(0,0,0,0.35)_7px)] dark:bg-[linear-gradient(to_bottom,transparent_0px,transparent_6px,rgba(255,255,255,0.18)_7px)] bg-[length:100%_8px]" />

        {/* moving noise */}
        <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay animate-[noiseMove_6s_linear_infinite] bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 xl:px-20 min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12">
        {/* TEXT */}
        <header className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left">
          {/* terminal label */}
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 dark:border-white/20 bg-black/5 dark:bg-white/5">
            <span className="w-2 h-2 rounded-full bg-black/70 dark:bg-white animate-pulse" />
            <p className="text-[11px] sm:text-xs font-poppins-med tracking-widest text-black/70 dark:text-white/80">
              SYSTEM ONLINE • USER AUTHORIZED
            </p>
          </div>

          {/* glitch title */}
          <h1 className="relative text-3xl sm:text-4xl xl:text-5xl font-doto uppercase tracking-widest text-black dark:text-white animate-[fadeUp_0.9s_ease-out]">
            <span className="glitch" data-text="JAGADESH WARAN">
              JAGADESH WARAN
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base xl:text-lg font-poppins-lt text-gray-700 dark:text-white/75 transition-colors duration-300 animate-[fadeUp_1.1s_ease-out]">
            aspiring software engineer • frontend developer
          </p>

          {/* terminal style */}
          <div className="mt-5 w-full max-w-xl rounded-2xl border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/50 backdrop-blur-md p-4 animate-[fadeUp_1.25s_ease-out]">
            <p className="font-mono text-xs sm:text-sm text-black/70 dark:text-white/85 leading-relaxed">
              <span className="text-black/70 dark:text-white">$</span>{" "}
              I build clean, responsive web experiences with modern UI,
              animations, and performance in mind.
              <span className="terminalCursor">█</span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start animate-[fadeUp_1.4s_ease-out]">
            <a
              href="#projects"
              className="cursor-target px-6 py-2.5 rounded-xl text-sm font-poppins-med
              bg-black text-white dark:bg-white dark:text-black
              shadow-md shadow-black/10 dark:shadow-white/10
              hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="cursor-target px-6 py-2.5 rounded-xl text-sm font-poppins-med
              border border-black/25 dark:border-white/25
              text-black dark:text-white
              hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              Contact
            </a>
          </div>
        </header>

        {/* IMAGE + GLOBE */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
          <div className="relative w-[260px] sm:w-[320px] xl:w-[420px]">
            <div className="absolute -top-10 -right-10 sm:-top-14 sm:-right-14 z-0">
              <CyberGlobe />
            </div>

            <div className="relative z-10 animate-[float_4.8s_ease-in-out_infinite]">
              <img
                ref={imgRef}
                src="/mobile-profile-dark.webp"
                alt="Jagadesh Waran - Software Engineer"
                onMouseEnter={handleEnter}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className="
                  w-full rounded-2xl shadow-xl shadow-black/10 dark:shadow-white/10
                  grayscale hover:grayscale-0 transition-all duration-500
                  will-change-transform select-none
                "
                width="420"
                height="520"
                style={{ aspectRatio: "4 / 5", objectFit: "cover" }}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                draggable="false"
              />

              {/* cyber border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-black/10 dark:ring-white/20" />
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition duration-300 ring-2 ring-black/20 dark:ring-white/30 blur-[0.5px]" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function CyberGlobe() {
  return (
    <div className="relative w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] xl:w-[260px] xl:h-[260px]">
      <div className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10 blur-2xl opacity-80" />
      <div className="absolute inset-0 rounded-full border border-black/15 dark:border-white/20 overflow-hidden animate-[globeSpin_10s_linear_infinite]">
        <div className="absolute inset-0 opacity-60 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_10px,rgba(0,0,0,0.22)_11px)] dark:bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_10px,rgba(255,255,255,0.18)_11px)]" />
        <div className="absolute inset-0 opacity-45 bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_14px,rgba(0,0,0,0.20)_15px)] dark:bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_14px,rgba(255,255,255,0.16)_15px)] blur-[0.2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.35)_75%)] dark:bg-[radial-gradient(circle_at_center,transparent_40%,rgba(255,255,255,0.10)_75%)]" />
      </div>

      <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/15 rotate-25 animate-[orbit_6s_linear_infinite]" />

      <span className="cy-node absolute top-[18%] left-[18%]" />
      <span className="cy-node absolute top-[35%] left-[70%]" />
      <span className="cy-node absolute top-[70%] left-[30%]" />
      <span className="cy-node absolute top-[60%] left-[78%]" />

      <div className="absolute inset-0 rounded-full ring-1 ring-black/10 dark:ring-white/15" />

      <style>{`
        @keyframes globeSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit {
          0% { transform: rotate(25deg); }
          100% { transform: rotate(385deg); }
        }
        .cy-node{
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(0,0,0,0.75);
          box-shadow: 0 0 18px rgba(0,0,0,0.25);
          animation: blink 1.8s ease-in-out infinite;
        }
        .dark .cy-node{
          background: rgba(255,255,255,0.9);
          box-shadow: 0 0 18px rgba(255,255,255,0.25);
        }
        @keyframes blink{
          0%, 100% { opacity: 0.35; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.25); }
        }
      `}</style>
    </div>
  );
}

export default memo(Hero);
