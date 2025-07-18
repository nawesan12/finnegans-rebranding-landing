import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Tractor,
  Building,
  Factory,
  ShoppingCart,
  HeartPulse,
  Wrench,
} from "lucide-react";

// --- Data and Configuration ---
const industries = [
  {
    id: "agronegocios",
    name: "Finnegans Agronegocios",
    textColor: "#00FF00",
    icon: <Tractor className="h-8 w-8" />, // Slightly larger icon
  },
  {
    id: "constructoras",
    name: "Finnegans Constructoras",
    textColor: "#FF0000",
    icon: <Building className="h-8 w-8" />,
  },
  {
    id: "manufacturas",
    name: "Finnegans Manufacturas",
    textColor: "#0099FF",
    icon: <Factory className="h-8 w-8" />,
  },
  {
    id: "comercializadoras",
    name: "Finnegans Comercializadoras",
    textColor: "#FFFF00",
    icon: <ShoppingCart className="h-8 w-8" />,
  },
  {
    id: "servicios",
    name: "Finnegans Servicios",
    textColor: "#00FFFF",
    icon: <Wrench className="h-8 w-8" />,
  },
  {
    id: "salud",
    name: "Finnegans Salud",
    textColor: "#FF00FF",
    icon: <HeartPulse className="h-8 w-8" />,
  },
];

// --- Main Component ---
export default function App() {
  const infiniteIndustries = [...industries, ...industries, ...industries];
  const [scrollingIndex, setScrollingIndex] = useState(industries.length);
  const controls = useAnimation();

  // --- KEY CHANGE 1: INCREASED SPACING ---
  // Increased from 4.5rem to 6rem to create more vertical space.
  const listItemHeight = 6; // in rem
  const visibleItems = 7;

  useEffect(() => {
    const runAnimation = async () => {
      const yOffset =
        (visibleItems / 2) * listItemHeight -
        scrollingIndex * listItemHeight -
        listItemHeight / 2;
      await controls.start({
        y: `${yOffset}rem`,
        transition: { duration: 0.7, ease: "easeInOut" },
      });
      if (scrollingIndex >= industries.length * 2) {
        const resetYOffset =
          (visibleItems / 2) * listItemHeight -
          industries.length * listItemHeight -
          listItemHeight / 2;
        controls.set({ y: `${resetYOffset}rem` });
        setScrollingIndex(industries.length);
      }
    };
    runAnimation();
  }, [scrollingIndex, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollingIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-white flex items-center justify-center bg-[#1C243B]">
      <section id="soluciones" className="w-full py-20 lg:py-0">
        <div className="lg:max-w-7xl mx-auto px-6 lg:px-0 flex flex-col lg:grid lg:grid-cols-2 gap-16">
          {/* Left Side: Title */}
          <div className="text-left self-center">
            <h3 className="text-7xl font-light">
              Tecnología <br /> que se{" "}
              <span className="font-handwritten text-8xl text-violet-400">
                adapta
              </span>{" "}
              <br />a tu industria.
            </h3>
          </div>

          <div
            className="relative flex items-center flex-col lg:flex-row justify-center"
            style={{ height: `${listItemHeight * visibleItems}rem` }}
          >
            <div className="relative w-full h-full">
              <motion.ul
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center lg:left-0 lg:translate-x-0 lg:items-start"
                animate={controls}
              >
                {infiniteIndustries.map((industry, index) => {
                  const isActive = index === scrollingIndex;
                  const distance = Math.abs(index - scrollingIndex);
                  let opacity = 0;
                  if (distance === 0) opacity = 1;
                  else if (distance === 1) opacity = 0.2;
                  else if (distance === 2) opacity = 0.1;

                  return (
                    <motion.li
                      key={`${industry.id}-${index}`}
                      // --- KEY CHANGE 2: CLEANER & MORE SPACIOUS STYLING ---
                      // Base classes are applied to all items.
                      // Active state gets more padding for the spacious pill effect.
                      className={`flex items-center justify-center w-max max-w-full rounded-full border-2 transition-all duration-500 ${
                        isActive
                          ? "border-white/20 px-8 py-4"
                          : "border-transparent px-6 py-2"
                      }`}
                      style={{ height: `${listItemHeight}rem` }}
                      animate={{
                        opacity: opacity,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="mr-4">{industry.icon}</div>
                      <p
                        // --- KEY CHANGE 3: LARGER FONT FOR ACTIVE ITEM ---
                        className={`whitespace-nowrap transition-all duration-500 ${
                          isActive
                            ? "font-medium text-xl lg:text-6xl"
                            : "font-light text-lg lg:text-5xl"
                        }`}
                      >
                        {industry.name.split(" ").map((word, wordIndex) => (
                          <span
                            key={wordIndex}
                            style={{
                              color:
                                isActive && wordIndex === 1
                                  ? industry.textColor
                                  : "white",
                            }}
                          >
                            {word}{" "}
                          </span>
                        ))}
                      </p>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap");
        .font-handwritten {
          font-family: "Gochi Hand", cursive;
        }
      `}</style>
    </div>
  );
}
