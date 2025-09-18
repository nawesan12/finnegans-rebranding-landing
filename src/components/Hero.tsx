"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [hoveringWord, setHoveringWord] = useState(false);
  const [activeSyl, setActiveSyl] = useState<null | "in" | "vi" | "ta" | "mos">(
    null,
  );
  const [bubbleX, setBubbleX] = useState<number | null>(null);

  const containerRef = useRef<HTMLSpanElement | null>(null);
  const sylRefs = {
    in: useRef<HTMLSpanElement | null>(null),
    vi: useRef<HTMLSpanElement | null>(null),
    ta: useRef<HTMLSpanElement | null>(null),
    mos: useRef<HTMLSpanElement | null>(null),
  };

  function updateBubbleX(s: "in" | "vi" | "ta" | "mos") {
    const c = containerRef.current;
    const r = sylRefs[s].current;
    if (!c || !r) return;
    // center X of syllable relative to the container
    const x = r.offsetLeft + r.offsetWidth / 2;
    setBubbleX(x);
  }

  // keep position correct on resize (if still hovering a syllable)
  useEffect(() => {
    const onResize = () => {
      if (activeSyl) updateBubbleX(activeSyl);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeSyl]);

  return (
    <section
      id="home"
      className="relative z-40 h-svh bg-[url('/header-mobile.png')] md:bg-[url('/Foto-Header.png')] bg-cover bg-right bg-no-repeat"
    >
      <div className="mx-auto flex h-svh min-h-[700px] max-w-7xl flex-col justify-around lg:justify-evenly py-6 px-6 lg:px-0 relative md:-top-6">
        {/* Header */}
        <motion.header
          className="w-full relative top-12 md:top-14 2xl:top-20 px-2"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between text-white">
            <a
              href="/"
              className="z-50 text-4xl font-semibold md:text-5xl relative md:-left-2 md:bottom-2"
            >
              <img
                src="/finnegans-blanco.png"
                className="aspect-auto h-10 lg:h-16"
                alt=""
              />
            </a>

            {/* Desktop Nav */}
            <motion.nav
              className="hidden items-center space-x-6 md:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#" aria-label="LinkedIn">
                <img
                  src="/Linkedin.svg"
                  className="size-8 drop-shadow-x relative bottom-px"
                  alt=""
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="/Instagram.svg"
                  className="size-6 drop-shadow-xl"
                  alt=""
                />
              </a>
            </motion.nav>

            {/* Hamburger Button */}
            {/*<button
              onClick={() => setMenuOpen(!menuOpen)}
              id="menu-btn"
              className={`hamburger z-50 block md:hidden focus:outline-none ${menuOpen ? "open" : ""}`}
              type="button"
              aria-label="Toggle Menu"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>*/}
          </div>
        </motion.header>

        {/*
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="menu"
              className="fixed inset-0 z-40 flex-col items-center justify-center space-y-12 bg-[#0A1E3C]/90 text-4xl text-white backdrop-blur-sm flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <a
                href="#soluciones"
                onClick={() => setMenuOpen(false)}
                className="hover:text-violet-400"
              >
                Soluciones
              </a>
              <a
                href="#academia"
                onClick={() => setMenuOpen(false)}
                className="hover:text-violet-400"
              >
                Academia
              </a>
              <a
                href="#impacto"
                onClick={() => setMenuOpen(false)}
                className="hover:text-violet-400"
              >
                Impacto
              </a>
              <div className="flex items-center gap-8 pt-8">
                <a
                  href="https://www.linkedin.com/company/finnegans-s-a/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <img src="/Linkedin.svg" className="size-8" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/finnegans_sa/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <img src="/Instagram.svg" className="size-6" alt="" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>*/}

        {/* Main Heading */}
        <motion.div
          className="text-white mt-auto  lg:mt-0 md:mt-0 mb-4 md:mb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-[52px] poppins-semibold leading-none lg:leading-none md:leading-normal md:text-8xl 2xl:text-[120px] whitespace-nowrap relative md:top-4">
            Te <br className="block md:hidden" />{" "}
            <span
              ref={containerRef}
              className="relative inline-flex"
              onMouseEnter={() => setHoveringWord(true)}
              onMouseLeave={() => {
                setHoveringWord(false);
                setActiveSyl(null);
                setBubbleX(null);
              }}
            >
              {(
                [
                  { key: "in" as const, text: "in" },
                  { key: "vi" as const, text: "vi" },
                  { key: "ta" as const, text: "ta" },
                  { key: "mos" as const, text: "mos" },
                ] as const
              ).map(({ key, text }) => (
                <span
                  key={key}
                  ref={sylRefs[key]}
                  className="relative inline-block"
                  onMouseEnter={() => {
                    setActiveSyl(key);
                    updateBubbleX(key);
                  }}
                >
                  {text}
                </span>
              ))}

              {/* single bubble that glides to the hovered syllable */}
              {hoveringWord && bubbleX !== null && (
                <motion.img
                  src="/bubble.svg"
                  alt=""
                  className="pointer-events-none absolute -top-8 md:-top-14 h-10 md:h-20"
                  style={{ left: bubbleX, transform: "translateX(-50%)" }}
                  initial={false}
                  animate={{ left: bubbleX, opacity: 1, y: -4, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                    mass: 0.6,
                  }}
                />
              )}
            </span>
            <br /> al <i>futuro</i> <br className="hidden md:block" />{" "}
            <span className="md:relative md:bottom-2">que</span>{" "}
            <br className="block md:hidden" />
            &nbsp;
            <div className="inline-flex relative max-w-max">
              <motion.span
                className="hand-font text-[107px] md:text-[173px] 2xl:text-[190px] relative -left-3 leading-0.5 lg:leading-0 top-4 lg:top-2 z-30 align-text-top"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                imaginamos.
              </motion.span>
              <img
                src="/ui/linea-imaginamos.png"
                alt=""
                className="object-contain w-full absolute z-10 -left-3 -bottom-12 lg:-bottom-16"
              />
            </div>
          </h2>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="flex flex-col items-center justify-between lg:relative md:top-8 2xl:top-0 gap-8 text-white md:flex-row md:pb-0 pb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="poppins-medium relative text-left self-start top-4 md:-top-1 text-xl md:text-[24px] 2xl:text-[27px]">
            Nos reinventamos con el{" "}
            <span className="relative">
              cielo{" "}
              <img
                src="/circulito.svg"
                className="absolute max-w-full right-0 bottom-0 scale-150"
                alt=""
              />
            </span>{" "}
            <br className="block md:hidden" /> como punto de partida
          </p>
          <nav className="hidden items-center text-lg font-medium md:flex">
            <ul className="flex items-center gap-6 text-white">
              <li>
                <a href="#soluciones" className="transition hover:text-white">
                  Soluciones
                </a>
              </li>
              <li>
                <a href="#academia" className="transition hover:text-white">
                  Academia
                </a>
              </li>
              <li>
                <a href="#impacto" className="transition hover:text-white">
                  Impacto
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      </div>

      {/* 🔥 Inline burger CSS (must be global or in your CSS file) */}
      {/*@ts-expect-error bla*/}
      <style jsx global>{`
        .hamburger {
          cursor: pointer;
          width: 24px;
          height: 24px;
          transition: all 0.25s;
          position: relative;
          padding-right: 8px;
        }
        .hamburger-top,
        .hamburger-middle,
        .hamburger-bottom {
          position: absolute;
          width: 32px;
          height: 3px;
          top: 0;
          left: 0;
          background: #fff;
          border-radius: 2px;
          transform: rotate(0);
          transition: all 0.5s;
        }
        .hamburger-middle {
          transform: translateY(7px);
        }
        .hamburger-bottom {
          transform: translateY(14px);
        }
        .open .hamburger-top {
          transform: rotate(45deg) translateY(6px) translateX(6px);
        }
        .open .hamburger-middle {
          display: none;
        }
        .open .hamburger-bottom {
          transform: rotate(-45deg) translateY(6px) translateX(-6px);
        }
      `}</style>
    </section>
  );
}
