export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">We are a small studio with big ideas</h2>
            <p className="mt-4 text-white/70">
              Our team blends art, code, and sound to craft memorable moments. We prototype fast, iterate often, and ship games that respect your time.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• Player-first design</li>
              <li>• Cross-platform releases</li>
              <li>• Community-driven updates</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-violet-600/40 to-cyan-400/40 blur-2xl rounded-3xl"></div>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-xs text-white/70">Games shipped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500K</div>
                  <div className="text-xs text-white/70">Players reached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.7★</div>
                  <div className="text-xs text-white/70">Avg. rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
