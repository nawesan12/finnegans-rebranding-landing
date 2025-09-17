"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      {/* --- Sección Academia --- */}
      <section
        id="academia"
        className="bg-[#008584] flex flex-col lg:flex-row md:items-center justify-evenly lg:h-96 py-11 px-8 lg:py-0 gap-10 lg:gap-0 relative z-40"
      >
        <motion.img
          src="/logo-academia.svg"
          alt=""
          className="lg:h-72 md:block hidden"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        <motion.img
          src="/academia.svg"
          alt=""
          className="h-40 md:hidden block relative -left-4 md:left-0"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="lg:max-w-sm text-2xl text-left relative md:left-0 left-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Impulsamos el <br className="md:hidden block" /> aprendizaje y{" "}
          <br className="md:block hidden" /> desarrollo{" "}
          <br className="md:hidden block" /> de quienes{" "}
          <br className="md:block hidden" />
          usan <br className="md:hidden block" /> nuestra tecnología.
        </motion.p>

        <motion.a
          href="https://www.finneg.com/ar/site/academia/sobre-academia/"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <img
              src="/ui/conoce-mas.png"
              alt=""
              className="md:h-16 h-12 aspect-auto object-contain relative md:left-0 left-2"
            />
          </div>
        </motion.a>
      </section>

      {/* --- Sección Foto --- */}
      <section className="h-1/2 overflow-hidden relative z-40 flex items-center justify-center">
        <motion.img
          src="/equipo-finnegans.png"
          alt="Group of people looking up"
          className="w-full object-cover hidden md:block"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.img
          src="/mobile-academia.png"
          alt="Group of people looking up"
          className="w-full object-cover md:hidden"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </section>

      {/* --- Sección Frase en morado --- */}
      <section className="section-purple bg-[#8694ff] py-20 lg:py-26 relative z-40">
        <div className="container mx-auto px-12 text-left md:text-center md:px-0 ">
          <motion.div
            className="mx-auto max-w-7xl text-3xl poppins-regular leading-tight text-white md:text-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Creemos que no hay avance{" "}
            <div className="inline-flex relative max-w-max">
              <motion.span
                className="poppins-medium italic relative z-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                tecnológico
              </motion.span>
              <motion.img
                src="/ui/linea-tecnologico.png"
                alt=""
                className="object-contain w-full absolute z-10 -bottom-1 -scale-50 rotate-180"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>{" "}
            sin{" "}
            <div className="inline-flex relative max-w-max">
              <motion.span
                className="poppins-medium italic relative z-20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                humanidad
              </motion.span>
              <motion.img
                src="/ui/circulo-humanidad.png"
                alt=""
                className="object-contain w-full scale-[120%] absolute z-30"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            , <br />
            no hay fuerza de cambio posible sin todos adentro creando y <br />
            <div className="inline-flex relative max-w-max">
              <motion.span
                className="poppins-medium italic relative z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                transformando
              </motion.span>
              <motion.img
                src="/ui/linea-transformando.png"
                alt=""
                className="object-contain w-full absolute z-10 -bottom-2 -scale-[60%] md:-scale-[30%] rotate-180 right-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              />
            </div>{" "}
            el presente para
            <br className="block md:hidden" /> ir hacia un{" "}
            <br className="block md:hidden" />
            <span className="bg-[#6a77e0] md:bg-transparent">
              <div className="inline-flex relative max-w-max">
                <motion.span
                  className="poppins-medium italic relative z-20 "
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  futuro
                </motion.span>
                <motion.img
                  src="/ui/flecha-futuro.png"
                  alt=""
                  className="object-contain w-14 md:w-10 absolute z-10 md:-top-1 md:right-8 -right-42 bottom-1"
                  initial={{ opacity: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                />
              </div>{" "}
              mejor.
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
