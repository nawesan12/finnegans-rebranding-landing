import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// --- Data and Configuration ---
// The data now consists of image sources for logos.
const clientLogos = [
  {
    id: "logo1",
    src: "/industries/agronegocios blanco.svg",
  },
  {
    id: "logo2",
    src: "/industries/comercializadoras blanco.svg",
  },
  {
    id: "logo3",
    src: "/industries/constructoras blanco.svg",
  },
  {
    id: "logo4",
    src: "/industries/contadores blanco.svg",
  },
  {
    id: "logo5",
    src: "/industries/manufacturas blanco.svg",
  },
  {
    id: "logo6",
    src: "/industries/ong blanco.svg",
  },
  {
    id: "logo7",
    src: "/industries/salud blanco.svg",
  },
  {
    id: "logo8",
    src: "/industries/servicios blanco.svg",
  },
];

// --- Main Component ---
export default function App() {
  const infiniteLogos = [...clientLogos, ...clientLogos, ...clientLogos];
  const [scrollingIndex, setScrollingIndex] = useState(clientLogos.length);
  const controls = useAnimation();

  // The height of each list item in the carousel.
  const listItemHeight = 8; // in rem (128px)
  const visibleItems = 5; // How many items are visible at once

  // This useEffect hook runs the animation whenever the scrollingIndex changes.
  // The core animation logic remains the same as before.
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

      // Reset the carousel to the middle section for an infinite loop effect
      if (scrollingIndex >= clientLogos.length * 2) {
        const resetYOffset =
          (visibleItems / 2) * listItemHeight -
          clientLogos.length * listItemHeight -
          listItemHeight / 2;
        controls.set({ y: `${resetYOffset}rem` });
        setScrollingIndex(clientLogos.length);
      }
    };
    runAnimation();
  }, [scrollingIndex, controls]);

  // This useEffect hook increments the index every 3 seconds to make the carousel scroll automatically.
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
              Grandes marcas <br /> que{" "}
              <span className="hand-font font-medium text-8xl text-violet-400">
                confían
              </span>{" "}
              <br />
              en nosotros.
            </h3>
          </div>

          {/* Right Side: Image Carousel */}
          <div
            className="relative flex items-center justify-center"
            style={{ height: `${listItemHeight * visibleItems}rem` }}
          >
            <div className="relative w-full h-full">
              {/* The gradient overlay for a fade effect */}
              <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#1C243B] to-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#1C243B] to-transparent z-10"></div>

              <motion.ul
                className="absolute w-full flex flex-col items-center"
                animate={controls}
              >
                {infiniteLogos.map((logo, index) => {
                  const distance = Math.abs(index - scrollingIndex);

                  let opacity = 0;
                  let scale = 1; // default size

                  if (distance === 0) {
                    opacity = 1;
                    scale = 1.2; // active item is bigger
                  } else if (distance === 1) {
                    opacity = 0.4;
                    scale = 1; // slightly smaller
                  } else if (distance === 2) {
                    opacity = 0.2;
                    scale = 0.9; // even smaller for far items
                  }

                  return (
                    <motion.li
                      key={`${logo.id}-${index}`}
                      className="flex items-center justify-center"
                      style={{ height: `${listItemHeight}rem` }}
                      animate={{ opacity, scale }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={logo.src}
                        alt={`Logo del cliente ${(index % clientLogos.length) + 1}`}
                        className="h-20 w-auto object-contain border rounded-full"
                      />
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
