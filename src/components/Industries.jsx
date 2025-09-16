"use client";

import { motion } from "framer-motion";

// --- Main Component ---
export default function App() {
  return (
    <section
      id="soluciones"
      className="w-full py-10 bg-[#020e33] overflow-x-hidden"
    >
      <div className="lg:max-w-7xl mx-auto lg:px-0 flex flex-col items-center justify-center gap-20 lg:grid lg:grid-cols-3 lg:gap-16">
        {/* Left Side: Title */}
        <motion.div
          className="relative z-40 text-left self-center lg:col-span-1 px-2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-light lg:text-7xl whitespace-nowrap poppins-medium">
            Tecnología <br /> que se{" "}
            <motion.span
              className="hand-font font-medium text-7xl text-[#4bc3fe] relative top-2 inline-block"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              viewport={{ once: true }}
            >
              adapta
            </motion.span>{" "}
            <br />a tu industria.
          </h3>
        </motion.div>

        {/* Right Side: Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            maxWidth: "800px",
            display: "block",
          }}
          className="lg:h-full w-screen max-w-screen max-h-screen object-cover col-span-2 lg:scale-110 lg:relative lg:left-10 scale-110"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          Your browser does not support the video tag.
          <source src="/industrias.mp4" type='video/mp4; codecs="hvc1"' />
        </motion.video>
      </div>
    </section>
  );
}
