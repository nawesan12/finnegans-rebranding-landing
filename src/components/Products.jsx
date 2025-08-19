import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = {
  academia: {
    title: "Finnegans GO",
    bg: "bg-[#3985ff]",
    text: "text-white",
    description:
      "Capacitaciones y recursos para dominar nuestras herramientas. Potenciamos el talento de tu equipo para que aprovechen.",
    badgeBg: "bg-white/20",
    badgeText: "text-white",
    image: "/foto-1.jpg",
    logo: "/Go Landing.svg",
    isoLogo: "/GO/Iso Color Especial.svg",
    activeLogo: "/GO/Isotipo Ppal Color.svg",
  },
  quippos: {
    title: "Finnegans Quippos",
    bg: "bg-[#a282ef]",
    text: "text-white",
    description:
      "Una solución ERP cloud que se adapta a las necesidades de tu negocio, optimizando procesos y potenciando el crecimiento.",
    badgeBg: "bg-white/50",
    badgeText: "text-black",
    image: "/foto-2.jpg",
    logo: "/Quippos Landing.png",
    isoLogo: "/Quippos/Isotipo Sobrecolor.svg",
    activeLogo: "/Quippos/Isotipo Lila.svg",
  },
};

const productKeys = Object.keys(products);

export default function FinnegansProductosReact() {
  const [activeKey, setActiveKey] = useState(productKeys[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeProduct = products[activeKey];

  useEffect(() => {
    if (menuOpen) return;
    const interval = setInterval(() => {
      setActiveKey((prevKey) => {
        const currentIndex = productKeys.indexOf(prevKey);
        const nextIndex = (currentIndex + 1) % productKeys.length;
        return productKeys[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [menuOpen]);

  return (
    <div
      className={`font-sans relative z-40 min-h-screen bg-cover  transition-all duration-200 w-full bg-gray-900 overflow-x-hidden`}
      style={{
        backgroundImage: `url('${activeProduct.image}')`,
        backgroundPosition: "60% 60%",
      }}
    >
      <div className="z-10 flex items-end justify-between min-w-screen lg:items-center min-h-screen">
        {/* Content */}
        <div className="flex flex-col w-sreen lg:w-auto lg:flex-row lg:justify-between lg:items-end gap-6 md:gap-10 lg:gap-16">
          {/* LEFT panel */}
          <motion.div
            className={`
              w-full lg:w-auto
              py-6 pl-13 pr-0 lg:pl-32
              transition-colors duration-500
              ${activeProduct.bg} ${activeProduct.text}
              lg:rounded-r-[60px] rounded-tr-[55%] relative
            `}
          >
            <div className="flex flex-col">
              <p className="block max-w-max absolute left-10 -top-3 text-black bg-white rounded-full py-1 px-4 text-sm sm:text-base md:text-xl font-medium z-20 lg:hidden">
                PRODUCTOS
              </p>

              <img
                src={activeProduct.logo}
                alt={`${activeProduct.title} Logo`}
                className="w-auto h-56 md:h-80 pt-12 pb-4 pl-4 lg:pl-2 object-cover  max-w-max relative right-4"
              />

              <p
                className={`mt-3 sm:mt-4 mb-0 md:mb-4 lg:text-lg text-sm md:text-lg max-w-lg  pr-8 md:pr-12 leading-5  transition-colors duration-500 ${
                  activeProduct.text === "text-white"
                    ? "text-white/80"
                    : "text-gray-700/90"
                }`}
              >
                {activeProduct.description}
              </p>

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
                      className={`lg:p-1 p-px rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
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
                        className="lg:size-12 size-9 aspect-square object-contain"
                      />
                    </button>
                  ))}
                </div>

                <img
                  src="/boton-finni-mobile.png"
                  alt=""
                  className="h-28 object-contain lg:hidden"
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
