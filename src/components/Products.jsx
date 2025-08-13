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
  quippos: {
    title: "Finnegans Quippos",
    bg: "bg-[#C1A3FF]",
    text: "text-gray-800",
    description:
      "Una solución ERP cloud que se adapta a las necesidades de tu negocio, optimizando procesos y potenciando el crecimiento.",
    badgeBg: "bg-white/50",
    badgeText: "text-black",
    image: "/foto-1.png",
  },
  academia: {
    title: "Finnegans Academia",
    bg: "bg-[#01A49E]",
    text: "text-white",
    description:
      "Capacitaciones y recursos para dominar nuestras herramientas. Potenciamos el talento de tu equipo para que aprovechen al máximo la tecnología.",
    badgeBg: "bg-white/20",
    badgeText: "text-white",
    image: "/foto-2.png",
  },
};

const productKeys = Object.keys(products);

/**
 * Renders the correct SVG icon based on the product key.
 */
function IconRenderer({ iconKey, isActive, activeProduct }) {
  const iconColorClass = isActive
    ? activeProduct.text === "text-white"
      ? "text-gray-800"
      : "text-gray-900"
    : activeProduct.text === "text-white"
      ? "text-white/80"
      : "text-black/70";

  const className = `w-6 h-6 transition-colors duration-300 ${iconColorClass}`;

  const icons = {
    quippos: <img src="/" alt="Quippos Icon" className={className} />,
    academia: (
      <img src="/Academia.svg" alt="Academia Icon" className={className} />
    ),
  };

  return icons[iconKey] || null;
}

/**
 * Main component to display products with an interactive interface.
 */
export default function FinnegansProductosReact() {
  const [activeKey, setActiveKey] = useState(productKeys[0]);
  const activeProduct = products[activeKey];

  return (
    // Main container for the full-screen experience
    <div className="font-sans relative min-h-screen w-full bg-gray-900">
      {/* Background Image Container - full screen */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          <motion.img
            key={activeKey}
            src={activeProduct.image}
            alt={activeProduct.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/1920x1080/cccccc/ffffff?text=Image+Not+Found";
            }}
          />
        </AnimatePresence>
      </div>

      {/* Flex container for positioning the modal */}
      {/* On mobile, it centers content. On md screens and up, it aligns to the start. */}
      <div className="relative z-10 flex min-h-screen items-end md:items-center">
        {/* The actual info modal with responsive width, padding, and border radius */}
        <motion.div
          key={activeKey}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`w-full md:w-3/4 lg:w-1/2 rounded-t-3xl md:rounded-r-[64px] md:rounded-t-none p-8 sm:p-10 md:p-16 lg:pl-32 transition-colors duration-500 ${activeProduct.bg} ${activeProduct.text}`}
        >
          {/* Inner content div */}
          <div className="flex flex-col gap-4">
            <span
              className={`text-xs max-w-max font-bold px-3 py-1 rounded-full inline-block transition-colors duration-500 ${activeProduct.badgeBg} ${activeProduct.badgeText}`}
            >
              PRODUCTOS
            </span>
            {/* Responsive logo size */}
            <img
              src="/favicon.svg"
              alt="Finnegans Logo"
              className="w-16 h-16 md:w-24 md:h-24"
            />
            {/* Responsive title font size */}
            <h3 className="text-4xl sm:text-6xl lg:text-8xl font-semibold mt-4">
              {activeProduct.title.split(" ").map((word, index) => (
                <span key={index} className="block">
                  {word}
                </span>
              ))}
            </h3>
            <p
              className={`mt-2 text-base md:text-lg max-w-lg transition-colors duration-500 ${
                activeProduct.text === "text-white"
                  ? "text-white/80"
                  : "text-gray-700/90"
              }`}
            >
              {activeProduct.description}
            </p>

            {/* Navigation Icon Buttons */}
            <div className="pt-8 flex items-center space-x-2 md:space-x-3">
              {productKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveKey(key)}
                  aria-label={`Select ${products[key].title}`}
                  className={`p-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white ${
                    activeKey === key
                      ? `bg-white shadow-lg`
                      : activeProduct.text === "text-white"
                        ? "bg-white/20 hover:bg-white/30"
                        : "bg-black/10 hover:bg-black/20"
                  }`}
                >
                  <IconRenderer
                    iconKey={key}
                    isActive={activeKey === key}
                    activeProduct={activeProduct}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
