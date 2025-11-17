import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            Interactive • Gaming • Technology
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Level up your play with our indie worlds
          </h1>
          <p className="mt-5 text-white/80 text-lg">
            We build playful, immersive experiences across platforms. Explore our latest releases, upcoming projects, and the team behind the pixels.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#games" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition">Explore Games</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 font-semibold backdrop-blur border border-white/10 hover:bg-white/15 transition">About Us</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
    </section>
  )
}
