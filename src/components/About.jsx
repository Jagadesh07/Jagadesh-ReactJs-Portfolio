import React, { memo } from "react";
import DecryptedText from "./UX-Components/DecryptedText";

const EDUCATION = [
  {
    title: "B.Tech - Computer Science and Business Systems",
    place:
      "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
    year: "2023 – Present",
    grade: "CGPA: 7.28 (3rd Year)",
  },
  {
    title: "12th Standard (HSC)",
    place: "St. Thomas Metric Hr. Secondary School",
    year: "2022 – 2023",
    grade: "Percentage: 84%",
  },
  {
    title: "10th Standard (SSLC)",
    place: "St. Thomas Metric Hr. Secondary School",
    year: "2020 – 2021",
    grade: "",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full snap-start pt-20 bg-white dark:bg-black transition-colors duration-300 overflow-hidden"
    >
      {/* CYBER BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {/* HUD grid */}
        <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18] bg-[linear-gradient(rgba(0,0,0,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.14)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.10] bg-[linear-gradient(to_bottom,transparent_0px,transparent_6px,rgba(0,0,0,0.25)_7px)] dark:bg-[linear-gradient(to_bottom,transparent_0px,transparent_6px,rgba(255,255,255,0.16)_7px)] bg-[length:100%_8px]" />

        {/* Glows */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-black/5 dark:bg-white/10 blur-3xl animate-[pulseGlow_7s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-black/5 dark:bg-white/10 blur-3xl animate-[pulseGlow_8s_ease-in-out_infinite]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* ABOUT */}
        <div className="mt-12 max-w-6xl mx-auto px-5 xl:px-20">
          <div className="mb-6 text-center">
            <h2 className="text-3xl md:text-5xl font-doto uppercase tracking-widest text-black dark:text-white transition-colors duration-300">
              <DecryptedText text="ABOUT" />
            </h2>
            <p className="text-gray-700 dark:text-white/70 font-poppins-lt mt-2 transition-colors duration-300">
              A brief introduction about me.
            </p>
          </div>

          {/* Terminal bio card */}
          <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/55 backdrop-blur-md p-6 shadow-sm">
            <p className="font-mono text-xs sm:text-sm xl:text-base text-black/70 dark:text-white/85 leading-relaxed text-center">
              <span className="text-black/70 dark:text-white">$</span>{" "}
              Hi! I'm an engineering student passionate about technology and creative
              problem-solving. I'm exploring JavaScript and React to build interactive
              web projects, focusing on clean UI and smooth UX. Outside coding, I enjoy
              series, video games, and staying organized with a structured routine.
              <span className="terminalCursor">█</span>
            </p>
          </div>
        </div>

        {/* EDUCATION TIMELINE */}
        <div className="mt-16 px-5 xl:px-20 pb-16">
          <div className="w-full max-w-6xl mx-auto mb-8">
            <h2 className="text-3xl md:text-5xl font-doto uppercase tracking-widest text-black dark:text-white transition-colors duration-300">
              <DecryptedText text="EDUCATION" />
            </h2>
            <p className="text-gray-700 dark:text-white/70 font-poppins-lt mt-2 transition-colors duration-300">
              My academic journey and performance.
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <div className="relative pl-6">
              {/* cyber vertical line */}
              <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-white/15" />

              <div className="space-y-6">
                {EDUCATION.map((item) => (
                  <div
                    key={item.title}
                    className="
                      relative overflow-hidden rounded-2xl group
                      border border-black/10 dark:border-white/15
                      bg-white/70 dark:bg-black/55 backdrop-blur-md
                      p-6 shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10
                    "
                  >
                    {/* Cyber shine sweep */}
                    <div
                      className="
                        pointer-events-none absolute inset-0 opacity-0
                        bg-gradient-to-r from-transparent via-white/12 to-transparent
                        -translate-x-full group-hover:translate-x-full
                        group-hover:opacity-100
                        transition-all duration-700
                      "
                    />

                    {/* Glow ring */}
                    <div
                      className="
                        pointer-events-none absolute inset-0 rounded-2xl opacity-0
                        ring-1 ring-black/10 dark:ring-white/10
                        group-hover:opacity-100
                        group-hover:ring-2 group-hover:ring-black/15 dark:group-hover:ring-white/20
                        transition-all duration-300
                      "
                    />

                    {/* Content */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 relative z-10">
                      <div>
                        <h3 className="text-base sm:text-lg font-poppins-med text-black dark:text-white transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-700 dark:text-white/70 font-poppins-lt transition-colors duration-300">
                          {item.place}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60 font-poppins transition-colors duration-300 whitespace-nowrap">
                          {item.year}
                        </p>

                        {item.grade ? (
                          <p
                            className="
                              mt-1 inline-block text-xs sm:text-sm font-poppins-med
                              text-black dark:text-black
                              px-3 py-1 rounded-full
                              bg-black/10 dark:bg-white
                              group-hover:bg-black/15 dark:group-hover:bg-white/90
                              transition-all duration-300
                            "
                          >
                            {item.grade}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.07); }
        }

        .terminalCursor{
          margin-left: 6px;
          animation: blink 1s infinite;
        }
        @keyframes blink{
          0%,50%{opacity:1}
          51%,100%{opacity:0}
        }
      `}</style>
    </section>
  );
}

export default memo(About);
