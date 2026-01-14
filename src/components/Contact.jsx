import React, { memo, useState } from "react";
import DecryptedText from "./UX-Components/DecryptedText";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdContentCopy, MdCheckCircle } from "react-icons/md";

function TypingDots() {
  return (
    <div className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-white/55 font-mono">
      <span>transmitting</span>
      <span className="inline-flex gap-1">
        <span className="dot" />
        <span className="dot delay1" />
        <span className="dot delay2" />
      </span>

      <style>{`
        .dot{
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: rgba(0,0,0,0.55);
          animation: bounce 1s infinite;
        }
        .dark .dot{
          background: rgba(255,255,255,0.6);
        }
        .delay1{ animation-delay: .12s; }
        .delay2{ animation-delay: .24s; }

        @keyframes bounce{
          0%,100%{ transform: translateY(0); opacity:.45; }
          50%{ transform: translateY(-4px); opacity:1; }
        }
      `}</style>
    </div>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "jagz07x@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      window.prompt("Copy email:", email);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const fromEmail = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(`Portfolio Contact - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
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

      <div className="relative z-10 px-5 xl:px-20 mt-12">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-doto uppercase tracking-widest text-black dark:text-white transition-colors duration-300">
              <DecryptedText text="CONTACT" />
            </h2>
            <p className="text-gray-700 dark:text-white/70 font-poppins-lt mt-2 transition-colors duration-300">
              Want to work together or have a question? Let’s talk.
            </p>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-14">
            {/* Left Info Card */}
            <div
              className="
                relative overflow-hidden rounded-2xl group
                border border-black/10 dark:border-white/15
                bg-white/70 dark:bg-black/55 backdrop-blur-md
                p-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10
              "
            >
              {/* Contact animation: radar signal */}
              <div className="pointer-events-none absolute -top-24 -right-24 opacity-60 dark:opacity-70">
                <div className="radar" />
              </div>

              {/* sweep */}
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

              {/* scan overlay inside card */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_bottom,transparent_0px,transparent_8px,rgba(0,0,0,0.4)_9px)] dark:bg-[linear-gradient(to_bottom,transparent_0px,transparent_8px,rgba(255,255,255,0.25)_9px)] bg-[length:100%_10px]" />

              <div className="relative z-10">
                <h3 className="text-xl font-poppins-med text-black dark:text-white transition-colors duration-300">
                  Get in touch
                </h3>

                <p className="mt-2 text-gray-700 dark:text-white/70 font-poppins-lt text-sm md:text-base transition-colors duration-300 leading-relaxed">
                  I’m open to internships, freelance work, and collaborations. You can
                  contact me directly using the form or email/socials below.
                </p>

                {/* Email */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="p-2 rounded-xl border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/40">
                    <MdEmail className="text-black dark:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 dark:text-white/60 font-poppins transition-colors duration-300">
                      Email
                    </span>
                    <span className="text-sm md:text-base text-black dark:text-white font-poppins-med transition-colors duration-300">
                      {email}
                    </span>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="
                    mt-4 cursor-target inline-flex items-center gap-2 rounded-xl
                    border border-black/10 dark:border-white/15
                    bg-white/60 dark:bg-black/40 backdrop-blur-md
                    px-4 py-2 text-sm text-black dark:text-white/85
                    hover:-translate-y-[1px] hover:bg-black/5 dark:hover:bg-white/10
                    transition-all duration-300
                  "
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <MdCheckCircle />
                      Copied
                    </>
                  ) : (
                    <>
                      <MdContentCopy />
                      Copy email
                    </>
                  )}
                </button>

                {/* Socials */}
                <div className="mt-8">
                  <p className="text-xs text-gray-600 dark:text-white/60 font-poppins mb-3 transition-colors duration-300">
                    Socials
                  </p>

                  <div className="flex gap-3 text-xl">
                    <a
                      className="
                        cursor-target p-3 rounded-xl
                        border border-black/10 dark:border-white/15
                        bg-white/60 dark:bg-black/40
                        text-black dark:text-white/85
                        hover:-translate-y- hover:bg-black/5 dark:hover:bg-white/10
                        transition-all duration-300
                      "
                      href="https://www.linkedin.com/in/jagadesh-waran-g-17aa33342/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit GitHub"
                    >
                      <FaGithub />
                    </a>

                    <a
                      className="
                        cursor-target p-3 rounded-xl
                        border border-black/10 dark:border-white/15
                        bg-white/60 dark:bg-black/40
                        text-black dark:text-white/85
                        hover:-translate-y- hover:bg-black/5 dark:hover:bg-white/10
                        transition-all duration-300
                      "
                      href="https://www.linkedin.com/in/jagadesh-waran-g-17aa33342/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <form
              onSubmit={handleSubmit}
              className="
                relative overflow-hidden rounded-2xl group
                border border-black/10 dark:border-white/15
                bg-white/70 dark:bg-black/55 backdrop-blur-md
                p-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10
              "
            >
              {/* sweep */}
              <div
                className="
                  pointer-events-none absolute inset-0 opacity-0
                  bg-gradient-to-r from-transparent via-white/12 to-transparent
                  -translate-x-full group-hover:translate-x-full
                  group-hover:opacity-100
                  transition-all duration-700
                "
              />

              {/* scan overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_bottom,transparent_0px,transparent_8px,rgba(0,0,0,0.4)_9px)] dark:bg-[linear-gradient(to_bottom,transparent_0px,transparent_8px,rgba(255,255,255,0.25)_9px)] bg-[length:100%_10px]" />

              <div className="relative z-10">
                <h3 className="text-xl font-poppins-med text-black dark:text-white transition-colors duration-300">
                  Send a message
                </h3>

                {/* typing dots animation */}
                <div className="mt-2">
                  <TypingDots />
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs text-gray-600 dark:text-white/60 font-poppins transition-colors duration-300">
                      Your Name
                    </label>
                    <input
                      name="name"
                      required
                      className="
                        w-full mt-2 rounded-xl px-4 py-3 text-sm outline-none
                        border border-black/10 dark:border-white/15
                        bg-white/60 dark:bg-black/40 backdrop-blur-md
                        text-black dark:text-white/85
                        focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                        transition
                      "
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-white/60 font-poppins transition-colors duration-300">
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="
                        w-full mt-2 rounded-xl px-4 py-3 text-sm outline-none
                        border border-black/10 dark:border-white/15
                        bg-white/60 dark:bg-black/40 backdrop-blur-md
                        text-black dark:text-white/85
                        focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                        transition
                      "
                      placeholder="yourmail@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-white/60 font-poppins transition-colors duration-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="
                        w-full mt-2 rounded-xl px-4 py-3 text-sm outline-none resize-none
                        border border-black/10 dark:border-white/15
                        bg-white/60 dark:bg-black/40 backdrop-blur-md
                        text-black dark:text-white/85
                        focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                        transition
                      "
                      placeholder="Type your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      cursor-target w-full rounded-xl px-4 py-3 font-poppins-med
                      bg-black text-white dark:bg-white dark:text-black
                      hover:opacity-90 transition
                    "
                  >
                    Send Message
                  </button>

                  <p className="text-[10px] text-gray-600 dark:text-white/55 font-poppins text-center transition-colors duration-300">
                    This form opens your email client.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* Footer */}
          <p className="mt-10 text-center text-xs text-gray-600 dark:text-white/50 font-poppins transition-colors duration-300">
            © {new Date().getFullYear()} Jagz.in — Built with React + Tailwind.
          </p>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.07); }
        }

        /* radar pulse animation */
        .radar {
          width: 260px;
          height: 260px;
          border-radius: 999px;
          position: relative;
          border: 1px solid rgba(0,0,0,0.12);
          background: radial-gradient(circle at center, rgba(0,0,0,0.10), transparent 60%);
          animation: radarSpin 7s linear infinite;
          overflow: hidden;
        }
        .dark .radar {
          border: 1px solid rgba(255,255,255,0.16);
          background: radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%);
        }

        .radar::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 260deg,
            rgba(0,0,0,0.12) 320deg,
            rgba(0,0,0,0.0) 360deg
          );
        }
        .dark .radar::before {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 260deg,
            rgba(255,255,255,0.12) 320deg,
            rgba(255,255,255,0.0) 360deg
          );
        }

        .radar::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 999px;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
        }
        .dark .radar::after {
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
        }

        @keyframes radarSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default memo(Contact);
