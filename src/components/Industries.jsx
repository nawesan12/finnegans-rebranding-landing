// --- Main Component ---
export default function App() {
  return (
    <section
      id="soluciones"
      className="w-full  py-10 bg-[#020e33] overflow-x-hidden"
    >
      <div className="lg:max-w-7xl mx-auto lg:px-0 flex flex-col items-center justify-center gap-20 lg:grid lg:grid-cols-3 lg:gap-16">
        {/* Left Side: Title */}
        <div className="relative z-40 text-left self-center bg-[#020e33] lg:col-span-1 px-2">
          <h3 className="text-6xl font-light bg-[#020e33] lg:text-7xl whitespace-nowrap poppins-medium">
            Tecnología <br /> que se{" "}
            <span className="hand-font font-medium text-8xl text-[#4bc3fe] relative top-2">
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
            maxWidth: "800px",
            display: "block",
          }}
          className="lg:h-full w-screen max-w-screen max-h-screen object-cover col-span-2 lg:scale-110 lg:relative lg:left-10 scale-110"
        >
          <source src="industrias.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
