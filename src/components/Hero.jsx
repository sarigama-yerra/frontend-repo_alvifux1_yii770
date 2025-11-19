import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
          <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-6 md:p-10 border border-white/10">
            <h1 className="text-white text-3xl md:text-6xl font-bold tracking-tight">
              Modern Transport Management, Simplified
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl">
              Run your logistics operation from one clean dashboard — quotes, shipments, fleet, and tracking.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#get-quote" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-400 transition">
                Get a Quote
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition">
                See Features
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
    </section>
  );
}

export default Hero;
