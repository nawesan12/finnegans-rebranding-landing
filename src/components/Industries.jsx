// --- Main Component ---
export default function App() {
  return (
    <div className="font-sans text-white relative z-20 flex py-20 items-center justify-center bg-[#020e33]">
      <section id="soluciones" className="w-full py-20 lg:py-0 bg-[#020e33]">
        <div className="lg:max-w-7xl mx-auto px-6 lg:px-0 flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-12">
          {/* Left Side: Title */}
          <div className="relative z-40 text-left self-center bg-[#020e33]">
            <h3 className="text-7xl font-light bg-[#020e33]">
              Tecnología <br /> que se{" "}
              <span className="hand-font font-medium text-8xl text-[#4bc3fe]">
                adapta
              </span>{" "}
              <br />a tu industria.
            </h3>
          </div>

          {/* Right Side: Image Carousel */}

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              height: "100%",
              maxWidth: "800px",
              display: "block",
            }}
          >
            <source src="industrias.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
}
