import { useState, memo } from "react";
import { FaMoon, FaSun, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import DecryptedText from "./UX-Components/DecryptedText";
import TargetCursor from "./UX-Components/TargetCursor";
import { useDarkMode } from "../contexts/DarkModeContext";

function Navbar() {
  const [hidden, setHidden] = useState("-left-full");
  const { isDark, toggleDarkMode } = useDarkMode();

  const isOpen = hidden === "left-0";

  const closeSidebar = () => setHidden("-left-full");
  const toggleSidebar = () =>
    setHidden(hidden === "-left-full" ? "left-0" : "-left-full");

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[999] transition-colors duration-300"
      aria-label="Main navigation"
    >
      {/* TOP BAR */}
      <div
        className="
          relative w-full
          bg-white/70 dark:bg-black/55 backdrop-blur-md
          border-b border-black/10 dark:border-white/10
          transition-colors duration-300
        "
      >
        {/* HUD overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.09] dark:opacity-[0.14] bg-[linear-gradient(rgba(0,0,0,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.14)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px]" />
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] bg-[linear-gradient(to_bottom,transparent_0px,transparent_8px,rgba(0,0,0,0.25)_9px)] dark:bg-[linear-gradient(to_bottom,transparent_0px,transparent_8px,rgba(255,255,255,0.16)_9px)] bg-[length:100%_10px]" />
        </div>

        <div className="relative flex justify-between items-center px-5 py-4 max-w-full">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="
              cursor-target
              border border-black/15 dark:border-white/20
              bg-white/60 dark:bg-black/40 backdrop-blur-md
              text-black dark:text-white/85
              p-2 rounded-xl
              hover:-translate-y-[1px] hover:bg-black/5 dark:hover:bg-white/10
              transition-all duration-300
            "
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Logo */}
          <h2 className="font-playwrite text-2xl text-black dark:text-white transition-colors duration-300">
            <DecryptedText
              text="Jagz.in"
              speed={60}
              sequential={true}
              animateOn="hover"
            />
          </h2>

          {/* Menu toggle */}
          <button
            onClick={toggleSidebar}
            className="
              cursor-target
              border border-black/15 dark:border-white/20
              bg-white/60 dark:bg-black/40 backdrop-blur-md
              p-2 rounded-xl
              text-black dark:text-white/85
              hover:-translate-y-[1px] hover:bg-black/5 dark:hover:bg-white/10
              transition-all duration-300
            "
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* SIDEBAR OVERLAY */}
      <div
        className={`
          fixed inset-0 z-[998]
          ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
          transition-opacity duration-300
        `}
        onClick={closeSidebar}
        aria-hidden={!isOpen}
      >
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* SIDEBAR PANEL */}
      <div
        className={`
          ${hidden}
          fixed top-0 bottom-0 w-full sm:w-[480px] z-[999]
          duration-500 ease-in-out
          bg-white/85 dark:bg-black/75 backdrop-blur-xl
          border-r border-black/10 dark:border-white/10
          p-6 flex flex-col justify-between overflow-hidden
        `}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        {/* Cursor */}
        <TargetCursor spinDuration={2} hideDefaultCursor={false} parallaxOn={true} />

        {/* Cyber background inside sidebar */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.10] dark:opacity-[0.16] bg-[linear-gradient(rgba(0,0,0,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.14)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px]" />
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.09] bg-[linear-gradient(to_bottom,transparent_0px,transparent_8px,rgba(0,0,0,0.25)_9px)] dark:bg-[linear-gradient(to_bottom,transparent_0px,transparent_8px,rgba(255,255,255,0.16)_9px)] bg-[length:100%_10px]" />
        </div>

        {/* Top close button row */}
        <div className="relative z-10 flex items-center justify-between">
          <p className="font-mono text-xs text-black/60 dark:text-white/60 tracking-widest">
            MENU • NAVIGATION
          </p>

          <button
            onClick={closeSidebar}
            className="
              cursor-target
              border border-black/15 dark:border-white/20
              bg-white/60 dark:bg-black/40
              text-black dark:text-white/85
              p-2 rounded-xl
              hover:-translate-y-[1px] hover:bg-black/5 dark:hover:bg-white/10
              transition-all duration-300
            "
            aria-label="Close navigation menu"
          >
            <HiX />
          </button>
        </div>

        {/* Links */}
        <nav className="relative z-10 mt-10" aria-label="Site navigation">
          <ul className="flex flex-col gap-4">
            {["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={closeSidebar}
                  className="
                    cursor-target group
                    w-fit block
                    text-2xl md:text-6xl font-doto
                    text-black dark:text-white
                    transition-all duration-300
                  "
                >
                  <span className="relative inline-block">
                    <DecryptedText text={item} />

                    {/* cyber underline */}
                    <span
                      className="
                        absolute -bottom-2 left-0 h-[2px] w-0
                        bg-black/70 dark:bg-white/70
                        group-hover:w-full transition-all duration-300
                      "
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom info */}
        <div className="relative z-10 mt-10 flex justify-between gap-8">
          <div className="flex flex-col gap-2 min-w-0">
            <p className="text-[11px] text-gray-600 dark:text-white/55 font-poppins tracking-widest">
              EMAIL
            </p>

            <p className="text-sm md:text-lg font-poppins-med text-black dark:text-white truncate">
              jagadeshwaran2005@gmail.com
            </p>

            <p className="mt-4 text-[11px] text-gray-600 dark:text-white/55 font-poppins tracking-widest">
              SOCIALS
            </p>

            <div className="flex gap-3 text-xl text-black dark:text-white">
              <a
                href="https://www.linkedin.com/in/jagadesh-waran-g-17aa33342/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="
                  cursor-target p-3 rounded-xl
                  border border-black/15 dark:border-white/20
                  bg-white/60 dark:bg-black/40
                  hover:-translate-y- hover:bg-black/5 dark:hover:bg-white/10
                  transition-all duration-300
                "
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/Jagadesh07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="
                  cursor-target p-3 rounded-xl
                  border border-black/15 dark:border-white/20
                  bg-white/60 dark:bg-black/40
                  hover:-translate-y- hover:bg-black/5 dark:hover:bg-white/10
                  transition-all duration-300
                "
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end">
            <p className="text-[11px] text-gray-600 dark:text-white/55 font-poppins tracking-widest">
              RESUME
            </p>

            <a
              href="/resume.pdf"
              download
              className="
                cursor-target mt-2 text-sm md:text-lg font-poppins-med
                text-black dark:text-white
                hover:underline underline-offset-4
              "
            >
              Download
            </a>
          </div>
        </div>

        {/* subtle sweep bottom */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.07] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.0)_20%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0.0)_85%)]" />
      </div>
    </nav>
  );
}

export default memo(Navbar);
