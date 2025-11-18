import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readable text (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/40 to-slate-950/80" />

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 text-white/90 px-4 py-1 text-sm backdrop-blur border border-white/20">
          Trusted pharmaceutical distribution
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
          Reliable access to quality medicines across regions
        </h1>
        <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl">
          We source, store, and distribute pharmaceuticals with full cold‑chain
          compliance and transparent tracking.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#catalog" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-blue-900 font-semibold shadow hover:shadow-lg transition">
            Browse Catalog
          </a>
          <a href="#inquiry" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-blue-600/90 text-white font-semibold border border-white/20 hover:bg-blue-500 transition">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
