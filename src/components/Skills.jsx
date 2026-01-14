import { memo } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiVite,
} from "react-icons/si";
import DecryptedText from "./UX-Components/DecryptedText";

const SKILLS = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-24 bg-white dark:bg-black transition-colors duration-300 overflow-hidden"
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
      <div className="relative z-10 max-w-6xl mx-auto px-5 xl:px-20">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-doto uppercase tracking-widest text-black dark:text-white transition-colors duration-300">
            <DecryptedText text="SKILLS" />
          </h2>
          <p className="text-gray-700 dark:text-white/70 font-poppins-lt mt-2 transition-colors duration-300">
            Tools & technologies I use to build modern web apps.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((category) => (
            <div
              key={category.title}
              className="
                relative overflow-hidden rounded-2xl group
                border border-black/10 dark:border-white/15
                bg-white/70 dark:bg-black/55 backdrop-blur-md
                p-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10
              "
            >
              {/* cyber sweep */}
              <div
                className="
                  pointer-events-none absolute inset-0 opacity-0
                  bg-gradient-to-r from-transparent via-white/12 to-transparent
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

              <h3 className="relative z-10 text-xl md:text-2xl font-poppins-med text-black dark:text-white mb-5 transition-colors duration-300">
                {category.title}
              </h3>

              <div className="relative z-10 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      cursor-target flex items-center gap-2 px-4 py-2 rounded-xl
                      border border-black/10 dark:border-white/15
                      bg-white/60 dark:bg-black/40
                      text-black dark:text-white/85
                      transition-all duration-300
                      hover:-translate-y-[2px] hover:scale-[1.03]
                      hover:bg-black/5 dark:hover:bg-white/10
                    "
                    aria-label={skill.name}
                    title={skill.name}
                  >
                    <span className="text-lg opacity-90">{skill.icon}</span>
                    <span className="font-poppins text-sm md:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <p className="mt-10 text-gray-600 dark:text-white/55 font-poppins text-sm transition-colors duration-300">
          Always learning — currently improving DSA + full-stack skills.
        </p>
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

export default memo(Skills);
