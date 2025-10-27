import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full" aria-label="Luxury Cover">
      <div className="h-[70vh] w-full relative overflow-hidden">
        <Spline
          scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Subtle overlay to enhance readability without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c61eb]/40 via-[#0c61eb]/30 to-[#0c61eb]/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 backdrop-blur text-white mb-5">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="text-xs tracking-wide uppercase">Limited drops • Hand-finished</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                Timeless Luxury Clothing and Accessories
              </h1>
              <p className="mt-4 text-white/80 text-lg">
                Crafted with precision and heritage. Discover pieces that define elegance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#new" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-[#0c61eb] font-semibold shadow-sm hover:shadow transition">
                  Shop New Arrivals
                </a>
                <a href="#sale" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition">
                  View Sale
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
