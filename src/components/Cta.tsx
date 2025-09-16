"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

export default function ImpactoSection() {
  const [active, setActive] = useState(false);

  const bubbleSrcs = useMemo(
    () => ["/Artes.svg", "/Edu.svg", "/Social.svg", "/Eco.svg"],
    [],
  );

  const groupVariants = {
    initial: { opacity: 0, scale: 0.9, x: 8, rotate: -2 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 18,
        delayChildren: 0.06,
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0.98,
      scale: 0.98,
      x: 6,
      rotate: -1,
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1, // salen en orden inverso
      },
    },
  };

  const offsets = [-40, -12, 12, 40];

  // variantes por burbuja (aplican el stagger del grupo)
  const bubbleVariants = {
    initial: (i: number) => ({
      opacity: 0,
      scale: 0.8,
      x: i < 1 ? 12 : i < 3 ? 32 : 12,
      y: offsets[i],
      rotate: -2,
    }),
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: i < 1 ? 12 : i < 3 ? 32 : 12,
      y: offsets[i],
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 230,
        damping: 17,
      },
    }),
    // shrink hacia el texto (ligero desplazamiento a la izquierda)
    exit: (i: number) => ({
      opacity: 0,
      scale: 0,
      x: (i < 1 ? 12 : i < 3 ? 32 : 12) - 18,
      y: offsets[i],
      rotate: -2,
      transition: { duration: 0.22 },
    }),
  };

  return (
    <section className="bg-[#FF4F00] py-20 text-black text-center flex justify-center lg:py-24 relative z-40">
      <div className="mx-auto  px-6 lg:px-0 text-center">
        <h2 className="text-5xl font-bold md:text-7xl overflow-visible text-center relative">
          Somos creatividad{" "}
          <span className="relative md:bottom-0 bottom-3 whitespace-nowrap">
            con{" "}
            <motion.span
              className="relative inline-block  overflow-visible"
              onHoverStart={() => setActive(true)}
              onHoverEnd={() => setActive(false)}
              onPointerDown={() => setActive((v) => !v)} // mobile tap toggle
              role="button"
              tabIndex={0}
            >
              {/* word */}
              <motion.span
                className="hand-font leading-none cursor-default text-7xl md:text-9xl relative top-2 lg:top-4 inline-block"
                animate={{ color: active ? "#ffffff" : "#000000" }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                impacto.
                <motion.span
                  className="absolute left-0 h-1 bg-white rounded-full bottom-4 md:bottom-7 "
                  style={{ right: 0 }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: active ? "100%" : 0,
                    opacity: active ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                />
              </motion.span>

              {/* bubbles */}
              <AnimatePresence>
                {active && (
                  <motion.div
                    key="bubbles"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 z-50 transform-gpu md:w-auto md:h-auto md:top-1/2 md:-right-48 md:left-auto md:-translate-x-0 md:-translate-y-1/2"
                    //@ts-expect-error bla
                    variants={groupVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="relative w-full h-full md:w-auto md:h-auto md:flex md:flex-col md:items-start md:gap-0 md:[&>*+*]:-mt-10 pointer-events-auto">
                      {bubbleSrcs.map((src, i) => (
                        <>
                          <motion.div
                            key={`${src}-d`}
                            className="hidden md:block"
                            animate={{
                              y: [offsets[i], offsets[i] - 3, offsets[i]],
                            }}
                            transition={{
                              duration: 2 + i * 0.2,
                              repeat: Infinity,
                              repeatType: "mirror",
                              ease: "easeInOut",
                            }}
                            whileHover={{ scale: 1.03, x: 2 }}
                          >
                            <motion.img
                              src={src}
                              alt=""
                              className="h-8 w-auto md:h-10 drop-shadow-xl select-none"
                              //@ts-expect-error bla
                              variants={bubbleVariants}
                              custom={i}
                              draggable={false}
                              onError={(e) => {
                                (
                                  e.currentTarget as HTMLImageElement
                                ).replaceWith(
                                  Object.assign(document.createElement("div"), {
                                    className:
                                      "h-10 md:h-14 w-10 md:w-14 rounded-full border border-white/70 bg-white/10",
                                  }),
                                );
                              }}
                            />
                          </motion.div>

                          <motion.div
                            key={`${src}-m`}
                            className={`absolute md:hidden ${
                              i === 0
                                ? "-bottom-10 -right-12 "
                                : i === 1
                                  ? "-right-6 top-0"
                                  : i === 2
                                    ? "top-0 -left-1/2 -translate-x-1/2"
                                    : "-left-1/2 top-1/2 -translate-y-1/2"
                            }`}
                            animate={{ y: [0, -3, 0] }}
                            transition={{
                              duration: 2 + i * 0.2,
                              repeat: Infinity,
                              repeatType: "mirror",
                              ease: "easeInOut",
                            }}
                            whileHover={{ scale: 1.03, x: 2 }}
                          >
                            <motion.img
                              src={src}
                              alt=""
                              className="h-8 w-auto md:h-10 drop-shadow-xl select-none"
                              //@ts-expect-error bla
                              variants={bubbleVariants}
                              custom={i}
                              draggable={false}
                              onError={(e) => {
                                (
                                  e.currentTarget as HTMLImageElement
                                ).replaceWith(
                                  Object.assign(document.createElement("div"), {
                                    className:
                                      "h-10 md:h-14 w-10 md:w-14 rounded-full border border-white/70 bg-white/10",
                                  }),
                                );
                              }}
                            />
                          </motion.div>
                        </>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.span>
          </span>{" "}
        </h2>
      </div>
    </section>
  );
}
