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
                  className="absolute left-0 h-1 bg-white rounded-full"
                  style={{ bottom: 28, right: 0 }}
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
                    className="absolute -right-48 top-1/2  -translate-y-1/2 z-50 transform-gpu"
                    //@ts-expect-error bla
                    variants={groupVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="relative flex flex-col items-start gap-0 [&>*+*]:-mt-10 pointer-events-auto">
                      {bubbleSrcs.map((src, i) => (
                        <motion.div
                          key={src}
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
                              (e.currentTarget as HTMLImageElement).replaceWith(
                                Object.assign(document.createElement("div"), {
                                  className:
                                    "h-10 md:h-14 w-10 md:w-14 rounded-full border border-white/70 bg-white/10",
                                }),
                              );
                            }}
                          />
                        </motion.div>
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
