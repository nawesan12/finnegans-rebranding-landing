"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative z-40 min-h-screen bg-[url('/hero-mobile.png')] md:bg-[url('/hero.webp')] bg-cover bg-right lg:bg-center bg-no-repeat"
    >
      <div className="mx-auto flex h-screen min-h-[700px] max-w-7xl flex-col justify-around lg:justify-evenly py-6 px-6 lg:px-0">
        {/* Header */}
        <motion.header
          className="w-full lg:relative lg:top-20"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between text-white">
            <a href="/" className="z-50 text-4xl font-semibold md:text-5xl">
              <img
                src="/finnegans-blanco.png"
                className="aspect-auto h-8 lg:h-16"
                alt=""
              />
            </a>

            {/* Desktop Nav */}
            <motion.nav
              className="hidden items-center space-x-6 md:flex lg:relative lg:-top-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#" aria-label="LinkedIn">
                <img
                  src="/Linkedin.svg"
                  className="size-8 drop-shadow-xl"
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
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              id="menu-btn"
              className={`hamburger z-50 block md:hidden focus:outline-none ${menuOpen ? "open" : ""}`}
              type="button"
              aria-label="Toggle Menu"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </motion.header>

        {/* Mobile Menu */}
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
              <a href="#soluciones" className="hover:text-violet-400">
                Soluciones
              </a>
              <a href="#academia" className="hover:text-violet-400">
                Academia
              </a>
              <a href="#impacto" className="hover:text-violet-400">
                Impacto
              </a>
              <div className="flex items-center gap-8 pt-8">
                <a href="#" aria-label="LinkedIn">
                  <img src="/Linkedin.svg" className="size-8" alt="" />
                </a>
                <a href="#" aria-label="Instagram">
                  <img src="/Instagram.svg" className="size-6" alt="" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Heading */}
        <motion.div
          className="text-white mt-auto lg:mt-0 md:mt-0 mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl poppins-semibold lg:leading-none leading-normal md:text-7xl lg:text-[110px] whitespace-nowrap">
            Te <br /> invitamos al futuro <br /> que&nbsp;
            <div className="inline-flex relative max-w-max">
              <motion.span
                className="hand-font text-6xl md:text-8xl lg:text-[160px] relative leading-0.5 lg:leading-0 top-2 lg:top-4 z-30 align-text-top"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                imaginamos.
              </motion.span>
              <img
                src="/ui/linea-imaginamos.png"
                alt=""
                className="object-contain w-full absolute z-10 -bottom-6 lg:-bottom-16"
              />
            </div>
          </h2>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="flex flex-col items-center justify-between lg:relative lg:bottom-6 gap-8 text-white md:flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <img
            src="/nos-reinventamos.png"
            className="h-10 aspect-auto object-contain"
            alt=""
          />
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
      <style jsx global>{`
        .hamburger {
          cursor: pointer;
          width: 24px;
          height: 24px;
          transition: all 0.25s;
          position: relative;
        }
        .hamburger-top,
        .hamburger-middle,
        .hamburger-bottom {
          position: absolute;
          width: 24px;
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
