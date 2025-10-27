import Spline from "@splinetool/react-spline";

const COLORS = {
  dark: "#0C61EB",
  light: "#38BDF8",
  gold: "#F5C542",
};

export default function Hero() {
  return (
    <section className="relative w-full" aria-label="Luxury Cover">
      <div className="h-[70vh] w-full relative overflow-hidden">
        <Spline
          scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${COLORS.dark}66 0%, ${COLORS.light}4D 40%, ${COLORS.dark}99 100%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 backdrop-blur text-white mb-5" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS.gold }} />
                <span className="text-xs tracking-wide uppercase">Limited drops • Hand-finished</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                Timeless Luxury Clothing and Accessories
              </h1>
              <p className="mt-4 text-white/85 text-lg">
                Crafted with precision and heritage. Discover pieces that define elegance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#new" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white font-semibold shadow-sm hover:shadow transition" style={{ color: COLORS.dark }}>
                  Shop New Arrivals
                </a>
                <a href="#sale" className="inline-flex items-center justify-center rounded-full px-6 py-3 border text-white hover:bg-white/10 transition" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
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
