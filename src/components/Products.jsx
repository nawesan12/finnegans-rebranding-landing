import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * @typedef {Object} Product
 * @property {string} title - The title of the product.
 * @property {string} bg - The Tailwind CSS background color class.
 * @property {string} text - The Tailwind CSS text color class.
 * @property {string} description - The product description.
 * @property {string} badgeBg - The background color for the "PRODUCTOS" badge.
 * @property {string} badgeText - The text color for the "PRODUCTOS" badge.
 * @property {string} image - The path to the product image.
 */

/**
 * Data for the different product sections.
 * @type {Object.<string, Product>}
 */
const products = {
  academia: {
    title: "Finnegans GO",
    bg: "bg-[#3985ff]",
    text: "text-white",
    description:
      "Capacitaciones y recursos para dominar nuestras herramientas. Potenciamos el talento de tu equipo para que aprovechen.",
    badgeBg: "bg-white/20",
    badgeText: "text-white",
    image: "/foto-1.png",
    logo: "/Go Landing.svg",
    isoLogo: "/GO/Iso Color Especial.svg",
    activeLogo: "/GO/Isotipo Ppal Color.svg",
  },
  quippos: {
    title: "Finnegans Quippos",
    bg: "bg-[#a282ef]",
    text: "text-gray-800",
    description:
      "Una solución ERP cloud que se adapta a las necesidades de tu negocio, optimizando procesos y potenciando el crecimiento.",
    badgeBg: "bg-white/50",
    badgeText: "text-black",
    image: "/foto-2.png",
    logo: "/Quippos Landing.png",
    isoLogo: "/Quippos/Isotipo Sobrecolor.svg",
    activeLogo: "/Quippos/Isotipo Lila.svg",
  },
};

const productKeys = Object.keys(products);

/**
 * Main component to display products with an interactive interface.
 */
export default function FinnegansProductosReact() {
  const [activeKey, setActiveKey] = useState(productKeys[0]);
  const activeProduct = products[activeKey];

  return (
    <div
      className={`font-sans relative z-40 min-h-screen bg-cover transition-all duration-200 w-full bg-gray-900 overflow-x-hidden`}
      style={{
        backgroundImage: `url('${activeProduct.image}')`,
      }}
    >
      <div className="z-10 flex items-end justify-between min-w-screen lg:items-center min-h-screen">
        {/* Content */}
        <div className="flex flex-col w-sreen lg:w-auto lg:flex-row lg:justify-between lg:items-end gap-6 md:gap-10 lg:gap-16">
          {/* LEFT panel */}

          <motion.div
            key={activeKey}
            className={`
                   w-full lg:w-auto
                   py-6 pl-6  pr-0 lg:pl-32
                   transition-colors duration-500
                   ${activeProduct.bg} ${activeProduct.text}
                   lg:rounded-r-[60px] rounded-tr-[50%]
                 `}
          >
            <div className="flex flex-col pl-4">
              {/* Active logo */}
              <p className="block max-w-max text-black bg-white rounded-full py-1 px-4 text-sm sm:text-base md:text-xl font-medium z-20 lg:hidden">
                PRODUCTOS
              </p>

              <img
                src={activeProduct.logo}
                alt={`${activeProduct.title} Logo`}
                className="w-auto h-80 pt-12 pb-4 object-cover  max-w-max relative right-4"
              />

              {/* Description */}
              <p
                className={`mt-3 sm:mt-4 text-lg sm:text-base md:text-lg max-w-lg  pr-8 md:pr-12  transition-colors duration-500 ${
                  activeProduct.text === "text-white"
                    ? "text-white/80"
                    : "text-gray-700/90"
                }`}
              >
                {activeProduct.description}
              </p>

              {/* Navigation + Banner in mobile */}
              <div className="pt-6 sm:pt-8 flex items-center justify-between gap-3">
                <p className="lg:block hidden text-black bg-white rounded-full py-1 mb-10 px-4 text-sm sm:text-base md:text-xl font-medium z-20 ">
                  PRODUCTOS
                </p>
                <div className="flex items-center gap-2 sm:gap-3 pr-0 md:pr-12 lg:pr-16 lg:pb-10">
                  {productKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveKey(key)}
                      aria-label={`Select ${products[key].title}`}
                      className={`p-1 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                        activeKey === key
                          ? `bg-white shadow-lg`
                          : activeProduct.text === "text-white"
                            ? "bg-white/20 hover:bg-white/30"
                            : "bg-black/10 hover:bg-black/20"
                      }`}
                    >
                      <img
                        src={
                          activeKey === key
                            ? products[key].activeLogo
                            : products[key].isoLogo
                        }
                        alt={`${products[key].title} Icon`}
                        className="size-12 object-contain"
                      />
                    </button>
                  ))}
                </div>

                {/* Banner (mobile only here) */}
                <img
                  src="/finni.png"
                  alt=""
                  className="h-14 object-contain lg:hidden"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT banner (desktop only) */}
          <div className="hidden md:hidden lg:flex justify-center absolute right-0">
            <img src="/finni.png" alt="" className="h-28 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
