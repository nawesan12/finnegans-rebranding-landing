import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = {
  academia: {
    title: "Finnegans GO",
    bg: "bg-[#3985ff]",
    text: "text-[#00001e]",
    description:
      "Capacitaciones y recursos para dominar nuestras herramientas. Potenciamos el talento de tu equipo para que aprovechen. Capacitaciones y recursos para dominar nuestras herramientas. Potenciamos el talento de tu equipo para que aprovechen.",
    badgeBg: "bg-white/20",
    badgeText: "text-white",
    image: "/GO.png",
    mobileImage: "/mobile-GO.png",
    logo: "/GO Landing nuevo.svg",
    isoLogo: "/GO/Iso Color Especial.svg",
    activeLogo: "/GO/Isotipo Ppal Color.svg",
  },
  quippos: {
    title: "Finnegans Quippos",
    bg: "bg-[#a282ef]",
    text: "text-[#06050f]",
    description:
      "Una solución ERP cloud que se adapta a las necesidades de tu negocio, optimizando procesos y potenciando el crecimiento. Una solución ERP cloud que se adapta a las necesidades de tu negocio, optimizando procesos y potenciando el crecimiento.",
    badgeBg: "bg-white/50",
    badgeText: "text-black",
    image: "/quippos.png",
    mobileImage: "/mobile-quippos.png",
    logo: "/Quippos Landing nuevo.svg",
    isoLogo: "/Quippos/Isotipo Sobrecolor.svg",
    activeLogo: "/Quippos/Isotipo Lila.svg",
  },
};

const productKeys = Object.keys(products);

export default function FinnegansProductosReact() {
  const [activeKey, setActiveKey] = useState(productKeys[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeProduct = products[activeKey];

  const intervalRef = useRef(null);
  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (menuOpen) return; // don't run while menu is open
    intervalRef.current = window.setInterval(() => {
      setActiveKey((prevKey) => {
        const currentIndex = productKeys.indexOf(prevKey);
        const nextIndex = (currentIndex + 1) % productKeys.length;
        return productKeys[nextIndex];
      });
    }, 4000);
  }, [menuOpen]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const handleSelect = (key) => {
    setActiveKey(key);
    startInterval();
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    handleResize(); // check at mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="font-sans relative z-40 min-h-screen bg-cover w-full bg-gray-900 overflow-x-hidden"
      style={{
        backgroundImage: `url('${
          isMobile ? activeProduct.mobileImage : activeProduct.image
        }')`,
        backgroundPosition: "60% 60%",
      }}
    >
      <div className="z-10 flex items-end justify-between min-w-screen lg:items-center min-h-screen">
        {/* Content */}
        <div className="flex flex-col w-screen lg:flex-row lg:justify-between lg:items-end gap-6 md:gap-10 lg:gap-16">
          {/* LEFT panel */}
          <motion.div
            className={`
              w-full lg:w-1/2
              py-4 pl-12 pr-0 lg:pl-24 lg:py-24 md:pr-20
              transition-colors duration-500
              ${activeProduct.bg} ${activeProduct.text}
              lg:rounded-r-[60px] rounded-tr-[55%] relative
            `}
          >
            <div className="flex flex-col items-start">
              <p className="block max-w-max absolute left-10 -top-3 text-black bg-white rounded-full py-1 px-4 text-sm sm:text-base md:text-xl font-medium z-20 lg:hidden">
                PRODUCTOS
              </p>

              <img
                src={activeProduct.logo}
                alt={`${activeProduct.title} Logo`}
                className=" h-48 object-contain md:h-96 pt-12 pb-0 pl-4 lg:pl-0  max-w-full relative md:left-0 -left-4 "
              />

              <p
                className={`mt-3 sm:mt-4 mb-0 md:mb-4 lg:text-xl text-sm md:text-lg max-w-2xl pr-8 md:pr-12 leading-normal  transition-colors duration-500 ${
                  activeProduct.text === "text-white"
                    ? "text-white/80"
                    : "text-gray-700/90"
                }`}
              >
                {activeProduct.description}
              </p>

              <div className="md:pt-6 pt-0 flex items-center justify-between w-full gap-3">
                <p className="lg:block hidden text-black bg-white rounded-full py-1 mb-10 px-4 text-sm sm:text-base md:text-xl font-medium z-20 ">
                  PRODUCTOS
                </p>
                <div className="flex items-center gap-2 sm:gap-3 pr-0 md:pr-12 lg:pr-16 lg:pb-10">
                  {productKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => handleSelect(key)}
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
                  className="h-24 object-contain lg:hidden"
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
